<script lang="ts">
	import { createPagination, melt } from '@melt-ui/svelte';

	const {
		elements: { root, pageTrigger, prevButton, nextButton },
		states: { pages, range }
	} = createPagination({
		count: 100,
		perPage: 10,
		defaultPage: 1,
		siblingCount: 1
	});
</script>

<nav class="flex flex-col items-center gap-4" aria-label="pagination" {...$root} use:root>
	<p class="text-center text-magnum-900">
	</p>
	<div class="flex items-center gap-2">
		<button
			class="grid h-8 items-center rounded-md bg-white px-3 text-sm text-magnum-900
        hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 data-[selected]:bg-magnum-900
        data-[selected]:text-white"
			{...$prevButton}
			use:prevButton><span class="material-icons">chevron_left</span></button
		>
		{#each $pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<span>...</span>
			{:else}
				<button
					class="grid h-8 items-center rounded-md bg-white px-3 text-sm text-magnum-900
            hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 data-[selected]:bg-magnum-900
          data-[selected]:text-blue-500"
					{...$pageTrigger(page)}
					use:pageTrigger>{page.value}</button
				>
			{/if}
		{/each}
		<button
			class="grid h-8 items-center rounded-md bg-white px-3 text-sm text-magnum-900
        hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 data-[selected]:bg-magnum-900
      data-[selected]:text-white"
			{...$nextButton}
			use:nextButton
		>
			<span class="material-icons">chevron_right</span>
		</button>
	</div>
</nav>
