<template>
  <div class="w-full grid sm:grid-cols-3 divide-x divide-borderMuted border border-borderMuted rounded-xl">
    <div class="image-box">
      <NuxtImg :src="$props.image" class="w-full h-[17.5rem] object-cover max-sm:rounded-t-xl sm:rounded-l-xl" />
    </div>
    <div class="desc flex flex-col justify-between p-4">
      <div class="flex flex-col gap-2">
        <small
          class="state w-fit h-fit py-1 px-2 rounded"
          :class="$props.status == 'completed' ? 'completed' : 'ongoing'"
          >{{ $props.status }}</small
        >
        <p class="title font-semibold">{{ $props.name }}</p>
        <div class="flex flex-col">
          <small>Agency: {{ $props.agency || 'N/A' }} </small>
          <small>Ministry: {{ $props.ministry || 'N/A' }}</small>
        </div>
      </div>
      <MainButton class="mt-4 sm:mt-0" @click="$router.push(`/projects/${props.name}`)">Read Blog</MainButton>
    </div>
    <div class="w-full grid grid-cols-1 grid-rows-3 divide-y divide-borderMuted">
      <div class="p-2 flex flex-col w-full h-full">
        <div class="flex flex-col w-full h-full justify-between">
          <small>Progress</small>
          <div class="w-full flex flex-col gap-2">
            <Progressbar :percentage-fill="$props.status == 'completed' ? '100%' : '50%'" />
            <div class="flex justify-between">
              <div class="flex flex-col">
                <small>Start Date</small>
                <small class="date">{{ $props.start_date || 'N/A' }}</small>
              </div>
              <div class="flex flex-col">
                <small>End Date</small>
                <small class="date">{{ $props.end_date || 'N/A' }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 w-full h-full flex flex-col gap-4">
        <small>Budget</small>
        <p class="font-semibold">{{ $props.budget > 0 ? 'N' + $props.budget : 'N/A' }}</p>
      </div>
      <div class="p-2 w-full h-full flex flex-col gap-4">
        <small>Location</small>
        <p class="font-semibold">{{ $props.location }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: false,
    default: 'post',
  },
  location: {
    type: String,
    required: false,
    default: 'post',
  },
  budget: {
    type: Number,
    required: false,
    default: 0,
  },
  agency: {
    type: String,
    required: false,
    default: 'post',
  },
  ministry: {
    type: String,
    required: false,
    default: 'post',
  },
  status: {
    type: String,
    required: false,
    default: 'Ongoing',
  },
  start_date: {
    type: String,
    required: false,
    default: '',
  },
  end_date: {
    type: String,
    required: false,
    default: '',
  },
  image: {
    type: String,
    required: false,
    default: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1718104787/benjamin_kalu/umuoba_road_mng2w2.png',
  },
});
</script>

<style lang="scss" scoped>
.ongoing {
  background-color: #fbfce8;
  color: #bfcc18;
}
.completed {
  color: #009a84;
  background-color: #b8f5e6;
}
</style>
