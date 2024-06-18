<script>
	export let data;

	import './desc.css';
	import { formatDateToIndonesian } from '$lib/function/format.js';
	const { title, content_html, images, blog_id, created_at, created_by, slug } = data.blog;
</script>

<div
	class="blogblogblog relative flex items-center justify-center w-full bg-cover bg-center bg-white pt-32"
>
	<div class="container mx-auto p-6 flex flex-col gap-8">
		<div class="text-black">
			<h3 class="text-center text-lg md:text-xl md-2 md:mb-6 text-blue-700">
				{formatDateToIndonesian(created_at)}
			</h3>
			<h1 class="text-center text-2xl md:text-4xl font-semibold tracking-wide mb-2 text-black">
				{title}
			</h1>
		</div>
		<div class="card">
			<div class="card-body">
				<div class="mb-4 pb-4">
					{#if images.length > 0}
						<img src="{import.meta.env.VITE_S3_PUBLIC_URL}/blog/{images[0].picture_id}" alt="" />
					{/if}
				</div>
				{@html content_html}
			</div>
		</div>
	</div>
</div>
