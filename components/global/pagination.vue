<template>
  <div>
    <vue-awesome-paginate
      v-model="currentPage"
      :total-items="$props.total"
      :items-per-page="$props.itemsPerPage"
      :max-pages-shown="$props.maxPages"
      :on-click="onClickHandler"
    >
      <template #prev-button>
        <span class="flex items-center gap-4">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.05572 12.4347L1.74854 7.1275L7.05572 1.82031"
              stroke="#131316"
              stroke-width="1.70588"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="hidden sm:block">{{ $props.prevText }}</span>
        </span>
      </template>
      <template #next-button>
        <span class="text-primaryGreen flex gap-4 items-center">
          {{ $props.nextText }}
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.57227 12.4347L6.87945 7.1275L1.57227 1.82031"
              stroke="#00A991"
              stroke-width="1.70588"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<script setup>
defineProps({
  prevText: {
    type: String,
    required: false,
    default: 'Showing 1 to 6 of 200 entries',
  },
  nextText: {
    type: String,
    requird: false,
    default: 'Next',
  },
  total: {
    type: Number,
    required: false,
    default: 50,
  },
  itemsPerPage: {
    type: Number,
    required: false,
    default: 2,
  },
  maxPages: {
    type: Number,
    required: false,
    default: 3,
  },
});
const onClickHandler = (page) => {
  console.log(page);
};

const currentPage = ref(1);
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  min-width: 40px;
  padding: 4px 8px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;
  color: black;
  /* box-shadow: 0px 4px 32px 0px #212e4f1a; */
}
.paginate-buttons:hover {
  background-color: #f4f4f6;
}
.active-page {
  background: #f4f4f6;
  color: #131316;
  font-weight: 600;
}
</style>
