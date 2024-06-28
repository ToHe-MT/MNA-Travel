<script>


import AccordionIncluded from '$lib/components/AccordionIncluded.svelte';
</script>

<div
	class="hero relative flex items-center justify-center w-full bg-cover bg-center bg-white overflow-hidden"
>
	<div class="container mx-auto p-6 flex flex-col flex-grow py-12">
		<div class="text-black flex justify-center items-center flex-col">
			<h3 class="text-center text-blue-700 text-lg md:text-lg md-2 md:mb-2 syne font-semibold">FAQ</h3>
			<h1 class="text-center text-md md:text-lg tracking-wider mb-2 max-w-[1000px]">
				Lorem Ipsum Dolor Sir AMet
			</h1>
		</div>
		<div class="flex gap-5 justify-center items-center flex-wrap py-12">
			<AccordionIncluded title="Lrem Ipsum Dolor Sit" className="px-0 max-w-[800px]">
				<div class="bg-white w-full p-5">
					<div class="mb-6">
						<h2 class="text-lg font-semibold">Lorem</h2>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam assumenda delectus dicta dolorem, doloribus eaque explicabo illo incidunt inventore magni maxime necessitatibus nesciunt obcaecati perferendis, repellendus saepe tempora voluptates.
						</p>
					</div>

				</div>
			</AccordionIncluded>
			<AccordionIncluded title="Lrem Ipsum Dolor Sit" className="px-0 max-w-[800px]">
				<div class="bg-white w-full p-5">
					<div class="mb-6">
						<h2 class="text-lg font-semibold">Lorem</h2>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam assumenda delectus dicta dolorem, doloribus eaque explicabo illo incidunt inventore magni maxime necessitatibus nesciunt obcaecati perferendis, repellendus saepe tempora voluptates.
						</p>
					</div>

				</div>
			</AccordionIncluded>
			<AccordionIncluded title="Lrem Ipsum Dolor Sit" className="px-0 max-w-[800px]">
				<div class="bg-white w-full p-5">
					<div class="mb-6">
						<h2 class="text-lg font-semibold">Lorem</h2>
						<p class="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam assumenda delectus dicta dolorem, doloribus eaque explicabo illo incidunt inventore magni maxime necessitatibus nesciunt obcaecati perferendis, repellendus saepe tempora voluptates.
						</p>
					</div>

				</div>
			</AccordionIncluded>
		</div>

	</div>
</div>
