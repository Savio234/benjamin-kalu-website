<template>
  <section class="updates w-full md:h-[26rem] lg:h-[31.25rem] py-2 bg-black text-white relative 
    flex flex-col justify-center overflow-hidden"
  >
    <NuxtImg
      src="/images/statesman.png"
      class="w-full h-full hidden md:block object-contain pointer-events-none"
      alt="Decorative vector right"
    />
    <!-- <div class="w-[90vw] flex justify-between gap-6 overflow-x-auto">
      <SectionsCarousel :items="images" direction="left" speed="fast" />
    </div> -->
    <div class="w-full h-full md:hidden">
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
    </div>

  </section>
</template>

<script setup>
const images = [
  'https://res.cloudinary.com/damkhdi7d/image/upload/v1717484150/benjamin_kalu/Logo_srt3cm.png',
  'https://res.cloudinary.com/damkhdi7d/image/upload/v1717484150/benjamin_kalu/Logo-1_mpjsvy.png',
  'https://res.cloudinary.com/damkhdi7d/image/upload/v1717484150/benjamin_kalu/Logo-2_qkehnj.png',
  'https://res.cloudinary.com/damkhdi7d/image/upload/v1717484149/benjamin_kalu/Logo-3_mikgrn.png',
  'https://res.cloudinary.com/damkhdi7d/image/upload/v1717484149/benjamin_kalu/Logo-4_whznls.png',
]
</script>

<style scoped>

</style>