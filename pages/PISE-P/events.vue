<template>
    <section class="w-[92.5%] md:w-[90%] mx-auto py-16 md:py-20 lg:py-24">
        <h1 class="font-semibold text-[#022924] text-[2rem] md:text-4xl lg:text-5xl 
                font-montserrat mb-10 md:mb-12 lg:mb-16"
            >
                Past Events
            </h1>
        <SectionsEvents :events="events" />
    </section>
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
    {
        image: '/images/pisep/peace_fund.png',
        title: 'Peace Fund for Victims of Insecurity',
        body: `Rt. Hon. Benjamin Okezie Kalu, has inaugurated a 7-man Peace Fund Committee to raise 
            financial assistance for victims of insecurity in the South East region. This follows the 
            killing of soldiers in Aba, Abia State, which has been widely condemned.`,
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