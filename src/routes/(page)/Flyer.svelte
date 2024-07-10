<script>
</script>

<div
	class="hero relative flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-white py-20 sm:py-10 md:py-10 lg:py-5"
>
	<div class="container mx-auto p-6">
		<div class="py-10">
			<h1 class="text-center text-2xl md:text-4xl font-semibold tracking-wide mb-2 text-black">
				Paket Umroh Terbaik
			</h1>
			<h3 class="text-center text-lg md:text-xl md-2 md:mb-6 text-blue-700">
				Berikut adalah paket perjalanan umroh kami terbaik untuk para tamu-tamu Allah
			</h3>
		</div>
		<div
			class="grid
				grid-cols-1
				sm:grid-cols-1
				md:grid-cols-2
				lg:grid-cols-3
				gap-12"
		>
			{#each { length: 6 } as item}
				<a href="/layanan/paket/umroh/umroh-premium-+-kereta-cepat-KPUR6OBBF" class="grid gap-2">
					<img src="./Sementara.jpg" alt="" />
					<h1 class="text-center font-medium">Paket Umroh Agustus 2024, Biaya Realistis, 100% Berangkat</h1>
				</a>
			{/each}
		</div>
	</div>
</div>
