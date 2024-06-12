<template>
  <main class="w-full flex flex-col">
    <section class="w-full py-16 bg-light">
      <div class="content flex flex-col gap-8 mx-auto w-[85%]">
        <div class="header flex flex-col gap-2">
          <h2 class="font-semibold">
            Projects for our <br class="hidden sm:block" />
            people
          </h2>
          <p>Latest News on how our office performed lately</p>
        </div>
        <!-- filter bar -->
        <div class="filter-row w-full flex flex-col gap-4">
          <div class="search_row w-full flex justify-between">
            <input
              type="text"
              name=""
              class="w-full sm:w-4/12 rounded sm:rounded-lg bg-white border border-borderMuted p-2 outline-bgGreen"
              id=""
              placeholder="Enter a Keyword to search project"
            />
            <button
              class="filter_button rounded sm:rounded-full w-fit h-fit py-2 px-2 sm:px-8 flex items-center gap-2 border-2"
              :class="isFiltering ? 'border-primaryGreen shadow-bgGreen shadow-lg' : 'border-bgGreen'"
              @click="isFiltering = !isFiltering"
            >
              <span class="hidden sm:block">Filter</span>
              <svg-icon name="filter" width="1rem" height="1rem" />
            </button>
          </div>
          <div class="filter_row flex flex-wrap sm:flex-nowrap justify-between gap-0 sm:gap-2" v-if="isFiltering">
            <div class="py-2 px-4 w-6/12 sm:w-3/12 h-fit bg-white border rounded border-borderMuted">
              <select name="" id="" class="p-0 m-0 outline-none w-full">
                <option value="" selected>Filter LGA</option>
              </select>
            </div>
            <div class="py-2 px-4 w-6/12 sm:w-3/12 h-fit bg-white border rounded border-borderMuted">
              <select name="" id="" class="p-0 m-0 outline-none w-full">
                <option value="" selected>Filter Contractor</option>
              </select>
            </div>
            <div class="py-2 px-4 w-6/12 sm:w-3/12 h-fit bg-white border rounded border-borderMuted">
              <select name="" id="" class="p-0 m-0 outline-none w-full">
                <option value="" selected>Filter by year</option>
              </select>
            </div>
            <div class="py-2 px-4 w-6/12 sm:w-3/12 h-fit bg-white border rounded border-borderMuted">
              <select name="" id="" class="p-0 m-0 outline-none w-full">
                <option value="" selected>Filter by State</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Project Card -->
        <div class="w-full flex flex-col gap-4">
          <CardProject />
          <CardProject />
        </div>
        <Pagination class="self-center" prev-text="Previous Projects" next-text="Next Projects" />
      </div>
    </section>
    <SectionsContact />
  </main>
</template>

<script setup>
const isFiltering = ref(false);
</script>

<style></style>
