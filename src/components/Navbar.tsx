import { FaPlusSquare, FaUser } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";
import { IoMdExit, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from "react-router";
import { HiMiniUsers } from "react-icons/hi2";
import { FiPieChart } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

export default function Navbar() {

    const { darkTheme, toggleTheme } = useContext(ThemeContext);

    const buttonClasses = `${darkTheme ? `hover:lg:text-yellow-500 text-white` : `hover:lg:text-blue-500 text-gray-800`} p-2 text-2xl cursor-pointer w-fit transition-all duration-300 flex items-center`
    const labelClasses = "hidden md:ps-7 md:block text-lg font-medium"
    const [opened, setOpened] = useState(false)
    const navigate = useNavigate();
    const goProfile = () => {
        navigate('/perfil')
    }
    const goActivities = () => {
        navigate('/atividades')
    }
    const goHistory = () => {
        navigate('/historico')
    }
    const goHoursChart = () => {
        navigate('/horas-gerais')
    }

    return (
        <nav className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} duration-300 poppins-regular w-full flex justify-center p-2 place-self-end transition-all shadow md:p-0 md:h-screen md:flex-col md:justify-between fixed bottom-0 left-0 z-20 md:top-0 ${opened ? "md:w-52" : "md:w-32"}`}>
            <div className="bg-white md:hidden flex w-full justify-center top-0 shadow-md fixed left-0 z-30">
                <img src="/src/assets/images/logo_dev.png" alt="Logo DEV" className="max-w-12 place-self-center m-3" />
            </div>
            <div className={`flex md:flex-col`}>
                {darkTheme ? <img src={`/src/assets/images/logo_dev_white.png`} alt="Logo DEV" className="hidden md:block max-w-16 place-self-center my-10 transition-all duration-300"/> : <img src={`/src/assets/images/logo_dev.png`} alt="Logo DEV" className="hidden md:block max-w-16 place-self-center my-10 transition-all duration-300"/>}
                <div className={`flex md:flex-col gap-4 transition-all ${opened ? "place-items-start ps-10" : "place-items-center"}`}>
                    <button className={buttonClasses} onClick={goProfile}><FaUser />{opened && <span className={labelClasses}>Perfil</span>}</button>
                    <button className={buttonClasses} onClick={goActivities}><FaPlusSquare />{opened && <span className={labelClasses}>Tarefa</span>}</button>
                    <button className={buttonClasses} onClick={goHistory}><FaClockRotateLeft />{opened && <span className={labelClasses}>Histórico</span>}</button>
                    <button className={buttonClasses}><HiMiniUsers />{opened && <span className={labelClasses}>Não sei</span>}</button>
                    <button className={buttonClasses} onClick={goHoursChart}><FiPieChart />{opened && <span className={labelClasses}>Geral</span>}</button>
                </div>
            </div>
            <div className="flex md:flex-col gap-4 place-items-center ps-4 md:ps-0 md:mb-15">
                <button className={buttonClasses} onClick={toggleTheme}>{darkTheme ? <FiSun /> : <BsMoonStars />}</button>
                <button className={buttonClasses + ` hidden md:flex ${opened ? "rotate-180" : "rotate-0"}`} onClick={() => setOpened(!opened)}><IoIosArrowForward /></button>
                <button className={buttonClasses}><IoMdExit /></button>
            </div>
        </nav>
    )
}