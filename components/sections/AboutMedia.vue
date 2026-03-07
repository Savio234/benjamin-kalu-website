<template>
    <!-- <Slider :items="latest" speed="normal" direction="left" -->
    <!-- class="mt-8 overflow-x-scroll flex w-full items-start gap-4 md:gap-6"  -->
    <!-- class="media-card shrink-0 overflow-hidden w-1/3 md:w-[20rem] lg:w-[24rem] -->
    <div
        class="mt-8 grid grid-cols-1 md:grid-cols-3 w-full items-start gap-4 md:gap-6" 
        v-if="latest"
    >
        <div v-for="(item, index) in latest" :key="index"
            class="media-card shrink-0 overflow-hidden w-full
            cursor-pointer relative h-full md:h-52 lg:h-56"
        >
            <div class="z-[2] hidden md:block absolute right-0 bottom-0 top-0 left-0">
                <NuxtImg class="rounded-xl h-full w-full object-cover" alt="publication_image"
                    :src="item.video_thumbail"
                />
            </div>
            <div class="relative md:hidden h-32 w-full">
                <NuxtImg class="rounded-xl h-full w-full object-cover" alt="publication_image"
                    :src="item.video_thumbail"
                />
            </div>
            <div class="dark_bg z-[2] rounded-xl w-full h-full absolute top-0 bottom-0 left-0 flex 
                items-center justify-center"
            >
                <div class="mx-auto h-8 w-8 md:hidden rounded-[3.75rem] md:w-12 md:h-12">
                    <NuxtImg alt="play-video" class="h-full rounded-2xl w-full"
                        src="/svgs/about/video_icon.svg"
                    />
                </div>
            </div>
            <div class="dark_overlay hidden z-[4] rounded-xl w-full h-full absolute top-0 bottom-0 
                left-0 md:flex items-center justify-center"
            >
                <div class="mx-auto h-8 w-8 rounded-[3.75rem] md:w-12 md:h-12">
                    <NuxtImg alt="play-video" class="h-full rounded-2xl w-full"
                        src="/svgs/about/video_icon.svg"
                    />
                </div>
            </div>
            <div class="card_content hidden px-6 py-8 z-[2] top-1/4 lg:top-[32%] relative md:flex
                flex-col gap-2"
            >

                <h3 class="font-normal hidden md:block card-title text-sm md:text-base text-white font-adamina">
                    {{ item.title }}
                </h3>
                <div class="bg-[#FFFFFF99] w-[5.35rem] py-1 flex items-center justify-center px-4 
                    rounded-[3.5rem]"
                >
                    <p class="text-[#022924] capitalize card-desc font-medium font-montserrat text-xs 
                        md:text-sm"
                    >
                        {{ item.media_type }}
                    </p>
                </div>
            </div>
            <div class="card_content_sm bg-white flex py-2 z-[2] relative md:hidden
                flex-col gap-2"
            >

                <h3 class="font-normal card-title text-xs text-[#1D1D1D] 
                    font-adamina"
                >
                    {{ item.title }}
                </h3>
                <div class="bg-[#00000080] w-16 py-1 flex items-center justify-center 
                    px-4 rounded-[3.5rem]"
                >
                    <p class="text-white capitalize font-medium 
                        font-montserrat text-[0.5rem]"
                    >
                        {{ item.media_type }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';
import Slider from './Slider.vue';

const props = defineProps({
    media: {
        type: Array,
    },
});

const latest = computed(() => props.media);

</script>

<style lang="scss" scoped>
.media-card {
    position: relative;
    .dark_bg {
        background: rgba(0, 0, 0, 0.35);
    }
    .dark_overlay {
        background-color: rgba(0, 0, 0, 0.55);
        opacity: 0;
        translate: 0% 7%;
        transition: all 500ms ease-out;
    }
    .card_content {
        opacity: 1;
        translate: 0% 0%;
        transition: all 500ms ease-out;
    }
    &:hover {
        .dark_overlay {
            transition: all 500ms ease-out;
            translate: 0% 0%;
            opacity: 1;
        }
        .card_content {
            opacity: 0;
            translate: 0% 70%;
            transition: all 500ms ease-out;
        }
    }
}

</style>