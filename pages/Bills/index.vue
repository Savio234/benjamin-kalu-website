<template>
  <main class="flex flex-col w-full">
    <section class="hero w-full flex items-center text-center py-16 h-fit sm:h-[85vh]">
      <div class="content py-16 mx-auto w-[85%]">
        <h2 class="font-semibold text-white">Bills & Motions</h2>
        <h4 class="font-semibold text-white">Benjamin Kalu’s Bills</h4>
        <div class="form-holder w-full flex items-center my-8">
          <input
            type="text"
            v-model="searchTerm"
            class="bg-white p-4 w-full rounded-l-lg outline-none"
            placeholder="Enter Keyword here"
          />
          <!-- <div class="hidden sm:block py-[0.95rem] px-4 w-fit h-fit bg-white border-l border-borderMuted">
            <select name="" id="" class="p-0 m-0 outline-none">
              <option value="" selected>Filter by State</option>
            </select>
          </div> -->
          <button
            class="bg-primaryGreen py-[1.25rem] sm:py-4 px-6 rounded-r-lg flex items-center text-white gap-2"
            @click="searchTable"
          >
            <span class="hidden sm:block">Find</span>
            <svg-icon name="search" width="1rem" height="1rem" />
          </button>
        </div>
      </div>
    </section>
    <section class="py-8 w-full">
      <div class="content mx-auto w-[85%]">
        <div class="toggler w-full flex items-center rounded-full h-fit p-1 border border-borderMuted">
          <button
            class="w-1/2 h-fit py-4 rounded-full flex items-center gap-1 justify-center text-center"
            :class="isBills ? 'bg-primaryGreen text-white' : ''"
            @click="
              isBills = true;
              searchTable();
            "
          >
            <span class="hidden sm:block w-fit">Benjamin Kalu's </span>Bills
          </button>
          <button
            class="w-1/2 h-fit py-4 rounded-full flex items-center gap-1 justify-center text-center"
            :class="!isBills ? 'bg-primaryGreen text-white' : ''"
            @click="
              isBills = false;
              searchTable();
            "
          >
            <span class="hidden sm:block w-fit"> Benjamin Kalu's </span> Motions
          </button>
        </div>
        <!-- grid table -->
        <template v-if="isBills">
          <div class="flex flex-col items-center justify-center mb-12" v-show="loading">
            <iframe
              src="https://lottie.host/embed/6ebb5dec-8bd7-4193-b110-906eb5a41b05/Bv9PZBlVeE.json"
              height="200px"
              width="200px"
            ></iframe>
            <p class="w-fit">Loading...</p>
          </div>
          <div class="w-full flex flex-col gap-4 my-8" v-show="!loading">
            <div
              class="grid sm:grid-cols-[5%_10%_40%_1fr_1fr] w-full max-sm:divide-y sm:divide-x divide-borderMuted border border-borderMuted cursor-pointer"
              v-for="(items, index) in bills"
              :key="index"
              v-if="bills.length > 0"
              @click="$router.push(`/bills/${items.id}`)"
            >
              <div class="flex flex-col gap-2 py-2 px-2">
                <small>S/N</small>
                <small class="font-semibold">{{ items.id }}</small>
              </div>
              <div class="flex flex-col gap-2 py-2 px-2">
                <small>H/B Number</small>
                <small class="font-semibold">{{ items.attributes.hb_number }}</small>
              </div>
              <div class="flex flex-col gap-2 py-2 px-2">
                <small>Title</small>
                <small class="font-semibold">{{ items.attributes.title }}</small>
              </div>
              <div class="flex flex-col gap-2 py-2 px-2">
                <small>Bill Sponsor</small>
                <small class="font-semibold">{{ items.attributes.bill_sponsor }}</small>
              </div>
              <div class="flex flex-col gap-2 py-2 px-2">
                <small>Status</small>
                <small class="font-semibold">{{ items.attributes.status }}</small>
              </div>
            </div>
            <div class="self-center" v-else>No Results for search</div>
          </div>
          <!-- pagination -->
          <div class="w-full flex items-center justify-center">
            <Pagination
              :total="totalBills"
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
              <div class="flex flex-col gap-2 py-2 px-2">
                <small>S/N</small>
                <small class="font-semibold">{{ index + 1 }}</small>
              </div>
              <div class="flex flex-col gap-2 py-2 px-2">
                <small>Title</small>
                <small class="font-semibold">{{ items.title }}</small>
              </div>
              <div class="flex flex-col gap-2 py-2 px-2">
                <small>Bill Sponsor</small>
                <small class="font-semibold">{{ items.motion_sponsor }}</small>
              </div>
              <div class="flex flex-col gap-2 py-2 px-2">
                <small>Status</small>
                <small class="font-semibold">{{ items.date }}</small>
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
    <section class="py-16 w-full border-t border-borderMuted">
      <div class="content w-[85%] mx-auto">
        <h3 class="font-semibold">Bills Chart</h3>
        <div class="w-full flex flex-col items-center h-auto">
          <PieChart />
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
const loading = ref(false);
const motions = ref([
  {
    title: 'Need for the Rehabilitation of Orlu - Ihiala Road',
    motion_sponsor: 'Hon. Canice Moore Nwachukwu',
    date: ' Oct 21, 2022',
    details: {
      sponsors: [''],
      resolutions: [''],
      // the house is meant to be rich-text
      house: null,
    },
  },
]);

// search functionality
const filteredBills = computed(() => {
  return bills.value.filter((item) => item.title.toLowerCase().includes(searchTerm.value.toLowerCase()));
});

const filteredMotions = computed(() => {
  return motions.value.filter((item) => item.title.toLowerCase().includes(searchTerm.value.toLowerCase()));
});

function searchTable() {
  if (isBills.value) {
    displayedBills.value = filteredBills.value;
  } else {
    displayedMotions.value = filteredMotions.value;
  }
}
async function loadData(newPage = 1) {
  loading.value = true;
  try {
    const { meta, data } = await useMyBillsStore().getAllBills(newPage);
    pageBills.value = meta.pagination.page;
    pageCountBills.value = meta.pagination.pageCount;
    pageSizeBills.value = meta.pagination.pageSize;
    TotalBills.value = meta.pagination.total;
    bills.value = data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
// onMounte
onMounted(async () => {
  displayedBills.value = bills.value;
  displayedMotions.value = motions.value;
  // api call
  await loadData();
});
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717709501/benjamin_kalu/ben_speech_suit_kwik61.png'),
    url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717433021/benjamin_kalu/updates_noise_clx0wk.png');
  background-color: #007e9ae5;
  background-blend-mode: overlay;
  background-position: center center;
}
.table-grid {
  grid-template-columns: 5% 10% 40% 1fr 1fr;
}
</style>
