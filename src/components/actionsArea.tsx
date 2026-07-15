import { IoMdSearch } from "react-icons/io";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";
import ChooseActionCard from "./chooseActionCard";

type MembersAreaProps = {
    addAction: () => void;
};
export default function ActionArea({ addAction }: MembersAreaProps) {
    
    const { darkTheme } = useContext(ThemeContext);

    return(
        <article id="memberArea" className={`${darkTheme ? `bg-[#111111]` : `bg-white`} flex flex-col absolute z-2 text-black md:w-120 md:h-100 gap-3 p-2 rounded-2xl transition-all duration-300`}>
        <div className="flex w-full justify-between p-5">
            <h2 className={`${darkTheme ? `text-white` : `text-black`} font-[Oswald] text-3xl font-bold transition-all duration-300`}>Ações</h2>
            <div className={`${darkTheme ? `bg-[#484848]` : `bg-[#AEB6B5]`} flex px-2 justify-between items-center text-white w-1/2 rounded-lg transition-all duration-300`}>
                <input type="text" placeholder="BUSCAR AÇÃO" className="focus:outline-none text-white font-[Oswald] w-8/10"/>
                <IoMdSearch></IoMdSearch>
            </div>
        </div>

        <div className={`${darkTheme ? `scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} flex flex-col overflow-y-auto scrollbar-thin px-5 gap-2 h-70`}>
            <ChooseActionCard></ChooseActionCard>
            <ChooseActionCard></ChooseActionCard>
            <ChooseActionCard></ChooseActionCard>
            <ChooseActionCard></ChooseActionCard>
            <ChooseActionCard></ChooseActionCard>
            <ChooseActionCard></ChooseActionCard>
        </div>

        <div className={`${darkTheme ? `border-[#484848]` : `border-[#CAD0CF]`} flex h-15 border-t items-center transition-all duration-300`}>
            <button onClick={addAction} className={`${darkTheme ? `text-[#484848] border-[#484848]` : `text-[#737E7D] border-[#CAD0CF]`} flex w-1/2 h-full font-bold border-r justify-center items-center transition-all duration-300`}>
                <p className="text-xl cursor-pointer w-fit">Salvar</p>
            </button>
            <button onClick={addAction} className={`${darkTheme ? `text-[#484848]` : `text-[#737E7D]`} flex w-1/2 h-full font-bold justify-center items-center transition-all duration-300`}>
                <p className="text-xl cursor-pointer w-fit">Cancelar</p>
            </button>
        </div>
    </article>
    )
}