<script>

	import { formatDateToIndonesian } from '$lib/function/format.js';
	import Header from './Header.svelte';
	import ListBlog from './ListBlog.svelte';
	export let data;
</script>

<svelte:head>
	<title>Blog | MNA Travel</title>
	<meta
		name="description"
		content="Baca blog MNA Travel untuk informasi terbaru seputar Umroh, Haji, dan destinasi wisata religi. Temukan tips perjalanan dan cerita inspiratif untuk persiapan ibadah Anda."
	/>
	<meta name="keywords" content="Blog MNA Travel, Tips Umroh, Informasi Umroh Terbaru, Destinasi Wisata Religi, Cerita Umroh, Panduan Haji, Travel Haji dan Umroh, Artikel Umroh MNA Travel, Inspirasi Umroh, Panduan Wisata Religi" />
</svelte:head>

<Header/>
<ListBlog {data}/>
