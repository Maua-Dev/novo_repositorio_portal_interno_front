import { useContext } from "react"
import StatusSpan from "./projectStatusProject"
import { ThemeContext } from "../contexts/themeContext"
import { BsClock } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";

export interface ProjectProps {
    id: number,
    projectTitle: string,
    projectDescription: string,
    projectStatus: string,
    projectCreationDate: string,
    projectTotalHours: string,
    //expandDetails: (project: string) => void,
}

export default function ProjectCard({id, projectTitle, projectDescription, projectStatus, projectCreationDate, projectTotalHours}: ProjectProps) {
    
    const { darkTheme } = useContext(ThemeContext)

    return(
        <main id={String(id)} className={`${darkTheme ? `bg-[#1E1E1E] hover:bg-violet-800` : `bg-white hover:bg-violet-300`} flex items-center justify-between w-full py-2 pl-8 md:pr-24 border-t border-slate-500 hover:cursor-pointer transition-colors duration-300`}>
            <h1 className="text-2xl md:w-[24%] wrap-break-word">{projectTitle}</h1>
            <p className="text-xl md:w-[40%] wrap-break-word">{projectDescription}</p>

            <section className="flex items-center md:gap-8">
                <article className="h-fit w-32 flex justify-start">
                    <StatusSpan projectStatus={projectStatus}></StatusSpan>
                </article>

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
            </section>

        </main>
    )
}