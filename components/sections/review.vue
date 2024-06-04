<template>
  <section class="w-full py-16 bg-white">
    <div class="content w-5/12 mx-auto text-center flex flex-col items-center">
      <FullLogo class="shadow border border-borderMuted rounded-full pr-3" />
      <h2 class="font-semibold">
        Let us <span class="text-primaryGreen">Know</span> <br />
        how we are doing
      </h2>
      <h4 class="font-medium">
        Feel free to send us and Email and let us know how our ofice is performing and how best we can improve
      </h4>
      <div class="form w-full my-8">
        <textarea
          rows="10"
          class="w-full rounded-lg bg-bgInput border border-borderMuted p-2 outline-bgGreen"
          placeholder="Enter a review"
        ></textarea>
        <button class="bg-white border-2 border-[#00A99133] w-full h-fit p-[1px] rounded-lg">
          <div class="content bg-primaryGreen rounded-lg py-3 px-6 text-white" style="font-family: 'Inter', sans-serif">
            Send
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
