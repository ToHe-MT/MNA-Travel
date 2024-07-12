<script>
	import Banner from './(page)/Banner.svelte';
	import Fasilitas from './(page)/Fasilitas.svelte';
	import Floating from './(layout)/Floating.svelte';
	import Gallery from './(page)/Gallery.svelte';
	import Hero from './(page)/Hero.svelte';
	import Pelayanan from './(page)/Pelayanan.svelte';
	import Testimoni from './(page)/Testimoni.svelte';
	import Umroh from './(page)/Umroh.svelte';
	import Flyer from './(page)/Flyer.svelte';
	import PopUp from './(page)/PopUp.svelte';
	import Tentang from './(page)/Tentang.svelte';
	import Layanan from './(page)/Layanan.svelte';
	import Blog from './(page)/Blog.svelte';
	import Kontak from './(page)/Kontak.svelte';
	import Partner from './(page)/Partner.svelte';
	import Faq from './(page)/Faq.svelte';
	import Video from './(page)/Video.svelte';

	export let data;

	let y;
</script>

<svelte:head>
	<title>MNA Travel | Travel Haji & Umroh Terbaik & Terpercaya Tahun 2024</title>
	<meta
		name="description"
		content="Temukan pengalaman Travel Haji & Umroh terbaik dan terpercaya tahun 2024 dengan MNA Travel. Dapatkan informasi tentang biaya Umroh 2024, Haji Furoda 2025, dan harga Umroh 2025. Nikmati layanan Umroh Plus Turki dan biro Umroh terpercaya untuk paket Umroh murah dan hemat, serta layanan Umroh private keluarga dengan proses visa Haji Furoda yang mudah. Bergabunglah dengan kami untuk doa Umroh yang tulus dan pengalaman Haji Umroh resmi yang tak terlupakan."
	/>
	<meta name="keywords" content="Biaya Umroh 2024, Haji Furoda 2025, Harga Umroh 2025, Umroh Plus Turki, Biro Umroh Terpercaya, Paket Umroh Murah, Travel Umroh Terbaik, Umroh Hemat, Harga Haji Furoda, Travel Umroh Jateng, Visa Haji Furoda, Doa Umroh, Biaya Haji Plus, Umroh Private Keluarga, Haji Umroh Resmi
" />
</svelte:head>

<Hero />
<Tentang />
<!--<Pelayanan />-->
<Umroh umroh={data.umroh} />
<Layanan />
<Video />
<!--<Fasilitas />-->
<!--<Flyer />-->
<!--<Banner />-->
<Testimoni />
<Gallery />
<Blog blog={data.blog} />
<Kontak />
<Faq />
<Partner />
<!--<PopUp/>-->
