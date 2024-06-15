import db from '$lib/server/db.js';
import { formatRupiah } from '$lib/function/format.js';
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
		{ $match: { schedule_slug: params.slug } },
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

	const pipelineFlights = [
		{ $match: { schedule_id: params.slug } },
		{ $sort: { etd: 1 } },
		{
			$lookup: {
				from: 'airlines',
				localField: 'airline_id',
				foreignField: 'airline_id',
				as: 'airline'
			}
		},
		{
			$unwind: {
				path: '$airline',
				preserveNullAndEmptyArrays: true
			}
		},
		{
			$lookup: {
				from: 'airports',
				localField: 'from',
				foreignField: 'objectID',
				as: 'from'
			}
		},
		{
			$unwind: {
				path: '$from',
				preserveNullAndEmptyArrays: true
			}
		},
		{
			$lookup: {
				from: 'airports',
				localField: 'to',
				foreignField: 'objectID',
				as: 'to'
			}
		},
		{
			$unwind: {
				path: '$to',
				preserveNullAndEmptyArrays: true
			}
		},
		{
			$project: {
				_id: 0,
				'airline._id': 0,
				'from._id': 0,
				'to._id': 0
			}
		}
	];

	const flights = await db.collection('flights').aggregate(pipelineFlights).toArray();
	
	return {
		info_paket: data[0],
		flights,
		penginapan
	};
};

export const actions = {
	default: async ({ request, params }) => {
		const infos = await db
			.collection('schedule')
			.find({
				slug: params.slug
			})
			.limit(1)
			.toArray();
		if (infos.length == 0) {
			return error(404, 'Kendaraan tidak ditemukan');
		}
		const info = infos[0];

		const data = await request.formData();

		console.log(data);
		const newOrder = {
			slug: params.slug,

			jumlah_pax_quad: data.get('jumlah_pax_quad'),
			jumlah_pax_triple: data.get('jumlah_pax_triple'),
			jumlah_pax_double: data.get('jumlah_pax_double'),
			whatsapp: data.get('no_whatsapp'),
			nama_pemesan: data.get('nama_pemesan'),
			total_pax: data.get('total_pax'),
			total_harga: data.get('total_harga'),
			jenis_kamar: data.get('jenis_kamar'),
			product_type: info['type'],
			product_name: info['title'],
			product_id: info['uuid'],
			suggested_price: parseInt(info['price'])
		};

		let text_jenis_kamar;
		if (newOrder.jenis_kamar === 'quad') {
			text_jenis_kamar = `*Jenis Kamar*: ${newOrder.jenis_kamar}

*Pax Quad Room*: ${newOrder.jumlah_pax_quad}`;
		} else if (newOrder.jenis_kamar === 'triple') {
			text_jenis_kamar = `*Jenis Kamar*: ${newOrder.jenis_kamar}

*Pax Triple Room*: ${newOrder.jumlah_pax_triple}`;
		} else if (newOrder.jenis_kamar === 'double') {
			text_jenis_kamar = `*Jenis Kamar*: ${newOrder.jenis_kamar}

*Pax Double Room*: ${newOrder.jumlah_pax_double}`;
		} else if (newOrder.jenis_kamar === 'custom') {
			text_jenis_kamar = `*Jenis Kamar*: ${newOrder.jenis_kamar}

*Pax Quad Room*: ${newOrder.jumlah_pax_quad}
*Pax Triple Room*: ${newOrder.jumlah_pax_triple}
*Pax Double Room*: ${newOrder.jumlah_pax_double}`;
		}
		const text = `*Pemesanan Baru*

*Paket*: ${info['title']}
*Total Pax*: ${newOrder.total_pax}

${text_jenis_kamar}

*Total Harga*: ${formatRupiah(newOrder.total_harga)}

*Nama*: ${newOrder.nama_pemesan}
*Whatsapp*: ${newOrder.whatsapp}`;

		const url = `https://wa.me/6282240406568?text=${encodeURI(text)}`;
		return { url };
	}
};
