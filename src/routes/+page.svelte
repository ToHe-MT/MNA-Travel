<script>
	import Banner from './page/Banner.svelte';
	import Fasilitas from './page/Fasilitas.svelte';
	import Floating from './layout/Floating.svelte';
	import Gallery from './page/Gallery.svelte';
	import Hero from './page/Hero.svelte';
	import Pelayanan from './page/Pelayanan.svelte';
	import Testimoni from './page/Testimoni.svelte';
	import Umroh from './page/Umroh.svelte';

	export let data;

	let y;
</script>

<svelte:head>
	<title>MNA - Travel | Pelayanan Umroh Terbaik</title>
	<meta
		name="description"
		content="Umroh Terbaik dan Terpercaya di Indonesia. ✔ Biaya Terjangkau, ✔ Profesional, ✔ Pasti Berangkat, ✔ Bonus City Tour Thaif, ✔ Bonus Haramian Express, ✔ Bonus Perlengkapan, ✔ Bonus Museum Wahyu, ✔ Bonus Ice Cream Uhud, ✔ Bonus Merchandise, ✔ Bonus Album Digital, ✔ Bonus Fotografer, ✔ Bonus Bus Daerah"
	/>
	<meta name="keywords" content="Umroh, Travel, Pelayanan Umroh, Umroh Terbaik, MNA Travel" />
</svelte:head>

<Hero />
<Pelayanan />
<Umroh umroh={data.umroh} />
<Fasilitas />
<!-- <Banner /> -->
<!-- <Gallery /> -->
<!-- <Testimoni /> -->
