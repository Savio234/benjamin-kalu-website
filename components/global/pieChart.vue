<template>
  <div class="flex h-full w-full flex-col justify-center items-center">
    <div class="relative w-full sm:w-7/12">
      <client-only>
        <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
      </client-only>
    </div>
    <!-- custom Legend -->
    <div class="w-full">
      <ul class="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
        <li v-for="(item, index) in chartData" class="flex items-center gap-1">
          <div class="w-8 h-4" :style="{ background: item.color }"></div>
          <p class="text-sm">{{ item.label }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const series = reactive([58, 11, 14, 20, 2, 2]);

const chartOptions = reactive({
  labels: [
    'Bills Read First Time and Awaiting Second Reading',
    'Bills Read Second Time and Referred to Committees',
    'Bills Referred to Committee of the Whole (Order 12 Rule 16)',
    'Bills Passed by the House of Representatives',
    'Bills Passed by the House of Representatives and the Senate',
    'Bills Assented to by the President',
  ],
  chart: {
    type: 'donut',
  },
  colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#B3B3B3'],
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false,
      },
      donut: {
        size: '0%',
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  legend: {
    show: false,
    position: 'bottom',
    horizontalAlign: 'left',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
  },
  tooltip: {
    enabled: true,
  },
});
const chartData = computed(() => {
  return chartOptions.labels.map((label, index) => ({
    label,
    color: chartOptions.colors[index],
  }));
});
</script>

<style lang="scss" scoped>
.cart {
  top: 35.5%;
  right: 38.5%;
}
.indicator {
  box-shadow: 0px 2px 8px 0px #00000026;
}
</style>
