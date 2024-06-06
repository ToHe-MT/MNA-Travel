<script>
	import Button from '$lib/button.svelte';

	const heroText1 = 'Wujudkan Impian Ibadah Anda dengan Layanan Profesional dan Fasilitas Unggulan';
	const heroText2 =
		'MNA Travel mengakomodir kebutuhan umat mulai dari Umroh, Haji, hingga Penyewaan transportasi pariwisata.';
</script>

<div class="hero relative flex items-center justify-center w-full h-screen bg-cover bg-center">
	<div class="container mx-auto p-4 rounded-md">
		<div class="grid grid-cols-10">
			<div class="block lg:col-span-1 lg:block col-span-10 min-h-16"></div>
			
			<div
				class="text-left col-span-10 lg:col-span-4 flex content-center justify-center flex-col py-10 lg:py-0"
			>
				<p class="text-blue-600 mb-2 font-medium tracking-wider">Pengalaman Kami</p>
				<h1 class="text-2xl sm:text-4xl font-bold mb-4 tracking-wide">
					Pelayanan Terbaik Untuk Anda
				</h1>
				<p class="text-gray-600 mb-6">
					Lorem ipsum dolor sit amet consectetur. Orci quam in nulla cursus sed eros laoreet
					rhoncus. Netus velit lacus id diam tortor.
				</p>
				<div>
					<Button className="rounded-xl border bg-blue-700 hover:bg-blue-700 text-white"
						>Hubungi Kami</Button
					>
				</div>
			</div>
			<div class="hidden lg:col-span-1 lg:block"></div>
			<div class="lg:col-span-4 col-span-10 sm:relative sm:min-h-[350px] order-first lg:order-last">
				<img
					src="./Layanan.svg"
					alt="foto"
					class="rounded-md sm:absolute top-0 right-0 w-full sm:w-auto"
				/>
				<div
					class="hidden sm:flex sm:absolute bottom-0 left-0 bg-blue-100 p-2 rounded-xl shadow-lg flex justify-between content-center gap-px-4 lg:gap-x-12 px-4 md:px-16 sm:w-auto"
				>
					<div class="text-center flex gap-1 flex-col p-3">
						<p class="text-base md:text-lg font-bold">9</p>
						<p class="text-gray-600">Tahun</p>
					</div>
					<div class="text-center flex gap-1 flex-col p-3">
						<p class="text-base md:text-lg font-bold">50.000+</p>
						<p class="text-gray-600">Jamaah</p>
					</div>
					<div class="text-center flex gap-1 flex-col p-3">
						<p class="text-base md:text-lg font-bold">700+</p>
						<p class="text-gray-600">Mitra</p>
					</div>
				</div>
			</div>
			<div class="hidden lg:col-span-1 lg:block lg:order-last"></div>
		</div>
	</div>
</div>

<style>
	
</style>
