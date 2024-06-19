<script>
	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';
	import { onMount } from 'svelte';
	import AccordionIncluded from '$lib/components/AccordionIncluded.svelte';
	import Form from './Form.svelte';

	export let data;

	const paket = data.info_paket || {};
	const { bonus, included, not_included, itinerari, images } = paket;
	const flights = data.flights || [];
	const hotel = data.penginapan || [];

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


console.log(data.info_paket.departure_from);
</script>

{#if paket}
	<!-- ! Header -->
	<div class="container mx-auto mt-10 lg:mt-20 px-5 sm:px-0">
		<div class="flex justify-center items-center flex-col gap-2 pt-24">
			<h6 class="font-semibold text-blue-700">{formatDateToIndonesian(paket.departure_date)}</h6>
			<h1 class="text-4xl font-semibold text-center">{paket.title}</h1>
			<!-- <p class="w-full sm:w-full md:w-1/2 lg:w-1/3 text-center">
                Lorem ipsum dolor sit amet consectetur. Eu congue sodales ac egestas a adipiscing imperdiet nulla. Tortor eu quis ut egestas arcu
            </p> -->
		</div>
	</div>
	<!-- ? Content -->
	<div class="container mx-auto py-12 px-5 sm:px-0">
		<div class="grid grid-cols-3" style="grid-auto-flow: col dense;">
			<div class="col-span-3 lg:col-span-2">
				<!-- ! Swiper JS Gallery -->
				{#if images && images.length > 0}
					<div class="swiper property-gallery-slider relative flex justify-center items-center">
						<div class="swiper-wrapper flex content-center">
							{#each images as image}
								{#if image.primary === true}
									<div class="swiper-slide" style="width: auto;">
										<div
											class="link property-gallery property-card__img flex justify-center items-center"
										>
											<img
												src="../../../Sementara.jpg"
												alt="Foto Label"
												class="img-fluid h-auto w-full"
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
												src="../../../Sementara2.jpg"
												alt="foto hotel"
												class="img-fluid h-auto w-full"
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
							
							{#if paket.departure_from && paket.departure_from.length>0 && paket.departure_from[0].name}
								<div class="flex flex-col gap-0">
									<h1 class="font-semibold">Keberangkatan Dari</h1>
									<p>{paket.departure_from[0].name} - {paket.departure_from[0].city}</p>
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
								<div class="flex flex-col gap-">
									<div>
										<h1 class="font-semibold">Hotel</h1>
										<div class="grid gap-1.5 py-1">
											{#each hotel as item}
												{#if item.hotels && Object.keys(item.hotels).length > 0}
													<div class="flex gap-1.5 justify-start items-center">
														<div class="w-3 h-3 rounded-full bg-gray-300"></div>
														<div>{item.hotels.city}, {item.hotels.name}</div>
														<div class="flex justify-center items-center gap-0.5">
															{#if item.hotels.star}
																{#each { length: parseInt(item.hotels.star) } as asd}
																	<span
																		class="material-icons"
																		style="font-size:14px;color: #F3E459;">star</span
																	>
																{/each}
															{/if}
														</div>
													</div>
												{/if}
											{/each}
										</div>
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
			<div class="col-span-3 lg:col-span-1 flex flex-col gap-3">
				<!-- ! Booking Form -->
				<Form {paket} />
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
			</div>
			<div class="col-span-3 lg:col-span-2 flex flex-col gap-3 py-3">
				<!-- ! Itinerary -->
				{#if itinerari && itinerari.length > 0}
					<AccordionIncluded title="Itinerary" className="px-0">
						<div class="flex flex-col p-3 gap-2">
							{#each itinerari as item}
								<div class="flex gap-3">
									<span class="font-bold">Hari Ke-{item.hari}</span>
									<span>{capitalizeWords(item.route)}</span>
								</div>
							{/each}
						</div>
					</AccordionIncluded>
				{/if}
				<!-- ! Persyaratan Umroh -->
				<AccordionIncluded title="Persyaratan Umroh" className="px-0">
					<div class="bg-white w-full p-5">
						<h1 class="text-xl font-bold mb-4">DP Umroh Minimal Rp 10.000.000 (Tahap 1)</h1>

						<div class="mb-6">
							<h2 class="text-lg font-semibold">Paspor Asli</h2>
							<p class="text-gray-700">
								Nama minimal 2 suku kata, dengan masa berlaku minimal 9 bulan.
							</p>
						</div>

						<div class="mb-6">
							<h2 class="text-lg font-semibold">
								Paspor foto terbaru berwarna dengan latar belakang putih
							</h2>
							<ul class="list-disc list-inside text-gray-700">
								<li>80% ukuran kepala (fokus wajah).</li>
								<li>Warna baju/hijab kontras dengan latar (bukan putih atau senada).</li>
								<li>Tidak memakai peci.</li>
								<li>Tidak memakai seragam dinas.</li>
							</ul>
						</div>

						<div class="mb-6">
							<h2 class="text-lg font-semibold">Ukuran foto :</h2>
							<ul class="list-disc list-inside text-gray-700">
								<li>3x4 = 4 lembar</li>
								<li>4x6 = 6 lembar</li>
								<li>2x3 = 2 lembar</li>
							</ul>
						</div>

						<div class="mb-6">
							<h2 class="text-lg font-semibold">Fotocopy KTP yang masih berlaku 2 lembar</h2>
						</div>

						<div class="mb-6">
							<h2 class="text-lg font-semibold">Persyaratan lain :</h2>
							<ul class="list-disc list-inside text-gray-700">
								<li>
									Suami istri : Buku nikah asli + Fotocopy 3 lembar, Kartu keluarga asli + Fotocopy
									1 lembar
								</li>
								<li>
									Suami istri + Anak : Buku nikah asli + Fotocopy 3 lembar, Kartu keluarga asli +
									Fotocopy 1 lembar
								</li>
								<li>
									Adik + Kakak : Akte kelahiran anak asli + Fotocopy 2 lembar, Akte kelahiran
									masing-masing anak + Fotocopy 2 lembar, Kartu keluarga asli + Fotocopy 1 lembar
								</li>
							</ul>
						</div>

						<p class="text-gray-700">Wanita yang berangkat sendiri dikenakan biaya Muhrim</p>
					</div>
				</AccordionIncluded>
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
