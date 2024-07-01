<script>
	import Button from '$lib/button.svelte';
</script>

<div class="hero relative flex items-start justify-center w-full bg-cover bg-center">

	<div class="grid grid-cols-3 opensans">
		<div
			class="text-left flex content-center justify-center flex-col col-span-3 md:col-span-2 px-4 md:px-12 py-6 gap-3"
		>
			<p class="text-blue-600 mb-2 font-medium tracking-wider text-base">Pengalaman Kami</p>
			<h1 class="text-base sm:text-xl font-bold syne">
				Fasilitator Para Tamu Allah yang Mulia
			</h1>
			<!-- <p class="text-gray-700">Menyediakan layanan Umroh yang profesional, aman, dan nyaman bagi seluruh jamaah
			</p> -->
			<p class="text-gray-500 max-w-[900px]"	>
				Jumlah penduduk muslim di Indonesia yang mencapai 200 juta menjadi amanah besar bagi kami sebagai fasilitator para tamu Allah yang mulia. Meskipun banyak penyelenggara Haji Khusus dan Umrah yang juga berkomitmen untuk memberikan pelayanan terbaik bagi seluruh jamaahnya, MNA Travel hadir bersama mitra-mitra terbaik untuk memberikan solusi layanan penyelenggaraan Haji Khusus dan Umrah bagi seluruh kaum muslimin dengan niat tulus sebagai fasilitator terbaik bagi para tamu Allah yang mulia. Semoga ini menjadi ladang pahala bagi kami semua. Aamiin Allahumma Aamiin.
			</p>

			<a
				href="/tentang-kami"
				target="_blank"
				class="contact flex justify-start"
			>
				<Button className="rounded-xl border bg-blue-700 hover:bg-blue-700 text-white flex gap-1 items-center"
				> Profil Kami <span class="material-icons material-symbols-outlined" style="font-size: 20px; font-weight: 100"> arrow_right_alt </span>
				</Button
				>
			</a>
		</div>
		<div
			class="flex justify-start items-start sm:min-h-[350px] order-first lg:order-last col-span-3 md:col-span-1"
		>
			<img src="./tentang-1.svg" alt="foto" class="w-full h-auto" />
		</div>
	</div>
</div>

<style>
</style>

