<template>
    <section class="w-full bg-light py-8 md:py-16 text-center flex flex-col">
        <div class="w-[90%] mx-auto  mb-6 md:mb-12 ">
            <div class="px-0 flex-col md:flex-row md:px-6 lg:px-12 flex justify-between items-center 
                gap-0 md:gap-8 lg:gap-[3.25rem] w-full"
            >
                <div class="flex w-full h-32 md:w-56 md:h-48 lg:w-72 lg:h-64 gap-1 flex-col items-center justify-center">
                    <div class="relative w-8 h-8 md:w-12 md:h-12 lg:w-[3.75rem] lg:h-[3.75rem]">
                        <NuxtImg src="/svgs/home/bills.svg" alt="bills" class="w-full h-full object-cover" />
                    </div>
                    <p class="text-sm my-1 md:my-2 lg:my-4 font-medium md:text-base lg:text-lg">
                        Bills Sponsored
                    </p>
                    <h1 class="font-adamina font-normal text-[2rem] leading-[3rem] md:text-3xl 
                        md:leading-[2.75rem] lg:leading-[6rem] lg:text-[4rem]"
                    >
                        120+
                    </h1>
                </div>
                <div class="w-full h-[0.0625rem] md:py-10 md:h-44 md:w-[0.125rem] bg-[#146634]"></div>
                <div class="flex w-full h-32 md:w-56 md:h-48 lg:w-72 lg:h-64 gap-1 flex-col items-center justify-center">
                    <div class="relative w-8 h-8 md:w-12 md:h-12 lg:w-[3.75rem] lg:h-[3.75rem]">
                        <NuxtImg src="/svgs/home/projects.svg" alt="bills"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <p class="text-sm my-1 md:my-2 lg:my-4 font-medium md:text-base lg:text-lg">
                        Constituency Projects
                    </p>
                    <h1 class="font-adamina font-normal text-[2rem] leading-[3rem] md:text-3xl 
                        md:leading-[2.75rem] lg:leading-[6rem] lg:text-[4rem]"
                    >
                        50+
                    </h1>
                </div>
                <div class="w-full h-[0.0625rem] md:py-10 md:h-44 md:w-[0.125rem] bg-[#146634]"></div>
                <div class="flex w-full h-32 md:w-56 md:h-48 lg:w-72 lg:h-64 gap-1 flex-col items-center 
                    justify-center"
                >
                    <div class="relative w-8 h-8 md:w-12 md:h-12 lg:w-[3.75rem] lg:h-[3.75rem]">
                        <NuxtImg src="/svgs/home/grants.svg" alt="bills"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <p class="text-sm my-1 md:my-2 lg:my-4 font-medium md:text-base lg:text-lg">
                        Empowerments & Grants
                    </p>
                    <h1 class="font-adamina font-normal text-[2rem] leading-[3rem] md:text-3xl 
                        md:leading-[2.75rem] lg:leading-[6rem] lg:text-[4rem]"
                    >
                        1700+
                    </h1>
                </div>
            </div>
            <div class="my-10 lg:my-14 h-[0.0625rem] bg-black w-full"></div>
            <div class="w-full flex flex-col-reverse items-start md:flex-row md:items-center">
                <div class="w-full h-60 md:w-[30%] relative md:h-[16.5rem]">
                    <NuxtImg src="/images/home/statesman_dp.png" alt="statesman picture"
                        class="w-full h-full object-cover"
                    />
                </div>
                <div class="w-full bg-[#191919] md:w-[70%] gap-12 flex flex-col md:flex-row md:gap-16 
                    lg:gap-24 items-start px-24 py-[3.75rem]"
                >
                    <div class="relative w-24 h-24 md:w-[7.75rem] md:h-[7.75rem]">
                        <NuxtImg src="/svgs/home/statesman_icon.svg" alt="statesman icon"
                            class="w-full h-full"
                        />
                    </div>
                    <div class="mx-auto md:mx-0">
                        <h3 class="mb-2.5 text-2xl font-adamina text-center md:text-left text-white">
                            The Statesman
                        </h3>
                        <p class="mb-4 text-sm text-white md:text-base md:mb-6">
                            A Legislative and Policy Review
                        </p>
                        <div class="md:-ml-6">
                            <MainButton @click="">Download Latest Issue</MainButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>