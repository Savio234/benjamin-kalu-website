<template>
  <!-- test dropdown -->
  <div class="w-full h-fit bg-primaryGreen">
    <div class="content mx-auto w-[85%] flex gap-8">
      <div class="text-area w-5/12 flex flex-col gap-4 py-40">
        <h3 class="font-semibold gap-4" style="font-family: 'Inter', sans-serif">Bills & Motions</h3>
        <h5 class="text-white font-medium" style="font-family: 'Inter', sans-serif">
          A prominent Nigerian politician, serving as the Deputy Speaker of the House of Representatives of Nigeria
          since 2023. Kalu represents the Bende
        </h5>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 w-7/12">
        <div class="drop-card border border-borderGreen flex items-end">
          <p
            class="mx-auto w-11/12 mb-4 text-white flex items-center gap-1 relative z-10 cursor-pointer"
            @click="$router.push('/bills?type=speaker')"
          >
            Office of the Deputy Speaker's Bills
            <svg-icon name="arrow_right_white" width="1rem" height="1rem" />
          </p>
        </div>
        <div class="drop-card border border-borderGreen flex items-end">
          <p
            class="mx-auto w-11/12 mb-4 text-white flex items-center gap-1 relative z-10 cursor-pointer"
            @click="$router.push('/bills/motions?type=speaker')"
          >
            Office of the deputy speaker's Motions
            <svg-icon name="arrow_right_white" width="1rem" height="1rem" />
          </p>
        </div>
        <div class="drop-card border border-borderGreen flex items-end">
          <p
            class="mx-auto w-11/12 mb-4 text-white flex items-center gap-1 relative z-10 cursor-pointer"
            @click="$router.push('/bills?type=house')"
          >
            House of Representatives Bills
            <svg-icon name="arrow_right_white" width="1rem" height="1rem" />
          </p>
        </div>
        <div class="drop-card border border-borderGreen flex items-end">
          <p
            class="mx-auto w-11/12 mb-4 text-white flex items-center gap-1 relative z-10 cursor-pointer"
            @click="$router.push('/bills/motions?type=house')"
          >
            House of Representatives Motions
            <svg-icon name="arrow_right_white" width="1rem" height="1rem" />
          </p>
        </div>
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
