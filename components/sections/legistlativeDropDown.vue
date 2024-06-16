<template>
  <!-- test dropdown -->
  <div class="w-full h-fit bg-black">
    <div class="content mx-auto w-full flex gap-8">
      <div class="text-area w-5/12 py-24">
        <div class="w-10/12 flex flex-col gap-4 mx-auto">
          <h3 class="font-semibold gap-4 text-white">Legislative Agenda</h3>
          <h5 class="text-white font-medium">
            Keep track of Kalu’s Mission, Bills and Motions as well as the Constitutional Review activities of the 10th
            House of Reps
          </h5>
        </div>
      </div>
      <div class="grid grid-cols-3 w-7/12 bg-light gap-[0.5px]">
        <div class="drop-card flex items-end cursor-pointer" @click="$router.push('/legislative')">
          <p class="mx-auto w-11/12 mb-4 text-white flex items-center gap-1 relative z-10 cursor-pointer">
            Deputy Speaker's Agenda
            <svg-icon name="arrow_right_white" width="1rem" height="1rem" />
          </p>
        </div>
        <div class="drop-card flex items-end cursor-pointer" @click="$router.push('/bills')">
          <p
            class="mx-auto w-11/12 mb-4 text-white flex items-center gap-1 relative z-10 cursor-pointer"
            @click="$router.push('/bills')"
          >
            Bills and Motions
            <svg-icon name="arrow_right_white" width="1rem" height="1rem" />
          </p>
        </div>
        <div class="drop-card flex items-end cursor-pointer" @click="$router.push('/legislative/review')">
          <p class="mx-auto w-11/12 mb-4 text-white flex items-center gap-1 relative z-10 cursor-pointer">
            Constitutional Review
            <svg-icon name="arrow_right_white" width="1rem" height="1rem" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
