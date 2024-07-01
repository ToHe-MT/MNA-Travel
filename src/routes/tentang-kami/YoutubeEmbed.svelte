<script>
    export let url = "";
    $: videoId = url;
</script>

{#if videoId}
    <div class="video-container z-20">
        <iframe
            title="YouTube video"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
{:else}
    <div class="heightautomate flex items-center justify-center w-full bg-black">
        <p class="text-white">Invalid YouTube URL</p>
    </div>
{/if}

<style>
    .video-container {
        position: relative;
        width: 90%;
        padding-bottom: 52.25%;
        overflow: hidden;
        background: black; /* Fallback for when there's no video */
    }
    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .heightautomate {
        padding-top: 22.5%; /* (9 / 16) * 60% */
        padding-bottom: 22.5%;
    }
</style>
