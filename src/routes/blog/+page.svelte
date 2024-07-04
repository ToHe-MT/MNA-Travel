<script>

	import { formatDateToIndonesian } from '$lib/function/format.js';
	import Header from './Header.svelte';
	import ListBlog from './ListBlog.svelte';
	export let data;
</script>

<Header/>

<ListBlog {data}/>
