<template>
  <section class="w-full py-16 bg-white">
    <div class="content w-5/12 mx-auto text-center flex flex-col items-center">
      <FullLogo class="shadow border border-borderMuted rounded-full pr-3" />
      <h2 class="font-semibold">Stay in the loop</h2>
      <h4 class="font-medium">
        Provide your email address so we can send you regular <br />
        updates of our projects as they come
      </h4>
      <div class="form w-full my-12 flex flex-col gap-4">
        <input
          type="email"
          name=""
          class="w-full rounded-lg bg-bgInput border border-borderMuted p-2 outline-bgGreen"
          id=""
        />
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
