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

	export let title = 'Lorem Ipsum';
	export let className = '';
</script>



<div class="mx-auto w-full {className}" {...$root}>
	<div {...$item(title)} use:item class="overflow-hidden transition-colors">
		<div class="grid border border-gray-200 p-6 gap-6 rounded-xl">
			<button
				{...$trigger(title)}
				use:trigger
				class="flex justify-between w-full cursor-pointer items-center
				text-base font-medium leading-none text-gray-700 transition-colors"
			>
				<h1 class="font-semibold text-black text-lg">
					{title}
				</h1>

				<div class="icon-wrapper relative inline-block w-6 h-6 bg-blue-700 rounded-lg">
					<span
						class="material-icons absolute inset-0 transition duration-300 {$isSelected(title)
							? 'opacity-100 text-white '
							: 'opacity-100 rotate-90 text-white'}">remove</span
					>
					<span
						class="material-icons absolute inset-0 transition duration-300 text-white">remove</span
					>
				</div>

			</button>
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
</div>

<style lang="postcss">
    /* .content {
			box-shadow: inset 0px 1px 0px theme('colors.neutral.300');
		} */
</style>
