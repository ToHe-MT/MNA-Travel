<script>
	import { goto } from '$app/navigation';

	export let umroh;
	import { formatRupiah } from '$lib/function/format.js';
	import FasilitasCard from '$lib/components/FasilitasCard.svelte';
	const Layanan = [
		{ name: 'Sesuai Syariat', text: 'Kami berkomitmen memberikan tuntunan ibadah, insya Allah, sesuai Al-Quran dan As-Sunnah, sehingga kemurnian ibadah terjaga dan keutamaan beribadah dapat tercapai dengan baik.' },
		{ name: 'Izin Resmi', text: 'Travel Haji dan Umroh dengan Izin Resmi yang pastinya memberikan keamanan dan kenyamanan selama beribadah.' },
		{ name: 'Fasilitas', text: 'Kami selalu memberikan fasilitas dan layanan terbaik, menjadwalkan penerbangan dengan tepat waktu, menyediakan penerbangan terbaik, serta paket yang sesuai dengan keinginan jamaah.' },
		{ name: 'Pembimbing', text: 'Menghadirkan pembimbing profesional yang terikat dengan komitmen kuat perusahaan untuk mewujudkan pelayanan ibadah yang optimal kepada seluruh jemaah.' },
		{ name: 'Professional', text: 'MNA Travel berkomitmen untuk menyediakan layanan perjalanan wisata religi terbaik dan terpercaya, dengan semangat tulus dan niat yang ikhlas, mengarahkan setiap langkah dalam merencanakan perjalanan ibadah Haji dan Umrah.' },
		{ name: 'Proses Mudah', text: 'Pelayanan yang cepat dan profesional, kami sediakan untuk memudahkan Anda berangkat dengan keberkahan dan kesempurnaan.' }
	];

</script>

<div
	class="hero relative flex items-center justify-center w-full min-h-screen bg-cover bg-center opensans bg-blue-50 py-10"
>
	<div class="container mx-auto p-6">
		<div class="text-black flex justify-center items-center flex-col">
			<h3 class="text-center text-blue-700 text-lg md:text-lg md-2 md:mb-2 syne font-semibold">Layanan Kami</h3>
			<h1 class="text-center text-lg md:text-xl tracking-wider mb-8 max-w-[600px]">
				Lorem ipsum dolor sit amet consectetur. Dictumst cras sed dui eu.
			</h1>
		</div>
	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each Layanan as item}
			<FasilitasCard name={item.name} text={item.text}/>
		{/each}
	</div>
	</div>


</div>
