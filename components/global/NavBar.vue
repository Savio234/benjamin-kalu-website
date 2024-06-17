<template>
  <div class="w-full relative">
    <nav class="w-full py-4 bg-white relative">
      <div class="content mx-auto flex justify-between w-[95%] items-center">
        <FullLogo />
        <div class="nav-content hidden lg:flex items-center p-1 gap-6">
          <NuxtLink
            to="/"
            class="text-[#959897] py-2 px-4 rounded-full hover:text-black"
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
            class="text-[#959897] py-2 px-4 rounded-full hover:text-black"
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
            class="text-[#959897] py-2 px-4 rounded-full flex items-center gap-2 hover:text-black"
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
            >Legislative Affairs
            <SvgIcon name="carat_down" width="1rem" height="1rem" />
          </NuxtLink>
          <!-- <NuxtLink
            to="/bills"
            class="text-[#959897] py-2 px-4 rounded-full"
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
            class="text-[#959897] py-2 px-4 rounded-full flex items-center gap-2 hover:text-black"
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
            >Projects <SvgIcon name="carat_down" width="1rem" height="1rem"
          /></NuxtLink>
          <NuxtLink
            to="/blog"
            class="text-[#959897] py-2 px-4 rounded-full hover:text-black"
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
        <MainButton append-icon="sms" class="hidden lg:block" @click="$router.push('/contact')">Contact Us</MainButton>

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
    <div v-if="mobileNav" class="sm:hidden mobile-nav h-dvh w-full bg-black pt-8 fixed z-[1500] text-white">
      <div class="flex flex-col justify-between items-between gap-4 mx-auto w-[90%]">
        <NuxtLink to="/" class="text-white py-2 px-4 rounded-full" @click="mobileNav = false">Home</NuxtLink>
        <NuxtLink to="/about" class="text-white py-2 px-4 rounded-full" @click="mobileNav = false">About</NuxtLink>
        
        <div>
          <button @click="toggleSection('legislative')" class="w-full text-left text-white py-2 px-4 rounded-full focus:outline-none">
            Legislative Affairs
          </button>
          <transition name="accordion">
            <div v-show="openSection === 'legislative'" class="pl-4 overflow-hidden">
              <NuxtLink to="/legislative" class="block text-white py-2 px-4 rounded-full" @click="mobileNav = false">Kalu's Missions</NuxtLink>
              <NuxtLink to="/bills" class="block text-white py-2 px-4 rounded-full" @click="mobileNav = false">Bills & Motions</NuxtLink>
              <NuxtLink to="/legislative/review" class="block text-white py-2 px-4 rounded-full" @click="mobileNav = false">Constitutional Review</NuxtLink>
            </div>
          </transition>
        </div>
        
        <div>
          <button @click="toggleSection('projects')" class="w-full text-left text-white py-2 px-4 rounded-full focus:outline-none">
            Projects
          </button>
          <transition name="accordion">
            <div v-show="openSection === 'projects'" class="pl-4 overflow-hidden">
              <NuxtLink to="/projects" class="block text-white py-2 px-4 rounded-full" @click="mobileNav = false">Projects</NuxtLink>
              <NuxtLink to="/projects/10" class="block text-white py-2 px-4 rounded-full" @click="mobileNav = false">PISEP</NuxtLink>
            </div>
          </transition>
        </div>

        <NuxtLink to="/blog" class="text-white py-2 px-4 rounded-full" @click="mobileNav = false">News & Update</NuxtLink>
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

const openSection = ref<string | null>(null);

const toggleSection = (section: string) => {
  openSection.value = openSection.value === section ? null : section;
};

</script>

<style lang="scss" scoped>
  nav {
    font-family: 'Inter', sans-serif;
  }

  .transition-max-height {
    transition: max-height 0.5s ease-in-out;
  }

  .overflow-hidden {
    overflow: hidden;
  }


  .accordion-enter-active, .accordion-leave-active {
    transition: max-height 0.5s ease-in-out;
  }
  .accordion-enter-from, .accordion-leave-to {
    max-height: 0;
  }
</style>
