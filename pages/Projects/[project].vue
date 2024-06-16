<template>
  <main class="flex flex-col w-full">
    <section class="w-full py-16" v-if="project">
      <div class="flex flex-col mx-auto w-[85%]">
        <button
          @click="$router.push('/project')"
          class="bg-white border-2 border-[#00A99133] w-fit h-fit p-[1px] rounded-full"
        >
          <div class="content bg-white rounded-full py-3 px-6 text-black text-[16px] flex items-center gap-2">
            <svg-icon name="arrow_left_black" width="1rem" height="1rem" />
            Go Back
          </div>
        </button>
        <!-- content from strapi -->
        {{ project }}
        <p>Rich content</p>
        <Pagination />
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
const project = ref(null);

onMounted(async () => {
  const id = useRoute().params.project;
  const { data } = await useMyBlogStore().getProject(id);
  console.log(data);
  project.value = data.attributes;
});
</script>

<style></style>
