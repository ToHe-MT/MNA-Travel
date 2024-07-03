<script>
	const visi = [
		"Menjadi pelayanan terdepan dan utama dalam jasa wisata khususnya ibadah haji dan umroh.",
		"Menjadi mitra terpercaya dan terdepan bagi jamaah umroh dalam meraih pengalaman spiritual yang mendalam, memberikan layanan yang berkualitas, serta menyebarkan pesan perdamaian dan kasih sayang di seluruh penjuru dunia melalui perjalanan yang penuh berkah."
	];

	const misi = [
		"Menyediakan produk layanan haji dan umroh serta wisata yang variatif dan menarik.",
		"Menjadi perusahaan umroh haji travel yang paling dipercaya dengan menjaga integritas dan Amanah.",
		"Mempertahankan nilai dan kualitas pelayananan secara optimal dan berkualitas."
	];

</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-white py-4 md:py-16"
>
	<div class="container mx-auto p-6 flex flex-col gap-6 md:gap-12 xl:px-24">
		<div class="text-black flex justify-start items-start flex-col gap-6 md:gap-8">
			<h3 class="text-start text-black text-xl md:text-3xl font-medium leading-relaxed">Visi Misi</h3>
		</div>
		<div class="grid gap-4">
			<h1 class="text-blue-600 text-lg font-medium"> Visi </h1>
			<ul class="list-disc grid gap-3 px-5">
				{#each visi as item}
					<li class="md:text-lg">{item}</li>
				{/each}
			</ul>
		</div>
		<div class="grid gap-4">
			<h1 class="text-blue-600 text-lg font-medium"> Misi </h1>
			<ul class="list-disc grid gap-3 px-5">
				{#each misi as item}
					<li class="md:text-lg">{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>