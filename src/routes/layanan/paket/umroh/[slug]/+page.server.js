import db from '$lib/server/db.js';

export const load = async ({ params, locals, url, query }) => {
	let data;
	try {
		data = await db
			.collection('schedule')
			.aggregate([
				{ $match: { slug: params.slug } },
				{
					$project: {
						_id: 0
					}
				}
			])
			.toArray();
	} catch (error) {
		console.log(error);
	}
	if (data.length == 0) {
		error(404, 'Data not found');
	}

	const pipelinePenginapan = [
		{ $match: { slug: params.slug } },
		{ $sort: { check_in: 1 } },
		{
			$lookup: {
				from: 'hotel',
				localField: 'hotel_id',
				foreignField: 'hotel_id',
				as: 'hotels'
			}
		},
		{
			$unwind: {
				path: '$hotels',
				preserveNullAndEmptyArrays: true
			}
		},
		{
			$project: {
				_id: 0,
				'hotels._id': 0
			}
		}
	];

	const penginapan = await db.collection('penginapan').aggregate(pipelinePenginapan).toArray();
	console.log(penginapan);
	return {
		info_paket: data[0]
	};
};
