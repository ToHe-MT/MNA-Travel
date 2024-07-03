<script>
	import { capitalizeWords, formatRupiah } from '$lib/function/format.js';
	import { goto } from '$app/navigation';

	export let idx = 0;
	export let paket = {
		title: 'Umroh Premium',
		base_price: 10_000_000,
		bonus: [
			{ title: 'Kereta Cepat' },
			{ title: 'City Tour Thaif' },
			{ title: 'Kunjungan Museum Wahyu' },
			{ title: 'Albaik Chicken' },
			{ title: 'Sertifikat Umroh' }
		],
		slug: 'asdb'
	};
	console.log(paket);
</script>

<svelte:head>
	<link href="/path/to/material-icons/iconfont/material-icons.css" rel="stylesheet">

</svelte:head>
<div
	class="w-full flex justify-center items-center"
>
	<div
		class="{idx===1?'':'bg-white'} w-full max-w-[500px] rounded-xl px-6 text-left drop-shadow" style="box-shadow: -1px -1px 11.1px 0px #0000000F;box-shadow: 2px 2px 18.9px 0px #0000000F;{idx==1?'background: linear-gradient(173.44deg, #3554D1 -1.76%, #1B2B6B 120.39%);\n':''}"

	>
		<div class="{idx===1?'py-12':'py-6'} flex gap-4 border-b-2 ">
			<div class="py-1 h-12 w-12">
				{#if idx==0 }
					<img src="/ketupat.svg" alt="">
					{:else if idx===1}
					<img src="/star.svg" alt="">
					{:else}
					<img src="/diamond.svg" alt="">
				{/if}
			</div>
			<div class="py-1">
				<h2 class="text-xl font-semibold {idx===1?'text-white':'text-gray-900'} syne">
					{capitalizeWords(paket.title)}
				</h2>
				<p class="{idx===1?'text-white':'text-gray-700'}">Lorem ipsum dolor sit amet consectetur. Mauris nisl nam.</p>
			</div>
		</div>

		<div class="py-4 flex flex-col gap-2">
			<p class="{idx===1?'text-white':'text-gray-400'} text-base">Harga mulai dari</p>
			<p class="{idx===1?'text-white':'text-blue-500'} text-3xl font-semibold py-2 syne">
				{formatRupiah(paket.base_price)}
			</p>
		</div>
		<div class="py-4">
			<ul class="text-left mb-4">
				{#if paket.bonus && paket.bonus.length > 0}
					{#each paket.bonus as item}
						<li class="flex items-center gap-4 py-1 {idx===1?'text-white':'text-gray-500'}">
														<span class="material-icons material-symbols-outlined {idx===1?'text-white':'text-blue-700'}" style="font-size: 32px">
															check_box
														</span>
							{item.title}
						</li>
					{/each}
				{/if}
			</ul>
			<div>
				<button
					on:click={() => {
													goto(`/layanan/paket/umroh/${paket.slug}`);
												}}
					class="bg-blue-500 w-full text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-300"
				>Detail Paket
				</button>
			</div>
		</div>
	</div>
</div>