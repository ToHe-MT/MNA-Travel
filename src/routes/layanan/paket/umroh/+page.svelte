<script>
	import Dropdown from '$lib/components/Dropdown.svelte';
	import Button from '$lib/button.svelte';
	import UmrohCard from '../../../../lib/components/UmrohCard.svelte';
	import Pagination from '../../../../lib/components/Pagination.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import UmrohCardNew from '../../../page/UmrohCardNew.svelte';

	export let data;
	console.log("ASD");
	console.log(data);
	let JenisPaket = 'Jenis Paket';
	let Bandara = 'Bandara';
	let RangeHarga = 'Range Harga';
	let Sort = 'Sort';

	let ListJenisPaket = ['Jenis Paket', 'Super Hemat', 'Premium', 'Precious', 'Exclusive'];
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
	let search;
	$: page = data?.page;
	$: umroh = data?.umroh;

	function updateURLParams() {
		const params = new URLSearchParams();

		if (JenisPaket !== 'Jenis Paket') {
			params.set('level_paket', JenisPaket);
		}

		if (Bandara !== 'Bandara') {
			params.set('bandara', Bandara);
		}

		if (RangeHarga !== 'Range Harga') {
			params.set('rangeHarga', RangeHarga);
		}

		if (search !== '' || search !== undefined) {
			params.set('search', search);
		}
		if (params.get('search') === 'undefined' || params.get('search') == '') {
			params.delete('search');
		}

		if (Sort !== 'Sort') {
			params.set('sort', Sort);
		}

		if (page !== 1) {
			params.set('page', page);
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

	function handleChangePage(event) {
		page = (event.detail.page);
		updateURLParams();
	}

	function handleNextPage(event) {
		page = page + 1;
		updateURLParams();
	}

	function handlePrevPage(event) {
		page = page + 1;
		updateURLParams();
	}
	onMount(()=>{
		console.log(data);
	})


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
				classUpper="border-r border-gray-200  col-span-9 sm:col-span-3 md:col-span-2"
				defaultLabel="Semua Paket"
			/>
			<Dropdown
				on:menuSelected={handleMenuBandara}
				title={Bandara}
				listOption={ListBandara}
				classUpper="border-r border-gray-200 col-span-9 sm:col-span-3 md:col-span-2"
				defaultLabel="Semua Bandara"
			/>
			<Dropdown
				on:menuSelected={handleMenuRangeHarga}
				title={RangeHarga}
				listOption={ListRangeHarga}
				classUpper="border-r border-gray-200 col-span-9 sm:col-span-3 md:col-span-2"
				defaultLabel="Semua Harga"
			/>
			<div
				class="flex justify-center items-center text-black gap-2 px-4 sm:pl-20 md:pl-10 col-span-9 sm:col-span-5 md:col-span-3 lg:col-span-2 m-auto"
			>
				<span class="material-icons text-gray-400">search</span>
				<input
					bind:value={search}
					type="text"
					placeholder="Search Paket"
					class="w-24 md:w-full border-none rounded-xl focus:border-red-500/0 focus:ring-red-500/0 p-1"
					on:keydown={(e) => e.key === 'Enter' && updateURLParams()}
				/>
			</div>
			<div
				class="flex justify-center items-center col-span-9 sm:col-span-4 md:col-span-9 xl:col-span-1 py-2 px-4 md:px-3 lg:pr-3"
			>
				<Button
					className="rounded-lg text-center bg-blue-700 text-white w-full"
					onClick={() => updateURLParams()}>Search
				</Button
				>
			</div>
		</div>
	</div>
</div>

<div class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-white">
	<div class="container mx-auto p-6 flex flex-col gap-8">
		<div class="text-black">
			<h1 class="text-center text-2xl md:text-4xl font-semibold tracking-wide mb-8">
				Layanan Paket Umrah
			</h1>
		</div>
		<div class="flex justify-between container">
			{#if data?.limit && data?.totalData}
				<div>
					Menampilkan <span class="font-bold underline underline-offset-2"> {data.limit} </span> dari
					<span class="font-bold"> {data.totalData} </span> Data
				</div>
			{/if}
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
		{#if umroh && umroh.length > 0}
			<div
				class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-3"
			>
				{#each umroh as paket, idx}
					<UmrohCardNew umroh={umroh} {paket} {idx} link="/layanan/paket/umroh/" />
				{/each}
			</div>
		{:else}
			<div class="w-full border flex justify-center items-center min-h-96">
				<h1 class="text-lg font-semibold">Paket Tidak Tersedia</h1>
			</div>
		{/if}
		<div class="flex justify-end">
			{#if data && data.limit && data.totalData && data.page}


				<Pagination
					limit={data?.limit}
					totalData={data?.totalData}
					page={data?.page}
					on:next={handleNextPage}
					on:prev={handlePrevPage}
					on:page={handleChangePage}
					bind:data
				/>
			{/if}
		</div>
	</div>
</div>

<form action=""></form>
