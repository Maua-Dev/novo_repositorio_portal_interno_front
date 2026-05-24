import { IoCloseSharp } from "react-icons/io5";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

export default function MemberCard() {

    const { darkTheme } = useContext(ThemeContext);

    return(
        <div className={`${darkTheme ? `bg-[#484848] text-white` : `bg-[#E8ECEB] text-[#484848]`} flex w-full rounded-2xl p-2 justify-between items-center transition-all duration-300`}>
            <p className="pl-2 pr-1">Nome Sobrenome1 Sobrenome2 Sobrenome 3</p>
            <button 
                type="button" 
                className="h-full w-10 text-[#B0B1B3] cursor-pointer"
            >
                <IoCloseSharp className={`${darkTheme ? `text-[#1E1E1E]` : `text-white`} h-full w-full transition-all duration-300`}></IoCloseSharp>
            </button>
        </div>
    )
}