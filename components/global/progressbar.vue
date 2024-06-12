<template>
  <div class="flex w-full items-center justify-start gap-2">
    <div class="progress-bar rounded-full">
      <div class="progress rounded-full"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  percentageFill: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#ffb31f',
  },
});
</script>

<style lang="scss" scoped>
.progress-bar {
  position: relative;
  background-color: #dee5f2;
  width: 100%;
  height: 0.75rem;
  .progress {
    width: v-bind(percentageFill);
    background-color: #009a84;
    height: 0.75rem;
  }
}
</style>
