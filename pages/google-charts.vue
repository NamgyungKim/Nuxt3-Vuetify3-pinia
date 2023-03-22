<template>
  <div>
    <v-card class="ma-4 pa-4">
      <h1>GoogleCharts</h1>
      <div>
        <div id="chart_div"></div>
        <v-btn @click="add">add 도시락</v-btn>
      </div>
    </v-card>
    <v-card class="ma-4 pa-4">
      <div>
        <div id="avr_gender"></div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
useHead({
  script: [{ type: 'text/javascript', src: 'https://www.gstatic.com/charts/loader.js' }],
});

const orgData = ref([
  ['종류', '갯수'],
  ['도시락', 3],
  ['갈비탕', 4],
  ['오므라이스', 5],
  ['짬뽕', 1],
  ['비빔밥', 3],
  ['메밀소바', 1],
]);

const blood_data = ref([
  ['성별', 'O', 'A', 'B', 'AB', '평균'],
  ['남자', 519500, 647125, 501259, 218921, 471701.25],
  ['여자', 198660, 235849, 189358, 81781, 176412],
  ['모두', 718160, 882974, 690617, 300702, 648113.25],
]);

const add = () => {
  orgData.value[1][1] += 1;
  google.charts.setOnLoadCallback(drawChart);
};

const drawChart = () => {
  const data = google.visualization.arrayToDataTable([...orgData.value]);
  const options = { title: '선호하는 점심', is3D: true, height: 400 };
  const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
};

const get_blodTransfusionStateChart = () => {
  const data = google.visualization.arrayToDataTable([...blood_data.value]);
  const options = { title: '성별로 그룹화한 및 평균값 계산', seriesType: 'bars', series: { 4: { type: 'line' } }, height: 400, width: 500 };
  const chart = new google.visualization.ComboChart(document.getElementById('avr_gender'));
  chart.draw(data, options);
};

const updateChart = () => {
  google.charts.setOnLoadCallback(drawChart);
};

onMounted(() => {
  google.charts.load('current', { packages: ['corechart'] });
  updateChart();
  google.charts.setOnLoadCallback(get_blodTransfusionStateChart);
});
</script>

<style scoped></style>
