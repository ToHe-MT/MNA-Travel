import db from '$lib/server/db.js';

export const load = async ({ url, params }) => {
	try {
		// Correct the filter to use params.slug
		const filter = {
			slug: params.slug // Assuming the correct param is `slug`
		};
		const blogCollection = db.collection('blog');
		const blog = await blogCollection
			.aggregate([
				{ $match: filter },
				{
					$project: {
						_id: 0
					}
				},
				{ $limit: 1 } // Limit to 1 document to ensure you get a single result
			])
			.toArray();

		if (blog.length > 0) {
			return { blog: blog[0] }; // Return the first element of the array if it exists
		} else {
			console.log('No blog found for the given slug.');
			return { blog: [] }; // Return null if no blog is found
		}
	} catch (error) {
		console.error('Error loading data:', error);
		throw error;
	}
};
