<template>
  <div class="h-full w-full flex gap-4 items-start md:gap-8 lg:gap-16 
    lg:justify-between flex-col lg:flex-row"
  >
    <div class="relative w-full shrink-0 lg:w-1/2">
      <client-only>
        <apexchart
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </client-only>
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
import { reactive, computed, ref, onMounted } from 'vue'
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

const series = computed(() => {
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
  return [{ name: 'Count', data: counts }]
})

const chartOptions = reactive({
  chart: {
    type: 'bar',
    height: 350,
    toolbar: { show: false }
  },
  plotOptions: {
    bar: {
      borderRadius: 12,
      horizontal: false,
      columnWidth: '45%',
      dataLabels: { position: 'top' }
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#304758'],
      fontSize: '14px',
      fontFamily: 'Montserrat, sans-serif'
    },
    offsetY: -20
  },
  colors: ['#50B432', '#009141', '#007867', '#022923', '#B3B3B3'],
  xaxis: {
    categories: [
      'Bills Read First Time and Awaiting Second Reading',
      // 'Bills Read Second Time and Referred to Committees',
      'Bills Referred to Committee of the Whole',
      'Bills Passed by the House',
      'Bills Passed by House & Senate',
      'Bills Assented by President'
    ],
    labels: {
      style: {
        fontSize: '12px',
        fontFamily: 'Montserrat, sans-serif'
      }
    }
  },
  yaxis: {
    title: {
      text: 'Number of Bills',
      style: { fontFamily: 'Montserrat, sans-serif' }
    }
  },
  tooltip: {
    enabled: true,
    y: {
      formatter: val => `${val} Bills`
    }
  },
  legend: { show: false }
})

const chartData = computed(() => {
  return chartOptions.xaxis.categories.map((label, index) => ({
    label,
    color: chartOptions.colors[index]
  }))
})
</script>