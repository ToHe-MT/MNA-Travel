import db from '$lib/server/db.js';

export const load = async ({ url }) => {

	let umroh
	let blog
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
						uuid: 1
					}
				},
				{ $limit: 1 }
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
            content_html:0,
					}
				},
				{ $limit: 3 }
			])
			.toArray();
	} catch (error) {
		console.error('Error loading data:', error);
		throw error;
	}
	return { umroh, blog};
};
