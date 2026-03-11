<template>
    <div class="w-full relative">
        <div v-if="latest"
            class="mt-8 grid grid-cols-1 md:grid-cols-3 w-full items-start gap-6 md:gap-8 
            lg:gap-12" 
        >
            <div v-for="(news, index) in displayedNews" :key="index"
                class="bg-white shadow-sm p4 md:p-6 hover:shadow-lg transition-shadow border-t-4 
                border-borderMuted shrink-0 cursor-pointer"
                @click="$router.push('/news/details')"
            >
                <div class="mb-6 flex flex-col gap-2 md:gap-4 lg:gap-8 justify-between">
                    <h4 class="text-sm font-medium mb-4 font-montserrat">
                        {{ news.category }}
                    </h4>
                    <h2 class="text-xl text-left font-semibold mb-4 font-montserrat">
                        {{ news.title }}
                    </h2>

                    <p v-if="news.location" class="mb-4 font-montserrat">
                        {{ news.location }}
                    </p>

                    <p class="text-textGray text-left md:text-justify font-montserrat">
                        {{ news.description }}
                    </p>
                    <div class="text-sm font-montserrat">
                        {{ news.date }}
                    </div>
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
    newsItems: {
        type: Array,
    },
});

const latest = computed(() => props.newsItems);
const itemsPerPage = 6
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
.media-card {
    position: relative;
    .dark_bg {
        background: rgba(0, 0, 0, 0.35);
    }
    .dark_overlay {
        background-color: rgba(0, 0, 0, 0.55);
        opacity: 0;
        translate: 0% 5%;
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
            translate: 0% 5%;
            transition: all 500ms ease-out;
        }
    }
}

</style>