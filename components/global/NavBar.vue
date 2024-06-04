<template>
  <nav class="w-full py-4 bg-white">
    <div class="content mx-auto flex justify-between w-[95%] items-center">
      <FullLogo />
      <div class="nav-content flex items-center rounded-full border border-borderMuted bg-white gap-12 px-8 py-3">
        <NuxtLink to="/" class="text-[16px] text-gray">Home</NuxtLink>
        <NuxtLink to="/" class="text-[16px] text-gray">About</NuxtLink>
        <NuxtLink to="/" class="text-[16px] text-gray">Legislative Affairs</NuxtLink>
        <NuxtLink to="/" class="text-[16px] text-gray">Bills & Motions</NuxtLink>
        <NuxtLink to="/" class="text-[16px] text-gray">Projects</NuxtLink>
        <NuxtLink to="/" class="text-[16px] text-gray">News & Update</NuxtLink>
      </div>
      <MainButton></MainButton>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
nav {
  font-family: 'Inter', sans-serif;
}
</style>
