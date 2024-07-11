<script>
	export let icon="group"
	export let name;
	export let text = "Lorem ipsum dolor sit amet consectetur. Ornare libero mauris arcu natoque arcu phasellus massa. Aliquet sit pharetra dictum non suspendisse pellentesque risus gravida.";
</script>

<div class="flex flex-col p-8 gap-1 md:gap-3 bg-white rounded-xl opensans">
	<div class="bg-blue-700  p-3 md:p-3 flex justify-center items-center rounded-xl w-fit">
		<span class="material-icons material-symbols-outlined  text-white">{icon}</span>
	</div>
	<h1 class="syne md:text-xl font-semibold text-blue-700">{name}</h1>
	<p class="text-sm md:text-base text-gray-500 md:tracking-wider tracking-wide leading-normal md:leading-relaxed">{text}</p>
</div>

<style>
		.material-icons{
				font-size: 24px;
		}
    @media (min-width: 800px) {
        .material-icons {
            font-size: 32px;
        }
    }
</style>