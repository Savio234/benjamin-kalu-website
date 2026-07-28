<template>
  <main class="flex flex-col bg-[#FAFFFA w-full">
    <section class="py-12 md:py-16 lg:py-20 mx-auto w-[92.5%] md:w-[85%]]">
        <div class="content flex flex-col gap-8 ">
            <button
                @click="$router.push('/news')"
                class="bg-white border-2 border-[#00A99133] w-fit h-fit p-[1px] rounded-full"
            >
                <div class="content bg-white rounded-full py-3 px-6 text-black text-[16px] flex items-center gap-2">
                    <svg-icon name="arrow_left_black" width="1rem" height="1rem" />
                    Go Back
                </div>
            </button>
            <div class="w-full md:w-4/5 lg:w-[70%] flex flex-col gap-4">
                <!-- <h3 class="title">{{ bill.title }}</h3> -->
                <h3 class="title font-adamina text-2xl md:text-[2rem] md:leading-10">
                    Constitution review: Reps call for Memoranda
                </h3>
                <p class="text-[#2E312F] mt-4 text-xs md:text-sm lg:text-base">
                    March 3rd, 2026
                </p>
                <div class="w-full my-6 md:my-8 lg:my-10 xl:my-12 h-[12.5rem] md:h-80 
                    lg:h-[29.25rem]"
                >
                    <NuxtImg alt="" src="/images/thumbnail.png" 
                        class="h-full w-full rounded-xl object-cover"
                    />
                </div>
                <h3 class="font-medium font-montserrat text-sm md:text-base text-justify 
                    text-[#2B2B2B]"
                >
                    The House of Representatives Committee on Constitution Review has called 
                    for Memoranda from stakeholders especially the Presidency, States, Local 
                    Government Areas and the general public as it begins implementation of 
                    its timetable for the exercise.<br />
                    <br />
                    Briefing newsmen, the Chairman of the Committee who is also the Deputy 
                    Speaker of the House of Representatives, Hon. Benjamin Kalu said the 
                    Memoranda should dwell on areas such as Public Revenue, Nigeria Police, 
                    Judiciary Reform, Electoral Reform, Socio-economic Rights, Indigeneship, 
                    State access to mining, principles of equity among others.<br />
                    <br />
                    He explained that the Committee is committed to achieving the aim of the 
                    Constitution Review in an open and transparent conversation explaining 
                    that it has set a target of four months to carry out its assignment.<br />
                    <br />
                    According to him, efforts are being made to ensure that the aim of the 
                    Committee is not polarized along political, religious, tribe and ethnic 
                    lines assuring that the Committee has set up a Technical team to achieve 
                    the purpose of the Committee.<br />
                    Speaking further, Hon. Kalu said that in line with the timetable of the 
                    Committee, the first draft will be out in August 2024, the second draft, 
                    October while the last copy, (harmonized) copy is expected to be out on 27 
                    and 28 February 2025.<br />
                    <br />
                    He further disclosed that the final copy of the draft Constitution is 
                    expected to be debated and considered on the floor of the House of 
                    Represented with the report of the debate expected to be out in April.<br />
                    <br />
                    “On May 22, 2025, the final report of the amended Constitution laid and 
                    debated while concurrence from the State Assemblies is expected to be 
                    ready on June 13, 2025 and is expected to be presented to the President 
                    for assent in August 2025”, he added.<br />
                </h3>
            </div>
        </div>
    </section>
  </main>
</template>

<script setup>

</script>

<style></style>