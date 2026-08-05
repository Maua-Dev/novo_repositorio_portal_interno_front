import { FaPlusSquare, FaUser } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";
import { IoMdExit, IoIosArrowForward } from "react-icons/io";
import { useState, useContext } from 'react';
import { useNavigate } from "react-router";
import { HiMiniUsers, HiEllipsisHorizontal } from "react-icons/hi2";
import { FiPieChart, FiSun } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import { ThemeContext } from "../contexts/themeContext";

export default function Navbar() {

    const { darkTheme, toggleTheme } = useContext(ThemeContext);

    const buttonClasses = `${darkTheme ? `hover:lg:text-yellow-500 text-white` : `hover:lg:text-blue-500 text-gray-800`} p-2 text-2xl cursor-pointer w-fit transition-all duration-300 flex items-center`
    const labelClasses = "hidden md:ps-7 md:block text-lg font-medium"
    const menuItemClasses = `flex items-center gap-3 w-full px-4 py-2 text-left text-base transition-colors ${darkTheme ? "hover:bg-white/10" : "hover:bg-black/5"}`
    const [opened, setOpened] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate();

    const closeMenu = () => setMenuOpen(false)

    const goHome = () => navigate('/')
    const goProfile = () => navigate('/perfil')
    const goActivities = () => navigate('/adicionar-atividade')
    const goHistory = () => navigate('/historico')
    const goHoursChart = () => navigate('/horas-gerais')
    const goChatbot = () => navigate('/chatbot')

    const overflowItems = [
        { icon: <HiMiniUsers className="text-xl" />, label: "Membros", onClick: closeMenu },
        { icon: <FiPieChart className="text-xl" />, label: "Geral", onClick: () => { goHoursChart(); closeMenu() } },
        { icon: <RiRobot2Line className="text-xl" />, label: "Chatbot", onClick: () => { goChatbot(); closeMenu() } },
        { icon: darkTheme ? <FiSun className="text-xl" /> : <BsMoonStars className="text-xl" />, label: "Tema", onClick: () => { toggleTheme(); closeMenu() } },
        { icon: <IoMdExit className="text-xl" />, label: "Sair", onClick: closeMenu },
    ]

    return (
        <nav className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} duration-300 poppins-regular w-full flex justify-center p-2 place-self-end transition-all shadow md:p-0 md:h-screen md:flex-col md:justify-between fixed bottom-0 left-0 z-20 md:top-0 ${opened ? "md:w-52" : "md:w-32"}`}>
            <div className="bg-white md:hidden flex w-full justify-center top-0 shadow-md fixed left-0 z-30">
                <img src="/src/assets/images/logo_dev.png" alt="Logo DEV" className="max-w-12 place-self-center m-3" />
            </div>
            <div className="flex md:flex-col w-full md:w-auto">
                {darkTheme ? <img src={`/src/assets/images/logo_dev_white.png`} alt="Logo DEV" className="hidden md:block max-w-16 place-self-center my-10 transition-all duration-300"/> : <img src={`/src/assets/images/logo_dev.png`} alt="Logo DEV" className="hidden md:block max-w-16 place-self-center my-10 transition-all duration-300"/>}

                <div className="flex md:hidden w-full justify-around items-center">
                    <button className={buttonClasses} onClick={goProfile} aria-label="Perfil"><FaUser /></button>
                    <button className={buttonClasses} onClick={goActivities} aria-label="Tarefa"><FaPlusSquare /></button>
                    <button className={buttonClasses} onClick={goHistory} aria-label="Histórico"><FaClockRotateLeft /></button>

                    <div className="relative">
                        <button
                            className={buttonClasses}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Mais opções"
                            aria-expanded={menuOpen}
                        >
                            <HiEllipsisHorizontal />
                        </button>

                        {menuOpen && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={closeMenu} />
                                <div className={`absolute bottom-full right-0 mb-2 z-50 rounded-lg shadow-lg py-2 min-w-44 ${darkTheme ? "bg-[#2a2a2a] text-white" : "bg-white text-gray-800 border border-gray-200"}`}>
                                    {overflowItems.map((item) => (
                                        <button
                                            key={item.label}
                                            className={menuItemClasses}
                                            onClick={item.onClick}
                                        >
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className={`hidden md:flex md:flex-col gap-4 transition-all ${opened ? "place-items-start ps-10" : "place-items-center"}`}>
                    <button className={buttonClasses} onClick={goProfile}><FaUser />{opened && <span className={labelClasses}>Perfil</span>}</button>
                    <button className={buttonClasses} onClick={goActivities}><FaPlusSquare />{opened && <span className={labelClasses}>Tarefa</span>}</button>
                    <button className={buttonClasses} onClick={goHistory}><FaClockRotateLeft />{opened && <span className={labelClasses}>Histórico</span>}</button>
                    <button className={buttonClasses}><HiMiniUsers />{opened && <span className={labelClasses}>Membros</span>}</button>
                    <button className={buttonClasses} onClick={goHoursChart}><FiPieChart />{opened && <span className={labelClasses}>Geral</span>}</button>
                    <button className={buttonClasses} onClick={goChatbot}><RiRobot2Line />{opened && <span className={labelClasses}>Chatbot</span>}</button>
                </div>
            </div>
            <div className="hidden md:flex md:flex-col gap-4 place-items-center md:mb-15">
                <button className={buttonClasses} onClick={toggleTheme}>{darkTheme ? <FiSun /> : <BsMoonStars />}</button>
                <button className={buttonClasses + ` ${opened ? "rotate-180" : "rotate-0"}`} onClick={() => setOpened(!opened)}><IoIosArrowForward /></button>
                <button onClick={goHome} className={buttonClasses}><IoMdExit /></button>
            </div>
        </nav>
    )
}
