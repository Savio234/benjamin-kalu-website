<template>
  <div class="w-full relative">
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
            @click="
              activateLegistlative = false;
              activateAbout = false;
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
            @click="
              activateLegistlative = false;
              activateAbout = false;
              activateBills = false;
              activateProjects = false;
            "
            >About</NuxtLink
          >
          <NuxtLink
            to="/legislative"
            class="text-gray py-2 px-4 rounded-full"
            @mouseover="
              activateLegistlative = true;
              activateAbout = false;
              activateBills = false;
              activateProjects = false;
            "
            @click="
              activateLegistlative = false;
              activateAbout = false;
              activateBills = false;
              activateProjects = false;
            "
            >Legislative Affairs</NuxtLink
          >
          <!-- <NuxtLink
            to="/bills"
            class="text-gray py-2 px-4 rounded-full"
            @mouseover="
              activateLegistlative = false;
              activateAbout = false;
              activateBills = false;
              activateProjects = false;
            "
            @click="
              activateLegistlative = false;
              activateAbout = false;
              activateBills = false;
              activateProjects = false;
            "
            >Bills & Motions</NuxtLink
          > -->
          <NuxtLink
            to="/projects"
            class="text-gray py-2 px-4 rounded-full"
            @mouseover="
              activateLegistlative = false;
              activateAbout = false;
              activateBills = false;
              activateProjects = true;
            "
            @click="
              activateLegistlative = false;
              activateAbout = false;
              activateBills = false;
              activateProjects = false;
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
            @click="
              activateLegistlative = false;
              activateAbout = false;
              activateBills = false;
              activateProjects = false;
            "
            >News & Update</NuxtLink
          >
        </div>
        <MainButton append-icon="sms" class="hidden lg:block">Contact Us</MainButton>

        <!-- hamburger -->
        <button class="block sm:hidden" @click="mobileNav = !mobileNav">
          <svg-icon :name="mobileNav ? 'nav_close' : 'hamburger'" width="2rem" height="2rem" />
        </button>
      </div>
      <!-- dropdowns -->
      <!-- <SectionsAboutDropDown
        class="absolute top-[100%] shadow"
        v-show="activateAbout"
        @mouseleave="activateAbout = false"
        @click="
          activateLegistlative = false;
          activateAbout = false;
          activateBills = false;
          activateProjects = false;
        "
      /> -->
      <SectionsLegistlativeDropDown
        class="absolute top-[100%] shadow"
        v-show="activateLegistlative"
        @mouseleave="activateLegistlative = false"
        @click="
          activateLegistlative = false;
          activateAbout = false;
          activateBills = false;
          activateProjects = false;
        "
      />
      <!-- <SectionsBillsDropDown
        class="absolute top-[100%] shadow"
        v-show="activateBills"
        @mouseleave="activateBills = false"
        @click="
          activateLegistlative = false;
          activateAbout = false;
          activateBills = false;
          activateProjects = false;
        "
      /> -->
      <SectionsProjectsDropDown
        class="absolute top-[100%] shadow"
        v-show="activateProjects"
        @mouseleave="activateProjects = false"
        @click="
          activateLegistlative = false;
          activateAbout = false;
          activateBills = false;
          activateProjects = false;
        "
      />
    </nav>
    <div v-if="mobileNav" class="sm:hidden mobile-nav h-dvh w-full bg-white pt-8 fixed z-[1500]">
      <!-- content -->
      <div class="flex flex-col gap-4 mx-auto w-[90%]">
        <NuxtLink to="/" class="text-gray py-2 px-4 rounded-full" @click="mobileNav = false">Home</NuxtLink>
        <NuxtLink to="/about" class="text-gray py-2 px-4 rounded-full" @click="mobileNav = false">About</NuxtLink>
        <NuxtLink to="/legislative" class="text-gray py-2 px-4 rounded-full" @click="mobileNav = false"
          >Legislative Affairs</NuxtLink
        >
        <NuxtLink to="/legislative/review" class="text-gray py-2 px-4 rounded-full" @click="mobileNav = false"
          >Constitutional Review</NuxtLink
        >
        <NuxtLink to="/bills" class="text-gray py-2 px-4 rounded-full" @click="mobileNav = false"
          >Bills & Motions</NuxtLink
        >
        <NuxtLink to="/projects" class="text-gray py-2 px-4 rounded-full" @click="mobileNav = false">Projects</NuxtLink>
        <NuxtLink to="/projects/pisep" class="text-gray py-2 px-4 rounded-full" @click="mobileNav = false"
          >PISEP</NuxtLink
        >
        <NuxtLink to="/blog" class="text-gray py-2 px-4 rounded-full" @click="mobileNav = false"
          >News & Update</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const activateAbout = ref(false);
const activateLegistlative = ref(false);
const activateBills = ref(false);
const activateProjects = ref(false);
const mobileNav = ref(false);
</script>

<style lang="scss" scoped>
nav {
  font-family: 'Inter', sans-serif;
}
</style>
