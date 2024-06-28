<script>


</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-gray-50 overflow-hidden"
>
	<div class="container mx-auto p-6 flex flex-col flex-grow py-12">
		<div class="text-black flex justify-center items-center flex-col">
			<h3 class="text-center text-blue-700 text-lg md:text-lg md-2 md:mb-2 syne font-semibold">Partner Kami</h3>
			<h1 class="text-center text-md md:text-lg tracking-wider mb-2 max-w-[1000px]">
				Kami bekerja sama dengan hotel, maskapai penerbangan, dan restoran kelas dunia yang terpercaya, memastikan layanan terbaik untuk setiap perjalanan Anda
			</h1>
		</div>
		<div class="flex gap-5 justify-center items-center flex-wrap py-12">
			{#each { length:9 } as item,idx}
				<div class="p-3">
					<img src="/partner-{(idx%3)+1}.svg" alt="" class="min-w-[150px]">
				</div>
			{/each}
		</div>

	</div>
</div>
