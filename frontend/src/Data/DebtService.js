
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

export const data = [
  ["Year", "India", "China", "US"],
  [1960,0,0,0],
  [1961,0,0,0],
  [1962,0,0,0],
  [1963,0,0,0],
  [1964,0,0,0],
  [1965,0,0,0],
  [1966,0,0,0],
  [1967,0,0,0],
  [1968,0,0,0],
  [1969,0,0,0],
  [1970,2.19303005229444,0,0],
  [1971,0.861678270716067,0,0],
  [1972,0.901263607576365,0,0],
  [1973,0.816506871013134,0,0],
  [1974,0.822457211883897,0,0],
  [1975,0.876838577749487,0,0],
  [1976,1.17697893902793,0,0],
  [1977,1.01006514216811,0,0],
  [1978,0.952123541884062,0,0],
  [1979,0.836547889910224,0,0],
  [1980,0.74871712563341,0,0],
  [1981,0.801602900821784,0.890595955994368,0],
  [1982,0.986984663695024,1.03467802431667,0],
  [1983,1.14121173975104,1.16227212942934,0],
  [1984,1.36133393028576,0.875207088288995,0],
  [1985,1.47160338011235,0.799716735265231,0],
  [1986,2.01146607100667,0.989826739647652,0],
  [1987,1.89043205839311,1.41192060324589,0],
  [1988,1.9000061244121,1.46195844270027,0],
  [1989,2.23167317941007,1.62389721357691,0],
  [1990,2.42896753511004,1.95039548296295,0],
  [1991,2.79985168851234,2.1619220972275,0],
  [1992,2.56225891335771,2.0178293228644,0],
  [1993,2.87896752269331,2.2909420748735,0],
  [1994,3.23442716238468,1.97713718750346,0],
  [1995,3.68764122478971,2.0848493211214,0],
  [1996,3.00746392115796,1.85094149785744,0],
  [1997,2.95321028305708,1.940489396007,0],
  [1998,2.82088699407914,1.82087728323246,0],
  [1999,2.18097561513434,2.46232604984238,0],
  [2000,2.30193534409001,2.22367181024887,0],
  [2001,2.44583880286812,1.89356673793177,0],
  [2002,3.01941996806189,2.13600313493504,0],
  [2003,4.27098120432659,2.2738255709742,0],
  [2004,2.48637589416577,1.1948269883264,0],
  [2005,2.93712915145645,1.211720811139,0],
  [2006,1.86526396402304,1.00291086150362,0],
  [2007,3.25206700897878,0.896095178290667,0],
  [2008,2.59909764279859,0.721290268604901,0],
  [2009,1.23889459625523,0.78348996041475,0],
  [2010,1.47271486582933,0.85961092252393,0],
  [2011,1.62038919564452,0.839428173726827,0],
  [2012,1.68674507572998,0.84872300462781,0],
  [2013,2.11299317059356,0.81321181907537,0],
  [2014,4.60624172326587,0.777973478654392,0],
  [2015,2.38855810697674,1.15076651873341,0],
  [2016,3.42449668768301,1.5007719321014,0],
  [2017,1.953060654894,1.67786861032763,0],
  [2018,2.38020683071318,1.74165637303001,0],
  [2019,1.82515674833964,1.93672227480076,0],
  [2020,2.92388526138069,1.87558483285622,0],
  [2021,1.57903396764055,1.9071118611987,0],
  [2022,0,0,0],  
];

export function DebtService(props) {
  const [chartData, setchartData] = useState([]);
  const range = useSelector((state) => state.countryRange.range);
  const country = useSelector((state) => state.countryRange.country);
  const filterData = () => {
    let filteredData = [["year", country]];
    let col = 0;
    if (country == "USA") {
      col = 3;
    } else if (country == "INDIA") {
      col = 1;
    } else if (country == "China") {
      col = 2;
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
