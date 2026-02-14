<template>
  <main class="flex flex-col w-full">
    <section class="hero w-full h-auto sm:h-[85dvh] bg-black flex justify-center">
      <div class="content mx-auto py-16 sm:py-0 w-[85%] flex h-full items-center">
        <div class="text-box w-full lg:w-10/12 flex flex-col text-white gap-2">
          <p class="text-white font-adamina text-2xl sm:text-3xl font-normal md:text-4xl lg:text-5xl">
            Rt. Hon. Benjamin <br />
            Okezie Kalu <br />
            Rt. Hon. Benjamin <br />
          </p>
          <h1 class="font-bold font-montserrat text-sm md:text-base">
            A NIGERIAN STATESMAN
          </h1>
          <p class="text-white font-montserrat text-sm md:text-base font-medium">
            Bridging National Progress with Integrity and <br /> National Leadership
          </p>
        </div>
      </div>
    </section>
    <SectionsHomeAbout />
    <SectionsStatesman id="statesman" />
    <section class="legistlative py-16 bg-light w-full">
      <div class="content mx-auto mt-2 md:mt-6 lg:mt-12 w-[90%] flex flex-col gap-8">
        <div class="flex items-center gap-4 overflow-x-scroll md:grid md:grid-cols-2 lg:grid-cols-4 
          md:gap-8"
        >
          <CardLegistlative
            v-for="(item, index) in legistlativeItems"
            :key="index"
            :title="item.title"
            :description="item.description"
            :image="item.image_url"
            :route="item.route"
          />
        </div>
      </div>
    </section>
    <SectionsStats />
  
    <!-- <SectionsFeaturedProject /> -->
    <SectionsLatestNews :news-data="newsData" />
    <section class="update py-12 flex items-center my-8 md:my-16 justify-center md:py-24 bg-light">
      <div class="mx-auto">
        <h1 class="text-white text-center mb-2 md:mb-4 font-adamina text-[2rem] md:text-4xl lg:text-5xl">
          Weekly Updates
        </h1>
        <p class="text-sm text-white text-center mb-4 md:text-base">
          Recieve Updates on BOK’s Activities
        </p>
        <div class="mx-auto w-fit">
          <MainButton @click="">Click to subscribe</MainButton>
        </div>
      </div>
    </section>
    <section class="partners w-full py-8 md:py-12 lg:py-16 bg-white">
      <div class="content flex ml-[7.5%] flex-col gap-16">
        <div class="w-full sm:w-8/12 flex flex-col gap-2">
          <h2 class="font-normal font-adamina">Partners</h2>
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
    <section class="w-full flex flex-col py-8 md:py-16 mt-2 md:mt-4 px-8 md:px-16 lg:px-24 md:gap-6 
      items-start lg:flex-row"
    >
      <div class="w-full lg:w-1/2">
        <SectionsReview />
      </div>
      <div class="w-full lg:w-1/2">
        <SectionsFaq />
      </div>
    </section>
  </main>
</template>

<script setup>
const legistlativeItems = ref([
  {
    image_url: '/images/home/bills_and_motions.png',
    title: 'Bills and Motions',
    description:
      `With over 120+ legislative instruments in bills and motions, kalu's commitment to inclusive 
      growth through legislative interventions remains unparalleled`,
    route: '/bills',
  },
  {
    image_url: '/images/constitution_review/card_image.png',
    title: 'Constitutional review',
    description: `With over 100 legislative instruments in bills and motions, kalu’s commitment to 
      inclusive growth through legislative interventions remains unparalleled`,
    route: '/legislative/review',
  },
  {
    image_url: '/images/home/constituency_projects.png',
    title: 'Constituency Projects',
    description: `The impact of Rt. Hon. Kalu's exemplary leadership and quality representation has 
      been felt across...`,
    route: '/projects',
  },
  {
    image_url: '/images/home/pisep.png',
    title: 'PISE-P',
    description: `Beyond the legislative chambers, Kalu launched the Peace in the South East Project 
      (PISE-P) in an effort to restore the region to its once illustrious past and  illuminating 
      glory...`,
    route: '/legislative/review',
  },
]);

const newsData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
];

const images = ref([
  {
    id: 0,
    url: 'https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544619/benjamin_kalu/new_image_gravel_rlg38t.png',
  },
  {
    id: 1,
    url: 'https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544617/benjamin_kalu/new_image_touring_two_kea4nk.png',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544624/benjamin_kalu/new_image_sitting_cyjh0x.png',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544599/benjamin_kalu/new_image_pisep_cmjxlb.png',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544611/benjamin_kalu/new_image_address_ygrinn.png',
  },
  {
    id: 5,
    url: 'https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544629/benjamin_kalu/new_image_office_jh5wtv.png',
  },
]);
</script>

<!-- background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718522641/benjamin_kalu/new_hero_fpgznb.png'),
  url('https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717431103/benjamin_kalu/noise_c6ebjt.png'); -->
<style lang="scss" scoped>
.hero {
  background-image: url('../public/images/home/bk_hero.svg');
  background-color: #00000069;
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}
.update {
  background-image: url('../public/images/home/tile.png');
  background-color: #022924;
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}
.updates {
  background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/v1717434396/benjamin_kalu/weekly_updates_background_q95czt.png'),
    url('https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717433021/benjamin_kalu/updates_noise_clx0wk.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.scroller {
  &::-webkit-scrollbar {
    width: 0px;
  }
}
</style>
