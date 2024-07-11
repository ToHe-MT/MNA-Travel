<script>
	import { capitalizeWords, formatRupiah, getDifferenceInDays } from '$lib/function/format.js';
	import { goto } from '$app/navigation';

	export let idx = 0;
	export let paket = {
		title: 'Umroh Premium',
		base_price: 10_000_000,
		bonus: [
			{ title: 'Kereta Cepat' },
			{ title: 'City Tour Thaif' },
			{ title: 'Kunjungan Museum Wahyu' },
			{ title: 'Albaik Chicken' },
			{ title: 'Sertifikat Umroh' }
		],
		slug: 'asdb'
	};
	console.log(paket);
</script>

<a href="/layanan/paket/umroh/{paket.slug}"
	 class="hover:scale-105 transition-all drop-shadow-lg {idx===1?'border-blue-700 border-2 rounded-lg h-max':''}">
	{#if idx === 1 }
		<div class="bg-blue-700 text-white p-4 flex text-center justify-center">
			<h1> Paling Banyak Dipilih</h1>
		</div>
	{/if}
	<div class=" {idx===1?'bg-blue-100':'rounded-t-lg bg-blue-900'} p-6 grid gap-3 md:gap-6">
		{#if paket.level_paket}
			<div class="bg-blue-500 px-6 py-2 w-fit">
				<h1 class="text-white text-xs font-semibold">
					{paket.level_paket.toUpperCase() || ""}
				</h1>
			</div>
			<div class="grid gap-2 {idx==1?'text-black':'text-white'}">
				<h1 class="font-medium md:text-lg">
					{capitalizeWords(paket.title)}
				</h1>
				<h2 class="text-2xl md:text-3xl font-semibold">
					{formatRupiah(paket.base_price)}
				</h2>
				<h3 class="text-sm font-medium">
					{#if paket.tipe_waktu === "month"}
						{paket.duration}
					{:else}
						{getDifferenceInDays(
							paket.departure_date,
							paket.return_date
						)}
					{/if}
					hari perjalanan - biaya <span class="font-semibold"> ALL IN</span>
				</h3>
			</div>
		{/if}
	</div>
	<div class="bg-white md:rounded-b-lg p-6 grid gap-3 md:gap-4 h-max text-sm">
		{#if paket.airlines && paket.airlines.length > 0}
			{#each paket.airlines.slice(1) as item}
				<li class="flex items-center gap-4 text-black">
																		<span
																			class="material-icons material-symbols-outlined {idx===1?'text-black':'text-black'}"
																			style="font-size: 18px">
																			flight
																		</span>
					{item.airline_label} - {paket.type_flight}
				</li>
			{/each}
		{/if}
		{#if paket.base_type}

			<li class="flex items-center gap-4 text-black">
																		<span
																			class="material-icons material-symbols-outlined {idx===1?'text-black':'text-black'}"
																			style="font-size: 18px">
																			hotel
																		</span>
				{capitalizeWords(paket.base_type)}
				{#if paket.base_type === "quad"}
					Room (4 Orang)
				{:else if paket.base_type === "double"}
					Room (2 Orang)
				{:else if paket.base_type === "triple"}
					Room (3 Orang)
				{/if}
			</li>
		{/if}
		{#if paket.hotels && paket.hotels.length > 0}
			{#each paket.hotels as item}
				<li class="flex items-center gap-4 text-black">
					<span
						class="material-icons material-symbols-outlined {idx===1?'text-black':'text-black'}"
						style="font-size: 18px">
						apartment
					</span>
					<div class="gap-0">

						<span>Hotel {capitalizeWords(item.hotels.country)}: {capitalizeWords(item.hotels.name)}</span>
						<span class="pl-1">
						{#each { length: parseInt(item.hotels.star) } as item}
											<span
												class="material-icons material-symbols-outlined text-yellow-200"
												style="font-size: 18px">star</span>
						{/each}
						</span>

						/setaraf
					</div>
				</li>
			{/each}
		{/if}
		{#if paket.bonus && paket.bonus.length > 0}
			{#each paket.bonus as item}
				{#if item.logo === ""}
					<li class="flex items-center gap-4 text-black">
						<img src="{import.meta.env.VITE_S3_PUBLIC_URL}/icon/{item.custom_icon}" alt="" height=18 width="18">

						{@html item.title}
					</li>
				{:else}
					<li class="flex items-center gap-4 text-black">
																		<span
																			class="material-icons material-symbols-outlined {idx===1?'text-black':'text-black'}"
																			style="font-size: 18px">
																			{item.logo}
																		</span>

						{@html item.title}
					</li>
				{/if}
			{/each}
		{/if}
	</div>
	<div class="flex justify-end md:hidden bg-white rounded-b-lg px-4 py-2">
		<h1 class="text-gray-400 text-xs font-medium">Click for Details</h1>
	</div>
</a>
<!--<div-->
<!--	class="w-full flex justify-center items-center"-->
<!--&gt;-->
<!--	<div-->
<!--		class="{idx===1?'':'bg-white'} w-full max-w-[500px] rounded-xl px-6 text-left drop-shadow"-->
<!--		style="box-shadow: -1px -1px 11.1px 0px #0000000F;box-shadow: 2px 2px 18.9px 0px #0000000F;{idx==1?'background: linear-gradient(173.44deg, #3554D1 -1.76%, #1B2B6B 120.39%);\n':''}"-->

<!--	>-->
<!--		<div class="{idx===1?'py-12':'py-6'} flex gap-4 border-b-2 ">-->
<!--			<div class="py-1 h-12 w-12">-->
<!--				{#if idx == 0 }-->
<!--					<img src="/ketupat.svg" alt="">-->
<!--				{:else if idx === 1}-->
<!--					<img src="/star.svg" alt="">-->
<!--				{:else}-->
<!--					<img src="/diamond.svg" alt="">-->
<!--				{/if}-->
<!--			</div>-->
<!--			<div class="py-1">-->
<!--				<h2 class="text-xl font-semibold {idx===1?'text-white':'text-gray-900'} syne">-->
<!--					{capitalizeWords(paket.title)}-->
<!--				</h2>-->
<!--				<p class="{idx===1?'text-white':'text-gray-700'}">Lorem ipsum dolor sit amet consectetur. Mauris nisl nam.</p>-->
<!--			</div>-->
<!--		</div>-->

<!--		<div class="py-4 flex flex-col gap-2">-->
<!--			<p class="{idx===1?'text-white':'text-gray-400'} text-base">Harga mulai dari</p>-->
<!--			<p class="{idx===1?'text-white':'text-blue-500'} text-3xl font-semibold py-2 syne">-->
<!--				{formatRupiah(paket.base_price)}-->
<!--			</p>-->
<!--		</div>-->
<!--		<div class="py-4">-->
<!--			<ul class="text-left mb-4">-->
<!--				{#if paket.bonus && paket.bonus.length > 0}-->
<!--					{#each paket.bonus as item}-->
<!--						<li class="flex items-center gap-4 py-1 {idx===1?'text-white':'text-gray-500'}">-->
<!--														<span-->
<!--															class="material-icons material-symbols-outlined {idx===1?'text-white':'text-blue-700'}"-->
<!--															style="font-size: 20px">-->
<!--															{item.logo}-->
<!--														</span>-->
<!--							{item.title}-->
<!--						</li>-->
<!--					{/each}-->
<!--				{/if}-->
<!--			</ul>-->
<!--			<div>-->
<!--				<button-->
<!--					on:click={() => {-->
<!--													goto(`/layanan/paket/umroh/${paket.slug}`);-->
<!--												}}-->
<!--					class="bg-blue-500 w-full text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-300"-->
<!--				>Detail Paket-->
<!--				</button>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
<!--</div>-->