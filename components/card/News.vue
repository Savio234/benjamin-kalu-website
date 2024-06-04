<template>
  <div class="w-full rounded-xl flex flex-col cursor-pointer">
    <NuxtImg src="https://placehold.co/400X400" class="w-full h-48 object-cover" />
    <div class="content mx-auto my-4 flex flex-col gap-4 w-[90%]"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  category: {
    type: String,
    required: false,
    default: 'Knowledge',
  },
  title: {
    type: String,
    required: false,
    default: 'Know who your Deputy speaker is (Auto-Biography)',
  },
  description: {
    type: String,
    required: false,
    default: 'Benjamin Kalu is a man of vast knowledge and wisdom. He hails from...',
  },
});
</script>

<style></style>
