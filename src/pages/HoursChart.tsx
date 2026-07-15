import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../contexts/themeContext";
import { FaRegClock } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import BasicPie from "../components/pieChartAdmin";

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

  //FAZER LÓGICA PARA DEIXAR totalHours E activeProjects COMO "let" AO INVÉS DE "const"
  const totalHours = 1200;
  const activeProjects = 5;
  const totalProjects = 7;
  const showProjects = `${activeProjects}/${totalProjects}`;
  const number = 8; //Protótipo para dinamizar a progressão das barras de horas

  return (
    <main className="flex flex-col md:flex-row w-full">
      <section className="flex">
        <Navbar></Navbar>
      </section>

      <section
        className={`${darkTheme ? `bg-[url(src/assets/images/backgroundActivitiesPI.png)]` : `bg-[url(src/assets/images/whiteBackground.png)]`} bg-cover flex flex-col w-full min-h-screen transition-all duration-300 pt-20 pb-20 px-4 md:pl-52 md:pr-10 lg:pr-20`}
      >
        <div className="flex gap-10 drop-shadow-xl">
          <article
            className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} md:w-1/3 md:h-175 flex flex-col rounded-2xl transition-all duration-300`}
          >
            <div
              className={`${darkTheme ? `bg-black` : `bg-[#E2E2E2]`} flex w-fit drop-shadow-lg rounded-2xl items-center gap-2 p-5 transition-all duration-300`}
            >
              <h1
                className={`${darkTheme ? `text-white` : `text-black`} flex text-3xl transition-all duration-300`}
              >
                Horas Gerais
              </h1>
              <IoIosArrowForward
                className={`${darkTheme ? `text-white` : `text-black`} ${hoursOpen ? `rotate-90` : ``} flex text-3xl cursor-pointer transition-all duration-300`}
                onClick={toggleHours}
              />
            </div>

            <div
              className={`${hoursOpen ? `opacity-100 translate-y-10 z-1` : `opacity-0 translate-y-0`} ${darkTheme ? `text-white bg-[#101010]` : `text-black bg-[#F0F0F0]`} flex absolute mt-10 max-h-80 w-100 rounded-2xl justify-between p-5 transition-all duration-300`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex gap-10 items-center justify-between">
                  <div className="flex w-8/10 justify-between">
                    <h2 className="w-1/2 text-xl font-bold ">Projetos</h2>
                    <h2 className="text-xl font-bold ">Áreas</h2>
                  </div>
                  <IoIosArrowForward
                    className={`${darkTheme ? `text-white` : `text-black`} ${hoursOpen ? `rotate-270` : `rotate-90`} flex text-3xl cursor-pointer transition-all duration-300`}
                    onClick={toggleHours}
                  />
                </div>

                <div className="flex gap-5">
                  <div className="flex flex-col">
                    <div className="flex justify-between gap-10">
                      <p>Portal Interno</p>
                      <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF] bg-[#4562B3]"/>
                    </div>

                    <div className="flex justify-between gap-10">
                      <p>Reservation</p>
                      <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                    </div>

                    <div className="flex justify-between gap-10">
                      <p>Portal das Entidades</p>
                      <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                    </div>

                    <div className="flex justify-between gap-10">
                      <p>DevMedias</p>
                      <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                    </div>

                    <div className="flex justify-between gap-10">
                      <p>Luz</p>
                      <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                    </div>

                    <div className="flex justify-between gap-10">
                      <p>Teia Criativa</p>
                      <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                    </div>

                    <div className="flex justify-between gap-10">
                      <p>Aerodesign</p>
                      <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                    </div>

                    <div className="flex justify-between gap-10">
                      <p>Portifólio</p>
                      <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                    </div>

                    <div className="flex justify-between gap-10">
                      <p>MauáFood</p>
                      <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                    </div>

                    <div className="flex justify-between gap-10">
                      <p>Outros</p>
                      <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                      <div className="flex justify-between gap-10">
                        <p>Front-End</p>
                        <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                      </div>

                      <div className="flex justify-between gap-10">
                        <p>Back-End</p>
                        <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                      </div>

                      <div className="flex justify-between gap-10">
                        <p>UI/UX</p>
                        <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                      </div>

                      <div className="flex justify-between gap-10">
                        <p>Business</p>
                        <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                      </div>

                      <div className="flex justify-between gap-10">
                        <p>RH</p>
                        <input type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>
                      </div>
                    </div>

                    <button
                      className="bg-[#5C76BC] text-center rounded-2xl text-white cursor-pointer hover:scale-110 transition-all duration-300"
                      onClick={toggleHours}
                    >
                      Aplicar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <BasicPie></BasicPie>

            <div
              className={`${darkTheme ? `text-white scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `text-black scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} flex flex-col max-h-50 overflow-y-auto scrollbar-thin gap-2 text-2xl px-10 py-5 m-5 transition-all duration-300`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-700 w-2 h-2"></div>
                <p>Reservation</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-500 w-2 h-2"></div>
                <p>Portal Interno</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-400 w-2 h-2"></div>
                <p>DevMedias</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-300 w-2 h-2"></div>
                <p>Luz</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-300 w-2 h-2"></div>
                <p>Luz</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-300 w-2 h-2"></div>
                <p>Luz</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-300 w-2 h-2"></div>
                <p>Luz</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-300 w-2 h-2"></div>
                <p>Luz</p>
              </div>
            </div>
          </article>

          <article className={`md:w-2/3 flex flex-col gap-10`}>
            <div className="flex w-full gap-10 justify-center">
              <div
                className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} md:w-100 flex justify-center items-center drop-shadow-xl gap-10 pt-4 pb-4 rounded-lg transition-all duration-300`}
              >
                <div
                  className={`${darkTheme ? `border-white` : `border-black`} w-20 h-20 border rounded-md transition-all duration-300`}
                >
                  <FaRegClock
                    className={`${darkTheme ? `text-white` : `text-black`} w-20 h-20 p-3 transition-all duration-300`}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h2
                    className={`${darkTheme ? `text-white` : `text-black`} text-2xl transition-all duration-300`}
                  >
                    Horas Totais
                  </h2>
                  <p
                    className={`${darkTheme ? `text-white` : `text-black`} text-4xl transition-all duration-300`}
                  >
                    {totalHours}
                  </p>
                </div>
              </div>

              <div
                className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} md:w-100 flex justify-center items-center drop-shadow-xl gap-10 pt-4 pb-4 rounded-lg transition-all duration-300`}
              >
                <div
                  className={`${darkTheme ? `border-white` : `border-black`} h-20 w-20 border rounded-md transition-all duration-300`}
                >
                  <IoNewspaperOutline
                    className={`${darkTheme ? `text-white` : `text-black`} w-20 h-20 p-3 transition-all duration-300`}
                  />
                </div>
                <div className="flex flex-col items-center ">
                  <h2
                    className={`${darkTheme ? `text-white` : `text-black`} text-2xl transition-all duration-300`}
                  >
                    Projetos Ativos
                  </h2>
                  <p
                    className={`${darkTheme ? `text-white` : `text-black`} text-4xl transition-all duration-300`}
                  >
                    {showProjects}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} w-full rounded-2xl drop-shadow-xl transition-all duration-300`}
            >
              <div
                className={`${darkTheme ? `text-white bg-black` : `text-black bg-[#E2E2E2]`} flex justify-between rounded-xl items-center px-7 py-4 text-2xl transition-all duration-300`}
              >
                <h2
                  className={`${darkTheme ? `text-white` : `text-black`} flex text-3xl transition-all duration-300`}
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
                flex flex-col w-full overflow-y-auto scrollbar-thin px-2 transition-all duration-300 ease-out 
                ${projectsOpen ? `max-h-120 opacity-100 translate-y-0` : `max-h-0 opacity-0 -translate-y-2 overflow-hidden`}`}
              >
                <div className="flex flex-col p-3 gap-3">
                  <div
                    className={`${darkTheme ? `text-white` : `text-black`} flex justify-between text-xl transition-all duration-300`}
                  >
                    <h3 className="">Reservation</h3>
                    <h3>40H</h3>
                  </div>
                  <div className="w-full h-5 rounded-2xl bg-[#D9D9D9]">
                    <div
                      className={`w-${number}/10 h-5 rounded-2xl bg-blue-700`}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-col p-3 gap-3">
                  <div
                    className={`${darkTheme ? `text-white` : `text-black`} flex justify-between text-xl transition-all duration-300`}
                  >
                    <h3 className="">Portal Interno</h3>
                    <h3>20H</h3>
                  </div>
                  <div className="w-full h-5 rounded-2xl bg-[#D9D9D9]">
                    <div className="w-9/10 h-5 rounded-2xl bg-blue-500"></div>
                  </div>
                </div>

                <div className="flex flex-col p-3 gap-3">
                  <div
                    className={`${darkTheme ? `text-white` : `text-black`} flex justify-between text-xl transition-all duration-300`}
                  >
                    <h3 className="">DevMedias</h3>
                    <h3>10H</h3>
                  </div>
                  <div className="w-full h-5 rounded-2xl bg-[#D9D9D9]">
                    <div className="w-5/10 h-5 rounded-2xl bg-blue-400"></div>
                  </div>
                </div>

                <div className="flex flex-col p-3 gap-3">
                  <div
                    className={`${darkTheme ? `text-white` : `text-black`} flex justify-between text-xl transition-all duration-300`}
                  >
                    <h3 className="">Luz</h3>
                    <h3>15H</h3>
                  </div>
                  <div className="w-full h-5 rounded-2xl bg-[#D9D9D9]">
                    <div className="w-3/10 h-5 rounded-2xl bg-blue-300"></div>
                  </div>
                </div>

                <div className="flex flex-col p-3 gap-3">
                  <div
                    className={`${darkTheme ? `text-white` : `text-black`} flex justify-between text-xl transition-all duration-300`}
                  >
                    <h3 className="">Portal das Entidades</h3>
                    <h3>22H</h3>
                  </div>
                  <div className="w-full h-5 rounded-2xl bg-[#D9D9D9]">
                    <div className="w-7/10 h-5 rounded-2xl bg-red-700"></div>
                  </div>
                </div>

                <div className="flex flex-col p-3 gap-3">
                  <div
                    className={`${darkTheme ? `text-white` : `text-black`} flex justify-between text-xl transition-all duration-300`}
                  >
                    <h3 className="">Aero</h3>
                    <h3>0H</h3>
                  </div>
                  <div className="w-full h-5 rounded-2xl bg-[#D9D9D9]">
                    <div className="w-6/10 h-5 rounded-2xl bg-red-500"></div>
                  </div>
                </div>

                <div className="flex flex-col p-3 gap-3">
                  <div
                    className={`${darkTheme ? `text-white` : `text-black`} flex justify-between text-xl transition-all duration-300`}
                  >
                    <h3 className="">Outros</h3>
                    <h3>10H</h3>
                  </div>
                  <div className="w-full h-5 rounded-2xl bg-[#D9D9D9]">
                    <div className="w-4/10 h-5 rounded-2xl bg-red-400"></div>
                  </div>
                </div>

                <div className="flex flex-col p-3 gap-3">
                  <div
                    className={`${darkTheme ? `text-white` : `text-black`} flex justify-between text-xl transition-all duration-300`}
                  >
                    <h3 className="">Aleatório 1</h3>
                    <h3>100H</h3>
                  </div>
                  <div className="w-full h-5 rounded-2xl bg-[#D9D9D9]">
                    <div className="w-1/10 h-5 rounded-2xl bg-red-300"></div>
                  </div>
                </div>

                <div className="flex flex-col p-3 gap-3">
                  <div
                    className={`${darkTheme ? `text-white` : `text-black`} flex justify-between text-xl transition-all duration-300`}
                  >
                    <h3 className="">Aleatório 2</h3>
                    <h3>400H</h3>
                  </div>
                  <div className="w-full h-5 rounded-2xl bg-[#D9D9D9]">
                    <div className="w-2/10 h-5 rounded-2xl bg-red-200"></div>
                  </div>
                </div>

                <div className="flex flex-col p-3 gap-3">
                  <div
                    className={`${darkTheme ? `text-white` : `text-black`} flex justify-between text-xl transition-all duration-300`}
                  >
                    <h3 className="">
                      Projeto Com Nome Muito Grande para Testar A Interface E
                      Ver Como Fica O Título Do Projeto No Campo De Resumo Por
                      Projeto
                    </h3>
                    <h3>56H</h3>
                  </div>
                  <div className="w-full h-5 rounded-2xl bg-[#D9D9D9]">
                    <div className="w-full h-5 rounded-2xl bg-red-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
