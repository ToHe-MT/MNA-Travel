<script>

	import { formatDateToIndonesian } from '$lib/function/format.js';
	import Header from './Header.svelte';
	import ListBlog from './ListBlog.svelte';
	export let data;
</script>

<svelte:head>
	<title>MNA Travel | Penyelenggara Umroh & Haji Profesional Indonesia</title>
	<meta
		name="description"
		content="MNA Travel | Pusat Umroh & Haji Indonesia memberikan solusi layanan penyelenggara Umroh & Haji yang ramah dan profesional bagi seluruh kaum Muslim."
	/>
	<meta name="keywords" content="Umroh, Travel, Pelayanan Umroh, Umroh Terbaik, MNA Travel" />
</svelte:head>

<Header/>
<ListBlog {data}/>
