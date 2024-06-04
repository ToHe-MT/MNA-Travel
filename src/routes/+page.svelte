<script>
	import Hero from "./page/Hero.svelte";
	import Pelayanan from "./page/Pelayanan.svelte";
	import Umroh from "./page/Umroh.svelte";

	export let data;
	console.log(data);
	
	let y;
    
</script>

<Hero />
<Pelayanan />
<Umroh umroh={data.umroh} />
