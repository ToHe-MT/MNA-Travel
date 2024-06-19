<script>
	import Button from '$lib/button.svelte';
</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center py-10 lg:py-24"
></div>

<div class="container mx-auto p-4 rounded-md">
	<div class="grid grid-cols-10 px-8 sm:px-0">
		<div
			class="text-left col-span-10 lg:col-span-4 flex content-center justify-center flex-col py-10 lg:py-0"
		>
			<p class="text-blue-600 mb-2 font-medium tracking-wider text-base">Tentang Kami</p>
			<h1 class="text-2xl sm:text-4xl font-bold mb-4 tracking-wide">
				Bersama Kami Menuju Tanah Suci
			</h1>
			<p class="text-gray-600 mb-6">
				Lorem ipsum dolor sit amet consectetur. Pharetra posuere enim purus vitae facilisi mi
				pellentesque
			</p>
		</div>
		<div class="hidden xl:col-span-1 xl:block"></div>

		<div
			class=" col-span-10 sm:col-span-10 lg:col-span-6 xl:col-span-5 md:col-span-10 relative h-full sm:min-h-[400px]"
		>
			<img
				src="./tentang-part1-2.svg"
				alt="foto"
				class="rounded-md sm:absolute w-full sm:w-auto top-0 right-0"
			/>
			<img
				src="./tentang-part1-1.svg"
				alt="foto"
				class="hidden sm:block rounded-md absolute bottom-0 left-0"
			/>
		</div>
	</div>
</div>
