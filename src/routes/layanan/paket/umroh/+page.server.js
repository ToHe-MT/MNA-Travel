import db from '$lib/server/db.js';

export const load = async ({ url }) => {
	try {
		const filter = {
			jenis_paket: 'umroh',
			status: 'active'
		};

		if (url.searchParams.get('level_paket')) {
			filter.level_paket = url.searchParams.get('level_paket');
		}

		if (url.searchParams.get('bandara')) {
			let airport = await db
				.collection('airports')
				.find({ city: url.searchParams.get('bandara') })
				.toArray();
			if (airport[0] && airport[0].objectID) {
				filter.departure_from = airport[0].objectID;
			}
		}

		const sortOption = url.searchParams.get('sort');
		let sort = {};
		if (sortOption === 'Terbaru') {
			sort = { created_at: -1 };
		} else if (sortOption === 'Termurah') {
			sort = { base_price: 1 };
		} else if (sortOption === 'Termahal') {
			sort = { base_price: -1 };
		} else if (sortOption === 'Berangkat Terdekat') {
			sort = { departure_date: 1 };
		} else if (sortOption === 'Berangkat Terlama') {
			sort = { departure_date: -1 };
		}

		if (url.searchParams.get('rangeHarga')) {
			const range = url.searchParams.get('rangeHarga');
			if (range === 'Dibawah 30jt') {
				filter.base_price = { $lt: 30000000 };
			} else if (range === '30 Jt - 40 Jt') {
				filter.base_price = { $gte: 30000000, $lte: 40000000 };
			}
		}

		if (url.searchParams.get('search') && url.searchParams.get('search') !== 'undefined') {
			filter.title = new RegExp(url.searchParams.get('search'), 'i');
		}

		const page = url.searchParams.get('page') ? url.searchParams.get('page') : 1;

		const limit = 1;
		const skip = (parseInt(page) - 1) * limit;

		const umrohCollection = db.collection('schedule');

		// Build the aggregation pipeline
		const pipeline = [
			{ $match: filter },
			{
				$project: {
					_id: 0,
					title: 1,
					bonus: 1,
					base_price: 1,
					slug: 1,
					uuid: 1
				}
			},
			{ $skip: skip },
			{ $limit: limit }
		];

		// Conditionally add the $sort stage if sort is not empty
		if (Object.keys(sort).length > 0) {
			pipeline.splice(1, 0, { $sort: sort });
		}

		const umroh = await umrohCollection.aggregate(pipeline).toArray();

		const totalData = await umrohCollection.aggregate([{ $match: filter }]).toArray();
		try {
			for (const paket of umroh) {
				const penginapan = db.collection('penginapan');
				const hotels = await penginapan
					.aggregate(
						[
							{
								$match: {
									schedule_id: paket.uuid
								}
							},
							{
								$lookup: {
									from: 'hotel',
									localField: 'hotel_id',
									foreignField: 'hotel_id',
									as: 'hotels'
								}
							},
							{
								$unwind: '$hotels'
							},
							{
								$project: {
									_id: 0,
									hotels: {
										name: 1,
										city: 1,
										country: 1,
										link: 1,
										address: 1,
										star: 1
									}
								}
							}
						])
					.toArray();
				paket.hotels = hotels;
			}
		} catch (e) {
			console.log(e);
		}
		try {
			for (const paket of umroh) {
				const flight = db.collection('flights');
				const airlines = await flight
					.aggregate(

						[
							{
								"$match": {
									"schedule_id": "KPUR6OBBF"
								}
							},
							{
								"$lookup": {
									"from": "airlines",
									"localField": "airline_id",
									"foreignField": "airline_id",
									"as": "airline_data"
								}
							},
							{
								"$unwind": "$airline_data"
							},
							{
								"$project": {
									"airline_label": "$airline_data.label",
									"_id": 0
								}
							}
						]
					)
					.toArray();
				paket.airlines = airlines;
			}
		} catch (e) {
			console.log(e);
		}
		return {
			umroh,
			limit,
			totalData: totalData.length,
			totalPages: Math.ceil(totalData.length / limit),
			page
		};
	} catch (error) {
		console.error('Error loading data:', error);
		throw error;
	}
};
