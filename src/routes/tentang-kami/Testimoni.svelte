<script>
	import { onMount, onDestroy } from 'svelte';
	import Swiper from 'swiper';
	import 'swiper/css';
	import { Navigation, Pagination } from 'swiper/modules';

	let gambarSlider;
	onMount(() => {
		gambarSlider = new Swiper('.card-slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				1000: {
					slidesPerView: 2
				},
				1300: {
					slidesPerView: 3
				}
			},
			modules: [Navigation, Pagination]
		});
	});
	onDestroy(() => {
		if (gambarSlider) {
			gambarSlider = null;
		}
	});

	let testimonials = [
		{
			picture_id: './testimoni-1.jpg',
			description: 'umroh sama orang tua salah satu cita-cita saya, alhamdulillah bisa terwujud. Thank youuuu MNA TRAVEL'
		},
		{
			picture_id: './testimoni-2.jpg',
			description: "Udah nabung buat umroh dari pas sekolah, terus ga nyangka banget bisa terwujud. Happy bgt bisa umroh sama MNA travel🥹✨❤"
		},
		{
			picture_id: './testimoni-3.jpg',
			description: "Mashaallah aku seneng banget, udah bisa berangkat umroh di usia muda bareng MNA Travel, pilihan paketnya bener2 affordable buat anak2 muda"
		},
		{
			picture_id: './testimoni-4.jpg',
			description: "Alhamdulillah bisa umroh bareng Ibu, pelayanan dari MNA travel juga ok banget, semoga bisa balik lagi ke tanah suci✨"
		},
	];
</script>

<div
	class="testimoni hero relative flex items-center justify-center w-full bg-cover bg-center bg-white overflow-hidden"
>
	<div class="container mx-auto p-6 flex flex-col flex-grow py-12">
		<div class="text-black flex justify-center items-center flex-col">
			<h3 class="text-center text-blue-700 text-lg md:text-lg md-2 md:mb-2 syne font-semibold">Testimonial</h3>
			<h1 class="text-center text-lg md:text-xl tracking-wider mb-2 max-w-[600px]">
				Client Review dan Feedback
			</h1>
		</div>
		<div class="flex-grow">
			<div class="swiper card-slider">
				<div class="swiper-wrapper py-10">
					{#each testimonials as item,idx}
						<div class="swiper-slide md:p-0 h-[400px]">
							<div class="flex w-full bg-white rounded-lg drop-shadow-md h-[400px]">
								<div class="w-[300px]">
									<img src={item.picture_id} alt="" class="h-full w-auto rounded-l-lg object-cover">
								</div>
								<div class="w-full bg-white rounded-lg flex flex-col justify-between p-4 md:p-10 gap-4 h-full ">
									<div class="py-6">
										<svg
											width="26"
											height="24"
											viewBox="0 0 26 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M15.6504 8.91406V0.515625H25.416C25.416 1.10156 25.3997 2.17578 25.3672 3.73828C25.3346 5.30078 25.3021 6.42383 25.2695 7.10742C25.237 7.75846 25.1556 8.78385 25.0254 10.1836C24.9277 11.5508 24.7812 12.6087 24.5859 13.3574C24.4232 14.0736 24.1628 15.0013 23.8047 16.1406C23.4792 17.2799 23.056 18.224 22.5352 18.9727C22.0469 19.7214 21.4284 20.5189 20.6797 21.3652C19.9635 22.2116 19.1335 22.9603 18.1895 23.6113L15.6992 20.5352C16.5456 19.819 17.3919 18.5169 18.2383 16.6289C19.0846 14.7083 19.5404 12.446 19.6055 9.8418L15.6504 8.91406ZM0.953125 8.91406V0.515625H10.7676C10.7676 1.23177 10.7513 2.46875 10.7188 4.22656C10.7188 5.95182 10.7025 7.23763 10.6699 8.08398C10.6374 8.89779 10.556 10.0371 10.4258 11.502C10.3281 12.9668 10.1165 14.1549 9.79102 15.0664C9.49805 15.9453 9.10742 16.9544 8.61914 18.0938C8.13086 19.2331 7.47982 20.2422 6.66602 21.1211C5.88477 22 4.95703 22.8301 3.88281 23.6113L1.44141 20.5352C2.28776 19.7865 3.13411 18.4681 3.98047 16.5801C4.82682 14.6595 5.28255 12.3971 5.34766 9.79297L4.27344 9.59766C3.52474 9.46745 2.77604 9.32096 2.02734 9.1582L0.953125 8.91406Z"
												fill="#3554D1"
											/>
										</svg>
									</div>
									<div>
										<p class="text-black">
											{item.description}
										</p>
									</div>
									<div class="flex items-center">
										<div class="flex flex-col col-span-3">
											<h3 class="font-semibold text-sm md:text-lg">Evangeline Dominica</h3>
											<p class="text-sm md:text-base">Branding company</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="flex justify-between items-center min-h-16">
				<div class="swiper-button-prev">
					<span class="material-icons material-symbols-outlined"> chevron_left </span>
				</div>
				<div class="swiper-pagination flex"></div>
				<div class="swiper-button-next">
					<span class="material-icons material-symbols-outlined"> chevron_right </span>
				</div>
			</div>
		</div>
	</div>
</div>
