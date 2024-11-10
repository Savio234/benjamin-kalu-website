<template>
  <main class="flex flex-col w-full bg-light">
    <section class="w-full h-[70vh] bg-primaryGreen flex flex-col sm:flex-row items-center">
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
            <h1 class="text-3xl md:text-6xl font-semibold drop-shadow-md font-montserrat">About Benjamin Kalu</h1>
          </div>
          <SwiperSlide v-for="image in images" :key="image.id">
            <div class="absolute inset-0 bg-black opacity-10"></div>
            <NuxtImg :src="image.url" class="w-full h-[70vh] object-cover" format="webp" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <section class="w-full py-16">
      <div class="content flex flex-col w-[85%] gap-4 mx-auto">
        <div class="border border-borderMuted rounded-full py-1 px-2 flex items-center gap-2 w-fit">
          <svg-icon name="person_icon" width="1.25rem" height="1.25rem" />
          <p class="text-primaryGreen font-semibold text-lg">Who is Benjamin Kalu ?</p>
        </div>
        <div class="w-full flex items-stretch">
          <p class="text-lg">
            ‘The oracle' as he is fondly called, Rt. Hon. Benjamin Okezie Kalu is a prominent Nigerian Legislator
            currently serving as the Deputy Speaker of the 10th Federal House of Representatives, National Assembly of
            Nigeria. A former Spokesperson and Chairman, House Committee on Media and Public Affairs for the 9th House,
            Kalu brings several years of cognate experience as an accomplished leader and member of parliament in
            helping nurture the Nigerian Dream. 
          </p>
        </div>
        <div class="w-full flex items-stretch">
          <p class="text-lg">
            An astute lawyer and accomplished businessman, Kalu’s current stint at the National Parliament is on account
            of the constituents he so dutifully represents—the Bende Federal Constituency of Abia State. In this regard,
            his commitment to contributing to the development of the people of Bende through legislative processes,
            project implementation, and manpower development remains and has remained unparalleled and undeterred over
            the years.
          </p>
        </div>
        <div class="w-full sm:my-8 my-8 md:my-16 h-auto sm:h-screen">
          <NuxtImg
            class="w-full h-full object-cover rounded-xl"
            src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544617/benjamin_kalu/new_image_touring_two_kea4nk.png"
          />
        </div>
        <div class="border border-borderMuted rounded-full py-1 px-2 flex items-center gap-2 w-fit">
          <svg-icon name="education" width="1.25rem" height="1.25rem" />
          <p class="text-primaryGreen font-semibold text-lg">Education</p>
        </div>
        <div class="content w-full flex flex-col gap-8 text-justify text-lg">
          <p class="text-lg">
            Rt. Hon. Kalu boasts an impressive academic and professional trajectory. Amongst his many qualifications, he
            holds Bachelor of Laws (LL.B) and Master of Laws (LL.M) degrees from the University of Calabar, Nigeria; a
            Master of Business Administration (MBA) from Oxford Brookes University; a diploma in International
            Commercial Arbitration from the University of Oxford, UK; as well as an LL.M in Petroleum Taxation and
            Finance from the University of Dundee, Scotland.
          </p>
          <p class="text-lg">
            He also holds several certifications from reputable and globally acclaimed institutions such as John Cabot
            University, Italy (Migration and Human Rights); the University of Groningen, Netherlands (Illicit Trade);
            the Miami Herbert Business School, USA (Governance & Development); and the UNICRI, Italy (Environmental
            Crimes).
          </p>
          <p class="text-lg">
            His fellowships with prestigious organisations like OSHAssociation UK, Chartered Institute of Arbitration,
            UK, Nigerian Bar Association, and the Institute of Administrative Managers highlight his sheer dedication to
            professional excellence.
          </p>
        </div>
      </div>
      <div class="w-full my-8 md:my-20 h-[60vh]">
        <NuxtImg
          class="w-full h-full object-cover"
          src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717575150/benjamin_kalu/ben_gown_shpzn6.png"
        />
      </div>
      <SectionsAbout
        primaryText="Legislative Contributions"
        :textContent="legislativeContributions"
        imageSrc="/images/about/legislative_contributions.png"
        imagePosition="right"
      />
      <SectionsAbout
        primaryText="Foreign Parliament Engagement"
        :textContent="foreignParliamentEngagement"
        imageSrc="/images/about/foreign_parliament_engagement.png"
        imagePosition="left"
        imageHeight="50vh"
        textJustify="justify-center"
      />
      <SectionsAbout
        primaryText="Civic & Social Responsibility"
        :textContent="csr"
        imageSrc="/images/about/csr.png"
        imagePosition="right"
        imageHeight="50vh"
        textJustify="justify-center"
      />
      <SectionsAbout
        primaryText="Constituency Engagements"
        :textContent="constituencyEngagements"
        imageSrc="/images/about/constituency_engagements.webp"
        imagePosition="left"
        imageHeight="100vh"
        textJustify="justify-start"
      />
    </section>
    <section>
      <SectionsTestimonial />
    </section>
    <section class="full py-16 border-borderMuted">
      <div class="flex flex-col text-center gap-4 mx-auto w-[90%]">
        <h3 class="font-semibold">Awards & Recognition</h3>
        <p class="text-md text-gray font-montserrat mb-4">
          Rt. Hon Kalu’s outstanding service has earned him numerous awards, including
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 text-left">
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
  {
    id: 2,
    url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444053/benjaminkalu/qdprrztr0ptvdgjjdrw7.png',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444092/benjaminkalu/ywwwtly9476xbhdhkawd.png',
  },
  {
    id: 4,
    url: 'https://res.cloudinary.com/dokuicrun/image/upload/v1730444186/benjaminkalu/zrdehjtzgk2se2dohdoa.png',
  },
]);
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717431103/benjamin_kalu/noise_c6ebjt.png');
  background-size: cover;
}
</style>
