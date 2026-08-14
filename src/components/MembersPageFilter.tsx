import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
import { FaCircle } from "react-icons/fa";
import ActionsFilter from "../components/actionsFilter";
import ProjectsFilter from "../components/projectsFilter";

type projectType = {
    id: number,
    name: string,
    chosen: boolean
}

type areaType = {
    id: number,
    name: string,
    chosen: boolean
}

type MemberFilterInfo = {
    areaList: areaType[],
    projectList: projectType[],
    allowStrike: boolean,
    toggleAllowStrike: () => void,
    numberOfStrikes: number,
    toggleStrikes: () => void,
    active: boolean,
    toggleActive: () => void,
    frozen: boolean,
    toggleFrozen: () => void,
    off: boolean,
    toggleOff: () => void,
    onChooseArea: (index:number) => void,
    onChooseProject: (index: number) => void,
    cancelFilter: () => void,
    saveFilter: () => void
}


export default function MembersFilter({areaList, projectList, allowStrike, toggleAllowStrike, numberOfStrikes, toggleStrikes, active, toggleActive, frozen, toggleFrozen, off, toggleOff, onChooseArea, onChooseProject, cancelFilter, saveFilter}: MemberFilterInfo) {

    const { darkTheme } = useContext(ThemeContext);

    return (
        <section className={`${darkTheme ? `bg-[#1E1E1E] text-white` : `bg-white text-black`} flex flex-col justify-between md:gap-8 absolute z-2 md:w-210 md:h-110 rounded-3xl p-10 drop-shadow-2xl transition-all duration-300`}>
                {/* <article onClick={toggleOpenFilter} className={`flex justify-end hover:cursor-pointer`}>
                    <IoIosArrowForward className={`text-3xl rotate-270`}></IoIosArrowForward>
                </article> */}
                <article className={`flex justify-center gap-6`}>
                    <div className={`flex flex-col gap-5`}>
                        <h2 className={`text-3xl font-bold`}>Áreas:</h2>
                        {areaList.map((area) => (
                            <ActionsFilter
                            action={area.name}
                            chosen={area.chosen}
                            onChoose={() => onChooseArea(area.id)}
                            ></ActionsFilter>
                        ))}
                    </div>

                    <div className={`border border-[#A2A2A2]`}></div>

                    <div className={`flex flex-col w-60 h-70 gap-4`}>
                        <h2 className={`text-3xl font-bold`}>Projetos:</h2>
                        <div className={`flex flex-col ${darkTheme ? `scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} overflow-y-auto scrollbar-thin transition-all duration-300`}>
                            <div className={`flex flex-col gap-2 pr-5`}>
                                {projectList.map((project) => (
                                    <ProjectsFilter
                                    project={project.name}
                                    chosen={project.chosen}
                                    onChoose={() => onChooseProject(project.id)}
                                    >
                                    </ProjectsFilter>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`border border-[#A2A2A2]`}></div>


                    <div className={`flex flex-col md:w-30 gap-4`}>
                        <h2 className={`text-3xl font-bold`}>Strikes:</h2>
                        <div className={`flex flex-col gap-8`}>
                            <div className="flex items-center md:gap-12">
                                <div className={`${darkTheme ? `bg-[#484848]` : `bg-gray-300`}
                                ${allowStrike === true ? `${darkTheme ? `bg-green-500` : `bg-green-400`}` : ``}
                                ${numberOfStrikes === 1 ? `${darkTheme ? `bg-yellow-500` : `bg-yellow-400`}` : ``}
                                ${numberOfStrikes === 2 ? `${darkTheme ? `bg-orange-500` : `bg-orange-400`}` : ``}
                                ${numberOfStrikes === 3 ? `${darkTheme ? `bg-red-700` : `bg-red-600`}` : ``}
                                text-white flex justify-center
                                ${numberOfStrikes === 1 ? `pb-9 items-end` : `${numberOfStrikes === 2 ? `pb-16 items-end` : `${numberOfStrikes === 3 ? `pb-24 items-end` : `items-end`}`}`}
                                relative md:w-8 md:h-32 rounded-2xl py-2 transition-all duration-300`}>
                                    <FaCircle onClick={allowStrike ? toggleStrikes : undefined} className={`absolute text-2xl hover:cursor-pointer`}></FaCircle>
                                </div>
                                <input type="checkbox" onClick={toggleAllowStrike} className={`md:w-6 md:h-6 appearance-none rounded-md border cursor-pointer ${allowStrike ? `${darkTheme ? `bg-[#4562B3]` : `bg-[#4562B3]`}` : `bg-[#444444]`}`}/>
                            </div>

                            <div className={`${darkTheme ? `bg-[#484848] text-white` : `bg-gray-300`} font-bold w-fit text-xl rounded-2xl px-4 transition-all duration-300`}>
                                <p>{numberOfStrikes === 4 ? 0 : numberOfStrikes}</p>
                            </div>
                        </div>
                    </div>

                    <div className={`border border-[#A2A2A2]`}></div>


                    <div className={`flex flex-col gap-4`}>
                        <h2 className={`text-3xl font-bold`}>Status:</h2>
                        <div className={`flex flex-col gap-2`}>
                            <h3 className={`text-xl`}>Ativo</h3>
                            <div onClick={toggleActive} className={`${darkTheme ? `${active ? `bg-[#4562B3]` : `bg-[#484848]`}` : `${active ? `bg-[#ADDDFF]` : `bg-gray-300`}`} ${active ? `justify-end` : `justify-start`} flex items-center w-15 h-6 rounded-2xl p-1 relative hover:cursor-pointer transition-all duration-300`}>
                                <FaCircle className={`absolute text-white`}></FaCircle>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-2`}>
                            <h3 className={`text-xl`}>Congelado</h3>
                            <div onClick={toggleFrozen} className={`${darkTheme ? `${frozen ? `bg-[#4562B3]` : `bg-[#484848]`}` : `${frozen ? `bg-[#ADDDFF]` : `bg-gray-300`}`} ${frozen ? `justify-end` : `justify-start`} flex items-center w-15 h-6 rounded-2xl p-1 relative hover:cursor-pointer transition-all duration-300`}>
                                <FaCircle className={`absolute text-white`}></FaCircle>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-2`}>
                            <h3 className={`text-xl`}>Desligado</h3>
                            <div onClick={toggleOff} className={`${darkTheme ? `${off ? `bg-[#4562B3]` : `bg-[#484848]`}` : `${off ? `bg-[#ADDDFF]` : `bg-gray-300`}`} ${off ? `justify-end` : `justify-start`} flex items-center w-15 h-6 rounded-2xl p-1 relative hover:cursor-pointer transition-all duration-300`}>
                                <FaCircle className={`absolute text-white`}></FaCircle>
                            </div>
                        </div>
                    </div>
                </article>

                

                <article className="flex justify-center items-center gap-12 w-full">
                    <button onClick={cancelFilter} className={`${darkTheme ? `bg-[#B34444] text-white` : `bg-[#FFD1CC]`} text-lg rounded-2xl py-2 px-12 hover:cursor-pointer hover:scale-110 transition-all duration-300`}>
                        Cancelar
                    </button>
                    
                    <button onClick={saveFilter} className={`${darkTheme ? `bg-[#4562B3] text-white` : `bg-[#ADDDFF]`} text-lg rounded-2xl py-2 px-13 hover:cursor-pointer hover:scale-110 transition-all duration-300`}>
                        Salvar
                    </button>
                </article>
            </section>
    )
}