<script>
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Navigation, Pagination } from 'swiper/modules';
	import 'swiper/css'

	export let images = [
		{primary:true	},
		{primary:false	},
		{primary:true	},
		{primary:false	},
	]

	var swiper;
	onMount(() => {
		if (swiper) {
			swiper.destroy();
		}
		swiper = new Swiper('.property-gallery-slider', {
			loop: true,
			slidesPerView: '1',
			spaceBetween: 16,
			centeredSlides: true,
			centeredSlidesBounds: true,
			navigation: {
				nextEl: '.property-gallery-slider__btn-next',
				prevEl: '.property-gallery-slider__btn-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			modules: [Navigation, Pagination]
		});
	});
</script>

{#if images && images.length > 0}
	<div class="pakethaji swiper property-gallery-slider relative flex justify-center items-center w-full order-first lg:-order-none">
		<div class="swiper-wrapper flex content-center">
			{#each images as image}
				{#if image.primary === true}
					<div class="swiper-slide" style="width: auto;">
						<div
							class="link property-gallery property-card__img flex justify-center items-center"
						>
<!--								src="../../../Sementara.jpg"-->
							<img
								src="../../../haji-furoda-slider-1.svg"
								alt="Foto Label"
								class="img-fluid  h-auto w-full rounded-lg"
								style="object-fit: cover"
							/>
						</div>
					</div>
				{/if}
			{/each}
			{#each images as image}
				{#if image.primary === false}
					<div class="swiper-slide" style="width: auto;">
						<div
							class="link property-gallery property-card__img flex justify-center items-center"
						>
							<!-- src="{import.meta.env.VITE_S3_PUBLIC_URL}/schedule/{image.picture_id}" -->
							<img
								src="../../../haji-furoda-slider-2.svg"
								alt="foto hotel"
								class="img-fluid h-auto w-full rounded-lg"
								style="object-fit: cover"
							/>
						</div>
					</div>
				{/if}
			{/each}
		</div>
		<div
			class="swiper-button-prev property-gallery-slider__btn property-gallery-slider__btn-prev z-10"
		>
			<span class="material-icons">chevron_left</span>
		</div>
		<div class="swiper-pagination flex absolute bottom-0 w-full justify-center items-center pb-5"></div>
		<div
			class="swiper-button-next property-gallery-slider__btn property-gallery-slider__btn-next z-10"
		>
			<span class="material-icons ">chevron_right</span>
		</div>
	</div>
{:else}
	<div class="min-h-[400px] w-full border flex justify-center items-center border-gray-400">
		<div class="flex justify-center items-center h-full">
			<h1 class="text-gray-600">Gambar Belum Tersedia</h1>
		</div>
	</div>
{/if}

<style>
    .material-icons {
        font-size: 24px;
        color: inherit;
        font-weight: 100;
    }
    .swiper-button-prev,
    .swiper-button-next {
				cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        z-index: 10;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: none;
    }

    .swiper-button-prev {
        left: 10px;
        color: blue;
				border: #5277DF 1px solid;
				opacity: 50%;
    }

    .swiper-button-next {
        right: 10px;
        color: white;
        background: #5277DF;
        opacity: 50%;

    }
</style>