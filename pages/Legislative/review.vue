<template>
  <main class="flex flex-col w-full text-justify">
    <section
      class="hero w-full h-auto sm:h-[85vh] bg-[#146634] flex flex-col sm:flex-row items-center"
      style="background-image: url('/images/constitution_review/noise.png')"
    >
      <div class="text-section w-full sm:w-1/2 py-16">
        <div class="content mx-auto w-[85%] flex flex-col gap-2">
          <h3 class="text-white text-2xl md:text-[2rem] md:leading-10 lg:text-[2.5rem] 
            lg:leading-[3rem] font-normal font-adamina mb-4 text-left"
          >
            Follow the Constitution Review Process of the 10th House of Representatives
          </h3>
          <h4 class="text-[#E1EA66] font-inter text-sm md:text-base text-left">
            Amid calls for restructuring, and sitting as Chair of the House Committee on Constitution Review, Rep. Kalu
            leads the way for the 10th House of Reps as it charts the course for Nigeria’s next constitutional
            amendment.
          </h4>
        </div>
      </div>
      <div class="image-sect w-full sm:w-1/2 h-full">
        <NuxtImg src="/images/constitution_review/hero.png" class="w-full h-full object-cover" />
      </div>
    </section>
    <section class="w-full py-8 md:py-12 lg:py-16">
      <div class="content mx-auto w-[92.5%] md:w-[90%] flex flex-col gap-8">
        <h3 class="font-semibold font-montserrat">Constitution Review</h3>
        <p class="text-sm text-[#585C5B] font-medium font-montserrat md:text-base 
          lg:text-lg"
        >
          The House of Representatives Committee on the Review of the Constitution of the Federal Republic of Nigeria,
          1999 (As Amended) was established pursuant to Section 62 of the Constitution of the Federal Republic of
          Nigeria, 1999 (As Amended) and Order 18 (9) of the Standing Orders of the House of Representatives. It is a
          special committee charged with the following responsibilities:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul class="text-lg flex relative shrink-0 flex-col pl-4 gap-4 md:gap-6 lg:gap-8 list-disc">
            <li class="text-[#585C5B] font-medium font-montserrat text-xs md:text-sm lg:text-base">
              Recommending the alteration of the Constitution of the Federal Republic of Nigeria 1999 and other Acts
              that require alteration in accordance with sections 8 and 9 of the Constitution;
            </li>
            <li class="text-[#585C5B] font-medium font-montserrat text-xs md:text-sm lg:text-base">
              Receiving and considering proposals (bills) for alteration of the 1999 Constitution (As Amended) referred
              to it by the House;
            </li>
            <li class="text-[#585C5B] font-medium font-montserrat text-xs md:text-sm lg:text-base">
              Creating a forum for relevant stakeholders and members of the public to make inputs to the Constitution
              review process with a view to enacting laws that address the needs and aspirations of the Nigerian people;
            </li>
            <li class="text-[#585C5B] font-medium font-montserrat text-xs md:text-sm lg:text-base">
              Building a robust collaborative synergy with the Senate of the Federal Republic of Nigeria and with the 36
              States Houses of Assembly whose resolutions are part of the legislative journey of the constitution review
              process;
            </li>
            <li class="text-[#585C5B] font-medium font-montserrat text-xs md:text-sm lg:text-base">
              Liaising with relevant government agencies, civil society organisations, multi-lateral and supranational
              agencies and bodies to achieve a wholesome amendment to the Nigerian constitution.
            </li>
          </ul>
          <NuxtImg src="/images/constitution_review/coat-of-arms.png" alt="coat of arms" />
        </div>
      </div>
    </section>
    <section class="bg-footerGreen m-0 p-8 md:p-12 lg:p-24">
      <p class="text-white text-sm md:text-base lg:text-lg font-montserrat mb-4 md:mb-6 lg:max-w-4/5 lg:mb-8">
        Following parliamentary tradition, the Deputy Speaker of the House heads the Committee on Constitution Review,
        overseeing the critical reforms and amendments to the existing constitution.
      </p>
      <p class="text-white text-sm md:text-base lg:text-lg font-montserrat lg:max-w-4/5">
        Since 1999, the Nigerian Constitution has been altered five times and is currently undergoing its sixth
        alteration process by the 10th House of Representatives. The Committee has thus set a 24 month timeline for this
        review assuring Nigerians of a new constitution that will reflect the yearnings of every citizen.
      </p>
    </section>
    <section class="py-8 w-[90%] md:w-[92.5%] mx-auto md:py-12 lg:py-20 bg-light">
      <div class="flex w-full mb-6 md:mb-9 lg:mb-11 items-start justify-between">
        <h3 class="font-adamina w-[inherit] text-[#022924] text-2xl md:text-[2rem]">
          Constitutional Review News and Updates
        </h3>
        <div class="w-full md:flex hidden justify-center md:justify-end">
          <button @click="$router.push('/news#news')"
            class="bg-[#146634] w-32 h-10 transition duration-300 hover:bg-[#105129]
            cursor-pointer rounded-full py-2 px-6"
          >
            <p class="text-sm text-white font-semibold font-montserrat 
              md:text-base"
            >
              See more
            </p>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 
        my-4 md:my-6 lg:my-8"
      >
        <div v-for="(news, index) in newsItems" :key="index"
          class="bg-white shadow-sm p-4 md:p-6 hover:shadow-lg transition-shadow border-t-4 
          border-borderMuted shrink-0"
        >
          <div class="mb-6 flex flex-col gap-2 md:gap-4 lg:gap-8 justify-between">
            <h4 class="text-sm font-medium md:mb-2 lg:mb-4 font-montserrat">{{ news.category }}</h4>
            <h2 class="text-xl text-left font-semibold mb-4 font-montserrat">
              {{ news.title }}
            </h2>

            <p v-if="news.location" class="mb-4 font-montserrat">
              {{ news.location }}
            </p>

            <p class="text-textGray text-left md:text-justify font-montserrat">
              {{ news.description }}
            </p>
            <div class="text-sm font-montserrat">
              {{ news.date }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex md:hidden mt-6 md:mt-12 lg:mt-16 justify-end">
        <button @click="$router.push('/news#news')"
          class="bg-[#146634] w-32 h-10 transition duration-300 hover:bg-[#105129]
          cursor-pointer rounded-full py-2 px-6"
        >
          <p class="text-sm underline text-white font-semibold font-montserrat md:text-base">
            See more
          </p>
        </button>
      </div>
    </section>
    <!-- <section class="w-full py-8">
      <NuxtImg
        src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717689036/benjamin_kalu/timetable_ibjskh.png"
        class="w-[85%] h-auto mx-auto"
      />
    </section> -->
    <!-- <SectionsLatestNews /> -->
    <SectionsPortal />
  </main>
</template>

<script lang="ts" setup>
const newsItems = [
  {
    category: 'News',
    title: 'House Committee on Constitution Review Extends Memoranda Submission Deadline to April 30',
    location: 'Abuja, Nigeria | April 10, 2024',
    description: 'The House Committee on Constitution Review, under the leadership of Rt. Hon. Benjamin Okezie Kalu',
    date: 'Apr 12th, 2024',
  },
  {
    category: 'News',
    title: 'New Constitution will be ready in 2025 - Reps',
    description:
      'Barring unforeseen circumstances, the amendment to the Nigerian 1999 Constitution will be ready for presidential assent in August 2025 after the voting...',
    date: 'Mar 5th, 2024',
  },
  {
    category: 'News',
    title: 'Constitution review: Reps call for Memoranda',
    description:
      'The first draft of proposed alterations to the 1999 Constitution (as amended) would be ready in August, 2024.',
    date: 'Mar 3rd, 2024',
  }
];
</script>

<style></style>
