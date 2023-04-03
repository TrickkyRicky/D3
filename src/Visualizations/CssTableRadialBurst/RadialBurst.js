import { arc, csv, pie } from "d3";
import React, { useEffect, useState } from "react";

const colorTableUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

const width = 600;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

const pieArc = arc().innerRadius(0).outerRadius(width);

const RadialBurst = () => {
  const [csvData, setCsvData] = useState();
  useEffect(() => {
    const getCsvData = async () => {
      setCsvData(await csv(colorTableUrl));
    };
    getCsvData();
  }, []);
  const colorPie = pie().value(1);
  return csvData ? (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {colorPie(csvData)?.map((d) => (
          <path fill={d.data["RGB hex value"]} d={pieArc(d)} />
        ))}
      </g>
    </svg>
  ) : null;
};
//  The example below is without the d3 pie generator
//  <g transform={`translate(${centerX}, ${centerY})`}>
//       {csvData?.map((d, i) => (
//         <path
//           fill={d["RGB hex value"]}
//           d={pieArc({
//             startAngle: (i / csvData.length) * 2 * Math.PI,
//             endAngle: ((i + 1) / csvData.length) * 2 * Math.PI,
//           })}
//         />
//       ))}
//     </g>

export default RadialBurst;
