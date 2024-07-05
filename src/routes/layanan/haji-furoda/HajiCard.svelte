<script>
	import { formatDollar } from '$lib/function/format.js';
	import { goto } from '$app/navigation';

	export let idx = 0;
	export let paket = {
		title: 'Platinum',
		base_price: 26_500,
		bonus: [
			{ title: 'Hotel Mekkah Shofwa Tower/ Setaraf' },
			{ title: 'Apartemen Transit' },
			{ title: 'Maktab Mina VIP Zona 1' },
			{ title: 'Hotel Madinah Dallah Taiba/ Setaraf' },
			{ title: 'Flight By Saudia Airlines / Garuda Indonesia' }
		],
		slug: 'asdb'
	};
</script>

<div
	class="w-full flex justify-center items-center h-full"
>
	<div
		class="{idx===1?'':'bg-white'} w-full rounded-xl px-7 text-left h-full flex flex-col"
		style="box-shadow: -1px -1px 11.1px 0px #0000000F;box-shadow: 2px 2px 18.9px 0px #0000000F;{idx==1?'background: linear-gradient(173.44deg, #3554D1 -1.76%, #1B2B6B 120.39%);\n':''}"

	>
		<div>
			<div></div>
			<div class="py-6 flex gap-2 border-b-2 ">
				<div class="grid gap-2">
					<h2 class="text-2xl font-medium {idx===1?'text-white':'text-gray-900'}">
						{paket.title}
					</h2>
					<p class="{idx===1?'text-white':'text-gray-700'}">Lorem ipsum dolor sit amet consectetur. Mauris nisl nam.</p>
				</div>
			</div>

			<div class="py-4 flex flex-col gap-1">
				<p class="{idx===1?'text-white':'text-gray-800'} text-sm">Harga mulai dari</p>
				<div class="flex items-start gap-1">
					<p class="{idx===1?'text-white':'text-blue-700'} text-3xl font-semibold ">
						{formatDollar(paket.base_price)}
					</p>
					<p class="{idx===1?'text-white':'text-blue-700'} text-sm font-bold pt-1"> USD</p>
				</div>
			</div>
			<div class="py-4">
				<ul class="text-left mb-4 grid gap-2">
					{#if paket.bonus && paket.bonus.length > 0}
						{#each paket.bonus as item}
							<li class="flex items-center gap-4 py-1 {idx===1?'text-white':'text-gray-800'}">
								<div class="{idx===1?'bg-white':'bg-blue-700'} rounded p-2 w-5 h-5 flex justify-center items-center">
								<span
									class="material-icons material-symbols-outlined {idx===1?'text-blue-700':'text-white'}"
									style="font-size: 16px">
										check
								</span>
								</div>
								{item.title}
							</li>
						{/each}
					{/if}
				</ul>
			</div>
		</div>
		<div class="flex py-6 items-center justify-center h-full">
			<button
				disabled
				on:click={() => {

												}}
				class="{idx===1?'bg-white text-blue-900 hover:bg-blue-200':'bg-blue-700 text-white hover:bg-blue-600'} w-full  px-4 py-2 rounded-xl  transition duration-300 font-semibold"
			>Detail Paket
			</button>
		</div>
	</div>
</div>