<script>
	import { goto } from '$app/navigation';

	export let umroh;
	import { formatRupiah } from '$lib/function/format.js';
	import FasilitasCard from '$lib/components/FasilitasCard.svelte';
	const Layanan = [
		{ name: 'Sesuai Syariat', text: '' },
		{ name: 'Izin Resmi', text: '' },
		{ name: 'Fasilitas', text: '' },
		{ name: 'Pembimbing', text: '' },
		{ name: 'Professional', text: '' },
		{ name: 'Proses Mudah', text: '' }
	];

</script>

<div
	class="hero relative flex items-center justify-center w-full min-h-screen bg-cover bg-center opensans bg-blue-50"
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
			<FasilitasCard name={item.name}/>
		{/each}
	</div>
	</div>


</div>
