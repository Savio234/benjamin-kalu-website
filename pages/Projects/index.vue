<template>
  <main class="flex w-full flex-col gap-4 mg:gap-8 lg:gap-12">
    <section class="py-16 bg-light mx-auto w-[92.5%] md:w-[90%]">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <h2 class="font-semibold text-xl md:text-2xl lg:text-[2rem]">
            Constituency Projects
          </h2>
          <p class="text-sm md:text-base">
            See the latest projects that we are up to and actively working on to better 
            improve our constituencies.
          </p>
        </div>

        <div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-11 gap-4">
          <!-- Left Column -->
          <div class="col-span-4 lg:col-span-3 flex flex-col gap-4 h-[800px]">
            <div class="relative overflow-hidden rounded-lg flex-1">
              <NuxtImg
                src="/images/projects/Img1.png"
                alt="Constituency project image 1"
                class="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div class="relative overflow-hidden rounded-lg flex-1">
              <NuxtImg
                src="/images/projects/Img2.png"
                alt="Constituency project image 2"
                class="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>

          <!-- Middle Column -->
          <div class="col-span-4 lg:col-span-5 flex flex-col gap-4 h-[800px]">
            <div class="flex gap-4 h-[40%]">
              <div class="relative overflow-hidden rounded-lg flex-1">
                <NuxtImg
                  src="/images/projects/Img3.png"
                  alt="Constituency project image 3"
                  class="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                />
              </div>
              <div class="relative overflow-hidden rounded-lg flex-1">
                <NuxtImg
                  src="/images/projects/Img4.png"
                  alt="Constituency project image 4"
                  class="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                />
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg flex-1">
              <NuxtImg
                src="/images/projects/Img5.png"
                alt="Constituency project image 5"
                class="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>

          <!-- Right Column -->
          <div class="col-span-4 lg:col-span-3 flex flex-col gap-4 h-[800px]">
            <div class="relative overflow-hidden rounded-lg">
              <NuxtImg
                src="/images/projects/Img6.png"
                alt="Constituency project image 6"
                class="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div class="relative overflow-hidden rounded-lg flex-1">
              <NuxtImg
                src="/images/about/constituency.png"
                alt="Constituency project image 7"
                class="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mx-auto w-[92.5%] md:w-[90%]">
      <h3 class="font-semibold font-montserrat mb-4 text-2xl">
        Projects from the 10th Assembly
      </h3>
      <SectionsAccordionAlt :items="tenthAssemblyProjects" />
    </section>
    <!-- <section class="mx-auto w-[85%]">
      <h3 class="font-semibold font-montserrat mb-4 text-2xl">Projects from the 9th Assembly</h3>
      <p class="mb-4">Projects in Bende Federal Constituency</p>
      <SectionsAccordionAlt :items="ninthAssemblyProjects" />
    </section> -->
    <section class="bg-footerGreen m-0 p-10 md:p-12 lg:p-28">
      <h2 class="text-white text-xl md:text-2xl lg:text-[2rem] lg:leading-10 
        font-montserrat lg:max-w-[80%] font-semibold"
      >
        Projects Distribution in Different Communities of Bende Federal Constituency
      </h2>
    </section>
    <section class="mx-auto w-[92.5%] md:w-[90%] py-8 md:py-12 lg:py-16">
      <SectionsAccordion :items="accordionItems" />
    </section>
    <section class="mx-auto w-[92.5%] md:w-[90%] pb-8 md:pb-12 lg:pb-16">
      <h1 class="hidden font-adamina text-[#022924] text-center md:text-[2rem] 
        md:leading-10 lg:text-4xl lg:leading-[3rem] md:block"
      >
        What Constituents are Saying About <br /> Rt. Hon. Benjamin Kalu
      </h1>
      <h1 class="md:hidden font-adamina text-[#022924] text-center text-2xl">
        What Constituents are Saying<br /> About <br /> Rt. Hon. Benjamin Kalu
      </h1>
      <Slider :items="quotes" speed="normal" direction="right"
        class="w-full mt-8 md:mt-12 lg:mt-16 overflow-x-scroll items-start flex gap-4 
        md:gap-6 lg:gap-10" 
        v-if="quotes"
      >
        <div class="w-4/5 shrink-0 bg-[#E0E0E0] px-5 py-7 md:w-1/3 lg:w-[29rem] 
          min-h-[25.5rem] md:min-h-[29rem] lg:min-h-[32.5rem]" 
          v-for="(item, index) in quotes" :key="index"
        >
          <div class="relative w-[3.25rem] h-10">
            <NuxtImg alt="quote" src="/svgs/about/green_quote.svg" class="h-full w-full" />
          </div>
          <p class="text-xs md:text-sm lg:text-base text-black font-inter font-normal 
            text-left my-4 md:my-7 lg:my-9"
          >
            {{ item.quote }}
          </p>
          <h3 class="font-bold leading-6 font-inter text-black text-left text-base 
            md:text-lg lg:text-xl"
          >
            {{ item.name }}
          </h3>
        </div>
      </Slider>
    </section>
    <!-- <section class="mx-auto w-[85%]">
      <NuxtImg
        class="w-full h-[1600px] object-contain"
        src="/images/projects/footer.webp"
        alt="Constituency project image "
      />
      <div class="my-4">
        Click the link to learn more about the Impactful legacies of Benjamin Kalu:
        <a href="https://benjaminkalu.com/impactfullegaciesofbenkalu" class="text-primaryGreen"
          >https://benjaminkalu.com/impactfullegaciesofbenkalu</a
        >
      </div>
    </section> -->
  </main>
</template>

<script setup>
import { ref } from 'vue';
import Slider from '~/components/sections/Slider.vue';
const loading = ref(false);

const tenthAssemblyProjects = [
  {
    title: 'Latest Ongoing Projects',
    details: [
      'Amokwe_Akanu Item road',
      'Agboakoli ancient road, Alayi',
      'Bende market road Bende',
      'Ndiokorieukwu road Bende',
      'Bende headquarters road',
      'Construction of Garri processing mill in Uzuakoli and nkpa',
      'Construction of 3 blocks of classrooms in Igboji secondary commercial school Alayi',
      'Medical Eye Care Outreach',
      'Agricultural Trainings',
      'Empowerment for Widows, pensioners and underserved citizens',
      'Construction of Amaeke Isiegbu - Umuhu Road',
      'Construction of Amazu - Umuokwe Road in Umuhu',
      'Grading/Surface dressing of Abam - Umuhu Road',
      'Construction of Road in Ozuitem',
      'Construction of Amorji Lodu Imenyi Road',
      'Construction of Ihemba Road Quarters in Uzuakoli',
      'Construction of Okwu Road Quarters in Uzuakoli',
    ],
  },
];

const ninthAssemblyProjects = [
  {
    title: 'Roads and Infrastructure',
    details: [
      'Umuimenyi Nkpa Ecological Fund Project (on-going): Attracted an 11km Ecological Intervention Project in Umuimenyi Nkpa which includes construction of roads and the Nkpa bridge to curb the erosion menace in the communities.',
      'Umuahia-Bende-Ohafia Road (on-going): Commenced the rehabilitation and construction of the Umuahia-Bende-Ohafia Road (LOT2) in Abia State to the tune of ₦12bn.',
      'Etitiulo-Itumbauzo Road: Secured the rehabilitation of the Etitiulo-Itumbauzo road which has now been asphalted.',
      'Construction of 1km Road in Etitiulo Bende in Bende LGA (ongoing).',
      'Construction of 1km Amaogwu Ndiokorieukwu road (ongoing).',
      'Construction of 600-metre Amaogwu Agbomiri road (ongoing).',
      'Construction of 400-metre Agbomiri Umorie road (ongoing).',
    ],
  },
  {
    title: 'Health',
    details: [
      'Completion of Health and Maternity Centre for Amaogwu, Bende, Bende Federal Constituency. (Completed)',
      'Health Insurance Scheme for Bende providing 90% subsidized healthcare for over 500 Bende indigenes. (Completed)',
      'Ntalakwu Health Centre. (90% completed)',
      'Construction of Maternity Health care in Okputong, Bende town in Bende L.G.A. (ongoing)',
      'Renovation of Umunnato Item Health Centre (Ongoing).',
    ],
  },
  {
    title: 'Employment',
    details: ['Several Bende graduates have benefited from federal employment.'],
  },
  {
    title: 'Education',
    details: [
      'Construction and Furnishing of a 3-classroom block in Nkporo central school, Ubibia in Itumbauzo Bende LGA.',
      'Construction of a 3-classroom block at Ndiwo Town School in Itumbauzo Bende LGA.',
      'Completed renovation of Uzuakoli Practicing School.',
      'Completed renovation of Amazu Central School, Umuhu Ezechi.',
      'Distribution of learning and educational materials to community schools in 13 wards of Bende Federal Constituency.',
      'Renovation of a block of 6 classrooms in Girls secondary school Uzuakoli.',
      'Renovation of 3 classrooms in Uzuakoli township school, currently ongoing.',
      'Renovation of Nkpa technical school Nkpa in Bende L.G.A, (Completed).',
      'Construction and furnishing of 3 classrooms in Onuibina primary school Igbere in Bende L.G.A completed.',
      'Renovation of a block of 3 classrooms in Community primary school Okai item completed.',
      'Construction of a block of 3 classrooms in Amaokai primary school Ugwueke, ongoing.',
      'Construction and renovation of six classroom blocks in community primary school, Apanu Item.',
      'Construction of a Block of 3 Classrooms in Okporoenyi, Bende.',
      'Construction/renovation and furnishing of a block of 3 classrooms at Item Community High School.',
    ],
  },
  {
    title: 'Infrastructure Development',
    details: ['Completed the Divisional Immigration Office in Bende.', 'Construction of ICT Centre.'],
  },
  {
    title: 'Agriculture',
    details: [
      'Skills Acquisition/Training of 200 Bende Constituents on Aquaponics development in Bende Federal Constituency.',
      'Training and empowerment of Youth and Women on Agribusiness management in Bende Federal Constituency.',
      'Training and empowerment of over 1000 Bende indigenes on rice farming and production.',
      'Supply of Agricultural Seeds to Farmers in Bende.',
    ],
  },
  {
    title: 'Water',
    details: [
      'Solar powered borehole drilling at Ovum Ugwu, Nkpa (Completed).',
      'Construction of a solar powered borehole in Mba Autonomous community Ozuitem, (Completed).',
      'Construction of a solar powered borehole in Okpufu Amankalu Alayi in Bende L.G.A, (Ongoing).',
      'Construction of a solar powered borehole in Okoko Item (Ongoing).',
    ],
  },
  {
    title: 'Security and Transport Support Programmes',
    details: [
      'Donation of 27 motorbikes and 13 tricycles (keke napep) to various wards in Bende to curb insecurity and improve transportation in Bende.',
    ],
  },
  {
    title: 'Power Infrastructure',
    details: [
      'Construction of a solar farm to house a mini grid for energy supply in Bende which will provide light for 25 years non-stop and away from the national grid (Ongoing).',
      'Installation of 2.5 kva transformer in Amaokwe Item, (Completed).',
      'Provision of Solar Street lights across various communities in Bende.',
      'Construction of 2x7.5 MVA 33/11KV injection Substation in Bende Town with one feeder extension at Ozuitem.',
    ],
  },
  {
    title: 'Town Halls',
    details: ['Rehabilitation of Uche-Ebiri hall in Igbere (Ongoing).', 'Agbamuzu town hall, Bende completed.'],
  },
  {
    title: 'Community Support',
    details: ['Bende Widows Support Programme (19th Edition).', 'Bende Food Support Programme (19th Edition).'],
  },
];

const accordionItems = [
  {
    title: 'Item',
    details: [
      {
        image: '/images/projects/accordion_image_1.png',
        accomplishment: 'Renovation of Umunnato Item health center (2021/2022)',
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: 'Renovation of class room blocks at Okai item (2020/2022)',
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: 'Renovation of a block of 3 class rooms in Amaekpu Item (2021/2022)',
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: 'Construction of 6 class room blocks at Apuanu Item (2021/2022)',
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of block of 3 classrooms at Item community secondary 
          school (2021/2022)`,
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: 'Construction of Amaokwe-Akanu-Okai Road (2021/2022)',
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: 'Construction of solar-powered borehole in Okoko Item (2021/2022)',
      },
    ],
  },
  {
    title: 'Itumbauzo',
    details: [
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: 'Construction of 3 classroom blocks at Ndiwo Itumbuzo (2021/2022)',
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of 2 classroom blocks with offices at Nkporo Ubibia 
          (2020/2021)`,
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of health/maternity center at Ntalakwu Itumbuzo 
          (2019/2020)`,
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of Itumbauzo Ntalakwu road with drainage phase 2 by 
          Ministry of Housing (2021)`,
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction with Alphate of Itumbauzo Ntalakwu road phase 3 by 
          FERMA`,
      },
    ],
  },
  {
    title: 'Umuimenyi Nkpa',
    details: [
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Renovation of a 3-classroom block with office at UMUIMENYI Technical 
          School NKPA (2020/2021)`,
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of solar-powered borehole in Ovum Ugwu Nkpa (2020/2021)`,
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of 8.3 kilometers road with bridge in Nkpa/Umuimenyi: 
          (1) 6.1 kilometers in Nkpa community with Eme bridge; (2) 2.2 kilometers in Akoli 
          Imenyi.`,
      },
    ],
  },
  {
    title: 'Igbere',
    details: [
      {
        image: '/images/projects/accordion_image_3.png',
        accomplishment: `Construction of a block of 3 classrooms at Onuibina Primary School 
          Igbere (2020/2021)`,
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of 3-classroom block with toilet and bathroom at both 
          ends at Ohumola Ezigbere Secondary School (2021/2022)`,
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of solar-powered borehole in Amabia, Elu Ohafia Ibina 
          Ukwu Igbere`,
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Renovation of Uche Ebiri Hall (ongoing)`,
      },
    ],
  },
  {
    title: 'Uzuakoli',
    details: [
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Renovation of a block of 6 classrooms in Girls' Secondary School 
          Uzuakoli (2020/2021)`
      },
    ],
  },
  {
    title: 'Ozuitem',
    details: [
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of solar-powered borehole in Ozuitem (2020/2021)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of Agbua Elugwumba Ozuitem road (ongoing)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of a block of two classrooms in Ozuitem Secondary 
          School (ongoing)`
      },
    ],
  },
  {
    title: 'Alayi',
    details: [
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of solar-powered borehole in Amankalu Alayi (2020/2021)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of Amabo Agboakoli Road Alayi`
      },
    ],
  },
  {
    title: 'Umuhu',
    details: [
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Renovation of classroom blocks in Amazu Central School Umuhu Ezechi 
          (2020/2021)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of solar-powered borehole in Eke Market Square Umuokwe`
      },
    ],
  },
  {
    title: 'Ugwueke',
    details: [
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of a block of 3 classrooms at Amaokai Ugwueke 
          (2021/2022)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of Civic Hall in Umungere Ugwueke (ongoing)`
      },
    ],
  },
  {
    title: 'Bende',
    details: [
      {
        image: '/images/projects/accordion_image_3.png',
        accomplishment: `Construction of Immigration Service Office Bende (2020/2021)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Renovation of Agbamauzu Hall Bende (2020/2021)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of Etitiulo Road with drainage (2020-2021)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of 1km road in Onuiyang Ukpom Okporoenyi Nkalunta Road 
          (2021-2022)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of 1km Amaogwu Ndiokorieukwu Road (2021-2022)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of Amaogwu Agbomiri Grammar School Road (2021-2022)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of Umuorie Agbomiri Road (2021-2022)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of Maternity Center at Okputong Bende (2020/2021)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of ICT Center in Bende Grammar School`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Perimeter fencing of Bende Secondary Grammar School Phase 1 (ongoing)`
      },
      {
        image: '/images/projects/accordion_image_2.png',
        accomplishment: `Construction of solar mini-grid along Etitiulo Road Bende`
      },
    ],
  },
];
const quotes = [
  {
    quote: `“My name is Onyeobu Ihilu. I was a farmer but I'm aged now and can no longer go 
      to the farm. Hon Benjamin Kalu is a very important man to us in Bende. We have 
      unprecedented development now in Bende. If we had two of him, Bende would become like 
      Abuja. He does so much. Stories about his kindness have gone round the world. May he 
      be blessed at all times. I want him to be president. He does so much. I lost my eye 
      sight. He gave me free treatment. He also provided me with lots of food. I have food 
      at home now, thanks to him. He took down names of people whose houses would be 
      renovated. My name was included. May God bless him with long life and good health..”`,
    name: `ONYEOBU IHILU`,
  },
  {
    quote: `“Hon Benjamin Kalu has done a lot. We are proud of him. He makes all of us happy. 
      He has worked on our roads. He has provided boreholes and distributed rice to all of us. 
      He has done so much. He brought eye surgeons, and they carried out treatments for 
      everyone with a problem, free of charge. I know a blind man whom Hon. Benjamin Kalu 
      helped regain sight and the man is living a good life now. I was there when he 
      commissioned boreholes for our people. He has built hospitals and renovated schools, 
      including our community school. He has made our town much better. He has brought a 
      university to the people of Bende.”`,
    name: `UZOMA EMENIKE`,
  },
  {
    quote: `“The Uzuakoli community has never had it so good. We have had a very exciting 
    journey with Rt Hon Benjamin Okezie Kalu. He has touched every life in Uzuakoli. He 
    facilitated the employment of so many sons and daughters of this community into various 
    state and federal establishments, and they have in turn become breadwinners in their 
    families. Our roads are wearing looks they have never worn since the Civil War. Take a 
    stroll across the community at night, the entire community is well-lit, thanks to Hon 
    Benjamin Okezie Kalu. The community has had an unfair share of ecological issues and His 
    Excellency Rt Hon Benjamin Kalu has taken it up on himself to address this.”`,
    name: `CHIKODIRI EZE`,
  },
  {
    quote: `“My name is Onyeobu Ihilu. I was a farmer but I'm aged now and can no longer go 
      to the farm. Hon Benjamin Kalu is a very important man to us in Bende. We have 
      unprecedented development now in Bende. If we had two of him, Bende would become like 
      Abuja. He does so much. Stories about his kindness have gone round the world. May he 
      be blessed at all times. I want him to be president. He does so much. I lost my eye 
      sight. He gave me free treatment. He also provided me with lots of food. I have food 
      at home now, thanks to him. He took down names of people whose houses would be 
      renovated. My name was included. May God bless him with long life and good health..”`,
    name: `ONYEOBU IHILU`,
  },
]
</script>

<style scoped>
img {
  transition: opacity 0.3s ease;
  opacity: 1;
}

img.loading {
  opacity: 0;
}
</style>
