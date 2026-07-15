import Navbar from "../components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import MemberCard from "../components/memberCard";
import ActionCard from "../components/actionCard";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";
import MembersArea from "../components/memberArea";
import ActionArea from "../components/actionsArea";

function UserActivities() {
  const { darkTheme } = useContext(ThemeContext);

  const [addM, setAddM] = useState(false);
  const addMember = () => {
    setAddM((prev) => !prev);
  };

  const [addA, setAddA] = useState(false);
  const addAction = () => {
    setAddA((prev) => !prev);
  };

  const [title, setTitle] = useState<string>("");

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const clearTitle = () => {
    setTitle("");
  };

  const [projOpen, setProjOpen] = useState(false)

  const toggleProjOpen = () => {
    setProjOpen((prev) => !prev)
  }

  const projetos: string[] = ["Reservation", "Portal Interno", "Luz", "Portal das Entidades", "DevMedias"]
  function mapProjetos() {
    return projetos.map((projeto, index) => (
        <h2 key={index} onMouseEnter={() => setProject(projeto)} onMouseLeave={() => setProject("")} onClick={() => handleProjectChosen(projeto)} className={`${darkTheme ? `hover:bg-blue-900` : `hover:bg-blue-300`} px-2 py-2 rounded-xl cursor-pointer transition-all duration-200`}>{projeto}</h2>
    ))
  }

  const [project, setProject] = useState<string>("");

  const handleProject = (e: ChangeEvent<HTMLInputElement>) => {
    setProject(e.target.value);
  };

  const handleProjectChosen = (chosenProject: string) => {
    setProject(chosenProject)
    setProjOpen(false)
  }

  const clearProject = () => {
    setProject("");
  };

  const [areaOpen, setAreaOpen] = useState(false)
  const toggleAreaOpen = () => {
    setAreaOpen((prev) => ! prev)
  }

  const areas: string[] = ["Front-end", "Back-end", "UI/UX", "Business", "RH"]
  function mapAreas() {
    return areas.map((area, index) => (
        <h2 key={index} onMouseEnter={() => setArea(area)} onMouseLeave={() => setArea("")} onClick={() => handleAreaChosen(area)} className={`${darkTheme ? `hover:bg-blue-900` : `hover:bg-blue-300`} px-2 py-2 rounded-xl cursor-pointer transition-all duration-200`}>{area}</h2>
    ))
  }

  const [area, setArea] = useState<string>("");

  const handleArea = (e: ChangeEvent<HTMLInputElement>) => {
    setArea(e.target.value);
  };

  const handleAreaChosen = (chosenArea: string) => {
    setArea(chosenArea)
    setAreaOpen(false)
  }

  const clearArea = () => {
    setArea("");
  };

  const [time, setTime] = useState<string>("");

  const handleTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const clearTime = () => {
    setTime("");
  };

  const [from, setFrom] = useState<string>("");

  const handleFrom = (e: ChangeEvent<HTMLInputElement>) => {
    setFrom(e.target.value);
  };

  const clearFrom = () => {
    setFrom("");
  };

  const [to, setTo] = useState<string>("");

  const handleTo = (e: ChangeEvent<HTMLInputElement>) => {
    setTo(e.target.value);
  };

  const clearTo = () => {
    setTo("");
  };

  const [calc, setCalc] = useState(false);
  const toggleCalc = () => {
    setCalc(!calc);
  };

  function calcTime(calc: boolean, time: number) {
    return (calc ? (time/60).toFixed(2) : null)
  }

  const [about, setAbout] = useState<string>("");

  const handleAbout = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAbout(e.target.value);
  };

  const clearAbout = () => {
    setAbout("");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full">
      <div className="flex">
        <Navbar></Navbar>
      </div>

      <article
        className={`${addM || addA ? `absolute z-1 bg-black/60 w-full min-h-screen` : ``} transition-all duration-300`}
      ></article>

      {addM ? <MembersArea addMember={addMember} /> : ``}
      {addA ? <ActionArea addAction={addAction} /> : ``}

      <main
        className={`${darkTheme ? `bg-[url(src/assets/images/backgroundActivitiesPI.png)]` : `bg-[url(src/assets/images/whiteBackground.png)]`} bg-cover min-h-screen w-full flex justify-center items-center pt-20 pb-20 px-4 md:pl-52 md:pr-10 lg:pr-20`}
      >
        <article
          className={`${darkTheme ? `bg-[#1E1E1E] text-white ` : `bg-white text-black drop-shadow-2xl`} w-full max-w-350 rounded-4xl flex flex-col lg:flex-row transition-all duration-300`}
        >
          <section className="flex flex-col w-full lg:w-2/3 rounded-4xl gap-5 p-6 md:p-10 lg:p-15">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-2xl">Título da Atividade</h1>

              <input
                type="text"
                value={title}
                onChange={handleTitle}
                className={`${darkTheme ? `bg-[#484848] text-white` : `bg-[#E8ECEB] text-black`} w-full rounded-3xl p-4 focus:outline-none transition-all duration-300`}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-5 md:justify-between">
              <div className="relative flex flex-col gap-2 w-full">
                <h2 className="font-bold text-lg">Projeto</h2>

                <div className="relative flex w-full items-center">
                  <input
                    type="text"
                    value={project}
                    onChange={handleProject}
                    className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} w-full rounded-full py-2 pl-4 pr-20 focus:outline-none transition-all duration-300`}
                  />

                  <button
                    type="button"
                    onClick={toggleProjOpen}
                    className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#CCCCCC]`} absolute right-0 rounded-r-3xl h-full w-10 border cursor-pointer transition-all duration-300`}
                  >
                    <IoIosArrowForward className={`${projOpen ? `rotate-90` : ``} h-full w-full transition-all duration-300`}></IoIosArrowForward>
                  </button>
                </div>
                {projOpen ?
                <section className={`${darkTheme ? `bg-[#303030]` : `bg-[#E8ECEB]`} flex absolute translate-y-20 z-1 w-full rounded-xl transition-all duration-300`}>
                    <div className="flex flex-col w-full shadow-2xl rounded-xl">
                        {mapProjetos()}
                    </div>
                </section> : ``}
              </div>

              <div className="relative flex flex-col gap-2 w-full">
                <h2 className="font-bold text-lg">Área</h2>

                <div className="relative flex w-full items-center">
                  <input
                    type="text"
                    value={area}
                    onChange={handleArea}
                    className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} w-full rounded-full py-2 pl-4 pr-20 focus:outline-none transition-all duration-300`}
                  />

                  <button
                    type="button"
                    onClick={toggleAreaOpen}
                    className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#CCCCCC]`} absolute right-0 rounded-r-3xl h-full w-10 border cursor-pointer transition-all duration-300`}
                  >
                    <IoIosArrowForward className={`${areaOpen ? `rotate-90` : ``} h-full w-full transition-all duration-300`}></IoIosArrowForward>
                  </button>
                </div>
                {areaOpen ?
                <section className={`${darkTheme ? `bg-[#303030]` : `bg-[#E8ECEB]`} flex absolute translate-y-20 z-1 w-full rounded-xl transition-all duration-300`}>
                    <div className="flex flex-col w-full shadow-2xl rounded-xl">
                        {mapAreas()}
                    </div>
                </section> : ``}
              </div>

              <div className="flex flex-col gap-2 w-full md:max-w-37.5">
                <h2 className="font-bold text-lg">Tempo</h2>

                <div className="flex">
                  <input
                    type="text"
                    value={calc ? calcTime(calc, Number(time)) : time}
                    onChange={handleTime}
                    disabled={calc}
                    className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} w-full rounded-3xl py-2 pl-4 focus:outline-none transition-all duration-300`}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="font-bold text-lg">Data</h2>

              <div className="flex flex-col lg:flex-row gap-5 lg:justify-between">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-col">
                    <div className="relative flex w-full items-center">
                      <input
                        type="text"
                        value={from}
                        onChange={handleFrom}
                        className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} w-full rounded-full py-2 pl-4 pr-20 focus:outline-none transition-all duration-300`}
                      />

                      <button
                        type="button"
                        className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#CCCCCC]`} absolute right-0 rounded-r-3xl h-full w-10 border cursor-pointer transition-all duration-300`}
                      >
                        <IoIosArrowForward className="h-full w-full"></IoIosArrowForward>
                      </button>
                    </div>
                    <p className="lg:hidden">De</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <div>
                    <div className="relative flex w-full items-center">
                      <input
                        type="text"
                        value={to}
                        onChange={handleTo}
                        className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} w-full rounded-full py-2 pl-4 pr-20 focus:outline-none transition-all duration-300`}
                      />

                      <button
                        type="button"
                        className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#CCCCCC]`} absolute right-0 rounded-r-3xl h-full w-10 border cursor-pointer transition-all duration-300`}
                      >
                        <IoIosArrowForward className="h-full w-full"></IoIosArrowForward>
                      </button>
                    </div>
                    <p className="lg:hidden">Até</p>
                  </div>
                </div>

                <div className="flex w-full lg:w-fit justify-center gap-5 items-center">
                  <div
                    className={`${calc ? `bg-[#4562B3]` : `${darkTheme ? `bg-[#484848]` : `bg-[#D9D9D9]`} `} w-15 rounded-full p-2 cursor-pointer transition-all duration-300`}
                    onClick={toggleCalc}
                  >
                    <div
                      className={`${calc ? `flex text-white justify-end` : `flex text-white justify-start`} transition-all duration-300`}
                    >
                      <FaCircle />
                    </div>
                  </div>

                  <p
                    className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                  >
                    Calculadora <br /> de Horas
                  </p>
                </div>
              </div>

              <div className="lg:flex justify-between w-3/7 hidden">
                <p>De</p>
                <p>Até</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-lg">Descrição</h2>

              <div className="flex h-40 md:h-50 w-full">
                <textarea
                  value={about}
                  onChange={handleAbout}
                  className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} 
                            w-full h-full rounded-4xl p-4 resize-none focus:outline-none transition-all duration-300`}
                />
              </div>
            </div>
          </section>

          <section className="flex flex-col w-full lg:w-1/3 rounded-4xl p-6 md:p-10 gap-10 items-center">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between items-center">
                <h2 className="font-[Oswald] font-bold text-lg transition-all duration-300">
                  Membros
                </h2>
                <AiOutlinePlusCircle
                  onClick={addMember}
                  className={`${darkTheme ? `text-white` : `text-[#555E5E]`}  cursor-pointer h-5 w-5 transition-all duration-300`}
                ></AiOutlinePlusCircle>
              </div>

              <div
                className={`${darkTheme ? `scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} h-40 flex justify-center items-center flex-col gap-2 pr-2 overflow-y-auto scrollbar-thin transition-all duration-300`}
              >
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between items-center">
                <h2 className="font-[Oswald] font-bold text-lg transition-all duration-300">
                  Ação
                </h2>

                <AiOutlinePlusCircle
                  onClick={addAction}
                  className={`${darkTheme ? `text-white` : `text-[#555E5E]`} cursor-pointer h-5 w-5 transition-all duration-300`}
                ></AiOutlinePlusCircle>
              </div>

              <div
                className={`${darkTheme ? `scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} h-40 flex justify-center items-center flex-col gap-2 pr-2 overflow-y-auto scrollbar-thin transition-all duration-300`}
              >
                <ActionCard></ActionCard>
                <ActionCard></ActionCard>
                <ActionCard></ActionCard>
                <ActionCard></ActionCard>
                <ActionCard></ActionCard>
                <ActionCard></ActionCard>
                <ActionCard></ActionCard>
                <ActionCard></ActionCard>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-5 items-center w-full">
              <button
                className={`${darkTheme ? `bg-[#4562B3] text-white` : `bg-[#4562B3] text-white`} w-full sm:w-40 h-10 rounded-3xl text-xl hover:cursor-pointer transition-all duration-300`}
              >
                Salvar
              </button>

              <button
                onClick={
                  clearAbout &&
                  clearArea &&
                  clearFrom &&
                  clearTo &&
                  clearProject &&
                  clearTime &&
                  clearTitle
                }
                className={`${darkTheme ? `bg-[#FF2E17] text-white border-none` : `bg-white text-[#FF1100] border border-[#FF1100]`} w-full sm:w-40 h-10 rounded-3xl text-xl hover:cursor-pointer transition-all duration-300`}
              >
                Limpar
              </button>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default UserActivities;
