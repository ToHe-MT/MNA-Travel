<script>
	import Dropdown from '$lib/components/Dropdown.svelte';
	import Button from '$lib/button.svelte';
	import UmrohCard from '../../../../lib/components/UmrohCard.svelte';
	import Pagination from '../../../../lib/components/Pagination.svelte';
	import { goto } from '$app/navigation';

	export let data;
	$: umroh = data.umroh;

	let JenisPaket = 'Jenis Paket';
	let Bandara = 'Bandara';
	let RangeHarga = 'Range Harga';
	let Sort = 'Sort';

	let ListJenisPaket = ['Jenis Paket', 'Silver', 'Gold', 'Platinum'];
	let ListBandara = ['Bandara', 'Jakarta'];
	let ListRangeHarga = ['Range Harga', 'Dibawah 30jt', '30 Jt - 40 Jt'];
	let ListSort = [
		'Sort',
		'Terbaru',
		'Termurah',
		'Termahal',
		'Berangkat Terdekat',
		'Berangkat Terlama'
	];

	function updateURLParams() {
		const params = new URLSearchParams();

		if (JenisPaket !== 'Jenis Paket') {
			params.set('jenisPaket', JenisPaket);
		}

		if (Bandara !== 'Bandara') {
			params.set('bandara', Bandara);
		}

		if (RangeHarga !== 'Range Harga') {
			params.set('rangeHarga', RangeHarga);
		}

		if (Sort !== 'Sort') {
			params.set('sort', Sort);
		}

		const newUrl = `${window.location.pathname}?${params.toString()}`;
		goto(newUrl, { replaceState: true });
	}

	function handleMenuJenisPaket(event) {
		JenisPaket = event.detail.menu;
		updateURLParams();
	}

	function handleMenuBandara(event) {
		Bandara = event.detail.menu;
		updateURLParams();
	}

	function handleMenuRangeHarga(event) {
		RangeHarga = event.detail.menu;
		updateURLParams();
	}

	function handleMenuSort(event) {
		Sort = event.detail.menu;
		updateURLParams();
	}
</script>

<svelte:head>
	<title>MNA - Travel | Layanan Paket Umrah</title>
	<meta
		name="description"
		content="Paket Biaya dan Jadwal Umroh Murah Terbaru 2024 - 2025 1446H, ✔Harga Realistis ✔Pesawat Direct ✔Jaminan 100% Berangkat"
	/>
	<meta name="keywords" content="Umroh, Travel, Pelayanan Umroh, Umroh Terbaik, MNA Travel" />
</svelte:head>

<div
	class="hero relative flex flex-col items-center justify-center w-full bg-cover bg-center min-h-[50vh]"
	style="background-image: url('../../../layanan-paket-umroh.svg');"
>
	<div class="absolute inset-0 bg-black/50 z-10"></div>
	<div class="absolute inset-0 bg-blue-700/10 z-10"></div>
	<div
		class="text-center text-white z-20 container lg:px-40 flex flex-col gap-2 md:gap-5 px-8 md:px-0 mt-16"
	>
		<h1 class="text-xl sm:text-3xl lg:text-4xl font-semibold lg:tracking-wide">
			Pengalaman Umrah Terbaik Menanti Anda
		</h1>
		<div class="w-full bg-white grid grid-cols-9 rounded-xl">
			<Dropdown
				title={JenisPaket}
				listOption={ListJenisPaket}
				on:menuSelected={handleMenuJenisPaket}
				classUpper="border-r border-gray-200 col-span-2"
				defaultLabel="Semua Paket"
			/>
			<Dropdown
				on:menuSelected={handleMenuBandara}
				title={Bandara}
				listOption={ListBandara}
				classUpper="border-r border-gray-200 col-span-2"
				defaultLabel="Semua Bandara"
			/>
			<Dropdown
				on:menuSelected={handleMenuRangeHarga}
				title={RangeHarga}
				listOption={ListRangeHarga}
				classUpper="border-r border-gray-200 col-span-2"
				defaultLabel="Semua Harga"
			/>
			<div class="flex justify-center items-center text-black gap-2 px-4 col-span-2">
				<span class="material-icons text-gray-400">search</span>
				<input
					type="text"
					placeholder="Search Paket"
					class="w-full border-none rounded-xl focus:border-red-500/0 focus:ring-red-500/0 p-1"
				/>
			</div>
			<div class="flex justify-center items-center">
				<Button className="rounded-lg text-center bg-blue-700 text-white" href="/">Search</Button>
			</div>
		</div>
	</div>
</div>

<div
	class="hero relative flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-white"
>
	<div class="container mx-auto p-6 flex flex-col gap-8">
		<div class="text-black">
			<h1 class="text-center text-2xl md:text-4xl font-semibold tracking-wide mb-8">
				Layanan Paket Umrah
			</h1>
		</div>
		<div class="flex justify-between container">
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
		</div>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-3"
		>
			{#if umroh && umroh.length > 0}
				{#each umroh as paket, idx}
					<UmrohCard {umroh} {paket} {idx} link="/layanan/paket/umroh/" />
				{/each}
			{/if}
		</div>
		<div class="flex justify-end">
			<Pagination />
		</div>
	</div>
</div>

<form action=""></form>
