<template>
  <main class="flex flex-col w-full">
    <section class="py-12 w-full bg-[#FAFFFA]">
      <div class="content flex flex-col gap-8 mx-auto w-[85%]">
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
          <h3 class="title">Acts Authentication Act (Amendment) Bill, 2023. HB.06</h3>
          <div class="sponsors w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
            <p>Sponsors</p>
            <!-- sponsors list -->
            <ul>
              <li>Hon. Benjamin Kalu</li>
            </ul>
          </div>
          <div class="description w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
            <p>The House</p>
            <!-- Rich text content goes here -->
            <p>
              Notes that the importance of road infrastructure in socio-economic development cannot be over-emphasized,
              hence the need to rehabilitate the Orlu-lhiala Road through Eziachi-Umuna-Amaifeke-Ihioma-Awo
              Idemili-lseke-lhiala route;
            </p>
            <p>
              Also notes that the road is the most preferred route for vehicles transporting people, farm produce and
              processed timber to and from the biggest timber processing plant/market in Imo State and it stretches up
              to Umuahia in Abia State;
            </p>
            <p>
              Aware that motorists from Akwa Ibom and Cross River States ply this same road to Umuahia in Abia State,
              Obowo, Isiala Mbano, Nwangele and Nkwerre in Imo State up to lhiala in Anambra State, in other words, the
              road connects several states and Federal Constituencies in Imo State, South East, and South Southern
              Nigeria;
            </p>
            <p>
              Disturbed by the incessant sufferings of the people plying it and the colossal loss of many hours in
              transit due to the most condemnable and deplorable condition of that road;
            </p>
            <p>
              Also disturbed that the deplorable state of the road is causing immense inconvenience for road users
              resulting loss of time during transit;
            </p>
            <p>
              Worried that road's deterioration would further impede economic activities in the area if not urgently
              rehabilitated;
            </p>
            <p>
              Cognizant that the continuous deterioration of the road will further impede economic development in the
              area and potentially encourage criminal activities, if not urgently rehabilitated;
            </p>
          </div>
          <div class="flex flex-col gap-4 justify-between mx-auto w-full mt-8">
            <p>Resolution</p>
            <ul class="flex flex-col gap-2 list-disc pl-4">
              <li>
                Urge the Federal Ministry of Works and Federal Roads Maintenance Agency (FERMA) to develop a
                comprehensive and efficient method for the timely and efficient rehabilitation of roads;
              </li>
              <li>
                Mandate the Committees on Works and FERMA to liaise with the relevant agencies to initiate the
                rehabilitation to ensure implementation; and
              </li>
              <li>Also mandate the Committee on Legislative compliance to ensure compliance.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup></script>

<style></style>
