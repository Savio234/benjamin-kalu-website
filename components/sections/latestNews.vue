<template>
  <section class="w-full py-16 bg-light">
    <div class="content mx-auto flex flex-col gap-8 w-[85%]" v-if="latest">
      <div class="header flex flex-col gap-2">
        <h2 class="font-semibold">Follow our <span class="text-primaryGreen">office</span> closely</h2>
        <h4 class="text-gray font-medium">Latest news on how office has performed lately</h4>
      </div>
      <div class="flex flex-col gap-4">
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div
            class="featuredPost sm:col-span-2 rounded-xl flex flex-col justify-end py-4"
            :style="{ backgroundImage: latest[0].attributes.main_image.data?.attributes.url }"
          >
            <div class="content mx-auto text-white w-[90%] h-[20rem] sm:h-auto flex flex-col gap-4">
              <h3>{{ latest[0].attributes.title }}</h3>
              <p class="bg-bgGreen text-primaryGreen rounded w-fit py-1 px-2">{{ latest[0].attributes.category }}</p>
            </div>
          </div>
          <CardNews
            v-for="(item, index) in latest"
            :key="index"
            :id="item?.id"
            :image-url="'https://benjamin-kalu-cms.onrender.com' + item?.attributes.main_image.data?.attributes.url"
            :title="item?.attributes.title"
            :description="item?.attributes.description"
            :category="item?.attributes.category"
          />
        </div>
      </div>
      <a class="text-primaryGreen underline underline-offset-2 cursor-pointer">See All Articles</a>
    </div>
    <div class="flex flex-col items-center justify-center" v-else>
      <iframe
        src="https://lottie.host/embed/6ebb5dec-8bd7-4193-b110-906eb5a41b05/Bv9PZBlVeE.json"
        height="200px"
        width="200px"
      ></iframe>
      <p class="w-fit">Loading...</p>
    </div>
  </section>
</template>

<script setup>
const latest = ref(null);
onMounted(async () => {
  const { data } = await useMyBlogStore().getAllBlogs(1, 6);
  console.log(data);
  latest.value = data;
});
</script>

<style lang="scss" scoped>
.featuredPost {
  // background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/v1718143860/benjamin_kalu/ben_closeup_bnxiha.png');
  background-color: #35390775;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center center;
}
</style>
