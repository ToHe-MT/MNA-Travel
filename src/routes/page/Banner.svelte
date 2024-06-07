<script>
	import Button from '$lib/button.svelte';
</script>

<div
	class="relative w-full h-auto min-h-96 bg-cover bg-no-repeat bg-center flex justify-start"
	style="background-image: url('./banner.svg')"
>
	<div class="absolute inset-0 bg-black/50 z-10"></div>
	<div class="flex justify-center items-start flex-col z-20 px-4 md:px-24 gap-4">
		<h1 class="text-2xl md:text-4xl font-bold text-white">Pengalaman Umrah Terbaik Menanti Anda</h1>
		<p class="text-white text-md md:text-lg font-medium">
			Dengan Promo Istimewa, Kami Siap Membantu Anda Mendapatkan Pelayanan Terbaik
		</p>
		<div>
			<Button
				className="rounded-xl border m-auto bg-white/20 hover:bg-blue-100/50 hover:bg-opacity text-white"
			>
				Hubungi Kami
			</Button>
		</div>
	</div>
</div>
