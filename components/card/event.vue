<template>
  <div class="bg-white rounded-lg overflow-hidden">
    <img :src="event.image" :alt="event.title" class="w-full h-[400px] object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{{ event.title }}</h3>
      <p class="text-gray-600 text-sm mb-2">{{ formatDate(event.date) }}</p>
      <p class="text-gray-700">{{ event.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export default defineComponent({
  props: {
    event: {
      type: Object as PropType<Event>,
      required: true,
    },
  },
  methods: {
    formatDate(date: string): string {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
});
</script>
