<script>

	let faq = [
		{
			'question': 'Apa saja layanan yang disediakan oleh travel Umroh dan Haji ini?',
			'answer': 'Kami menyediakan berbagai layanan untuk memfasilitasi perjalanan ibadah Anda, termasuk paket Umroh dan Haji, tiket pesawat, akomodasi hotel, transportasi lokal, bimbingan ibadah, serta layanan visa. Semua ini kami lakukan dengan niat tulus untuk membantu Anda melaksanakan ibadah dengan khusyuk dan nyaman.'
		},
		{
			'question': 'Apa keunggulan memilih travel Umroh dan Haji ini?',
			'answer': 'Dengan memilih kami, Anda akan mendapatkan pelayanan yang profesional dan ramah, didukung oleh tim yang berpengalaman dan berdedikasi. Kami berkomitmen untuk memberikan kenyamanan dan kemudahan bagi setiap jamaah dalam menjalankan ibadah, mengutamakan keselamatan, dan memastikan bahwa semua proses sesuai dengan syariat Islam.'
		},
		{
			'question': 'Bagaimana cara mendaftar untuk perjalanan Umroh atau Haji?',
			'answer': 'Anda dapat mendaftar dengan mengunjungi kantor kami atau melalui situs web resmi kami. Kami siap membantu proses pendaftaran dengan langkah-langkah yang mudah dan transparan, serta memberikan informasi lengkap tentang persyaratan dan jadwal keberangkatan.'
		}
	];

	import AccordionIncluded from '$lib/components/AccordionIncluded.svelte';
</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-white overflow-hidden"
>
	<div class="container mx-auto p-6 flex flex-col flex-grow py-12">
		<div class="text-black flex justify-center items-center flex-col">
			<h3 class="text-center text-blue-700 text-lg md:text-xl md-2 md:mb-2 syne font-semibold">FAQ</h3>
			<h1 class="text-center text-lg md:text-2xl tracking-wide mb-8 max-w-[1000px]">
				Frequently Asked Question
			</h1>
		</div>
		<div class="flex flex-col gap-5 justify-center items-center flex-wrap py-6">
			{#each faq as item}
				<AccordionIncluded title={item.question} className="px-0 w-full max-w-[800px]">
					<div class="bg-white w-full px-5 py-3">
						<div class="mb-3">
<!--							<h2 class="text-lg font-semibold">Lorem</h2>-->
							<p class="text-gray-700">
								{item.answer}
							</p>
						</div>

					</div>
				</AccordionIncluded>
			{/each}
			<a
				href="/faq"
				class="contact py-4"
			>
			<button class="bg-blue-700 px-6 py-2 rounded-xl font-medium tracking-wide opensans text-white flex justify-center items-center gap-2">
				More Question and Answer <div class="w-7 h-7">
				<svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="currentColor" stroke-width="0.8399999999999999" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
			</div>
			</button></a>

		</div>

	</div>
</div>
