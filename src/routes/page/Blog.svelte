<script>
import { formatDateToIndonesian } from '$lib/function/format.js';
export let blog = [{title:"asd",created_at:new Date(), slug:'/blog'},{title:"asd",created_at:new Date(), slug:'/blog'},{title:"asd",created_at:new Date(), slug:'/blog'}];
</script>

<div
	class="hero relative flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-blue-900 py-20 sm:py-10 md:py-10 lg:py-5"
>
	<div class="container mx-auto p-6">
		<div class="text-white flex justify-center items-center flex-col">
			<h3 class="text-center text-lg md:text-lg md-2 md:mb-2 syne font-semibold">Artikel</h3>
			<h1 class="text-center text-lg md:text-xl tracking-wider mb-8 max-w-[600px]">
				Lorem ipsum dolor sit amet consectetur. Dictumst cras sed dui eu.
			</h1>
		</div>
		<div
			class="grid
				grid-cols-1
				md:grid-cols-2
				lg:grid-cols-3
				gap-8
py-10"
		>
			{#if blog && blog.length > 0}
				{#each blog as item}
					<div class="rounded-xl shadow-md drop-shadow bg-white">
						{#if item.images && item.images.length > 0}
							<img
								src="{import.meta.env.VITE_S3_PUBLIC_URL}/blog/{item.images[0].picture_id}"
								alt=""
								class="rounded-t-xl"
							/>
						{:else}
							<img
								src="./hero.svg"
								alt=""
								class="rounded-t-xl"
							/>
						{/if}

						<div class="p-5 bg-white rounded-b-xl">
							<h1 class="text-lg font-semibold">{item.title}</h1>
							<p class="text-sm font-light">{formatDateToIndonesian(item.created_at)}</p>
							<p class="text-sm font-light">Lorem ipsum dolor sit amet consectetur. Malesuada nibh pellentesque nulla mus at purus. Lectus aliquam ut venenatis enim consectetur.</p>
							<a href="/blog/{item.slug}" class="text-blue-700"> Baca Selengkapnya -></a>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>
