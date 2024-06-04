<template>
  <main class="flex flex-col w-full">
    <section class="hero w-full h-[85dvh] bg-black flex justify-center">
      <div class="content mx-auto w-[90%] flex h-full items-center">
        <div class="text-box w-1/2 flex flex-col text-white gap-4">
          <h1>The office of the deputy <span class="font-[800]">speaker</span></h1>
          <h4>
            A prominent Nigerian politician, serving as the Deputy Speaker of the House of Representatives of Nigeria
            since 2023. Kalu represents the Bende federal constituency, bringing their issues and perspectives to the
            national stage in his legislative role.
          </h4>
        </div>
      </div>
    </section>
    <section class="w-full py-16 text-center flex flex-col">
      <div class="content mx-auto w-[90%] flex flex-col gap-2 items-center">
        <h2 class="text-black font-semibold">About <span class="text-primaryGreen">Benjamin Kalu</span></h2>
        <p class="w-9/12 mx-auto text-xl">
          <span class="text-primaryGreen">Benjamin Kalu</span> is a prominent Nigerian politician, serving as the Deputy
          Speaker of the House of Representatives of Nigeria since 2023. Kalu represents the Bende federal constituency,
          bringing their issues and perspectives to the national stage in his legislative role.
        </p>
        <MainButton></MainButton>
        <div class="mt-24 w-full h-screen">
          <NuxtImg
            class="w-full h-full object-cover rounded-xl"
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717431106/benjamin_kalu/home_image_c8fyfy.png"
          />
        </div>
      </div>
    </section>
    <section class="updates w-full py-16 bg-black text-white relative">
      <div class="content flex flex-col mx-auto w-[90%] gap-8">
        <div class="header flex flex-col gap-1">
          <h2>Weekly <span class="text-primaryGreen">updates</span></h2>
          <h4>Get first hand updates with your deputy speaker</h4>
        </div>
        <div class="relative w-full h-auto mt-4">
          <NuxtImg
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717433083/benjamin_kalu/weekly_updates_magazine_lnxzuy.png"
            class="w-full h-full"
          />
        </div>
        <MainButton class="self-end"></MainButton>
      </div>
    </section>
    <section class="legistlative py-16 bg-light w-full">
      <div class="content mx-auto w-[90%] flex flex-col gap-8">
        <div class="header w-7/12 flex flex-col gap-1">
          <h2 class="font-semibold">Legistlative Affairs</h2>
          <h4 class="text-gray">
            A prominent Nigerian politician, serving as the Deputy Speaker of the House of Representatives of Nigeria
            since 2023. Kalu represents the Bende federal constituency, bringing their issues and perspectives to the
            national stage in his legislative role.
          </h4>
        </div>
        <div class="grid grid-cols-3 gap-8">
          <!-- legistlative grid -->
          <CardLegistlative />
          <CardLegistlative />
          <CardLegistlative />
        </div>
      </div>
    </section>
    <section class="bills py-16 w-full">
      <div class="content flex flex-col w-[90%] mx-auto gap-4">
        <div class="header w-6/12">
          <h2 class="font-semibold">Bills & Motions</h2>
          <h4 class="text-gray">
            Want to educate yourself on the bills and motions from the office of the deputy speaker? find a curated list
            here
          </h4>
        </div>
        <div class="w-full flex flex-col gap-8">
          <div class="img-holder w-full shadow-lg rounded-xl p-1">
            <NuxtImg
              src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717482257/benjamin_kalu/ben_gravel_uactm9.png"
              class="w-full h-auto rounded-xl"
            />
          </div>
          <div class="grid grid-cols-3 grid-row-2 w-full gap-4">
            <div class="rounded-xl border border-borderMuted p-4 flex flex-col gap-4 cursor-pointer">
              <NuxtImg src="/images/person_icon.png" class="h-8 w-8 rounded-full" />
              <h4 class="font-semibold">Bills from the office of the deputy speaker</h4>
              <p>You can find all the bills from the office of the deputy speaker here</p>
            </div>
            <div class="rounded-xl border border-borderMuted p-4 flex flex-col gap-4 cursor-pointer">
              <NuxtImg src="/images/person_icon.png" class="h-8 w-8 rounded-full" />
              <h4 class="font-semibold">Bills from the office of the deputy speaker</h4>
              <p>You can find all the bills from the office of the deputy speaker here</p>
            </div>
            <div class="rounded-xl border border-borderMuted p-4 flex flex-col gap-4 cursor-pointer">
              <NuxtImg src="/images/person_icon.png" class="h-8 w-8 rounded-full" />
              <h4 class="font-semibold">Bills from the office of the deputy speaker</h4>
              <p>You can find all the bills from the office of the deputy speaker here</p>
            </div>
            <div class="rounded-xl border border-borderMuted p-4 flex flex-col gap-4 col-span-3 cursor-pointer">
              <NuxtImg src="/images/person_icon.png" class="h-8 w-8 rounded-full" />
              <h4 class="font-semibold">Bills from the office of the deputy speaker</h4>
              <p>You can find all the bills from the office of the deputy speaker here</p>
            </div>
          </div>
          <h5 class="text-primaryGreen flex underline cursor-pointer underline-offset-2">See more</h5>
        </div>
      </div>
    </section>
    <section class="partners w-full py-16 bg-light">
      <div class="content flex ml-[5%] flex-col gap-16">
        <div class="w-8/12 flex flex-col gap-2">
          <h2 class="font-semibold">Development Partners</h2>
          <h4>
            Meet our development partners who have key roles in helping to achieve sustainable human development in
            economic, social and environmental fronts
          </h4>
        </div>
        <div class="scroller w-full flex gap-8 relative overflow-x-scroll">
          <NuxtImg
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717484150/benjamin_kalu/Logo_srt3cm.png"
            class="w-72 h-48 object-cover"
          />
          <NuxtImg
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717484150/benjamin_kalu/Logo-1_mpjsvy.png"
            class="w-72 h-48 object-cover"
          />
          <NuxtImg
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717484150/benjamin_kalu/Logo-2_qkehnj.png"
            class="w-72 h-48 object-cover"
          />
          <NuxtImg
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717484149/benjamin_kalu/Logo-3_mikgrn.png"
            class="w-72 h-48 object-cover"
          />
          <NuxtImg
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717484149/benjamin_kalu/Logo-4_whznls.png"
            class="w-72 h-48 object-cover"
          />
        </div>
      </div>
    </section>
    <SectionsFeaturedProject />
    <SectionsLatestNews />
    <SectionsReview />
    <Footer />
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
  background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717431105/benjamin_kalu/hero_image_npemqy.png'),
    url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717431103/benjamin_kalu/noise_c6ebjt.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.updates {
  background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717434396/benjamin_kalu/weekly_updates_background_q95czt.png'),
    url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717433021/benjamin_kalu/updates_noise_clx0wk.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.scroller {
  &::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
