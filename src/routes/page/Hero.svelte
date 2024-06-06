<script>
	const heroText1 = 'Wujudkan Impian Ibadah Anda dengan Layanan Profesional dan Fasilitas Unggulan';
	const heroText2 =
		'MNA Travel mengakomodir kebutuhan umat mulai dari Umroh, Haji, hingga Penyewaan transportasi pariwisata.';
</script>

<div
	class="hero relative flex flex-col items-center justify-center w-full h-screen bg-cover bg-center" style="background-image: url('./hero.svg');"
>
	<div class="flex lg:hidden absolute top-32 z-20">
		<img src="./logo-white.png" alt="" class="max-h-12" />
	</div>
	<div class="absolute inset-0 bg-black/50 z-10"></div>
	<div class="absolute inset-0 bg-blue-700/10 z-10"></div>
	<div
		class="text-center text-white z-20 container lg:px-40 flex flex-col gap-5 md:gap-10 px-8 md:px-0"
	>
		<h1 class="text-2xl sm:text-3xl lg:text-4xl font-semibold lg:tracking-wide">{heroText1}</h1>
		<h2 class="text-lg sm:text-xl lg:text-xl font-medium lg:px-16 lg:tracking-widest">
			{heroText2}
		</h2>
		<button class="bg-blue-700 px-4 py-4 m-auto rounded-xl font-medium tracking-wide">
			Hubungi Kami
		</button>
	</div>
</div>
