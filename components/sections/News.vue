<template>
    <section class="w-full py-8 md:py-12 lg:py-16 bg-light">
        <div class="content mx-auto flex flex-col w-[92.5%] md:w-[90%]" v-if="latest">
            <h1 class="text-[#022924] text-center font-adamina text-[2rem] md:text-4xl lg:text-5xl">
                In The News
            </h1>
            <p class="text-sm mt-2 md:mt-4 mb-8 mb:mt-12 lg:mb-16 font-medium font-montserrat 
                text-[#585C5B] text-center md:text-base lg:text-lg"
            >
                Latest news on how our office has performed lately
            </p>
            <div class="grid w-full mx-auto grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
                <div v-for="(item, index) in displayedNews" :key="index"
                    class="news-card bg-white relative shrink-0 rounded-xl border border-borderMuted
                    overflow-hidden w-full cursor-pointer min-h-80 md:min-h-[22.75rem] 
                    lg:min-h-[24.75rem]"
                    @click="$router.push('/news/details')"
                >
                    <div class="z-[2] absolute bottom-0 top-0 left-0">
                        <div class="w-full relative h-[24.75rem]">
                            <NuxtImg :src="item.attributes.main_image.data?.attributes.url"
                                alt="News Image" class="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div class="dark_bg z-[3] w-full h-1/3 absolute bottom-0 top-auto left-0"></div>
                    <div class="dark-bg px-4 pt-4 md:px-6 md:pt-6 pb:8 md:pb-10 rounded-xl z-[3] w-full h-full 
                        absolute bottom-0 top-0 left-0 flex flex-col"
                    >
                        <p class="font-roboto mb-12 font-medium text-[0.625rem] md:text-xs text-white">
                            {{ formatDate(item.attributes.date) }}
                        </p>
                        <h3 class="font-normal text-sm md:text-base mb-4 text-white font-adamina">
                            {{ item.attributes.title }}
                        </h3>

                        <p class="text-white font-inter text-xs md:text-sm">
                            {{ item.attributes.description }}
                        </p>
                        <button class="bg-white relative top-1/4 md:top-[35%] justify-self-end h-8 w-24 
                            rounded-[2rem]"
                        >
                            <p class="text-xs leading-5 font-medium">Read</p>
                        </button>
                    </div>

                    <div class="card_content px-6 py-8 z-[5] top-[65%] relative flex
                        flex-col gap-2"
                    >
                        <p class="font-roboto card-date font-medium text-[0.625rem] md:text-xs text-white">
                            {{ formatDate(item.attributes.date)}}
                        </p>

                        <h3 class="font-normal card-title text-sm md:text-base text-white font-adamina">
                            {{ item.attributes.title }}
                        </h3>

                        <p class="text-white hidden card-desc font-inter text-xs md:text-sm">
                            {{ item.attributes.description }}
                        </p>
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
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    newsData: {
        type: Array,
    },
});

const latest = computed(() => props.newsData);
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

function formatDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}
</script>

<style lang="scss" scoped>
.news-card {
    transition: all 500ms ease-in-out;
    .dark-bg {
        background-color: rgba(0, 0, 0, 0.7);
        opacity: 0;
        translate: 0% 5%;
        transition: all 500ms ease-out;
    }
    .dark_bg {
        background-color: rgba(0, 0, 0, 0.3);
        transition: all 500ms ease-out;
    }
    .card-date, .card-title {
        transition: all 500ms ease-out;
        opacity: 1;
        translate: 0% 0%;
    }
    &:hover {
        .dark-bg {
            transition: all 500ms ease-out;
            translate: 0% 0%;
            opacity: 1;
        }
        .dark_bg {
            translate: 0% 0%;
            opacity: 0;
            transition: all 500ms ease-out;
        }
        .card-date, .card-title, .card-desc {
            opacity: 0;
            translate: 0% 5%;
            transition: all 500ms ease-out;
        }
    }
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
