<script>
	import Button from '$lib/button.svelte';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import { createDropdownMenu, melt } from '@melt-ui/svelte';

	const {
		elements: { trigger, menu, item }
	} = createDropdownMenu({
		preventScroll: false
	});

	const dashboard = [
		{ label: 'Beranda', url: '/', type: 'normal' },
		{ label: 'Layanan', url: '/layanan', type: 'dropdown' },
		{ label: 'Perlengkapan Umroh', url: '/perlengkapan-umroh', type: 'normal' },
		{ label: 'Blog', url: '/blog', type: 'normal' },
		{ label: 'Tentang Kami', url: '/tentang-kami', type: 'normal' }
	];

	const layanan = [
		{ label: 'Paket Umroh', url: '/layanan/paket/umroh' },
		{ label: 'Sewa Transportasi', url: '/layanan/sewa-transportasi' },
		{ label: 'Wisata Domestik', url: '/layanan/paket-wisata-domestik' }
	];

	let layananSelected = false;
	function toggleLayananSelected() {
		layananSelected = !layananSelected;
	}
	$: activeUrl = $page.url.pathname;
	let y = 0;
	let scrolled = false;

	$: scrolled = y > 200;
</script>

<svelte:window bind:scrollY={y} />
<div class="{scrolled?'bg-white shadow-xl':'bg-transparent'} fixed top-0 left-0 right-0 z-50 transition-all">
	<div
		class="container mx-auto px-4 "
		on:scroll={(e) => console.log(e.target.scrollTop)}
	>
		<div
			class="justify-between align-middle hidden lg:flex transition-duration-75 {activeUrl === '/'
				? scrolled
					? 'text-black min-h-12'
					: 'text-white min-h-16'
				: 'text-black min-h-12'}"
		>
			<div class="image hidden xl:block">
				<img src="./logo-{scrolled?'sky':'white'}.png" alt="" class="h-16 w-auto object-cover p-2" />
			</div>
			<div class=" content flex justify-center align-middle gap-x-10 m-auto">
				{#each dashboard.slice(0, 1) as item}
					{#if item.type === 'normal'}
						<a
							class=" transition-duration-75 px-3 py-1 rounded-xl  hover:text-blue-500 hover:bg-white {activeUrl ===
							item.url
								? 'bg-white text-blue-700'
								: 'bg-transparent'}"
							href={item.url}>{item.label}</a
						>
					{/if}
				{/each}
				<div class="relative">
					<button
						{...$trigger}
						use:trigger
						on:click={() => toggleLayananSelected()}
						class="menu px-3 py-1 rounded-xl flex hover:text-blue-500 hover:bg-white {layananSelected ||
						activeUrl.startsWith('/layanan')
							? 'bg-white text-blue-700'
							: 'bg-transparent'}"
					>
						<p>Layanan</p>
						<span class="material-icons material-symbols-outlined"> arrow_drop_down </span>
					</button>
					<div
						{...$menu}
						use:menu
						class="z-20 bg-white mx-2 rounded-xl flex flex-col py-2 shadow-lg"
					>
						<a
							class="px-4 py-1 transition hover:text-blue-500 {activeUrl === layanan[0].url
								? 'text-blue-700'
								: 'bg-transparent'}"
							{...$item}
							use:item
							href={layanan[0].url}>{layanan[0].label}</a
						>
						<a
							class="px-4 py-1 transition hover:text-blue-500 {activeUrl === layanan[1].url
								? 'text-blue-700'
								: 'bg-transparent'}"
							{...$item}
							use:item
							href={layanan[1].url}>{layanan[1].label}</a
						>
						<a
							class="px-4 py-1 transition hover:text-blue-500 {activeUrl === layanan[2].url
								? 'text-blue-700'
								: 'bg-transparent'}"
							{...$item}
							use:item
							href={layanan[2].url}>{layanan[2].label}</a
						>
					</div>
				</div>
				{#each dashboard.slice(2, 5) as item}
					{#if item.type === 'normal'}
						<a
							class="px-3 py-1 rounded-xl transition hover:text-blue-500 hover:bg-white {activeUrl ===
							item.url
								? 'bg-white text-blue-700'
								: 'bg-transparent'}"
							href={item.url}>{item.label}</a
						>
					{/if}
				{/each}
			</div>
			<div class="contact hidden xl:flex justify-center align-middle">
				<a
					href="https://wa.me/6282240406568"
					target="_blank"
					class="contact flex justify-center align-middle"
				>
					<Button
						className="rounded-xl border m-auto bg-white/20 hover:bg-blue-100/50 hover:bg-opacity"
					>
						Hubungi Kami
					</Button>
				</a>
			</div>
		</div>
		<!-- NAVBAR -->
		<!-- <div class="justify-between align-middle flex md:hidden">
		<div class="image">
			<img src="./logo-hanania-blue.webp" alt="" class="h-20 w-auto object-cover p-4" />
		</div>
		<div class="contact hidden xl:flex justify-center align-middle">
			<a
				href="https://wa.me/6282240406568"
				target="_blank"
				class="contact flex justify-center align-middle"
			>
				<Button className="rounded-xl border m-auto bg-white/20 hover:bg-blue-100 hover:bg-opacity">
					Hubungi Kami
				</Button>
			</a>
		</div>
	</div> -->
	</div>
</div>
