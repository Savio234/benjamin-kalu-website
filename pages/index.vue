<template>
  <main class="flex flex-col w-full">
    <section class="hero w-full h-auto sm:h-[85dvh] bg-black flex justify-center">
      <div class="content mx-auto py-16 sm:py-0 w-[85%] flex h-full items-center">
        <div class="text-box w-full lg:w-10/12 flex flex-col text-white gap-2">
          <p class="text-white">Welcome to the Official website of</p>
          <h1 class="font-semibold text-[48px] sm:text-[64px]">Rt. Hon. Benjamin Kalu</h1>
          <p class="text-white">
            Deputy Speaker, 10th House Of Representatives, <br/>Federal Republic of Nigeria
          </p>
        </div>
      </div>
    </section>
    <section class="w-full py-16 text-center flex flex-col">
      <div class="content mx-auto w-[85%] flex flex-col gap-2 items-center">
        <h2 class="text-black font-semibold">About <span class="text-secondaryGreen">Benjamin Kalu</span></h2>
        <p class="w-full sm:w-8/12 mx-auto text-xl mb-4">
          A refined legislator, Rep. Benjamin Okezie Kalu embodies the Nigerian spirit. With a sterling career 
          as an international businessman and legal practitioner, Kalu's journey in Nigerian politics propelled 
          him to the 6th highest political office in the nation, emerging as the Deputy Speaker of the 10th House 
          of Representatives in June 2023. He has continued to serve the people of Bende Federal Constituency and the nation at large.
        </p>
        <!-- <MainButton @click="$router.push('/about')">Learn more about Rep. Benjamin Kalu</MainButton> -->
        <MainButton> Learn more about Rep. Benjamin Kalu</MainButton>
        <div class="mt-12 w-full h-auto">
          <!-- <NuxtImg
            class="w-full h-full object-cover rounded-xl"
            src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717431106/benjamin_kalu/home_image_c8fyfy.png"
            format="webp"
          /> -->
          <Swiper
            class="w-full rounded-3xl"
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: true,
            }"
            :pagination="true"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
          >
            <SwiperSlide v-for="image in images" :key="image.id">
              <NuxtImg :src="image.url" class="w-full rounded-3xl h-auto" format="webp" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
    <section class="updates w-full py-16 bg-black text-white relative">
      <NuxtImg
        src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717433017/benjamin_kalu/vector_left_lfn7hu.png"
        class="img-one absolute top-1/2 left-0"
      />
      <NuxtImg
        src="https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717433017/benjamin_kalu/vector_right_rjtxb2.png"
        class="img-one absolute top-1/2 right-0"
      />
      <div class="content flex flex-col mx-auto w-[85%] gap-8">
        <div class="header flex flex-col gap-1 text-white">
          <h2>Weekly <span class="text-primaryGreen">updates</span></h2>
          <h4>Get first hand updates with your deputy speaker</h4>
        </div>
        <div class="relative w-full h-auto mt-4">
          <embed
            src="https://res.cloudinary.com/dokuicrun/image/upload/v1728314201/benjaminkalu/xwn1pmifgrt27hodobxc.pdf#toolbar=0&view=FitH"
            class="w-full h-auto sm:h-[200vh] rounded-xl"
            width="100%"
          ></embed>
        </div>
        <NuxtLink to="https://res.cloudinary.com/dokuicrun/image/upload/v1728314201/benjaminkalu/xwn1pmifgrt27hodobxc.pdf" target="_blank" class="bg-white border-2 border-[#00A99133] w-fit h-fit p-[1px] rounded-full self-end" append-icon="attachment-white"><div class="content bg-primaryGreen rounded-full py-3 px-6 text-white text-[16px] flex items-center gap-2">
     Download PDF
    </div></NuxtLink>
      </div>
    </section>
    <section class="legistlative py-16 bg-light w-full">
      <div class="content mx-auto w-[85%] flex flex-col gap-8">
        <div class="header w-full sm:w-8/12 flex flex-col gap-1">
          <h2 class="font-semibold">Legislative Affairs</h2>
          <p class="text-gray my-2 text-[16px] leading-[1.2] tracking-[0.4px]">
            As one of the leaders of the 10th House of Representatives (the Peoples’ House), Kalu wears the dual hats of Chairman, House Committees of the Whole and on Constitution Review. Keep track of Rep. Kalu’s Legislative Agenda, bills and motions as well as the Constitutional Review activities of the 10th House..
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <!-- legistlative grid -->
          <CardLegistlative v-for="(item, index) in legistlativeItems" :key="index" :title="item.title" :description="item.description" :image="item.image_url" :route="item.route" />
        </div>
      </div>
    </section>
    <!-- <section class="bills py-16 w-full">
      <div class="content flex flex-col w-[85%] mx-auto gap-4">
        <div class="header w-full sm:w-6/12">
          <h2 class="font-semibold">Bills & Motions</h2>
          <h4 class="text-gray">
            Want to educate yourself on the bills and motions from the office of the deputy speaker? find a curated list
            here
          </h4>
        </div>
        <div class="w-full flex flex-col gap-8">
          <div class="img-holder w-full shadow-lg rounded-xl p-1">
            <NuxtImg
              src="https://res.cloudinary.com/damkhdi7d/image/upload/v1717482257/benjamin_kalu/ben_gravel_uactm9.png"
              class="w-full h-auto rounded-xl"
            />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 w-full gap-4">
            <div class="rounded-xl border border-borderMuted p-4 flex flex-col gap-4 cursor-pointer">
              <NuxtImg src="/images/person_icon.png" class="h-8 w-8 rounded-full" />
              <h4 class="font-semibold">Bills from the office of the deputy speaker</h4>
              <p>You can find all the bills from the office of the deputy speaker here</p>
            </div>
            <div class="rounded-xl border border-borderMuted p-4 flex flex-col gap-4 cursor-pointer">
              <NuxtImg src="/images/list_icon.png" class="h-8 w-8 rounded-full" />
              <h4 class="font-semibold">Motions from the Deputy Speaker</h4>
              <p>Find all motions from the office of the deputy Speaker</p>
            </div>
            <div class="rounded-xl border border-borderMuted p-4 flex flex-col gap-4 cursor-pointer">
              <NuxtImg src="/images/shop_icon.png" class="h-8 w-8 rounded-full" />
              <h4 class="font-semibold">Bill Progression Chart</h4>
              <p>Get real-time charts that help show the progression of the office of the deputy speaker</p>
            </div>
            <div class="rounded-xl border border-borderMuted p-4 flex flex-col gap-4 sm:col-span-3 cursor-pointer">
              <NuxtImg src="/images/building_icon.png" class="h-8 w-8 rounded-full" />
              <h4 class="font-semibold">House of Representative Bills</h4>
              <p>Find all the bills from past to present that has been passed by the house of representatives</p>
            </div>
          </div>
          <h5 class="text-primaryGreen flex underline cursor-pointer underline-offset-2" @click="$router.push('/bills')">See more</h5>
        </div>
      </div>
    </section> -->
    
    <SectionsFeaturedProject />
    <SectionsLatestNews />
    <section class="partners w-full py-16 bg-light">
      <div class="content flex ml-[7.5%] flex-col gap-16">
        <div class="w-full sm:w-8/12 flex flex-col gap-2">
          <h2 class="font-semibold">Development Partners</h2>
          <p class="text-gray my-2 text-[16px] leading-[1.2] tracking-[0.4px]">
            Meet our development partners who have key roles in helping to achieve sustainable human development in
            economic, social and environmental fronts
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
    <SectionsReview />
    <SectionsFaq/>
  </main>
</template>

<script setup>
const legistlativeItems = ref([
  {
    image_url: 'https://res.cloudinary.com/damkhdi7d/image/upload/v1718564832/benjamin_kalu/ben_walkup_oqxlhe.jpg',
    title: 'Kalu’s Legislative Mission',
    description: 'Emboldened by his unrelenting quest for societal impact, BOK as he is fondly called, takes his “value” mantra all the way to national parliament.',
    route: '/legislative'
  },
  {
    image_url: 'https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717588237/benjamin_kalu/house_meeting_ucqa7o.png',
    title: 'Bills and Motions',
    description: 'With over 100 legislative instruments in bills and motions, kalu’s commitment to inclusive growth through legislative interventions remains unparalleled',
    route: '/bills'
  },
  {
    image_url: 'https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718544619/benjamin_kalu/new_image_gravel_rlg38t.png',
    title: 'Constitutional Review',
    description: 'As Deputy Speaker, Kalu assumes the role of Chairman, House Committee on the Review of the Nigerian Constitution. Follow the activities of the Committee.',
    route: '/legislative/review'

  }
]);
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

<style lang="scss" scoped>
.hero {
  background-image: url('https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1718522641/benjamin_kalu/new_hero_fpgznb.png'),
    url('https://res.cloudinary.com/damkhdi7d/image/upload/f_auto/v1717431103/benjamin_kalu/noise_c6ebjt.png');
  background-color: #00000069;
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
