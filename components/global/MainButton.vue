<template>
  <button class="w-fit h-fit rounded-full">
    <div class="content bg-[#146634] max-h-14 rounded-full py-2 px-3 lg:py-4 lg:px-6 text-white 
      text-base flex items-center gap-2"
    >
      <svg-icon :name="$props.preIcon" width="1.25rem" height="1.25rem" v-if="$props.preIcon" />
      <slot />
      <svg-icon :name="$props.appendIcon" width="1.25rem" height="1.25rem" v-if="$props.appendIcon" />
    </div>
  </button>
</template>

<script setup>
defineProps({
  preIcon: {
    type: String,
    required: false,
  },
  appendIcon: {
    type: String,
    required: false,
  },
});
</script>

<style></style>
