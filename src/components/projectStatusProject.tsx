import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
import type { ProjectProps } from "./projectProjects"

type StatusSpanProps = Pick<ProjectProps, "projectStatus">;

export default function StatusSpan({projectStatus}: StatusSpanProps) {

    const setBackground = (status: string) => {
        if (status === "Ativo") {
            if (darkTheme) {
                return "bg-green-600"
            }
            else {
                return "bg-[#66AF77]"
            }
        }

        if (status === "Concluído") {
            if (darkTheme) {
                return "bg-red-500"
            }
            else {
                return "bg-[#F97667]"
            }
        }

        if (status === "Congelado") {
            if (darkTheme) {
                return "bg-cyan-500"
            }
            else {
                return "bg-[#76BBED]"
            }
        }

        if (status === "Desativado") {
            if (darkTheme) {
                return "bg-gray-500"
            }
            else {
                return "bg-[#969696]"
            }
        }
    }

    const { darkTheme } = useContext(ThemeContext)

    return(
        <span className={`${setBackground(projectStatus)} text-white px-5 py-1 rounded-full transition-colors duration-300`}>
            {projectStatus}
        </span>
    )
}