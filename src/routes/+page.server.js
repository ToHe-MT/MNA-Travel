import db from '$lib/server/db.js';

export const load = async ({ url }) => {

	let umroh;
	let blog;
	try {
		const filter = {
			jenis_paket: 'umroh',
			status: 'active'
		};

		const umrohCollection = db.collection('schedule');
		umroh = await umrohCollection
			.aggregate([
				{ $match: filter },
				{
					$project: {
						_id: 0,
						title: 1,
						bonus: 1,
						base_price: 1,
						slug: 1,
						uuid: 1,
						level_paket: 1,
						departure_date: 1,
						return_date: 1,
						base_type: 1,
						type_flight:1,
					}
				},
				{ $limit: 3 }
			])
			.toArray();
	} catch (error) {
		console.error('Error loading data:', error);
		throw error;
	}
	try {
		const filter = {
			status: 'public'
		};

		const blogCollection = db.collection('blog');
		blog = await blogCollection
			.aggregate([
				{ $match: filter },
				{
					$project: {
						_id: 0,
						content_html: 0
					}
				},
				{ $limit: 3 }
			])
			.toArray();
	} catch (error) {
		console.error('Error loading data:', error);
		throw error;
	}
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
	// console.log(umroh);
	return { umroh, blog };
};
