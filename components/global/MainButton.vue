<template>
  <button class="bg-white border-2 border-[#00A99133] w-fit h-fit p-[1px] rounded-full">
    <div class="content bg-primaryGreen rounded-full py-3 px-6 text-white text-[16px] flex items-center gap-2">
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
