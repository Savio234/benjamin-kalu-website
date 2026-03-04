<template>
  <main class="flex flex-col bg-[#FAFFFA w-full">
    <section class="py-12 md:py-16 lg:py-20 mx-auto w-[92.5%] md:w-[85%]]">
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
            <div class="w-full md:w-4/5 lg:w-8/12 flex flex-col gap-4">
                <!-- <h3 class="title">{{ bill.title }}</h3> -->
                <h3 class="title w-4/5 md:w-full font-adamina text-2xl md:text-[2rem] md:leading-10">
                    Need for the Rehabilitation of Orlu - Ihiala Road
                </h3>
                <div class="sponsors w-full rounded-xl border border-borderMuted flex flex-col
                    bg-white p-4 lg:p-5 gap-4"
                >
                    <h6 class="text-[#808080] font-montserrat font-normal text-xs md:text-sm">
                        Sponsors
                    </h6>
                    <div>
                        <p class="text-sm md:text-base font-medium font-montserrat">
                            Hon. Canice Moore Nwachukwu
                        </p>
                        <!-- <li v-for="(items, index) in bill.details['sponsors']" :key="index">
                            {{ items }}
                        </li> -->
                        <!-- <ul class="flex mt-2 flex-col gap-2">
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
                        </ul> -->
                    </div>
                </div>
                <div class="description w-full rounded-xl border border-borderMuted flex 
                    flex-col bg-white p-4 lg:p-5 gap-4"
                >
                    <p class="text-[#808080] font-montserrat font-normal text-xs md:text-sm">
                        The House
                    </p>
                    <p class="text-sm md:text-base font-medium font-montserrat">
                        <!-- {{ bill.details.description }} -->
                            Notes that the importance of road infrastructure in 
                            socio-economic development cannot be over-emphasized, hence the 
                            need to rehabilitate the Orlu-lhiala Road through 
                            Eziachi-Umuna-Amaifeke-Ihioma-Awo Idemili-lseke-lhiala route;<br />
                            <br />
                            Also notes that the road is the most preferred route for vehicles 
                            transporting people, farm produce and processed timber to and from 
                            the biggest timber processing plant/market in Imo State and it 
                            stretches up to Umuahia in Abia State;<br />
                            <br />
                            Aware that motorists from Akwa Ibom and Cross River States ply 
                            this same road to Umuahia in Abia State, Obowo, Isiala Mbano, 
                            Nwangele and Nkwerre in Imo State up to lhiala in Anambra State, 
                            in other words, the road connects several states and Federal 
                            Constituencies in Imo State, South East, and South Southern 
                            Nigeria;<br />
                            <br />
                            Disturbed by the incessant sufferings of the people plying it and
                            the colossal loss of many hours in transit due to the most 
                            condemnable and deplorable condition of that road;<br />
                            <br />
                            Also disturbed that the deplorable state of the road is causing 
                            immense inconvenience for road users resulting loss of time 
                            during transit;<br />
                            <br />
                            Worried that road's deterioration would further impede economic 
                            activities in the area if not urgently rehabilitated;<br />
                            <br />
                            Cognizant that the continuous deterioration of the road will 
                            further impede economic development in the area and potentially 
                            encourage criminal activities, if not urgently rehabilitated;<br />
                            <br />
                    </p>
                </div>
                <div class="About w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
                    <p class="text-[#808080] font-montserrat font-normal text-xs md:text-sm">
                        About the Bill (Explanatory Memorandum)
                    </p>
                    <p class="text-sm md:text-base font-medium font-montserrat">
                        <!-- {{ bill.details.about }} -->
                        This Bill seeks to amend the Acts Authentication Act, Cap A2 Laws
                        of the Federation of Nigeria, 2004  to, among other things, provide the 
                        time frame for the  performance of functions of the Clerk of the National 
                        Assembly under the Act.
                    </p>
                </div>

                <div class="my-4 pl-4 md:my-6 lg:my-8">
                    <h2 class="text-[#2E312F] font-montserrat font-semibold text-lg 
                        md:text-xl lg:text-2xl"
                    >
                        Resolution
                    </h2>
                    <ul class="list-disc flex flex-col gap-2">
                        <li class="text-#2B2B2B text-sm lg:text-base font-medium font-montserrat">
                            Urge the Federal Ministry of Works and Federal Roads Maintenance 
                            Agency (FERMA) to develop a comprehensive and efficient method 
                            for the timely and efficient rehabilitation of roads;<br />
                        </li>
                        <li class="text-#2B2B2B text-sm lg:text-base font-medium font-montserrat">
                            Mandate the Committees on Works and FERMA to liaise with the 
                            relevant agencies to initiate the rehabilitation to ensure 
                            implementation; and
                        </li>
                        <li class="text-#2B2B2B text-sm lg:text-base font-medium font-montserrat">
                            Also mandate the Committee on Legislative compliance to ensure 
                            compliance.
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
  </main>
</template>

<script setup>

</script>

<style></style>
