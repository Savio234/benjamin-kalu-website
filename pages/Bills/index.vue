<template>
  <main class="flex flex-col w-full">
    <section class="hero_bill w-full flex items-center text-center py-16 h-fit sm:h-[85vh]">
      <div class="content py-16 mx-auto w-[92.5%] md:w-[90%]">
        <h2 class="font-semibold text-xl md:text-2xl lg:text-5xl lg:leading-[3.75rem] 
          font-adamina text-white mb-2 md:mb-4"
        >
          Bills & Motions
        </h2>
        <h4 class="text-sm md:text-base text-white font-montserrat font-semibold">
          Bills and Motions sponsored by Hon. Kalu
        </h4>
        <div class="form-holder w-full flex items-center my-8">
          <input
            type="text"
            v-model="searchTerm"
            class="bg-white p-4 w-full rounded-l-lg outline-none"
            placeholder="Enter Keyword here"
          />
          <div class="hidden sm:block py-[0.95rem] px-4 w-fit h-fit bg-white border-l border-borderMuted">
            <select name="" id="" class="p-0 w-full m-0 outline-none" v-model="searchType">
              <option value="" selected disabled>Filter by Status</option>
              <!-- <option value="first_time_read">First Time Read, Awaiting Second Reading</option>
              <option value="second_time_read">Second Time Read, Referred to Committees</option>
              <option value="committee_of_whole">Referred to Committee of the Whole (Order 12 Rule 16)</option>
              <option value="passed_by_house">Passed by House of Representatives</option>
              <option value="passed_by_house_senate">Passed by House of Representatives and Senate</option>
              <option value="accented_by_the_president">Assented to by the President</option> -->
              <option value="hb_number">HB Number</option>
              <option value="title">Title</option>
              <option value="status">Status</option>
            </select>
          </div>
          <button
            class="bg-[#146634] py-[1.25rem] sm:py-4 px-6 rounded-r-lg flex items-center 
            text-white gap-2 transition duration-300 hover:bg-[#105129]"
            @click="searchTable"
          >
            <span class="hidden sm:block">Find</span>
            <svg-icon name="search" width="1rem" height="1rem" />
          </button>
        </div>
      </div>
    </section>
    <section class="py-8 bg-[#FAFFFA] w-full">
      <div class="content mx-auto w-[92.5%] md:w-[90%]">
        <div class="toggler w-full flex items-center rounded-full h-fit p-1 border border-borderMuted">
          <button
            class="w-1/2 h-fit py-4 rounded-full flex items-center gap-1 justify-center text-center"
            :class="isBills ? 'bg-[#146634] text-white' : ''"
            @click="
              isBills = true;
              searchTable();
            "
          >
            <span class="hidden sm:block w-fit">Benjamin Kalu's </span>Bills
          </button>
          <button
            class="w-1/2 h-fit py-4 rounded-full flex items-center gap-1 justify-center text-center"
            :class="!isBills ? 'bg-[#146634] text-white' : ''"
            @click="
              isBills = false;
              searchTable();
            "
          >
            <span class="hidden sm:block w-fit"> Benjamin Kalu's </span> Motions
          </button>
        </div>
        <div class="flex my-8 md:my-12 lg:my-16 overflow-x-scroll md:overflow-x-hidden 
          md:flex-wrap gap-2.5"
          v-if="filters"
        >
          <div class="px-8 md:px-6 lg:px-9 h-fit md:min-h-auto  
            rounded-[2.5rem] py-1 md:py-1.5 lg:py-2.5 cursor-pointer"
            v-for="(filter, index) in filters" :key="index"
            :class="{
              'bg-black': activeFilter === index,
              'bg-[#DFDFDF]': activeFilter !== index
            }"
            @click="activeFilter = index; loadData(1);"
          >
            <p class=" text-xs md:text-sm font-medium font-montserrat  
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
              overflow-x-scroll transition duration-300 hover:shadow-xl"
              v-for="(bill, index) in bills.slice(0, 10)" :key="index"
              v-if="bills.length > 0"
              @click="$router.push(`/bills/${bill.id}`)"
            >
              <div class="py-2.5 flex h-full flex-col">
                <p class="hidden">{{ bill.attributes.status }}</p>
                <div class="h-full w-2"
                  :class="{
                    'bg-[#50B432]': bill.attributes.status.toLowerCase() === 'second reading',
                    'bg-[#007867]': bill.attributes.status.toLowerCase() === 'committee stage',
                    'bg-[#6AF9C4]': bill.attributes.status.toLowerCase() === 'assented',
                    'bg-[#B3B3B3]': bill.attributes.status.toLowerCase() === 'transmitted to senate',
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
                  {{ bill.attributes.status }}
                </h3>
              </div>
            </div>
            <div class="w-full flex flex-col gap-4 md:gap-6" v-if="bills">
              <div class="w-full cursor-pointer hidden border border-solid border-[#CECFCF] md:flex 
                md:h-40 lg:h-[6.75rem] items-start justify-start overflow-x-scroll transition
                duration-300 hover:shadow-xl"
                v-for="(bill, index) in bills.slice(0, 10)" :key="index"
                v-if="bills.length > 0"
                @click="$router.push(`/bills/${bill.id}`)"
              >
                <!-- @click="$router.push(`/bills/details`)" -->
                <div class="py-2.5 flex h-full flex-col">
                  <p class="hidden">{{ bill.attributes.status }}</p>
                  <div class="h-full w-2"
                    :class="{
                      'bg-[#50B432]': bill.attributes.status.toLowerCase() === 'second reading',
                      'bg-[#022923]': bill.attributes.status.toLowerCase() === 'committee stage',
                      'bg-[#007867]': bill.attributes.status.toLowerCase() === 'assented',
                      'bg-[#B3B3B3]': bill.attributes.status.toLowerCase() === 'transmitted to senate',
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
                    {{ bill.attributes.status }}
                  </h3>
                </div>
              </div>
              <div class="w-full cursor-pointer md:hidden min-h-60 rounded-lg border border-solid 
                border-[#CECFCF] flex gap-4 bg-white transition duration-300 hover:shadow-xl"
                v-for="(bill, index) in bills" :key="index"
                @click="$router.push(`/bills/details`)"
              >
                <div class="py-1 flex h-60 flex-col">
                  <p class="hidden">{{ bill.attributes.status }}</p>
                  <div class="h-60 w-2"
                    :class="{
                      'bg-[#50B432]': bill.attributes.status.toLowerCase() === 'second reading',
                      'bg-[#022923]': bill.attributes.status.toLowerCase() === 'committee stage',
                      'bg-[#007867]': bill.attributes.status.toLowerCase() === 'assented',
                      'bg-[#B3B3B3]': bill.attributes.status.toLowerCase() === 'transmitted to senate',
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
                      </span> {{ bill.attributes.status }}
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
          <!-- grid table -->
          <div class="w-full flex flex-col gap-4 my-8">
            <div
              class="grid sm:grid-cols-[5%_40%_1fr_1fr] max-sm:divide-y sm:divide-x divide-borderMuted w-full border border-borderMuted cursor-pointer"
              v-for="(items, index) in motions"
              :key="index"
              v-if="displayedMotions.length > 0"
              @click="$router.push(`/bills/motions/${items.title}`)"
            >
              <div class="flex flex-col gap-2 p-4">
                <small>S/N</small>
                <small class="">{{ items.id }}</small>
              </div>
              <div class="flex flex-col gap-2 p-4">
                <small>Title</small>
                <small class="">{{ items.attributes.title }}</small>
              </div>
              <div class="flex flex-col gap-2 p-4">
                <small>Bill Sponsor</small>
                <small class="">{{ items.attributes.motion_sponsor }}</small>
              </div>
              <div class="flex flex-col gap-2 p-4">
                <small>Date</small>
                <small class="">{{
                  new Date(items.attributes.motion_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })
                }}</small>
              </div>
            </div>
            <div v-else class="self-center">No Results for search</div>
          </div>
          <!-- pagination -->
          <div class="w-full flex items-center justify-center">
            <Pagination :total="motions.length" :items-per-page="8" :max-pages="2" prev-text="Previous" />
          </div>
        </template>
      </div>
    </section>
    <section v-if="!isBills"
      class="partners w-[92.5%] md:w-[90%] mx-auto py-8 md:py-12 lg:py-16 bg-[#FAFFFA]"
    >
      <div class="w-full flex flex-col gap-4 md:gap-6" v-if="listOfMotions">
        <div class="w-full cursor-pointer border border-solid border-[#CECFCF] 
          md:flex items-start justify-start overflow-x-scroll
          md:min-h-40 lg:min-h-[4.75rem] hidden transition duration-300 hover:shadow-xl"
          v-for="(motion, index) in listOfMotions" :key="index"
          @click="$router.push(`/bills/motions/details`)"
        >
          <div class="py-2.5 w-[45%] flex flex-col gap-2.5 px-5">
            <p class="text-sm font-montserrat font-normal text-[#808080]">Title</p>
            <h3 class="text-base font-medium font-montserrat text-[#2B2B2B]">
              {{ motion.title }}
            </h3>
          </div>
          <div class="py-2.5 h-full border-r border-l border-[#CECFCF] w-[30%] flex flex-col gap-2.5 px-5">
            <p class="text-sm font-montserrat font-normal text-[#808080]">Motion Sponsor</p>
            <h3 class="text-base font-medium font-montserrat text-[#2B2B2B]">
              {{ motion.sponsor }}
            </h3>
          </div>
          <div class="py-2.5 w-[25%] flex flex-col gap-2.5 px-5">
            <p class="text-sm font-montserrat font-normal text-[#808080]">Date</p>
            <h3 class="text-base font-medium font-montserrat text-[#2B2B2B]">
              {{ motion.date }}
            </h3>
          </div>
        </div>
        <div class="w-full cursor-pointer md:hidden min-h-60 rounded-lg border border-solid 
          border-[#CECFCF] flex gap-4 bg-white transition duration-300 hover:shadow-xl"
          v-for="(motion, index) in listOfMotions" :key="index"
          @click="$router.push(`/bills/motions/details`)"
        >
          <div class="py-6 pr-3 flex flex-col gap-4">
            <div class="w-full gap-1 flex">
              <h3 class="text-sm text-black font-montserrat font-semibold">
                <span class="text-sm text-[#808080] font-montserrat font-normal">
                  Title: </span> {{ motion.title }}
              </h3>
            </div>
            <div class="w-full gap-1 flex">
              <h3 class="text-sm text-black font-montserrat font-semibold">
                <span class="text-sm text-[#808080] font-montserrat font-normal">
                  Bill Sponsor: </span> {{ motion.sponsor }}
              </h3>
            </div>
            <div class="w-full gap-1 flex">
              <h3 class="text-sm text-black font-montserrat font-semibold">
                <span class="text-sm text-[#808080] font-montserrat font-normal">
                  Date:
                </span> {{ motion.date }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="isBills" class="py-16 w-full border-t border-borderMuted">
      <div class="content w-[92.5%] md:w-[90%] mx-auto">
        <h3 class="font-semibold">Bills Chart</h3>
        <div class="w-full flex flex-col items-center h-auto">
          <!-- <PieChart /> -->
          <Barchart />
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
// const listOfBills = [
//   {
//     type: 'passed',
//     bill_number: "HB.698",
//     title: `Office of Budget Management of the Federation (Establishment) Bill, 2023`,
//     name: "Hon. Benjamin Okezie Kalu",
//     id: 'tthyuiejgnbuyldlkretiuiykgnb',
//     status: `Committee of the Whole (Order Twelve Rule 16)`,
//   },
//
// ]
const listOfMotions = [
  {
    title: `Need for the Rehabilitation of Orlu - Ihiala Road`,
    sponsor: "Hon. Benjamin Okezie Kalu",
    date: ` Oct 21, 2022`,
  },
  {
    title: `Office of Budget Management of the Federation (Establishment) Bill, 2023`,
    sponsor: "Hon. Benjamin Okezie Kalu",
    date: ` Oct 21, 2022`,
  },
  {
    title: `Office of Budget Management of the Federation (Establishment) Bill, 2023`,
    sponsor: "Hon. Benjamin Okezie Kalu",
    date: ` Oct 21, 2022`,
  },
  {
    title: `Office of Budget Management of the Federation (Establishment) Bill, 2023`,
    sponsor: "Hon. Benjamin Okezie Kalu",
    date: ` Oct 21, 2022`,
  },
  {
    title: `Office of Budget Management of the Federation (Establishment) Bill, 2023`,
    sponsor: "Hon. Benjamin Okezie Kalu",
    date: ` Oct 21, 2022`,
  },
  {
    title: `Office of Budget Management of the Federation (Establishment) Bill, 2023`,
    sponsor: "Hon. Benjamin Okezie Kalu",
    date: ` Oct 21, 2022`,
  },
  {
    title: `Office of Budget Management of the Federation (Establishment) Bill, 2023`,
    sponsor: "Hon. Benjamin Okezie Kalu",
    date: ` Oct 21, 2022`,
  },
]
</script>

<style lang="scss" scoped>
.hero_bill {
  background-image: url('/assets/images/bill_hero.png');
  // background-color: #007e9ae5;
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
</style>
