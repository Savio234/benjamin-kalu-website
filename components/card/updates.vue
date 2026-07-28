<template>
  <div class="flex flex-col gap-2 justify-between p-4 rounded-xl bg-white" :class="$props.width">
    <div class="header flex items-center gap-4">
      <NuxtImg src="/images/logo.png" width="60px" height="60px" />
      <div class="date-holder flex flex-col pl-4 border-l border-borderMuted">
        <small>{{ $props.date }}</small>
        <p class="font-semibold">{{ $props.day }}</p>
      </div>
    </div>
    <div class="content flex flex-col">
      <p class="">{{ $props.description }}</p>
    </div>
    <a
      class="rounded-full flex gap-2 py-2 px-4 border w-fit text-primaryGreen border-borderMuted items-center"
      style="font-family: 'Inter', sans-serif"
    >
      <svg-icon name="attachment" width="1rem" height="1rem" />
      Download PDF
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  date: {
    type: String,
    required: false,
    default: 'March 24, 2024',
  },
  day: {
    type: String,
    required: false,
    default: 'Monday',
  },
  description: {
    type: String,
    required: false,
    default:
      ' The 148th Inter Parliamentary Union Assembly commenced in Geneva, Switzerland with the Deputy  Speaker, Rt. Hon Benjamin Kalu as part of the Nigerian delegation led by the Senate President, Sen.  Godswill Akpabio.  The Assembly was scheduled to hold from the 23rd till 27th of March, 2024 with a general debate  focused on “Parliamentary Diplomacy; Building Bridges for Peace and Understanding”',
  },
  width: {
    type: String,
    required: false,
    default: 'min-w-[30rem]',
  },
});
</script>

<style></style>
