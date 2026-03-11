<template>
    <div class="w-full relative">
        <div class="grid mt-4 md:mt-6 lg:mt-8 w-full mx-auto grid-cols-1 md:grid-cols-3 
            gap-4 md:gap-6 lg:gap-8" v-if="latest"
        >
            <div v-for="(item, index) in displayedNews" :key="index"
                class="publications-card shrink-0 overflow-hidden w-[95%] mx-auto sm:w-full 
                cursor-pointer h-[31rem] md:h-[35rem] lg:h-[38.5rem]"
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
        <div class="mx-auto w-48 mt-6 md:mt-8 lg:mt-12" v-if="hasMore">
            <MainButton @click="loadMore" class="w-full">
                <div class="flex w-full items-center justify-between">
                    <p class="text-xs md:text-sm text-white">See more</p>
                    <SvgIcon name="chevron" width="1rem" height="1rem" />
                </div>
            </MainButton>
        </div>
    </div>
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
const itemsPerPage = 3
const itemsToAdd = 3

const visibleCount = ref(itemsPerPage)
const isLoadingMore = ref(false)
const displayedNews = computed(() => {
  return latest.value.slice(0, visibleCount.value)
})

const hasMore = computed(() => {
  return visibleCount.value < latest.value.length
})

const loadMore = () => {
    if (!hasMore.value || isLoadingMore.value) return
    isLoadingMore.value = true
    setTimeout(() => {
        visibleCount.value += itemsToAdd
        visibleCount.value = Math.min(visibleCount.value, latest.value.length)
        isLoadingMore.value = false
    }, 100)
}

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