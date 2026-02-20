<template>
    <main class="w-full bg-white">
        <div class="w-[92.5%] md:w-[90%] mx-auto pt-8 md:pt-12 lg:pt-16">
            <h3 class="mb-6 md:mb-8 lg:mb-10">
                PISE-P - Peace in the South -<br /> East project
            </h3>
            <div class="w-full flex flex-col-reverse gap-8 md:flex-row md:gap-20 lg:gap-28">
                <p class="text-justify w-full text-base md:text-2xl font-montserrat font-medium 
                    text-[#585C5B] md:w-1/2"
                >
                    The Peace in South East Project (PISE-P), an initiative of the Deputy Speaker, is 
                    a peace-building and development program designed to address the complex 
                    socio-economic challenges and security issues facing the South East region of 
                    Nigeria. Developed in response to the growing impact of agitations, economic 
                    decline, and security threats, PISE-P seeks to restore peace and stimulate 
                    development through a multi-stakeholder approach.
                </p>
                <div class="relative shrink-0 w-full h-[22.75rem] md:w-[23rem] md:h-[23.25rem] 
                    lg:w-[24rem] lg:h-[25.25rem] md:-mt-6 lg:-mt-12"
                >
                    <NuxtImg alt="pipe-p-logo" src="/svgs/pisep/pise_p_logo.svg"
                        class="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
        <div class="w-full relative mt-10 bg-[#e7e4e4] md:mt-12 lg:mt-20 h-auto">
            <NuxtImg alt="frame" src="/images/pisep/frame.webp"
                class="w-full h-full object-cover"
            />
        </div>
        <div class="tech_for_peace h-[75dvh] sm:h-[80dvh] flex items-center justify-center mb-8
            md:mb-12 lg:mb-16 w-full"
        >
            <div class="w-[92.5%] md:w-[90%] mx-auto">
                <h1 class="text-white font-adamina font-normal text-[2rem] md:text-4xl 
                    lg:text-5xl"
                >
                    Tech For Peace
                </h1>
                <p class="w-4/5 mt-2 mb-4 md:mb-16 lg:mb-[5.5rem] md:w-[23.75rem] font-medium 
                    font-montserrat text-sm md:text-base text-white"
                >
                    A Free Digital Skills Initiative equiping young people witin South-East Nigeria, 
                    with practical, future-ready skills for income generation, ethical digital 
                    engagement and peace building.
                </p>
                <button @click="$router.push('/tech-for-peace')"
                    class="bg-[#146634] flex cursor-pointer items-center justify-center w-40 md:w-[15rem] 
                    lg:w-[21.5rem] md:w py-4 px-6 rounded-xl"
                >
                    <p class="font-bold font-montserrat text-white text-sm md:text-base">
                        Learn more
                    </p>
                </button>
            </div>
        </div>
        <section class="w-[92.5%] md:w-[90%] mx-auto pb-8 md:pb-12 lg:pb-16">
            <h1 class="font-semibold text-[#022924] text-[2rem] md:text-4xl lg:text-5xl 
                font-montserrat mb-10 md:mb-12 lg:mb-16"
            >
                Past Events
            </h1>
            <SectionsEvents :events="events" />
            <div class="w-full flex mt-12 md:mt-20 lg:mt-24 justify-center md:justify-end">
                <button @click="$router.push('/pise-p/events')"
                    class="bg-[#146634] w-32 h-10 cursor-pointer rounded-full py-2 px-6"
                >
                    <p class="text-sm text-white font-semibold font-montserrat md:text-base">
                        See more
                    </p>
                </button>
            </div>
        </section>
        <div class="w-full h-[1px] mb-8 md:mb-12 lg:mb-16 bg-[#B6B8B8]"></div>
        <div class="w-full relative">
            <div class="mx-auto w-full">
                <h1 class="font-montserrat mb-2 text-[#0C4826] font-semibold text-[2rem] md:text-4xl 
                    lg:text-5xl text-center"
                >
                    PARTNERSHIPS
                </h1>
                <h3 class="text-base md:text-xl text-center text-[#0C4826] lg:text-[2rem] font-normal
                    font-montserrat"
                >
                    AT THE HALLMARK OF PISE-P
                </h3>
            </div>
            <div class="w-full h-[25.5rem] sm:h-[40rem] md:h-[60rem] lg:h-[79rem] relative">
                <NuxtImg alt="image" src="/images/pisep/PISEP.png" class="object-cover w-full h-full" />
            </div>
            <div class="bg-white top-[21%] sm:left-[11rem] lg:left-80 xl:left-[30rem] 
                absolute w-96 h-16 xl:w-[26rem]"
            ></div>
            <div class="mx-auto w-full">
                <p class="text-center font-montserrat mb-4 text-sm text-[#585C5B] md:text-base 
                    lg:text-lg"
                >
                    To learn more and be a part of us, visit the official PISE - P website on: 
                    <a href="https://pise-p.org/"
                        class="font-medium font-montserrat text-sm text-[#0E7B60] 
                            md:text-base lg:text-lg underline"
                    >
                        https://pise-p.org/
                    </a>
                </p>
            </div>
        </div>
    </main>
</template>

<script setup>
const events = [
    {
        image: '/images/pisep/south_east_project.png',
        title: 'Unveiling of the Peace In South East Project',
        body: `Peace in South East Project (PISE-P), an initiative of the Deputy Speaker of the House 
            of Representatives, Rt. Hon. Benjamin Okezie Kalu, was unveiled in the ancient town of 
            Bende, Abia State, on 29 December 2023. The unveiling, which was also used as a grand 
            reception/homecoming of the Deputy Speaker, attracted many eminent Nigerians from the 
            South-East and beyond, including President Bola Tinubu, who was represented by the Vice 
            President, Kashim Shettima.`,
    },
    {
        image: '/images/pisep/peace_initiative.png',
        title: 'Food for Peace Initiative',
        body: `Rt. Hon. Benjamin Okezie Kalu has launched the “Food For Peace” initiative. Subsumed 
            under the agriculture and food security pillar of PISE-P, the event captioned “A Hungry 
            Man is an Angry Man” recognizes the importance of food in the drive for peace in the 
            region hence its quick implementation.`,
    },
    {
        image: '/images/pisep/road_walk.png',
        title: 'Road Walk',
        body: `Fitness walk in the city of Umuahia tagged “Road Walk Festival, 1k Man Match” which had 
            the Deputy Speaker of House of Representatives, Rt. Hon. Benjamin Okezie Kalu as guest was 
            organised by Extreme Fitness with De Latinos in collaboration with Peace in South East Project.`,
    },
    {
        image: '/images/pisep/peace_fund.png',
        title: 'Peace Fund for Victims of Insecurity',
        body: `Rt. Hon. Benjamin Okezie Kalu, has inaugurated a 7-man Peace Fund Committee to raise 
            financial assistance for victims of insecurity in the South East region. This follows the 
            killing of soldiers in Aba, Abia State, which has been widely condemned.`,
    },
]
</script>

<style lang="scss" scoped>
.tech_for_peace {
    background-image: url('/public/images/pisep/tech_for_peace.jpg');
  background-color: rgba($color: #000000, $alpha: 0.5);
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
}
</style>