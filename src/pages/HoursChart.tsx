import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../contexts/themeContext";
import { FaRegClock } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import BasicPie from "../components/pieChartAdmin";
import ProjectsFilter from "../components/projectsFilter";
import ActionsFilter from "../components/actionsFilter";
import ProjectSummary from "../components/projectSummary";

export default function HoursChart() {
  const { darkTheme } = useContext(ThemeContext);

  const [hoursOpen, setHoursOpen] = useState(false);
  const toggleHours = () => {
    setHoursOpen((prev) => !prev);
  };

  const [projectsOpen, setProjectsOpen] = useState(false);
  const toggleProjects = () => {
    setProjectsOpen((prev) => !prev);
  };

  const totalHours = 1200;
  const activeProjects = 5;
  const totalProjects = 7;
  const showProjects = `${activeProjects}/${totalProjects}`;

  const [projects, setProjectFilter] = useState([
  {id: 0, project: "Aerodesign", chosen: false},
  {id: 1, project: "DevMedias", chosen: false},
  {id: 2, project: "Luz", chosen: false},
  {id: 3, project: "MauáFood", chosen: false},
  {id: 4, project: "Portal das Entidades", chosen: false},
  {id: 5, project: "Portal Interno", chosen: false},
  {id: 6, project: "Portifólio", chosen: false},
  {id: 7, project: "Reservation", chosen: false},
  {id: 8, project: "Teia Criativa", chosen: false},
  {id: 9, project: "Outros", chosen: false}
  ])
  const projectsName = ["Aerodesign", "DevMedias", "Luz", "MauáFood", "Portal das Entidades", "Portal Interno", "Portifólio", "Reservation", "Teia Criativa", "Outros"]

  const togglePFilter = (index: number) => {
    setProjectFilter(prev => 
      prev.map((project, id) => 
        id === index ? {...project, chosen: !project.chosen} 
        : project )
    )
  }

  const [actions, setActionsFilter] = useState([
    {id: 0, action: "Frontend", chosen: false},
    {id: 1, action: "Backend", chosen: false},
    {id: 2, action: "RH", chosen: false},
    {id: 3, action: "Business", chosen: false},
    {id: 4, action: "UI/UX", chosen: false},
    {id: 5, action: "Infra", chosen: false},
    {id: 6, action: "Áreas Internas", chosen: false},
  ])

  const actionsName = ["Frontend", "Backend", "RH", "Business","UI/UX", "Infra", "Áreas Internas"]
  // const actionsToShow =
  // chosenActionsList.length > 0
  //   ? chosenActionsList
  //   : actions.map(a => a.action);

  const toggleAFilter = (index: number) => {
    setActionsFilter(prev => 
      prev.map((action, id) => 
      index === id ? {...action, chosen: !action.chosen} : action)
    )
  }
  
  // const newProjectsList: string[] = []
  const [chosenProjectsList, setChosenProjectsList] = useState<string[]>([])
  const [chosenActionsList, setChosenActionsList] = useState<string[]>([])
  const [projectHours, setProjectHours] = useState<Record<string, number>>({})
  const [actionHours, setActionHours] = useState<Record<string, number>>({})
  // const modifyNeList = () => {
  //   projects.forEach((project) => (
  //     (project.chosen === true) ? 
  //     newProjectsList.push(project.project)
  //     : (newProjectsList.includes(project.project) ? newProjectsList.splice(newProjectsList.indexOf(project.project), 1) : project)
  //   ))
  // }

  // const modifyNewList = () => {
  //   projects.forEach((project) => {
  //     if (project.chosen && !newProjectsList.includes(project.project)) {
  //       newProjectsList.push(project.project);
  //     } 
  //     else if (project.chosen === false && newProjectsList.includes(project.project)) {
  //       const index = newProjectsList.indexOf(project.project);
  //       newProjectsList.splice(index, 1);
  //     }
  //   });
  // };

  const Aplicar = () => {
    const selectedProjects = projects
    .filter(p => p.chosen)
    .map(p => p.project);

  setChosenProjectsList(selectedProjects);

  const selectedActions = actions
  .filter(p => p.chosen)
  .map(p => p.action)

  setChosenActionsList(selectedActions);

  const projectHours = selectedProjects.reduce((acc, project) => {
    acc[project] = getRandomIndex(numberList);
    return acc;
  }, {} as Record<string, number>);

  setProjectHours(projectHours);

  const actionHours = selectedActions.reduce((acc, project) => {
    acc[project] = getRandomIndex(numberList);
    return acc;
  }, {} as Record<string, number>);
  setActionHours(actionHours);

    toggleHours()
  }

  //Só pra brincar um pouco com a progressão dos projetos em "resumo por projeto"
  const numberList: number[] = [100, 200, 300, 400, 500, 600]
  function getRandomIndex<T>(lista: T[]): T {
    const randomIndex = Math.floor(Math.random() * lista.length);
    return lista[randomIndex];
  }
  // const [randomNumber] = useState(() => getRandomIndex(numberList))

  const temporaryHoursList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


  return (
    <main className="flex flex-col md:flex-row w-full">
      <section className="flex">
        <Navbar></Navbar>
      </section>

      <section
        className={`${darkTheme ? `bg-[url(src/assets/images/backgroundActivitiesPI.png)]` : `bg-[url(src/assets/images/whiteBackground.png)]`} bg-cover flex flex-col w-full min-h-screen transition-all duration-300 pt-20 pb-20 px-4 md:pl-52 md:pr-10 lg:pr-20`}
      >
        <div className="flex flex-col md:flex-row gap-10 drop-shadow-xl">
          <article
            className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} md:w-1/3 md:h-175 drop-shadow-xl flex flex-col justify-between rounded-2xl transition-all duration-300`}
          >
            <div
              className={`${darkTheme ? `bg-black` : `bg-[#E2E2E2]`} flex w-fit drop-shadow-lg rounded-2xl items-center gap-2 p-5 transition-all duration-300`}
            >
              <h1
                className={`${darkTheme ? `text-white` : `text-black`} flex text-4xl transition-all duration-300`}
              >
                Horas Gerais
              </h1>
              {/* "toggleHours" não funciona na div inteira nem o "hover:cursor-pointer" */}
              <div onClick={toggleHours} className="hover:cursor-pointer">
                <IoIosArrowForward
                  className={`${darkTheme ? `text-white` : `text-black`} ${hoursOpen ? `rotate-90` : ``} flex text-4xl  hover:cursor-pointer transition-all duration-300`}
                />
              </div>
            </div>

            <div
              className={`${hoursOpen ? `opacity-100 translate-y-10 z-1` : `opacity-0 translate-y-0`} ${darkTheme ? `text-white bg-[#101010]` : `text-black bg-[#F0F0F0]`} flex absolute mt-10 md:w-110 rounded-2xl justify-between p-5 transition-all duration-300`}
            >
              <div className="flex w-full flex-col gap-2">
                <div className="flex w-full gap-10 items-center justify-between">
                  <div className="flex w-8/10 justify-between">
                    <h2 className="w-1/2 text-xl font-bold ">Projetos</h2>
                    <h2 className="text-xl font-bold ">Áreas</h2>
                  </div>
                  <IoIosArrowForward
                    className={`${darkTheme ? `text-white` : `text-black`} ${hoursOpen ? `rotate-270` : `rotate-90 pointer-events-none`} flex text-3xl cursor-pointer transition-all duration-300`}
                    onClick={toggleHours}
                  />
                </div>

                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    {projects.map((project) => (
                      <ProjectsFilter
                      project={project.project}
                      chosen={project.chosen}
                      onChoose={() => togglePFilter(project.id)}
                      ></ProjectsFilter>
                    ))}
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                      {actions.map((action) => (
                        <ActionsFilter
                        action={action.action}
                        chosen={action.chosen}
                        onChoose={() => toggleAFilter(action.id)}
                        ></ActionsFilter>
                      ))}
                    </div>

                    <button
                      className={`${hoursOpen ? `` : `pointer-events-none`} bg-[#5C76BC] text-center rounded-2xl text-white cursor-pointer hover:scale-110 transition-all duration-300`}
                      onClick={Aplicar}
                    >
                      Aplicar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`grid gap-4 items-center mx-4 h-1/2 
            ${chosenActionsList.length > 1 ? 
                chosenProjectsList.length > 1 ? "grid-cols-2" : "grid-cols-1"
               : "grid-cols-1"}
            ${darkTheme ? `text-white scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `text-black scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`}
            overflow-y-auto scrollbar-thin transition-all duration-300`}>
              {chosenActionsList.length > 0 ? 

              chosenProjectsList.length > 1 ?
              
              chosenActionsList.map((action) => (
                <BasicPie
                hours={temporaryHoursList}
                projectList={chosenProjectsList}
                projectName={""}
                actionList={[]}
                actionName={action}
                ></BasicPie>
              )) 
            

              :

              (chosenActionsList.length === 1 && chosenProjectsList.length === 0)? 
              <div>
                <BasicPie
                hours={temporaryHoursList}
                projectList={projectsName}
                projectName={chosenProjectsList}
                actionList={chosenActionsList}
                actionName={chosenActionsList.map(a => a)}
                ></BasicPie> 
              </div>

              :
              <div>
                <BasicPie
                hours={temporaryHoursList}
                projectList={chosenActionsList}
                projectName={chosenActionsList}
                actionList={chosenProjectsList}
                actionName={chosenProjectsList.map(a => a)}
                ></BasicPie> 
              </div>

              :

              chosenProjectsList.length === 1 ? 
                <BasicPie
                hours={temporaryHoursList}
                projectList={chosenProjectsList}
                projectName={chosenProjectsList.map(p => p)}
                actionList={actionsName}
                actionName={""}
                ></BasicPie> 
              
              
              :
              <div>
                <BasicPie
                hours={temporaryHoursList}
                projectList={chosenProjectsList}
                projectName={""}
                actionList={[]}
                actionName={""}
                ></BasicPie>
              </div>
              }

            </div>

            {(chosenProjectsList.length === 0 && chosenActionsList.length === 0) ? 
            <div className={`${darkTheme ? `text-white` : `text-black`} flex h-60 w-full text-2xl justify-center transition-all duration-300`}>
              <h2 className="text-center">Selecione um projeto para ver<br/> seus detalhes!</h2>
            </div>
            : <div
              className={`${darkTheme ? `text-white scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `text-black scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} flex flex-col md:h-50 overflow-y-auto scrollbar-thin  gap-3 text-2xl md:px-10 py-5 m-5 transition-all duration-300`}
            >
              {(chosenProjectsList.length > 0 || chosenActionsList.length > 0) ? 
              <div className="flex justify-center gap-20 md:gap-40 font-bold">
                <h4>Projeto(s)</h4>
                <h4>Área(s)</h4>
              </div> : ``}
              
              <div className="flex justify-between max-h-40 overflow-y-auto appearance-none scrollbar-none">
                <div className="flex flex-col md:w-1/2 gap-4">
                {chosenProjectsList.map((project) => (
                  <div className="flex gap-10">
                    <div className="flex justify-center items-center gap-2">
                      <div className="rounded-full bg-blue-300 w-2 h-2"></div>
                      <p className="text-md">{project}</p>
                    </div>
                  </div>
                ))}
                </div>

                <div className="flex flex-col gap-4">
                  {chosenActionsList.map((action) => (
                    <div className="flex gap-10">
                    <div className="flex justify-center items-center gap-2">
                      <div className="rounded-full bg-blue-300 w-2 h-2"></div>
                      <p className="">{action}</p>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              
            </div>}
          </article>

          <article className={`md:w-2/3 flex flex-col md:gap-10 mb-10 md:mb-0`}>
            <div className="flex flex-col md:flex-row w-full gap-5 md:gap-10 justify-center">
              <div
                className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} md:w-100 flex justify-center items-center drop-shadow-xl gap-5 md:gap-10 p-4 rounded-lg transition-all duration-300`}
              >
                <div
                  className={`${darkTheme ? `border-white` : `border-black`} flex justify-center items-center w-12 h-12 md:w-20 md:h-20 border rounded-md transition-all duration-300`}
                >
                  <FaRegClock
                    className={`${darkTheme ? `text-white` : `text-black`} w-8 h-8 md:w-15 md:h-15 transition-all duration-300`}
                  />
                </div>
                <div className="flex md:flex-col justify-center items-center gap-10 md:gap-1">
                  <h2
                    className={`${darkTheme ? `text-white` : `text-black`} flex text-center text-xl md:text-3xl transition-all duration-300`}
                  >
                    Horas Totais
                  </h2>
                  <p
                    className={`${darkTheme ? `text-white` : `text-black`} text-2xl md:text-4xl transition-all duration-300`}
                  >
                    {totalHours}
                  </p>
                </div>
              </div>

              <div
                className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} md:w-100 flex justify-center items-center drop-shadow-xl gap-5 md:gap-10 p-4 rounded-lg transition-all duration-300`}
              >
                <div
                  className={`${darkTheme ? `border-white` : `border-black`} flex justify-center items-center w-12 h-12 md:w-20 md:h-20 border rounded-md transition-all duration-300`}
                >
                  <IoNewspaperOutline
                    className={`${darkTheme ? `text-white` : `text-black`} w-8 h-8 md:w-15 md:h-15 transition-all duration-300`}
                  />
                </div>
                <div className="flex md:flex-col justify-center items-center gap-10 md:gap-1">
                  <h2
                    className={`${darkTheme ? `text-white` : `text-black`} flex text-center text-xl md:text-3xl transition-all duration-300`}
                  >
                    Projetos Ativos
                  </h2>
                  <p
                    className={`${darkTheme ? `text-white` : `text-black`} text-2xl md:text-4xl transition-all duration-300`}
                  >
                    {showProjects}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} w-full translate-y-10 rounded-2xl drop-shadow-xl transition-all duration-300`}
            >
              <div
                className={`${darkTheme ? `text-white bg-black` : `text-black bg-[#E2E2E2]`} flex justify-between rounded-xl items-center px-7 py-4 text-2xl transition-all duration-300`}
              >
                <h2
                  className={`${darkTheme ? `text-white` : `text-black`} flex text-2xl md:text-3xl transition-all duration-300`}
                >
                  Resumo por Projeto
                </h2>
                <IoIosArrowForward
                  className={`${darkTheme ? `text-white` : `text-black`} ${projectsOpen ? `rotate-90` : ``} flex text-4xl cursor-pointer transition-all duration-300`}
                  onClick={toggleProjects}
                />
              </div>

              <div
                className={`${darkTheme ? `scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`}
                flex flex-col w-full overflow-y-auto scrollbar-thin px-2 transition-all duration-400 ease-out 
                ${projectsOpen ? `max-h-110 opacity-100 translate-y-0` : `max-h-0 opacity-0 translate-y-2 overflow-hidden`}`}
              >
                {(chosenProjectsList.length === 0 && chosenActionsList.length === 0) ? 

                <div className={`flex flex-col justify-center items-center`}>
                  {darkTheme ? 
                  <img src="./src/assets/images/404_new_dark.png" alt="project not found" className={`md:h-110`}/> 
                  : <img src="./src/assets/images/404_new_light.png" alt="project not found" className={`md:h-110`}/>}
                </div> 

                : <div className={`${darkTheme ? `text-white` : `text-black`} flex flex-col p-3 gap-3`}>

                  {chosenActionsList.length > 0 ? 
                  
                  chosenProjectsList.length > 0 ?

                  //Há mais de uma ação e mais de um projeto projeto escolhidos
                  chosenActionsList.map((action) => (
                    <div key={action}>
                      {chosenProjectsList.map((project) => (
                        <ProjectSummary
                          key={`${action}-${project}`}
                          project={project}
                          action={action}
                          hours={actionHours[action]}
                          totalHours={totalHours}
                        />
                      ))}
                    </div>
                  ))

                  :
                  chosenActionsList.length === 1 ?
                  //Há apenas uma ação escolhida e nenhum projeto escolhido
                  chosenActionsList.map((action) => (
                    projects.map((project) => (
                      project.project === "Outros" ? ``                      
                      :
                      <ProjectSummary
                        key={action}
                        project={project.project}
                        action={action}
                        hours={actionHours[action]}
                        totalHours={totalHours}
                      />
                    ))
                  ))

                  :
                  //Há mais de uma ação escolhida mas nenhum projeto escolhido
                  chosenActionsList.map((action) => (
                    <ProjectSummary
                      key={action}
                      project={""}
                      action={action}
                      hours={actionHours[action]}
                      totalHours={totalHours}
                    />
                    ))
                   
                  
                  
                  : 
                  chosenProjectsList.length === 1 ? 
                  //Não há nenhuma ação escolhida e há apenas um projeto escolhido
                  chosenProjectsList.map((project) => (
                    actions.map((area) => (
                      <ProjectSummary
                      key={project}
                      project={project}
                      action={area.action}
                      hours={projectHours[project]}
                      totalHours={totalHours}
                    />
                    ))
                  ))
                  
                  :
                  //Não há nenhuma ação escolhida mas há mais de um projeto escolhido
                  chosenProjectsList.map((project) => (
                    <ProjectSummary
                      key={project}
                      project={project}
                      action={""}
                      hours={projectHours[project]}
                      totalHours={totalHours}
                    />
                  ))}



                </div>}

              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
