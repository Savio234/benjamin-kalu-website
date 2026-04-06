<template>
    <!-- <Slider :items="latest" speed="normal" direction="right" -->
        <!-- class="overflow-x-scroll mt-8 flex w-full items-start gap-4 md:gap-6" -->
    <!-- <ManualSlider v-if="latest" :step="8"> -->
    <div v-if="latest"
        class="mt-8 grid grid-cols-1 md:grid-cols-3 w-full items-start gap-4 md:gap-6 lg:gap-8"
    >
    <!-- w-4/5 md:w-[23rem] lg:w-[26rem]  -->
        <div v-for="(item, index) in latest" :key="index"
            class="publications-card shrink-0 overflow-hidden w-full
            cursor-pointer h-[34rem] md:h-[38rem] lg:h-[41rem]"
        >
            <NuxtImg class="rounded-xl h-full w-full object-cover" alt="publication_image"
                :src="item.image"
            />
            <div class="dark_overlay rounded-xl w-full h-full absolute top-0 bottom-0 left-0 flex 
                items-center justify-center"
            >
                <button class="mx-auto h-12 md:h-14 rounded-[3.75rem] bg-white w-[90%]">
                    <p class="text-sm md:text-base lg:text-lg text-black font-medium">
                        Download latest Issue
                    </p>
                </button>
            </div>
        </div>
    </div>
    <!-- </ManualSlider> -->
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';
// import Slider from './Slider.vue';
import ManualSlider from './ManualSlider.vue';

const props = defineProps({
    publications: {
        type: Array,
    },
});
const latest = computed(() => props.publications);

</script>

<style lang="scss" scoped>
.publications-card {
    position: relative;
    .dark_overlay {
        background-color: rgba(0, 0, 0, 0.6);
        opacity: 0;
        translate: 0% 3.5%;
        transition: all 500ms ease-out;
    }
    &:hover {
        .dark_overlay {
            transition: all 500ms ease-out;
            translate: 0% 0%;
            opacity: 1;
        }
    }
}

</style>