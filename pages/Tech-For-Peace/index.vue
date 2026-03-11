<template>
    <main class="w-full bg-white">
        <section class="tech_bg flex items-center justify-center w-full">
            <div class="w-[92.5%] md:w-[90%] mx-auto">
                <h1 class="text-white hidden md:block font-adamina font-normal md:text-4xl 
                    md:leading-[3.5rem] lg:text-5xl lg:leading-[4.5rem]"
                >
                    Tech for Peace: Empowering South-<br />East Youth Through Digital Skills
                </h1>
                <h1 class="text-white block md:hidden font-adamina font-normal text-[2rem] 
                    leading-[3rem]"
                >
                    Tech for Peace:<br /> Empowering South-East<br /> Youth Through Digital<br /> Skills
                </h1>
                <p class="w-5/6 mt-2 mb-4 md:mb-16 lg:mb-[5.5rem] md:w-[23.75rem] font-medium 
                    font-montserrat text-sm md:text-base text-white"
                >
                    A Free Digital Skills Initiative equiping young people witin South-East Nigeria, 
                    with practical, future-ready skills for income generation, ethical digital 
                    engagement and peace building.
                </p>
                <button @click="$router.push('/register')"
                    class="bg-[#146634] flex cursor-pointer items-center justify-center 
                    w-[17rem] md:w-80 transition duration-300 hover:bg-[#105129]
                    lg:w-[21.5rem] px-2 md:px-4 py-4 lg:px-6 rounded-xl"
                >
                    <p class="font-bold font-montserrat text-white text-sm md:text-base">
                        [Apply Now - Free Registration]
                    </p>
                </button>
            </div>
        </section>
        <section class="bg-[#146634] h-32 md:h-48 lg:h-64 relative w-full">
            <div class="w-[92.5%] md:w-[90%] pb-4 pt-4 md:pt-8 md:pb-12 lg:pt-14
                lg:pb-[5.25rem] mx-auto gap-0 grid grid-cols-4"
                v-if="data"
            >
                <div v-for="(item, index) in data" :key="index" class="flex flex-col gap-1 md:gap-2 
                    lg:gap-3 items-center"
                >
                    <p class="uppercase font-medium font-montserrat text-[0.625rem] md:text-base 
                        lg:text-xl text-center text-[#D2E01A]"
                    >
                        {{ item.title }}
                    </p>
                    <h3 class="uppercase max-w-32 md:max-w-64 font-bold font-montserrat text-[0.625rem] 
                        md:text-lg lg:text-2xl text-white text-center"
                    >
                        {{ item.name }}
                    </h3>
                </div>
            </div>
        </section>
        <section class="w-full py-14 md:py-20 lg:py-28 text-center flex flex-col">
            <div class="content mx-auto w-[92.5%] md:w-[85%] flex flex-col gap-2 items-center">
                <h2 class="text-[#146634] text-xl md:text-4xl lg:text-5xl mb-4 font-adamina 
                    font-normal"
                >
                    WHAT IS TECH FOR PEACE?
                </h2>
                <p class="w-full text-justify md:w-3/4 lg:w-8/12 mx-auto text-black md:text-center 
                    text-sm mb-4 md:text-base"
                >
                    #Tech4Peace is a scalable digital empowerment initiative focused on equipping young 
                    people in South-East Nigeria with in-demand digital skills while strengthening 
                    positive civic engagement and peace narratives.<br />
                    <br />
                    The program responds to the growing need for youth employability, ethical 
                    participation in digital spaces, and the use of technology as a tool for social 
                    cohesion. By combining technical training with values-driven digital engagement, the 
                    initiative prepares participants for both economic opportunity and responsible 
                    leadership in the digital era.<br />
                    <br />
                    It delivered in partnership with technology hubs across the South-East and runs in 
                    multiple 6-week training batches over the course of one year, allowing more young 
                    people to participate and benefit.
                </p>
            </div>
        </section>
        <section class="bg-[#EAEAEA] py-14 md:py-20 lg:py-28 w-full">
            <div class="w-[90%] md:w-[92.5%] mx-auto">
                <h1 class="text-center text-[#2E312F] text-xl md:text-2xl lg:text-[2rem] font-adamina">
                    Skills in Focus
                </h1>
                <div class="w-full my-6 md:my-8 lg:my-12 grid grid-cols-2 md:grid-cols-3 
                    lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8" v-if="skills"
                >
                    <div v-for="(item, index) in skills" :key="index" class="flex flex-col gap-3 md:gap-4 
                        lg:gap-6 w-full h-[8.5rem] md:h-[12.5rem] lg:h-[13.75rem] bg-white py-6 px-4 
                        md:py-7 md:px-3 lg:py-8 lg:px-2.5"
                    >
                        <div class="w-12 h-12 mx-auto relative md:w-16 md:h-16 lg:h-20 lg:w-20">
                            <NuxtImg alt="icon" class="h-full w-full object-cover" :src="item.icon" />
                        </div>

                        <h3 class="font-medium font-montserrat text-sm 
                            md:text-sm lg:text-base text-black text-center"
                        >
                            {{ item.title }}
                        </h3>
                    </div>
                </div>
                <div class="w-fit mx-auto bg-[#FFE1E1] p-1.5 justify-center flex items-center rounded-3xl md:p-2.5">
                    <p class="text-[0.625rem] md:text-sm text-center font-semibold font-montserrat text-black">
                        NOTE: Training is practical, beginner friendly, and immediately applicable 
                        for community initiatives, employability, and entrepreneurship
                    </p>
                </div>
            </div>
        </section>
        <section class="py-14 md:py-20 lg:py-28 w-full">
            <div class="w-[92.5%] md:w-[90%] flex flex-col items-start gap-8 md:gap-12 lg:gap-20 
                md:flex-row mx-auto"
            >
                <div class="w-full md:w-1/2 relative">
                    <h1 class="text-left text-[#146634] text-xl md:text-2xl lg:text-[2rem] 
                        font-adamina mb-6 md:mb-10 lg:mb-12"
                    >
                        Program Structure
                    </h1>
                    <div class="flex flex-col gap-2 md:gap-4 lg:gap-6" v-if="programs">
                        <div class="flex items-start gap-3 md:gap-4 lg:gap-5"
                            v-for="(item, index) in programs" :key="index"
                        >
                            <div class="w-4 h-4 shrink-0 md:w-6 md:h-6 relative">
                                <NuxtImg alt="icon" src="/svgs/pisep/check.svg" class="h-full w-full" />
                            </div>
                            <h3 class="text-xs text-black font-montserrat font-medium md:text-sm 
                                lg:text-base"
                            >
                                {{ item }}
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="w-full shrink-0 md:w-1/2 relative">
                    <div class="w-full mb-4 md:mb-6 lg:mb-8 relative h-52 md:h-64 lg:h-[19rem]">
                        <NuxtImg alt="locations" class="w-full h-full" 
                            src="/svgs/pisep/locations.svg"
                        />
                    </div>
                    <h6 class="text-center font-bold font-montserrat text-xs md:text-sm lg:text-base 
                        mx-auto text-[#146634]"
                    >
                        ABIA  |  ANAMBRA  |  EBONYI  |  ENUGU  |  IMO
                    </h6>
                </div>
            </div>
        </section>
        <section class="pb-14 md:pb-20 lg:pb-28 w-full">
            <div class="w-[92.5%] md:w-[90%] flex flex-col items-start gap-4 md:flex-row mx-auto">
                <div class="w-full md:w-[55%] lg:w-3/5 px-4 py-12 md:px-6 md:py-10 lg:px-11 lg:py-11 relative 
                    bg-[#F0F0F0] rounded-2xl"
                >
                    <h1 class="text-left text-[#146634] text-xl md:text-2xl lg:text-[2rem] 
                        font-adamina mb-6 md:mb-10 lg:mb-12"
                    >
                        Eligibility
                    </h1>
                    <div class="flex flex-col gap-2 md:gap-4 lg:gap-6" v-if="eligibilty">
                        <div class="flex items-start gap-3 md:gap-4 lg:gap-5"
                            v-for="(item, index) in eligibilty" :key="index"
                        >
                            <div class="w-4 h-4 shrink-0 md:w-6 md:h-6 relative">
                                <NuxtImg alt="icon" src="/svgs/pisep/check.svg" class="h-full w-full" />
                            </div>
                            <h3 class="text-xs text-black font-montserrat font-medium md:text-sm 
                                lg:text-base"
                            >
                                {{ item }}
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="w-full shrink-0 md:w-[45%] lg:w-2/5 p-6 md:pb-7 lg:pb-9 relative bg-[#F0F0F0] 
                    rounded-2xl"
                >
                    <h1 class="text-left text-[#146634] text-xl md:text-2xl lg:text-[2rem] 
                        font-adamina mb-6 md:mb-10 lg:mb-12"
                    >
                        Partners
                    </h1>
                    <div class="mt-6 md:mt-9 lg:mt-12 mb-3.5">
                        <div class="w-full h-[4.75rem] relative md:h-28">
                            <NuxtImg alt="icon" class="h-full object-contain lg:object-cover w-full"
                                src="/svgs/pisep/foundation.svg"
                            />
                        </div>
                        <button class="mt-6 w-full rounded-full items-center justify-center flex 
                            h-12 lg:h-14 md:w-[90%] md:mt-8 lg:mt-12 cursor-pointer
                            bg-[#146634] transition duration-300 hover:bg-[#105129]"
                        >
                            <p class="text-sm font-bold font-montserrat text-white md:text-base">
                                Apply now
                            </p>
                        </button>
                    </div>
                    <p class="text-xs font-montserrat font-medium text-black md:text-sm lg:text-base">
                        Limited slots per batch. Selection applies <br />#Tech4Peace #TechForPeace
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
const data = [
    {
        title: 'Eligibility',
        name: 'South-East residents',
    },
    {
        title: 'Ages',
        name: '15 - 35',
    },
    {
        title: 'Cost',
        name: 'Free',
    },
    {
        title: 'Mode',
        name: 'Hybrid (Online + Physical In-State Learning Hubs)',
    },
]
const skills = [
    {
        icon: '/svgs/pisep/graphic_design.svg',
        title: 'Graphic Design',
    },
    {
        icon: '/svgs/pisep/web_dev.svg',
        title: 'Web Development',
    },
    {
        icon: '/svgs/pisep/mobile_dev.svg',
        title: 'Mobile App Development',
    },
    {
        icon: '/svgs/pisep/digital_marketing.svg',
        title: 'Digital Marketing',
    },
    {
        icon: '/svgs/pisep/data_analysis.svg',
        title: 'Data Analysis (Basics)',
    },
    {
        icon: '/svgs/pisep/cybersecurity.svg',
        title: 'Cybersecurity (Basics)',
    },
    {
        icon: '/svgs/pisep/artificial_intelligence.svg',
        title: 'Artificial Intelligence',
    },
    {
        icon: '/svgs/pisep/content_creation.svg',
        title: 'Content Creation & Media'
    },
    {
        icon: '/svgs/pisep/microsoft.svg',
        title: 'Microsoft Office Tools'
    },
    {
        icon: '/svgs/pisep/copyright.svg',
        title: 'Copyright and Storytelling'
    },
]
const programs = [
    `To train 1,000 youths across five South-East states, ensuring broad access and regional inclusion.`,
    `Training opportunities will be distributed across these states to ensure equal access and participation.`,
    `Program runs for one year (renewable annually)`,
    `To be delivered through a hybrid learning model, combining online instruction with localized 
        training support across participating states.`,
    `Registration is free`,
]
const eligibilty = [
    `Be between 15 - 35 years old`,
    `Be a resident of any Nigerian South-East state (Abia, Anambra, Ebonyi, Enugu, and Imo)`,
    `Demonstrate a clear interest in digital skills, innovation and entrepreneurship`,
    `Be available to participate in a structured training program from start to finish`,
]
</script>

<style lang="scss" scoped>
.tech_bg {
    background-image: url('/public/images/pisep/tech_for_peace.jpg');
    background-color: rgba($color: #000000, $alpha: 0.6);
    background-blend-mode: overlay;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 0%;
    height: 90dvh;
}
@media screen and (max-width: 485px) {
    .tech_bg {
        background-position: bottom center;
    }
}
</style>