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

<Hero />
<Pelayanan />
<Umroh umroh={data.umroh} />
<Fasilitas />
<Banner />
<Gallery />
<Testimoni />
