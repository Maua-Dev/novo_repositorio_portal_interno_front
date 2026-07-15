import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {

    const projects = ["Reservation", "Portal Interno", "DevMedias", "Luz"]
    const hours = [60, 55, 40, 20]
    const totalHours = hours.reduce((acumulator, currentValue) => acumulator + currentValue, 0)

  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: hours[0], label: projects[0] },
            { id: 1, value: hours[1], label: projects[1] },
            { id: 2, value: hours[2], label: projects[2] },
            { id: 3, value: hours[3], label: projects[3] },
          ],
        },
      ]}
      width={350}
      height={350}
    />
  );
}
