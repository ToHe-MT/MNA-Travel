<script>

	let faq = [
			{
				"question": "Apa saja layanan yang disediakan oleh travel Umroh dan Haji ini?",
				"answer": "Kami menyediakan berbagai layanan untuk memfasilitasi perjalanan ibadah Anda, termasuk paket Umroh dan Haji, tiket pesawat, akomodasi hotel, transportasi lokal, bimbingan ibadah, serta layanan visa. Semua ini kami lakukan dengan niat tulus untuk membantu Anda melaksanakan ibadah dengan khusyuk dan nyaman."
			},
			{
				"question": "Apa keunggulan memilih travel Umroh dan Haji ini?",
				"answer": "Dengan memilih kami, Anda akan mendapatkan pelayanan yang profesional dan ramah, didukung oleh tim yang berpengalaman dan berdedikasi. Kami berkomitmen untuk memberikan kenyamanan dan kemudahan bagi setiap jamaah dalam menjalankan ibadah, mengutamakan keselamatan, dan memastikan bahwa semua proses sesuai dengan syariat Islam."
			},
			{
				"question": "Bagaimana cara mendaftar untuk perjalanan Umroh atau Haji?",
				"answer": "Anda dapat mendaftar dengan mengunjungi kantor kami atau melalui situs web resmi kami. Kami siap membantu proses pendaftaran dengan langkah-langkah yang mudah dan transparan, serta memberikan informasi lengkap tentang persyaratan dan jadwal keberangkatan."
			},
			{
				"question": "Apakah travel ini menyediakan pembimbing ibadah selama perjalanan?",
				"answer": "Ya, kami menyediakan pembimbing ibadah yang berpengalaman dan berilmu. Mereka akan mendampingi Anda sepanjang perjalanan, memberikan bimbingan tentang tata cara ibadah yang benar, serta menjawab pertanyaan-pertanyaan seputar pelaksanaan ibadah Umroh dan Haji."
			},
			{
				"question": "Apakah ada paket khusus untuk keluarga atau kelompok?",
				"answer": "Kami menyediakan berbagai paket, termasuk paket keluarga dan kelompok. Paket ini dirancang untuk memberikan kenyamanan tambahan dan harga yang lebih terjangkau bagi Anda yang ingin beribadah bersama keluarga atau teman-teman."
			},
			{
				"question": "Bagaimana dengan akomodasi selama di Tanah Suci?",
				"answer": "Kami menyediakan akomodasi yang nyaman dan dekat dengan lokasi ibadah di Makkah dan Madinah. Kami memastikan bahwa hotel-hotel yang kami pilih memiliki fasilitas yang memadai untuk menunjang kenyamanan dan kebutuhan Anda selama beribadah."
			},
			{
				"question": "Bagaimana travel ini menangani kendala atau masalah yang mungkin terjadi selama perjalanan?",
				"answer": "Kami memiliki tim yang siap membantu Anda 24 jam sehari untuk menangani segala kendala atau masalah yang mungkin terjadi selama perjalanan. Kami berdoa dan berusaha untuk memberikan pelayanan terbaik agar ibadah Anda berjalan lancar dan penuh berkah."
			},
			{
				"question": "Apakah ada layanan tambahan yang ditawarkan?",
				"answer": "Selain layanan utama, kami juga menyediakan layanan tambahan seperti pengurusan badal Haji, kunjungan ziarah ke tempat-tempat bersejarah, dan seminar persiapan ibadah. Semua layanan ini bertujuan untuk memperkaya pengalaman ibadah Anda dan menambah pengetahuan tentang sejarah Islam."
			},
			{
				"question": "Bagaimana cara melakukan pembayaran untuk paket Umroh atau Haji?",
				"answer": "Kami menyediakan berbagai metode pembayaran yang mudah dan aman. Anda dapat melakukan pembayaran melalui transfer bank, kartu kredit, atau langsung di kantor kami. Kami juga menyediakan opsi cicilan untuk memudahkan jamaah dalam membayar biaya perjalanan."
			},
			{
				"question": "Bagaimana cara memastikan bahwa saya mendapatkan informasi terbaru tentang jadwal dan paket Umroh atau Haji?",
				"answer": "Anda dapat menghubungi kami melalui telepon, email, atau media sosial untuk mendapatkan informasi terbaru. Kami juga menyarankan Anda untuk berlangganan newsletter kami agar tidak ketinggalan informasi penting tentang jadwal keberangkatan dan penawaran spesial."
			}
		]


	import AccordionIncluded from '$lib/components/AccordionIncluded.svelte';
</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-white overflow-hidden pt-16"
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


		</div>

	</div>
</div>
