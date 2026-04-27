<template>
    <div v-if="latest"
        class="mt-8 grid grid-cols-1 md:grid-cols-3 w-full items-start gap-4 
            md:gap-6 lg:gap-8"
    >
        <div v-for="(item, index) in latest" :key="index"
            class="publications-card shrink-0 overflow-hidden w-full
            cursor-pointer h-[34rem] md:h-[38rem] lg:h-[41rem]"
        >
            <NuxtImg class="rounded-xl h-full w-full object-cover"
                alt="publication_image"
                :src="item?.attributes?.publication_image?.data?.attributes?.url"
            />
            <div class="dark_overlay rounded-xl w-full h-full absolute top-0 
                bottom-0 left-0 flex items-center justify-center"
            >
                <button @click="handleDownload(item)"
                    class="mx-auto h-12 md:h-14 rounded-[3.75rem] bg-white w-[90%]"
                >
                    <p class="text-sm md:text-base lg:text-lg text-black
                        font-medium"
                    >
                        Download latest Issue
                    </p>
                </button>
            </div>
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

const handleDownload = (item) => {
    const fileUrl = item?.attributes?.publication_link;
    if (fileUrl) {
        window.open(fileUrl, '_blank');
    } else {
        console.warn('No file available for download for this publication: ', item);
    }
};

// const downloadPdf = (item) => {
//     const fileUrl = item?.attributes?.publication_link;
//     const link = document.createElement('a');
//     link.href = fileUrl;
//     link.download = item?.attributes?.title;
//     link.target = '_blank'
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
// }

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