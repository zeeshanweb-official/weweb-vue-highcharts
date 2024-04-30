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
  name: "MyElement",

  components: {
    Chart,
    Highcharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "Fruit Consumption",
        },
        xAxis: {
          categories: ["Apples", "Bananas", "Oranges"],
        },
        yAxis: {
          title: {
            text: "Fruit eaten",
          },
        },
        series: [
          {
            name: "Jane",
            data: [1, 0, 4, 5, 2, 3],
          },
          {
            name: "John",
            data: [5, 7, 3, 4, 7, 2],
          },
        ],
      },
      lineChart: {
        title: {
          text: "U.S Solar Employment Growth",
          align: "left",
        },

        subtitle: {
          text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
          align: "left",
        },

        yAxis: {
          title: {
            text: "Number of Employees",
          },
        },

        xAxis: {
          accessibility: {
            rangeDescription: "Range: 2010 to 2020",
          },
        },

        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
        },

        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
            pointStart: 2010,
          },
        },

        series: [
          {
            name: "Installation & Developers",
            data: [
              43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174,
              155157, 161454, 154610,
            ],
          },
          {
            name: "Manufacturing",
            data: [
              24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726,
              34243, 31050,
            ],
          },
          {
            name: "Sales & Distribution",
            data: [
              11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243,
              29213, 25663,
            ],
          },
          {
            name: "Operations & Maintenance",
            data: [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              11164,
              11218,
              10077,
            ],
          },
          {
            name: "Other",
            data: [
              21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906,
              10073,
            ],
          },
        ],

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom",
                },
              },
            },
          ],
        },
      },
      arearange: {
        chart: {
          type: "arearange",
          zoomType: "x",
          scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1,
          },
        },
        title: {
          text: "Temperature variation by day",
        },
        xAxis: {
          type: "datetime",
          accessibility: {
            rangeDescription: "Range: Jan 1st 2017 to Dec 31 2017.",
          },
        },
        yAxis: {
          title: {
            text: null,
          },
        },
        tooltip: {
          crosshairs: true,
          shared: true,
          valueSuffix: "°C",
          xDateFormat: "%A, %b %e",
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Temperatures",
            data: [
              [1483228800000, 1.4, 4.7],
              [1483315200000, 1.1, 4.4],
              [1483401600000, 1.2, 4.2],
              [1483488000000, 2.1, 5.8],
              [1483574400000, 3.1, 6.7],
              [1483660800000, 3.8, 6.9],
              [1483747200000, 3.9, 6.4],
              [1483833600000, 3.5, 6.3],
              [1483920000000, 2.9, 5.8],
              [1484006400000, 3.9, 5.3],
              [1484092800000, 3.0, 5.2],
              [1484179200000, 2.6, 5.2],
              [1484265600000, 2.3, 4.6],
              [1484352000000, 2.0, 5.1],
              [1484438400000, 1.7, 4.6],
              [1484524800000, 2.3, 4.8],
              [1484611200000, 1.4, 4.9],
              [1484697600000, 1.9, 5.5],
              [1484784000000, 1.0, 4.6],
              [1484870400000, 0.5, 3.9],
              [1484956800000, 0.0, 3.6],
              [1485043200000, 0.5, 4.2],
              [1485129600000, 0.2, 4.1],
              [1485216000000, -0.3, 3.8],
              [1485302400000, -0.8, 3.3],
              [1485388800000, -0.6, 3.4],
              [1485475200000, -0.5, 3.5],
              [1485561600000, 0.2, 4.1],
              [1485648000000, 0.7, 4.8],
              [1485734400000, 0.7, 5.0],
              [1485820800000, 0.6, 4.8],
              [1485907200000, 0.3, 4.4],
              [1485993600000, 0.5, 4.1],
              [1486080000000, 0.2, 5.3],
              [1486166400000, 0.0, 5.1],
            ],
            color: {
              linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1,
              },
              stops: [
                [0, "#ff0000"],
                [1, "#0000ff"],
              ],
            },
          },
        ],
      },
      radialChart: {
        colors: ["#FFD700", "#C0C0C0", "#CD7F32"],
        chart: {
          type: "column",
          inverted: true,
          polar: true,
        },
        title: {
          text: "Winter Olympic medals per existing country (TOP 5)",
          align: "left",
        },
        subtitle: {
          text:
            "Source: " +
            '<a href="https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table"' +
            'target="_blank">Wikipedia</a>',
          align: "left",
        },
        tooltip: {
          outside: true,
        },
        pane: {
          size: "85%",
          innerSize: "20%",
          endAngle: 270,
        },
        xAxis: {
          tickInterval: 1,
          labels: {
            align: "right",
            useHTML: true,
            allowOverlap: true,
            step: 1,
            y: 3,
            style: {
              fontSize: "13px",
            },
          },
          lineWidth: 0,
          gridLineWidth: 0,
          categories: [
            'Norway <span class="f16"><span id="flag" class="flag no">' +
              "</span></span>",
            'United States <span class="f16"><span id="flag" class="flag us">' +
              "</span></span>",
            'Germany <span class="f16"><span id="flag" class="flag de">' +
              "</span></span>",
            'Austria <span class="f16"><span id="flag" class="flag at">' +
              "</span></span>",
            'Canada <span class="f16"><span id="flag" class="flag ca">' +
              "</span></span>",
          ],
        },
        yAxis: {
          lineWidth: 0,
          tickInterval: 25,
          reversedStacks: false,
          endOnTick: true,
          showLastLabel: true,
          gridLineWidth: 0,
        },
        plotOptions: {
          column: {
            stacking: "normal",
            borderWidth: 0,
            pointPadding: 0,
            groupPadding: 0.15,
            borderRadius: "50%",
          },
        },
        series: [
          {
            name: "Gold medals",
            data: [148, 113, 104, 71, 77],
          },
          {
            name: "Silver medals",
            data: [113, 122, 98, 88, 72],
          },
          {
            name: "Bronze medals",
            data: [124, 95, 65, 91, 76],
          },
        ],
      },
      pie1: {
        chart: {
          type: "pie",
        },
        title: {
          text: "Egg Yolk Composition",
        },
        tooltip: {
          valueSuffix: "%",
        },
        subtitle: {
          text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
        },
        plotOptions: {
          series: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: [
              {
                enabled: true,
                distance: 20,
              },
              {
                enabled: true,
                distance: -40,
                format: "{point.percentage:.1f}%",
                style: {
                  fontSize: "1.2em",
                  textOutline: "none",
                  opacity: 0.7,
                },
                filter: {
                  operator: ">",
                  property: "percentage",
                  value: 10,
                },
              },
            ],
          },
        },
        series: [
          {
            name: "Percentage",
            colorByPoint: true,
            data: [
              {
                name: "Water",
                y: 55.02,
              },
              {
                name: "Fat",
                sliced: true,
                selected: true,
                y: 26.71,
              },
              {
                name: "Carbohydrates",
                y: 1.09,
              },
              {
                name: "Protein",
                y: 15.5,
              },
              {
                name: "Ash",
                y: 1.68,
              },
            ],
          },
        ],
      },
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
      donut3d: {
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 40,
          },
        },
        title: {
          text: "Beijing 2022 gold medals by country",
          align: "left",
        },
        subtitle: {
          text: "3D donut in Highcharts",
          align: "left",
        },
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 45,
          },
        },
        series: [
          {
            name: "Medals",
            data: [
              ["Norway", 16],
              ["Germany", 12],
              ["USA", 8],
              ["Sweden", 8],
              ["Netherlands", 8],
              ["ROC", 6],
              ["Austria", 7],
              ["Canada", 4],
              ["Japan", 3],
            ],
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
};
</script>

<style lang="scss" scoped>
.my-element {
  p {
    font-size: 18px;
  }
}
</style>