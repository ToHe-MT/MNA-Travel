<script>
	let items = [
		{
			"title": "DKI Jakarta",
			"areas": "Jakarta Pusat, Jakarta Barat, Jakarta Selatan, Jakarta Timur, Jakarta Utara, Kepulauan Seribu"
		},
		{
			"title": "Aceh",
			"areas": "Aceh Barat, Aceh Barat Daya, Aceh Besar, Aceh Jaya, Aceh Selatan, Aceh Singkil, Aceh Tamiang, Aceh Tengah, Aceh Tenggara, Aceh Timur, Aceh Utara, Bener Meriah, Bireuen, Gayo Lues, Nagan Raya, Pidie, Pidie Jaya, Simeulue, Banda Aceh, Langsa, Lhokseumawe, Sabang, Subulussalam"
		},
		{
			"title": "Sumatera Utara",
			"areas": "Asahan, Batubara, Dairi, Deli Serdang, Humbang Hasundutan, Karo, Labuhanbatu, Labuhanbatu Selatan, Labuhanbatu Utara, Langkat Stabat, Mandailing Natal, Nias, Nias Barat, Nias Selatan, Nias Utara, Padang Lawas, Padang Lawas Utara, Pakpak Bharat, Samosir, Serdang Bedagai, Simalungun, Tapanuli Selatan, Tapanuli Tengah, Tapanuli Utara, Toba Samosir, Binjai, Gunungsitoli, Medan, Padangsidempuan, Pematangsiantar, Sibolga, Tanjungbalai, Tebing Tinggi"
		},
		{
			"title": "Sumatera Barat",
			"areas": "Agam, Dharmasraya, Kepulauan Mentawai, Lima Puluh Kota, Padang Pariaman, Pasaman, Pasaman Barat, Pesisir Selatan, Sijunjung, Solok, Solok Selatan, Tanah Datar, Bukittinggi, Padang, Padangpanjang, Pariaman, Payakumbuh, Sawahlunto, Solok"
		},
		{
			"title": "Riau",
			"areas": "Bengkalis, Indragiri Hilir, Indragiri Hulu, Kampar, Kuantan Singingi, Pelalawan, Rokan Hilir, Rokan Hulu, Siak, Kepulauan Meranti, Dumai, Pekanbaru"
		},
		{
			"title": "Kepulauan Riau",
			"areas": "Bintan, Karimun, Kepulauan Anambas, Lingga, Natuna, Batam, Tanjung Pinang"
		},
		{
			"title": "Jambi",
			"areas": "Batanghari, Bungo, Kerinci, Merangin, Muaro Jambi, Sarolangun, Tanjung Jabung Barat, Tanjung Jabung Timur, Tebo, Jambi, Sungai Penuh"
		},
		{
			"title": "Sumatera Selatan",
			"areas": "Banyuasin, Empat Lawang, Lahat, Muara Enim, Musi Banyuasin, Musi Rawas, Musi Rawas Utara, Ogan Ilir, Ogan Komering Ilir, Ogan Komering Ulu, Ogan Komering Ulu Selatan, Penukal Abab Lematang Ilir, Ogan Komering Ulu Timur, Lubuklinggau, Pagar Alam, Palembang, Prabumulih"
		},
		{
			"title": "Bangka Belitung",
			"areas": "Bangka, Belitung, Bangka Barat, Bangka Tengah, Bangka Selatan, Belitung Timur, Pangkalpinang"
		},
		{
			"title": "Bengkulu",
			"areas": "Bengkulu Selatan, Bengkulu Tengah, Bengkulu Utara, Kaur, Kepahiang, Lebong, Mukomuko, Rejang Lebong, Seluma, Bengkulu"
		},
		{
			"title": "Lampung",
			"areas": "Lampung Barat, Tanggamus, Lampung Selatan, Lampung Timur, Lampung Tengah, Lampung Utara, Kabupaten Way Kanan, Kabupaten Tulang Bawang, Kabupaten Pesawaran, Kabupaten Pringsewu, Kabupaten Mesuji, Kabupaten Tulang Bawang Barat, Kabupaten Pesisir Barat, Bandar Lampung, Metro"
		},
		{
			"title": "Banten",
			"areas": "Kota Tangerang, Tangerang Selatan, Kab. Tangerang, Cilegon, Kota Serang, Kab. Serang, Lebak, Pandeglang"
		},
		{
			"title": "Jawa Barat",
			"areas": "Bandung, Bandung Barat, Bekasi, Bogor, Ciamis, Cianjur, Cirebon, Garut, Indramayu, Karawang, Kuningan, Majalengka, Purwakarta, Subang, Sukabumi, Sumedang, Kota Tasikmalaya, Kota Bandung, Kota Bekasi, Kota Bogor, Cimahi, Kota Cirebon, Kota Depok, Kota Sukabumi, Tasikmalaya"
		},
		{
			"title": "Jawa Tengah",
			"areas": "Banjarnegara, Banyumas, Batang, Blora, Boyolali, Brebes, Cilacap, Demak, Grobogan, Jepara, Karanganyar, Kebumen, Kendal, Klaten, Kudus, Magelang, Pati, Pekalongan, Pemalang, Purbalingga, Purworejo, Rembang, Semarang, Sragen, Sukoharjo, Tegal, Temanggung, Wonogiri, Wonosobo, Kota Magelang, Kota Pekalongan, Salatiga, Kota Semarang, Kota Surakarta, Kota Tegal"
		},
		{
			"title": "DI Yogyakarta",
			"areas": "Bantul, Gunung Kidul, Kota Progo, Sleman, Kota Yogyakarta"
		},
		{
			"title": "Jawa Timur",
			"areas": "Madiun, Magetan, Bangkalan, Banyuwangi, Blitar, Bojonegoro, Bondowoso, Gresik, Jember, Jombang, Kediri, Lamongan, Lumajang, Malang, Mojokerto, Nganjuk, Ngawi, Pacitan, Pamekasan, Pasuruan, Ponorogo, Probolinggo, Sampang, Sidoarjo, Situbondo, Sumenep, Trenggalek, Tuban, Tulungagung, Kota Surabaya, Kota Mojokerto, Kota Madiun, Kota Blitar, Kota Kediri, Kota Malang, Kota Pasuruan, Kota Probolinggo, Kota Batu"
		},
		{
			"title": "Bali",
			"areas": "Badung, Bangli, Buleleng, Gianyar, Jembrana, Karangasem, Klungkung, Tabanan, Kota Denpasar"
		},
		{
			"title": "Nusa Tenggara Barat",
			"areas": "Bima, Woha, Dompu, Lombok Barat, Lombok Tengah, Lombok Timur, Lombok Utara, Sumbawa, Sumbawa Barat, Kota Bima, Kota Mataram"
		},
		{
			"title": "Nusa Tenggara Timur",
			"areas": "Kupang, Timor Tengah Selatan, Timor Tengah Utara, Belu, Alor, Flores Timur, Sikka, Ende, Ngada, Manggarai, Sumba Timur, Sumba Barat, Lembata, Rote Ndao, Manggarai Barat, Nagekeo, Sumba Tengah, Sumba Barat Daya, Manggarai Timur, Sabu Raijua, Malaka, Kota Kupang"
		},
		{
			"title": "Kalimantan Barat",
			"areas": "Sambas, Mempawah, Sanggau, Ketapang, Sintang, Kapuas Hulu, Bengkayang, Landak, Sekadau, Melawi, Kayong Utara, Kubu Raya, Pontianak, Singkawang"
		},
		{
			"title": "Kalimantan Tengah",
			"areas": "Barito Selatan, Barito Timur, Barito Utara, Gunung Mas, Kapuas, Katingan, Kotawaringin Barat, Kotawaringin Timur, Lamandau, Murung Raya, Pulang Pisau, Sukamara, Seruyan, Palangka Raya"
		},
		{
			"title": "Kalimantan Selatan",
			"areas": "Balangan, Banjar, Barito Kuala, Hulu Sungai Selatan, Hulu Sungai Tengah, Hulu Sungai Utara, Kotabaru, Tabalong, Tanah Bumbu, Tanah Laut, Tapin, Banjarmasin, Banjarbaru"
		},
		{
			"title": "Kalimantan Timur",
			"areas": "Berau, Kutai Barat, Kutai Kartanegara, Kutai Timur, Mahakam Ulu, Paser, Penajam Paser Utara, Samarinda, Balikpapan, Bontang"
		},
		{
			"title": "Kalimantan Utara",
			"areas": "Bulungan, Malinau, Nunukan, Tana Tidung, Tarakan"
		},
		{
			"title": "Sulawesi Utara",
			"areas": "Bolaang Mongondow, Bolaang Mongondow Selatan, Bolaang Mongondow Timur, Bolaang Mongondow Utara, Kepulauan Sangihe, Kepulauan Talaud, Kepulauan Siau Tagulandang Biaro, Minahasa, Minahasa Selatan, Minahasa Tenggara, Minahasa Utara, Kota Bitung, Kota Kotamobagu, Kota Manado, Kota Tomohon"
		},
		{
			"title": "Gorontalo",
			"areas": "Boalemo, Bone Bolango, Gorontalo, Gorontalo Utara, Pohuwato"
		},
		{
			"title": "Sulawesi Tengah",
			"areas": "Banggai, Banggai Kepulauan, Banggai Laut, Buol, Donggala, Morowali, Poso, Tolitoli, Palu"
		},
		{
			"title": "Sulawesi Barat",
			"areas": "Majene, Mamasa, Mamuju, Mamuju Utara, Polewali Mandar"
		},
		{
			"title": "Sulawesi Selatan",
			"areas": "Bantaeng, Barru, Bone, Bulukumba, Enrekang, Gowa, Jeneponto, Kepulauan Selayar, Luwu, Luwu Timur, Luwu Utara, Maros, Pangkajene Kepulauan, Pinrang, Sidenreng Rappang, Sinjai, Soppeng, Takalar, Tana Toraja, Toraja Utara, Wajo, Makassar, Palopo, Parepare"
		},
		{
			"title": "Sulawesi Tenggara",
			"areas": "Bombana, Buton, Buton Selatan, Buton Tengah, Buton Utara, Kolaka, Kolaka Timur, Kolaka Utara, Konawe, Konawe Kepulauan, Konawe Selatan, Konawe Utara, Muna, Wakatobi, Kendari, Bau-Bau"
		},
		{
			"title": "Maluku",
			"areas": "Buru, Buru Selatan, Kepulauan Aru, Maluku Barat Daya, Maluku Tengah, Maluku Tenggara, Maluku Tenggara Barat, Seram Bagian Barat, Seram Bagian Timur, Ambon, Tual"
		},
		{
			"title": "Maluku Utara",
			"areas": "Halmahera Barat, Halmahera Tengah, Halmahera Timur, Halmahera Selatan, Halmahera Utara, Kepulauan Sula, Kota Ternate, Kota Tidore Kepulauan"
		},
		{
			"title": "Papua Barat",
			"areas": "Fakfak, Kaimana, Manokwari, Manokwari Selatan, Maybrat, Pegunungan Arfak, Raja Ampat, Sorong, Sorong Selatan, Tambrauw, Teluk Bintuni, Teluk Wondama"
		},
		{
			"title": "Papua",
			"areas": "Asmat, Biak Numfor, Boven Digoel, Deiyai, Dogiyai, Intan Jaya, Jayapura, Jayapura, Jayawijaya, Keerom, Kepulauan Yapen, Lanny Jaya, Mamberamo Raya, Mamberamo Tengah, Mappi, Mimika, Nabire, Nduga, Paniai, Pegunungan Bintang, Puncak, Puncak Jaya, Sarmi, Supiori, Tolikara, Waropen, Yahukimo, Yalimo"
		}
	]
	let splitIndex = Math.ceil(items.length / 2);

	// Split the array into two parts
	let firstPart = items.slice(0, splitIndex);
	let secondPart = items.slice(splitIndex);

</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-emerald-50 py-10"
>
	<div class="container mx-auto p-6 flex flex-col gap-6 lg:gap-12 xl:px-24 ">
		<div class="text-black flex justify-start items-start flex-col gap-3">
			<h3 class="text-start text-black text-2xl md:text-4xl font-semibold leading-relaxed">Melayani Seluruh
				Indonesia</h3>
		</div>
		<div class="grid gap-6 lg:pr-16 text-lg leading-relaxed">

			<p>
				Alhamdulillah, kami siap melayani pendaftaran Haji Furoda Visa Haji Mujamalah untuk seluruh wilayah Indonesia
				dan daerah lain yang mempercayai layanan kami. Dengan kemudahan internet, para calon jamaah dapat dengan mudah
				melakukan video call dengan kami melalui WhatsApp, Google Meet, atau Zoom Meeting. In Syaa Allah, kami siap
				melayani tamu-tamu Allah. Berikut adalah sebaran wilayah layanan haji furoda tanpa antri di seluruh Indonesia
				yang dapat kami sampaikan:
			</p>
		</div>
		<div class="grid grid-cols-2 gap-12">

			<div class="grid gap-3">
				{#each firstPart as item}
					<div class="grid gap-1">
						<li class="flex items-center text-lg font-semibold">
							<span class="inline-block w-2 h-2 mr-2 bg-black rounded-full"></span>
							{item.title}
						</li>
						<div>
							<p>
								{item.areas}
							</p>
						</div>
					</div>
				{/each}
			</div>
			<div class="grid gap-3">
				{#each secondPart as item}
					<div class="grid gap-1">
						<li class="flex items-center text-lg font-semibold">
							<span class="inline-block w-2 h-2 mr-2 bg-black rounded-full"></span>
							{item.title}
						</li>
						<div>
							<p>
								{item.areas}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>


</div>
