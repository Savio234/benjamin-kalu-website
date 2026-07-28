<template>
    <main>
        <section class="register_bg pb-8 md:pb-12 lg:pb-16 flex items-center justify-center w-full">
            <div class="w-[92.5%] md:w-[90%] mt-80 md:mt-60 lg:mt-40 xl:mt-0 mx-auto">
                <h1 class="text-white font-adamina font-normal text-2xl md:text-4xl 
                    lg:text-5xl text-center"
                >
                    <span class="text-[#D2E01A] font-adamina font-normal text-2xl md:text-4xl 
                    lg:text-5xl text-center">Register Now</span>  for the <br /> Tech for Peace Programme
                </h1>
                <div class="mx-auto md:px-6 lg:px-[3.125rem] py-0 md:py-6 lg:py-14 
                    md:bg-[#FFF] mt-4 md:mt-8 lg:mt-14 rounded-3xl"
                >
                    <div class="grid grid-cols-1 mb-4 gap-4 md:gap-2 md:grid-cols-2 lg:grid-cols-3">
                        <input class="bg-[#E1E1E1] gray_bg h-10 md:h-12 lg:h-14 px-4 py-2.5 rounded-[2rem]" 
                            placeholder="Full Name" />
                        <input class="bg-[#E1E1E1] gray_bg h-10 md:h-12 lg:h-14 px-4 py-2.5 rounded-[2rem]" 
                            placeholder="Middle Name" />
                        <input class="bg-[#E1E1E1] gray_bg h-10 md:h-12 lg:h-14 px-4 py-2.5 rounded-[2rem]" 
                            placeholder="Last Name" />
                    </div>
                    <div class="grid grid-cols-1 mb-4 gap-4 md:gap-2 md:grid-cols-2">
                        <input class="bg-[#E1E1E1] gray_bg h-10 md:h-12 lg:h-14 px-4 py-2.5 rounded-[2rem]" 
                            placeholder="Date of Birth" />
                    </div>
                    <div class="grid grid-cols-1 mb-4 gap-4 md:gap-2 md:grid-cols-2">
                        <select class="gray_bg h-10 md:h-12 lg:h-14 px-6 py-2.5 rounded-[2rem]" 
                            placeholder="State of origin" v-if="states"
                        >
                            <option value="" selected disabled>State of origin</option>
                            <option v-for="(item, index) in states" :key="index" :value="item.value">
                                {{ item.label }}
                            </option>
                        </select>
                        <select class="gray_bg h-10 md:h-12 lg:h-14 px-6 py-2.5 rounded-[2rem]" 
                            placeholder="State of Residence" v-if="states"
                        >
                            <option value="" selected disabled>State of Residence</option>
                            <option v-for="(item, index) in states" :key="index" :value="item.value">
                                {{ item.label }}
                            </option>
                        </select>
                    </div>
                    <div class="grid grid-cols-1 mb-4 gap-4 md:gap-2 md:grid-cols-2">
                        <select class="gray_bg h-10 md:h-12 lg:h-14 px-6 py-2.5 rounded-[2rem]" 
                            placeholder="Highest level of education"
                        >
                            <option value="" selected disabled>
                                Highest level of education
                            </option>
                            <option value="SSCE">SSCE</option>
                            <option value="BSc">Barchelors' Degree</option>
                            <option value="MSc">Masters</option>
                            <option value="PhD">Doctorate</option>
                        </select>
                    </div>
                    <div class="grid grid-cols-1 mb-4 gap-4 md:gap-2 md:grid-cols-2">
                        <input class="bg-[#E1E1E1] gray_bg h-10 md:h-12 lg:h-14 px-4 py-2.5 rounded-[2rem]" 
                            placeholder="Email" />
                        <input class="bg-[#E1E1E1] gray_bg h-10 md:h-12 lg:h-14 px-4 py-2.5 rounded-[2rem]" 
                            placeholder="Phone number" />
                    </div>
                    <button @click=""
                        class="bg-[#146634] flex cursor-pointer items-center justify-center 
                        w-full md:w-1/2 mt-4 py-3 md:py-4 lg:py-6 md:mt-6 px-6 
                        rounded-full shrink-0"
                    >
                        <p class="font-bold font-montserrat text-white text-sm md:text-base">
                            Submit
                        </p>
                    </button>
                </div>

            </div>
        </section>
    </main>
</template>

<script setup>
const states = [
    {
        label: 'Abia',
        value: 'abia',
    },
    {
        label: 'Anambra',
        value: 'anambra',
    },
    {
        label: 'Ebonyi',
        value: 'ebonyi',
    },
    {
        label: 'Enugu',
        value: 'enugu',
    },
    {
        label: 'Imo',
        value: 'imo',
    },
]
</script>

<style lang="scss" scoped>
.register_bg {
    background-image: url('/public/images/pisep/tech_for_peace.jpg');
    background-color: rgba($color: #000000, $alpha: 0.5);
    background-blend-mode: overlay;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    height: 85dvh;
}
.gray_bg {
    background: #E1E1E1!important;
}
</style>