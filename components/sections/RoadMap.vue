<template>
    <section class="bg-white w-full py-12 md:py-16 lg:py-20">
        <div class="mx-auto w-[92.5%] md:w-[90%]">
            <h1 class="text-center text-[#022924] text-[2rem] md:text-4xl lg:text-5xl">
                Road Map and Educational Background
            </h1>
            <div class="my-6 md:my-8 relative w-full h-64 md:h-[35rem] lg:h-[45rem]">
                <NuxtImg alt="bg" class="object-cover object-top w-full h-full rounded-2xl"
                    src="/images/about/background.png"
                />
            </div>
            <div class="hidden mb-12 lg:mb-20 md:grid grid-cols-4 gap-8 lg:gap-20"
                v-if="tabs"
            >
                <div class="flex h-[14rem] lg:h-[23rem] py-5 px-2.5 cursor-pointer items-end 
                    justify-center rounded-lg"
                    :class="{
                        'card_bg text-white': activeTab === index,
                        'card_transparent text-[#2E312F]': activeTab !== index
                    }"
                    v-for="(tab, index) in tabs"
                    :key="index"
                    @click="activeTab = index"
                >
                    <h3 class="text-center w-4/5 md:text-base lg:text-2xl">
                        {{ tab.title }}
                    </h3>
                </div>
            </div>
            <div class="flex icons overflow-x-scroll gap-2 md:hidden" v-if="tabs">
                <div class="items-center flex max-w-fit p-2 min-w-max relative"
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :class="{
                        '': activeTab !== index,
                        'text-[#022822]': activeTab === index
                    }"
                    @click="activeTab = index"
                >
                    <p v-if="activeTab === index" class="font-adamina font-normal text-xs">
                        {{ tab.title }}
                    </p>
                    <div class="relative w-8 h-8" v-else>
                        <NuxtImg :alt="tab.title" :src="tab.icon" class="h-full w-full" />
                    </div>
                </div>
            </div>
            <div class="w-full h-[1px] relative top-[1.7rem] z-[1] bg-[#434242]"></div>
            <div class="w-full data overflow-x-scroll gap-4 flex items-start lg:gap-2 
                lg:grid lg:grid-cols-7" v-if="activeData.length"
            >
                <div v-for="(item, index) in activeData" :key="index"
                    class="shrink-0 z-[2] w-1/3 md:w-60 py-3 gap-4 md:gap-5
                    relative lg:w-full"
                >
                    <div class="mx-auto z-[2] w-7 h-7 rounded-full flex items-center justify-center 
                        bg-[#00786766]"
                    >
                        <div class="w-4 h-4 bg-[#007867] rounded-full"></div>
                    </div>
                    <div class="my-4 md:my-6 lg:my-8 mx-auto">
                        <h3 class="text-center md:w-3/4 md:mx-auto text-sm md:text-base text-[#022924]">
                            {{ item.title }}
                        </h3>
                    </div>
                    <div class="mx-auto">
                        <p class="text-xs md:w-3/4 md:mx-auto text-center text-[#022924] font-inter font-normal md:text-sm">
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
const activeTab = ref(0)

const tabs = ref([
    {
        title: 'Political & Public Service Career',
        icon: '/svgs/about/leadership.svg'
    },
    {
        title: 'Regional & International Parliamentary Leadership',
        icon: '/svgs/about/leadership.svg'
    },
    {
        title: 'Education',
        icon: '/svgs/about/education.svg'
    },
    {
        title: 'Professional Certifications & Executive Programs',
        icon: '/svgs/about/programs.svg'
    }
])

const activeData = computed(() => {
  return props.roadmap[activeTab.value] || [];
})

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
.card_transparent {
    background: #E6E6E6;
}
.icons, .data {
    &::-webkit-scrollbar {
		display: none;
	}
	& {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
}

</style>