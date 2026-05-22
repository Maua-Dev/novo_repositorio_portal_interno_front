import { useState } from "react";
import Navbar from "../components/Navbar"
import { CiClock2 } from "react-icons/ci";
import { IoStar } from "react-icons/io5";

export default function Profile() {

    const [pfpHovered, setPfpHovered] = useState(false)

    return (
        <div className="flex w-full poppins-regular">
            <div className="flex static ">
                <Navbar />
            </div>
            <main className="bg-[url(src/assets/images/backgroundActivitiesPI.png)] bg-cover min-h-screen w-full flex justify-center pt-20 pb-20 md:pl-52 md:pr-20">
                <div className="w-5/6 h-fit flex flex-col gap-5 md:flex-row md:w-full">
                    <div id="card-resumo-perfil" className="bg-white rounded-2xl p-6 flex flex-col gap-6 md:w-3/4">
                        <h2 className="font-bold text-2xl md:text-3xl">Resumo do seu perfil</h2>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
                            <div
                                className="bg-linear-to-r from-purple-600 to-blue-300 rounded-full justify-center place-items-center w-28 h-28 text-white flex relative overflow-hidden"
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
                            <div id="resumo-info-perfil" className="flex flex-col gap-3">
                                <h2 className="font-bold text-xl md:hidden">Informações pessoais</h2>
                                <div className="text-lg flex flex-col md:gap-3">
                                    <p className="font-semibold md:text-2xl">Lucca Rodrigues</p>
                                    <div className="md:flex gap-12">
                                        <div>
                                            <p><span className="font-semibold">RA:</span> 25.00503-4</p>
                                            <p><span className="font-semibold">Curso:</span> CIC</p>
                                            <p><span className="font-semibold">Ano:</span> 2º</p>
                                        </div>
                                        <div>
                                            <p><span className="font-semibold">Cargo:</span> Desenvolvedor / Gestor</p>
                                            <p><span className="font-semibold">Status:</span> Ativo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-200 w-full place-self-center" />
                        <div id="resumo-dev-perfil" className="flex flex-col gap-3">
                            <h2 className="font-bold text-xl md:text-2xl">Informações da DEV</h2>
                            <div className="text-lg flex flex-col md:gap-2">
                                <p><span className="font-semibold">Email:</span> lrodrigues.devmaua@gmail.com</p>
                                <p><span className="font-semibold">Área:</span> Business</p>
                                <p><span className="font-semibold">Data de entrada:</span> 29/09/2025</p>
                            </div>
                        </div>
                        <div className="border border-gray-200 w-full place-self-center" />
                        <img src="./src/assets/images/dev_perfil.png" alt="Imagem dev branca" />
                    </div>
                    <div className="flex flex-col gap-5 md:w-1/3">
                        <div id="card-horas-perfil" className="bg-white rounded-2xl p-6 flex flex-col gap-6">
                            <h2 className="font-bold text-2xl md:text-3xl">Horas totais</h2>
                            <p className="text-3xl w-full text-center flex place-items-end justify-center gap-2"> <CiClock2 /> 60.0 horas</p>
                            <div className="border border-gray-200 w-full place-self-center" />
                            <h2 className="font-bold text-2xl md:text-3xl">Strikes</h2>
                            <div className="flex justify-center items-center gap-8 text-3xl">
                                <span className="text-yellow-400 cursor-pointer"><IoStar /></span>
                                <span className="text-gray-400 cursor-pointer"><IoStar /></span>
                            </div>
                            <div className="border border-gray-200 w-full place-self-center" />
                            <h2 className="font-bold text-2xl md:text-3xl">Projetos envolvidos</h2>
                            <div className="w-full flex flex-wrap justify-center items-center gap-2 md:gap-x-4 md:gap-y-2">
                                <p className="bg-blue-300 text-center text-md px-6 py-1 rounded-2xl shadow-md">Portal Interno</p>
                                <p className="bg-red-300 text-center text-md px-6 py-1 rounded-2xl shadow-md">Dev Medias</p>
                                <p className="bg-red-300 text-center text-md px-6 py-1 rounded-2xl shadow-md">Portal Interno</p>
                                <p className="bg-blue-300 text-center text-md px-6 py-1 rounded-2xl shadow-md">Luz</p>
                                <p className="bg-red-300 text-center text-md px-6 py-1 rounded-2xl shadow-md">Reservation</p>
                                <p className="bg-red-300 text-center text-md px-6 py-1 rounded-2xl shadow-md">Portal Interno</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}