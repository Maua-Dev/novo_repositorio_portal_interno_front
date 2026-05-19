import { FaPlusSquare, FaUser } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";
import { IoMdExit, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
export default function Navbar() {

    const buttonClasses = "p-2 text-2xl cursor-pointer hover:lg:text-blue-500 w-fit text-gray-800 transition-all flex items-center"
    const labelClasses = "hidden md:ps-7 md:block text-lg font-medium"
    const [opened, setOpened] = useState(false)
    return (
        <nav className={`w-full flex justify-center p-2 place-self-end transition-all shadow md:p-0 md:h-screen md:flex-col md:justify-between fixed ${opened ? "md:w-52" : "md:w-32"}`}>
            <div className="md:hidden flex w-full justify-center top-0 shadow fixed">
                <img src="/src/assets/logo_dev.png" alt="Logo DEV" className="max-w-12 place-self-center m-3" />
            </div>
            <div className={`flex md:flex-col`}>
                <img src="/src/assets/logo_dev.png" alt="Logo DEV" className="hidden md:block max-w-16 place-self-center my-10" />
                <div className={`flex md:flex-col gap-4 transition-all ${opened ? "place-items-start ps-10" : "place-items-center"}`}>
                    <button className={buttonClasses}><FaUser />{opened && <span className={labelClasses}>Perfil</span>}</button>
                    <button className={buttonClasses}><FaPlusSquare />{opened && <span className={labelClasses}>Tarefa</span>}</button>
                    <button className={buttonClasses}><FaClockRotateLeft />{opened && <span className={labelClasses}>Histórico</span>}</button>
                </div>
            </div>
            <div className="flex md:flex-col gap-4 place-items-center ps-4 md:ps-0 md:mb-15">
                <button className={buttonClasses}><BsMoonStars /></button>
                <button className={buttonClasses + ` hidden md:flex ${opened ? "rotate-180" : "rotate-0"}`} onClick={() => setOpened(!opened)}><IoIosArrowForward /></button>
                <button className={buttonClasses}><IoMdExit /></button>
            </div>
        </nav>
    )
}