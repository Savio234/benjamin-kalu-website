<template>
    <section class="w-full grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2" v-if="latest">
        <div v-for="(item, index) in latest" :key="index"
            class="events_card w-full"
        >
            <div class="w-full relative h-[24.75rem] md:h-[23.5rem]">
                <NuxtImg alt="image" class="w-full rounded-tl-2xl rounded-tr-2xl h-full object-cover"
                    :src="item.image"
                />
            </div>
            <h3 class="text-base my-4 text-[#2B2B2B] font-semibold font-montserrat">
                {{ item.title }}
            </h3>
            <p class="w-full md:w-[90%] text-[#2B2B2B] text-justify font-normal font-montserrat 
                text-sm md:text-base"
            >
                {{ item.body }}
            </p>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    events: {
        type: Array,
    },
});

const latest = computed(() => props.events);
</script>