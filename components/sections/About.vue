<template>
  <div class="w-full flex flex-col min-h-[60vh] sm:flex-row my-4 md:my-12">
    <div
      :class="[
        'w-full sm:w-7/12 flex flex-col',
        imagePosition === 'right' ? 'order-1 sm:order-1' : 'order-1 sm:order-2',
        textJustify,
      ]"
    >
      <div class="mx-auto w-full md:w-[70%] p-4 flex flex-col gap-4 text-justify">
        <div class="border border-borderMuted rounded-full py-1 px-2 flex items-center gap-2 w-fit mb-4">
          <svg-icon name="person_icon" width="1.25rem" height="1.25rem" />
          <p class="text-primaryGreen font-semibold">{{ primaryText }}</p>
        </div>
        <div :class="['flex flex-col gap-6 items-stretch text-lg', textJustify]">
          <div :class="['flex flex-col gap-6 items-stretch text-lg', textJustify]" v-html="textContent"></div>
        </div>
      </div>
    </div>

    <div
      :class="[
        'w-full sm:w-5/12 flex items-center',
        imagePosition === 'right' ? 'order-2 sm:order-2' : 'order-2 sm:order-1',
        textJustify,
      ]"
    >
      <NuxtImg
        :src="imageSrc"
        :style="{ height: imageHeight }"
        :class="[
          'w-full object-cover',
          imagePosition === 'right' ? 'rounded-l-md sm:rounded-l-md' : 'rounded-r-md sm:rounded-r-md',
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    primaryText: {
      type: String,
      required: true,
    },
    textContent: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    imagePosition: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value);
      },
    },
    imageHeight: {
      type: String,
      default: '90vh',
    },
    textJustify: {
      type: String,
      default: 'justify-start',
      validator(value) {
        return [
          'justify-start',
          'justify-center',
          'justify-end',
          'justify-between',
          'justify-around',
          'justify-evenly',
        ].includes(value);
      },
    },
  },
};
</script>
