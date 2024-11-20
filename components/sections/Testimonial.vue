<template>
  <div class="relative min-h-[600px] w-full bg-[#022924] py-16">
    <div class="absolute inset-0 z-0">
      <img src="/images/about/testimonial_background.png" alt="Background pattern" class="h-full w-full object-cover" />
    </div>

    <div class="relative z-10 mx-auto">
      <div class="text-white mx-8 md:mx-20">
        <h2 class="mb-2 text-5xl font-semibold font-montserrat">
          What People <span class="text-secondaryGreen">Say</span>
        </h2>
        <p class="text-md text-white my-3">See testimonials about the works of Benjamin Kalu</p>
        <div class="flex justify-start mb-2">
          <img src="/images/about/quote-up.png" alt="Quote left" class="w-24" />
        </div>
      </div>

      <div class="relative">
        <div class="relative overflow-hidden overflow-x-auto">
          <div
            class="flex transition-all duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentOffset}px)` }"
            ref="slideContainer"
          >
            <div
              v-for="testimonial in loopedTestimonials"
              :key="testimonial.id"
              class="px-4 flex-shrink-0 w-full md:w-2/3 lg:w-[40%]"
            >
              <div class="flex h-auto min-h-[300px] items-center justify-center rounded-2xl bg-white shadow-lg">
                <div class="flex flex-col justify-center w-full px-8 py-12">
                  <p class="text-gray font-montserrat text-justify">"{{ testimonial.quote }}"</p>
                  <div class="mt-6">
                    <p class="font-[500] text-gray-800">{{ testimonial.author }}, {{ testimonial.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end mt-2 mx-8 md:mx-20">
          <img src="/images/about/quote-down.png" alt="Quote right" class="w-24" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
const testimonials = [
  {
    id: 1,
    quote:
      'He speaks not only for the House of Representatives but for the entire National Assembly and he has done that so well. Abia is blessed to have Rep. Benjamin Kalu.',
    author: 'Sen. Ahmed Lawan',
    title: 'President of the 9th Senate',
  },
  {
    id: 2,
    quote:
      'He is a chairman who continues to think outside the box and who is taking this media committee to a towering height like never before in the national assembly. His capacity, his ability, his competence, his passion and that of the committee and the rest of the committee remains unparalleled in the history of the media committee of the house of representatives.',
    author: 'Rt. Hon. Femi Gbajabiamila',
    title: 'Speaker of the 9th House of Reps.',
  },
  {
    id: 3,
    quote:
      'You have shown excellence spirit in all assignments you are asked to handle and the glory around you is because you love God.',
    author: 'Boss Mustapha',
    title: 'fmr. Secretary to the Government of the Federation',
  },
  {
    id: 4,
    quote:
      'Hon Benjamin Kalu is the representative for Abia state, not Bende alone, and his style of politics without bitterness has closed the door to rancour and acrimony among politicians of diverse party colours.',
    author: 'Gov. Okezie Ikpeazu',
    title: 'fmr. Abia State Governor',
  },
  {
    id: 5,
    quote:
      'Hon. Benjamin Kalu has delivered on all assignments he has been given in politics and outside politics, a good role model for the young generation. He is an honest person not easily moved by money, fame or pleasures.',
    author: 'Senator Orji Kalu',
    title: '',
  },
  {
    id: 6,
    quote:
      'Hon. Benjamin Kalu has opened our eyes to what we never knew existed in this office he is occupying. We are happy with his representation.',
    author: 'Eze Uwakwe Ukaegbu',
    title: 'Chairman of Traditional Rulers Bende',
  },
  {
    id: 7,
    quote:
      "As the Chairman of Item Traditional Rulers Council, I want to talk about Benjamin Kalu's outstanding reputation. As a representative within two years, he has put smiles in the lives of his constituents. He has attracted so many road projects in the Constituency. He has done what nobody has ever done in the Constituency and we are proud of him.",
    author: 'HRH Innocent Mba',
    title: 'Chairman, Item Traditional Rulers Council',
  },
  {
    id: 8,
    quote:
      'I am excited about his quality of leadership. Of course the fact that he was made the Chairman of Media and Public Affairs speaks volumes about his person, charisma and ingenuity. I am indeed captivated by his level of humility despite his position. The several encounters I have had with him made indelible marks in my life.',
    author: 'His Lordship, Bishop O.C. Chiemeka',
    title: 'Diocese of Uzuakoli',
  },
  {
    id: 9,
    quote:
      'He has a rare and distinctive characterization. He is capable of autonomous thought processes. He is unlike the most political figures that depend largely on thinking of their aides and PAs to fortify himself. Each time I watch him on the floor of the house and the television, he acquits him admirably in extempore engagement. He is well exposed, properly educated with good comportment. With the elements so mixed up in him, he can hold various political positions.',
    author: 'Dr. Soni Ajala',
    title: '',
  },
  {
    id: 10,
    quote:
      'Hon. Benjamin Kalu is a very articulate and humble man, someone who wants to reach out to others and touch lives. We pray that his service will not be limited to what he is doing now, that will continue to serve humanity, Bende, Abia State and beyond.',
    author: 'Sir. Ndukwe Osogho Ajala',
    title: 'OON. Chairman/CEO, Soulmate Industries Ltd.',
  },
  {
    id: 11,
    quote:
      "Hon. Benjamin Okezie Kalu, is a kind man with a very good heart who has great love for the Nkpa community. I have the consent of the traditional rulers to say that he should regard himself as a son of the Nkpa community. We don't have enough to thank him but I want to advise every Nkpa son and daughter who is desirous of going to the House of Representatives, to please keep back his ambition because there is no Vacancy until Benjamin Kalu says he is not going again.",
    author: 'Justice Imo',
    title: '',
  },
];

const currentIndex = ref(0);
const slideContainer = ref(null);
const currentOffset = ref(0);
const slideWidth = ref(0);
const isTransitioning = ref(false);

const loopedTestimonials = computed(() => {
  return [...testimonials, ...testimonials, ...testimonials];
});

const updateSlideWidth = () => {
  if (slideContainer.value) {
    const firstSlide = slideContainer.value.firstElementChild;
    if (firstSlide) {
      slideWidth.value = window.innerWidth < 768 ? window.innerWidth : firstSlide.offsetWidth;
    }
  }
};

const updateOffset = () => {
  currentOffset.value = currentIndex.value * slideWidth.value;
};

const handleTransitionEnd = () => {
  isTransitioning.value = false;
  if (currentIndex.value >= testimonials.length * 2) {
    isTransitioning.value = true;
    currentIndex.value = testimonials.length;
    updateOffset();
  } else if (currentIndex.value < testimonials.length) {
    isTransitioning.value = true;
    currentIndex.value = testimonials.length;
    updateOffset();
  }
};

const nextSlide = () => {
  if (!isTransitioning.value) {
    isTransitioning.value = true;
    currentIndex.value++;
    updateOffset();
  }
};

onMounted(() => {
  updateSlideWidth();
  window.addEventListener('resize', updateSlideWidth);

  currentIndex.value = testimonials.length; // Start from the middle to allow infinite scroll effect
  updateOffset();

  const interval = setInterval(nextSlide, 5000);

  onUnmounted(() => {
    window.removeEventListener('resize', updateSlideWidth);
    clearInterval(interval);
  });
});
</script>

<style scoped>
.overflow-hidden::-webkit-scrollbar {
  display: none;
}

.overflow-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
