<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	const {
		elements: { trigger, portalled, overlay, content, title, description, close },
		states: { open }
	} = createDialog();
	export let items;
	export let activeUrl;
</script>

<button {...$trigger} use:trigger> <slot /> </button>

{#if $open}
	<div {...$portalled} use:portalled>
		<div
			{...$overlay}
			use:overlay
			class="fixed inset-0 z-10 bg-black/50"
			transition:fade={{ duration: 250 }}
		/>
		<div
			{...$content}
			use:content
			class="fixed left-1/2 top-1/2 z-30 h-screen w-full -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-lg"
			transition:fly={{
				duration: 300,
				y: 200
			}}
		>
			<button
				class="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gray-900 z-30"
				{...$close}
				use:close
			>
				X
			</button>
			<div class="flex flex-col justify-start items-center h-full gap-6">
				<div class="flex flex-col justify-center w-full h-full gap-4 p-10">
					{#each items as item}
						<!-- content here -->
						<a
							{...$close}
							use:close
							class="text-2xl text-bold px-4 py-1 transition hover:text-blue-500 {activeUrl ===
							item.url
								? 'text-blue-700'
								: 'bg-transparent'}"
							href={item.url}>{item.label}</a
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}
