<template>
  <div class="my-element">
    <!-- <Chart :options="chartOptions" /> -->
    <!-- <Chart :options="lineChart" /> -->
    <!-- <Chart :options="arearange" /> -->
    <!-- <Chart :options="radialChart" /> -->
    <!-- <Chart :options="pie1" /> -->
    <!-- <Chart :options="populatedChartData" v-if="populatedChartData" /> -->
    <!-- <Chart :options="donut3d" /> -->
    <wwLayoutItemContext
      path="data"
      :data="chart"
      :index="index"
      :item="null"
      v-for="(chart, index) in content.data"
      :key="index"
    >
      <Chart :options="chart" />
    </wwLayoutItemContext>
  </div>
</template>

<script>
import { Chart, Highcharts } from "highcharts-vue";
export default {
  name: "vue-highcharts",

  components: {
    Chart,
    Highcharts,
  },
  data() {
    return {
      chart3d: {
        chart: {
          type: "column",
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40,
          },
        },

        title: {
          text: " Electricity production in countries, grouped by continent",
          align: "left",
        },

        xAxis: {
          labels: {
            skew3d: true,
            style: {
              fontSize: "16px",
            },
          },
        },

        yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
            text: "TWh",
            skew3d: true,
            style: {
              fontSize: "16px",
            },
          },
        },

        tooltip: {
          headerFormat: "<b>{point.key}</b><br>",
          pointFormat:
            '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}',
        },

        plotOptions: {
          series: {
            pointStart: 2016,
          },
          column: {
            stacking: "normal",
            depth: 40,
          },
        },

        series: [
          {
            name: "South Korea",
            data: [563, 567, 590, 582, 571],
            stack: "Asia",
          },
          {
            name: "Germany",
            data: [650, 654, 643, 612, 572],
            stack: "Europe",
          },
          {
            name: "Saudi Arabia",
            data: [368, 378, 378, 367, 363],
            stack: "Asia",
          },
          {
            name: "France",
            data: [564, 562, 582, 571, 533],
            stack: "Europe",
          },
        ],
      },
    };
  },
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    // populatedChartData() {
    //   return this.content.chartData.chart3d;
    // },
  },
  mounted(){
    console.log('i am mounted')
  },
  updated(){
    console.log(this.content)
  }
};
</script>

<style lang="scss" scoped>
.my-element {
  p {
    font-size: 18px;
  }
}
</style>