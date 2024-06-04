<script>
	export let umroh;
	import { currencyFormatter } from '$lib/function/format.js';
</script>

<div
	class="hero relative flex items-center justify-center w-full h-screen bg-cover bg-center bg-blue-700"
>
	<div class="container mx-auto p-6">
		<div class="text-white">
			<h3 class="text-center text-xl mb-8">Paket Umrah</h3>
			<h1 class="text-center text-4xl font-semibold tracking-wide mb-8">Layanan Paket Umrah</h1>
		</div>
		<div class="flex flex-wrap justify-center gap-12 py-12">
			{#if umroh && umroh.length > 0}
				{#each umroh as paket}
					<div
						class="bg-white rounded-lg shadow-lg px-6 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 text-center divide-y divide-dashed"
					>
						<div class="py-6">
							<h2 class="text-lg font-semibold tracking-wider">{paket.title}</h2>
						</div>

						<div class="py-4 flex flex-col gap-2">
							<p class="text-gray-400 text-xs">Harga mulai dari</p>
							<p class="text-blue-600 text-2xl font-bold py-2">
								{currencyFormatter(paket.base_price)}
							</p>
						</div>
						<div class="py-4">
							<ul class="text-left mb-4">
								{#if paket.bonus && paket.bonus.length > 0}
									{#each paket.bonus as item}
										<li class="flex items-center">
											<svg
												class="w-4 h-4 mr-2"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													d="M16.707 4.293a1 1 0 010 1.414L8.414 14l-4.707-4.707a1 1 0 111.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												></path>
											</svg>
											{item.title}
										</li>
									{/each}
								{/if}
							</ul>
							<div>
                                <button
                                    class="bg-blue-700 w-full text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-300"
                                    >Detail Paket</button
                                >
                            </div>
						</div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>
