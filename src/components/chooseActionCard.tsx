import { ThemeContext } from "../contexts/themeContext";
import { useContext, useState } from "react";

export default function ChooseActionCard() {

    const { darkTheme } = useContext(ThemeContext);
    const [choose, setChoose] = useState(false)
    const chosen = () => {
        setChoose((prev) => !prev)
    }

    return(
        <div className={`${darkTheme ? `text-white` : `text-[#484848]`} flex w-full p-2 pr-5 justify-between items-center transition-all duration-300`}>
            <h2 className={`${darkTheme ? `text-white` : `text-[#0C0C0D]`} text-md`}>Frontend</h2>

            <div className="flex justify-center items-center">
                <input onClick={chosen} type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>    
                <div className={`${choose ? `${darkTheme ? `bg-blue-600` : `bg-[#1648A6]`} w-2 h-2 rounded-full` : ``} absolute`}></div>
            </div>

        </div>
    )
}