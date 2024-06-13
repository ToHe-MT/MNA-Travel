<script>
	import Banner from './page/Banner.svelte';
	import Fasilitas from './page/Fasilitas.svelte';
	import Gallery from './page/Gallery.svelte';
	import Hero from './page/Hero.svelte';
	import Pelayanan from './page/Pelayanan.svelte';
	import Testimoni from './page/Testimoni.svelte';
	import Umroh from './page/Umroh.svelte';

	export let data;

	let y;
</script>

<svelte:head>
	<title>MNA - Travel | Pelayanan Umroh Terbaik </title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<Hero />
<Pelayanan />
<Umroh umroh={data.umroh} />
<Fasilitas />
<Banner />
<Gallery />
<Testimoni />
