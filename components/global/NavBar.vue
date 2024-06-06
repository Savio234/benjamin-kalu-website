<template>
  <nav class="w-full py-4 bg-white relative">
    <div class="content mx-auto flex justify-between w-[95%] items-center">
      <FullLogo />
      <div
        class="nav-content flex items-center rounded-full border border-borderMuted bg-white gap-12 px-8 py-3 shadow"
      >
        <NuxtLink
          to="/"
          class="text-[16px] text-gray"
          @mouseover="
            activateAbout = false;
            activateLegistlative = false;
            activateBills = false;
          "
          >Home</NuxtLink
        >
        <NuxtLink
          to="/"
          class="text-[16px] text-gray"
          @mouseover="
            activateAbout = true;
            activateLegistlative = false;
            activateBills = false;
          "
          >About</NuxtLink
        >
        <NuxtLink
          to="/"
          class="text-[16px] text-gray"
          @mouseover="
            activateLegistlative = true;
            activateAbout = false;
            activateBills = false;
          "
          >Legislative Affairs</NuxtLink
        >
        <NuxtLink
          to="/bills"
          class="text-[16px] text-gray"
          @mouseover="
            activateLegistlative = false;
            activateAbout = false;
            activateBills = true;
          "
          >Bills & Motions</NuxtLink
        >
        <NuxtLink to="/" class="text-[16px] text-gray">Projects</NuxtLink>
        <NuxtLink to="/blog" class="text-[16px] text-gray">News & Update</NuxtLink>
      </div>
      <MainButton></MainButton>
    </div>
    <!-- dropdowns -->
    <SectionsAboutDropDown
      class="absolute top-[100%] shadow"
      v-show="activateAbout"
      @mouseleave="activateAbout = false"
    />
    <SectionsLegistlativeDropDown
      class="absolute top-[100%] shadow"
      v-show="activateLegistlative"
      @mouseleave="activateLegistlative = false"
    />
    <SectionsBillsDropDown
      class="absolute top-[100%] shadow"
      v-show="activateBills"
      @mouseleave="activateBills = false"
    />
  </nav>
</template>

<script lang="ts" setup>
const activateAbout = ref(false);
const activateLegistlative = ref(false);
const activateBills = ref(false);
</script>

<style lang="scss" scoped>
nav {
  font-family: 'Inter', sans-serif;
}
</style>
