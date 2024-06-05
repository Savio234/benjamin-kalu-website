<template>
  <main class="flex flex-col w-full">
    <div class="w-[90%] flex flex-col items-center mx-auto text-center gap-8 py-8">
      <p class="text-lg font-semibold">
        See the latest projects that we are up to and actively working on to better improve <br />
        our consistuencies
      </p>
      <MainButton></MainButton>
      <div class="grid grid-cols-3 grid-rows-3 gap-8 text-left">
        <CardNews description="" class="col-span-2 row-span-2" image-height="h-[80%]" />
        <CardNews description="" />
        <CardNews description="" />
        <CardNews description="" />
        <CardNews description="" />
        <CardNews description="" />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup></script>

<style></style>
