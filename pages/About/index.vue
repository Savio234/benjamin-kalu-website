<template>
  <main class="flex flex-col w-full">
    <section class="hero w-full h-[85vh] bg-primaryGreen flex items-center">
      <div class="text-section w-7/12 py-16">
        <div class="content mx-auto w-[80%] flex flex-col gap-2">
          <h2 class="text-white font-semibold">
            Get to know the Gem, <br />
            that is <span class="text-secondaryGreen">Benjamin Kalu</span>
          </h2>
          <h4 class="text-white">
            The Federal House of Speakers is one of the two Chambers that make up the Bicameral Legislature of the
            Federal Republic of Nigeria.
          </h4>
        </div>
      </div>
      <div class="image-sect w-5/12 h-full">
        <NuxtImg
          src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717536006/benjamin_kalu/about_home_hus4kr.png"
          class="w-full h-full object-cover"
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
  background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717431103/benjamin_kalu/noise_c6ebjt.png');
  background-size: cover;
}
</style>
