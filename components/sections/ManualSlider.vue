<template>
    <div class="relative w-full overflow-hidden">
        <div class="carousel-viewport" ref="viewportRef">
            <div class="carousel-inner gap-4 md:gap-6 lg:gap-8 flex
                transition-transform duration-500 ease-out"
                :style="{ transform: `translateX(-${translateX}%)` }"
            >
                <!-- :style="{ transform: `translateX(-${currentIndex * 22.75}%)` }" -->
                <slot />
            </div>
        </div>
        <div class="w-full justify-end flex mt-6 items-center gap-2 ml-auto">
            <button
                class="bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition disabled:opacity-40 disabled:cursor-not-allowed z-10"
                :disabled="currentIndex === 0"
                @click="goToPrevious"
            >
                ←
            </button>

            <button
                class="bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition disabled:opacity-40 disabled:cursor-not-allowed z-10"
                :disabled="currentIndex === totalItems - 2"
                @click="goToNext"
            >
                →
            </button>
        </div>



        <div v-if="showDots" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            <button v-for="i in totalItems" :key="i" class="w-3 h-3 rounded-full transition"
                :class="currentIndex === i-1 ? 'bg-white' : 'bg-white/50'"
                @click="currentIndex = i-1"
            ></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

defineProps<{
  showDots?: boolean
}>()

const emit = defineEmits(['change'])
const viewportRef = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const totalItems = ref(0)

// const translatePercent = computed(() => {
//     if (typeof window === 'undefined') return 15
//     const width = window.innerWidth
//     if (width >= 1024) return 22.75
//     if (width >= 768) return 25
//     return 15
// })

// const transformStyle = computed(() => ({
//   transform: `translateX(-${currentIndex.value * translatePercent.value}%)`
// }))
const translateX = computed(() => {
    const raw = currentIndex.value * 22.75
    const maxTranslate = (totalItems.value >= 5) ? (totalItems.value - 2.75) * 22.75 :
        (totalItems.value - 1) * 22.75
  
  return Math.min(raw, maxTranslate)
})

// const translateX = computed(() => {
//   if (totalItems.value === 0) return 0
//   const stepPercent = 100 / 22.5
//   const maxTranslate = (totalItems.value - 22.5) * stepPercent
//   const raw = currentIndex.value * stepPercent
//   return Math.min(raw, maxTranslate)
// })

onMounted(() => {
    if (viewportRef.value) {
        const children = viewportRef.value.querySelectorAll('.carousel-inner > *')
        totalItems.value = children.length
        children.forEach((el, i) => {
            el.classList.add('relative', 'flex-shrink-0')
        })
    }
})

const goToNext = () => {
    if (currentIndex.value < totalItems.value - 1) {
        currentIndex.value++
        emit('change', currentIndex.value)
    }
}

const goToPrevious = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
        emit('change', currentIndex.value)
    }
}
</script>

<style scoped>
.carousel-viewport {
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
}

.carousel-inner > * {
  /* width: auto; */
  flex-shrink: 0;
}

/* @media screen and (max-width: 650) {
    .carousel-inner {
        gap: 1rem;
    }
} */
</style>