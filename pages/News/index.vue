<template>
  <main class="flex flex-col">
    <SectionsLatestNews />
    <section class="updates w-full py-16 bg-black text-white">
      <div class="content flex flex-col mx-auto gap-8 ml-[7.5%]">
        <div class="header flex flex-col gap-1 text-white">
          <h2 class="font-montserrat">Weekly <span class="text-secondaryGreen">updates</span></h2>
          <h4>Get first hand updates with your deputy speaker</h4>
        </div>
        <div class="scroller w-full my-8 flex gap-8 relative overflow-x-scroll">
          <img src="/images/weekly_review/weekly_review_23_march.webp" alt="weekly review" class="w-80" />
          <img src="/images/weekly_review/weekly_review_23_march.webp" alt="weekly review" class="w-80" />
          <img src="/images/weekly_review/weekly_review_23_march.webp" alt="weekly review" class="w-80" />
          <img src="/images/weekly_review/weekly_review_23_march.webp" alt="weekly review" class="w-80" />
          <img src="/images/weekly_review/weekly_review_23_march.webp" alt="weekly review" class="w-80" />
        </div>
      </div>
    </section>
    <section class="p-8 md:p-20 bg-light">
      <div>
        <h3 class="font-montserrat text-2xl">Constitutional Review News and Updates</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        <div
          v-for="news in newsItems"
          :key="news.id"
          class="bg-white shadow-sm p-6 hover:shadow-lg transition-shadow border-t-4 border-borderMuted"
        >
          <div class="mb-6 flex flex-col gap-8 justify-between">
            <h4 class="text-sm font-medium mb-4 font-montserrat">{{ news.category }}</h4>
            <h2 class="text-xl font-semibold mb-4 font-montserrat">
              {{ news.title }}
            </h2>

            <p v-if="news.location" class="mb-4 font-montserrat">
              {{ news.location }}
            </p>

            <p class="text-textGray font-montserrat">
              {{ news.description }}
            </p>
            <div class="text-sm font-montserrat">
              {{ news.date }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <SectionsContact /> -->
  </main>
</template>

<script lang="ts" setup>
const newsItems = [
  {
    id: 1,
    category: 'News',
    title: 'House Committee on Constitution Review Extends Memoranda Submission Deadline to April 30',
    location: 'Abuja, Nigeria | April 10, 2024',
    description: 'The House Committee on Constitution Review, under the leadership of Rt. Hon. Benjamin Okezie Kalu',
    date: 'Apr 12th, 2024',
  },
  {
    id: 2,
    category: 'News',
    title: 'New Constitution will be ready in 2025 - Reps',
    description:
      'Barring unforeseen circumstances, the amendment to the Nigerian 1999 Constitution will be ready for presidential assent in August 2025 after the voting...',
    date: 'Mar 5th, 2024',
  },
  {
    id: 3,
    category: 'News',
    title: 'Constitution review: Reps call for Memoranda',
    description:
      'The first draft of proposed alterations to the 1999 Constitution (as amended) would be ready in August, 2024.',
    date: 'Mar 3rd, 2024',
  },
  {
    id: 4,
    category: 'News',
    title: 'Constitution review report to be submitted in 2025 - Kalu',
    description:
      'The House of Representatives says the final clean copy report of the ongoing constitution review will be ready for the Presidential assent in August 2025.',
    date: 'Mar 3rd, 2024',
  },
  {
    id: 5,
    category: 'News',
    title: 'Constitutional review: NASS powers to summon president, others dominate discourse',
    description:
      'Constitutional Review Committee of the House of Representatives on Monday, Sunday PUNCH gathered that the committee had received a total of 44 bills',
    date: 'Feb 25th, 2024',
  },
  {
    id: 6,
    category: 'News',
    title: 'State police, increased derivation, others top constitution review agenda',
    description:
      'A constitutional role for traditional rulers, the creation of State Police, and the bills seeking to return the country to a parliamentary...',
    date: 'Feb 25th, 2024',
  },
];
</script>

<style lang="scss" scoped>
.updates {
  background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717434396/benjamin_kalu/weekly_updates_background_q95czt.png'),
    url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717433021/benjamin_kalu/updates_noise_clx0wk.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.scroller {
  &::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
