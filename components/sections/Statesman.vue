<template>
  <section class="w-full py-8 md:py-12 lg:py-20 bg-white relative 
    flex flex-col justify-center overflow-hidden"
  >
    <div class="w-full mx-auto flex justify-between gap-6">
      <Swiper class="w-full h-full"
        :modules="[SwiperAutoplay, SwiperEffectFade, SwiperPagination]"
        :slides-per-view="1"
        :loop="true"
        :effect="'fade'"
        :fade-effect="{
          crossFade: true,
        }"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
        :pagination="true"
      >
        <SwiperSlide class="w-full md:h-[32rem] lg:h-[35rem]"
          v-for="(image, index) in images" :key="index"
        >
          <!-- <div class="absolute inset-0 bg-black opacity-10"></div> -->
          <NuxtImg :src="image" class="w-full h-full object-cover" 
            format="webp"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const images = [
  "/images/home/slider_1.jpeg",
  "/images/home/slider_2.jpeg",
  "/images/home/slider_3.jpeg",
  "/images/home/slider_4.jpeg",
  "/images/home/slider_5.jpeg",
  "/images/home/slider_6.jpeg",
  "/images/home/slider_7.jpeg",
  "/images/home/slider_8.jpeg",
  "/images/home/slider_9.jpeg",
  "/images/home/slider_10.jpeg",
  // "/images/home/slider_11.jpeg",
  // "/images/home/slider_12.jpeg",
  // "/images/home/slider_13.jpeg",
]
</script>

<style scoped>

</style>