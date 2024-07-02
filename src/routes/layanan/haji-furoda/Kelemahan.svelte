<script>
	const kelemahanHajiFuroda = [
		"Tidak ada jaminan 100% mendapatkan Visa.",
		"Visa Haji biasanya diterbitkan paling akhir dibandingkan program haji lainnya (1 hingga 2 minggu sebelum tanggal 1 Dzulhijjah).",
		"Aturan dapat berubah dengan cepat dari pemerintah Arab Saudi.",
		"Waktu pelaksanaan yang tidak pasti.",
		"Biaya bisa berubah sewaktu-waktu, terutama menjelang proses sistem visa dibuka.",
		"Para Jamaah sangat disarankan untuk tidak mengadakan acara syukuran sebelum Visa Haji terbit atau issued."
	];
</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-white py-4 md:py-16"
>
	<div class="container mx-auto p-6 flex flex-col gap-6 md:gap-12 xl:px-24">
		<div class="text-black flex justify-center items-center flex-col gap-6 md:gap-8">
			<h3 class="text-start text-black text-xl md:text-3xl font-semibold leading-relaxed">Kelemahan Haji Furoda</h3>
		</div>
		<div class="px-5">
			<ul class="list-disc grid gap-3">
				{#each kelemahanHajiFuroda as item}
					<li class="md:text-lg">{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>