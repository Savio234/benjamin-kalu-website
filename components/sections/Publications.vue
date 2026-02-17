<template>
    <section class="w-full py-8 md:py-12 lg:py-16 bg-white">
        <div class="w-[92.5%] mx-auto md:w-[90%]" v-if="latest">
            <h1 class="text-center text-[#022924] text-[2rem] md:text-4xl lg:text-5xl">
                Publications
            </h1>
            <div class="overflow-x-scroll mt-8 flex w-full items-start gap-4 md:gap-6">
                <div v-for="(item, index) in latest" :key="index" 
                    class="publications-card shrink-0 overflow-hidden w-4/5 md:w-[20rem] lg:w-[24rem] 
                    cursor-pointer h-[22.5rem] md:h-[30rem] lg:h-[36.5rem]"
                >
                    <NuxtImg class="rounded-xl h-full w-full object-cover" alt="publication_image"
                        :src="item.image"
                    />
                    <div class="dark_overlay rounded-xl w-full h-full absolute top-0 bottom-0 left-0 flex 
                        items-center justify-center"
                    >
                        <button class="mx-auto h-14 rounded-[3.75rem] bg-white w-[90%]">
                            <p class="text-base md:text-xl text-black font-medium">
                                Download latest Issue
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

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
        background-color: rgba(0, 0, 0, 0.55);
        opacity: 0;
        translate: 0% 200%;
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