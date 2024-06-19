<script>
	export let className;
	export let onClick = () => {};
	export let href;
	export let padding = ' px-4 py-2';
</script>

<button class="{padding} transition {className}" on:click={onClick}>
	{#if href}
		<a {href}>
			<slot />
		</a>
	{:else}
		<slot />
	{/if}
</button>
