import Chart from "react-apexcharts"

const generateData = (length, options) => {
  return Array.from(Array(length)).map(() => Math.random() * 100)
}

const HeatMap = () => {
  const options = {
    chart: {
      height: 350,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#008FFB"],
    title: {
      text: "HeatMap Chart (Single color)",
    },
  }

  const series = [
    {
      name: "Metric1",
      data: generateData(100, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric2",
      data: generateData(100, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric3",
      data: generateData(100, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric4",
      data: generateData(100, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric5",
      data: generateData(100, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric6",
      data: generateData(100, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric7",
      data: generateData(100, {
        min: 0,
        max: 90,
      }),
    },
  ]

  return (
    <div id="chart">
      <Chart options={options} series={series} type="heatmap" height={350} />
    </div>
  )
}

export default HeatMap
