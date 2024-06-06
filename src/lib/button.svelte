<script>
	export let className;
	export let onClick = '';
	export let href;
</script>

<button class="px-4 py-2 transition {className}" on:click={() => onClick}>
	{#if href}
		<a {href}>
			<slot />
		</a>
	{:else}
		<slot />
	{/if}
</button>
