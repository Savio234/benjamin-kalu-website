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
            format="webp" loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
// import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const images = [
  "/images/home/slider_1.png",
  "/images/home/slider_2.png",
  "/images/home/slider_3.png",
  "/images/home/slider_4.png",
  "/images/home/slider_5.png",
  "/images/home/slider_6.png",
  "/images/home/slider_7.png",
  "/images/home/slider_8.png",
  "/images/home/slider_9.png",
  "/images/home/slider_10.png",
]
const externalImages = [
  `https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544611/benjamin_kalu/new_image_address_ygrinn.png`,
  `https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544617/benjamin_kalu/new_image_touring_two_kea4nk.png`,
  `https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544599/benjamin_kalu/new_image_pisep_cmjxlb.png`,
  `https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544624/benjamin_kalu/new_image_sitting_cyjh0x.png`,
  `https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544629/benjamin_kalu/new_image_office_jh5wtv.png`,
  `https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544619/benjamin_kalu/new_image_gravel_rlg38t.png`,
]
</script>

<style scoped>

</style>