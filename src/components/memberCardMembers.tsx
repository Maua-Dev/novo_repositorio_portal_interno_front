import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

type MemberInfo = {
    profilePicture: string,
    name: string,
    area: string,
    status: string,
    projectsInvolved: string[],
    chosen: boolean,
    strike: string,
    expandDetails: (name: string) => void
}

export default function MemberCardInfo({profilePicture, name, area, status, strike, projectsInvolved, expandDetails}: MemberInfo) {

    const { darkTheme } = useContext(ThemeContext);

    return (
        <div id={strike} className={`${darkTheme ? `bg-[#333333]` : `bg-[#F3F3F3]`} border-[#B4B4B4] flex flex-col w-full md:max-h-fit rounded-lg border  transition-all duration-300`}>
                            <div className={`flex flex-col w-full gap-3 px-6 py-4 rounded-lg`}>
                                <div className="flex gap-4">
                                    <img src={profilePicture} className={`md:w-20 md:h-20 rounded-full`}></img>
                                    <div className={`flex flex-col gap-1`}>
                                        <h2 className={`text-xl flex flex-wrap`}>{name}</h2>
                                        <p className={`${darkTheme ? `bg-[#4562B3]` : `bg-[#ADDDFF]`} w-fit justify-center items-center text-lg px-4 rounded-2xl transition-all duration-300`}>{area}</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex justify-center gap-2 p-1">
                                <h3>Status:</h3>
                                <p className={`
                                ${status === "Ativo" ? `${darkTheme ? `bg-[#44A344]` : `bg-[#D1FFCC]`}` : ``}
                                ${status === "Congelado" ? `${darkTheme ? `bg-cyan-600` : `bg-cyan-200`}` : ``}
                                ${status === "Desligado" ? `${darkTheme ? `bg-[#B34444]` : `bg-[#FFD1CC]`}` : ``}
                                w-fit justify-center items-center px-4 rounded-2xl transition-all duration-300`}>{status}
                                </p>
                            </div>

                            <div className={`border-[#B4B4B4] border transition-all duration-300`}></div>

                            <div className="flex flex-col justify-center items-center gap-1 p-1">
                                <h3>Projetos Atuais:</h3>
                                <div className="flex flex-wrap gap-2">
                                {projectsInvolved.map((project) => (`${project} `))}    
                                </div>
                            </div>

                            <div className={`border-[#B4B4B4] border transition-all duration-300`}></div>

                            <button onClick={() => expandDetails(name)} className={`text-xl p-2 hover:cursor-pointer`}>Ver Perfil</button>

                        </div>
    )
}