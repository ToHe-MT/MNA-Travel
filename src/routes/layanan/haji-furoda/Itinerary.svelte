<script>
	let schedule = [
		{
			'No': 1,
			'Hari': 'Kamis',
			'2025': '6 Juni',
			'1445 H': '29 Dzulqo\'dah',
			'Keterangan': 'Terbang Direct via Saudi Airlines/Garuda Indonesia menuju Jeddah International Airport Saudi Arabia *acuan maskapai menjelang keberangkatan'
		},
		{
			'No': 2,
			'Hari': 'Lorem Ipsum',
			'2025': 'Lorem Ipsum',
			'1445 H': 'Lorem Ipsum',
			'Keterangan': 'Lorem ipsum dolor sit amet consectetur. Orci euismod dapibus fusce donec. Porta molestie diam maecenas mattis risus et quam a urna.'
		},
		{
			'No': 3,
			'Hari': 'Lorem Ipsum',
			'2025': 'Lorem Ipsum',
			'1445 H': 'Lorem Ipsum',
			'Keterangan': 'Lorem ipsum dolor sit amet consectetur. Orci euismod dapibus fusce donec. Porta molestie diam maecenas mattis risus et quam a urna.'
		},
		{
			'No': 4,
			'Hari': 'Lorem Ipsum',
			'2025': 'Lorem Ipsum',
			'1445 H': 'Lorem Ipsum',
			'Keterangan': 'Lorem ipsum dolor sit amet consectetur. Orci euismod dapibus fusce donec. Porta molestie diam maecenas mattis risus et quam a urna.'
		},
		{
			'No': 5,
			'Hari': 'Lorem Ipsum',
			'2025': 'Lorem Ipsum',
			'1445 H': 'Lorem Ipsum',
			'Keterangan': 'Lorem ipsum dolor sit amet consectetur. Orci euismod dapibus fusce donec. Porta molestie diam maecenas mattis risus et quam a urna.'
		}
	];
</script>

<div class="p-5 md:p-20 flex flex-col items-center justify-center md:gap-6 bg-blue-50 -z-50 ">
	<div class="grid gap-6 container mx-auto bg-blue-50 xl:px-24">
		<h1 class="font-semibold text-xl md:text-2xl">Intinerary Haji Furoda</h1>
		<p class="text-lg md:leading-8">Berikut ini adalah draf itinerary Haji Furoda 2024 yang dapat Anda gunakan sebagai
			panduan untuk mengatur jadwal perjalanan, seperti cuti kerja atau perizinan lainnya. Semoga Allah memudahkan niat
			Anda semua untuk berhaji tahun ini. Aamiin.</p>
	</div>
	<div class="xl:px-24 mx-auto mt-6 container overflow-x-auto">
		<table class="min-w-full bg-white border border-gray-200 ">
			<thead>
			<tr>
				<th rowspan="2" class="py-2 px-4 border border-gray-200 text-left">No</th>
				<th rowspan="2" class="py-2 px-4 border border-gray-200 text-left">Hari</th>
				<th colspan="2" class="py-2 px-4 border border-gray-200 text-left"><div class="flex justify-center items-center"> Tanggal </div></th>
				<th rowspan="2" class="py-2 px-4 border border-gray-200 text-left min-w-[500px]">Keterangan</th>
			</tr>
			<tr>
				<th class="py-2 px-4 border border-gray-200 text-left"><div class="flex justify-center items-center">2025 </div></th>
				<th class="py-2 px-4 border border-gray-200 text-left"><div class="flex justify-center items-center">1445 H </div></th>
			</tr>
			</thead>
			<tbody>
			{#each schedule as item,idx}
			<tr>
				<td class="py-4 px-4 border border-gray-200 md:whitespace-nowrap">{idx+1}</td>
				<td class="py-4 px-4 border border-gray-200 md:whitespace-nowrap">{item.Hari}</td>
				<td class="py-4 px-4 border border-gray-200 md:whitespace-nowrap">{item['2025']}</td>
				<td class="py-4 px-4 border border-gray-200 md:whitespace-nowrap">{item['1445 H']}</td>
				<td class="py-4 px-4 border border-gray-200">{item.Keterangan}</td>
			</tr>
			{/each}
			</tbody>
		</table>
	</div>
	<img src="/haji-furoda-2-left.svg" alt="" class="absolute left-0 bottom-0 hidden lg:block -z-40">
	<img src="/haji-furoda-2-right.svg" alt="" class="absolute right-0 top-0 hidden xl:block -z-40">
</div>
