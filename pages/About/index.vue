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
    <section class="about_hero w-full h-auto sm:h-[85dvh] flex justify-center">
      <div class="content mx-auto py-16 sm:py-0 w-[90%] flex h-full items-center">
        <div class="text-box w-full lg:w-10/12 flex flex-col text-white gap-2">
          <p class="text-white font-adamina text-2xl sm:text-3xl font-normal md:text-4xl lg:text-5xl">
            Rt. Hon. Benjamin <br />
            Okezie Kalu <br />
            Ph.D., LLD., CFR, <br />
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
    <!-- <SectionsAboutQuotes :quotes="quotes" /> -->
    <div class="py-8 md:py-12 lg:py-16 bg-white"></div>
    <section class="w-full flex items-center justify-center md:h-[28rem] lg:h-[34rem] bg-[#146634]">
      <div class="max-w-[85%] md:max-w-4/5 pt-[3.25rem] pb-[3.25rem] md:pt-14 md:pb-7 lg:max-w-[70%] 
        lg:pt-[5.35rem] lg:pb-9"
      >
        <div class="relative h-24 w-24 mx-auto md:h-28 md:w-28 lg:w-[8.25rem] lg:h-[8.25rem]">
          <NuxtImg alt="image" class="w-full object-cover rounded-full h-full" 
            src="/images/about/bk_dp.png"
          />
        </div>
        <div class="mx-auto mt-5 md:mt-7 lg:mt-9">
          <p class="text-center text-white text-sm md:text-base font-normal font-adamina">
            Rt. Hon. Benjamin Okezie Kalu, is a distinguished Nigerian statesman whose leadership 
            blends institutional mastery, policy depth, and transformative service delivery. He 
            currently serves as the Deputy Speaker of the 10th House of Representatives, where he 
            provides strategic legislative leadership, champions constitutional reforms, and advances 
            inclusive governance that aligns with Nigeria’s democratic ideals and the aspirations of 
            its people.
          </p>
        </div>
      </div>
    </section>
    <SectionsAboutLeadership />
    
    <section class="bg-[#022822]  w-full">
      <div class="w-[92.5%] grid grid-cols-1 gap-8 md:gap-14 lg:gap-[5.625rem] items-center 
        md:grid-cols-2 md:items-start md:w-[85%] py-[3.25rem] md:py-[5.5rem] lg:py-[6.25rem] mx-auto"
      >
        <div class="order-2 pl-2 md:pl-0 md:order-1">
          <h3 class="mb-3 md:mb-4 lg:mb-6 font-adamina font-normal text-2xl md:text-[2rem] md:leading-10 
            text-[#FBEF92]"
          >
            A STATESMAN WITH A FORWARD-THINKING OUTLOOK
          </h3>
          <p class="text-sm text-white md:text-lg lg:text-xl">
            At his core, Rt. Hon. Benjamin Okezie Kalu is driven by vision; a vision that honors 
            Nigeria’s heritage while propelling it toward resilient governance, inclusive opportunity, 
            and democratic excellence. His leadership is defined by:<br />
            <ul class="mt-2 list-disc pl-6 md:pl-8">
              <li class="text-sm text-white md:text-lg lg:text-xl">
                Clarity of purpose
              </li>
              <li class="text-sm text-white md:text-lg lg:text-xl">
                Depth of engagement
              </li>
              <li class="text-sm text-white md:text-lg lg:text-xl">
                Commitment to impact
              </li>
              <li class="text-sm text-white md:text-lg lg:text-xl">
                Stewardship rooted in integrity
              </li>
            </ul>
          </p>
          <p class="text-sm text-white md:text-lg lg:text-xl">
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
    <section class="full py-16 border-borderMuted">
      <div class="flex flex-col text-center gap-4 mx-auto w-[90%]">
        <h3 class="font-semibold">Awards & Recognition</h3>
        <p class="text-md text-gray font-montserrat mb-4">
          Rt. Hon Kalu’s outstanding service has earned him numerous awards, including
        </p>
        <div class="flex items-start overflow-x-scroll md:overflow-x-hidden md:grid md:grid-cols-2
          lg:grid-cols-4 gap-4 text-left"
        >
          <CardAward
            image-url="/images/awards_and_recognition/legislative_contributions.png"
            title="Award for Outstanding Legislative Contribution towards Improved TB policy and Funding"
          />
          <CardAward
            image-url="/images/awards_and_recognition/excellence_on_civic_engagement.png"
            title="Zik’s Award of Excellence on Civic Engagement"
          />
          <CardAward
            image-url="/images/awards_and_recognition/independent_newspapers.png"
            title="Independent Newspapers’ South East and Abia State Federal Lawmaker of the year Award"
          />
          <CardAward
            image-url="/images/awards_and_recognition/abia_most_outstanding_federal_legislator.png"
            title="Abia State Most Outstanding Federal Legislator"
          />
          <CardAward
            image-url="/images/awards_and_recognition/democracy_heroes.png"
            title="Democracy Heroes Award Africa As The Most Outstanding Rep. Member of the Year"
          />
          <CardAward
            image-url="/images/awards_and_recognition/top_performer_in_bill_sponsorship.png"
            title="Nomination as Top Performer in Bills Sponsorship on MVP Hall of Fame"
          />
          <CardAward
            image-url="/images/awards_and_recognition/flo_icons_awards.png"
            title="Flo Icons Award for the Most Impactful Lawmaker of the Year"
          />
          <CardAward
            image-url="/images/awards_and_recognition/nuj_model_of_media.png"
            title="National Union of Journalists ‘Model of Media and Public Relation Matters’ Award"
          />
        </div>
      </div>
    </section>
    <SectionsPublications :publications="publications" />
    <SectionsAboutMedia :media="media" />
  </main>
</template>

<script lang="ts" setup>
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const legislativeContributions = `
      <p class="text-lg">
        Since 2019, Rt. Hon Kalu has been a dynamic member of the National Assembly. He has actively
        participated in over 22 crucial motions, contributing to national development and public well-being. Key
        areas of his legislative focus include:
      </p>
      <ul class="list-disc pl-12">
        <li>Environmental Protection</li>
        <li>Investigating governmental agency failures</li>
        <li>Promoting the welfare of Nigerians globally</li>
      </ul>
      <p class="text-lg">
        With over 100 bills to his name, he has been instrumental to much needed amendments to national laws
        principal of which include the Acts Authentication Act and the Nigerian Communications Act, to mention a
        few. He has also, through legislative interventions, pioneered the creation of critical public
        institutions such as the Federal Capital Territory Education Resource Centre.
      </p>
      <p class="text-lg">
        Having sponsored the bill for the establishment of the South-East Development Commission in the 10th
        House (a bill which has now been signed into law by the President of the Federal Republic of Nigeria),
        Kalu has remained committed to addressing the socio-economic and infrastructural deficits in the
        South-East.
      </p>
      <p class="text-lg">
        As Deputy Speaker of the 10th House of Representatives, Rt. Hon. Benjamin Kalu currently Chairs the
        House Committee on the review of the 1999 Constitution, as well as the House Committee of the Whole.
      </p>
`;

const foreignParliamentEngagement = `
  <p class="text-lg">
    Notable amongst his foreign parliamentary engagements is his membership of the African Union’s Pan African Parliament where he contributes his two cents serving under the specialised Committee on Finance and Administration.
  </p>
  <p class="text-lg">
    He is also a prominent member of the 6th ECOWAS Parliament where he co-leads the Nigerian delegation to the Parliament, while also serving as Chair of the Finance, Administration and Budget Committee.
  </p>
`;

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
  `Rt. Hon. Benjamin Okezie Kalu, is a distinguished Nigerian statesman whose leadership blends 
  institutional mastery, policy depth, and transformative service delivery. `,
  `Rt. Hon. Benjamin Okezie Kalu, is a distinguished Nigerian statesman whose leadership blends 
  institutional mastery, policy depth, and transformative service delivery. `,
  `Rt. Hon. Benjamin Okezie Kalu, is a distinguished Nigerian statesman whose leadership blends 
  institutional mastery, policy depth, and transformative service delivery. `,
  `Rt. Hon. Benjamin Okezie Kalu, is a distinguished Nigerian statesman whose leadership blends 
  institutional mastery, policy depth, and transformative service delivery. `,
  `Rt. Hon. Benjamin Okezie Kalu, is a distinguished Nigerian statesman whose leadership blends 
  institutional mastery, policy depth, and transformative service delivery. `,
  `Rt. Hon. Benjamin Okezie Kalu, is a distinguished Nigerian statesman whose leadership blends 
  institutional mastery, policy depth, and transformative service delivery. `,
]
const roadmap = [
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
    title: `Certificate in Environmental Crimes`,
    body: `United Nations Interregional Crime and Justice Research Institute (UNICRI), Italy`,
    date: `2022`
  },
  {
    title: `Certificate in Migration & Human Rights`,
    body: `John Cabot University, Rome, Italy`,
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
]

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
