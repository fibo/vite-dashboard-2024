import { BarChart } from "../components/BarChart";

export function ReportUsers() {
  return (
    <>
      <h1>Users</h1>
      <BarChart
        data={{
          January: 90,
          February: 100,
          March: 120,
          April: 142,
          May: 54,
          June: 160,
          July: 70,
          August: 181,
          September: 90,
          October: 170,
          November: 110,
          December: 280,
        }}
      />
    </>
  );
}
