<script>


</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-gray-50 overflow-hidden"
>
	<div class="container mx-auto p-6 flex flex-col flex-grow py-12">
		<div class="text-black flex justify-center items-center flex-col">
			<h3 class="text-center text-blue-700 text-lg md:text-xl md-2 md:mb-2 syne font-semibold">Maskapai yang Digunakan</h3>
			<h1 class="text-center text-base md:text-lg tracking-wide mb-8 max-w-[1000px]">
				Kami menggunakan maskapai penerbangan yang terpercaya, memastikan layanan terbaik untuk setiap perjalanan Anda
			</h1>
		</div>
		<div class="flex gap-5 justify-center items-center flex-wrap py-6">
			{#each { length:5 } as item,idx}
				<div class="p-3">
					<img src="/partner-{(idx+1)}.svg" alt="" class="min-w-[150px]">
				</div>
			{/each}
		</div>

	</div>
</div>
