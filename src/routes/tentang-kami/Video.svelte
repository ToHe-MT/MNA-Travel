<script>

</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-blue-50 py-12"
>
	<div class="container mx-auto p-6 flex flex-col gap-6 lg:gap-8 xl:px-24">
		<div class="text-black flex justify-center items-center flex-col gap-6 md:gap-8">
			<h3 class="text-center text-black text-2xl md:text-4xl md-2 md:mb-2 font-semibold opensans">Video Profil</h3>

		</div>
		<div class="video">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/26_TxjhpYdU" frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen></iframe>
		</div>
	</div>
</div>

<style>
    .video {
        aspect-ratio: 16 / 9;
        overflow: hidden;
        position: relative;
        width: 100%;
    }

    .video iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
</style>