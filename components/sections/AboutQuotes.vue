<template>
    <Slider :items="latest" speed="slow" direction="left"
        class="py-16 bg-white flex gap-20 md:gap-24 lg:gap-28 w-full overflow-x-scroll 
        md:py-24 lg:py-36" v-if="latest"
    >
        <div class="relative w-80 md:w-[27rem] lg:w-[33.5rem] shrink-0" v-for="(item, index) in latest" :key="index">
            <div class="w-[4.875rem] shrink-0 mb-2 pl-3 relative h-[2.375rem] bg-[#D2E01A] 
                md:w-[5.25rem] lg:w-[5.625rem]"
            >
                <div class="relative h-10 -top-2 w-[3.125rem]">
                    <NuxtImg alt="quote" class="h-full w-full object-cover"
                        src="/svgs/about/green_quote.svg"
                    />
                </div>
            </div>
            <div class="bg-[#E6E6E6] py-1 px-2">
                <h3 class="text-[#146634] font-adamina font-normal text-base md:text-2xl">
                    {{ item }}
                </h3>
            </div>
        </div>
    </Slider>

</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';
import Slider from './Slider.vue';

const props = defineProps({
    quotes: {
        type: Array,
    },
});

const latest = computed(() => props.quotes);
</script>