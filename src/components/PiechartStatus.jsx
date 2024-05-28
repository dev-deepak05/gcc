import * as React from 'react';
import { DefaultizedPieValueType } from '@mui/x-charts/models';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Advisory board', value: 25, color: '#3D88FB' },
  { label: 'Development', value: 10, color: '#5637C8' },
  { label: 'Bounties', value: 10, color: '#00D89E' },
  { label: 'Reserve', value: 10, color: '#ACDF35' },
  { label: 'Pre-sale', value: 20, color: '#FF8539' },
  { label: 'Token Sale', value: 25, color: '#FF1336' },
];

const sizing = {
  margin: { right: 5 },
  width: 250,
  height: 250,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL;
//   return `${(percent * 100).toFixed(0)}%`;
};

export default function PieChartWithCustomizedLabel() {
  return (
    <PieChart
      series={[
        {
          outerRadius: 120,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
      {...sizing}
    />
  );
}
