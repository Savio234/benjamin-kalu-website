<template>
  <section class="updates w-full h-[300px] py-2 bg-black text-white relative flex flex-col justify-center overflow-hidden">
    <NuxtImg
      src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717433017/benjamin_kalu/vector_left_lfn7hu.png"
      class="img-one absolute top-1/2 left-0 pointer-events-none"
      alt="Decorative vector left"
    />
    <NuxtImg
      src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717433017/benjamin_kalu/vector_right_rjtxb2.png"
      class="img-one absolute top-1/2 right-0 pointer-events-none"
      alt="Decorative vector right"
    />
    <div class="content flex flex-col mx-auto w-[85%] gap-8 relative z-10">
      <!-- Header -->
      <!-- Main Content Grid -->
      <div class="flex flex-row gap-8 items-center h-full">
        <!-- Left Side - PDF Embed -->
        <div class="relative h-[85%] w-auto rounded-xl border-2 border-primaryGreen shadow-2xl overflow-hidden">
          <NuxtImg
            src="https://res.cloudinary.com/dokuicrun/image/upload/v1770220412/Screenshot_2026-02-04_at_4.52.29_PM_v0zqhs.png"
            class="w-auto h-[260px] object-contain"
            alt="The Statesman Issue 001 Cover"
          />
        </div>

        <!-- Right Side - Publication Info -->
        <div class="flex flex-col justify-center gap-3 items-start flex-1">
          <div class="flex flex-col gap-1">
            <div class="rounded-3xl p-0">
              <h3 class="text-white text-2xl md:text-3xl font-bold">THE STATESMAN</h3>
              <p class="text-white text-sm md:text-base font-semibold py-1">A Legislative & Policy Review</p>
            </div>
          </div>

          <NuxtLink 
            to="/books/THE-STATESMAN-ISSUE-001.pdf" 
            target="_blank" 
            class="bg-white rounded-2xl py-2 px-6 hover:bg-primaryGreen transition-colors duration-300"
          >
            <p class="text-black hover:text-white text-sm md:text-base font-semibold">Download Latest Issue</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>