<template>
    <div class="scroller" ref="scrollerRef"
        :class="[`direction-${direction}`, `speed-${speed}`]"
        :data-animated="shouldAnimate"
    >
        <ul class="scroller__inner" ref="innerRef">
            <li
                v-for="(item, idx) in items"
                :key="idx"
                class="tag relative w-48 h-24"
                :data-index="idx"
            >
                <NuxtImg :src="item" alt="Partner logo"
                    loading="lazy"
                    class="w-full h-full object-cover flex-shrink-0"
                />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = defineProps<{
    items: string[];
    direction?: 'left' | 'right';
    speed?: 'normal' | 'fast' | 'slow';
}>()

const defaultDirection = 'left'
const defaultSpeed = 'normal'

const direction = computed(() => props.direction ?? defaultDirection)
const speed = computed(() => props.speed ?? defaultSpeed)

const scrollerRef = ref<HTMLDivElement | null>(null)
const innerRef = ref<HTMLUListElement | null>(null)

const shouldAnimate = ref(false)

onMounted(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reducedMotion && scrollerRef.value && innerRef.value) {
        shouldAnimate.value = true

        const children = Array.from(innerRef.value.children)
        children.forEach(child => {
            const clone = child.cloneNode(true) as HTMLElement
            clone.setAttribute('aria-hidden', 'true')
            innerRef.value?.appendChild(clone)
        })
    }
})
</script>

<style scoped lang="scss">

.scroller {
    max-width: 100%;
    overflow: hidden;
    background: transparent;
    &[data-animated='true'] {
        .scroller__inner {
            width: max-content;
            flex-wrap: nowrap;
            display: flex;
            animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite;
        }
    }

    &.direction-right {
        --_animation-direction: reverse;
    }

    &.direction-left {
        --_animation-direction: forwards;
    }

    &.speed-fast {
        --_animation-duration: 20s;
    }

    &.speed-slow {
        --_animation-duration: 70s;
    }

    &.speed-normal {
        --_animation-duration: 40s;
    }
}

.scroller__inner {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
    padding-block: 2rem;

    @media screen and (max-width: 650px) {
        padding-block: 1.5rem;
        gap: 0.75rem;
    }
}

.tag {
    position: relative;
}

.scroller:hover .scroller__inner {
  animation-play-state: paused;
}

@keyframes scroll {
    to {
        transform: translate(calc(-50% - 0.5rem));
    }
}
</style>