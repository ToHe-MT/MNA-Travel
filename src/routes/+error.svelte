<script>
	import { goto } from '$app/navigation';
import { page } from '$app/stores';
	import Button from '$lib/button.svelte';
</script>

<div
	class="hero relative flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-white py-20 sm:py-10 md:py-10 lg:py-5"
>
	<div class="container mx-auto p-6">
		<div class="">
			<h3 class="text-center text-xl mb-8 text-blue-700">{$page.error.message}</h3>
			<h3 class="text-center text-xl mb-8 text-blue-700">
				Maaf Halaman Masih Dalam Proses Pengembangan
			</h3>
			<h1 class="text-center text-[90px] font-semibold tracking-wide mb-8 text-black">404</h1>

			<div class="flex justify-center items-center">
				<Button className="rounded-lg text-center bg-blue-700 text-white" href="/">Kembali ke Beranda</Button>
			</div>
		</div>
	</div>
</div>
