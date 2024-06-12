<template>
  <section class="w-full py-16 bg-white">
    <div class="content w-[85%] sm:w-4/12 mx-auto text-center flex flex-col items-center">
      <Sublogo class="shadow border border-borderMuted rounded-full pr-3" />
      <h3 class="font-semibold mt-4">
        Let us <span class="text-primaryGreen">Know</span> <br />
        how we are doing
      </h3>
      <h6 class="font-medium">
        Feel free to send us and Email and let us know how our ofice is performing and how best we can improve
      </h6>
      <div class="form w-full my-8">
        <textarea
          rows="10"
          class="w-full rounded-lg bg-bgInput border border-borderMuted p-2 outline-bgGreen"
          placeholder="Enter a review"
        ></textarea>
        <button class="bg-white border-2 border-[#00A99133] w-full h-fit p-[1px] rounded-lg">
          <div class="bg-primaryGreen rounded-lg py-3 px-6 text-white" style="font-family: 'Inter', sans-serif">
            Send
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.content {
  background-image: url(https://res.cloudinary.com/damkhdi7d/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1718186883/benjamin_kalu/background_review_d6dooi.jpg);
  background-size: 85%;
  background-position: top center;
  background-repeat: no-repeat;
}
</style>
