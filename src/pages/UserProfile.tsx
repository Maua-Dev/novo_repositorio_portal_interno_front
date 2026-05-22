import { useState } from "react";
import Navbar from "../components/Navbar"

export default function Profile() {

    const [pfpHovered, setPfpHovered] = useState(false)

    return (
        <div className="flex w-full">
            <div className="flex">
                <Navbar />
            </div>
            <main className="bg-blue-300 min-h-screen w-full flex justify-center items-center">
                <div className="w-5/6 h-fit flex flex-col">
                    <div id="card-resumo-perfil" className="bg-white rounded-2xl p-6 flex flex-col gap-6">
                        <h2 className="font-bold text-3xl">Resumo do seu perfil</h2>
                        <div
                            className="bg-linear-to-r from-purple-600 to-blue-300 rounded-lg justify-center place-items-center w-28 h-28 text-white flex"
                            onMouseEnter={() => setPfpHovered(true)}
                            onMouseLeave={() => setPfpHovered(false)}
                        >
                            <span className="font-bold text-lg">LR</span>
                            <div
                                className={`flex place-self-end p-1 border-t border-black w-28 justify-center place-items-center bg-[rgba(0,0,0,0.32)] rounded-b-lg fixed font-semibold cursor-pointer z-10 hover:bg-[rgba(0,0,0,0.45)] transition-all duration-200 ease-out text-sm ${pfpHovered ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 pointer-events-none"}`}
                            >
                                Editar
                            </div>
                        </div>
                        <div id="resumo-info-perfil" className="flex flex-col gap-3">
                            <h2 className="font-bold text-2xl">Informações pessoais</h2>
                            <div className="text-lg flex flex-col">
                                <p className="font-semibold">Lucca de Barros Rodrigues</p>
                                <p><span className="font-semibold">RA:</span> 25.00503-4</p>
                                <p><span className="font-semibold">Curso:</span> CIC</p>
                                <p><span className="font-semibold">Ano:</span> 2º</p>
                                <p><span className="font-semibold">Status:</span> ACTIVE</p>
                            </div>
                        </div>
                        <div className="border border-gray-200 w-full place-self-center" />
                        <div id="resumo-dev-perfil" className="flex flex-col gap-3">
                            <h2 className="font-bold text-2xl">Informações da DEV</h2>
                            <div className="text-lg flex flex-col">
                                <p><span className="font-semibold">Email:</span> lrodrigues.devmaua@gmail.com</p>
                                <p><span className="font-semibold">Área:</span> Business</p>
                                <p><span className="font-semibold">Data de entrada:</span> 29/09/2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}