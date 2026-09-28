import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
import { BsClock } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";

export interface ProjectProps {
    id: number,
    projectTitle: string,
    projectDescription: string,
    projectCreationDate: string,
    projectTotalHours: string,
    //expandDetails: (project: string) => void,
}

export default function HistoryActivityCard({id, projectTitle, projectDescription, projectCreationDate, projectTotalHours}: ProjectProps) {
    
    const { darkTheme } = useContext(ThemeContext)

    return(
        <main id={String(id)} className={`${darkTheme ? `bg-[#1E1E1E] hover:bg-[#484848]` : `bg-white hover:bg-violet-300`} flex items-center justify-between w-full md:py-2 md:px-8 border-t border-slate-500 hover:cursor-pointer transition-colors duration-300`}>
            <h1 className="text-2xl md:w-[20%] wrap-break-word">{projectTitle}</h1>
            <p className="text-xl md:w-[50%] wrap-break-word">{projectDescription}</p>

            <section className="flex items-center md:gap-8">
                <article className="flex flex-col items-center">
                    <div className="flex gap-2 w-full justify-start items-center">
                        <GoCalendar></GoCalendar>
                        <p>{projectCreationDate}</p>
                    </div>

                    <div className="flex gap-2 w-full justify-start items-center">
                        <BsClock></BsClock>
                        <p>{projectTotalHours}</p>
                    </div>
                </article>

                
                <div className="flex gap-2 md:w-50 justify-end items-center text-2xl">
                    <FaRegTrashAlt className={`${darkTheme ? `text-white` : `text-black`} hover:scale-120 hover:text-red-500 transition-all duration-200`}></FaRegTrashAlt>   
                </div>
                
            </section>

        </main>
    )
}