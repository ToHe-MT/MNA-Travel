import db from '$lib/server/db.js';

export const load = async ({ url }) => {
	try {
		const filter = {
			status: 'public'
		};

		// if (url.searchParams.get('level_paket')) {
		// 	filter.level_paket = url.searchParams.get('level_paket');
		// }

		// if (url.searchParams.get('bandara')) {
		// 	filter.type_category = url.searchParams.get('bandara');
		// }

		// if (url.searchParams.get('category')) {
		// 	filter.type_category = url.searchParams.get('category');
		// }

		const blogCollection = db.collection('blog');
		const blog = await blogCollection
			.aggregate([
				{ $match: filter },
				{
					$project: {
						_id: 0,
                        content_html:0,
					}
				},
				// { $limit: 1 }
			])
			.toArray();

		return { blog };
	} catch (error) {
		console.error('Error loading data:', error);
		throw error;
	}
};
