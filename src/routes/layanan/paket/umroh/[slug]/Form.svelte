<script>
	import { formatRupiah, formatDateToIndonesian, capitalizeWords } from '$lib/function/format.js';
	import Dropdown from '$lib/components/Dropdown.svelte';

	export let paket;

	let total_pax = 0;
	let jumlah_pax = {
		quad: 0,
		triple: 0,
		double: 0
	};
	let selected_paket = paket.hotel_price_quad
		? 'quad'
		: paket.hotel_price_double
			? 'double'
			: paket.hotel_price_triple
				? 'triple'
				: '';

	let listPaket = [];

	$: total_harga = total_pax * paket.base_price;

	if (paket.hotel_price_quad) {
		listPaket.push('quad');
	}
	if (paket.hotel_price_triple) {
		listPaket.push('triple');
	}
	if (paket.hotel_price_double) {
		listPaket.push('double');
	}
	if (listPaket.length > 1) {
		listPaket.push('Custom');
	}

	function minusTotalPax() {
		if (total_pax > 0) {
			total_pax--;
		}
	}
	function plusTotalPax() {
		total_pax++;
	}

	function handleListPaket(event) {
		selected_paket = event.detail.menu;
	}

	let form;

	let name, whatsapp;
	async function handleSubmit(event) {
		event.preventDefault();
		let text;
		if (selected_paket === 'Custom') {
			text = `Halo, Nama Saya ${name} (${whatsapp})\n\nIngin Memesan Paket ${paket.title} dari MNA Travel. \n \n Jenis Kamar : ${selected_paket} \n\n`;
			if (jumlah_pax.quad > 0) {
				text += `Total Pax Quad : ${jumlah_pax.quad} Pax \n Harga Quad Per Pax: ${formatRupiah(paket.hotel_price_quad)} \n\n`;
			}
			if (jumlah_pax.triple > 0) {
				text += `Total Pax Triple : ${jumlah_pax.triple} Pax \n Harga Triple Per Pax: ${formatRupiah(paket.hotel_price_triple)} \n\n`;
			}
			if (jumlah_pax.double > 0) {
				text += `Total Pax Double : ${jumlah_pax.double} Pax \n Harga Double Per Pax: ${formatRupiah(paket.hotel_price_double)} \n\n`;
			}
			text += `Total Harga: ${formatRupiah(
				jumlah_pax.quad * paket.hotel_price_quad +
					jumlah_pax.triple * paket.hotel_price_triple +
					jumlah_pax.double * paket.hotel_price_double
			)} \n Total Pax: ${jumlah_pax.quad + jumlah_pax.triple + jumlah_pax.double}`;
		} else {
			text = `Halo, Nama Saya ${name} (${whatsapp})\n\nIngin Memesan Paket ${paket.title} dari MNA Travel. \n \n Jenis Kamar : ${selected_paket} \n Total Pax: ${total_pax} Pax \n Harga Per Pax: ${formatRupiah(paket[`hotel_price_${selected_paket}`])} \n\n Total Harga: ${formatRupiah(total_harga)}`;
		}

		console.log(text);
		const url = `https://wa.me/6282240406568?text=${encodeURIComponent(text)}`;
		window.open(url, '_blank');
	}
</script>

<form class="w-full px-0 lg:px-6" on:submit={handleSubmit}>
	<div
		class="flex flex-col rounded-lg border"
		style="box-shadow: 2px 2px 12px 0px #0000000F;box-shadow: -1px -1px 5px 0px #0000000F;"
	>
		<div class="rounded-t-lg bg-blue-200 w-full">
			<div class="flex justify-start items-center p-3 px-5">
				<h1 class="text-lg font-medium">Booking Form</h1>
			</div>
		</div>
		<div class="bg-white rounded-b-lg">
			<div class="flex flex-col p-5 gap-5">
				<div class="flex justify-start items-start">
					<div class="text-sm font-semibold p-1">start from</div>
					<div class="text-2xl font-semibold">
						{formatRupiah(paket.base_price)}/pax
					</div>
				</div>
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
				{#if selected_paket !== 'Custom'}
					<div>
						<div class="flex justify-between">
							<h1>Total Pax</h1>
							<div class="flex">
								<button
									type="button"
									on:click={minusTotalPax}
									class="h-full flex justify-center items-center"
								>
									<span class="material-icons" style="color: #2C2D2E80; opacity:70%; font-size:20px"
										>remove</span
									>
								</button>
								<input
									type="number"
									name="total_pax"
									id="total_pax"
									placeholder="Masukan Total Jamaah"
									style="display: none;"
									bind:value={total_pax}
								/>
								<div class="flex justify-center items-center px-4">
									<h1>{total_pax}</h1>
								</div>
								<button
									type="button"
									on:click={plusTotalPax}
									class="h-full flex justify-center items-center"
								>
									<span class="material-icons" style="color: #2C2D2E80; opacity:70%; font-size:20px"
										>add</span
									>
								</button>
							</div>
						</div>
					</div>
				{/if}
				<div>
					<div class="flex justify-between">
						<h1>Jenis Kamar</h1>
						<Dropdown
							changeFirst={false}
							buttonClass="py-0 px-0"
							hover=""
							title={selected_paket}
							listOption={listPaket}
							on:menuSelected={handleListPaket}
							isSelected={true}
						/>
						<input
							type="text"
							name="jenis_kamar"
							bind:value={selected_paket}
							style="display: none;"
						/>
					</div>
				</div>
				{#if selected_paket === 'quad'}
					<div>
						<div class="flex justify-between">
							<h1>quad</h1>
							<h1 class="px-3">{formatRupiah(paket.hotel_price_quad)}</h1>
							<input type="number" bind:value={total_pax} name="pax_quad" style="display: none;" />
						</div>
					</div>
					<div>
						<div class="flex justify-between">
							<h1 class="font-semibold">Total Harga</h1>
							<input
								type="number"
								value={total_pax * paket.hotel_price_quad}
								name="total_harga"
								style="display: none;"
							/>
							<h1 class="font-semibold px-3">{formatRupiah(total_pax * paket.hotel_price_quad)}</h1>
						</div>
					</div>
				{:else if selected_paket === 'triple'}
					<div>
						<div class="flex justify-between">
							<h1>triple</h1>
							<input
								type="number"
								bind:value={total_pax}
								name="pax_triple"
								style="display: none;"
							/>
							<h1 class="px-3">{formatRupiah(paket.hotel_price_triple)}</h1>
						</div>
					</div>
					<div>
						<div class="flex justify-between">
							<h1 class="font-semibold">Total Harga</h1>
							<input
								type="number"
								value={total_pax * paket.hotel_price_triple}
								name="total_harga"
								style="display: none;"
							/>
							<h1 class="font-semibold px-3">
								{formatRupiah(total_pax * paket.hotel_price_triple)}
							</h1>
						</div>
					</div>
				{:else if selected_paket === 'double'}
					<div>
						<div class="flex justify-between">
							<h1>double</h1>
							<input
								type="number"
								bind:value={total_pax}
								name="pax_double"
								style="display: none;"
							/>
							<h1 class="px-3">{formatRupiah(paket.hotel_price_double)}</h1>
						</div>
					</div>
					<div>
						<div class="flex justify-between">
							<h1 class="font-semibold">Total Harga</h1>
							<input
								type="number"
								value={total_pax * paket.hotel_price_double}
								name="total_harga"
								style="display: none;"
							/>
							<h1 class="font-semibold px-3">
								{formatRupiah(total_pax * paket.hotel_price_double)}
							</h1>
						</div>
					</div>
				{:else if selected_paket === 'Custom'}
					{#each [{ id: 'quad', price: paket.hotel_price_quad }, { id: 'triple', price: paket.hotel_price_triple }, { id: 'double', price: paket.hotel_price_double }] as item}
						{#if item.price}
							<div>
								<div class="flex justify-between">
									<h1>{capitalizeWords(item.id)} - {formatRupiah(item.price)}</h1>
									<div class="flex">
										<button
											type="button"
											on:click={() => {
												if (jumlah_pax[item.id] > 0) jumlah_pax[item.id]--;
											}}
											class="h-full flex justify-center items-center"
										>
											<span
												class="material-icons"
												style="color: #2C2D2E80; opacity:70%; font-size:20px">remove</span
											>
										</button>
										<input
											type="number"
											name={`jumlah_pax_${item.id}`}
											id={`jumlah_pax_${item.id}`}
											style="display: none;"
											bind:value={jumlah_pax[item.id]}
										/>
										<div class="flex justify-center items-center px-4">
											<h1>{jumlah_pax[item.id]}</h1>
										</div>
										<button
											type="button"
											on:click={() => jumlah_pax[item.id]++}
											class="h-full flex justify-center items-center"
										>
											<span
												class="material-icons"
												style="color: #2C2D2E80; opacity:70%; font-size:20px">add</span
											>
										</button>
									</div>
								</div>
							</div>
						{/if}
					{/each}
					<div>
						<div class="flex justify-between">
							<h1>Total Pax</h1>
							<div class="flex">
								<input
									type="number"
									name="total_pax"
									id="total_pax"
									placeholder="Masukan Total Jamaah"
									style="display: none;"
									value={jumlah_pax.quad + jumlah_pax.triple + jumlah_pax.double}
								/>
								<div class="flex justify-center items-center px-4">
									<h1>{jumlah_pax.quad + jumlah_pax.triple + jumlah_pax.double}</h1>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div class="flex justify-between">
							<h1 class="font-semibold">Total Harga</h1>
							<input
								type="number"
								value={total_pax * paket.hotel_price_triple}
								name="total_harga"
								style="display: none;"
							/>
							<h1 class="font-semibold px-3">
								{formatRupiah(
									jumlah_pax.quad * paket.hotel_price_quad +
										jumlah_pax.triple * paket.hotel_price_triple +
										jumlah_pax.double * paket.hotel_price_double
								)}
							</h1>
						</div>
					</div>
				{/if}
			</div>
		</div>
		<div class=" w-full px-5 pb-5">
			<button
				type="submit"
				on:click={handleSubmit}
				class=" w-full flex justify-center items-center p-2 px-2 rounded-xl bg-blue-500"
			>
				<h1 class="text-base font-medium text-white">Konsultasi Paket</h1>
			</button>
		</div>
	</div>
</form>
