<script>
  export let data;
  import { formatDateToIndonesian } from "$lib/function/format.js";
  const { title, content_html, images, blog_id, created_at, created_by, slug } =
    data.blog;

  function infoPaket(namaPaket) {
    let message = `Assalamu alaykum MNA Travel, saya mau Info Detail Paket ${namaPaket}`;
    const url = `https://wa.me/6282240406568?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <title>MNA - Travel | Pelayanan Umroh Terbaik</title>
  <meta
    name="description"
    content="Umroh Terbaik dan Terpercaya di Indonesia. ✔ Biaya Terjangkau, ✔ Profesional, ✔ Pasti Berangkat, ✔ Bonus City Tour Thaif, ✔ Bonus Haramian Express, ✔ Bonus Perlengkapan, ✔ Bonus Museum Wahyu, ✔ Bonus Ice Cream Uhud, ✔ Bonus Merchandise, ✔ Bonus Album Digital, ✔ Bonus Fotografer, ✔ Bonus Bus Daerah"
  />
  <meta
    name="keywords"
    content="Umroh, Travel, Pelayanan Umroh, Umroh Terbaik, MNA Travel"
  />
</svelte:head>

<div
  class=" relative flex items-center justify-center w-full bg-cover bg-center bg-white pt-16"
>
  <div class="container mx-auto p-6 flex flex-col">
    <div class="grid lg:grid-cols-2 pb-10">
      <div class="flex flex-col justify-center h-full items-start gap-6">
        <div
          class="flex flex-wrap gap-2 py-1 text-blue-700"
          style="overflow-wrap: break-word;"
        >
          {#each Array.from( { length: 10 }, (_, i) => Math.floor(Math.random() * 1000) ) as item}
            <div
              class="bg-blue-100 outline outline-1 outline-blue-300 rounded-full px-4 flex justify-center items-center"
            >
              <span class="text-sm">
                {item}
              </span>
            </div>
          {/each}
        </div>
        <h1 class="text-3xl font-semibold">{title}</h1>
        <p class="text-sm text-gray-700">
          Paket liburan Thailand dari Viva Wisata menawarkan harga terjangkau
          dengan fasilitas lengkap seperti akomodasi, transportasi, dan
          penginapan. Viva Wisata adalah agen terpercaya yang memudahkan
          wisatawan mengurus semua kebutuhan perjalanan, termasuk visa dan
          paspor. Dengan berbagai destinasi menarik di Thailand, liburan Anda
          akan menjadi pengalaman yang menyenangkan dan tak terlupakan bersama
          kelua
        </p>
        <div class="flex gap-6 w-full items-center justify-start">
          <a
            href="https://wa.me/6282240406568"
            target="_blank"
            class="bg-blue-600 hover:scale-110 transition-transform transform-gpu duration-300 text-white font-bold py-2 px-5 rounded-md flex items-center gap-3"
          >
            <span class="text-base text-white"> Lihat Artikel Lainnya </span>
          </a>
          <a
            href="https://wa.me/6282240406568"
            target="_blank"
            class="bg-green-600 hover:scale-110 transition-transform transform-gpu duration-300 text-white font-bold py-2 px-5 rounded-md flex items-center gap-3"
          >
            <div class="h-6 w-6 p-0.5">
              <svg
                fill="currentColor"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 308 308"
                xml:space="preserve"
                ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g><g id="SVGRepo_iconCarrier">
                  <g id="XMLID_468_">
                    <path
                      id="XMLID_469_"
                      d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                    ></path>
                    <path
                      id="XMLID_470_"
                      d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                    ></path>
                  </g>
                </g></svg
              >
            </div>
            <span class="text-base text-white"> Chat Whatsapp </span>
          </a>
        </div>
      </div>
      <div class="flex justify-center items-center p-10 order-first lg:order-last">
        {#if images && images.length > 0}
          <img
            src="{import.meta.env.VITE_S3_PUBLIC_URL}/blog/{images[0]
              .picture_id}"
            alt=""
            class="rounded-t-xl w-full"
          />
        {:else}
          <img src="/Sementara.jpg" alt="" class="rounded-t-xl w-full" />
        {/if}
      </div>
    </div>
  </div>
</div>

<div
  class=" relative flex items-center justify-center w-full bg-cover bg-center bg-white"
>
  <div class="container mx-auto p-6 flex flex-col">
    <div class="grid grid-cols-4 gap-4">
      <div
        class="text-black col-span-4 lg:col-span-3 bg-white"
        style="text-align: justify;"
      >
        <div class="card blogblogblog">
          <div class="card-body">
            {@html content_html}
          </div>
        </div>
      </div>
      <div class="col-span-4 lg:col-span-1 flex flex-col gap-4">
        <div class="md:p-2 bg-white">
          <h3 class="text-left text-sm md:text-base text-blue-700 lg:px-3 py-1">
            Artikel Lain
          </h3>
          <div class="grid gap-2">
            {#if data.otherBlog && data.otherBlog.length > 0}
              {#each data.otherBlog as item (item.blog_id)}
                <div
                  class="flex items-center justify-between lg:px-3 py-2 rounded-xl"
                >
                  <div>
                    <h1 class="text-sm font-semibold">{item.title}</h1>
                    <p class="text-sm font-base">
                      {formatDateToIndonesian(item.created_at)} -
                      <a href="/blog/{item.slug}" class="text-blue-700 text-sm">
                        Baca Selengkapnya
                      </a>
                    </p>
                  </div>
                </div>
                {#if item.blog_id !== data.otherBlog[data.otherBlog.length - 1].blog_id}
                  <div class="border-t border-gray-200"></div>
                {/if}
              {/each}
            {/if}
          </div>
        </div>
        <div class="md:p-2 bg-white">
          <h3 class="text-left text-sm md:text-base text-blue-700 lg:px-3 py-1">
            TAG
          </h3>
          <div
            class="flex flex-wrap gap-2 lg:px-3 py-1 text-blue-700"
            style="overflow-wrap: break-word;"
          >
            {#each Array.from( { length: 10 }, (_, i) => Math.floor(Math.random() * 1000) ) as item}
              <div
                class="bg-blue-100 outline outline-1 outline-blue-700 rounded-full px-4 flex justify-center items-center font-base"
              >
                <span class="text-sm">
                  {item}
                </span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  * {
    font-family: "Poppins", Sans-serif !important;
  }
</style>