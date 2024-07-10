<script>
	let data = [
		{
			'title': 'Paket Haji',
			'text': '25-28 Hari'
		},
		{
			'title': 'Keberangkatan',
			'text': 'Akhir Dzulqodah 2025/1226H'
		},
		{
			'title': 'Biaya Haji',
			'text': '$19,500 (Silver) $23,500 (Gold) $26,500 (Platinum)'
		},
		{
			'title': 'Hotel Makkah',
			'text': 'Hilton Makkah Convention Hotel'
		},
		{
			'title': 'Hotel Madinah',
			'text': 'Madinah Hilton'
		},
		{
			'title': 'Apartment Transit',
			'text': 'Apartment Transit di dekat Mina'
		},
		{
			'title': 'Arafah',
			'text': 'Sesuai sistem Masyair'
		},
		{
			'title': 'Mina',
			'text': 'Maktab furoda on system & bisa upgrade Maktab VIP Zona 1 Haji Khusus'
		},
		{
			'title': 'Pesawat',
			'text': 'Qatar, Scoot (Silver) & Saudia / Garuda Direct Jakarta - Jeddah (Gold-Platinum)'
		}
	];

</script>

<div class="p-5 md:p-20 flex flex-col items-center justify-center md:gap-6 bg-blue-50/50 relative">
	<div class="grid gap-6 container mx-auto max-w-[860px]">
		<h1 class="font-semibold text-xl md:text-2xl">Biaya Haji Furoda Prioritas</h1>
		<p class="text-lg md:leading-8">Untuk tahun 2025, biaya Haji Furoda Prioritas yang kami tawarkan adalah sebesar
			19.000 USD, yang setara dengan
			sekitar 300 juta rupiah. Biaya ini mencakup fasilitas terbaik, seperti Visa Haji Resmi (terdaftar online dalam
			sistem Courtesy Hajj Saudi Arabia), penginapan di hotel bintang 5, Maktab Haji Furoda by System, hotel transit di
			Mina yang dekat dengan Jamarat, tenda ber-AC di Arafah, penerbangan langsung dengan Saudi Airlines ke Jeddah,
			kereta cepat antara Makkah dan Madinah, serta berbagai fasilitas lainnya.</p>
	</div>
	<div class="max-w-[860px] w-full mx-auto mt-10">
		<div class="flex items-center justify-center bg-white p-4 w-full">
			<h1 class="font-semibold text-xl">Haji Furoda Visa Mujamalah</h1>
		</div>
		<table class="table-auto w-full bg-white">
			<tbody>
			{#each data as item}
				<tr class="even:bg-white odd:bg-slate-50 grid px-4 py-3 gap-0 sm:py-0 sm:px-0 sm:gap-0 sm:table-row ">
					<td class="sm:py-3 sm:px-4 lg:pr-10 font-semibold w-full sm:w-auto block sm:table-cell">{item.title}</td>
					<td class="sm:py-3 sm:px-4 w-full sm:w-auto block sm:table-cell">{item.text}</td>
				</tr>
			{/each}
			<tr class="even:bg-white odd:bg-slate-50 grid px-4 py-3 gap-1 sm:py-0 sm:px-0 sm:gap-0 sm:table-row ">
				<td class="sm:py-3 sm:px-4 lg:pr-10 font-semibold w-full sm:w-auto block sm:table-cell">Kuota</td>
				<td class="sm:py-3 sm:px-4 w-full sm:w-auto block sm:table-cell font-semibold text-blue-700">Tersedia</td>
			</tr>
			</tbody>
		</table>
	</div>
	<img src="/haji-furoda-2-left.svg" alt="" class="absolute left-0 bottom-0 hidden lg:block -z-50">
	<img src="/haji-furoda-2-right.svg" alt="" class="absolute right-0 top-0 hidden xl:block -z-50">
</div>
