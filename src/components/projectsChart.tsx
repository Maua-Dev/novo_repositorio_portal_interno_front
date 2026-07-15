import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/themeContext";

export default function ProjectsCharts() {
    
    const { darkTheme } = useContext(ThemeContext);
    const [choose, setChoose] = useState(false)
    const chosen = () => {
        setChoose((prev) => !prev)
    }

    return(
        <div>
            <p>Projeto 1</p>
            <div className="flex justify-center items-center">
                <input onClick={chosen} type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>    
                <div className={`${choose ? `${darkTheme ? `bg-blue-600` : `bg-[#1648A6]`} w-2 h-2 rounded-full` : ``} absolute`}></div>
            </div>
        </div>
    )
}