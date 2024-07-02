<script>

	import HajiCard from './HajiCard.svelte';
	import ImageCard from './ImageCard.svelte';
</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-blue-50 py-10"
>
	<div class="container mx-auto p-6 flex flex-col gap-4 lg:gap-16 xl:px-24">
		<div class="text-black flex justify-start items-start flex-col gap-6">
			<h3 class="text-start text-black text-2xl md:text-4xl font-semibold">Haji Furoda Paket VIP 16 sd 17 Hari</h3>
			<h1 class="text-start text-lg">
				Alhamdulillah, pada musim Haji tahun 2025, kami berusaha untuk memfasilitasi program haji dengan durasi
				perjalanan yang lebih singkat, yaitu 16 hingga 17 hari. Program Haji Furoda VIP ini menawarkan pelayanan
				maksimal untuk para jamaah, termasuk Visa Haji Furoda resmi, penerbangan kelas bisnis, kereta cepat kelas
				bisnis, hotel di Makkah dan Madinah dengan pemandangan Kabah dan Masjid Nabawi. Saat puncak Haji, jamaah akan
				difasilitasi dengan Maktab Arofah VIP dan Maktab Mina VIP.
			</h1>
			<h1 class="text-start text-lg">
				Manfaatkan harta yang Allah titipkan kepada Anda dengan sebaik-baiknya, Insha Allah program Haji Furoda VIP ini
				bisa menjadi pilihan terbaik bagi Anda yang telah Allah mampukan. Semoga meraih keberkahan dengan Haji yang
				mabrur. Aamiin Allahumma Aamiin.
			</h1>
		</div>
		<div class="grid lg:grid-cols-2 gap-y-6 gap-x-10 xl:px-0">
			<HajiCard />
			<ImageCard />
		</div>
	</div>


</div>
