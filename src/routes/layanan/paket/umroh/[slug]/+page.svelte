<script>
	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';
	import { onMount } from 'svelte';
	import AccordionIncluded from '../../../../../lib/components/AccordionIncluded.svelte';

	export let data;
	console.log(data);

	const paket = data.info_paket || {};
	function formatDateToIndonesian(date) {
		return date.toLocaleDateString('id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

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
			modules: [Navigation, Pagination]
		});
	});
</script>

{#if paket}
	<!-- ! Header -->
	<div class="container mx-auto mt-10 lg:mt-20">
		<div class="flex justify-center items-center flex-col gap-2 py-16">
			<h6 class="font-semibold text-blue-700">{formatDateToIndonesian(paket.departure_date)}</h6>
			<h1 class="text-4xl font-semibold">{paket.title}</h1>
			<!-- <p class="w-full sm:w-full md:w-1/2 lg:w-1/3 text-center">
                Lorem ipsum dolor sit amet consectetur. Eu congue sodales ac egestas a adipiscing imperdiet nulla. Tortor eu quis ut egestas arcu
            </p> -->
		</div>
	</div>
	<!-- ? Content -->
	<div class="container mx-auto py-12">
		<div class="grid grid-cols-3">
			<div class="col-span-2">
				<!-- ! Swiper JS Gallery -->
				{#if paket.images && paket.images.length > 0}
					<div class="swiper property-gallery-slider relative flex justify-center items-center">
						<div class="swiper-wrapper flex content-center">
							{#each paket.images as image}
								<div class="swiper-slide" style="width: auto;">
									<div
										class="link property-gallery property-card__img flex justify-center items-center"
									>
										<img
											src="https://blog.principal.co.id/sites/default/files/styles/article_image/public/media/Ingin%20Umroh%20Dulu%20sebelum%20Pergi%20Haji_%20Cek%20Pertimbangan%20Berikut.jpeg?itok=U8gNpACY"
											alt="foto hotel"
											class="img-fluid h-auto w-full"
											style="object-fit: cover"
										/>
									</div>
								</div>
							{/each}
						</div>
						<div
							class="swiper-button-prev property-gallery-slider__btn property-gallery-slider__btn-prev z-10"
						>
							<span class="material-icons">chevron_left</span>
						</div>
						<div
							class="swiper-button-next property-gallery-slider__btn property-gallery-slider__btn-next z-10"
						>
							<span class="material-icons">chevron_right</span>
						</div>
					</div>
				{/if}
				<!-- ! Content -->
			</div>
			<div class="col-span-1">
				<!-- ! Included -->
				 <AccordionIncluded/>
				<!-- ! Not Included -->
				<!-- ! Booking Form -->
			</div>
		</div>
	</div>
{/if}

<style>
	.material-icons {
		font-size: 24px; 
		color: black; 
		font-weight: 100;
	}
	.swiper-button-prev,
	.swiper-button-next {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		background-color: rgba(255, 255, 255, 0.75);
		color: black;
		border-radius: 50%;
		z-index: 10;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		border: none;
	}

	.swiper-button-prev {
		left: 10px;
	}

	.swiper-button-next {
		right: 10px;
	}
</style>
