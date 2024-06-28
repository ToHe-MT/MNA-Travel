<script>
	import { goto } from '$app/navigation';

	export let umroh;
	import { formatRupiah } from '$lib/function/format.js';
</script>

<div
	class="hero relative flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-white opensans"
>
	<div class="container mx-auto p-6">
		<div class="text-black flex justify-center items-center flex-col">
			<h3 class="text-center text-blue-700 text-lg md:text-lg md-2 md:mb-2 syne font-semibold">Paket Umrah</h3>
			<h1 class="text-center text-lg md:text-xl tracking-wider mb-8 max-w-[600px]">
				Lorem ipsum dolor sit amet consectetur. Dictumst cras sed dui eu.
			</h1>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-1 {umroh && umroh.length ? umroh.length : '2'}
			 lg:grid-cols-3 {umroh && umroh.length ? umroh.length : '3'} gap-x-1 gap-y-3 md:py-12"
		>
			{#if umroh && umroh.length > 0}
				{#each umroh as paket}
					{#each { length: 3 } as item,idx}
						<div
							class="w-full flex justify-center items-center"
						>
							<div
								class="{idx===1?'':'bg-white'} w-full max-w-[400px] rounded-xl px-6 text-left" style="box-shadow: -1px -1px 11.1px 0px #0000000F;box-shadow: 2px 2px 18.9px 0px #0000000F;{idx==1?'background: linear-gradient(173.44deg, #3554D1 -1.76%, #1B2B6B 120.39%);\n':''}"

							>
								<div class="{idx===1?'py-12':'py-6'} flex gap-2 border-b-2 ">
								<div class="py-1">
									<h2 class="text-xl font-semibold {idx===1?'text-white':'text-gray-900'} syne">
										{paket.title}
									</h2>
									<p class="{idx===1?'text-white':'text-gray-700'}">Lorem ipsum dolor sit amet consectetur. Mauris nisl nam.</p>
								</div>
								</div>

								<div class="py-4 flex flex-col gap-2">
									<p class="{idx===1?'text-white':'text-gray-400'} text-base">Harga mulai dari</p>
									<p class="{idx===1?'text-white':'text-blue-500'} text-3xl font-semibold py-2 syne">
										{formatRupiah(paket.base_price)}
									</p>
								</div>
								<div class="py-4">
									<ul class="text-left mb-4">
										{#if paket.bonus && paket.bonus.length > 0}
											{#each paket.bonus as item}
												<li class="flex items-center gap-4 py-1 {idx===1?'text-white':'text-gray-500'}">
														<span class="material-icons material-symbols-outlined {idx===1?'text-white':'text-blue-700'}" style="font-size: 32px">
															check_box
														</span>
													{item.title}
												</li>
											{/each}
										{/if}
									</ul>
									<div>
										<button
											on:click={() => {
													goto(`/layanan/paket/umroh/${paket.slug}`);
												}}
											class="bg-blue-500 w-full text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-300"
										>Detail Paket
										</button>
									</div>
								</div>
							</div>
						</div>
					{/each}
				{/each}
			{/if}
		</div>
	</div>
</div>
