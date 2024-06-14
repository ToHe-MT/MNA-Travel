<script>
	import Button from '$lib/button.svelte';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import Modal from '../../lib/components/modal.svelte';

	const {
		elements: { trigger, menu, item }
	} = createDropdownMenu({
		preventScroll: false,
		closeOnOutsideClick: false
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
	let layananMobileSelected = false;
	function toggleLayananSelected() {
		layananSelected = !layananSelected;
	}
	$: activeUrl = $page.url.pathname;
	let y = 0;
	let scrolled = false;

	$: scrolled = y > 50;
</script>

<svelte:window bind:scrollY={y} />
<div
	class="hidden lg:block fixed {scrolled
		? 'bg-white shadow-xl'
		: 'bg-transparent'} top-0 left-0 right-0 z-50 transition-all"
>
	<div class="container mx-auto px-4" on:scroll={(e) => console.log(e.target.scrollTop)}>
		<div
			class="justify-between align-middle hidden lg:flex transition-duration-75 {activeUrl === '/' || activeUrl === '/layanan/paket/umroh'
				? scrolled
					? 'text-black min-h-12'
					: 'text-white min-h-16'
				: 'text-black min-h-12'}"
		>
			<div class="image hidden xl:block">
				<img
					src="/logo-{activeUrl === '/' || activeUrl === '/layanan/paket/umroh'? (scrolled ? 'sky-long' : 'white-long') : 'sky'}.png"
					alt=""
					class="h-16 w-auto object-cover py-2"
				/>
			</div>
			<div class=" content flex justify-center align-middle gap-x-10 m-auto">
				{#each dashboard.slice(0, 1) as item}
					{#if item.type === 'normal'}
						<a
							class=" transition-duration-75 px-3 py-1 rounded-xl hover:text-blue-500 hover:bg-white {activeUrl ===
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
						class="z-50 bg-white mx-2 rounded-xl flex flex-col py-2 shadow-lg"
					>
						<a
							class=" px-4 py-1 transition hover:text-blue-500 {activeUrl === layanan[0].url
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
	</div>
</div>
<!-- NAVBAR -->
<div class="block lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-all">
	<div class="bg-white min-h-20 w-full flex justify-center items-center">
		<div class="flex justify-between items-center px-4 py-2 w-full">
			<div class="flex-1 text-center">
				<a href="/" class="flex flex-col items-center {activeUrl === '/' ? 'active' : ''}">
					<span class="material-icons">home</span>
					<span class="text-xs">Home</span>
				</a>
			</div>
			<div class="flex-1 text-center">
				<Modal items={layanan} {activeUrl}>
					<div
						class="flex flex-col items-center justify-center {layananMobileSelected ||
						activeUrl.startsWith('/layanan')
							? 'active'
							: ''}"
					>
						<span class="material-icons">view_list</span>
						<div class="flex justify-center items-center">
							<span class="text-xs">Layanan</span>
							<!-- <span class="material-icons material-symbols-outlined"> arrow_drop_up </span> -->
						</div>
					</div>
				</Modal>
			</div>
			<div class="flex-1 text-center">
				<a
					href="/perlengkapan-umroh"
					class="flex flex-col items-center {activeUrl === '/perlengkapan-umroh' ? 'active' : ''}"
				>
					<span class="material-icons">shopping_bag</span>
					<span class="text-xs">Perlengkapan</span>
				</a>
			</div>
			<div class="flex-1 text-center">
				<a href="/blog" class="flex flex-col items-center {activeUrl === '/blog' ? 'active' : ''}">
					<span class="material-icons">article</span>
					<span class="text-xs">Blog</span>
				</a>
			</div>
			<div class="flex-1 text-center">
				<a
					href="/tentang-kami"
					class="flex flex-col items-center {activeUrl === '/tentang-kami' ? 'active' : ''}"
				>
					<span class="material-icons">info</span>
					<span class="text-xs">Tentang</span>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.big-circle {
		height: 3rem;
		width: 3rem;
		border-radius: 50%;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.active {
		color: #1e3a8a; /* Tailwind's blue-900 color */
		font-weight: bold;
	}
</style>
