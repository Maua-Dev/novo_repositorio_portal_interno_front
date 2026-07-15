import { ThemeContext } from "../contexts/themeContext";
import { useContext, useState } from "react";

export default function ChooseMemberCard() {

    const RA = "12.34567-8"
    const { darkTheme } = useContext(ThemeContext);
    const [choose, setChoose] = useState(false)
    const chosen = () => {
        setChoose((prev) => !prev)
    }

    return(
        <div className={`${darkTheme ? `text-white` : `text-[#484848]`} flex w-full p-2 pr-5 justify-between items-center transition-all duration-300`}>
            <div className="flex flex-col">
                <h2 className={`${darkTheme ? `text-white` : `text-[#0C0C0D]`} text-md`}>Nome Sobrenome1 Sobrenome2 Sobrenome 3</h2>
                <p className="text-sm text-[#8F9A98]">RA: {RA}</p>
            </div>

            <div className="flex justify-center items-center">
                <input onClick={chosen} type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>    
                <div className={`${choose ? `${darkTheme ? `bg-blue-600` : `bg-[#1648A6]`} w-2 h-2 rounded-full` : ``} absolute`}></div>
            </div>

        </div>
    )
}