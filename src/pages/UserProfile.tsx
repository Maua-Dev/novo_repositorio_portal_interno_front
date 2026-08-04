import { useState } from "react";
import Navbar from "../components/Navbar"
import { CiClock2 } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";
import SocialProfile from "../components/socialProfile";

export default function Profile() {

    const { darkTheme } = useContext(ThemeContext);

    const [pfpHovered, setPfpHovered] = useState(false)
    localStorage.setItem("Redes sociais", JSON.stringify({ "phone": "(11) 99858-6587", "discord": "_lukzin", "linkedin": "lbrodrigues" }))
    return (
        <div className="flex w-full poppins-regular">

            <div className="flex static ">
                <Navbar />
            </div>
            <main className={`${darkTheme ? "bg-[url(src/assets/images/backgroundActivitiesPI.png)]" : "bg-[url(src/assets/images/whiteBackground.png)]"} bg-cover min-h-screen w-full flex justify-center pt-20 pb-20 md:pl-52 md:pr-20`}>
                <div className="w-5/6 h-fit flex flex-col gap-5 md:flex-row md:w-full">
                    <div id="card-resumo-perfil" className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} rounded-2xl p-6 flex flex-col gap-6 md:w-3/4 transition-all duration-300`}>
                        <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold text-2xl md:text-3xl transition-all duration-300`}>Resumo do seu perfil</h2>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
                            <div
                                className="relative flex size-28 shrink-0 self-center place-items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-purple-600 to-blue-300 text-white md:self-start"
                                onMouseEnter={() => setPfpHovered(true)}
                                onMouseLeave={() => setPfpHovered(false)}
                            >
                                <span className="font-bold text-lg">LR</span>
                                <div
                                    className={`absolute bottom-0 left-0 flex h-2/7 w-full items-end justify-center rounded-b-full bg-[rgba(0,0,0,0.32)] pb-2 text-sm font-semibold cursor-pointer z-10 hover:bg-[rgba(0,0,0,0.45)] transition-all duration-200 ease-out ${pfpHovered ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"}`}
                                >
                                    Editar
                                </div>
                            </div>
                            <div id="resumo-info-perfil" className="flex flex-1 flex-col gap-3">
                                <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold text-xl md:hidden transition-all duration-300`}>Informações pessoais</h2>
                                <div className={`${darkTheme ? `text-white` : `text-black`} text-lg flex flex-col md:gap-3 transition-all duration-300`}>
                                    <p className="font-semibold md:text-2xl">Lucca Rodrigues</p>
                                    <div className="gap-12 md:flex md:w-full">
                                        <div>
                                            <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-semibold transition-all duration-300`}>RA:</span> 25.00503-4</p>
                                            <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-semibold transition-all duration-300`}>Curso:</span> CIC</p>
                                            <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-semibold transition-all duration-300`}>Ano:</span> 2º</p>
                                        </div>
                                        <div>
                                            <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-semibold transition-all duration-300`}>Cargo:</span> Desenvolvedor / Gestor</p>
                                            <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-semibold transition-all duration-300`}>Status:</span> Ativo</p>
                                        </div>
                                        <div className="md:ml-auto md:mr-6">
                                            <SocialProfile />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${darkTheme ? `border-[#BCBCBC]` : `border-gray-200`} border w-full place-self-center`} />
                        <div id="resumo-dev-perfil" className="flex flex-col gap-3">
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold text-xl md:text-2xl transition-all duration-300`}>Informações da DEV</h2>
                            <div className="text-lg flex flex-col md:gap-2">
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-semibold transition-all duration-300`}>Email:</span> lrodrigues.devmaua@gmail.com</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-semibold transition-all duration-300`}>Área:</span> Business</p>
                                <p className={`${darkTheme ? `text-[#BCBCBC]` : `text-black`} transition-all duration-300`}><span className={`${darkTheme ? `text-white` : `text-black`} font-semibold transition-all duration-300`}>Data de entrada:</span> 29/09/2025</p>
                            </div>
                        </div>
                        <div className={`${darkTheme ? `border-[#BCBCBC]` : `border-gray-200`} border w-full place-self-center transition-all duration-300`} />
                        {darkTheme ? <img src="./src/assets/images/dev_perfil_dark.png" alt="logo dev dark" /> : <img src="./src/assets/images/dev_perfil.png" alt="logo dev branca" />}
                    </div>
                    <div className="flex flex-col gap-5 md:w-1/3">
                        <div id="card-horas-perfil" className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300`}>
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold text-2xl md:text-3xl transition-all duration-300`}>Horas totais</h2>
                            <p className={`${darkTheme ? `text-white` : `text-black`} text-3xl w-full text-center flex place-items-end justify-center gap-2 transition-all duration-300 items-center`}> <CiClock2 /> 60.0 horas</p>
                            <div className={`${darkTheme ? `border-[#BCBCBC]` : `border-gray-200`} border border-gray-200 w-full place-self-center transition-all duration-300`} />
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold text-2xl md:text-3xl transition-all duration-300`}>Strikes</h2>
                            <div className="flex justify-center items-center gap-8 text-3xl">
                                <span className="text-yellow-400 cursor-pointer"><IoStar /></span>
                                <span className="text-gray-400 cursor-pointer"><IoStar /></span>
                            </div>
                            <div className={`${darkTheme ? `border-[#BCBCBC]` : `border-gray-200`} border border-gray-200 w-full place-self-center transition-all duration-300`} />
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} font-bold text-2xl md:text-3xl transition-all duration-300`}>Projetos envolvidos</h2>
                            <div className="w-full flex flex-wrap justify-center items-center gap-2 md:gap-x-4 md:gap-y-2">
                                <p className={`${darkTheme ? `bg-[#4562B3] text-white` : `bg-blue-300`} text-center text-md px-6 py-1 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 cursor-pointer`}>Portal Interno</p>
                                <p className={`${darkTheme ? `bg-[#B34444] text-white` : `bg-red-300`} text-center text-md px-6 py-1 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 cursor-pointer`}>Dev Medias</p>
                                <p className={`${darkTheme ? `bg-[#B34444] text-white` : `bg-red-300`} text-center text-md px-6 py-1 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 cursor-pointer`}>Portal Interno</p>
                                <p className={`${darkTheme ? `bg-[#4562B3] text-white` : `bg-blue-300`} text-center text-md px-6 py-1 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 cursor-pointer`}>Luz</p>
                                <p className={`${darkTheme ? `bg-[#B34444] text-white` : `bg-red-300`} text-center text-md px-6 py-1 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 cursor-pointer`}>Reservation</p>
                                <p className={`${darkTheme ? `bg-[#B34444] text-white` : `bg-red-300`} text-center text-md px-6 py-1 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 cursor-pointer`}>Portal Interno</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
