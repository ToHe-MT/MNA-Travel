<script>
	let isOpen = false;
</script>

<div class="hidden lg:flex group fixed bottom-0 right-0 p-5 items-end justify-end w-24 h-24 md:w-32 md:h-32 z-30">
	<!-- main -->
	<div
		class="text-white shadow-xl flex items-center justify-center p-4 rounded-full bg-blue-500 z-50 absolute cursor-pointer"
	>
		<span class="material-icons material-symbols-outlined text-[30px] md:text-[36px]" >support_agent</span>
	</div>
	<!-- sub left -->
	<a
		href="https://wa.me/6282240406568"
		target="_blank"
		class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 group-hover:-translate-y-3 flex p-3 hover:p-4 bg-green-500 scale-100 hover:bg-green-600 text-white cursor-pointer"
	>
		<span class="material-icons text-[30px] md:text-[36px]">call</span>
	</a>
	<!-- sub top -->
	<a
		href="mailto:admin@mnatravel.com"
		class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16 group-hover:-translate-x-3 flex p-3 hover:p-4 bg-blue-500 hover:bg-blue-700 text-white"
	>
		<span class="material-icons text-[30px] md:text-[36px]">mail</span>
	</a>
	<!-- sub middle -->
	<!-- <div
		class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white"
	>
		<span class="material-icons">quiz</span>
	</div> -->
</div>

<div class="lg:hidden flex group fixed bottom-0 right-0 p-5 items-end justify-end w-24 h-24 md:w-32 md:h-32 z-30">
	<!-- main -->
	<div
		class="text-white shadow-xl flex items-center justify-center p-4 rounded-full bg-blue-500 z-50 absolute cursor-pointer"
	 on:click={()=>{isOpen=!isOpen}}>
		<span class="material-icons material-symbols-outlined text-[30px] md:text-[36px]" >support_agent</span>
	</div>
	<!-- sub left -->
	<a
		href="https://wa.me/6282240406568"
		target="_blank"
		class="absolute rounded-full transition-all duration-[0.2s] ease-out  {isOpen? 'scale-y-0' : 'scale-y-100 -translate-y-16'} flex p-4 hover:p-4 bg-green-500 scale-100 hover:bg-green-600 text-white cursor-pointer"
	>
		<span class="material-icons text-[30px] md:text-[36px]">call</span>
	</a>
	<!-- sub top -->
	<a
		href="mailto:admin@mnatravel.com"
		class="absolute rounded-full transition-all duration-[0.2s] ease-out {isOpen? 'scale-y-0' : 'scale-y-100 -translate-y-32'} flex p-4 hover:p-4 bg-blue-500 hover:bg-blue-700 text-white"
	>
		<span class="material-icons text-[30px] md:text-[36px]">mail</span>
	</a>
	<!-- sub middle -->
	<!-- <div
		class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white"
	>
		<span class="material-icons">quiz</span>
	</div> -->
</div>
