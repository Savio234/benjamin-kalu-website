<template>
  <main class="flex flex-col w-full">
    <section class="hero w-full flex items-center text-center py-16 h-[85vh]">
      <div class="content py-16 mx-auto w-[85%]">
        <h2 class="font-semibold text-white">Bills & Motions</h2>
        <h4 class="font-semibold text-white">Benjamin Kalu’s Bills</h4>
        <div class="form-holder w-full flex items-center my-8">
          <input type="text" class="bg-white p-4 w-full rounded-l-lg outline-none" placeholder="Enter Keyword here" />
          <div class="py-[0.95rem] px-4 w-fit h-fit bg-white border-l border-borderMuted">
            <select name="" id="" class="p-0 m-0 outline-none">
              <option value="" selected>Filter by State</option>
            </select>
          </div>
          <button class="bg-primaryGreen py-4 px-6 rounded-r-lg flex items-center text-white gap-2">
            Find
            <svg-icon name="search" width="1rem" height="1rem" />
          </button>
        </div>
      </div>
    </section>
    <section class="py-8 w-full">
      <div class="content mx-auto w-[85%]">
        <div class="toggler w-full flex items-center rounded-full h-fit p-1 border border-borderMuted">
          <button
            class="w-1/2 h-fit py-4 rounded-full"
            :class="!isHouseBills ? 'bg-primaryGreen text-white' : ''"
            @click="isHouseBills = false"
          >
            Benjamin Kalu's Bills
          </button>
          <button
            class="w-1/2 h-fit py-4 rounded-full"
            :class="isHouseBills ? 'bg-primaryGreen text-white' : ''"
            @click="isHouseBills = true"
          >
            House Bills
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const isHouseBills = ref(false);
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717709501/benjamin_kalu/ben_speech_suit_kwik61.png'),
    url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717433021/benjamin_kalu/updates_noise_clx0wk.png');
  background-color: #007e9ae5;
  background-blend-mode: overlay;
  background-position: center center;
}
</style>
