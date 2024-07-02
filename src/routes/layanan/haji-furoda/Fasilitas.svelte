<script>
	const fasilitasHajiFuroda = [
		"Hotel Mekkah (Bintang 5/Masyair)",
		"Hotel Madinah (Bintang 5/Masyair)",
		"Maktab VIP 111-116/Maktab Haji Furoda (Jarak dekat ke Jamarat tempat lontar jumrah)",
		"Visa Haji Furoda (Visa Haji Mujamalah Resmi terdaftar di sistem e-Hajj Online Arab Saudi dengan Tasreh/Izin untuk berhaji)",
		"Pesawat Garuda Indonesia/Saudi Airlines Direct Jeddah",
		"Kereta Cepat Makkah-Madinah",
		"Muthowif sesuai Sunnah Berpengalaman mendampingi jemaah program Haji Furoda",
		"Ziarah dan City Tour Mekkah, Madinah, Jeddah",
		"Makan Menu Indonesia 3x sehari",
		"Air Zamzam 5 liter",
		"Bagasi 23 kg x 2 *mengikuti aturan maskapai",
		"Bus AC selama perjalanan",
		"Manasik Haji",
		"Tiket Pesawat Saudi Airlines (Direct) PP",
		"Hotel Mekkah-Madinah Quad/sekamar 4 orang (bisa upgrade)",
		"Tenda ber-AC di Arafah dan Mina",
		"Handling Bandara Indonesia dan Arab Saudi In Out",
		"Manasik Haji 3X",
		"Buku Manasik Haji",
		"Free Tahalul"
	];
</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-gray-100 py-4 md:py-16"
>
	<div class="container mx-auto p-6 flex flex-col gap-6 md:gap-12 xl:px-24">
		<div class="text-black flex justify-center items-center flex-col gap-6 md:gap-8">
			<h3 class="text-start text-black text-xl md:text-3xl font-semibold leading-relaxed">Fasilitas Haji Furoda</h3>
		</div>
		<div class="px-5">
			<ul class="list-disc grid gap-3">
				{#each fasilitasHajiFuroda as item}
					<li class="md:text-lg">{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>