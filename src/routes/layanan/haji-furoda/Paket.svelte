<script>

	import HajiCard from './HajiCard.svelte';
	import ImageCard from './ImageCard.svelte';

	let paket = [
			{
				title: 'Silver',
				base_price: 19_500,
				bonus: [
					{ title: 'Full Apartemen Makkah / Setaraf' },
					{ title: 'Shuttle Bus ke Masjidil Haram' },
					{ title: 'Maktab Furoda' },
					{ title: 'Hotel Madinah Manazel Falah / Setaraf' },
					{ title: 'Flight By Etihad / Oman Air / Qatar Airways' }
				],
				slug: 'asdb',
				images: [
					{
						primary: true,
						picture_id: 'haji-furoda-silver.svg'
					}
				]
			},
			{
				title: 'Gold',
				base_price: 23_500,
				bonus: [
					{ title: 'Hotel Mekkah Azka Al-Safa/ Setaraf' },
					{ title: 'Apartemen Transit' },
					{ title: 'Maktab Furoda' },
					{ title: 'Hotel Madinah Manazel Falah / Setaraf' },
					{ title: 'Flight By Saudia Airlines / Garuda Indonesia' }
				],
				slug: 'asdb',
				images: [
					{
						primary: true,
						picture_id: 'haji-furoda-gold.svg'
					}
				]
			}, {
				title: 'Platinum',
				base_price: 26_500,
				bonus: [
					{ title: 'Hotel Mekkah Shofwa Tower/ Setaraf' },
					{ title: 'Apartemen Transit' },
					{ title: 'Maktab Mina VIP Zona 1' },
					{ title: 'Hotel Madinah Dallah Taiba/ Setaraf' },
					{ title: 'Flight By Saudia Airlines / Garuda Indonesia' }
				],
				slug: 'asdb',
			images: [
				{
					primary: true,
					picture_id: 'haji-furoda-platinum.svg'
				}
			]
			}

		]
	;

</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-gray-100 py-10"
>
	<div class="container mx-auto p-6 flex flex-col gap-4 lg:gap-16 xl:px-24">
		<div class="text-black flex justify-start items-start flex-col gap-6">
			<h3 class="text-start text-gray-700 text-2xl md:text-4xl font-semibold">Paket Haji Furoda</h3>
			<h1 class="text-start text-lg">
				Alhamdulillah, untuk keberangkatan tahun 2025/1446H, kami menyediakan paket yang dapat menjadi pilihan
				alternatif bagi Anda yang berencana melaksanakan Ibadah Haji melalui program Haji Khusus Tanpa Antri dengan Visa
				Mujamalah/Furoda. Berikut adalah paket yang kami tawarkan:
			</h1>
		</div>
		{#each paket as item}
			<div class="grid lg:grid-cols-2 gap-y-6 gap-x-10 xl:px-0">
				<HajiCard paket="{item}" />
				<ImageCard images="{item.images}" />
			</div>
		{/each}
	</div>


</div>
