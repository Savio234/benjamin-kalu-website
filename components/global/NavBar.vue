<template>
  <div class="w-full relative">
    <nav class="w-full py-4 bg-white relative">
      <div class="content mx-auto flex justify-between w-[95%] items-center">
        <FullLogo />
        <div class="nav-content hidden lg:flex items-center p-1 gap-2 lg:gap-1 xl:gap-4 font-extralight">
          <NuxtLink
            to="/"
            class="text-[#959897] text-sm xl:text-base py-2 md:px-2 lg:px-4 md:min-w-max lg:w-auto rounded-full hover:text-black hover:underline"
            @mouseover="resetActivations"
            @click="resetActivations"
            >Home</NuxtLink
          >
          <NuxtLink
            class="text-[#959897] text-sm xl:text-base py-2 md:px-2 lg:px-4 md:min-w-max lg:w-auto rounded-full hover:text-black hover:underline"
            to="/about"
            @mouseover="resetActivations"
            @click="resetActivations"
            >About</NuxtLink
          >
          <NuxtLink
            class="text-[#959897] text-sm xl:text-base py-2 md:px-2 lg:px-4 md:min-w-max lg:w-auto rounded-full flex items-center gap-2 hover:text-black hover:underline"
            @mouseover="activateSection('legislative')"
            @click="resetActivations"
            >Legislative Affairs
            <SvgIcon name="carat_down" width="1rem" height="1rem" />
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="text-[#959897] text-sm xl:text-base py-2 md:px-2 lg:px-4 md:min-w-max lg:w-auto rounded-full flex items-center gap-2 hover:text-black hover:underline"
            @mouseover="activateSection('project')"
            @click="resetActivations"
            >Projects
          </NuxtLink>
          <NuxtLink
            to="/pise-p"
            class="text-[#959897] text-sm xl:text-base py-2 md:px-2 lg:px-4 md:min-w-max lg:w-auto rounded-full flex items-center gap-2 hover:text-black hover:underline"
            @mouseover="activateSection('pise-p')"
            @click="resetActivations"
          >
            PISE-P
          </NuxtLink>
          <NuxtLink
            to="/news"
            class="text-[#959897] text-sm xl:text-base py-2 md:px-2 lg:px-4 rounded-full hover:text-black hover:underline"
            @mouseover="resetActivations"
            @click="resetActivations"
          >
            News & updates
          </NuxtLink>
        </div>
        <MainButton append-icon="sms" class="hidden lg:block" @click="$router.push('/contact')">
          Contact Us
        </MainButton>

        <!-- hamburger -->
        <button class="block lg:hidden" @click="toggleMobileNav">
          <svg-icon :name="mobileNav ? 'nav_close' : 'hamburger'" width="2rem" height="2rem" />
        </button>
      </div>
      <!-- dropdowns -->
      <SectionsLegistlativeDropDown
        class="absolute top-[100%] shadow"
        v-show="activateLegislative"
        @mouseleave="activateLegislative = false"
        @click="resetActivations"
      />
      <SectionsProjectsDropDown
        class="absolute top-[100%] shadow"
        v-show="activateProjects"
        @mouseleave="activateProjects = false"
        @click="resetActivations"
      />
    </nav>
    <div v-if="mobileNav" class="lg:hidden mobile-nav h-[100vh] w-full bg-black pt-8 z-[100] text-white">
      <div class="flex flex-col h-screen gap-6 mx-auto w-[90%]">
        <NuxtLink to="/" class="text-white py-3 px-4 rounded-full" @click="closeMobileNav">
          Home
        </NuxtLink>
        <NuxtLink class="text-white py-2 px-4 rounded-full" @click="closeMobileNav">
          About
        </NuxtLink>

        <div>
          <button
            @click="toggleSection('legislative')"
            class="w-full text-left text-white py-2 px-4 rounded-full focus:outline-none flex justify-between items-center"
          >
            Legislative Affairs
            <font-awesome-icon
              :icon="['fas', 'chevron-down']"
              :class="chevronClass('legislative')"
              class="transform transition-transform duration-300"
            ></font-awesome-icon>
          </button>
          <transition name="accordion">
            <div v-show="openSection === 'legislative'" class="pl-4 overflow-hidden">
              <NuxtLink to="/bills" class="block text-white py-2 px-4 rounded-full" @click="closeMobileNav"
                >Bills & Motions</NuxtLink
              >
              <NuxtLink to="/legislative/review" class="block text-white py-2 px-4 rounded-full" @click="closeMobileNav"
                >Constitutional Review</NuxtLink
              >
            </div>
          </transition>
        </div>
        <NuxtLink to="/projects" class="block text-white py-2 px-4 rounded-full" 
          @click="closeMobileNav"
        >
          Projects
        </NuxtLink>
        <NuxtLink to="/pise-p" class="block text-white py-2 px-4 rounded-full" 
          @click="closeMobileNav"
        >
          PISE-P
        </NuxtLink>
        <NuxtLink to="/news" class="text-white py-2 px-4 rounded-full" @click="closeMobileNav">
          News & updates
        </NuxtLink>
        
        <!-- <div>
          <button
          @click="toggleSection('projects')"
            class="w-full text-left text-white py-2 px-4 rounded-full focus:outline-none flex justify-between items-center"
          >
            Projects
            <font-awesome-icon
              :icon="['fas', 'chevron-down']"
              :class="chevronClass('projects')"
              class="transform transition-transform duration-300"
            ></font-awesome-icon>
          </button>
          <transition name="accordion">
            <div v-show="openSection === 'projects'" class="pl-4 overflow-hidden">
              <NuxtLink class="block text-white py-2 px-4 rounded-full" @click="closeMobileNav">Projects</NuxtLink>
              <NuxtLink to="/projects/pisep" class="block text-white py-2 px-4 rounded-full" @click="closeMobileNav"
                >PISE-P</NuxtLink
              >
            </div>
          </transition>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activateLegislative = ref(false);
const activateProjects = ref(false);
const mobileNav = ref(false);
const openSection = ref<string | null>(null);

const resetActivations = () => {
  activateLegislative.value = false;
  activateProjects.value = false;
};

const activateSection = (section: string) => {
  resetActivations();
  if (section === 'legislative') activateLegislative.value = true;
  if (section === 'projects') activateProjects.value = true;
};

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};

const closeMobileNav = () => {
  mobileNav.value = false;
};

const toggleSection = (section: string) => {
  openSection.value = openSection.value === section ? null : section;
};

const chevronClass = (section: string) => {
  return openSection.value === section ? 'rotate-180' : 'rotate-0';
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

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.5s ease-in-out;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
}

.rotate-0 {
  transform: rotate(0deg);
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>
