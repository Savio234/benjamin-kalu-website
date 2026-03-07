<template>
  <div class="h-full w-full flex gap-4 items-start md:gap-6 lg:gap-10 lg:justify-between 
    flex-col lg:flex-row"
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
      <ul class="grid w-full grid-cols-1 gap-2 text-xs">
        <li v-for="(item, index) in chartData" :key="index" class="flex flex-col items-start gap-1">
          <div class="w-8 h-4" :style="{ background: item.color }"></div>
          <p class="text-sm w-auto md:w-3/4">{{ item.label }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const series = reactive([{
  name: 'Count',
  data: [58, 11, 14, 20, 2, 2]
}])

const chartOptions = reactive({
  chart: {
    type: 'bar',
    height: 350,
    toolbar: { show: false }
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      horizontal: false,
      columnWidth: '50%',
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
  colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#FF9655', '#6AF9C4'],
  xaxis: {
    categories: [
      'Bills Read First Time and Awaiting Second Reading',
      'Bills Read Second Time and Referred to Committees',
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