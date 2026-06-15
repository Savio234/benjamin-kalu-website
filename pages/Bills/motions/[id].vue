<template>
  <main class="flex flex-col bg-[#FAFFFA w-full">
    <section v-if="motion" class="py-12 md:py-16 lg:py-20 mx-auto w-[92.5%] md:w-[85%]]">
        <div class="content flex flex-col gap-8">
            <button @click="$router.push('/bills')"
                class="bg-white border-2 border-[#00A99133] w-fit h-fit p-[1px] rounded-full"
            >
                <div class="content bg-white rounded-full py-3 px-6 text-black text-[16px] flex items-center gap-2">
                    <svg-icon name="arrow_left_black" width="1rem" height="1rem" />
                    Go Back
                </div>
            </button>
            <div class="w-full md:w-4/5 lg:w-8/12 flex flex-col gap-4">
                <h3 class="title w-4/5 md:w-full font-adamina text-2xl md:text-[2rem] md:leading-10">
                    {{ motion?.attributes?.title || "Need for the Rehabilitation of Orlu - Ihiala Road" }}
                </h3>
                <div class="sponsors w-full rounded-xl border border-borderMuted flex flex-col
                    bg-white p-4 lg:p-5 gap-4"
                >
                    <h6 class="text-[#808080] font-montserrat font-normal text-xs md:text-sm">
                        Sponsors
                    </h6>
                    <ul>
                        <li v-for="(item, index) in motion?.attributes?.other_sponsors" :key="index">
                            <p class="text-sm md:text-base font-medium font-montserrat">
                                {{ item?.sponsor }}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="description w-full rounded-xl border border-borderMuted flex 
                    flex-col bg-white p-4 lg:p-5 gap-4"
                >
                    <p class="text-[#808080] font-montserrat font-normal text-xs md:text-sm">
                        The House
                    </p>
                    <div class="text-sm md:text-base font-medium font-montserrat"  v-html="motion?.attributes?.the_house">
                    </div>
                </div>
                <div class="About w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
                    <p class="text-[#808080] font-montserrat font-normal text-xs md:text-sm">
                        About the Bill (Explanatory Memorandum)
                    </p>
                    <p class="text-sm md:text-base font-medium font-montserrat">
                        {{ motion.attributes.about_motion }}
                    </p>
                </div>

                <div class="my-4 pl-4 md:my-6 lg:my-8">
                    <h2 class="text-[#2E312F] font-montserrat font-semibold text-lg 
                        md:text-xl lg:text-2xl mb-2"
                    >
                        Resolution
                    </h2>
                    <ul class="list-disc">
                        <li class="mb-3 md:mb-4"
                            v-for="(item, index) in motion.attributes.get_resolutions" :key="index">
                            <p class="text-sm md:text-base font-medium font-montserrat">
                                {{ item?.resolution }}
                            </p>
                        </li>
                    </ul>
                </div>

                <button class="rounded-full my-6 w-52 md:w-64 bg-[#146634] h-12 p-6 justify-center 
                    flex items-center gap-2"
                >
                    <h3 class="text-sm md:text-base text-white font-montserrat font-bold">
                        Download Motion
                    </h3>
                    <div class="w-4 shrink-0 relative h-4 md:w-5 md:h-5">
                        <NuxtImg alt="" src="/svgs/bills/attachment.svg" class="w-full h-full" />
                    </div>
                </button>

            </div>
        </div>
    </section>
    <div v-else class="flex flex-col items-center justify-center mb-12 py-12">
        <iframe
            src="https://lottie.host/embed/6ebb5dec-8bd7-4193-b110-906eb5a41b05/Bv9PZBlVeE.json"
            height="200px"
            width="200px"
        ></iframe>
        <p class="w-fit">Loading...</p>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
const motion = ref(null);

onMounted(async () => {
    const ID = route.params.id;
    const response = await useMyBillsStore().getMotion(ID);
    if (response?.data) {
        motion.value = response.data;
    } else {
        motion.value = response;
    }
});
</script>

<style></style>
