import React, { Component } from "react";
import Chart from "react-apexcharts";
class App extends Component {
  constructor(props) {
    super(props);
    const { item } = this.props;
    const listLabel = ["Country risk", "Product risk"];
    item?.allRisque?.length > 2 && listLabel.push("Corresependence risk");
    this.state = {
      series: item?.allRisque,
      options: {
        chart: {
          height: 300,
          display: "flex",
          justifyContent: "flex-end",
          type: "radialBar",
        },
        stroke: {
          lineCap: "round",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Total",
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return `${item?.userRisque}%`;
                },
              },
            },
          },
        },

        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        labels: listLabel,
        legend: {
          show: true,
          floating: true,
          fontSize: "12px",

          offsetX: 450,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [
          {
            breakpoint: 600,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <Chart
          style={{ width: 670, backgroundColor: "blueYellow" }}
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={300}
        />
      </div>
    );
  }
}
export default App;
