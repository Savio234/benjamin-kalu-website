<template>
  <section class="w-full pb-14 md:pb-20 lg:pb-28 bg-white relative 
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
        <SwiperSlide class="w-full md:h-[32rem] lg:h-[36.25rem]"
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
  "/images/home/slider_1.png",
  "/images/home/slider_2.jpeg",
  "/images/home/slider_3.jpeg",
  "/images/home/slider_4.jpeg",
  "/images/home/slider_5.jpeg",
  "/images/home/slider_6.jpeg",
  "/images/home/slider_7.jpeg",
  "/images/home/slider_8.jpeg",
  "/images/home/slider_9.jpeg",
  "/images/home/slider_10.jpeg",
]
</script>

<style scoped>

</style>