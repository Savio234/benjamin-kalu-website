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
          <h3 class="title">{{ bill.title }}</h3>
          <div class="sponsors w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
            <p>Bill Sponsors</p>
            <!-- sponsors list -->
            <ul>
              <li v-for="(items, index) in bill.details['sponsors']" :key="index">{{ items }}</li>
            </ul>
          </div>
          <div class="description w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
            <p>Description</p>
            <p>
              {{ bill.details.description }}
            </p>
          </div>
          <div class="About w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
            <p>About the Bill (Explanatory Memorandum)</p>
            <p>
              {{ bill.details.about }}
            </p>
          </div>
          <div class="About w-full rounded-xl border border-borderMuted flex flex-col bg-white p-4 gap-4">
            <p>Functions of Members of the council</p>
            <div class="w-full flex flex-col gap-2">
              <p>The responsibilities of the council members are;</p>
              <ul class="list-disc px-4 flex flex-col gap-2">
                <li v-for="(items, index) in bill.details['functionsOfMembers']" :key="index">{{ items }}</li>
              </ul>
            </div>
          </div>
          <Progressbar percentage-fill="20%" />
          <div class="stage flex flex-col w-fit gap-4">
            <h5 class="font-semibold">Bill Status</h5>
            <ul class="flex flex-col gap-2">
              <li v-for="(items, index) in bill.details['progress']" :key="index" class="flex items-center gap-2">
                {{ items.stage }}: <span>{{ items.date }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 justify-between mx-auto w-[85%] mt-8">
        <MainButton append-icon="attachment_white">Download Brief</MainButton>
        <div class="flex flex-col gap-2">
          <p>Resources</p>
          <a href="" class="text-primaryGreen">Lead Debate</a>
          <a href="" class="text-primaryGreen">Committee Report</a>
        </div>
      </div>
    </section>
    <div class="flex flex-col items-center justify-center mb-12">
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
const bill = ref(null);
// onMounted(async () => {
//   const ID = useRoute().params.id;
//   const { data } = await useMyBillsStore().getBill(ID);

//   console.log(data);
//   bill.value = data.attributes;
// });
</script>

<style></style>
