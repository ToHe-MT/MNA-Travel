<script>
	import Button from '$lib/button.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';

	function handleMenuSort(event) {
		Sort = event.detail.menu;
		updateURLParams();
	}
	let Sort = 'Sort';
	let ListSort = [
		'Sort',
		'Terbaru',
		'Termurah',
		'Termahal',
		'Berangkat Terdekat',
		'Berangkat Terlama'
	];

	import { formatDateToIndonesian } from '$lib/function/format.js';

	export let data;
	console.log(data.blog);
</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-white pt-32"
>
	<div class="container mx-auto p-6 flex flex-col gap-8">
		<div class="text-black">
			<h3 class="text-center text-lg md:text-xl md-2 md:mb-6 text-blue-700">Blog</h3>
			<h1 class="text-center text-2xl md:text-4xl font-semibold tracking-wide mb-2 text-black">
				Artikel-Artikel MNA Travel
			</h1>
		</div>
		<!-- <div class="flex justify-between container">
			<div>
				Menampilkan <span class="font-bold underline underline-offset-2"> 2 </span> dari
				<span class="font-bold"> 2 </span> Data
			</div>
			<div>
				<Dropdown
					on:menuSelected={handleMenuSort}
					title={Sort}
					listOption={ListSort}
					buttonClass="py-2"
					classUpper="border-2 rounded-lg"
					containerClass="rounded-lg"
				>
					<slot><span class="material-icons text-gray-400">filter_list</span></slot>
				</Dropdown>
			</div>
		</div> -->
		<div
			class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-3"
		>
			{#if data.blog && data.blog.length > 0}
				{#each data.blog as item}
					<div class="rounded-xl shadow-md drop-shadow">
						{#if item.images && item.images.length > 0}
							<img
								src="{import.meta.env.VITE_S3_PUBLIC_URL}/blog/{item.images[0].picture_id}"
								alt=""
								class="rounded-t-xl"
							/>
						{:else}
							<img
								src="./hero.svg"
								alt=""
								class="rounded-t-xl"
							/>
						{/if}

						<div class="p-5">
							<h1 class="text-lg font-semibold">{item.title}</h1>
							<p class="text-sm font-thin">{formatDateToIndonesian(item.created_at)}</p>
							<a href="/blog/{item.slug}" class="text-blue-700"> Baca Selengkapnya -></a>
						</div>
					</div>
				{/each}
			{/if}
			<div></div>
		</div>
		<!-- <div class="flex justify-end">
			<Pagination />
		</div> -->
	</div>
</div>
