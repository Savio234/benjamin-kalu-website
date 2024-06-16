<template>
  <div class="w-full flex flex-col border border-borderMuted rounded-xl shadow">
    <div class="image w-full h-[15rem] relative">
      <NuxtImg :src="$props.image" class="w-full h-full object-cover object-top rounded-t-xl" />
    </div>
    <div class="content my-8 mx-auto w-[90%] flex flex-col gap-2">
      <h5 class="font-semibold">{{ $props.title }}</h5>
      <p class="text-gray my-2 text-[16px] leading-[1.2] tracking-[0.4px]">{{ $props.description }}</p>
      <a
        class="text-primaryGreen text-md font-semibold flex items-center gap-1 cursor-pointer"
        v-if="$props.route"
        @click="$router.push(`${$props.route}`)"
        >Learn More <svg-icon name="carat_green_right" width="2rem" height="2rem"
      /></a>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: 'Kalu’s Legislative Mission',
  },
  description: {
    type: String,
    required: false,
    default:
      'The House of Representatives Committee on the Review of the Constitution of the Federal Republic of Nigeria, 1999 (As Amended)',
  },
  image: {
    type: String,
    required: false,
    default: 'https://placehold.co/400',
  },
  route: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.image {
  &::after {
    content: '';
    width: 100%;
    height: 40%;
    bottom: 0;
    position: absolute;
    background: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0) 74.19%);
  }
}
</style>
