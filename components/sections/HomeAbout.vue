<template>
  <section class="w-full py-16 mb-12 text-center flex flex-col">
    <div class="content mx-auto w-[95%] md:w-[85%] flex flex-col gap-2 items-center">
      <h2 class="text-[#022924] text-[2rem] md:text-4xl lg:text-5xl mb-4 font-adamina font-normal">
        About Benjamin Kalu
      </h2>
      <p class="w-full md:w-3/4 lg:w-8/12 mx-auto text-[#636363] text-center text-sm 
        md:text-base mb-4"
      >
        Rt. Hon. Benjamin O.Kalu is a Nigerian statesman whose public service is defined by 
        disciplined leadership, institutional reform, and a commitment to measurable impact. 
        Trained as a legal practitioner and seasoned as an international businessman, he brings 
        strategic depth and global perspective to national governance. <br />
        <br />
        In June 2023, he assumed office as Deputy Speaker of the 10th House of Representatives, one 
        of Nigeria’s highest constitutional positions. In this role, he contributes to the shaping 
        of legislative priorities, constitutional reform, and national dialogue. Beyond the chamber, 
        his work has translated into tangible interventions at the constituency level; advancing 
        development, peace building, and community empowerment in Bende Federal Constituency, while 
        also engaging regional and international partners on governance, democracy, and 
        institutional strengthening.
      </p>
      <MainButton @click="$router.push('/about')">Learn More</MainButton>
      <div class="w-full hidden h-auto">
        <!-- <NuxtImg
          class="w-full h-full object-cover rounded-xl"
          src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717431106/benjamin_kalu/home_image_c8fyfy.png"
          format="webp"
        /> -->
        <!-- <Swiper
          class="w-full rounded-3xl"
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :pagination="true"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide v-for="image in images" :key="image.id">
            <NuxtImg :src="image.url" class="w-full rounded-3xl h-auto" format="webp" />
          </SwiperSlide>
        </Swiper> -->
      </div>
    </div>
  </section>
</template>