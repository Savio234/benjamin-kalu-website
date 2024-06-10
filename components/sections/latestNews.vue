<template>
  <section class="w-full py-16 bg-light">
    <div class="content mx-auto flex flex-col gap-8 w-[85%]">
      <div class="header flex flex-col gap-2">
        <h2 class="font-semibold">Follow our <span class="text-primaryGreen">office</span> closely</h2>
        <h4 class="text-gray font-medium">Latest news on how office has performed lately</h4>
      </div>
      <div class="flex flex-col gap-4">
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div class="featuredPost sm:col-span-2 rounded-xl flex flex-col justify-end py-4">
            <div class="content mx-auto text-white w-[90%] h-[20rem] sm:h-auto flex flex-col gap-4">
              <h3>Honorable Benjamin Kalu gives speech on Education</h3>
              <p class="bg-bgGreen text-primaryGreen rounded w-fit py-1 px-2">Details</p>
            </div>
          </div>
          <CardNews />
          <CardNews />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
      </div>
      <a class="text-primaryGreen underline underline-offset-2 cursor-pointer">See All Articles</a>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.featuredPost {
  background-image: url('https://placehold.co/');
  background-color: #35390775;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center center;
}
</style>
