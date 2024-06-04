<template>
  <!-- test dropdown -->
  <div class="w-full h-fit bg-primaryGreen py-16">
    <div class="content mx-auto w-[90%] flex gap-8">
      <div class="text-area w-5/12 flex flex-col gap-4">
        <h3 class="font-semibold gap-4" style="font-family: 'Inter', sans-serif">About</h3>
        <h4 class="text-white font-medium" style="font-family: 'Inter', sans-serif">
          A prominent Nigerian politician, serving as the Deputy Speaker of the House of Representatives of Nigeria
          since 2023. Kalu represents the Bende federal constituency, bringing their issues and perspectives to the
          national stage in his legislative role.
        </h4>
      </div>
      <div class="grid grid-cols-3 w-7/12 gap-8">
        <div class="rounded-lg drop-card border border-borderGreen flex items-end">
          <p class="mx-auto w-11/12 mb-4 text-white">Hello</p>
        </div>
        <div class="rounded-lg drop-card border border-borderGreen"></div>
        <div class="rounded-lg drop-card border border-borderGreen"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.drop-card {
  position: relative;
  background-image: url('https://placehold.co/400X400');
  background-size: 100%;
  background-position: center;
  &::after {
    content: '';
    width: 100%;
    height: 40%;
    bottom: 0;
    position: absolute;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #00a991 100%);
  }
}
</style>
