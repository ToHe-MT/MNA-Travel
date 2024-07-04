<script>
	import { goto } from '$app/navigation';

	function handleSubmit(event) {
		event.preventDefault();
		const text = `Halo, Nama Saya ${name} (${whatsapp})\n\n ${komentar}`;
		const url = `https://wa.me/6282240406568?text=${encodeURIComponent(text)}`;
		window.open(url, '_blank');
	}

	let name;
	let whatsapp;
	let komentar;
</script>
<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-white py-16"
>
	<div class="container mx-auto p-6 flex flex-col gap-6 lg:gap-12 xl:px-24">
		<div class="opensans grid lg:grid-cols-2 gap-12">
			<div class="grid justify-start items-start gap-6 p-8 bg-white drop-shadow shadow-lg"
					 style="box-shadow: 2px 2px 12px 0px #0000000F;box-shadow: -1px -1px 5px 0px #0000000F;">
				<div class="grid gap-3">
					<h1 class="syne text-blue-500 font-semibold text-lg"> Kontak </h1>
					<h1 class="text-2xl tracking-wide"> Get In Touch With Us</h1>
					<p class="text-gray-700 tracking-wide">Kami akan merespon pesan anda secepat mungkin, segera hubungi kami dan booking umroh untuk perjalanan anda.</p>
				</div>
				<div class="grid opensans">
					<div class="flex justify-start items-start  gap-4 py-6">
						<div class="w-14 h-auto rounded-full bg-blue-50 text-blue-700 p-4 flex justify-center items-center ">
							<span class="material-icons h-full">email</span>
						</div>
						<div class="flex items-center h-full text-lg ">
							<a href="mailto:cs@mnatravel.com" target="_blank" class="hover:text-blue-700">
								cs@mnatravel.com
							</a>
						</div>
					</div>
					<div class="flex justify-start items-start  border-t border-gray-200 gap-4 py-6">
						<div class="w-14 h-auto rounded-full bg-blue-50 text-blue-700 p-4 flex justify-center items-center">
							<span class="material-icons h-full">phone</span>
						</div>
						<div class="flex items-center h-full text-lg ">
							<a href="https://wa.me/6282240406568" target="_blank" class="hover:text-blue-700"
							>+62 822-4040-6568</a
							>
						</div>
					</div>
					<div class="flex justify-start items-start  border-t border-gray-200 gap-4 py-6">
						<div class="w-14 h-auto rounded-full bg-blue-50 text-blue-700 p-4 flex justify-center items-center">
							<span class="material-icons h-full">location_on</span>
						</div>
						<div class="flex items-center h-full text-lg">
							<a
							href="https://maps.app.goo.gl/zn92phrH1Uyebe117"
							target="_blank"
							class="hover:text-blue-700"
						>Jl. Raya Condet No.35, RT.5/RW.4, Batu Ampar, Kec. Kramat jati, Kota Jakarta Timur,
							Daerah Khusus Ibukota Jakarta 13530
						</a>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col gap-6 justify-start items-start w-full md:py-3 p-5">
				<div class="grid w-full">
					<h1 class="font-medium text-2xl">Detail Anda</h1>
					<p class="text-gray-500 font-medium">Beritahu kami cara menghubungi anda kembali.</p>
				</div>
				<div class="grid w-full md:grid-cols-2 gap-6 h-fit">
					<div class="grid w-full gap-2 h-fit">
						<label for="name">Nama</label>
						<input required bind:value={name} id="name" type="text" placeholder="Jane"
									 class="rounded-xl border border-gray-500/30">
					</div>
					<div class="grid w-full gap-2 h-fit">
						<label for="whatsapp">WhatsApp</label>
						<input required bind:value={whatsapp} id="whatsapp" type="number" placeholder="08123XXXXXXX"
									 class="rounded-xl border border-gray-500/30">
					</div>
				</div>
				<div class="grid w-full gap-2 h-fit">
					<label for="message">Pertanyaan/Komentar</label>
					<textarea required bind:value={komentar} id="message" placeholder="Enter your question or comment"
										class="rounded-xl border border-gray-500/30" rows="8"></textarea>
				</div>
				<div>
					<button
						on:click={(e) => handleSubmit(e)}
						class="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-300"
					>Kirim Pesan
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
