import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
import { LuPencil } from "react-icons/lu";
import { GoCalendar } from "react-icons/go";
import { BsPeopleFill } from "react-icons/bs";

export default function DetailedHistoryCard() {

    const { darkTheme } = useContext(ThemeContext)

    const involvedMemberlist = ["Membro 1", "Membro 2", "Membro 3", "Membro 4", "Membro 5", "Membro 6", "Membro 7", "Membro 8", "Membro 9", "Membro 10"]
    const tagsList = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5",]
    return(
        <main className={`${darkTheme ? `bg-[#1E1E1E] text-white border-gray-700` : `bg-white text-black border-violet-300`} absolute flex flex-col px-8 py-4 gap-8 z-2 md:w-280 md:h-160 border-8 rounded-2xl overflow-hidden drop-shadow-2xl transition-all duration-300`}>
            <section className="flex gap-4 items-center text-4xl">
                <h1 className="font-semibold">Nome da Atividade</h1>
                <LuPencil className="hover:cursor-pointer hover:scale-110 transition-transform duration-300"/>
            </section>

            <section className="flex w-full h-full justify-between">
                <article className="flex flex-col w-[70%] gap-8">
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-4">
                            <h2 className="text-xl md:w-20">Projeto:</h2>
                            <p className="font-semibold text-xl">Portal Interno</p>
                        </div>

                        <div className="flex gap-4">
                            <h2 className="text-xl md:w-20">Tags:</h2>
                            {tagsList.map((tag) => (
                                <p className="font-semibold text-xl">#{tag}</p>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <h2 className="text-xl md:w-20">Área:</h2>
                            <p className="font-semibold text-xl">Front-end</p>
                        </div>

                        <div className="flex gap-4">
                            <h2 className="text-xl md:w-20">Tempo:</h2>
                            <p className="font-semibold text-xl">1200 horas</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <GoCalendar />
                            <h2 className={`${darkTheme ? `bg-blue-500` : `bg-[#749FFB99]`} px-2 py-1 rounded-lg transition-colors duration-300`}>Data de início:</h2>
                            <p className="font-semibold">03/09/2024</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <GoCalendar />
                            <h2 className={`${darkTheme ? `bg-red-500` : `bg-[#FEACA3]`} px-2 py-1 rounded-lg transition-colors duration-300`}>Data de término:</h2>
                            <p className="font-semibold">03/09/2024</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-full gap-2">
                        <h2 className="font-semibold text-2xl">Descrição</h2>
                        <textarea 
                        maxLength={500}
                        placeholder={"Aqui vai ficar a descrição antiga como placeholder"} 
                        className={`${darkTheme ? `placeholder:text-white border-white` : `placeholder:text-black border-black`} w-[80%] h-50 border focus:outline-none rounded-2xl py-2 px-4 transition-colors duration-300`}></textarea>
                    </div>
                </article>

                <article className="flex flex-col items-center w-[30%] gap-4">
                    <div className={`${darkTheme ? `bg-blue-500` : `bg-[#749FFB99]`} w-full flex items-center justify-center gap-2 py-1 rounded-xl transition-colors duration-300`}>
                        <BsPeopleFill />
                        <h2 className="text-xl font-semibold">Membros Envolvidos</h2>
                    </div>

                    <div className="flex flex-col w-full md:h-80  justify-center gap-2 overflow-y-auto scrollbar-thin">
                        {involvedMemberlist.map((member) => (
                            <div className="flex gap-2 items-center">
                                <div className={`${darkTheme ? `bg-white` : `bg-black`} md:w-2 md:h-2 rounded-full transition-colors duration-300`}></div>
                                <div>{member}</div>
                            </div>
                        ))}
                    </div>
                </article>
            </section>
        </main>
    )
}