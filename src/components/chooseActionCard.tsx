import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

type Action = {
    action: string,
    chosen: boolean
}

type ActionProps = {
    list: Action[],
    searchAction: string,
    toggleChosen: (i:number) => void
}


export default function ChooseActionCard({list, searchAction, toggleChosen}: ActionProps) {

    const { darkTheme } = useContext(ThemeContext);

    const filteredActions = list.filter((action) => {
        const search = searchAction.toLocaleLowerCase()
        return action.action.toLocaleLowerCase().includes(search)
    })

    return(
        filteredActions.map((area, index) => (
            <div key={index} className={`${darkTheme ? `text-white` : `text-[#484848]`} flex w-full p-2 pr-5 justify-between items-center transition-all duration-300`}>
                <h2 className={`${darkTheme ? `text-white` : `text-[#0C0C0D]`} text-md`}>{area.action}</h2>

                <div className="relative flex justify-center items-center">
                    <input checked={area.chosen} onChange={() => toggleChosen(index)} type="checkbox" className="w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]"/>    
                    <div className={`${area.chosen ? `${darkTheme ? `bg-blue-600` : `bg-[#1648A6]`} w-2 h-2 rounded-full` : ``} absolute`}></div>
                </div>

            </div>
        ))
    )
}