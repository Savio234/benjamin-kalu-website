<template>
    <Slider :items="latest" speed="slow" direction="left"
        class="py-16 bg-white flex w-full overflow-x-scroll 
        md:py-24 lg:py-36" v-if="latest"
    >
        <div class="relative mr-20 md:mr-24 lg:mr-28
            w-fit shrink-0" 
            v-for="(item, index) in latest" :key="index"
        >
            <div class="w-[4.875rem] shrink-0 mb-2 pl-3 relative h-[2.375rem] bg-[#D2E01A] 
                md:w-[5.25rem] lg:w-[5.625rem]"
            >
                <div class="relative h-10 -top-2 w-[3.125rem]">
                    <NuxtImg alt="quote" class="h-full w-full object-cover"
                        src="/svgs/about/green_quote.svg"
                    />
                </div>
            </div>
            <div class="bg relative flex flex-col gap-0">
                <div class="bg-[#E6E6E6] w-fit px-2 py-1">
                    <h3 class="text-[#146634] w-fit font-adamina font-normal text-sm 
                        md:text-base"
                    >
                        {{ item.slice(0, 36) }}
                    </h3>
                </div>
                <div class="bg-[#E6E6E6] w-fit relative px-2 py-1">
                    <h3 class="text-[#146634] w-fit font-adamina font-normal text-sm 
                        md:text-base"
                    >
                        {{ item.slice(36, 75) }}
                    </h3>
                </div>
                <div class="bg-[#E6E6E6] w-fit relative px-2 py-1">
                    <h3 class="text-[#146634] w-fit font-adamina font-normal text-sm 
                        md:text-base"
                    >
                        {{ item.slice(75, 125) }}
                    </h3>
                </div>
                <div class="bg-[#E6E6E6] w-fit relative px-2 py-1">
                    <h3 class="text-[#146634] w-fit font-adamina font-normal text-sm 
                        md:text-base"
                    >
                        {{ item.slice(125, 160) }}
                    </h3>
                </div>
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