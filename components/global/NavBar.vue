<template>
  <nav class="w-full py-4 bg-white">
    <div class="content mx-auto flex justify-between w-[95%] items-center">
      <FullLogo />
      <div class="nav-content flex items-center rounded-full border border-borderMuted bg-white gap-12 px-8 py-3">
        <NuxtLink to="/" class="text-[16px]">Home</NuxtLink>
        <NuxtLink to="/" class="text-[16px]">About</NuxtLink>
        <NuxtLink to="/" class="text-[16px]">Legislative Affairs</NuxtLink>
        <NuxtLink to="/" class="text-[16px]">Bills & Motions</NuxtLink>
        <NuxtLink to="/" class="text-[16px]">Projects</NuxtLink>
        <NuxtLink to="/" class="text-[16px]">News & Update</NuxtLink>
      </div>
      <MainButton></MainButton>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style></style>
