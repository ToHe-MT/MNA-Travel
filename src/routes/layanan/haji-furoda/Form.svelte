<script>
	let name;
	let whatsapp;
	let location;

	function handleSubmit(event) {
		event.preventDefault();
		let text = `Halo, Nama saya ${name}, ${whatsapp} dari ${location} \n\n Ingin Booking Paket Haji Furoda`;

	const url = `https://wa.me/6282240406568?text=${encodeURIComponent(text)}`;
	window.open(url, '_blank');}
</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-white py-16"
>
	<div class="container mx-auto p-6 flex flex-col gap-6 lg:gap-12 xl:px-24">
		<div class="text-black flex justify-center items-center flex-col gap-6 md:gap-8">
			<h3 class="text-center text-black text-2xl md:text-4xl md-2 md:mb-2 font-semibold"> Form Booking Haji Furoda </h3>
			<p class="text-start md:text-lg ">
				Silakan isi formulir berikut ini, In Syaa Allah kami akan menghubungi Anda dan mengirimkan penawaran lengkap,
				dokumentasi perjalanan Haji Furoda sebelumnya, serta informasi lainnya yang memberikan gambaran terbaik tentang
				program Haji Furoda yang akan dilaksanakan.
			</p>
		</div>
		<form on:submit={handleSubmit}>
			<div class="w-full flex justify-center items-center">

				<div class="flex flex-col rounded-lg border max-w-[600px] w-full"
						 style="box-shadow: 2px 2px 12px 0px #0000000F;box-shadow: -1px -1px 5px 0px #0000000F;"
				>
					<div class="rounded-t-lg bg-blue-200 w-full">
						<div class="flex justify-start items-center p-3 px-5">
							<h1 class="text-lg font-medium">Booking Form</h1>
						</div>
					</div>
					<div class="bg-white rounded-b-lg ">
						<div class="flex flex-col p-5 gap-5">
							<div>
								<label for="price" class="block text-sm font-medium p-1 text-gray-900">Nama Pemesan</label
								>
								<div class="relative rounded-md shadow-sm">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
							<span class="material-icons" style="color: #2C2D2E80; opacity:70%; font-size:20px"
							>person</span
							>
									</div>
									<input
										bind:value={name}
										type="text"
										name="nama_pemesan"
										id="nama_pemesan"
										class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										placeholder="Nama Pemesan"
									/>
								</div>
							</div>
							<div>
								<label for="price" class="block text-sm font-medium p-1 text-gray-900">Asal Kota / Provinsi</label>
								<div class="relative rounded-md shadow-sm">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
							<span class="material-icons" style="color: #2C2D2E80; opacity:70%; font-size:20px"
							>location_on</span
							>
									</div>
									<input
										bind:value={location}
										type="text"
										name="location"
										id="location"
										class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										placeholder="Semarang, Jawa Tengah"
									/>
								</div>
							</div>
							<div>
								<label for="price" class="block text-sm font-medium p-1 text-gray-900">No Whatsapp</label>
								<div class="relative rounded-md shadow-sm">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
							<span class="material-icons" style="color: #2C2D2E80; opacity:70%; font-size:20px"
							>call</span
							>
									</div>
									<input
										bind:value={whatsapp}
										type="number"
										name="no_whatsapp"
										id="no_whatsapp"
										class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										placeholder="+6281386960157"
									/>
								</div>
							</div>
						</div>
						<div class="w-full flex justify-end items-center px-5 py-3">
							<button
								type="submit"
								on:click={handleSubmit}
								class="flex justify-center items-center p-3 px-5 rounded-xl bg-blue-800"
							>
								<h1 class="text-base font-medium text-white">Konsultasi Paket</h1>
							</button>
						</div>
					</div>
				</div>
		</form>
	</div>
</div>