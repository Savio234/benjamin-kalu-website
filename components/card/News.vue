<template>
  <div class="w-full rounded-xl flex flex-col cursor-pointer bg-white border border-borderMuted">
    <NuxtImg :src="$props.imageUrl" class="w-full object-cover rounded-t-xl" :class="$props.imageHeight" />
    <div class="content mx-auto my-4 flex flex-col gap-4 w-[90%]">
      <p class="bg-bgGreen text-primaryGreen rounded-lg w-fit py-1 px-2">{{ $props.category }}</p>
      <h6 class="font-semibold">{{ $props.title }}</h6>
      <small>{{ $props.description }}</small>
    </div>
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
  imageHeight: {
    type: String,
    required: false,
    default: 'h-60',
  },
  imageUrl: {
    type: String,
    required: false,
    default: 'https://placehold.co/400X400',
  },
});
</script>

<style></style>
