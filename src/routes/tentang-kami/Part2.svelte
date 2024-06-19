<script>
	import Button from '$lib/button.svelte';
</script>

<div
	class="hero relative flex items-start justify-start w-full py-10 lg:py-24"
>
	<div class="container mx-auto p-4 rounded-md flex flex-col justify-center items-center">
		<div class="text-center flex content-center justify-center flex-col py-10 lg:py-10">
			<p class="text-blue-600 font-medium tracking-wider text-base">MNA Profile</p>
			<h1 class="text-2xl sm:text-4xl font-bold tracking-wide">Lorem ipsum dolor</h1>
		</div>
		<div class="grid lg:grid-cols-2 py-2">
			<div>
				Menjalankan ibadah Umroh dan Haji Khusus aman , nyaman & terpercaya adalah impian setiap
				Muslim. Bersama MNA Travel, semua kebutuhan Anda In Syaa Allah akan terjamin. MNA Travel
				adalah penyedia layanan ibadah terbaik untuk perjalanan Umroh dan Wisata Muslim di
				Indonesia, memastikan setiap langkah perjalanan Anda penuh berkah dan ketenangan. Dengan MNA
				Travel, Anda dapat merasakan ibadah yang khusyuk dan penuh makna. Mari bergabung dengan
				ribuan jamaah yang telah mempercayakan perjalanan ibadah mereka kepada kami.
			</div>
			<div>
				MNA Travel memahami pentingnya perencanaan yang matang untuk setiap perjalanan umroh. Oleh
				karena itu, kami menawarkan berbagai paket umroh yang disesuaikan dengan kebutuhan Anda.
				Biaya umroh yang kami tawarkan sangat kompetitif, sehingga dapat mewujudkan impian ke Tanah
				Suci. Selain itu, MNA Travel memastikan semua rukun umroh terpenuhi dengan baik, sehingga
				menjadikan ibadah Anda sah dan mabrur.
			</div>
		</div>
		<div class="py-2 w-full">
			<img src="./tentang-part2.svg" alt="foto" class="rounded-md w-full" />
		</div>
		<div class="py-2 w-full">
			Sebagai travel umroh terpercaya, kami berkomitmen memberikan pelayanan terbaik mulai dari
			persiapan keberangkatan hingga kembali ke tanah air. Harga umroh yang kami tetapkan sebanding
			dengan fasilitas dan layanan yang Anda dapatkan. Paket umroh 2024 kami dirancang khusus untuk
			memberikan pengalaman ibadah yang nyaman dan penuh kesan. Jadi, jangan ragu untuk memilih MNA
			Travel sebagai mitra perjalanan ibadah Anda, dan rasakan pengalaman umroh yang
			berbeda bersama kami.
		</div>
		<div class="grid lg:grid-cols-2 py-5 lg:py-20 gap-0">
			<div class="flex justify-center items-center">
				<img src="./tentang-part2-2.svg" alt="foto" class="rounded-md w-1/2" />
			</div>
			<div class="text-left flex content-center justify-center flex-col py-10 lg:py-0">
				<p class="text-blue-600 mb-2 font-medium tracking-wider text-base">Visi</p>
				<h1 class="text-2xl sm:text-4xl font-bold mb-4 tracking-wide">Lorem Ipsum Dolor Sit</h1>
				<div class="grid gap-4">
					{#each { length: 3 } as item, idx}
						<div class="flex gap-3 justify-start items-center">
							<div class="text-sm font-bold flex justify-center items-center">
								<h1 class="h-8 w-8 bg-gray-200 rounded-full flex justify-center items-center">
									{idx + 1}
								</h1>
							</div>
							<div>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione officiis facilis
								temporibus, sequi sit commodi
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="grid lg:grid-cols-2 py-5 lg:py-20 lg:gap-20">
			<div class="text-left flex content-center justify-center flex-col py-10 lg:py-0">
				<p class="text-blue-600 mb-2 font-medium tracking-wider text-base">Misi</p>
				<h1 class="text-2xl sm:text-4xl font-bold mb-4 tracking-wide">Lorem Ipsum Dolor Sit</h1>
				<div class="grid gap-4">
					{#each { length: 3 } as item, idx}
						<div class="flex gap-3 justify-start items-center">
							<div class="text-sm font-bold flex justify-center items-center">
								<h1 class="h-8 w-8 bg-gray-200 rounded-full flex justify-center items-center">
									{idx + 1}
								</h1>
							</div>
							<div>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione officiis facilis
								temporibus, sequi sit commodi
							</div>
						</div>
					{/each}
				</div>
			</div>
			<div class="flex justify-center items-center order-first lg:order-none">
				<img src="./tentang-part2.svg" alt="foto" class="rounded-md w-full" />
			</div>
		</div>
	</div>
</div>
