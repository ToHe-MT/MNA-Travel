<script>
	import Button from '$lib/button.svelte';
	let items = [
		'Tiket Pesawat',
		'Akomodasi Hotel',
		'Visa Umroh',
		'Asuransi',
		'Handling & Lounge Bandara',
		'Bus Exclusive Saudi',
		'Free Zam-zam 5 Liter',
		'Manasik di Hotel Transit Bandara',
		'Receiver Audio untuk Jamaah',
		'Bonus City Tour Thaif',
		'Bonus Haramain Express',
		'Bonus Perlengkapan',
		'Bonus Museum Wahyu',
		'Bonus Albaik',
		'Bonus Ice Cream Uhud',
		'Bonus Merchandise',
		'Bonus Album Digital',
		'Bonus Fotografer',
		'Bonus Bus Daerah'
	];

	let firstColumn = items.slice(0, Math.ceil(items.length / 2));
	let secondColumn = items.slice(Math.ceil(items.length / 2));
</script>

<div
	class="hero relative flex items-center justify-center w-full min-h-screen bg-cover bg-center py-10 lg:py-0"
>
	<div class="container mx-auto p-4 rounded-md">
		<div class="grid grid-cols-10 px-8 sm:px-0">
			<div class="hidden xl:col-span-1 xl:block"></div>
			<div
				class=" col-span-10 sm:col-span-9 lg:col-span-5 xl:col-span-4 md:col-span-7 relative h-full sm:min-h-[400px]"
			>
				<img
					src="./fasilitas-1.svg"
					alt="foto"
					class="rounded-md sm:absolute w-full sm:w-auto top-0 left-0"
				/>
				<img
					src="./fasilitas-2.svg"
					alt="foto"
					class="hidden sm:block rounded-md absolute top-16 right-0"
				/>
			</div>
			<div class="hidden sm:col-span-1 md:col-span-3 lg:col-span-1 xl:col-span-1 sm:block"></div>
			<div
				class="text-left col-span-10 lg:col-span-4 flex content-center justify-center flex-col py-10 lg:py-0"
			>
				<h1 class="text-lg sm:text-2xl font-bold mb-4 tracking-wide">
					In Syaa Allah, Anda akan merasakan pengalaman ibadah yang tak terlupakan.
				</h1>
				<p class="text-gray-400 mb-0">
					Melaksanakan umroh sesuai dengan tuntunan Al-Qur'an adalah impian setiap muslim. MNA
					Travel hadir untuk membantu Anda mewujudkan niat suci ini dengan memberikan penawaran
					istimewa bagi para calon tamu-tamu Allah. Dengan bimbingan dari para ustadz berpengalaman
					dan pelayanan terbaik, kami memastikan setiap langkah Anda dalam menjalankan ibadah umroh
					sesuai syariat dan penuh keberkahan. Dengan penawaran biaya Umroh dan Haji yang
					terjangkau, MNA Travel juga berikan fasilitas yang akan memberikan kenyamanan beribadah.
					Segera Hubungi MNA Travel sekarang dan dapatkan penawaran spesial kami.
				</p>
				<!--*! ANGKA -->
				<!-- <div class="grid grid-cols-1 sm:grid-cols-2 py-5 sm:py-8 gap-3">
					<div>
						<ul class="flex flex-col gap-2">
							{#each firstColumn as item, idx}
								<li class="flex gap-4 items-center">
									<div class="bg-gray-100 rounded-full h-5 w-5 flex justify-center items-center">
										<span class="font-semibold text-xs">{idx + 1}</span>
									</div>
									{item}
								</li>
							{/each}
						</ul>
					</div>
					<div>
						<ul class="flex flex-col gap-2">
							{#each secondColumn as item, idx}
								<li class="flex gap-4 items-center">
									<div class="bg-gray-100 rounded-full h-5 w-5 flex justify-center items-center">
										<span class="font-semibold text-xs">{idx + firstColumn.length + 1}</span>
									</div>
									{item}
								</li>
							{/each}
						</ul>
					</div>
				</div> -->
				<div class="py-4">
					<a
						href="https://wa.me/6282240406568"
						target="_blank"
						class="contact flex justify-start align-middle"
					>
						<Button padding="px-6 py-4"
						className="rounded-xl border border-blue-700 text-blue-700 hover:bg-blue-100 text-lg"
							>Hubungi Kami</Button
						>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
