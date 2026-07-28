<template>
  <main class="flex flex-col w-full">
    <section class="hero_bill w-full flex items-center text-center py-16
      h-[80vh] sm:h-[85vh]"
    >
      <div class="content pb-24 md:pb-32 mx-auto w-[92.5%] lg:w-[90%]">
        <h2 class="font-semibold text-xl md:text-2xl lg:text-5xl lg:leading-[3.75rem] 
          font-adamina text-white mb-1.5 sm:mb-2 lg:mb-4"
        >
          Bills & Motions
        </h2>
        <h4 class="text-sm lg:text-base text-white font-montserrat 
          font-semibold"
        >
          Bills and Motions sponsored by Hon. Kalu
        </h4>
        <div class="form-holder w-full flex items-center my-2 md:my-4 lg:my-8">
          <input type="text" v-model="searchTerm"
            class="bg-white text-xs md:text-sm p-2 lg:p-4 w-full rounded-l-lg outline-none"
            placeholder="Enter Keyword here"
          />
          <div class="py-[0.4rem] md:py-2 lg:py-[0.95rem] px-1 lg:px-4 
            w-fit h-fit bg-white border-l border-borderMuted"
          >
            <select name="" id="" class="p-0 text-xs lg:text-sm w-full
              m-0 outline-none"
              v-model="searchType"
            >
              <option value="" selected disabled>Filter by Status</option>
              <option value="hb_number">HB Number</option>
              <option value="title">Title</option>
              <option value="status_desc">Status</option>
              <option value="status" class="hidden"></option>
            </select>
          </div>
          <button
            class="bg-[#146634] py-2 lg:py-4 px-2 lg:px-6 rounded-r-lg flex items-center 
            text-white gap-2 transition duration-300 hover:bg-[#105129]"
            @click="searchTable"
          >
            <span class="hidden sm:block text-xs lg:text-sm">Find</span>
            <svg-icon name="search" width="1rem" height="1rem" />
          </button>
        </div>
      </div>
    </section>
    <section class="py-8 bg-[#FAFFFA] w-full">
      <div class="content mx-auto w-[92.5%] md:w-[90%]">
        <div class="toggler w-full flex items-center rounded-full h-fit p-1 border border-borderMuted">
          <button class="w-1/2 h-fit py-2 md:py-3 lg:py-4 
            rounded-full flex items-center gap-1 justify-center 
            text-center text-sm md:text-base"
            :class="isBills ? 'bg-[#146634] text-white' : ''"
            @click="
              isBills = true;
              searchTable();
            "
          >
            <span class="hidden text-sm md:text-base sm:block w-fit">
              Benjamin Kalu's
            </span> Bills
          </button>
          <button class="w-1/2 h-fit py-2 md:py-3 lg:py-4
            rounded-full flex items-center gap-1 justify-center
            text-center text-sm md:text-base"
            :class="!isBills ? 'bg-[#146634] text-white' : ''"
            @click="
              isBills = false;
              searchTable();
            "
          >
            <span class="hidden text-sm md:text-base sm:block w-fit">
              Benjamin Kalu's
            </span> Motions
          </button>
        </div>
        <div class="flex my-8 md:my-12 lg:my-16 overflow-x-scroll md:overflow-x-hidden 
          md:flex-wrap gap-2.5"
          v-if="filters"
        >
          <div class="px-4 min-w-24 md:min-w-max md:px-6 lg:px-9 h-fit
            md:min-h-auto rounded-[2.5rem] py-2 md:py-1.5 lg:py-2.5
            cursor-pointer"
            v-for="(filter, index) in filters" :key="index"
            :class="{
              'bg-black': activeFilter === index,
              'bg-[#DFDFDF]': activeFilter !== index
            }"
            @click="activeFilter = index; loadData(1);"
          >
            <p class="text-[0.5rem] text-center md:text-xs xl:text-sm
              font-medium font-montserrat
              lg:text-base" :class="{
                'text-white': activeFilter === index,
                'text-[#8A8A8A]': activeFilter !== index,
              }"
            >
              {{ filter }}
            </p>
          </div>
        </div>
        <template v-if="isBills">
          <div class="flex flex-col items-center justify-center mb-12" v-show="loading">
            <iframe
              src="https://lottie.host/embed/6ebb5dec-8bd7-4193-b110-906eb5a41b05/Bv9PZBlVeE.json"
              height="200px"
              width="200px"
            ></iframe>
            <p class="w-fit">Loading...</p>
          </div>
          <div class="w-full flex flex-col gap-4 md:gap-6 my-6" v-show="!loading">
            <div class="w-full cursor-pointer hidden border border-solid 
              border-[#CECFCF] md:min-h-40 lg:min-h-[4.75rem]
              md:grid md:grid-cols-[0.05fr_0.5fr_2.5fr_1fr_1fr]
              overflow-x-scroll transition duration-300
              hover:shadow-xl"
              v-for="(bill, index) in bills" :key="index"
              v-if="bills.length > 0"
              @click="$router.push(`/bills/${bill.id}`)"
            >
              <div class="py-2.5 flex h-full flex-col">
                <p class="hidden">{{ bill.attributes.status }}</p>
                <div class="h-full w-2"
                  :class="{
                    'bg-[#50B432]': bill.attributes.status.toLowerCase().includes('second reading'),
                    'bg-[#007867]': bill.attributes.status.toLowerCase().includes('third reading'),
                    'bg-[#009141]': bill.attributes.status.toLowerCase().includes('committee stage'),
                    'bg-[#B3B3B3]': bill.attributes.status.toLowerCase().includes('assent'),
                    'bg-[#022923]': bill.attributes.status.toLowerCase().includes('passed by senate'),
                    'bg-[#022923]': bill.attributes.status.toLowerCase().includes('transmitted to senate'),
                  }"
                >
                </div>
              </div>
              <div class="py-2.5 flex flex-col gap-2.5 px-5">
                <p class="text-sm w-max font-montserrat font-normal text-[#808080]">
                  HB Number
                </p>
                <h3 class="md:text-sm lg:text-base font-medium font-montserrat text-[#2B2B2B]">
                  {{ bill.attributes.hb_number }}
                </h3>
              </div>
              <div class="py-2.5 h-full border-r border-l border-[#CECFCF] flex flex-col gap-2.5 px-5">
                <p class="text-sm font-montserrat font-normal text-[#808080]">Title</p>
                <h3 class="md:text-sm lg:text-base font-medium font-montserrat text-[#2B2B2B]">
                  {{ bill.attributes.title }}
                </h3>
              </div>
              <div class="py-2.5 h-full border-r border-[#CECFCF] flex flex-col gap-2.5 px-5">
                <p class="text-sm font-montserrat font-normal text-[#808080]">Bill Sponsor</p>
                <h3 class="md:text-sm lg:text-base font-medium font-montserrat text-[#2B2B2B]">
                  {{ bill.attributes.bill_sponsor }}
                </h3>
              </div>
              <div class="py-2.5 flex flex-col gap-2.5 px-5">
                <p class="text-sm font-montserrat font-normal text-[#808080]">Status</p>
                <h3 class="md:text-sm lg:text-base font-medium font-montserrat text-[#2B2B2B]">
                  {{ bill.attributes.status_desc }}
                </h3>
              </div>
            </div>
            <div class="w-full flex md:hidden flex-col gap-4 md:gap-6" v-if="bills">
              <div class="w-full cursor-pointer md:hidden min-h-60 rounded-lg border 
                border-solid border-[#CECFCF] flex gap-4 bg-white transition duration-300 
                hover:shadow-xl"
                v-for="(bill, index) in bills" :key="index"
                @click="$router.push(`/bills/${bill.id}`)"
              >
                <div class="py-1 flex h-60 flex-col">
                  <p class="hidden">{{ bill.attributes.status }}</p>
                  <div class="h-60 w-2"
                    :class="{
                      'bg-[#50B432]': bill.attributes.status.toLowerCase().includes('second reading'),
                      'bg-[#007867]': bill.attributes.status.toLowerCase().includes('third reading'),
                      'bg-[#009141]': bill.attributes.status.toLowerCase().includes('committee stage'),
                      'bg-[#B3B3B3]': bill.attributes.status.toLowerCase().includes('assent'),
                      'bg-[#022923]': bill.attributes.status.toLowerCase().includes('passed by senate'),
                      'bg-[#022923]': bill.attributes.status.toLowerCase().includes('transmitted to senate'),
                    }"
                  ></div>
                </div>
                <div class="py-6 pr-3 flex flex-col gap-4">
                  <div class="w-full gap-1 flex">
                    <h3 class="text-sm text-black font-montserrat font-semibold">
                      <span class="text-sm text-[#808080] font-montserrat font-normal">
                        HB Number: </span> {{ bill.attributes.hb_number }}
                    </h3>
                  </div>
                  <div class="w-full gap-1 flex">
                    <h3 class="text-sm text-black font-montserrat font-semibold">
                      <span class="text-sm text-[#808080] font-montserrat font-normal">
                        Title:</span> {{ bill.attributes.title }}
                    </h3>
                  </div>
                  <div class="w-full gap-1 flex">
                    <h3 class="text-sm text-black font-montserrat font-semibold">
                      <span class="text-sm text-[#808080] font-montserrat font-normal">
                        Bill Sponsor: </span> {{ bill.attributes.bill_sponsor }}
                    </h3>
                  </div>
                  <div class="w-full gap-1 flex">
                    <h3 class="text-sm text-black font-montserrat font-semibold">
                      <span class="text-sm text-[#808080] font-montserrat font-normal">
                        Status:
                      </span> {{ bill.attributes.status_desc }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="self-center" v-else>No Results for search</div>
          </div>
          <!-- pagination -->
          <div class="w-full flex items-center justify-center">
            <Pagination
              :total="TotalBills"
              :items-per-page="pageSizeBills"
              :max-pages="2"
              prev-text="Previous"
              @page="loadData"
            />
          </div>
        </template>
        <template v-else>
          <div class="w-full flex flex-col gap-4 my-8">
            <div class="w-full relative"
              v-if="motions.length > 0"
            >
              <div class="w-full cursor-pointer hidden border border-solid 
                border-[#CECFCF] md:min-h-40 lg:min-h-[4.75rem]
                md:grid md:grid-cols-[2.5fr_1.5fr_0.75fr_1fr]
                overflow-x-scroll transition duration-300
                hover:shadow-xl"
                v-for="(motion, index) in motions"
                :key="index"
                @click="$router.push(`/bills/motions/${motion?.id}`)"
              >
                <div class="py-2.5 flex flex-col gap-2.5 px-5">
                  <p class="text-sm w-max font-montserrat font-normal text-[#808080]">
                    Title
                  </p>
                  <h3 class="md:text-sm lg:text-base font-medium font-montserrat text-[#2B2B2B]">
                    {{ motion.attributes.title }}
                  </h3>
                </div>
                <div class="py-2.5 h-full border-r border-l border-[#CECFCF] flex flex-col gap-2.5 px-5">
                  <p class="text-sm font-montserrat font-normal text-[#808080]">
                    Motion Sponsor
                  </p>
                  <h3 class="md:text-sm lg:text-base font-medium font-montserrat text-[#2B2B2B]">
                    {{ motion.attributes.motion_sponsor }}
                  </h3>
                </div>
                <div class="py-2.5 h-full border-r border-[#CECFCF] flex flex-col gap-2.5 px-5">
                  <p class="text-sm font-montserrat font-normal text-[#808080]">
                    Date
                  </p>
                  <h3 class="md:text-sm lg:text-base font-medium font-montserrat text-[#2B2B2B]">
                    {{ motion.attributes.motion_date }}
                  </h3>
                </div>
                <div class="py-2.5 flex flex-col gap-2.5 px-5">
                  <p class="text-sm font-montserrat font-normal text-[#808080]">
                    Status
                  </p>
                  <h3 class="md:text-sm lg:text-base font-medium font-montserrat text-[#2B2B2B]">
                    {{ motion.attributes.status }}
                  </h3>
              </div>
              </div>
              <div class="w-full cursor-pointer md:hidden min-h-52
                rounded-lg border border-solid transition
                border-[#CECFCF] flex gap-4 bg-white
                duration-300 hover:shadow-xl"
                v-for="(motion, index) in motions" :key="index"
                @click="$router.push(`/bills/motions/${motion?.id}`)"
              >
                <div class="py-6 px-3 sm:px-4 flex flex-col gap-3">
                  <div class="w-full gap-1 flex">
                    <h3 class="text-sm text-black font-montserrat font-semibold">
                      <span class="text-sm text-[#808080] font-montserrat font-normal">
                        Title: </span> {{ motion.attributes.title }}
                    </h3>
                  </div>
                  <div class="w-full gap-1 flex">
                    <h3 class="text-sm text-black font-montserrat font-semibold">
                      <span class="text-sm text-[#808080] font-montserrat font-normal">
                        Motion Sponsor: </span> {{ motion.attributes.motion_sponsor }}
                    </h3>
                  </div>
                  <div class="w-full gap-1 flex">
                    <h3 class="text-sm text-black font-montserrat font-semibold">
                      <span class="text-sm text-[#808080] font-montserrat font-normal">
                        Date:
                      </span> {{ motion.attributes.motion_date }}
                    </h3>
                  </div>
                  <div class="w-full gap-1 flex">
                    <h3 class="text-sm text-black font-montserrat font-semibold">
                      <span class="text-sm text-[#808080] font-montserrat font-normal">
                        Status:
                      </span> {{ motion.attributes.status }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="self-center">No Results for search</div>
          </div>
          <div class="w-full flex items-center justify-center">
            <Pagination :total="motions.length" :items-per-page="8" :max-pages="2" prev-text="Previous" />
          </div>
        </template>
      </div>
    </section>
    <section v-if="isBills" class="py-16 w-full border-t border-borderMuted">
      <div class="content w-[92.5%] md:w-[90%] mx-auto">
        <h3 class="font-semibold mb-10 md:mb-12 lg:mb-16">Bills Chart</h3>
        <div class="w-full flex flex-col items-center h-auto">
          <!-- <PieChart /> -->
          <!-- <Barchart /> -->
          <CustomBarchart />
        </div>
      </div>
    </section>
    <section v-if="isBills" 
      class="partners w-[92.5%] md:w-[90%] mx-auto py-8 md:py-12 lg:py-16 bg-white"
    >
      <div class="content flex flex-col gap-16">
        <div class="w-full sm:w-8/12 flex flex-col gap-2">
          <h2 class="font-normal font-adamina">Legislative Partners</h2>
          <p class="text-gray my-2 text-sm md:text-base leading-[1.2] tracking-[0.4px]">
            Meet our partners who have key roles in helping to achieve sustainable human development 
            in economic, social and environmental fronts
          </p>
        </div>
        <div class="w-[80vw] flex justify-between gap-6 overflow-x-auto">
          <NuxtImg
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717484150/benjamin_kalu/Logo_srt3cm.png"
            class="w-48 h-24 object-cover flex-shrink-0"
          />
          <NuxtImg
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717484150/benjamin_kalu/Logo-1_mpjsvy.png"
            class="w-48 h-24 object-cover flex-shrink-0"
          />
          <NuxtImg
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717484150/benjamin_kalu/Logo-2_qkehnj.png"
            class="w-48 h-24 object-cover flex-shrink-0"
          />
          <NuxtImg
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717484149/benjamin_kalu/Logo-3_mikgrn.png"
            class="w-48 h-24 object-cover flex-shrink-0"
          />
          <NuxtImg
            src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717484149/benjamin_kalu/Logo-4_whznls.png"
            class="w-48 h-24 object-cover flex-shrink-0"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import CustomBarchart from '~/components/global/CustomBarchart.vue';

const isBills = ref(true);
const bills = ref([]);
const pageBills = ref(0);
const pageCountBills = ref(0);
const pageSizeBills = ref(1);
const TotalBills = ref(0);
const displayedBills = ref([]);
const displayedMotions = ref([]);
const searchTerm = ref('');
const searchType = ref('');
const loading = ref(false);
const motions = ref([]);
const activeFilter = ref(0)

function searchTable() {
  loadData(1);
}

async function loadData(newPage = 1) {
  loading.value = true;
  try {
    const currentCategory = filters[activeFilter.value];
    const { meta, data } = await useMyBillsStore().getAllBills(newPage, 10, searchType.value, searchTerm.value, currentCategory);
    pageBills.value = meta?.pagination?.page || 1;
    pageCountBills.value = meta?.pagination?.pageCount || 1;
    pageSizeBills.value = 10;
    TotalBills.value = meta?.pagination?.total || 0;
    bills.value = data || [];
    displayedBills.value = bills.value;

    const { meta: motionsMeta, data: motionsData } = await useMyBillsStore().getMotions(newPage, 8, searchType.value, searchTerm.value, currentCategory);
    motions.value = motionsData || [];
    displayedMotions.value = motions.value;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await loadData();
  displayedBills.value = bills.value;
  displayedMotions.value = motions.value;
  console.log("motions: ", motions.value);
});

const filters = [
  'All',
  'Constitution review',
  'Judicial reforms',
  'Security sector',
  'Education',
  'Professional Bodies',
  'Governance',
  'Business ',
  'Fiscal Reforms',
  'Science & Technology',
  'Agriculture',
  'Health',
  'Regional Development',
  'Treaties & convention',
  'Infrastructure',
]
</script>

<style lang="scss" scoped>
.hero_bill {
  background-image: url('/assets/images/bill_hero_dp.png');
  // background-color: #007e9ae5;
  background-color: rgba(20, 102, 52, 0.4);
  background-position: right center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-size: cover;
}
.table-grid {
  grid-template-columns: 5% 10% 40% 1fr 1fr;
}

small {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}

@media screen and (max-width: 485px) {
  .hero_bill {
    background-position: 65% center;
  }
}
</style>
