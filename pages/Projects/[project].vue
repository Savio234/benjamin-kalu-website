<template>
  <main class="flex flex-col w-full">
    <section class="w-full py-16" v-if="project">
      <div class="flex flex-col gap-2 mx-auto w-[85%]">
        <button
          @click="$router.push('/projects')"
          class="bg-white border-2 border-[#00A99133] w-fit h-fit p-[1px] rounded-full"
        >
          <div class="content bg-white rounded-full py-3 px-6 text-black text-[16px] flex items-center gap-2">
            <svg-icon name="arrow_left_black" width="1rem" height="1rem" />
            Go Back
          </div>
        </button>
        <!-- content from strapi -->
        <p class="underline underline-offset-4 text-gray">Start Date: {{ project.start_date || 'N/A' }}</p>
        <h3>{{ project.name }}</h3>
        <p>
          Project Location: <span class="font-semibold"> {{ project.location || 'N/A' }}</span>
        </p>
        <p>
          Project agency: <span class="font-semibold">{{ project.agency || 'N/A' }}</span>
        </p>
        <p>
          Project ministry: <span class="font-semibold">{{ project.ministry || 'N/A' }}</span>
        </p>
        <p>
          Project Status: <span class="font-semibold">{{ project.status || 'N/A' }}</span>
        </p>
        <div
          class="flex flex-col gap-4 p-4 border border-borderMuted bg-white rounded-xl"
          v-html="project.project_blog"
        ></div>
        <NuxtLink
          v-if="pisep == 10"
          to="https://res.cloudinary.com/damkhdi7d/image/upload/v1718185420/benjamin_kalu/Rep_Ben_Kalu_Weekly_Review_compressed_jsmppq.pdf"
          target="_blank"
          class="bg-white border-2 border-[#00A99133] w-fit h-fit p-[1px] rounded-full self-end"
          append-icon="attachment-white"
          ><div class="content bg-primaryGreen rounded-full py-3 px-6 text-white text-[16px] flex items-center gap-2">
            Download Brochure
          </div></NuxtLink
        >
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
const project = ref(null);
const pisep = ref(0);

onMounted(async () => {
  const id = useRoute().params.project;
  const { data } = await useMyBlogStore().getProject(id);
  pisep.value = data.id;
  project.value = data.attributes;
});
</script>

<style></style>
