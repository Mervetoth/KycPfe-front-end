import React, { Component } from "react";
import Chart from "react-apexcharts";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            barHeight: "85%",
            horizontal: false,

            endingShape: "rounded",
          },
        },
        dataLabels: {},
        colors: ["#6C63FF"],

        chart: {
          id: "apexchart-example",
        },
        xaxis: {
          categories: this.props?.listName,
        },
      },
      series: [
        {
          name: "series-1",
          data: this.props?.listValue,
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width={600}
        height={200}
      />
    );
  }
}
export default App;
