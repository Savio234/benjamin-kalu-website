<template>
  <div class="container mx-auto px-4 py-8 md:px-12 lg:px-16">
    <h2 class="text-2xl font-bold mb-6 font-montserrat">Past Events</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <CardEvent v-for="event in sortedEvents" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Unveiling of the Peace in South East Project',
    description:
      'Peace in South East Project (PSEP) in an initiative of the Orashi Regional Development Project in collaboration with Peace Response (ORP), in partnership with unveiled in the ancient town of Mbaise, Imo State, on 29 December 2023. The unveiling, which was also used as a grand sensitization ceremony by the UNDSS attracted traditional policy stakeholders from four South East and Beyond, including President Bola Tinubu, who was represented by the Vice President.',
    image: '/images/pisep/award-1.png',
    date: '2023-12-29',
  },
  {
    id: 2,
    title: 'Food For Peace Initiative',
    description:
      "Dr. Hon. Benjamin Okezie Kalu has launched the 'Food For Peace' initiative as part of wider peace-building and reconciliation plans at PSEP. Dr at the event mentioned 'In Hungry Man is an Angry Man' recognizes the importance of food in the drive for peace in the region hence its quick implementation.",
    image: '/images/pisep/award-2.png',
    date: '2024-01-15',
  },
  {
    id: 3,
    title: 'Peace Fund for Victims of Insecurity',
    description:
      'Rt. Hon. Benjamin Okezie Kalu has inaugurated a 7-man Peace Fund Committee to raise financial assistance for victims of insecurity in the South East region. This follows the killing of soldiers in Imo, Abia State which has been widely condemned.',
    image: '/images/pisep/award-4.png',
    date: '2024-02-01',
  },
  {
    id: 4,
    title: 'Road Walk',
    description:
      "Fitness Walk on End of November tagged 'RoadWalk For Peace & Unity'. PSEP inaugurated the Walking Exercise which saw the Speaker, House of Representatives, Rt. Hon. Benjamin Okezie Kalu as guest, was organized by Extreme Fitness with De Larrick in collaboration with Peace in South East Project.",
    image: '/images/pisep/award-3.png',
    date: '2023-11-30',
  },
];

export default defineComponent({
  computed: {
    sortedEvents(): Event[] {
      return [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    },
  },
});
</script>
