<template>
  <section class="w-full md:h-[26rem] lg:h-[31.25rem] py-2 bg-white relative 
    flex flex-col justify-center overflow-hidden"
  >
    <!-- <NuxtImg
      src="/images/statesman.png"
      class="w-full h-full hidden md:block object-contain pointer-events-none"
      alt="Decorative vector right"
    /> -->
    <div class="w-[90vw] mx-auto flex justify-between gap-6 overflow-x-auto">
      <!-- <SectionsCarousel :items="images" direction="left" speed="fast" /> -->
       <Slider :items="images" :direction="left" :speed="very_fast"
        class="mt-4 overflow-x-scroll flex w-full items-start gap-4 md:gap-6"
        v-if="images"
       >
        <div v-for="(item, index) in images" :key="index"
          class="relative shrink-0 w-[92%] h-[22rem] md:h-[25rem]"
        >
          <NuxtImg alt="slider_image" :src="item" class="h-full w-full object-contain" />
        </div>
       </Slider>
    </div>
    <!-- <div class="w-full h-full md:hidden">
      <div class="w-full relative h-[20.625rem]">
        <NuxtImg
          src="/images/statesman_mob_1.png"
          class="w-full h-full object-cover pointer-events-none"
          alt="Decorative vector right"
        />
      </div>
      <div class="relative w-full h-[18rem]">
        <NuxtImg
          src="/images/statesman_mob_2.png"
          class="w-full h-full object-cover pointer-events-none"
          alt="Decorative vector right"
        />
      </div>
    </div> -->

  </section>
</template>

<script setup>
import Slider from './Slider.vue';

const images = [
  '/images/home/slider_1.jpeg',
  '/images/home/slider_2.jpeg',
  '/images/home/slider_3.jpeg',
  '/images/home/slider_4.jpeg',
  '/images/home/slider_5.jpeg',
  '/images/home/slider_6.jpeg',
  '/images/home/slider_7.jpeg',
  '/images/home/slider_8.jpeg',
  '/images/home/slider_9.jpeg',
  '/images/home/slider_10.jpeg',
  // '/images/home/slider_11.jpeg',
  // '/images/home/slider_12.jpeg',
  // '/images/home/slider_13.jpeg',
]
</script>

<style scoped>

</style>