<template>
  <main class="flex flex-col">
    <SectionsNews :newsData="newsData" />
    <section class="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div class="w-[92.5%] mx-auto md:w-[90%]">
        <h1 class="text-left text-[#022924] text-[2rem] md:text-4xl lg:text-5xl">
          Publications
        </h1>
        <SectionsPublications :publications="publications" />
      </div>
    </section>
    <section class="w-full pb-8 md:pb-12 lg:pb-16 bg-white">
      <div class="w-[92.5%] mx-auto md:w-[90%]">
        <h1 class="text-left text-[#022924] text-[2rem] md:text-4xl lg:text-5xl">
          Media
        </h1>
        <SectionsAboutMedia :media="media" />
      </div>
    </section>
    <section class="updates w-full py-16 bg-black text-white">
      <div class="content flex flex-col mx-auto gap-8">
        <div class="header flex flex-col gap-1 text-white ml-[7.5%]">
          <h2 class="font-montserrat">Weekly <span class="text-secondaryGreen">Updates</span></h2>
          <h4>Get first hand updates with your deputy speaker</h4>
        </div>
        <Slider speed="fast" direction="right"
          class="scroller w-full my-8 flex gap-8 overflow-x-auto"
        >
          <img
            src="/images/weekly_review/weekly_review_23_march.webp"
            alt="weekly review"
            class="w-full md:w-1/3 object-contain flex-shrink-0"
          />
          <img
            src="/images/weekly_review/weekly_review_23_march.webp"
            alt="weekly review"
            class="w-full md:w-1/3 object-contain flex-shrink-0"
          />
          <img
            src="/images/weekly_review/weekly_review_23_march.webp"
            alt="weekly review"
            class="w-full md:w-1/3 object-contain flex-shrink-0"
          />
          <img
            src="/images/weekly_review/weekly_review_23_march.webp"
            alt="weekly review"
            class="w-full md:w-1/3 object-contain flex-shrink-0"
          />
        </Slider>
      </div>
    </section>
    <section class="py-8 w-[90%] md:w-[92.5%] mx-auto md:py-12 lg:py-20 bg-light">
      <h3 class="font-montserrat text-2xl">Constitutional Review News and Updates</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6 my-4 
        md:my-6 lg:my-8"
      >
        <div
          v-for="news in newsItems"
          :key="news.id"
          class="bg-white shadow-sm p4 md:p-6 hover:shadow-lg transition-shadow border-t-4 
          border-borderMuted shrink-0"
        >
          <div class="mb-6 flex flex-col gap-2 md:gap-4 lg:gap-8 justify-between">
            <h4 class="text-sm font-medium mb-4 font-montserrat">{{ news.category }}</h4>
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
    </section>
  </main>
</template>

<script lang="ts" setup>
import Slider from '~/components/sections/Slider.vue';

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
const newsData = [
  {
    attributes: {
      title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
      description: 'In a statement issued on Monday by Levinus Nwabughiogu, Chief Press Secretary to...',
      date: '2026-01-21',
      image_url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444188/benjaminkalu/vnwf9rdndxsrel6rfpwr.png',
      main_image: {
        data: {
          attributes: {
            url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444188/benjaminkalu/vnwf9rdndxsrel6rfpwr.png',
          },
        },
      },
    },
  },
  {
    attributes: {
      title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
      description: 'Deputy Speaker, House of Representatives, Hon. Benjamin Kalu disclosed a $200 million...',
      date: '2025-12-12',
      image_url: '/images/home/peace_fund.png',
      main_image: {
        data: {
          attributes: {
            url: '/images/home/peace_fund.png',
          },
        },
      },
    },
  },
  {
    attributes: {
      title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
      description: 'Addressing the special session of the ongoing...',
      date: '2025-11-24',
      image_url: '/images/home/north_fund.png',
      main_image: {
        data: {
          attributes: {
            url: '/images/home/north_fund.png',
          },
        },
      },
    },
  },
  {
    attributes: {
      title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
      description: 'Addressing the special session of the ongoing...',
      date: '2025-12-14',
      image_url: '/images/home/north_fund.png',
      main_image: {
        data: {
          attributes: {
            url: '/images/home/north_fund.png',
          },
        },
      },
    },
  },
  {
    attributes: {
      title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
      description: 'In a statement issued on Monday by Levinus Nwabughiogu, Chief Press Secretary to...',
      date: '2026-01-21',
      image_url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444188/benjaminkalu/vnwf9rdndxsrel6rfpwr.png',
      main_image: {
        data: {
          attributes: {
            url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444188/benjaminkalu/vnwf9rdndxsrel6rfpwr.png',
          },
        },
      },
    },
  },
  {
    attributes: {
      title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
      description: 'Deputy Speaker, House of Representatives, Hon. Benjamin Kalu disclosed a $200 million...',
      date: '2025-12-12',
      image_url: '/images/home/peace_fund.png',
      main_image: {
        data: {
          attributes: {
            url: '/images/home/peace_fund.png',
          },
        },
      },
    },
  },
  {
    attributes: {
      title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
      description: 'Addressing the special session of the ongoing...',
      date: '2025-11-24',
      image_url: '/images/home/north_fund.png',
      main_image: {
        data: {
          attributes: {
            url: '/images/home/north_fund.png',
          },
        },
      },
    },
  },
  {
    attributes: {
      title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
      description: 'Addressing the special session of the ongoing...',
      date: '2025-12-14',
      image_url: '/images/home/north_fund.png',
      main_image: {
        data: {
          attributes: {
            url: '/images/home/north_fund.png',
          },
        },
      },
    },
  },
  {
    attributes: {
      title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
      description: 'In a statement issued on Monday by Levinus Nwabughiogu, Chief Press Secretary to...',
      date: '2026-01-21',
      image_url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444188/benjaminkalu/vnwf9rdndxsrel6rfpwr.png',
      main_image: {
        data: {
          attributes: {
            url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444188/benjaminkalu/vnwf9rdndxsrel6rfpwr.png',
          },
        },
      },
    },
  },
  {
    attributes: {
      title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
      description: 'Deputy Speaker, House of Representatives, Hon. Benjamin Kalu disclosed a $200 million...',
      date: '2025-12-12',
      image_url: '/images/home/peace_fund.png',
      main_image: {
        data: {
          attributes: {
            url: '/images/home/peace_fund.png',
          },
        },
      },
    },
  },
  {
    attributes: {
      title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
      description: 'Addressing the special session of the ongoing...',
      date: '2025-11-24',
      image_url: '/images/home/north_fund.png',
      main_image: {
        data: {
          attributes: {
            url: '/images/home/north_fund.png',
          },
        },
      },
    },
  },
  {
    attributes: {
      title: 'NELFUN: Kalu Assures Inclusion Of Southeast Students In FG Loan Scheme',
      description: 'Addressing the special session of the ongoing...',
      date: '2025-12-14',
      image_url: '/images/home/north_fund.png',
      main_image: {
        data: {
          attributes: {
            url: '/images/home/north_fund.png',
          },
        },
      },
    },
  },
];
const publications = [
  {
    id: 1,
    image: '/images/about/publication_1.png'
  },
  {
    id: 2,
    image: '/images/about/publication_2.png'
  },
  {
    id: 3,
    image: '/images/about/publication_3.png'
  },
  {
    id: 4,
    image: '/images/about/publication_1.png'
  },
]

const media = [
  {
    video: '/',
    video_thumbail: '/images/about/thumbnail.jpg',
    title: '25 years of Sustained Democracy: Nigeria on Path of greatness',
    media_type: 'speech',
  },
  {
    video: '/',
    video_thumbail: '/images/about/thumbnail.jpg',
    title: '25 years of Sustained Democracy: Nigeria on Path of greatness',
    media_type: 'speech',
  },
  {
    video: '/',
    video_thumbail: '/images/about/thumbnail.jpg',
    title: '25 years of Sustained Democracy: Nigeria on Path of greatness',
    media_type: 'speech',
  },
  {
    video: '/',
    video_thumbail: '/images/about/thumbnail.jpg',
    title: '25 years of Sustained Democracy: Nigeria on Path of greatness',
    media_type: 'speech',
  },
  {
    video: '/',
    video_thumbail: '/images/about/thumbnail.jpg',
    title: '25 years of Sustained Democracy: Nigeria on Path of greatness',
    media_type: 'speech',
  },
  {
    video: '/',
    video_thumbail: '/images/about/thumbnail.jpg',
    title: '25 years of Sustained Democracy: Nigeria on Path of greatness',
    media_type: 'speech',
  },
]
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
