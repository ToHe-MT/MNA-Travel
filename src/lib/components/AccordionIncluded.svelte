<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { sleep } from '@melt-ui/svelte/internal/helpers';
	import { slide } from 'svelte/transition';

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: 'item-1'
	});

	export let title = 'TItle Please';

	export let className = 'px-0 lg:px-6 w-full max-w-full';
</script>

<div class="mx-auto  rounded-xl bg-white {className}" {...$root}>
	<div {...$item(title)} use:item class="overflow-hidden transition-colors">
		<h2 class="flex">
			<button
				{...$trigger(title)}
				use:trigger
				class="flex justify-between w-full cursor-pointer items-center bg-blue-200 px-4 py-4
				text-base font-medium leading-none text-gray-700 transition-colors hover:bg-blue-300 focus:!ring-0 focus-visible:text-magnum-800"
			>
				<h1>
					{title}
				</h1>
				<div class="icon-wrapper relative inline-block w-6 h-6">
					<span
						class="material-icons absolute inset-0 transition duration-300 {$isSelected(title)
							? 'opacity-100 '
							: 'opacity-100 rotate-90'}">remove</span
					>
					<span
						class="material-icons absolute inset-0 transition duration-300">remove</span
					>
				</div>
			</button>
		</h2>
		{#if $isSelected(title)}
			<div
				class={'overflow-hidden bg-white text-sm text-neutral-600'}
				{...$content(title)}
				use:content
				transition:slide
			>
				<slot />
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	/* .content {
		box-shadow: inset 0px 1px 0px theme('colors.neutral.300');
	} */
</style>
