<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="accordion-item bg-[#007867] mb-4">
      <div
        class="accordion-header flex justify-between items-center px-4 py-6 text-white cursor-pointer"
        @click="toggleItem(index)"
      >
        <h3 class="font-medium text-lg font-montserrat">{{ item.title }}</h3>
        <button class="text-4xl text-white">{{ openIndex === index ? '−' : '+' }}</button>
      </div>
      <div v-if="openIndex === index" class="accordion-content bg-[#54C5B5] px-4 py-6">
        <ul class="list-disc pl-5 space-y-1">
          <li class="my-2 text-lg" v-for="(detail, i) in item.details" :key="i">{{ detail }}</li>
        </ul>
      </div>
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
