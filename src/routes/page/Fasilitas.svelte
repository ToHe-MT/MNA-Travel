<script>
	import Button from '$lib/button.svelte';

	const heroText1 = 'Wujudkan Impian Ibadah Anda dengan Layanan Profesional dan Fasilitas Unggulan';
	const heroText2 =
		'MNA Travel mengakomodir kebutuhan umat mulai dari Umroh, Haji, hingga Penyewaan transportasi pariwisata.';
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
				<h1 class="text-2xl sm:text-4xl font-bold mb-4 tracking-wide">
					Fasilitas Eksklusif untuk Kenyamanan Anda
				</h1>
				<p class="text-gray-400 mb-0">
					Lorem ipsum dolor sit amet consectetur. Orci quam in nulla cursus sed eros laoreet
					rhoncus. Netus velit lacus id diam tortor.
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-2 py-5 sm:py-8 gap-3">
					<div>
						<ul class="flex flex-col gap-3">
							<li class="flex gap-4 items-center">
								<div class="bg-gray-100 rounded-full h-6 w-6 flex justify-center items-center">
									<span class="font-semibold text-sm">1</span>
								</div>
								Konsumsi
							</li>
							<li class="flex gap-4 items-center">
								<div class="bg-gray-100 rounded-full h-6 w-6 flex justify-center items-center">
									<span class="font-semibold text-sm">2</span>
								</div>
								Visa Haji & Umroh
							</li>
							<li class="flex gap-4 items-center">
								<div class="bg-gray-100 rounded-full h-6 w-6 flex justify-center items-center">
									<span class="font-semibold text-sm">3</span>
								</div>
								Perlengkapan Umroh
							</li>
							<li class="flex gap-4 items-center">
								<div class="bg-gray-100 rounded-full h-6 w-6 flex justify-center items-center">
									<span class="font-semibold text-sm">4</span>
								</div>
								TL / Mutawwif
							</li>
							<li class="flex gap-4 items-center">
								<div class="bg-gray-100 rounded-full h-6 w-6 flex justify-center items-center">
									<span class="font-semibold text-sm">5</span>
								</div>
								Hotel Penginapan
							</li>
						</ul>
					</div>
					<div>
						<ul class="flex flex-col gap-3">
							<li class="flex gap-4 items-center">
								<div class="bg-gray-100 rounded-full h-6 w-6 flex justify-center items-center">
									<span class="font-semibold text-sm">6</span>
								</div>
								Transportasi
							</li>
							<li class="flex gap-4 items-center">
								<div class="bg-gray-100 rounded-full h-6 w-6 flex justify-center items-center">
									<span class="font-semibold text-sm">7</span>
								</div>
								Tim Professional Saudi
							</li>
							<li class="flex gap-4 items-center">
								<div class="bg-gray-100 rounded-full h-6 w-6 flex justify-center items-center">
									<span class="font-semibold text-sm">8</span>
								</div>
								Tiket Pesawat
							</li>
							<li class="flex gap-4 items-center">
								<div class="bg-gray-100 rounded-full h-6 w-6 flex justify-center items-center">
									<span class="font-semibold text-sm">9</span>
								</div>
								Dokumentasi
							</li>
						</ul>
					</div>
				</div>
				<div>
					<Button className="rounded-xl border border-blue-700 text-blue-700 hover:bg-blue-100"
						>Hubungi Kami</Button
					>
				</div>
			</div>
		</div>
	</div>
</div>
