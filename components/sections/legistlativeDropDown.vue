<template>
  <!-- test dropdown -->
  <div class="w-full h-fit bg-black">
    <div class="content mx-auto w-full flex gap-8">
      <div class="text-area w-3/5 py-24">
        <div class="w-10/12 flex flex-col gap-4 mx-auto">
          <h3 class="font-semibold gap-4 text-white">Legislative Affairs</h3>
          <h5 class="text-white font-medium">
            Keep track of Kalu’s, bills and motions as well as the constitutional review 
            activities of the 10th House of representatives.
          </h5>
        </div>
      </div>
      <div class="grid grid-cols-2 w-2/5 gap-[1px] bg-[#CCCCCC9A]">
        <div class="drop-card flex items-end cursor-pointer" @click="$router.push('/bills')">
          <div class="drop-card flex flex-col gap-4 p-8 cursor-pointer justify-center" @click="$router.push('/bills')">
            <div class="bg-[#146634] w-fit h-fit rounded-full p-4">
              <svg-icon name="list" width="1.5rem" height="1.5rem" />
            </div>
            <p class="text-white text-lg text-medium mt-6">
              Bills and <br />
              Motions
            </p>
            <svg-icon name="arrow_yellow" width="1.5rem" height="1.5rem" />
          </div>
        </div>
        <div class="drop-card flex items-end cursor-pointer" @click="$router.push('/legislative/review')">
          <div
            class="drop-card flex flex-col gap-4 p-8 cursor-pointer justify-center"
            @click="$router.push('/legislative/review')"
          >
            <div class="bg-[#146634] w-fit h-fit rounded-full p-4">
              <svg-icon name="gravel_white" width="1.5rem" height="1.5rem" />
            </div>
            <p class="text-white text-lg text-medium mt-6">
              Constitution<br />
              Review
            </p>
            <svg-icon name="arrow_yellow" width="1.5rem" height="1.5rem" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
