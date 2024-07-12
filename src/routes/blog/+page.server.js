import db from '$lib/server/db.js';

export const load = async ({ url }) => {
	try {
		const filter = {
			status: 'public'
		};

		const blogCollection = db.collection('blog');
		const blog = await blogCollection
			.aggregate([
				{ $match: filter },
				{
					$project: {
						_id: 0, content_html:0,
					}
				},
				{
					$sort: {
						created_at: -1
					}
				}
				// { $limit: 1 }
			])
			.toArray();

		return { blog };
	} catch (error) {
		console.error('Error loading data:', error);
		throw error;
	}
};
