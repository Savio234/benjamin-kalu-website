<template>
  <!-- test dropdown -->
  <div class="w-full h-fit bg-black">
    <div class="content mx-auto w-full flex gap-8">
      <div class="text-area w-5/12 py-24">
        <div class="w-10/12 flex flex-col gap-5 mx-auto">
          <h3 class="font-semibold gap-4 text-white">Projects</h3>
          <h5 class="text-white font-medium">
            A prominent Nigerian politician, serving as the Deputy Speaker of the House of Representatives of Nigeria
            since 2023. Kalu represents the Bende
          </h5>
        </div>
      </div>
      <div class="grid grid-cols-2 w-7/12 gap-[1px] bg-[#cccccc9a]">
        <NuxtLink class="drop-card flex items-end cursor-pointer" to="/projects">
          <div class="drop-card flex flex-col gap-4 p-8 cursor-pointer justify-center">
            <div class="bg-[#01877F] w-fit h-fit rounded-full p-4">
              <svg-icon name="list" width="1.5rem" height="1.5rem" />
            </div>
            <p class="text-white text-lg text-medium mt-4">Constituency Projects</p>
            <svg-icon name="arrow_yellow" width="1.5rem" height="1.5rem" />
          </div>
        </NuxtLink>
        <NuxtLink class="drop-card flex items-end cursor-pointer" to="/projects/pisep">
          <div class="drop-card flex flex-col gap-4 p-8 cursor-pointer justify-center">
            <div class="bg-[#01877F] w-fit h-fit rounded-full p-4">
              <svg-icon name="list" width="1.5rem" height="1.5rem" />
            </div>
            <p class="text-white text-lg font-medium mt-4">PISE-P</p>
            <svg-icon name="arrow_yellow" width="1.5rem" height="1.5rem" />
          </div>
        </NuxtLink>

        <!-- <div class="drop-card border border-borderGreen flex items-end">
          <p
            class="mx-auto w-11/12 mb-4 text-white flex items-center gap-1 relative z-10 cursor-pointer"
            @click="$router.push('/projects/others')"
          >
            Other Project
            <svg-icon name="arrow_right_white" width="1rem" height="1rem" />
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
