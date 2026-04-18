<template>
  <main class="flex flex-col w-full bg-light">
    <!-- <section class="w-full h-[70vh] bg-primaryGreen flex flex-col sm:flex-row items-center">
      <div class="w-full relative">
        <Swiper
          class="w-full"
          :modules="[SwiperAutoplay, SwiperEffectFade, SwiperPagination]"
          :slides-per-view="1"
          :loop="true"
          :effect="'fade'"
          :fade-effect="{
            crossFade: true,
          }"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: true,
          }"
          :pagination="false"
        >
          <div class="absolute z-10 left-8 sm:left-24 top-1/2 -translate-y-1/2 text-white">
            <h1 class="text-3xl md:text-6xl font-semibold drop-shadow-md font-montserrat">
              About Benjamin Kalu
            </h1>
          </div>
          <SwiperSlide v-for="image in images" :key="image.id">
            <div class="absolute inset-0 bg-black opacity-10"></div>
            <NuxtImg :src="image.url" class="w-full h-[70vh] object-cover" format="webp" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section> -->
    <section class="about_hero w-full h-[75dvh] sm:h-[85dvh] flex justify-center">
      <div class="content mx-auto py-16 sm:py-0 w-[90%] flex h-full items-center">
        <div class="text-box relative top-[30%] sm:top-[20%] lg:top-[15%] w-full lg:w-10/12 
          flex flex-col text-white gap-2"
        >
          <p class="text-white font-adamina text-2xl sm:text-3xl sm:leading-10 font-normal 
            md:text-4xl md:leading-[2.875rem] lg:text-5xl lg:leading-[4rem]"
          >
            Rt. Hon. Benjamin <br />
            Okezie Kalu <br />
            Ph.D., LLD., CFR, <br />
          </p>
          <h1 class="font-bold font-montserrat leading-normal text-sm md:text-base">
            A NIGERIAN STATESMAN
          </h1>
          <p class="text-white font-montserrat leading-normal text-sm md:text-base 
            font-medium"
          >
            Bridging National Progress with Integrity and <br /> National Leadership
          </p>
        </div>
      </div>
    </section>
    <SectionsAboutQuotes :quotes="quotes" />
    <section class="w-full flex items-center justify-center md:h-[30rem] lg:h-[35rem] bg-[#146634]">
      <div class="w-[87%] md:w-[55%] pt-[3.25rem] pb-[3.25rem] md:pt-14 md:pb-12 lg:w-[42%] 
        lg:pt-[5.35rem] lg:pb-16"
      >
        <div class="relative h-24 w-24 mx-auto md:h-28 md:w-28 lg:w-[8.25rem] lg:h-[8.25rem]">
          <NuxtImg alt="image" class="w-full object-cover rounded-full h-full" 
            src="/images/about/bk_dp.png"
          />
        </div>
        <div class="mx-auto mt-5 md:mt-7 lg:mt-9">
          <p class="text-center text-white leading-6 text-xs lg:text-sm font-normal
            lg:leading-[1.625rem] font-adamina"
          >
            Rt. Hon. Benjamin Okezie Kalu, is a distinguished Nigerian statesman whose 
            leadership blends institutional mastery, policy depth, and transformative 
            service delivery. He currently serves as the Deputy Speaker of the 10th House of 
            Representatives, where he provides strategic legislative leadership, champions 
            constitutional reforms, and advances inclusive governance that aligns with 
            Nigeria’s democratic ideals and the aspirations of its people.
          </p>
        </div>
      </div>
    </section>
    <SectionsAboutLeadership />
    <section class="bg-[#022822] w-full">
      <div class="w-[92.5%] grid grid-cols-1 gap-8 md:gap-14 lg:gap-[5.625rem] items-center 
        md:grid-cols-2 md:items-start md:w-[90%] lg:w-[85%] py-[3.25rem] md:py-[5.5rem] lg:py-[6.25rem] 
        mx-auto"
      >
        <div class="order-2 pl-2 md:pl-0 md:order-1">
          <h3 class="mb-3 md:mb-4 lg:mb-6 font-adamina font-normal text-2xl 
            md:text-[2rem] md:leading-[3.25rem] text-[#FBEF92]"
          >
            A STATESMAN WITH A <br /> FORWARD-THINKING OUTLOOK
          </h3>
          <p class="text-sm text-white md:text-base">
            At his core, Rt. Hon. Benjamin Okezie Kalu is driven by vision; a vision that honors 
            Nigeria’s heritage while propelling it toward resilient governance, inclusive opportunity, 
            and democratic excellence. His leadership is defined by:<br />
            <ul class="mt-5 list-disc pl-6 md:pl-8">
              <li class="text-sm text-white md:text-base">
                Clarity of purpose
              </li>
              <li class="text-sm text-white md:text-base">
                Depth of engagement
              </li>
              <li class="text-sm text-white md:text-base">
                Commitment to impact
              </li>
              <li class="text-sm text-white md:text-base">
                Stewardship rooted in integrity
              </li>
            </ul>
          </p>
          <p class="text-sm mt-5 text-white md:text-base">
            He leads not just with authority, but with accountability, ensuring that every policy, 
            partnership, and initiative reflects the trust placed in his office.
          </p>
        </div>
        <div class="order-1 mx-auto relative w-56 h-[14.5rem] md:w-[22rem] md:h-[22.75rem] lg:w-[27rem] 
          lg:h-[27.75rem] md:order-2"
        >
          <NuxtImg alt="statesman_icon" src="/svgs/about/statesman_icon.svg" class="h-full w-full" />
        </div>
      </div>
    </section>
    <SectionsRoadMap :roadmap="roadmap" />
    <section class="full py-14 md:py-20 lg:py-28 border-borderMuted">
      <div class="flex flex-col text-center gap-4 mx-auto w-[91%] md:w-[90%] lg:w-[85%]">
        <h3 class="font-semibold">Awards & Recognition</h3>
        <p class="text-md text-gray font-montserrat mb-4">
          Rt. Hon Kalu’s outstanding service has earned him numerous awards, including
        </p>
        <ManualSlider :step="22.5">
          <CardAward class="w-1/5 md:w-1/3 lg:w-1/4"
            image-url="/images/awards_and_recognition/legislative_contributions.png"
            title="Award for Outstanding Legislative Contribution towards Improved TB policy and Funding"
          />
          <CardAward class="w-1/5 md:w-1/3 lg:w-1/4"
            image-url="/images/awards_and_recognition/excellence_on_civic_engagement.png"
            title="Zik’s Award of Excellence on Civic Engagement"
          />
          <CardAward class="w-1/5 md:w-1/3 lg:w-1/4"
            image-url="/images/awards_and_recognition/independent_newspapers.png"
            title="Independent Newspapers’ South East and Abia State Federal Lawmaker of the year Award"
          />
          <CardAward class="w-1/5 md:w-1/3 lg:w-1/4"
            image-url="/images/awards_and_recognition/abia_most_outstanding_federal_legislator.png"
            title="Abia State Most Outstanding Federal Legislator"
          />
          <CardAward class="w-1/5 md:w-1/3 lg:w-1/4"
            image-url="/images/awards_and_recognition/democracy_heroes.png"
            title="Democracy Heroes Award Africa As The Most Outstanding Rep. Member of the Year"
          />
          <CardAward class="w-1/5 md:w-1/3 lg:w-1/4"
            image-url="/images/awards_and_recognition/top_performer_in_bill_sponsorship.png"
            title="Nomination as Top Performer in Bills Sponsorship on MVP Hall of Fame"
          />
          <CardAward class="w-1/5 md:w-1/3 lg:w-1/4"
            image-url="/images/awards_and_recognition/flo_icons_awards.png"
            title="Flo Icons Award for the Most Impactful Lawmaker of the Year"
          />
          <CardAward class="w-1/5 md:w-1/3 lg:w-1/4"
            image-url="/images/awards_and_recognition/nuj_model_of_media.png"
            title="National Union of Journalists ‘Model of Media and Public Relation Matters’ Award"
          />
        </ManualSlider>
      </div>
    </section>
    <section class="w-full py-14 md:py-20 lg:py-28 bg-white">
      <div class="w-[92.5%] mx-auto md:w-[90%] lg:w-[85%]">
        <div class="w-full flex items-center justify-between">
          <h1 class="text-center text-[#022924] text-[2rem] md:text-4xl lg:text-5xl">
            Publications
          </h1>
          <div class="flex cursor-pointer items-center gap-2"
            @click="$router.push(`/news#publications`)"
          >
            <p class="font-medium font-montserrat text-base md:text-lg text-[#146634]">
              See more
            </p>
            <div class="relative w-6 h-6">
              <NuxtImg alt="" src="/svgs/home/arrow.svg" class="w-full h-full" />
            </div>
          </div>
        </div>
        <SectionsPublications :publications="publications" />
      </div>
    </section>
    <section class="w-full pb-14 md:pb-20 lg:pb-28 bg-white">
      <div class="w-[92.5%] mx-auto md:w-[90%] lg:w-[85%]">
        <div class="w-full flex items-center justify-between">
          <h1 class="text-center text-[#022924] text-[2rem] md:text-4xl lg:text-5xl">
            Media
          </h1>
          <div class="flex cursor-pointer items-center gap-2"
            @click="$router.push(`/news#media`)"
          >
            <p class="font-medium font-montserrat text-base md:text-lg text-[#146634]">
              See more
            </p>
            <div class="relative w-6 h-6">
              <NuxtImg alt="" src="/svgs/home/arrow.svg" class="w-full h-full" />
            </div>
          </div>
        </div>
        <SectionsAboutMedia :media="media" />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
// import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';
import ManualSlider from '~/components/sections/ManualSlider.vue';

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
  // {
  //   id: 4,
  //   image: '/images/about/publication_1.png'
  // },
  // {
  //   id: 5,
  //   image: '/images/about/publication_2.png'
  // },
  // {
  //   id: 6,
  //   image: '/images/about/publication_2.png'
  // },
]

const media = [
  {
    id: 1,
    video: '/',
    video_thumbail: '/images/about/thumbnail.jpg',
    title: '25 years of Sustained Democracy: Nigeria on Path of greatness',
    media_type: 'speech',
  },
  {
    id: 2,
    video: '/',
    video_thumbail: '/images/about/thumbnail.jpg',
    title: '25 years of Sustained Democracy: Nigeria on Path of greatness',
    media_type: 'speech',
  },
  {
    id: 3,
    video: '/',
    video_thumbail: '/images/about/thumbnail.jpg',
    title: '25 years of Sustained Democracy: Nigeria on Path of greatness',
    media_type: 'speech',
  },
  {
    id: 4,
    video: '/',
    video_thumbail: '/images/about/thumbnail.jpg',
    title: '25 years of Sustained Democracy: Nigeria on Path of greatness',
    media_type: 'speech',
  },
]

const quotes = [
  `Everything changes the moment you stop asking how to feel motivated and start asking what 
  must be done regardless of how you feel. Discipline isn't intensity, it's agreement with 
  your future self that today doesn't get a vote.`,
  `Most people are tired not because they’re doing too much, but because they’re doing too 
  many meaningless things. Focus isn’t about adding effort; it’s about removing noise until 
  only what moves the needle is left.`,
  `Talent gives you entry, consistency gives you leverage, and systems give you freedom. If 
  your progress collapses the moment your mood changes, you don’t have a strategy, you have 
  a fantasy.`,
  `Busyness is the most socially acceptable form of avoidance. Real progress looks boring, 
  repetitive, and unimpressive from the outside, but it compounds quietly while others chase 
  visible motion.`,
  `The gap between where you are and where you want to be is rarely knowledge. It’s execution. 
  And execution is simply the courage to do the same right things long after the excitement 
  has expired.`,
]
const roadmap = ref([
  [
    {
      title: `Deputy Speaker, House of Representative`,
      body: `Federal Republic of Nigeria`,
      date: `June 2023 - Present`
    },
    {
      title: `Member, House of Representatives`,
      body: `Bende Federal Constituency, Abia State`,
      date: ` June 2019 - Present`
    },
    {
      title: `Chairman, House Committee on Constitutional Amendments`,
      body: `Federal Republic of Nigeria`,
      date: `June 2023 - Present`
    },
    {
      title: `Chairman, House Committee of the Whole`,
      body: `House of Representatives, National Assembly`,
      date: `2023 - 2027`
    },
    {
      title: `Chairman, House Committee on Media & Public Affairs`,
      body: `House of Representatives, National Assembly`,
      date: `June 2023 - Present`
    },
    {
      title: `Chairman, House Committee on Media & Public Affairs`,
      body: `House of Representatives, National Assembly`,
      date: `2019 - 2023`
    },
    {
      title: `Local Government Chairman (Transition)`,
      body: `Bende Local Government Area, Abia State`,
      date: `June 2003 - December 2004`
    },
  ],
  [
    {
      title: `Chairman, Finance & Administration Committee`,
      body: `ECOWAS Parliament`,
      date: `2025 - Present`
    },
    {
      title: `Chairman, Committee on Finance & Monitoring`,
      body: `African Union Pan-African Parliament (PAP)`,
      date: `2025 - Present`
    },
    {
      title: `Steering Committee Member`,
      body: `Inter-Parliamentary Union (IPU) - WTO Committee`,
      date: `2025 - Present`
    },
  ],
  [
    {
      title: `Doctor of Philosophy (Ph.D.) in Law (Distinction)`,
      body: `University of Calabar, Nigeria`,
      date: `December 2025`
    },
    {
      title: `Doctor of Philosophy (Ph.D.) in Public Policy & Strategic Studies (Distinction)`,
      body: `University of Abuja, Nigeria`,
      date: `August 2025`
    },
    {
      title: `Master of Laws (LL.M) in Terrorism & International Humanitarian Law (Distinction)`,
      body: `University of Calabar, Nigeria`,
      date: `2023`
    },
    {
      title: `Master of Business Administration (MBA)`,
      body: `Oxford Brookes University, Oxford, United Kingdom`,
      date: `April 2006`
    },
    {
      title: `Bachelor of Laws (LL.B Hons.)`,
      body: `University of Calabar, Nigeria`,
      date: `October 1998`
    },
  ],
  [
    {
      title: `Leadership for the 21st Century - Executive Certificate Program`,
      body: `John F. Kennedy School of Government, Harvard University, USA`,
      date: `September 2025`
    },
    {
      title: `Certificate in Governance & Development`,
      body: `Miami Herbert Business School, University of Miami, USA`,
      date: `2022`
    },
    {
      title: `Certificate in Illicit Trade`,
      body: `University of Groningen, Netherlands`,
      date: `2022`
    },
    {
      title: `Diploma in International Commercial Arbitration`,
      body: `Chartered Institute of Arbitrators (CIArb), United Kingdom (University of Oxford)`,
      date: `2014`
    },
    {
      title: `Certificate IV in Property Services (Real Estate)`,
      body: `Leverage Academy, Sydney, Australia`,
      date: `2019`
    },
  ],
])

const csr = `
 <p class="text-lg">
  Rt. Hon. Kalu's commitment to society extends beyond politics. For the past 20 years, he has been actively empowering his constituents through various initiatives. He founded the Benjamin Kalu Foundation, focusing on empowering youth, women, and people with disabilities.
  </p>
  <p class="text-lg">
  His role in the Sudan Darfur Project with the UNHCR and the Peace in the South East Project showcases his dedication to humanitarian and peace initiatives.
  </p>
`;

const constituencyEngagements = `
  <p class="text-lg">
    Communication has proven to be an effective way to sustain accountability in leadership. To achieve this, Kalu launched a weekly TV and Radio program tagged <b>‘BEN KALU’S MANDATE’</b>. 
  </p>
  <p class="text-lg">
  The program affords the people of Bende and Abia State the opportunity to follow the notable and impactful activities of Hon. Kalu that happened in the preceding week. Valuable information around his legislative activities, oversight functions and constituency projects are shared and discussed at length in line with his commitment to carrying his constituents along every step of the way. 
  </p>
  <p class="text-lg">
  <b>BEN KALU’S MANDATE</b> has served and continues to serve as a feedback tool, providing the opportunity to feel the pulse of Bende people through calls and text messages on issues concerning the Constituency.
  </p>
  <p class="text-lg">
  The programme is held every Monday on Flo FM, Real FM, Vision Africa and ABN TV from 11:00am to 12:00pm, and has in the last one year garnered over 1 million listeners from Abia State and beyond, with over 20 calls and 24 text messages coming in on the show every single week.
  </p>
`;

const images = ref([
  {
    id: 0,
    url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444071/benjaminkalu/km5ubmxqna8sxz0sheme.png',
  },
  {
    id: 1,
    url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444188/benjaminkalu/vnwf9rdndxsrel6rfpwr.png',
  },
  // {
  //   id: 2,
  //   url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444053/benjaminkalu/qdprrztr0ptvdgjjdrw7.png',
  // },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444092/benjaminkalu/ywwwtly9476xbhdhkawd.png',
  },
  // {
  //   id: 4,
  //   url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444186/benjaminkalu/zrdehjtzgk2se2dohdoa.png',
  // },
]);
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717431103/benjamin_kalu/noise_c6ebjt.png');
  background-size: cover;
}
.about_hero {
  background-image: url('/public/images/about/about_hero.png');
  background-color: #14663433;
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 0%;
}
</style>
