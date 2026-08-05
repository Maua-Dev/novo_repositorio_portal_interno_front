import { PieChart } from '@mui/x-charts/PieChart';

type PieInfo = {
  projectList: string[],
  hours: number[]
};

export default function BasicPie({projectList, hours}: PieInfo) {

    //const projects = ["Reservation", "Portal Interno", "DevMedias", "Luz"]
    //const hours = [60, 55, 40, 20]
    //const totalHours = hours.reduce((acumulator, currentValue) => acumulator + currentValue, 0)

  return (
    <PieChart
      series={[
        {
          data: projectList.map((project, index) => ({
            id: (index),
            value: hours[index],
            label: project
          })),
        },
      ]}
      hideLegend
      width={350}
      height={350}
    />
  );
}
