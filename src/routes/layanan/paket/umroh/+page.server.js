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
			filter.type_category = url.searchParams.get('bandara');
		}

		if (url.searchParams.get('category')) {
			filter.type_category = url.searchParams.get('category');
		}


		const umrohCollection = db.collection('schedule');
		const umroh = await umrohCollection
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

		return { umroh };
	} catch (error) {
		console.error('Error loading data:', error);
		throw error;
	}
};
