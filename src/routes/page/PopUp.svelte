<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { onMount } from 'svelte';
	/** Internal helpers */
	import { fade, scale } from 'svelte/transition';

	let y: number;
	let hasClicked = false;
	let name = '';
	let whatsapp = '';

	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true,
		preventScroll: true
	});

	function handleScroll() {
		const button = document.querySelector('#OPEN') as HTMLButtonElement;
		if (button) {
			button.click();
			hasClicked = true;
		}
	}

	$: if (y > 800 && !hasClicked) {
		handleScroll();
	}

	function handleSubmit(event) {
		event.preventDefault();
		const text = `Halo, Nama Saya ${name} (${whatsapp})\n\nTolong kirimkan saya paket lengkap dari MNA Travel`;
		const url = `https://wa.me/6282240406568?text=${encodeURIComponent(text)}`;
		window.open(url, '_blank');
	}
</script>

<svelte:window bind:scrollY={y} />

<button {...$trigger} use:trigger class="hidden" id="OPEN"> Open Dialog </button>

{#if $open}
	<div class="" {...$portalled} use:portalled>
		<div
			{...$overlay}
			use:overlay
			class="fixed inset-0 z-50 bg-black/80"
			transition:fade={{ duration: 150 }}
		/>
		<div
			class="fixed left-1/2 top-1/2 z-50 h-screen md:h-fit md:max-h-[85vh] w-full md:w-[90vw]
              md:max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-blue-200
              p-6 shadow-lg"
			transition:scale={{
				duration: 150,
				start: 0.96
			}}
			{...$content}
			use:content
		>
			<form action="" class="p-5" on:submit={handleSubmit}>
				<h2 {...$title} use:title class="m-0 text-2xl font-medium text-black">
					Dapatkan Penawaran Lengkap 2024/1445 H
				</h2>
				<p {...$description} use:description class="mb-5 mt-2 leading-normal text-zinc-600">
					Silahkan isi formulir berikut ini, Kami akan mengirimkan file penawaran lengkap Haji
					Furoda 2024 melalui email/WA yang Bapak/Ibu Isi.
				</p>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<fieldset class="mb-4 flex items-center gap-5">
							<input
								class="inline-flex h-8 w-full flex-1 items-center justify-center
                                                  rounded-sm border border-solid px-3 leading-none text-black"
								id="name"
								name="name"
								placeholder="Masukan Nama Lengkap"
								bind:value={name}
							/>
						</fieldset>
						<fieldset class="mb-4 flex items-center gap-5">
							<input
								class="inline-flex h-8 w-full flex-1 items-center justify-center
                                              rounded-sm border border-solid px-3 leading-none text-black"
								id="whatsapp"
								name="whatsapp"
								placeholder="No. Whatsapp"
								bind:value={whatsapp}
							/>
						</fieldset>
						<div class="mt-6 flex justify-start gap-4">
							<button
								type="submit"
								class="inline-flex h-8 items-center justify-center rounded-sm
                                              bg-zinc-100 px-4 font-medium leading-none text-zinc-600"
							>
								Kirim
							</button>
						</div>
					</div>
					<div
						class="relative overflow-hidden rounded-lg h-48 flex justify-center items-center group order-first md:-order-none"
					>
						<img
							src="./hero.svg"
							alt="Background"
							class="absolute w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
						/>
						<a
							href="https://wa.me/6282240406568"
							target="_blank"
							class="flex items-center justify-center bg-blue-500 text-white rounded-md p-4 transition-transform duration-500 group-hover:scale-125 z-40"
						>
							Konsultasi Paket <br /> Umroh Haji 2024
						</a>
					</div>
				</div>
				<button
					{...$close}
					use:close
					aria-label="close"
					class="absolute right-4 top-4 inline-flex h-6 w-6 appearance-none
                  items-center justify-center rounded-full p-1 text-magnum-800
                  hover:bg-magnum-100 focus:shadow-magnum-400"
				>
					<h1>X</h1>
				</button>
			</form>
		</div>
	</div>
{/if}
