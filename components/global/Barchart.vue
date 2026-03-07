<template>
  <div class="h-full w-full grid grid-cols-1 xl:grid-cols-2">
    <div class="relative w-full">
      <client-only>
        <apexchart 
          type="bar" 
          height="350" 
          :options="chartOptions" 
          :series="series"
        ></apexchart>
      </client-only>
    </div>

    <!-- Custom Legend (unchanged) -->
    <div class="w-full">
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
  data: [58, 11, 14, 20, 2, 2]   // your values
}])

const chartOptions = reactive({
  chart: {
    type: 'bar',
    height: 350,
    toolbar: { show: false }
  },
  plotOptions: {
    bar: {
      borderRadius: 8,          // rounded corners
      horizontal: false,        // vertical bars (change to true for horizontal)
      columnWidth: '55%',       // width of bars
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