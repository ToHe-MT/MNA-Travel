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
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-white opensans"
>
	<div class="container mx-auto p-6 py-20">
		<div class="opensans grid lg:grid-cols-2 gap-12 bg-white">
			<div class="grid justify-start items-start gap-6">
				<div><img src="/hero.svg" alt="" class="rounded-xl"></div>
				<div class="grid gap-1">
					<h1 class="syne text-blue-500 font-semibold text-lg"> Kontak </h1>
					<h1 class="text-2xl tracking-wide"> Get In Touch With Us</h1>
					<p class="text-gray-700 tracking-wide">
						Kami akan merespon pesan anda secepat mungkin, segera hubungi kami dan booking umroh untuk perjalanan anda.</p>
				</div>
			</div>
			<div class="flex flex-col gap-6 justify-start items-start w-full md:py-3">
				<div class="grid w-full">
					<h1 class="font-medium text-2xl">Detail Anda</h1>
					<p class="text-gray-500 font-medium">Beritahu kami cara menghubungi anda kembali.</p>
				</div>
				<div class="grid w-full lg:grid-cols-2 gap-6 h-fit">
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
										class="rounded-xl border border-gray-500/30"></textarea>
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
