import './App.css'
import { FaPlusSquare, FaUser } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";
import { IoMdExit, IoIosArrowForward } from "react-icons/io";

function App() {

  const buttonClasses = "p-2 text-2xl cursor-pointer hover:md:text-blue-500 w-fit text-gray-800 transition-all"

  return (
    <div className="w-full h-screen flex">
      <nav className="w-full bg-gray-200 flex justify-center p-2 gap-5 place-self-end md:w-28 md:p-0 md:h-screen md:flex-col md:justify-normal">
        <div className="flex md:flex-col gap-4 place-items-center">
          <img src="/src/assets/logo_dev.png" alt="Logo DEV" className="hidden md:block max-w-1/2 place-self-center mt-10" />
          <button className={buttonClasses}><FaUser /></button>
          <button className={buttonClasses}><FaPlusSquare /></button>
          <button className={buttonClasses}><FaClockRotateLeft /></button>
        </div>
        <div className="flex md:flex-col gap-4 place-items-center">
          <button className={buttonClasses}><BsMoonStars /></button>
          <button className={buttonClasses}><IoIosArrowForward /></button>
          <button className={buttonClasses}><IoMdExit /></button>
        </div>
      </nav>
    </div>
  )
}

export default App
