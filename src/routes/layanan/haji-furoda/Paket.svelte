<script>

import HajiCard from './HajiCard.svelte';
import ImageCard from './ImageCard.svelte';
</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-gray-100 py-10"
>
	<div class="container mx-auto p-6 flex flex-col gap-4 lg:gap-16 xl:px-24">
		<div class="text-black flex justify-start items-start flex-col gap-6">
			<h3 class="text-start text-gray-700 text-2xl md:text-4xl font-semibold">Paket Haji Furoda</h3>
			<h1 class="text-start text-lg">
				Alhamdulillah, untuk keberangkatan tahun 2025/1446H, kami menyediakan paket yang dapat menjadi pilihan alternatif bagi Anda yang berencana melaksanakan Ibadah Haji melalui program Haji Khusus Tanpa Antri dengan Visa Mujamalah/Furoda. Berikut adalah paket yang kami tawarkan:
			</h1>
		</div>
		<div class="grid lg:grid-cols-2 gap-y-6 gap-x-10 xl:px-0">
			<HajiCard/>
			<ImageCard/>
		</div>
		<div class="grid lg:grid-cols-2 gap-y-6 gap-x-10 xl:px-0">
			<HajiCard idx={1}/>
			<ImageCard/>
		</div>
		<div class="grid lg:grid-cols-2 gap-y-6 gap-x-10 xl:px-0">
			<HajiCard />
			<ImageCard/>
		</div>
	</div>


</div>
