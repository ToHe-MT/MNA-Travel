<script>


	const kelemahanHajiFuroda = [
		"Calon jemaah haji membuka tabungan haji pada BPS-BPIH sesuai domisili dengan syarat membawa Kartu identitas dan setoran awal sebesar 25 juta.",
		"Calon jemaah haji menandatangani surat pernyataan memenuhi persyaratan pendaftaran haji yang diterbitkan oleh Kementerian Agama Republik Indonesia.",
		"Calon jemaah haji melakukan transfer ke rekening BPKH sebesar setoran awal BPIH pada cabang BPS-BPIH sesuai domisili.",
		"BPS – BPIH menerbitkan lembar bukti setoran awal yang berisi Nomor Validasi.",
		"Dokumen bukti setoran awal BPIH ditempel pas foto calon jemaah haji ukuran 3×4 dan bermaterai.",
		"Calon jemaah haji mendatangi Kementerian Agama Kabupaten/Kota dengan membawa dokumen bukti setoran awal dan persyaratan lainnya sesuai ketentuan untuk diverifikasi kelengkapannya paling lambat 5 (lima) hari kerja setelah pembayaran setoran awal BPIH.",
		"Calon jemaah haji mengisi formulir pendaftaran haji berupa Surat Pendaftaran Pergi Haji (SPPH) dan menyerahkannya kepada petugas Kantor Kementerian Agama Kabupaten/Kota.",
		"Calon jemaah haji menerima lembar bukti pendaftaran haji yang berisi Nomor Porsi pendaftaran, ditandatangani dan dibubuhi stempel dinas oleh petugas Kantor Kementerian Agama Kabupaten/Kota.",
		"Kantor Kementerian Agama Kabupaten/Kota menerbitkan bukti cetak SPPH sebanyak 5 (lima) lembar yang setiap lembarnya dicetak/ ditempel pas foto calon jemaah haji ukuran 3×4."
	];

</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-white py-4 md:py-16"
>
	<div class="container mx-auto p-6 flex flex-col gap-6 md:gap-6 xl:px-24">
		<div class="text-black flex justify-start items-start flex-col gap-6 md:gap-8">
			<h3 class="text-start text-black text-xl md:text-3xl font-semibold leading-relaxed">Syarat Pendaftaran Haji
				Furoda</h3>
		</div>
			<h1>Berikut alur dan cara pendaftaran haji reguler. Perlu diingat, jemaah haji reguler Indonesia harus menunggu
				antrean haji paling cepat 17 tahun, sesuai daerah tempat mendaftar.</h1>
		<div class="px-5">
			<ul class="list-disc grid gap-3">
				{#each kelemahanHajiFuroda as item}
					<li class="md:text-lg">{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>