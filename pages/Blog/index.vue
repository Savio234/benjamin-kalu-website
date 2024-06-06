<template>
  <main class="flex flex-col">
    <SectionsLatestNews />
    <section class="updates w-full py-16 bg-black text-white relative">
      <NuxtImg
        src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717433017/benjamin_kalu/vector_left_lfn7hu.png"
        class="img-one absolute top-1/2 left-0"
      />
      <NuxtImg
        src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717433017/benjamin_kalu/vector_right_rjtxb2.png"
        class="img-one absolute top-1/2 right-0"
      />
      <div class="content flex flex-col mx-auto gap-8 ml-[7.5%]">
        <div class="header flex flex-col gap-1 text-white">
          <h2>Weekly <span class="text-primaryGreen">updates</span></h2>
          <h4>Get first hand updates with your deputy speaker</h4>
        </div>
        <div class="scroller w-full my-8 flex gap-8 relative overflow-x-scroll">
          <div class="h-full min-w-[30rem]">
            <NuxtImg
              src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717604743/benjamin_kalu/ben_native_geeiy8.png"
              class="w-full h-full object-cover rounded-xl"
            />
          </div>
          <CardUpdates />
          <CardUpdates />
          <CardUpdates />
          <CardUpdates />
        </div>
      </div>
    </section>
    <SectionsContact />
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
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
