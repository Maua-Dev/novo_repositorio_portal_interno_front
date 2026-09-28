import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
import alanzoka from "../assets/images/alanzoka.png"
import { AiOutlineClose } from "react-icons/ai";

interface DetailedProjectProps {
    closeCard: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DetailedProjectCard({closeCard}: DetailedProjectProps) {

    const { darkTheme } = useContext(ThemeContext)

    const today = new Date().toLocaleDateString('pt-BR')
    const todayAndHour = new Date().toLocaleString("pt-BR")

    return(
        <section className={`${darkTheme ? `bg-[#1E1E1E] text-white` : `bg-white text-black drop-shadow-2xl`} flex flex-col w-1/3 min-w-0 md:h-full rounded-2xl p-6 transition-all duration-300`}>
            <section onClick={() => closeCard(false)} className="flex w-full justify-end text-4xl hover:cursor-pointer">
                <AiOutlineClose />
            </section>

            <div className={`${darkTheme ? `bg-[#1E1E1E] text-white scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `bg-white text-black scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} flex flex-col w-full md:max-h-180 overflow-y-auto scrollbar-thin gap-4 px-6 transition-all duration-300`}>
                <div className={`flex w-full gap-6 p-4 rounded-lg`}>
                    <img src={alanzoka} className={`md:w-30 md:h-30 rounded-full`}></img>
                    <div className={`flex flex-col gap-1`}>
                        <h2 className={`text-2xl font-semibold wrap-break-word`}>Sobrevivendo à Nakai</h2>
                        <h3>Status:</h3>
                        <p className={`${darkTheme ? `bg-cyan-500` : `bg-[#76BBED]`} text-white w-fit justify-center items-center px-4 rounded-2xl transition-all duration-300`}>Congelado</p>
                    </div>
                </div>

                <div className={`${darkTheme ? `text-white` : `text-[#484848]`} flex flex-col gap-2 text-xl transition-all duration-300`}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo voluptas incidunt vitae nisi reprehenderit? 
                        Incidunt in repellendus, nemo vel veniam voluptatum.</p>
                </div>
                
                <div className={`${darkTheme ? `border-white` : `border-[#A9A9A9]`} border transition-all duration-300`}></div>

                <div className={`${darkTheme ? `text-white` : `text-[#484848]`} flex flex-col gap-2 text-lg transition-all duration-300`}>
                    <div className={`flex gap-2 items-center`}>
                        <p className={`${darkTheme ? `` : `text-[#9C9C9C]`} transition-all duration-300`}>Data de Criação:</p>
                        <p className={`${darkTheme ? `` : `text-[#9C9C9C]`} transition-all duration-300`}>{todayAndHour}</p>
                    </div>
                    
                    <div className={`flex gap-2 items-center`}>
                        {/* fazer lógica pra ser conclusão ou ser congelamento usando ternário a partir de projectStatus */}
                        <p className={`${darkTheme ? `` : `text-[#9C9C9C]`} transition-all duration-300`}>{`Data de conclusão:`}</p>
                        <p className={`${darkTheme ? `` : `text-[#9C9C9C]`} transition-all duration-300`}>{today}</p>
                    </div>

                </div>
            </div>
        </section>
    )
}