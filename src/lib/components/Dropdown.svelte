<script>
	import { createEventDispatcher } from 'svelte';

	let isOpen = false;
	const dispatch = createEventDispatcher();

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}

	function selectMenu(menu) {
		closeMenu();
		dispatch('menuSelected', { menu });
	}

	export let title = 'Options';
	export let listOption = ['Menu 1', 'Menu 2'];
	export let classUpper = '';
	export let buttonClass = 'py-6 text-base';
	export let containerClass = '';
</script>

<div class="relative inline-block text-left {classUpper}">
	<div class="flex gap-1 justify-center items-center pl-2 hover:bg-gray-50 {containerClass}">
		<slot />
		<button
			type="button"
			class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 {buttonClass} text-gray-900"
			on:click={toggleMenu}
			aria-expanded={isOpen}
			aria-haspopup="true"
		>
			{title}
			<svg
				class="-mr-1 h-5 w-5 text-gray-400"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>

	<div
		class="transition ease-out duration-150 {isOpen
			? 'transform opacity-100 scale-100'
			: 'transform opacity-0 scale-95'} absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex justify-center items-center"
		role="menu"
		aria-orientation="vertical"
		aria-labelledby="menu-button"
		tabindex="-1"
	>
		<div class="py-1 w-full flex justify-center flex-col items-center" role="none">
			{#each listOption as item}
				<button
					on:click={() => selectMenu(item)}
					class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer w-full text-center"
					role="menuitem"
					tabindex="-1"
					id="menu-item-{item}"
				>
					{item}
				</button>
			{/each}
		</div>
	</div>
</div>
