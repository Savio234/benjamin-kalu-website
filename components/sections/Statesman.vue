<template>
  <section class="w-full md:h-[32rem] lg:h-[37rem] py-2 bg-white relative 
    flex flex-col justify-center overflow-hidden"
  >
    <div class="w-[90vw] mx-auto flex justify-between gap-6 overflow-x-auto">
      <!-- <SectionsCarousel :items="images" direction="left" speed="fast" /> -->
       <Slider :items="images" :direction="left" :speed="very_fast"
        class="mt-4 overflow-x-scroll flex w-full items-start gap-4 md:gap-6"
        v-if="images"
       >
        <div v-for="(item, index) in images" :key="index"
          class="relative shrink-0 w-[92%] h-[30rem] md:h-[34rem]"
        >
          <NuxtImg alt="slider_image" :src="item" class="h-full w-full object-cover" />
        </div>
       </Slider>
    </div>

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