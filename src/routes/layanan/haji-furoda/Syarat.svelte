<script>
	const kelemahanHajiFuroda = [
		"Lorem ipsum dolor sit amet consectetur. Tortor lacus duis scelerisque massa augue lacus sit duis et.",
		"Lorem ipsum dolor sit amet consectetur. Tortor lacus duis scelerisque massa augue lacus sit duis et.",
		"Lorem ipsum dolor sit amet consectetur. Tortor lacus duis scelerisque massa augue lacus sit duis et.",
		"Lorem ipsum dolor sit amet consectetur. Tortor lacus duis scelerisque massa augue lacus sit duis et.",
		"Lorem ipsum dolor sit amet consectetur. Tortor lacus duis scelerisque massa augue lacus sit duis et.",
	];
</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-white py-4 md:py-16"
>
	<div class="container mx-auto p-6 flex flex-col gap-6 md:gap-12 xl:px-24"	>
		<div class="text-black flex justify-start items-start flex-col gap-6 md:gap-8">
			<h3 class="text-start text-black text-xl md:text-3xl font-semibold leading-relaxed">Syarat Pendaftaran Haji Furoda</h3>
		</div>
		<div class="px-5">
			<ul class="list-disc grid gap-3">
				{#each kelemahanHajiFuroda as item}
					<li class="md:text-lg">{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>