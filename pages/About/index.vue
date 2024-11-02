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
            <h1 class="text-3xl sm:text-6xl font-extrabold drop-shadow-md">About Benjamin Kalu</h1>
          </div>
          <SwiperSlide v-for="image in images" :key="image.id">
            <div class="absolute inset-0 bg-black opacity-10"></div>
            <NuxtImg :src="image.url" class="w-full h-[70vh]" format="webp" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <section class="w-full py-16">
      <div class="content flex flex-col w-[85%] gap-4 mx-auto">
        <div class="border border-borderMuted rounded-full py-1 px-2 flex items-center gap-2 w-fit">
          <svg-icon name="person_icon" width="1.25rem" height="1.25rem" />
          <p class="text-primaryGreen font-bold">Who is Benjamin Kalu ?</p>
        </div>
        <div class="w-full flex items-stretch">
          <p class="text-lg" style="font-family: 'Inter', sans-serif">
            ‘The oracle' as he is fondly called, Rt. Hon. Benjamin Okezie Kalu is a prominent Nigerian Legislator
            currently serving as the Deputy Speaker of the 10th Federal House of Representatives, National Assembly of
            Nigeria. A former Spokesperson and Chairman, House Committee on Media and Public Affairs for the 9th House,
            Kalu brings several years of cognate experience as an accomplished leader and member of parliament in
            helping nurture the Nigerian Dream. 
          </p>
        </div>
        <div class="w-full flex items-stretch">
          <p class="text-lg" style="font-family: 'Inter', sans-serif">
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
          <p class="text-primaryGreen font-bold">Education</p>
        </div>
        <div
          class="content w-full sm:w-8/12 flex flex-col gap-2 items-stretch text-lg"
          style="font-family: 'Inter', sans-serif !important"
        >
          <p class="text-lg">
            Rt. Hon Kalu boasts an impressive academic and professional trajectory. He holds a Master of Business
            Administration from Oxford Brookes University and a Bachelor of Law LL.B (Hons) from the University of
            Calabar. Called to the Nigerian Bar after his studies at the Nigeria Law School in Enugu, he has
            continuously enhanced his expertise through various certifications:
          </p>
          <ul class="list-disc pl-12">
            <li>Certificate in Migration and Human Rights from John Cabot University, Italy</li>
            <li>Certificate in Illicit Trade from the University of Groningen, Netherlands</li>
            <li>Certificate in Governance & Development from Miami Herbert Business School, USA</li>
            <li>Certificate in Environmental Crimes from UNICRI, Italy</li>
            <li>Diploma in International Commercial Arbitration from CIARB, UK</li>
          </ul>
          <p class="text-lg">
            His fellowships with prestigious organizations like OSHAssociation UK, CIARB UK, Nigeria Bar Association,
            and the Institute of Administrative Managers highlight his dedication to professional excellence.
          </p>
        </div>
      </div>
      <div class="w-full flex flex-col gap-8">
        <div class="w-full my-8 h-[60vh]">
          <NuxtImg
            class="w-full h-full object-cover"
            src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717575150/benjamin_kalu/ben_gown_shpzn6.png"
          />
        </div>
        <div class="w-full flex flex-col sm:flex-row">
          <div class="text-sect w-full sm:w-7/12">
            <div class="mx-auto w-[90%] flex flex-col gap-4">
              <div class="border border-borderMuted rounded-full py-1 px-2 flex items-center gap-2 w-fit">
                <svg-icon name="person_icon" width="1.25rem" height="1.25rem" />
                <p class="text-primaryGreen font-medium">Legistlative Contribution</p>
              </div>
              <div
                class="flex flex-col gap-2 items-stretch text-lg"
                style="font-family: 'Inter', sans-serif !important"
              >
                <p class="text-lg">
                  Since 2019, Rt. Hon Kalu has been a dynamic member of the National Assembly. He has actively
                  participated in over 22 crucial motions, contributing to national development and public well-being.
                  Key areas of his legislative focus include:
                </p>
                <ul class="list-disc pl-12">
                  <li>Enviromental Protection</li>
                  <li>Investigating governmental agency failures</li>
                  <li>Promoting the welfare of Nigerians globally</li>
                </ul>
                <p class="text-lg">
                  With over 100 bills to his name, he has been instrumental to much needed amendments to national laws
                  principal of which include the Acts Authentication Act and the Nigerian Communications Act, to mention
                  a few. He has also, through legislative interventions, pioneered the creation of critical public
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
              </div>
            </div>
          </div>
          <div class="image-sect w-5/12 hidden sm:block">
            <NuxtImg
              src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717575954/benjamin_kalu/ben_speech_fjilfj.png"
              class="w-full h-[60vh] object-cover"
            />
          </div>
        </div>
        <div class="w-full flex flex-col-reverse sm:flex-row-reverse gap-8 items-center">
          <div class="text-sect w-full sm:w-7/12">
            <div class="mx-auto w-[90%] flex flex-col gap-4">
              <div class="border border-borderMuted rounded-full py-1 px-2 flex items-center gap-2 w-fit">
                <svg-icon name="person_icon" width="1.25rem" height="1.25rem" />
                <p class="text-primaryGreen font-medium">Humanitarian & Community engagement</p>
              </div>
              <div
                class="flex flex-col gap-2 items-stretch text-lg"
                style="font-family: 'Inter', sans-serif !important"
              >
                <p class="text-lg">
                  Rt. Hon Kalu’s commitment to society extends beyond politics. He founded the Benjamin Kalu Foundation,
                  focusing on empowering youth, women, and people with disabilities. His role in the Sudan Darfur
                  Project with the UNHCR and the Peace in the South East Project showcases his dedication to
                  humanitarian and peace initiatives.
                </p>
              </div>
            </div>
          </div>
          <div class="image-sect w-full sm:w-5/12 hidden sm:block">
            <NuxtImg
              src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717575954/benjamin_kalu/ben_speech_fjilfj.png"
              class="w-full h-[60vh] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="full py-16 border-t border-borderMuted">
      <div class="flex flex-col text-center gap-4 mx-auto w-[90%]">
        <h3 class="font-semibold">Awards & Recognition</h3>
        <p class="text-lg text-gray font-medium">
          Rt. Hon Kalu’s outstanding service has earned him numerous awards, including
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 text-left">
          <CardAward
            image-url="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718144898/benjamin_kalu/gown_address_tdycbo.png"
            title="Award for Outstanding Legislative Contribution towards Improved TB policy and Funding"
          />
          <CardAward
            image-url="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718144898/benjamin_kalu/native_address_hgfuaj.png"
            title="Zik’s Award of Excellence on Civic Engagement"
          />
          <CardAward
            image-url="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718143861/benjamin_kalu/ben_native_sitting_olqmvq.png"
            title="Independent Newspapers’ South East and Abia State Federal Lawmaker of the year Award"
          />
          <CardAward
            image-url="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718143860/benjamin_kalu/ben_speaker_sitting_xucsh8.png"
            title="Abia State Most Outstanding Federal Legislator"
          />
          <CardAward
            image-url="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718143860/benjamin_kalu/ben_closeup_bnxiha.png"
            title="Democracy Heroes Award Africa As The Most Outstanding Rep. Member of the Year"
          />
          <CardAward
            image-url="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718143860/benjamin_kalu/ben_closeup_bnxiha.png"
            title="Nomination as Top Performer in Bills Sponsorship on MVP Hall of Fame"
          />
          <CardAward
            image-url="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718143860/benjamin_kalu/ben_closeup_bnxiha.png"
            title="Flo Icons Award for the Most Impactful Lawmaker of the Year"
          />
          <CardAward
            image-url="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718143860/benjamin_kalu/ben_closeup_bnxiha.png"
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
