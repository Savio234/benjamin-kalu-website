<template>
  <main class="flex flex-col w-full">
    <section class="w-full py-16" v-if="blog">
      <div class="flex flex-col gap-4 mx-auto w-[85%]">
        <button
          @click="$router.push('/blog')"
          class="bg-white border-2 border-[#00A99133] w-fit h-fit p-[1px] rounded-full"
        >
          <div class="content bg-white rounded-full py-3 px-6 text-black text-[16px] flex items-center gap-2">
            <svg-icon name="arrow_left_black" width="1rem" height="1rem" />
            Go Back
          </div>
        </button>
        <!-- content from strapi -->
        <p class="underline underline-offset-4 text-gray">Date: &nbsp; {{ blog.date }}</p>
        <h3>{{ blog.title }}</h3>
        <p class="bg-bgGreen text-primaryGreen rounded-lg w-fit py-1 px-2">{{ blog.category }}</p>
        <h5>{{ blog.description }}</h5>
        <NuxtImg
          :src="'https://benjamin-kalu-cms.onrender.com' + blog?.main_image.data?.attributes.url"
          class="w-full h-auto sm:h-[50dvh] object-cover shadow rounded-xl"
        />

        <div class="flex flex-col gap-4 p-4 border border-borderMuted bg-white rounded-xl" v-html="blog.content"></div>

        <!-- {{ blog }} -->
        <!-- <Pagination /> -->
      </div>
    </section>
    <div class="flex flex-col items-center justify-center mb-12" v-else>
      <iframe
        src="https://lottie.host/embed/6ebb5dec-8bd7-4193-b110-906eb5a41b05/Bv9PZBlVeE.json"
        height="200px"
        width="200px"
      ></iframe>
      <p class="w-fit">Loading...</p>
    </div>
    <SectionsContact />
  </main>
</template>

<script setup>
const blog = ref(null);

onMounted(async () => {
  const id = useRoute().params.id;
  const { data } = await useMyBlogStore().getBlog(id);
  console.log(data);
  blog.value = data.attributes;
});
</script>

<style></style>
