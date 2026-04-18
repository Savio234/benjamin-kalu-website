<template>
  <main class="flex flex-col bg-[#FAFFFA] w-full">
    <template v-if="bill">
      <section class="py-12 md:py-16 lg:py-20 mx-auto w-[92.5%] md:w-[90%] lg:w-[85%]">
        <div class="content flex flex-col gap-8 ">
            <button
                @click="$router.push('/bills')"
                class="bg-white border-2 border-[#00A99133] w-fit h-fit p-[1px] rounded-full"
            >
                <div class="content bg-white rounded-full py-3 px-6 text-black text-[16px] flex items-center gap-2">
                    <svg-icon name="arrow_left_black" width="1rem" height="1rem" />
                    Go Back
                </div>
            </button>
            <div class="w-full sm:w-8/12 flex flex-col gap-4">
                <!-- <h3 class="title">{{ bill.title }}</h3> -->
                <h3 class="title font-adamina text-2xl md:text-[2rem] md:leading-10">
                    {{ bill?.attributes?.title ?? 'Acts Authentication Act (Amendment) Bill, 2023' }},
                    <br /> {{ bill?.attributes?.hb_number ?? 'HB.06' }}
                </h3>
                <div class="sponsors w-full rounded-xl border border-borderMuted flex flex-col
                    bg-white p-4 lg:p-5 gap-4"
                >
                    <h6 class="text-[#808080] font-montserrat font-normal text-xs md:text-sm">
                        Bill Sponsors/ Co-sponsors
                    </h6>
                    <div>
                        <p class="text-sm md:text-base font-medium font-montserrat">
                            {{ bill?.attributes?.bill_sponsor ?? 'Hon. Benjamin Okezie Kalu' }}
                        </p>
                        <ul class="flex mt-2 flex-col gap-2">
                            <!-- <li v-for="(items, index) in bill.attributes.get_bill_details['sponsors']" :key="index">
                                {{ items }}
                            </li> -->

                            <li class="text-sm md:text-base font-medium font-montserrat">
                                Hon. Tajudeen Abbas
                            </li>
                            <li class="text-sm md:text-base font-medium font-montserrat">
                                Hon. Ikeagwuonu Ugochinyere
                            </li>
                            <li class="text-sm md:text-base font-medium font-montserrat">
                                Hon. Ahmed Usman Jaha
                            </li>
                            <li class="text-sm md:text-base font-medium font-montserrat">
                                Hon. Davidson Kolawole
                            </li>
                            <li class="text-sm md:text-base font-medium font-montserrat">
                                Hon. Regina Akume
                            </li>
                            <li class="text-sm md:text-base font-medium font-montserrat">
                                Hon. Patrick Umoh
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="description w-full rounded-xl border border-borderMuted flex 
                    flex-col bg-white p-4 lg:p-5 gap-4"
                >
                    <p class="text-[#808080] font-montserrat font-normal text-xs md:text-sm">
                        Description
                    </p>
                    <p class="text-sm md:text-base font-medium font-montserrat">
                        {{ bill?.attributes?.get_bill_details?.description ?? `A Bill for an Act to Amend the Acts Authentication Act, Cap. A2,
                            Laws of the Federation of Nigeria, 2004 To Provide the
                            Time Frame for the Performance of Functions of the Clerk of the
                            National Assembly; and for Related Matters`}}
                    </p>
                </div>
                <div class="About w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
                    <p class="text-[#808080] font-montserrat font-normal text-xs md:text-sm">
                        About the Bill (Explanatory Memorandum)
                    </p>
                    <p class="text-sm md:text-base font-medium font-montserrat">
                        {{ bill?.attributes?.get_bill_details?.about ?? `This Bill seeks to amend the Acts Authentication Act, Cap A2 Laws
                        of the Federation of Nigeria, 2004  to, among other things, provide the 
                        time frame for the  performance of functions of the Clerk of the National 
                        Assembly under the Act.`}}
                    </p>
                </div>
                <div class="About w-full rounded-xl border border-borderMuted flex flex-col 
                    bg-white p-4 h-[12.5rem] md:h-80 lg:h-[28.125rem] lg:p-5 gap-4"
                >
                    <NuxtImg alt="" src="/images/bills/bill_screenshot.png" 
                        class="h-full w-full object-cover"
                        :src="bill?.attributes?.get_bill_details?.bill_image ?? '/images/bills/bill_screenshot.png'"
                    />
                </div>
                <button class="rounded-full my-6 w-48 md:w-56 bg-[#146634] h-12 p-6 justify-center 
                    flex items-center gap-2"
                >
                    <h3 class="text-sm md:text-base text-white font-montserrat font-bold">
                        Download Bill
                    </h3>
                    <div class="w-4 shrink-0 relative h-4 md:w-5 md:h-5">
                        <NuxtImg alt="" src="/svgs/bills/attachment.svg" class="w-full h-full" />
                    </div>
                </button>
                <Progressbar percentage-fill="20%" />

            </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 justify-between mx-auto sm:mx-0 w-[92.5%] 
            md:w-[80%] mt-8 sm:items-end"
        >
            <div class="stage flex flex-col w-fit gap-4">
                <h5 class="font-semibold text-[#2E312F] mb-3 md:mb-6 lg:mb-8 font-montserrat 
                    text-xl md:text-2xl"
                >
                    Bill Status: {{bill?.attributes?.status ?? "First Reading"}}
                </h5>
                <ul class="flex flex-col gap-2">
                    <!-- <li v-for="(items, index) in bill.attributes.get_bill_details['progress']" :key="index" class="flex items-center gap-2">
                        {{ items.stage }}: <span>{{ items.date }}</span>
                    </li> -->
                    <li class="text-[#2B2B2B] text-sm md:text-base font-montserrat 
                        font-semibold"
                    >
                        <span class="text-[#2B2B2B] font-normal text-sm md:text-base 
                            font-montserrat"
                        >
                            First reading: 
                        </span> 05/02/2025
                    </li>
                    <li class="text-[#2B2B2B] text-sm md:text-base font-montserrat 
                        font-semibold"
                    >
                        <span class="text-[#2B2B2B] font-normal text-sm md:text-base 
                            font-montserrat"
                        >
                            Second reading: 
                        </span>
                    </li>
                    <li class="text-[#2B2B2B] text-sm md:text-base font-montserrat 
                        font-semibold"
                    >
                        <span class="text-[#2B2B2B] font-normal text-sm md:text-base 
                            font-montserrat"
                        >
                            Committee stage: 
                        </span>
                    </li>
                    <li class="text-[#2B2B2B] text-sm md:text-base font-montserrat 
                        font-semibold"
                    >
                        <span class="text-[#2B2B2B] font-normal text-sm md:text-base 
                            font-montserrat"
                        >
                            Third reading: 
                        </span>
                    </li>
                    <li class="text-[#2B2B2B] text-sm md:text-base font-montserrat 
                        font-semibold"
                    >
                        <span class="text-[#2B2B2B] font-normal text-sm md:text-base 
                            font-montserrat"
                        >
                            Harmonisation: 
                        </span>
                    </li>
                    <li class="text-[#2B2B2B] text-sm md:text-base font-montserrat 
                        font-semibold"
                    >
                        <span class="text-[#2B2B2B] font-normal text-sm md:text-base 
                            font-montserrat"
                        >
                            Assent: 
                        </span> 
                    </li>
                </ul>
            </div>
            <div class="ml-auto sm:ml-0 flex flex-col gap-2">
                <p class="text-sm md:text-base font-montserrat text-[#2B2B2B] font-semibold">
                    Resources:
                </p>
                <a href="" class="text-sm md:text-base font-montserrat text-[#0E7B60]">
                    Lead Debate
                </a>
                <a href="" class="text-sm md:text-base font-montserrat text-[#0E7B60]">
                    Committee Report
                </a>
            </div>
        </div>
      </section>
    </template>
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
// const bill = ref(null);
// onMounted(async () => {
//   const ID = useRoute().params.id;
//   const { data } = await useMyBillsStore().getBill(ID);

//   console.log(data);
//   bill.value = data.attributes;
// });
const route = useRoute();
const bill = ref(null);

onMounted(async () => {
    const ID = route.params.id;
    const response = await useMyBillsStore().getBill(ID);
    if (response?.data) {
        bill.value = response.data;
    } else {
        bill.value = response;
    }
    console.log("Final bill data:", bill.value);
    console.log("response:", response);
});
console.log("bill: ", bill);
console.log("id: ", route.params.id);
console.log('blogId: ', String(route.params.id));
</script>

<style></style>
