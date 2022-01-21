import { ResponsiveTimeRange } from "@nivo/calendar"

const data = [
  {
    value: 52,
    day: "2018-08-07",
  },
  {
    value: 117,
    day: "2018-04-19",
  },
  {
    value: 353,
    day: "2018-05-25",
  },
  {
    value: 312,
    day: "2018-04-18",
  },
  {
    value: 15,
    day: "2018-05-26",
  },
  {
    value: 293,
    day: "2018-04-14",
  },
  {
    value: 129,
    day: "2018-04-20",
  },
  {
    value: 19,
    day: "2018-06-01",
  },
  {
    value: 293,
    day: "2018-08-09",
  },
  {
    value: 381,
    day: "2018-06-12",
  },
  {
    value: 201,
    day: "2018-07-06",
  },
  {
    value: 382,
    day: "2018-06-08",
  },
  {
    value: 63,
    day: "2018-04-06",
  },
  {
    value: 298,
    day: "2018-07-16",
  },
  {
    value: 194,
    day: "2018-07-28",
  },
  {
    value: 139,
    day: "2018-04-05",
  },
  {
    value: 168,
    day: "2018-06-25",
  },
  {
    value: 201,
    day: "2018-05-04",
  },
  {
    value: 229,
    day: "2018-06-27",
  },
  {
    value: 342,
    day: "2018-07-05",
  },
  {
    value: 17,
    day: "2018-05-19",
  },
  {
    value: 91,
    day: "2018-06-19",
  },
  {
    value: 109,
    day: "2018-05-29",
  },
  {
    value: 3,
    day: "2018-07-13",
  },
  {
    value: 359,
    day: "2018-07-27",
  },
  {
    value: 92,
    day: "2018-06-10",
  },
  {
    value: 385,
    day: "2018-04-13",
  },
  {
    value: 377,
    day: "2018-04-07",
  },
  {
    value: 4,
    day: "2018-07-02",
  },
  {
    value: 34,
    day: "2018-05-12",
  },
  {
    value: 260,
    day: "2018-07-18",
  },
  {
    value: 86,
    day: "2018-08-10",
  },
  {
    value: 33,
    day: "2018-05-14",
  },
  {
    value: 344,
    day: "2018-05-08",
  },
  {
    value: 78,
    day: "2018-05-27",
  },
  {
    value: 395,
    day: "2018-06-26",
  },
  {
    value: 374,
    day: "2018-06-11",
  },
  {
    value: 253,
    day: "2018-07-08",
  },
  {
    value: 124,
    day: "2018-04-23",
  },
  {
    value: 288,
    day: "2018-08-06",
  },
  {
    value: 289,
    day: "2018-06-21",
  },
  {
    value: 137,
    day: "2018-07-14",
  },
  {
    value: 315,
    day: "2018-07-12",
  },
  {
    value: 84,
    day: "2018-04-10",
  },
  {
    value: 216,
    day: "2018-06-23",
  },
  {
    value: 378,
    day: "2018-06-30",
  },
  {
    value: 132,
    day: "2018-06-13",
  },
  {
    value: 317,
    day: "2018-06-06",
  },
  {
    value: 92,
    day: "2018-04-03",
  },
  {
    value: 343,
    day: "2018-05-24",
  },
  {
    value: 343,
    day: "2018-06-29",
  },
  {
    value: 115,
    day: "2018-05-30",
  },
  {
    value: 86,
    day: "2018-06-09",
  },
  {
    value: 30,
    day: "2018-08-11",
  },
  {
    value: 112,
    day: "2018-05-23",
  },
  {
    value: 116,
    day: "2018-07-24",
  },
  {
    value: 85,
    day: "2018-08-04",
  },
  {
    value: 23,
    day: "2018-06-02",
  },
  {
    value: 315,
    day: "2018-06-18",
  },
  {
    value: 69,
    day: "2018-06-24",
  },
  {
    value: 347,
    day: "2018-08-02",
  },
  {
    value: 302,
    day: "2018-07-09",
  },
  {
    value: 12,
    day: "2018-07-30",
  },
  {
    value: 85,
    day: "2018-06-04",
  },
  {
    value: 362,
    day: "2018-04-22",
  },
  {
    value: 370,
    day: "2018-08-08",
  },
  {
    value: 369,
    day: "2018-04-09",
  },
  {
    value: 310,
    day: "2018-05-16",
  },
  {
    value: 390,
    day: "2018-04-02",
  },
  {
    value: 273,
    day: "2018-05-21",
  },
  {
    value: 326,
    day: "2018-04-15",
  },
  {
    value: 211,
    day: "2018-05-11",
  },
  {
    value: 349,
    day: "2018-05-18",
  },
  {
    value: 278,
    day: "2018-04-28",
  },
  {
    value: 295,
    day: "2018-04-27",
  },
  {
    value: 188,
    day: "2018-05-17",
  },
  {
    value: 397,
    day: "2018-06-14",
  },
  {
    value: 388,
    day: "2018-05-02",
  },
  {
    value: 264,
    day: "2018-07-11",
  },
  {
    value: 74,
    day: "2018-07-25",
  },
  {
    value: 95,
    day: "2018-07-03",
  },
  {
    value: 382,
    day: "2018-07-20",
  },
  {
    value: 31,
    day: "2018-06-28",
  },
  {
    value: 284,
    day: "2018-06-03",
  },
  {
    value: 295,
    day: "2018-04-29",
  },
  {
    value: 267,
    day: "2018-05-05",
  },
  {
    value: 194,
    day: "2018-04-30",
  },
  {
    value: 92,
    day: "2018-04-08",
  },
]

const HeatMap = () => {
  return (
    <ResponsiveTimeRange
      data={data}
      from="2018-04-01"
      to="2018-08-12"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          justify: false,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
          translateX: -60,
          translateY: -60,
          symbolSize: 20,
        },
      ]}
    />
  )
}

export default HeatMap
