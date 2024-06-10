<template>
  <nav class="w-full py-4 bg-white relative">
    <div class="content mx-auto flex justify-between w-[95%] items-center">
      <FullLogo />
      <div
        class="nav-content hidden lg:flex items-center rounded-full border border-borderMuted bg-white p-1 gap-6 shadow"
      >
        <NuxtLink
          to="/"
          class="text-gray py-2 px-4 rounded-full"
          @mouseover="
            activateAbout = false;
            activateLegistlative = false;
            activateBills = false;
            activateProjects = false;
          "
          >Home</NuxtLink
        >
        <NuxtLink
          to="/about"
          class="text-gray py-2 px-4 rounded-full"
          @mouseover="
            activateAbout = true;
            activateLegistlative = false;
            activateBills = false;
            activateProjects = false;
          "
          >About</NuxtLink
        >
        <NuxtLink
          to="/legistlative"
          class="text-gray py-2 px-4 rounded-full"
          @mouseover="
            activateLegistlative = true;
            activateAbout = false;
            activateBills = false;
            activateProjects = false;
          "
          >Legislative Affairs</NuxtLink
        >
        <NuxtLink
          to="/bills"
          class="text-gray py-2 px-4 rounded-full"
          @mouseover="
            activateLegistlative = false;
            activateAbout = false;
            activateBills = true;
            activateProjects = false;
          "
          >Bills & Motions</NuxtLink
        >
        <NuxtLink
          to="/projects"
          class="text-gray py-2 px-4 rounded-full"
          @mouseover="
            activateLegistlative = false;
            activateAbout = false;
            activateBills = false;
            activateProjects = true;
          "
          >Projects</NuxtLink
        >
        <NuxtLink
          to="/blog"
          class="text-gray py-2 px-4 rounded-full"
          @mouseover="
            activateLegistlative = false;
            activateAbout = false;
            activateBills = false;
            activateProjects = false;
          "
          >News & Update</NuxtLink
        >
      </div>
      <MainButton append-icon="sms" class="hidden lg:block">Contact Us</MainButton>
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
    <SectionsProjectsDropDown
      class="absolute top-[100%] shadow"
      v-show="activateProjects"
      @mouseleave="activateProjects = false"
    />
  </nav>
</template>

<script lang="ts" setup>
const activateAbout = ref(false);
const activateLegistlative = ref(false);
const activateBills = ref(false);
const activateProjects = ref(false);
</script>

<style lang="scss" scoped>
nav {
  font-family: 'Inter', sans-serif;
}
</style>
