import * as echarts from "echarts";
import { useEffect, useRef } from "react";

type Props = {
  data: { [key: string]: number };
};

export function BarChart({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.ECharts>();

  useEffect(() => {
    if (chartRef.current) return;
    if (!containerRef.current) return;
    chartRef.current = echarts.init(containerRef.current);
  }, [containerRef, chartRef]);

  useEffect(() => {
    if (!chartRef.current) return;
    chartRef.current.setOption({
      xAxis: {
        axisLabel: {
          rotate: 45,
        },
        data: Object.keys(data),
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          data: Object.values(data),
        },
      ],
    });
  }, [chartRef, data]);

  return (
    <div ref={containerRef} style={{ width: "600px", height: "400px" }}></div>
  );
}
