<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: 'item-1'
	});

	export let title = "What's Included";
	export let listItem = [
		'TIdak ada',
		'TIdak ada',
		'TIdak ada',
		'TIdak ada',
		'TIdak ada',
		'TIdak ada'
	];

	export let className = '';
</script>

<div
	class="mx-auto w-[18rem] max-w-full rounded-xl bg-white sm:w-[25rem] {className}"
	{...$root}
>
	<div
		{...$item(title)}
		use:item
		class="overflow-hidden transition-colors"
	>
		<h2 class="flex">
			<button
				{...$trigger(title)}
				use:trigger
				class="flex flex-1 cursor-pointer items-center justify-between bg-blue-300 px-5 py-5 text-base font-medium leading-none text-black transition-colors hover:bg-blue-400 focus:!ring-0 focus-visible:text-magnum-800"
			>
				{title}
			</button>
		</h2>
		{#if $isSelected(title)}
			<div
				class={'content overflow-hidden bg-white text-sm text-neutral-600'}
				{...$content(title)}
				use:content
				transition:slide
			>
				<div class="flex flex-col p-5">
					{#each listItem as item}
						<div>
							{item}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.content {
		box-shadow: inset 0px 1px 0px theme('colors.neutral.300');
	}
</style>
