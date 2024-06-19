<script>
	import { goto } from '$app/navigation';
	export let umroh;
	import { formatRupiah } from '$lib/function/format.js';
</script>

<div
	class="hero relative flex items-center justify-center w-full min-h-screen bg-cover bg-center bg-blue-700"
>
	<div class="container mx-auto p-6">
		<div class="text-white">
			<h3 class="text-center text-lg md:text-xl md-2 md:mb-6">Paket Umrah</h3>
			<h1 class="text-center text-2xl md:text-4xl font-semibold tracking-wide mb-8">
				Paket Umroh 2024-2025 Terbaik
			</h1>
		</div>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 {umroh && umroh.length ? umroh.length : '2'}
			 md:grid-cols-3 {umroh && umroh.length ? umroh.length : '3'} gap-x-6 gap-y-3 md:py-12"
		>
			{#if umroh && umroh.length > 0}
				{#each umroh as paket, idx}
					{#if idx === 1}
						<div
							class="w-full flex {umroh.length === 2
								? 'sm:justify-start'
								: ''}  justify-center items-center"
						>
							<div
								class="w-full max-w-[400px] bg-gray-100 rounded-lg shadow-lg px-6 text-center divide-y divide-dashed"
							>
								<div class="py-6">
									<h2 class="text-lg font-semibold tracking-wider text-gray-900">{paket.title}</h2>
								</div>

								<div class="py-4 flex flex-col gap-2">
									<p class="text-gray-400 text-xs">Harga mulai dari</p>
									<p class="text-blue-800 text-2xl font-bold py-2">
										{formatRupiah(paket.base_price)}
									</p>
								</div>
								<div class="py-4">
									<ul class="text-left mb-4">
										{#if paket.bonus && paket.bonus.length > 0}
											{#each paket.bonus as item}
												<li class="flex items-center gap-4 py-1 text-gray-500">
													<span class="material-icons material-symbols-outlined text-blue-800">
														event_note
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
											class="bg-blue-800 w-full text-white px-4 py-2 rounded-xl hover:bg-blue-900 transition duration-300"
											>Detail Paket
										</button>
									</div>
								</div>
							</div>
						</div>
					{:else}
						{#each { length: 3 } as item}
							<div
								class="w-full flex {umroh.length === 2
									? 'sm:justify-end'
									: ''} justify-center items-center"
							>
								<div
									class="w-full max-w-[400px] bg-white rounded-lg shadow-lg px-6 text-center divide-y divide-dashed"
								>
									<div class="py-6">
										<h2 class="text-lg font-semibold tracking-wider text-gray-900">
											{paket.title}
										</h2>
									</div>

									<div class="py-4 flex flex-col gap-2">
										<p class="text-gray-400 text-xs">Harga mulai dari</p>
										<p class="text-blue-600 text-2xl font-bold py-2">
											{formatRupiah(paket.base_price)}
										</p>
									</div>
									<div class="py-4">
										<ul class="text-left mb-4">
											{#if paket.bonus && paket.bonus.length > 0}
												{#each paket.bonus as item}
													<li class="flex items-center gap-4 py-1 text-gray-500">
														<span class="material-icons material-symbols-outlined">
															event_note
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
												class="bg-blue-800 w-full text-white px-4 py-2 rounded-xl hover:bg-blue-900 transition duration-300"
												>Detail Paket
											</button>
										</div>
									</div>
								</div>
							</div>
						{/each}
					{/if}
				{/each}
			{/if}
		</div>
	</div>
</div>
