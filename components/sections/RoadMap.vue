<template>
    <section class="bg-white w-full py-12 md:py-16 lg:py-20">
        <div class="mx-auto w-[92.5%] md:w-[90%]">
            <h1 class="text-center text-[#022924] text-[2rem] md:text-4xl lg:text-5xl">
                Road Map and Educational Background
            </h1>
            <div class="my-6 md:my-8 relative w-full h-52 md:h-[30rem] lg:h-[37rem]">
                <NuxtImg alt="bg" class="object-cover w-full h-full rounded-2xl"
                    src="/images/about/background.png"
                />
            </div>
            <div class="hidden mb-12 lg:mb-20 md:grid grid-cols-4 gap-4 lg:gap-6">
                <div class="flex h-[14rem] lg:h-[19rem] py-5 px-2.5 cursor-pointer items-end justify-center
                    rounded-lg bg-[#E6E6E6]"
                >
                    <h3 class="text-[#2E312F] text-center md:text-xl lg:text-2xl">
                        Political & Public Service Career</h3>
                </div>
                <div class="flex h-[14rem] lg:h-[19rem] py-5 px-2.5 cursor-pointer items-end justify-center
                    rounded-lg bg-[#E6E6E6]"
                >
                    <h3 class="text-[#2E312F] text-center md:text-xl lg:text-2xl">
                        Regional  & International Parliamentary Leadership</h3>
                </div>
                <div class="flex h-[14rem] lg:h-[19rem] py-5 px-2.5 cursor-pointer items-end justify-center
                    rounded-lg bg-[#E6E6E6]"
                >
                    <h3 class="text-[#2E312F] text-center md:text-xl lg:text-2xl">
                        Education</h3>
                </div>
                <div class="flex h-[14rem] lg:h-[19rem] py-5 px-2.5 cursor-pointer card_bg items-end 
                    justify-center rounded-lg"
                >
                    <h3 class="text-white text-center md:text-xl lg:text-2xl">
                        Professional Certifications & Executive Programs</h3>
                </div>
            </div>
            <div class="flex overflow-x-scroll gap-6 md:hidden">
                <div class="min-h-12 items-center flex max-w-fit p-2 min-w-12 relative">
                    <p class="text-[#022822] font-adamina font-normal text-sm w">
                        Political & Public Service Career
                    </p>
                </div>
                <div class="min-h-12 items-center flex max-w-fit p-2 min-w-12 relative">
                    <div class="relative w-8 h-8">
                        <NuxtImg alt="icons" class="h-full w-full" src="/svgs/about/leadership.svg" />
                    </div>
                </div>
                <div class="min-h-12 items-center flex p-2 max-w-fit min-w-12 relative">
                    <div class="relative w-8 h-8">
                        <NuxtImg alt="icons" class="h-full w-full" src="/svgs/about/education.svg" />
                    </div>
                </div>
                <div class="min-h-12 items-center flex p-2 max-w-fit min-w-12 relative">
                    <div class="relative w-8 h-8">
                        <NuxtImg alt="icons" class="h-full w-full" src="/svgs/about/programs.svg" />
                    </div>
                </div>
            </div>
            <div class="w-full h-[1px] relative top-[1.7rem] z-[1] bg-[#434242]"></div>
            <div class="w-full overflow-x-scroll gap-4 flex items-start lg:gap-5" v-if="latest">
                <div v-for="(item, index) in latest" :key="index"
                    class="shrink-0 z-[2] w-1/3 md:w-40 p-3 gap-4 md:gap-5 relative"
                >
                    <div class="mx-auto z-[2] w-7 h-7 rounded-full flex items-center justify-center 
                        bg-[#00786766]"
                    >
                        <div class="w-4 h-4 bg-[#007867] rounded-full"></div>
                    </div>
                    <div class="my-4 md:my-7 lg:my-10 mx-auto">
                        <h3 class="text-center text-sm md:text-base text-[#022924]">
                            {{ item.title }}
                        </h3>
                    </div>
                    <div class="mx-auto">
                        <p class="text-xs text-center text-[#022924] font-inter font-normal md:text-sm">
                            {{ item.body }}
                        </p>
                    </div>
                    <div class="mx-auto h-auto">
                        <p class="text-center text-xs text-[#022924] font-inter font-bold md:text-sm">
                            {{ item.date }}
                        </p>
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
    roadmap: {
        type: Array,
    },
});

const latest = computed(() => props.roadmap);
</script>

<style lang="scss" scoped>
.card_bg {
    background-image: url('/public/images/about/card_bg.jpg');
    background-blend-mode: overlay;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
}

</style>