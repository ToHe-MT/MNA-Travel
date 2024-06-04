<script>
    export let className;
    export let onClick = "";
</script>

<button class="px-4 py-2 transition {className}" on:click={()=>onClick}>
    <slot/>
</button>