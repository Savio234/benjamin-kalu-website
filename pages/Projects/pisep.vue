<template>
  <main class="flex flex-col w-full">
    <section class="w-full py-16">
      <div class="flex flex-col gap-2 mx-auto w-[85%]">
        <h3 class="font-montserrat">
          PISE-P - Peace in the South East <br />
          project
        </h3>
        <div class="flex">
          <p class="text-justify leading-[34.8px] w-full md:w-1/2 flex justify-center items-center">
            The Peace in South East Project (PISE-P), an initiative of the Deputy Speaker, is a peace-building and
            development program designed to address the complex socio-economic challenges and security issues facing the
            South East region of Nigeria. Developed in response to the growing impact of agitations, economic decline,
            and security threats, PISE-P seeks to restore peace and stimulate development through a multi-stakeholder
            approach.
          </p>
          <div class="w-full md:w-1/2 flex justify-center items-center">
            <NuxtImg src="/images/pisep/pisep-logo.png" alt="pisep logo" class="w-[360px] h-[360px] object-contain" />
          </div>
        </div>
      </div>
    </section>
    <NuxtImg src="/images/pisep/frame.webp" alt="pise-p frame" class="w-full h-auto object-contain" />
    <NuxtImg
      src="/images/pisep/eight-thematic-areas.png"
      alt="eight thematic areas"
      class="w-full h-auto object-contain"
    />
    <section>
      <ListEvents />
    </section>
    <NuxtImg src="/images/pisep/partnerships.webp" alt="Pise-p partnerships" class="w-full h-auto object-contain" />
    <p class="text-lg font-montserrat text-center mb-4">
      To learn more and be a part of us, visit the official PISE-P website at:
      <NuxtLink to="https://pise-p.org/" class="text-footerGreen underline">https://pise-p.org/</NuxtLink>
    </p>
  </main>
</template>

<script lang="ts" setup></script>

<style></style>
