<script>
	import { goto } from '$app/navigation';
	import { currencyFormatter } from '$lib/function/format.js';

	export let paket;
	export let idx;
	export let umroh;
	export let link;
</script>

<div
	class="flex w-full {umroh.length === 2 && idx === 0 ? 'sm:justify-end' : ''}  {umroh.length ===
		2 && idx === 1
		? 'sm:justify-start'
		: ''}  justify-center items-center gap-4"
>
	<div class="card" data-label="9 Hari 8 Malam">
		<div
			class="cardcontent drop-shadow-lg relative w-full max-w-[450px] bg-white rounded-xl box-shadow px-10 text-center divide-y divide-dashed"
		>
			<div class="py-5 pt-20">
				<h2 class="text-xl font-semibold tracking-wider text-gray-900">{paket.title}</h2>
			</div>
			<div class="py-4 flex flex-col gap-2">
				<p class="text-gray-400 text-xs">Harga mulai dari</p>
				<p class="text-blue-600 text-2xl font-bold py-2">
					{currencyFormatter(paket.base_price)}
				</p>
			</div>
			<div class="py-4">
				<ul class="text-left">
					<li class="flex items-center gap-4 py-1 text-gray-500">
						<span class="material-icons material-symbols-outlined"> flight </span>
						Jakarta
					</li>
					<li class="flex items-center gap-4 py-1 text-gray-500">
						<span class="material-icons material-symbols-outlined"> event_note </span>
						28 Agustus 2024 - 5 September 2024
					</li>
				</ul>
			</div>
			<div class="py-4">
				<ul class="text-left mb-4">
					{#if paket.bonus && paket.bonus.length > 0}
						{#each paket.bonus as item}
							<li class="flex items-center gap-4 py-1 text-gray-500">
								<span class="material-icons material-symbols-outlined"> event_note </span>
								{item.title}
							</li>
						{/each}
					{/if}
				</ul>
				<div>
					<button
					on:click={goto(link+paket.slug)}
						class="bg-blue-700 w-full text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-300"
						>Detail Paket</button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	*::before,
	*::after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.card {
		width: 100%;
		max-width: 450px;
		border-radius: 1rem;
		background: white;
		position: relative;
	}

	.card::before {
		position: absolute;
		top: 2rem;
		right: -0.5rem;
		content: '';
		background: #5277df66;
		opacity: 80%;
		height: 28px;
		width: 28px;
		transform: rotate(45deg);
	}

	.card::after {
		position: absolute;
		content: attr(data-label);
		top: 11px;
		right: -14px;
		padding: 0.5rem;
		width: 10rem;
		background: #436cdb;
		color: white;
		text-align: center;
		box-shadow: 4px 4px 15px rgba(26, 35, 126, 0.2);
	}
</style>
