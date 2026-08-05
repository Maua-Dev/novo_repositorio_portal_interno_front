import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

type Member = {
    name: string,
    ra: string,
    chosen: boolean
}

type MemberProps = {
    list: Member[];
    toggleChosen: (i:number) => void
}

export default function ChooseMemberCard({list, toggleChosen}: MemberProps) {
    
    const { darkTheme } = useContext(ThemeContext);
    
    return(
        list.map((member, index) => (
            <div key={index} className={`${darkTheme ? `text-white` : `text-[#484848]`} flex w-full p-2 pr-5 justify-between items-center transition-all duration-300`}>
                <div className="flex flex-col">
                    <h2 className={`${darkTheme ? `text-white` : `text-[#0C0C0D]`} text-md`}>{member.name}</h2>
                    <p className="text-sm text-[#8F9A98]">RA: {member.ra}</p>
                </div>

                <div className="relative flex justify-center items-center">
                    <input checked={member.chosen} onChange={() => toggleChosen(index)} type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>    
                    <div className={`${member.chosen ? `${darkTheme ? `bg-blue-600` : `bg-[#1648A6]`} w-2 h-2 rounded-full` : ``} absolute`}></div>
                </div>
            </div>
        ))
    )
}