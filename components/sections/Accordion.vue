<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="accordion-item mb-4">
      <div
        class="accordion-header flex justify-between items-center px-4 py-6 text-white 
          cursor-pointer" @click="toggleItem(index)"
      >
        <h3 class="font-medium text-[#146634] text-lg font-montserrat">{{ item.title }}</h3>
        <button class="text-4xl text-[#146634]">{{ openIndex === index ? '−' : '+' }}</button>
      </div>
      <div v-if="openIndex === index" class="accordion-content px-4 pb-6">
        <div class="w-full flex items-start overflow-x-scroll gap-4 md:gap-4">
          <div class="my-2 shrink-0 w-3/4 md:w-[16rem] lg:w-[14.5rem] text-black text-lg" v-for="(detail, i) in item.details" 
            :key="i"
          >
            <div class="relative mb-2 md:mb-3 w-full h-[10.75rem] md:h-[12.5rem] 
              lg:h-[14.125rem]"
            >
              <NuxtImg alt="" class="h-full w-full object-cover" :src="detail.image" />
            </div>
            <div class="w-[90%] md:w-[85%]">
              <p class="text-xs md:text-sm text-black font-medium font-montserrat">
                {{ detail.accomplishment }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-[1px] bg-[#146634]"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const openIndex = ref(null);

const toggleItem = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<style scoped>
.accordion-header {
  transition: background-color 0.3s ease;
}

.accordion-content {
  transition: max-height 0.3s ease-in-out;
}
</style>
