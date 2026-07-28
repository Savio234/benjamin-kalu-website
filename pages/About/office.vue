<template>
  <main class="w-full flex flex-col bg-light">
    <section class="hero w-full h-[85vh] bg-primaryGreen flex flex-col sm:flex-row items-center">
      <div class="text-section w-full sm:w-7/12 py-16">
        <div class="content mx-auto w-[80%] flex flex-col gap-2">
          <h2 class="text-white font-semibold">About the Office of the Deputy Speaker</h2>
          <h4 class="text-white">
            The Federal House of Speakers is one of the two Chambers that make up the Bicameral Legislature of the
            Federal Republic of Nigeria.
          </h4>
        </div>
      </div>
      <div class="image-sect w-full sm:w-5/12 h-full">
        <NuxtImg
          src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717587571/benjamin_kalu/office_logo_xiyct1.png"
          class="w-full h-full object-cover"
        />
      </div>
    </section>
    <section class="w-full py-16">
      <div class="content mx-auto w-[85%] flex flex-col gap-4">
        <div class="border border-borderMuted rounded-full py-1 px-2 flex items-center gap-2 w-fit">
          <svg-icon name="education" width="1.25rem" height="1.25rem" />
          <p class="text-primaryGreen font-medium">Know Your Office</p>
        </div>
        <p class="text-lg">
          The deputy speaker of the House of Representatives is the second highest-ranking member of the Federal House
          of Representatives of Nigeria after the speaker. The deputy speaker presides over the House in the absence of
          the speaker. A majority of the members of the House of Representatives elects the deputy speaker.
        </p>
        <p class="text-lg">
          The current deputy speaker is Benjamin Kalu who was elected on 13 June 2023. His House Committee Roles in the
          10th assembly include Chairman of the Constitution Review & Amendment Committee from 2023 to 2027 and Chairman
          of the House of Representatives Committee of the Whole, Federal Republic of Nigeria, from 2023 to 2027.
        </p>
        <div class="w-full my-8 h-screen">
          <NuxtImg
            class="w-full h-full object-cover rounded-xl"
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717588237/benjamin_kalu/house_meeting_ucqa7o.png"
          />
        </div>
      </div>
    </section>
    <section class="w-full py-16 bg-white">
      <div class="content flex flex-col mx-auto w-[90%] text-center gap-4">
        <h3 class="font-semibold">Brains behind the office</h3>
        <p class="text-lg">
          Meet the experts, and strategic thinkers who work together to advance the <br />
          mission of the office
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-5 grid-rows-2 gap-16 py-8">
          <div class="flex flex-col gap-2 items-center">
            <NuxtImg src="https://placehold.co/400X400" class="h-32 w-32 rounded-full" />
            <p class="font-semibold">Rt. Hon. Abbas Tajudeen, Phd</p>
            <small>Speaker</small>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <NuxtImg src="https://placehold.co/400X400" class="h-32 w-32 rounded-full" />
            <p class="font-semibold">Rt. Hon. Abbas Tajudeen, Phd</p>
            <small>Speaker</small>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <NuxtImg src="https://placehold.co/400X400" class="h-32 w-32 rounded-full" />
            <p class="font-semibold">Rt. Hon. Abbas Tajudeen, Phd</p>
            <small>Speaker</small>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <NuxtImg src="https://placehold.co/400X400" class="h-32 w-32 rounded-full" />
            <p class="font-semibold">Rt. Hon. Abbas Tajudeen, Phd</p>
            <small>Speaker</small>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <NuxtImg src="https://placehold.co/400X400" class="h-32 w-32 rounded-full" />
            <p class="font-semibold">Rt. Hon. Abbas Tajudeen, Phd</p>
            <small>Speaker</small>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <NuxtImg src="https://placehold.co/400X400" class="h-32 w-32 rounded-full" />
            <p class="font-semibold">Rt. Hon. Abbas Tajudeen, Phd</p>
            <small>Speaker</small>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <NuxtImg src="https://placehold.co/400X400" class="h-32 w-32 rounded-full" />
            <p class="font-semibold">Rt. Hon. Abbas Tajudeen, Phd</p>
            <small>Speaker</small>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <NuxtImg src="https://placehold.co/400X400" class="h-32 w-32 rounded-full" />
            <p class="font-semibold">Rt. Hon. Abbas Tajudeen, Phd</p>
            <small>Speaker</small>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <NuxtImg src="https://placehold.co/400X400" class="h-32 w-32 rounded-full" />
            <p class="font-semibold">Rt. Hon. Abbas Tajudeen, Phd</p>
            <small>Speaker</small>
          </div>
          <div class="flex flex-col gap-2 items-center">
            <NuxtImg src="https://placehold.co/400X400" class="h-32 w-32 rounded-full" />
            <p class="font-semibold">Rt. Hon. Abbas Tajudeen, Phd</p>
            <small>Speaker</small>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
  background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717431103/benjamin_kalu/noise_c6ebjt.png');
  background-size: cover;
}
</style>
