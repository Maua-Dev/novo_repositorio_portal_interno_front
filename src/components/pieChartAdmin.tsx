import { PieChart } from '@mui/x-charts/PieChart';

type PieInfo = {
  projectList: string[],
  projectName: string[] | string,
  actionList: string[],
  actionName: string[] | string,
  hours: number[]
};

export default function BasicPie({projectList, projectName, actionList, actionName, hours}: PieInfo) {

    //const projects = ["Reservation", "Portal Interno", "DevMedias", "Luz"]
    //const hours = [60, 55, 40, 20]
    //const totalHours = hours.reduce((acumulator, currentValue) => acumulator + currentValue, 0)

  return (
      <PieChart
        series={[
          {
            data: 
            projectList.length === 1 ?
            
            actionList.map((action, index) => ({
              id: (index),
              value: hours[index],
              label: `${action === "Outros" ? action : `${action} - ${projectName}`}`
              // label: `${projectName} ${action}`
            }))

            :

            projectList.length === 0 ?

            projectList.map((project, index) => ({
              id: (index),
              value: hours[index],
              label: `${project === "Outros" ? project : `${project} - ${actionName}`}`
            }))

            :
            projectList.map((project, index) => ({
              id: (index),
              value: hours[index],
              label: `${project === "Outros" ? project : `${actionName === "" ? project : `${project} - ${actionName}`}`}`
            })),
          },
        ]}
        hideLegend
        width={220}
        height={220}
      />
  );
}
