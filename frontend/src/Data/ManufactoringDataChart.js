import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

export const data = [
  ["Year", "China", "Egypt, Arab Rep", "India", "Saudi Arabia", "USA"],
  [1960.0, 0, 0, 14.75011809, 0, 0],
  [1961.0, 0, 0, 15.35383648, 0, 0],
  [1962.0, 0, 0, 15.86329813, 0, 0],
  [1963.0, 0, 0, 15.75238835, 0, 0],
  [1964.0, 0, 0, 14.85073996, 0, 0],
  [1965.0, 0, 0, 15.01090777, 0, 0],
  [1966.0, 0, 0, 14.50399297, 0, 0],
  [1967.0, 0, 0, 13.23186125, 0, 0],
  [1968.0, 0, 0, 13.52278801, 7.74741323, 0],
  [1969.0, 0, 0, 14.14647158, 7.708312921, 0],
  [1970.0, 0, 0, 14.45654509, 8.251446201, 0],
  [1971.0, 0, 0, 14.98228674, 6.807314549, 0],
  [1972.0, 0, 0, 15.10254938, 5.971529245, 0],
  [1973.0, 0, 0, 15.01528531, 5.266548101, 0],
  [1974.0, 0, 16.79461492, 16.34591338, 4.878951262, 0],
  [1975.0, 0, 16.72634078, 15.83848666, 5.045479055, 0],
  [1976.0, 0, 14.81072696, 16.26588883, 4.630455541, 0],
  [1977.0, 0, 13.64206629, 16.08086893, 4.29493817, 0],
  [1978.0, 0, 13.50078917, 17.09644052, 4.560641936, 0],
  [1979.0, 0, 13.08028919, 17.85203449, 5.071886891, 0],
  [1980.0, 0, 12.35712563, 16.7523758, 4.09449447, 0],
  [1981.0, 0, 12.73938232, 16.77044375, 4.836583417, 0],
  [1982.0, 0, 12.18382615, 16.36999594, 4.919054956, 0],
  [1983.0, 0, 12.27819549, 16.66445469, 6.310316034, 0],
  [1984.0, 0, 12.8164557, 16.7078036, 7.751983906, 0],
  [1985.0, 0, 14.11796247, 16.41801286, 7.979576706, 0],
  [1986.0, 0, 14.40136054, 16.22158381, 7.785053544, 0],
  [1987.0, 0, 15.79999981, 16.20954935, 9.113051344, 0],
  [1988.0, 0, 16.8879875, 16.10153485, 9.131179304, 0],
  [1989.0, 0, 17.20129831, 16.9028459, 8.778680195, 0],
  [1990.0, 0, 16.97494739, 16.59759644, 8.543194879, 0],
  [1991.0, 0, 16.01777751, 15.67626016, 8.508851488, 0],
  [1992.0, 0, 15.62185478, 15.80079982, 8.972454859, 0],
  [1993.0, 0, 15.73453608, 15.91571211, 9.051635925, 0],
  [1994.0, 0, 16.01714286, 16.76413813, 9.352094361, 0],
  [1995.0, 0, 16.33823529, 17.8658506, 9.567327049, 0],
  [1996.0, 0, 16.53705318, 17.5963408, 9.755332594, 0],
  [1997.0, 0, 16.31553215, 16.51857853, 10.03165965, 16.08717738],
  [1998.0, 0, 16.97912317, 15.71931602, 10.5547226, 15.77432526],
  [1999.0, 0, 17.95351105, 15.18053671, 10.35554135, 15.4533061],
  [2000.0, 0, 17.99797118, 15.92702302, 9.609096678, 15.11687846],
  [2001.0, 0, 17.69807639, 15.30702128, 10.02230332, 13.92241964],
  [2002.0, 0, 17.91546582, 15.55870173, 10.26345381, 13.44541911],
  [2003.0, 0, 17.30383234, 15.58738665, 10.65968788, 13.31608311],
  [2004.0, 31.97506997, 17.23696682, 15.82724574, 10.33239702, 13.18019043],
  [2005.0, 32.09392433, 16.70954503, 15.97301704, 9.544120208, 12.99307441],
  [2006.0, 32.45232806, 15.97756192, 17.30365333, 9.597696032, 12.99411723],
  [2007.0, 32.38335312, 15.36992481, 16.86456778, 9.940759736, 12.78247055],
  [2008.0, 32.1194116, 15.52236739, 17.09867415, 8.983000335, 12.25570217],
  [2009.0, 31.59623809, 15.78615429, 17.14357767, 10.8506557, 11.73147203],
  [2010.0, 31.61282168, 16.10227084, 17.02993425, 11.0144036, 11.93268487],
  [2011.0, 32.06479119, 15.76719422, 16.13933744, 10.01146861, 11.95221067],
  [2012.0, 31.52857787, 16.16546844, 15.81692301, 9.789448047, 11.85220684],
  [2013.0, 30.67100807, 16.60837992, 15.25302269, 9.931378594, 11.80679992],
  [2014.0, 30.39644421, 16.77444601, 15.06557011, 10.79530665, 11.65242416],
  [2015.0, 28.95167058, 16.6974467, 15.58385459, 12.68447447, 11.63367733],
  [2016.0, 28.06944224, 16.84132649, 15.16223713, 12.90714056, 11.17131904],
  [2017.0, 28.10893687, 16.4435072, 15.01823875, 12.89216446, 11.12900317],
  [2018.0, 27.84101115, 16.19348943, 14.85326442, 12.80934765, 11.19770354],
  [2019.0, 26.77472177, 15.91269987, 13.32744188, 12.54002666, 10.92624892],
  [2020.0, 26.17590672, 16.19257732, 12.96168503, 12.9655545, 0],
];

var chartData = [];
export function ManufactoringDataChart(props) {
  const [chartData, setchartData] = useState([]);
  const range = useSelector((state) => state.countryRange.range);
  const country = useSelector((state) => state.countryRange.country);
  const filterData = () => {
    let filteredData = [["year", country]];
    let col = 0;
    if (country == "USA") {
      col = 5;
    } else if (country == "INDIA") {
      col = 4;
    } else if (country == "China") {
      col = 1;
    } else {
      setchartData(data);
      return;
    }
    let startYear = range[0];
    let endYear = range[1];
    for (let i = 1; i < data.length; i++) {
      let currYear = data[i][0];
      if (currYear <= endYear && currYear >= startYear) {
        filteredData.push([currYear, data[i][col]]);
      }
    }
    setchartData(filteredData);
  };

  useEffect(() => {
    console.log(range, country);
    filterData();
  }, [range, country]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="250px"
        data={chartData}
        options={{
          hAxis: {
            format: "#", // Use 'decimal' format to display integers without commas
          },
        }}
      />
    </div>
  );
}
