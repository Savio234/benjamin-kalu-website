<template>
  <section class="w-full py-16 bg-white">
    <div class="content flex mx-auto w-[85%] flex-col gap-16">
      <div class="w-full sm:w-10/12 flex flex-col gap-2">
        <h2 class="font-semibold">Featured <span class="text-secondaryGreen">Projects</span></h2>
        <h6 class="font-medium">
          Learn about the impactful projects of the two time Rep. who has been forthright in his mission to bring the
          dividends of democracy to Bende Federal Constituency, Abia State and the larger South East region of Nigeria.
        </h6>
      </div>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        <!-- <div class="w-full flex rounded-xl flex-col cursor-pointer" @click="$router.push('/projects/10')"> -->
        <div class="w-full flex rounded-xl flex-col cursor-pointer">
          <NuxtImg
            class="h-[15rem] rounded-t-xl object-cover"
            src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544599/benjamin_kalu/new_image_pisep_cmjxlb.png"
            format="webp"
          />
          <div class="w-full p-4 flex flex-col gap-4 bg-light">
            <h4 class="font-semibold">PISE-P</h4>
            <p class="text-[14px] leading-[1.6] tracking-[0.4px]">
              Beyond the legislative chambers, Kalu launched the Peace in the South East Project (PISE-P) in an effort
              to restore the region to its once illustrious past and illuminating glory,, The project champions a
              non-kinetic approach to resolving the region's insecurity issues.
            </p>
          </div>
        </div>
        <!-- <div class="w-full flex rounded-xl flex-col cursor-pointer" @click="$router.push('/projects')"> -->
        <div class="w-full flex rounded-xl flex-col cursor-pointer">
          <NuxtImg
            class="h-[15rem] rounded-t-xl object-cover"
            src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718125712/benjamin_kalu/happy_child_smxkrn.png"
            format="webp"
          />
          <div class="w-full p-4 flex flex-col gap-4 bg-light">
            <h4 class="font-semibold">Constituency Projects</h4>
            <p class="text-[14px] leading-[1.6] tracking-[0.4px]">
              The impact of Rt. Hon. Kalu’s exemplary leadership and quality representation has been felt across the
              thirteen communities of Bende Federal Constituency and beyond, with several projects spanning various
              sectors of community development.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
