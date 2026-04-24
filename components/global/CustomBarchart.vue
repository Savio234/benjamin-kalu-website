<template>
  <div class="w-full flex flex-col lg:flex-row items-start
    md:justify-between gap-8 md:gap-12 lg:gap-16 pt-16 pb-10 overflow-hidden"
  >
    <div class="w-full shrink-0 lg:w-1/2">
      <div class="relative h-[22.5rem] md:h-[25rem] flex font-sans">
        <div class="w-10 md:w-16 h-full flex flex-col justify-between items-end pr-3 
          font-semibold text-gray-800 text-sm md:text-base shrink-0"
        >
          <div v-for="(tick, index) in yTicks" :key="'y-'+index"
            class="h-0 flex items-center relative"
          >
            <span class="absolute right-1 sm:right-3">{{ tick }}</span>
          </div>
        </div>
  
        <div class="relative flex-1 border-b border-gray-400">
          <div v-for="(tick, i) in yTicks" :key="'line-'+i"
            class="absolute w-full border-b border-dashed border-gray-400 left-0"
            :style="{ top: `${(i / (yTicks.length - 1)) * 100}%` }"
          ></div>
  
          <div class="absolute inset-0 flex justify-around items-end z-10 px-2 gap-4 md:gap-6 
            lg:px-10"
          >
            <div v-for="(item, i) in seriesData" :key="'bar-'+i"
              class="relative w-16 md:w-24 h-full flex justify-center group"
            >
              <div class="absolute top-24 md:top-28 lg:top-0 opacity-0 
                group-hover:opacity-100 
                transition-opacity bg-gray-900 shadow-xl border border-gray-700 z-50 p-3 
                rounded-lg text-center min-w-40 md:min-w-[12.5rem] pointer-events-none"
              >
                <p class="font-bold text-white text-lg">{{ item.count }} Bills</p>
                <p class="text-[11px] md:text-xs text-gray-300 font-medium leading-tight 
                  whitespace-normal mt-1"
                >
                  {{ item.label }}
                </p>
              </div>
  
              <div class="absolute bottom-0 w-full bg-[#DFDFDF] rounded-t-[3.5rem] 
                transition-all duration-300"
                style="height: 115%;"
              >
                <div v-if="item.count > 0" class="absolute top-4 w-full text-center 
                  font-extrabold text-[#B3B3B3] text-xl md:text-3xl tracking-wide select-none"
                >
                  {{ item.count }}
                </div>
              </div>
  
              <div class="absolute bottom-0 w-full rounded-t-[50px] transition-all 
                duration-700 ease-in-out cursor-pointer hover:brightness-110"
                :style="{ height: `${item.heightPercentage}%`, backgroundColor: item.color }"
              ></div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="flex mt-8 ml-10 md:ml-12">
        <div class="flex-1 flex justify-around px-2 lg:px-10">
          <div 
            v-for="(item, i) in seriesData" 
            :key="'dot-'+i" 
            class="w-16 md:w-24 flex justify-center"
          >
            <div 
              class="w-3 h-3 md:w-4 md:h-4 rounded-full" 
              :style="{ backgroundColor: item.color }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full shrink-0 lg:w-1/2">
      <ul class="flex w-full flex-col gap-4 md:gap-6 text-xs">
        <li v-for="(item, index) in chartData" :key="index"
          class="flex flex-col items-start gap-1"
        >
          <div class="w-8 h-4" :style="{ background: item.color }"></div>
          <p class="text-sm w-auto md:w-3/4 lg:w-1/2">{{ item.label }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useMyBillsStore } from '@/stores/bills'

const chartBills = ref([])

onMounted(async () => {
  try {
    const storeBills = await useMyBillsStore().getAllBills(1, 1000)
    if (storeBills && storeBills.data) {
      chartBills.value = storeBills.data
    }
  } catch (e) {
    console.error(e)
  }
})

const seriesData = computed(() => {
  const counts = [0, 0, 0, 0, 0];
  chartBills.value.forEach((b) => {
    const s = (b.attributes.status || "").toLowerCase();
    if (s.includes("first time") || s.includes("awaiting second") || s.includes("first reading")) {
      counts[0]++;
    } else if (s.includes("committee of the whole") || s.includes("committee stage")) {
      counts[1]++;
    } else if (s.includes("passed by the house") && !s.includes("senate")) {
      counts[2]++;
    } else if (s.includes("senate") || s.includes("transmitted to senate")) {
      counts[3]++;
    } else if (s.includes("assent")) {
      counts[4]++;
    } else {
      counts[0]++;
    }
  });

  const categories = [
    'Bills Read First Time and Awaiting Second Reading',
    'Bills Referred to Committee of the Whole',
    'Bills Passed by the House',
    'Bills Passed by House & Senate',
    'Bills Assented by President'
  ];
  
  // Adjusted the color array to exactly match the aesthetic sequence 
  // from left to right as requested in the reference image using
  // the exact hex codes from the original Barchart.vue
  const colors = ['#50B432', '#022923', '#007867', '#009141', '#B3B3B3'];

  // Base fallback max to handle dynamic growth correctly up to multiples of 10/50
  const maxData = Math.max(...counts, 5);
  let stepSize = Math.ceil(maxData / 5);
  if (stepSize < 10) stepSize = 10;
  else if (stepSize < 50) stepSize = Math.ceil(stepSize / 10) * 10;
  else stepSize = Math.ceil(stepSize / 50) * 50;
  
  const maxRange = stepSize * 5;

  return counts.map((count, i) => ({
     count,
     label: categories[i],
     color: colors[i],
     // If value is 0, give it a tiny 2% height so the grey "bump" is visible,
     // matching the 5th item in the exact reference image.
     heightPercentage: count === 0 ? 2 : (count / maxRange) * 100 
  }));
})

const yTicks = computed(() => {
  const dataRef = chartBills.value.length ? seriesData.value.map(d => d.count) : [0];
  const maxData = Math.max(...dataRef, 5);
  let stepSize = Math.ceil(maxData / 5);
  if (stepSize < 10) stepSize = 10;
  else if (stepSize < 50) stepSize = Math.ceil(stepSize / 10) * 10;
  else stepSize = Math.ceil(stepSize / 50) * 50;
  
  return [5, 4, 3, 2, 1, 0].map(multiplier => multiplier * stepSize);
})

const chartData = [
  {
    color: '#50B432',
    label: 'Bills Read First Time and Awaiting Second Reading'
  },
  {
    color: '#009141',
    label: 'Bills Referred to Committee of the Whole'
  },
  {
    color: '#007867',
    label: 'Bills Passed by the House'
  },
  {
    color: '#022923',
    label: 'Bills Passed by House & Senate'
  },
  {
    color: '#B3B3B3',
    label: 'Bills Assented by President'
  },
]

</script>
