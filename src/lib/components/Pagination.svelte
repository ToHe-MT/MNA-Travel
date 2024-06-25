<script lang="ts">
	import { createPagination, melt } from '@melt-ui/svelte';
	import { createEventDispatcher } from 'svelte';

	export let totalData: number = 60;
	export let limit: number = 10;
	export let page: number = 1;

	const dispatch = createEventDispatcher();

	const {
		elements: { root, pageTrigger, prevButton, nextButton },
		states: { pages, range }
	} = createPagination({
		count: totalData,
		perPage: limit,
		defaultPage: page,
		siblingCount: 1
	});

	function handlePrevClick(event) {
		dispatch('prev', { page: page - 1 });
	}

	function handleNextClick(event) {
		dispatch('next', { page: page + 1 });
	}

	function handlePageClick(event, page) {
		dispatch('page', { page });
	}
</script>

<nav class="flex flex-col items-center gap-4" aria-label="pagination" {...$root} use:root>
	<p class="text-center text-magnum-900"></p>
	<div class="flex items-center gap-2">
		<button
			class="grid h-8 items-center rounded-md bg-white px-3 text-sm text-magnum-900
        hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 data-[selected]:bg-magnum-900
        data-[selected]:text-white"
			{...$prevButton}
			on:click={handlePrevClick}
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
					use:pageTrigger
					on:click={(event) => handlePageClick(event, page.value)}
				>
					{page.value}
				</button>
			{/if}
		{/each}
		<button
			class="grid h-8 items-center rounded-md bg-white px-3 text-sm text-magnum-900
        hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50 data-[selected]:bg-magnum-900
      data-[selected]:text-white"
			{...$nextButton}
			use:nextButton
			on:click={handleNextClick}
		>
			<span class="material-icons">chevron_right</span>
		</button>
	</div>
</nav>
