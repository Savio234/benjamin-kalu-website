<template>
  <section class="updates w-full min-h-screen py-16 bg-black text-white relative flex flex-col justify-center">
    <NuxtImg
      src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717433017/benjamin_kalu/vector_left_lfn7hu.png"
      class="img-one absolute top-1/2 left-0"
      alt="Decorative vector left"
    />
    <NuxtImg
      src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717433017/benjamin_kalu/vector_right_rjtxb2.png"
      class="img-one absolute top-1/2 right-0"
      alt="Decorative vector right"
    />
    <div class="content flex flex-col mx-auto w-[85%] gap-8">
      <!-- Header -->
      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4 items-start">
        <!-- Left Side - PDF Embed -->
        <div class="relative w-full rounded-xl border-4 border-primaryGreen shadow-2xl overflow-hidden" style="aspect-ratio: 1/1.414;">
          <embed
            src="https://res.cloudinary.com/dokuicrun/image/upload/v1770202565/benjaminkalu/THE_STATESMAN_-_ISSUE_001-compressed_bzytr0.pdf#toolbar=0&view=Fit&page=1"
            class="w-full h-full"
            type="application/pdf"
          />
        </div>

        <!-- Right Side - Publication Info -->
        <div class="flex flex-col justify-center gap-6 items-start lg:col-span-3">
          <div class="flex flex-col gap-2">
            <div class="rounded-3xl py-6 px-0">
              <h3 class="text-white text-4xl md:text-5xl font-bold">THE STATESMAN</h3>
              <p class="text-white text-xl md:text-2xl font-semibold py-3">A Legislative & Policy Review</p>
            </div>
          </div>

          <NuxtLink 
            to="https://res.cloudinary.com/dokuicrun/image/upload/v1770202565/benjaminkalu/THE_STATESMAN_-_ISSUE_001-compressed_bzytr0.pdf" 
            target="_blank" 
            class="bg-white rounded-3xl py-4 px-8 hover:bg-primaryGreen transition-colors duration-300 mt-4"
          >
            <p class="text-black hover:text-white text-xl md:text-2xl font-semibold">Download Latest Issue</p>
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