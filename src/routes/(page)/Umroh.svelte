<script>
	import { goto } from '$app/navigation';

	export let umroh;
	import { formatRupiah, capitalizeWords } from '$lib/function/format.js';
	import UmrohCard from './UmrohCard.svelte';
	import UmrohCardNew from './UmrohCardNew.svelte';
</script>

<div
	class="hero relative flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-white opensans"
>
	<div class="container mx-auto p-6 py-20">
		<div class="text-black flex justify-center items-center flex-col">
			<h3 class="text-center text-blue-700 text-lg md:text-xl md-2 md:mb-2 syne font-semibold">Paket Umroh</h3>
			<h1 class="text-center text-lg md:text-2xl tracking-wide mb-8 max-w-[1000px]">
				Paket Umroh Agustus - November 2024
			</h1>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-1 {umroh && umroh.length ? umroh.length : '2'}
			 lg:grid-cols-3 {umroh && umroh.length ? umroh.length : '3'} gap-x-6 gap-y-6 md:py-4 items-center"
		>
			{#if umroh && umroh.length > 0}
				{#each umroh as paket,idx}
						<UmrohCardNew paket={paket} {idx}/>
				{/each}
			{/if}
		</div>
	</div>
</div>
