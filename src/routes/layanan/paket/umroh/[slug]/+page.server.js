import db from '$lib/server/db.js';

export const load = async ({ params, locals, url, query }) => {
	let data;
	try {
		data = await db
			.collection('schedule')
			.aggregate([
				{ $match: { slug: params.slug } },
				// { $unwind: { path: '$rooms', preserveNullAndEmptyArrays: true } },
				// {
				// 	$lookup: {
				// 		from: 'jamaah',
				// 		let: { participants: { $ifNull: ['$rooms.participants', []] } },
				// 		pipeline: [
				// 			{ $match: { $expr: { $in: ['$jamaah_id', '$$participants'] } } },
				// 			{ $project: { _id: 0 } }
				// 		],
				// 		as: 'room_participants'
				// 	}
				// },
				// {
				// 	$group: {
				// 		_id: '$_id',
				// 		doc: { $first: '$$ROOT' },
				// 		rooms: {
				// 			$push: {
				// 				room_type: '$rooms.room_type',
				// 				room_id: '$rooms.room_id',
				// 				created_at: '$rooms.created_at',
				// 				kapasitas: '$rooms.kapasitas',
				// 				participants: '$room_participants',
				// 				room_name: '$rooms.room_name'
				// 			}
				// 		}
				// 	}
				// },
				// {
				// 	$replaceRoot: {
				// 		newRoot: {
				// 			$mergeObjects: ['$$ROOT.doc', { rooms: { $ifNull: ['$rooms', []] } }]
				// 		}
				// 	}
				// },
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

	return {
		info_paket: data[0]
	};
};
