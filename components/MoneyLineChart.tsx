'use client';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

interface OptionsLine {
  color: string;
  key: string;
  name: string;
}

interface Options {
  lines: OptionsLine[];
  XAxis: string;
}

interface MoneyLineChart {
  width?: number;
  height?: number;
  data: Array<Object>;
  options: Options;
}

const MoneyLineChart = ({ width, height, data, options }: MoneyLineChart) => {
  return (
    <LineChart
      width={width}
      height={height}
      data={data}
      className={'text-xs text-light-100'}
    >
      {options.lines &&
        options.lines.map((line) => (
          <Line
            key={line.key}
            type="monotone"
            dataKey={line.key}
            stroke={line.color}
            name={line.name}
          />
        ))}
      {options.XAxis && <XAxis dataKey={options.XAxis} />}
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default MoneyLineChart;
