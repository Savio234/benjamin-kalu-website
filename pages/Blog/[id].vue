<template>
  <main class="flex flex-col w-full" v-if="blog">
    <section class="w-full py-16">
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
        <h3>{{ blog.title }}</h3>
        <p class="bg-bgGreen text-primaryGreen rounded-lg w-fit py-1 px-2">{{ blog.category }}</p>
        <h5>{{ blog.description }}</h5>
        <p v-html="blog.content"></p>

        <!-- {{ blog }} -->
        <!-- <Pagination /> -->
      </div>
    </section>
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
