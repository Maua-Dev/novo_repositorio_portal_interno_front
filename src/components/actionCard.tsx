import { IoCloseSharp } from "react-icons/io5";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

type ActionCardProps = {
    action: string
    onDelete: () => void
}

export default function ActionCard({action, onDelete}: ActionCardProps) {

    const { darkTheme } = useContext(ThemeContext);

    return(
            <div  className={`${darkTheme ? `bg-[#484848] text-white` : `bg-[#E8ECEB] text-[#484848]`} flex w-full rounded-2xl text-lg p-2 justify-between items-center transition-all duration-300`}>
                <p className="pl-2 pr-1">{action}</p>
                <button 
                    type="button" 
                    onClick={onDelete}
                    className="h-full w-10 text-[#B0B1B3] cursor-pointer"
                >
                    <IoCloseSharp className={`${darkTheme ? `text-[#1E1E1E]` : `text-white`} h-full w-full transition-all duration-300`}></IoCloseSharp>
                </button>
            </div>
    )
}