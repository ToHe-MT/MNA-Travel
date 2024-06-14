<script>
	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';
	import { onMount } from 'svelte';
	import AccordionIncluded from '$lib/components/AccordionIncluded.svelte';
	import Form from './Form.svelte';

	export let data;

	const paket = data.info_paket || {};
	const { bonus, included, not_included, itinerari, images, hotel, flights } = paket;

	import { formatRupiah, formatDateToIndonesian, capitalizeWords } from '$lib/function/format.js';

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

	console.log(paket);
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
			<div class="col-span-2 px-5">
				<!-- ! Swiper JS Gallery -->
				{#if images && images.length > 0}
					<div class="swiper property-gallery-slider relative flex justify-center items-center">
						<div class="swiper-wrapper flex content-center">
							{#each images as image}
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
				{:else}
					<div class="min-h-[400px] w-full border flex justify-center items-center border-gray-400">
						<div class="flex justify-center items-center h-full">
							<h1 class="text-gray-600">Gambar Belum Tersedia</h1>
						</div>
					</div>
				{/if}
				<!-- ! Content -->
				<div class="w-full py-5">
					<!-- ? Long Description -->
					{#if paket.long_description}
						<div>
							<p>
								{paket.long_description}
							</p>
						</div>
					{/if}
					<!-- ? Detail Paket -->
					<div class="grid grid-cols-2 gap-">
						<div class="flex flex-col gap-4">
							{#if paket.title}
								<div class="flex flex-col gap-0">
									<div>
										<h1 class="font-semibold">Judul Paket</h1>
										<p>{capitalizeWords(paket.title)}</p>
									</div>
								</div>
							{/if}
							{#if paket.tour_guide}
								<div class="flex flex-col gap-0">
									<h1 class="font-semibold">Tour Guide</h1>
									<p>{paket.tour_guide}</p>
								</div>
							{/if}
							{#if paket.departure_from}
								<div class="flex flex-col gap-0">
									<h1 class="font-semibold">Keberangkatan Dari</h1>
									<p>{paket.departure_from}</p>
								</div>
							{/if}
							{#if paket.departure_date}
								<div class="flex flex-col gap-0">
									<h1 class="font-semibold">Departure Date</h1>
									<p>{formatDateToIndonesian(paket.departure_date)}</p>
								</div>
							{/if}
							{#if paket.return_date}
								<div class="flex flex-col gap-0">
									<h1 class="font-semibold">Return Date</h1>
									<p>{formatDateToIndonesian(paket.return_date)}</p>
								</div>
							{/if}
						</div>
						<div class="flex flex-col gap-4">
							{#if hotel && hotel.length > 0}
								<div class="flex flex-col gap-0">
									<div>
										<h1 class="font-semibold">Judul Paket</h1>
										<p>{capitalizeWords(paket.title)}</p>
									</div>
								</div>
							{/if}
							{#if paket.hotel_price_quad || paket.hotel_price_triple || paket.hotel_price_double}
								<div class="flex flex-col gap-0">
									<div>
										<h1 class="font-semibold">Judul Paket</h1>
										{#if paket.hotel_price_quad}
											<div>
												Quad - 4 Person <span class="font-medium text-blue-500"
													>{formatRupiah(paket.hotel_price_quad)}</span
												>/pax
											</div>
										{/if}
										{#if paket.hotel_price_triple}
											<div>
												Triple - 3 Person <span class="font-medium text-blue-500"
													>{formatRupiah(paket.hotel_price_triple)}</span
												>/pax
											</div>
										{/if}
										{#if paket.hotel_price_quad}
											<div>
												Double - 2 Person <span class="font-medium text-blue-500"
													>{formatRupiah(paket.hotel_price_double)}</span
												>/pax
											</div>
										{/if}
									</div>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
			<div class="col-span-1 flex flex-col gap-3">
				<!-- ! Included -->
				{#if included && included.length > 0}
					<!-- content here -->
					<AccordionIncluded title="What's Included">
						<div class="flex flex-col p-3 gap-2">
							{#each included as item}
								<div class="flex gap-5 justify-start items-center">
									<div class="rounded-full bg-blue-100/50 h-6 w-6 flex justify-center items-center">
										<span
											class="material-icons"
											style="color: #5277DF; font-weight:100; font-size:14px">check</span
										>
									</div>

									<h1>
										{item}
									</h1>
								</div>
							{/each}
						</div>
					</AccordionIncluded>
				{/if}
				<!-- ! Not Included -->
				{#if not_included && not_included.length > 0}
					<!-- content here -->
					<AccordionIncluded title="What's Not Included">
						<div class="flex flex-col p-3 gap-2">
							{#each not_included as item}
								<div class="flex gap-5 justify-start items-center">
									<div class="rounded-full bg-red-100/50 h-6 w-6 flex justify-center items-center">
										<span
											class="material-icons"
											style="color: #F60F0F; font-weight:100; font-size:14px">close</span
										>
									</div>

									<h1>
										{item}
									</h1>
								</div>
							{/each}
						</div>
					</AccordionIncluded>
				{/if}
				<!-- ! Booking Form -->
				<Form {paket} />
			</div>
			<div class="col-span-2"></div>
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
