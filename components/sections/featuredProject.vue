<template>
  <section class="w-full py-16 bg-white">
    <div class="content flex mx-auto w-[85%] flex-col gap-16">
      <div class="w-full sm:w-10/12 flex flex-col gap-2">
        <h2 class="font-semibold font-montserrat">Featured <span class="text-secondaryGreen">Projects</span></h2>
        <p class="font-medium">
          Learn about the impactful projects of the two time Rep. who has been forthright in his mission to bring the
          dividends of democracy to Bende Federal Constituency, Abia State and the larger South East region of Nigeria.
        </p>
      </div>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div class="w-full flex rounded-xl flex-col cursor-pointer" @click="$router.push('/projects')">
          <NuxtImg
            class="h-[15rem] rounded-t-xl object-cover"
            src="/images/home/constituency_projects.png"
            format="webp"
          />
          <div class="w-full p-4 flex flex-col gap-4 bg-lightGreen">
            <h4 class="font-semibold font-montserrat">Constituency Projects</h4>
            <p class="text-[14px] leading-[1.6] tracking-[0.4px]">
              The impact of Rt. Hon. Kalu’s exemplary leadership and quality representation has been felt across the
              thirteen communities of Bende Federal Constituency and beyond, with several projects spanning various
              sectors of community development.
            </p>
          </div>
        </div>
        <div class="w-full flex rounded-xl flex-col cursor-pointer" @click="$router.push('/projects/pisep')">
          <NuxtImg class="h-[15rem] rounded-t-xl object-cover" src="/images/home/pisep.png" format="webp" />
          <div class="w-full p-4 flex flex-col gap-4 bg-lightGreen">
            <h4 class="font-semibold font-montserrat">PISE-P</h4>
            <p class="text-[14px] leading-[1.6] tracking-[0.4px]">
              Beyond the legislative chambers, Kalu launched the Peace in the South East Project (PISE-P) in an effort
              to restore the region to its once illustrious past and illuminating glory,, The project champions a
              non-kinetic approach to resolving the region's insecurity issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
