<template>
  <main class="flex flex-col gap-4 mg:gap-8 lg:gap-12">
    <section class="py-16 bg-light mx-auto w-[85%]">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <h2 class="font-semibold">Constituency Projects</h2>
          <p>See the latest projects that we are up to and actively working on to better improve our constituencies.</p>
        </div>

        <div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
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
          <div class="col-span-4 lg:col-span-6 flex flex-col gap-4 h-[800px]">
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
            <div class="relative overflow-hidden rounded-lg flex-[2]">
              <NuxtImg
                src="/images/projects/Img6.png"
                alt="Constituency project image 6"
                class="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>
            <div class="flex gap-4 flex-1">
              <div class="relative overflow-hidden rounded-lg flex-1">
                <NuxtImg
                  src="/images/projects/Img7.png"
                  alt="Constituency project image 7"
                  class="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                />
              </div>
              <div class="relative overflow-hidden rounded-lg flex-1">
                <NuxtImg
                  src="/images/projects/Img.png"
                  alt="Constituency project image 8"
                  class="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mx-auto w-[85%]">
      <h3 class="font-semibold font-montserrat mb-4 text-2xl">Projects from the 10th Assembly</h3>
      <SectionsAccordionAlt :items="tenthAssemblyProjects" />
    </section>
    <section class="mx-auto w-[85%]">
      <h3 class="font-semibold font-montserrat mb-4 text-2xl">Projects from the 9th Assembly</h3>
      <p class="mb-4">Projects in Bende Federal Constituency</p>
      <SectionsAccordionAlt :items="ninthAssemblyProjects" />
    </section>
    <section class="bg-footerGreen m-0 p-10 md:p-12 lg:p-28">
      <h2 class="text-white font-montserrat lg:max-w-[80%] font-semibold">
        Projects Distribution in Different Communities of Bende Federal Constituency
      </h2>
    </section>
    <section class="mx-auto w-[85%]">
      <SectionsAccordion :items="accordionItems" />
    </section>
    <section class="mx-auto w-[85%]">
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
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
const loading = ref(false);

const tenthAssemblyProjects = [
  {
    title: 'Latest Ongoing Projects',
    details: [
      'Amokwe_Akanu Item road',
      '⁠Agboakoli ancient road, Alayi',
      '⁠Bende market road Bende',
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
      'Renovation of Umunnato Item health center (2021/2022)',
      'Renovation of class room blocks at Okai item (2020/2022)',
      'Renovation of a block of 3 class rooms in Amaekpu Item (2021/2022)',
      'Construction of 6 class room blocks at Apuanu Item (2021/2022)',
      'Construction of block of 3 classrooms at Item community secondary school (2021/2022)',
      'Construction of Amaokwe-Akanu-Okai Road (2021/2022)',
      'Construction of solar-powered borehole in Okoko Item (2021/2022)',
    ],
  },
  {
    title: 'Itumbauzo',
    details: [
      'Construction of 3 classroom blocks at Ndiwo Itumbuzo (2021/2022)',
      'Construction of 2 classroom blocks with offices at Nkporo Ubibia (2020/2021)',
      'Construction of health/maternity center at Ntalakwu Itumbuzo (2019/2020)',
      'Construction of Itumbauzo Ntalakwu road with drainage phase 2 by Ministry of Housing (2021)',
      'Construction with Alphate of Itumbauzo Ntalakwu road phase 3 by FERMA',
    ],
  },
  {
    title: 'Umuimenyi Nkpa',
    details: [
      'Renovation of a 3-classroom block with office at UMUIMENYI Technical School NKPA (2020/2021)',
      'Construction of solar-powered borehole in Ovum Ugwu Nkpa (2020/2021)',
      'Construction of 8.3 kilometers road with bridge in Nkpa/Umuimenyi: (1) 6.1 kilometers in Nkpa community with Eme bridge; (2) 2.2 kilometers in Akoli Imenyi.',
    ],
  },
  {
    title: 'Igbere',
    details: [
      'Construction of a block of 3 classrooms at Onuibina Primary School Igbere (2020/2021)',
      'Construction of 3-classroom block with toilet and bathroom at both ends at Ohumola Ezigbere Secondary School (2021/2022)',
      'Construction of solar-powered borehole in Amabia, Elu Ohafia Ibina Ukwu Igbere',
      'Renovation of Uche Ebiri Hall (ongoing)',
    ],
  },
  {
    title: 'Uzuakoli',
    details: ['Renovation of a block of 6 classrooms in Girls’ Secondary School Uzuakoli (2020/2021)'],
  },
  {
    title: 'Ozuitem',
    details: [
      'Construction of solar-powered borehole in Ozuitem (2020/2021)',
      'Construction of Agbua Elugwumba Ozuitem road (ongoing)',
      'Construction of a block of two classrooms in Ozuitem Secondary School (ongoing)',
    ],
  },
  {
    title: 'Alayi',
    details: [
      'Construction of solar-powered borehole in Amankalu Alayi (2020/2021)',
      'Construction of Amabo Agboakoli Road Alayi',
    ],
  },
  {
    title: 'Umuhu',
    details: [
      'Renovation of classroom blocks in Amazu Central School Umuhu Ezechi (2020/2021)',
      'Construction of solar-powered borehole in Eke Market Square Umuokwe',
    ],
  },
  {
    title: 'Ugwueke',
    details: [
      'Construction of a block of 3 classrooms at Amaokai Ugwueke (2021/2022)',
      'Construction of Civic Hall in Umungere Ugwueke (ongoing)',
    ],
  },
  {
    title: 'Bende',
    details: [
      'Construction of Immigration Service Office Bende (2020/2021)',
      'Renovation of Agbamauzu Hall Bende (2020/2021)',
      'Construction of Etitiulo Road with drainage (2020-2021)',
      'Construction of 1km road in Onuiyang Ukpom Okporoenyi Nkalunta Road (2021-2022)',
      'Construction of 1km Amaogwu Ndiokorieukwu Road (2021-2022)',
      'Construction of Amaogwu Agbomiri Grammar School Road (2021-2022)',
      'Construction of Umuorie Agbomiri Road (2021-2022)',
      'Construction of Maternity Center at Okputong Bende (2020/2021)',
      'Construction of ICT Center in Bende Grammar School',
      'Perimeter fencing of Bende Secondary Grammar School Phase 1 (ongoing)',
      'Construction of solar mini-grid along Etitiulo Road Bende',
    ],
  },
];
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
