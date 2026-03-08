<template>
  <div class="card w-4/5 md:w-full md:h-[26.25rem] flex flex-col bg-white border 
    border-borderMuted shrink-0 hover:shadow-2xl transition-shadow rounded-xl 
    cursor-pointer relative"
    @click="$router.push(`${$props.route}`)"
  >
    <!-- :style="{ y: cardY, opacity: cardOpacity }" -->
    <div class="image w-full h-[17rem] relative">
      <NuxtImg :src="$props.image" class="w-full h-full object-cover object-top rounded-xl" />
    </div>
    <div class="content md:p-4 my-6 mx-auto w-[90%] flex flex-col gap-2">
      <h5 class="font-semibold font-montserrat">{{ $props.title }}</h5>
      <a
      class="text-primaryGreen text-md font-semibold flex items-center gap-1 cursor-pointer"
      v-if="$props.route"
      @click="$router.push(`${$props.route}`)"
      >Learn More <svg-icon name="carat_green_right" width="2rem" height="2rem"
      /></a>
      <p class="text-gray my-2 hidden text-xs md:block md:text-sm leading-[1.2] 
        tracking-[0.4px] font-montserrat"
      >
        <!-- {{ $props.description.slice(0, 103)}}... -->
        <!-- {{ $props.description}} -->
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// import { motion, useSpring, useTransform, MotionValue } from 'motion-v'
const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  // scrollProgress: {
  //   type: MotionValue<number>,
  //   required: true,
  // },
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
// const start = computed(() => props.index * 0.12);
// const end = computed(() => start.value + 0.25);
// const rawY = useTransform(props.scrollProgress, [start.value, end.value], [250, 0]);
// const rawOpacity = useTransform(props.scrollProgress, [start.value, end.value], [0.3, 1]);
// const y = useSpring(rawY, {
//   stiffness: 100,
//   damping: 20,
//   mass: 0.5
// });
// const cardY = useSpring(rawY, {
//   stiffness: 100,
//   damping: 20,
//   mass: 0.5
// });

// const cardOpacity = useSpring(rawOpacity, {
//   stiffness: 100,
//   damping: 20,
//   mass: 0.5
// });
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  flex-shrink: 0;
  transition: all 300ms ease-in-out;
}
// .card:hover {
//   transform: scale(1.02);
// }
// .image {
//   &::after {
//     content: '';
//     display: none;
//     width: 100%;
//     height: 40%;
//     bottom: 0;
//     position: absolute;
//     background: linear-gradient(0deg, #ffffff 0%, rgba(255, 255, 255, 0) 74.19%);
//   }
// }
</style>
