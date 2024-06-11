<template>
  <div class="w-full grid grid-cols-3 divide-x divide-borderMuted border border-borderMuted rounded-xl">
    <div class="image-box">
      <NuxtImg
        src="https://res.cloudinary.com/damkhdi7d/image/upload/v1718104787/benjamin_kalu/umuoba_road_mng2w2.png"
        class="w-full h-[17.5rem] object-cover rounded-l-xl"
      />
    </div>
    <div class="desc flex flex-col justify-between p-4">
      <div class="flex flex-col gap-2">
        <small class="state w-fit h-fit py-1 px-2 rounded ongoing">Ongoing</small>
        <p class="title font-semibold">SUPPLY OF EMPOWERMENT MATERIALS TO BENDE FEDERAL CONSTITUENCY, ABIA STATE</p>
        <div class="flex flex-col">
          <small>Agency: National Lotto Funds</small>
          <small>Ministry: Special Duties</small>
        </div>
      </div>
      <MainButton>Read Blog</MainButton>
    </div>
    <div class="w-full grid grid-cols-1 grid-rows-3 divide-y divide-borderMuted">
      <div class="p-2 flex flex-col w-full h-full">
        <div class="flex flex-col w-full h-full justify-between">
          <small>Progress</small>
          <div class="w-full flex flex-col gap-2">
            <Progressbar percentage-fill="50%" />
            <div class="flex justify-between">
              <div class="flex flex-col">
                <small>Start Date</small>
                <small class="date">12/04/23</small>
              </div>
              <div class="flex flex-col">
                <small>Start Date</small>
                <small class="date">12/04/23</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 w-full h-full flex flex-col gap-4">
        <small>Budget</small>
        <p class="font-semibold">N60,000,000</p>
      </div>
      <div class="p-2 w-full h-full flex flex-col gap-4">
        <small>Location</small>
        <p class="font-semibold">Amaeke - Onitsha Bende 442106, Abia</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
