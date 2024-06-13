<script>
	import '../app.css';
	import Floating from './layout/Floating.svelte';
	import Footer from './layout/Footer.svelte';
	import NavBar from './layout/NavBar.svelte';
	import 'material-icons/iconfont/filled.css';
	import 'material-icons/iconfont/outlined.css';
</script>

<NavBar />
<slot />
<Footer />
<Floating/>