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
		{ label: 'Tentang Kami', url: '/tentang-kami', type: 'normal' },
		{ label: 'Paket Haji Umroh', url: '/layanan/paket/umroh', type: 'normal' },
		// { label: 'Perlengkapan Umroh', url: '/perlengkapan-umroh', type: 'normal' },
		{ label: 'Blog', url: '/blog', type: 'normal' },
		{ label: 'Kontak', url: '/kontak', type: 'normal' }
	];

	const layanan = [
		{ label: 'Paket Umroh', url: '/layanan/paket/umroh' },
		{ label: 'Haji-Furoda', url: '/layanan/paket/haji-furoda' }
		// { label: 'Wisata Domestik', url: '/layanan/paket-wisata-domestik' }
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

	let mobileOpen = false;
</script>

<svelte:window bind:scrollY={y} />
<div
	class="hidden lg:block fixed bg-white shadow-xl top-0 left-0 right-0 z-50 transition-all opensans"
>
	<div class="mx-auto px-10">
		<div
			class="justify-between hidden lg:flex transition-duration-75 text-black min-h-12"
		>
			<div class="image hidden lg:block">
				<img
					src="/logo-sky-long.png"
					alt=""
					class="h-16 w-auto object-cover py-2"
				/>
			</div>
			<div class=" content flex justify-center align-middle gap-x-10 my-auto">
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
				{#each dashboard.slice(1) as item}
					{#if item.type === 'normal'}
						<a
							class="px-3 py-1 rounded-xl transition hover:text-blue-500 hover:bg-white {activeUrl.startsWith(
								item.url
							)
								? 'bg-white text-blue-700'
								: 'bg-transparent'}"
							href={item.url}>{item.label}</a
						>
					{/if}
				{/each}
			</div>

		</div>
	</div>
</div>5
<!-- NAVBAR -->
<!--<div class="block lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-all">-->
<!--	<div class="bg-white min-h-20 w-full flex justify-center items-center">-->
<!--		<div class="flex justify-between items-center px-4 py-2 w-full">-->
<!--			<div class="flex-1 text-center">-->
<!--				<a href="/" class="flex flex-col items-center {activeUrl === '/' ? 'active' : ''}">-->
<!--					<span class="material-icons">home</span>-->
<!--					<span class="text-xs">Home</span>-->
<!--				</a>-->
<!--			</div>-->
<!--			<div class="flex-1 text-center">-->
<!--				<a-->
<!--					href="layanan/paket/umroh"-->
<!--					class="flex flex-col items-center {activeUrl === '/layanan/paket/umroh' ? 'active' : ''}"-->
<!--				>-->
<!--					<span class="material-icons">mosque</span>-->
<!--					<span class="text-xs">Haji/Umroh</span>-->
<!--				</a>-->
<!--			</div>-->
<!--			<div class="flex-1 text-center">-->
<!--				<a-->
<!--					href="/blog"-->
<!--					class="flex flex-col items-center {activeUrl.startsWith('/blog') ? 'active' : ''}"-->
<!--				>-->
<!--					<span class="material-icons">article</span>-->
<!--					<span class="text-xs">Blog</span>-->
<!--				</a>-->
<!--			</div>-->
<!--			<div class="flex-1 text-center">-->
<!--				<a-->
<!--					href="/tentang-kami"-->
<!--					class="flex flex-col items-center {activeUrl === '/tentang-kami' ? 'active' : ''}"-->
<!--				>-->
<!--					<span class="material-icons">info</span>-->
<!--					<span class="text-xs">Tentang</span>-->
<!--				</a>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
<!--</div>-->

<div class="block lg:hidden w-full bg-white border-b px-4 z-50 fixed top-0 h-auto">
	<div class="mx-auto flex justify-between">
		<img src="/logo-sky-long.png" alt="" class="w-36 py-2" />
		<button
			class="text-blue-400 hover:text-blue-700 focus:outline-none"
			on:click={() => (mobileOpen = !mobileOpen)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 transition-transform duration-300 {mobileOpen && 'rotate-180'}"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
	</div>
</div>
<div id="mobileNav"
		 class="lg:hidden shadow-xl transition-all duration-500 fixed top-0 w-full bg-white flex flex-col z-40 h-[350px] {mobileOpen ? 'translate-y-0 opacity-100': 'opacity-100 -translate-y-full'}">
<!--	<div class="flex justify-end p-4">-->
<!--		<button id="closeButton" class="text-blue-400 hover:text-blue-700 focus:outline-none"-->
<!--						on:click={() => (mobileOpen = !mobileOpen)}>-->
<!--			<svg-->
<!--				xmlns="http://www.w3.org/2000/svg"-->
<!--				class="h-6 w-6"-->
<!--				fill="none"-->
<!--				viewBox="0 0 24 24"-->
<!--				stroke="currentColor"-->
<!--			>-->
<!--				<path-->
<!--					stroke-linecap="round"-->
<!--					stroke-linejoin="round"-->
<!--					stroke-width="2"-->
<!--					d="M6 18L18 6M6 6l12 12"-->
<!--				/>-->
<!--			</svg>-->
<!--		</button>-->
<!--	</div>-->
	<div class="flex flex-col items-center justify-center space-y-4 mt-10 h-full opensans">
		<a href="/"
			 class="text-xl {activeUrl ==='/' ? 'text-blue-700': 'text-gray-700'}  hover:text-blue-500"
			 on:click={() => (mobileOpen = false)}>Beranda</a>
		<a href="/tentang-kami" class="text-xl text-gray-700 hover:text-blue-500" on:click={() => (mobileOpen = false)}>Tentang
			Kami</a>
		<a href="/layanan-paket-umroh" class="text-xl text-gray-700 hover:text-blue-500"
			 on:click={() => (mobileOpen = false)}>Paket Haji / Umroh</a>
		<a href="/blog" class="text-xl text-gray-700 hover:text-blue-500" on:click={() => (mobileOpen = false)}>Blog</a>
		<a href="/kontak" class="text-xl text-gray-700 hover:text-blue-500" on:click={() => (mobileOpen = false)}>Kontak</a>
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
