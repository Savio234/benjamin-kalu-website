<template>
  <div class="accordion lg:max-w-[80%] space-y-4">
    <div v-for="(item, index) in items" :key="index" class="accordion-item border border-borderGray p-4 rounded-lg">
      <div
        class="accordion-header py-4 font-[500] font-montserrat text-xl flex justify-between items-center cursor-pointer"
        @click="toggleAccordion(index)"
      >
        {{ item.title }}
        <span
          :class="{
            'bg-primaryGreen': activeIndex === index,
            'bg-darkGreen': activeIndex !== index,
          }"
          class="chevron-wrapper w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="{ 'rotate-180': activeIndex === index, 'rotate-0': activeIndex !== index }"
            class="transition-transform duration-300"
          >
            <path
              d="M5.68132 9.11743L4.32617 10.4726L11.9966 18.143L19.6689 10.5736L18.3231 9.20915L12.0041 15.4402L5.68132 9.11743Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <hr v-if="activeIndex === index" class="border-borderGray" />
      <div v-if="activeIndex === index" class="accordion-content p-4">
        <ul class="my-6 list-disc">
          <li class="my-2 text-sm md:text-base" v-for="(detail, detailIndex) in item.details" :key="detailIndex">
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: 0, // First element open by default
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
/* Chevron rotation and wrapper styling */
.chevron-wrapper {
  transition: background-color 0.3s ease;
}

svg.rotate-180 {
  transform: rotate(180deg);
}

svg.rotate-0 {
  transform: rotate(0deg);
}
</style>
