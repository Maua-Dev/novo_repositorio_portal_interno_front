import Navbar from "../components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import MemberCard from "../components/memberCard";
import ActionCard from "../components/actionCard";
import { useState } from 'react';
import type { ChangeEvent } from "react";
import { IoMdSearch } from "react-icons/io";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

function UserActivities() {

    const { darkTheme } = useContext(ThemeContext);

    const [calc, setCalc] = useState(false);
    const toggleCalc = () => {
        setCalc(!calc);
    }

    const [addM, setAddM] = useState(false);
    const addMember = () => {
        setAddM(!addM);
    }

    const [addA, setAddA] = useState(false);
    const addAction = () => {
        setAddA(!addA);
    }

    const [title, setTitle] = useState<string>("");

    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        };
    
        const clearTitle = () => {
        setTitle("");
        }

    const [project, setProject] = useState<string>("");

    const handleProject = (e: ChangeEvent<HTMLInputElement>) => {
        setProject(e.target.value);
        };
    
        const clearProject = () => {
        setProject("");
        }

    const [area, setArea] = useState<string>("");

    const handleArea = (e: ChangeEvent<HTMLInputElement>) => {
        setArea(e.target.value);
        };
    
        const clearArea = () => {
        setArea("");
        }

    const [time, setTime] = useState<string>("");

    const handleTime = (e: ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value);
        };
    
        const clearTime = () => {
        setTime("");
        }

    const [from, setFrom] = useState<string>("");

    const handleFrom = (e: ChangeEvent<HTMLInputElement>) => {
        setFrom(e.target.value);
        };
    
        const clearFrom = () => {
        setFrom("");
        }

    const [to, setTo] = useState<string>("");

    const handleTo = (e: ChangeEvent<HTMLInputElement>) => {
        setTo(e.target.value);
        };
    
        const clearTo = () => {
        setTo("");
        }

    const [about, setAbout] = useState<string>("");

    const handleAbout = (e: ChangeEvent<HTMLInputElement>) => {
        setAbout(e.target.value);
        };
    
        const clearAbout = () => {
        setAbout("");
        }

    return(
        <div className="flex w-full">

            <div className="flex">
            <Navbar></Navbar>
            </div>

            <main className="bg-[url(src/assets/images/backgroundActivitiesPI.png)] min-h-screen w-full flex justify-center items-center pl-20">
                <article className={`${darkTheme ? `bg-[#1E1E1E] text-white ` : `bg-white`} lg: w-350 lg: h-170 rounded-4xl flex transition-all duration-300`}>
                    <section className="flex flex-col w-2/3 rounded-4xl gap-5 p-15">
                        
                        <div className="flex flex-col gap-5">
                            <h1 className="font-bold text-2xl">Título da Atividade</h1>
                            <input
                            type="text"
                            value={title}
                            onChange={handleTitle}
                            className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} w-full rounded-3xl p-4 focus:outline-none transition-all duration-300`}/>
                        </div>

                            <div className="flex justify-between">

                                <div className="flex flex-col gap-2">
                                    <h2 className="font-bold text-lg">Projeto</h2>
                                    <div className="relative flex w-full max-w-sm items-center">
                                        <input 
                                            type="text" 
                                            value={project}
                                            onChange={handleProject}
                                            className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} w-full rounded-full py-2 pl-4 pr-20 focus:outline-none transition-all duration-300`}
                                        />
                                        <button 
                                            type="button" 
                                            className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#CCCCCC]`} absolute right-0 rounded-r-3xl h-full w-10 border cursor-pointer transition-all duration-300`}
                                        >
                                            <IoIosArrowForward className="h-full w-full"></ IoIosArrowForward >
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="font-bold text-lg">Área</h2>
                                    <div className="relative flex w-full max-w-sm items-center">
                                        <input 
                                            type="text" 
                                            value={area}
                                            onChange={handleArea}
                                            className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} w-full rounded-full py-2 pl-4 pr-20 focus:outline-none transition-all duration-300`}
                                        />
                                        <button 
                                            type="button" 
                                            className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#CCCCCC]`} absolute right-0 rounded-r-3xl h-full w-10 border cursor-pointer transition-all duration-300`}
                                        >
                                            <IoIosArrowForward className="h-full w-full"></ IoIosArrowForward >
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h2 className="font-bold text-lg">Tempo</h2>
                                    <div className="flex">
                                        <input type="text"
                                        value={time}
                                        onChange={handleTime}
                                        className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} w-full rounded-3xl p-2 focus:outline-none transition-all duration-300`}/>
                                    </div>
                                </div>

                            </div>
                        

                        <div>
                            <div className="flex flex-col">

                                <h2 className="font-bold text-lg">Data</h2>
                                <div className="flex gap-5 content-between">
                                    <div className="flex flex-col gap-2">
                                        <div>
                                        <div className="relative flex w-full max-w-sm items-center">
                                            <input 
                                                type="text" 
                                                value={from}
                                                onChange={handleFrom}
                                                className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} w-full rounded-full py-2 pl-4 pr-20 focus:outline-none transition-all duration-300`}
                                            />
                                            <button 
                                                type="button" 
                                                className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#CCCCCC]`} absolute right-0 rounded-r-3xl h-full w-10 border cursor-pointer transition-all duration-300`}
                                            >
                                                <IoIosArrowForward className="h-full w-full"></ IoIosArrowForward >
                                            </button>
                                            </div>

                                            <p>De</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <div className="relative flex w-full max-w-sm items-center">
                                                <input 
                                                    type="text" 
                                                    value={to}
                                                    onChange={handleTo}
                                                    className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} w-full rounded-full py-2 pl-4 pr-20 focus:outline-none transition-all duration-300`}
                                                />
                                                <button 
                                                    type="button" 
                                                    className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#CCCCCC]`} absolute right-0 rounded-r-3xl h-full w-10 border cursor-pointer transition-all duration-300`}
                                                >
                                                    <IoIosArrowForward className="h-full w-full"></ IoIosArrowForward >
                                                </button>
                                            </div>
                                            <p>Até</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center w-1/7">
                                        <div className={`${calc ? `bg-[#4562B3]` : `${darkTheme ? `bg-[#484848]` : `bg-[#D9D9D9]`} `} h-1/2 w-15 rounded-full p-2 cursor-pointer transition-all duration-300`} onClick={toggleCalc}>
                                            <div className={`${calc ? `flex text-white justify-end`: `flex text-white justify-start`} transition-all duration-300`}>
                                                <FaCircle />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-lg">Descrição</h2>
                            <div className="flex h-50 w-full">
                                <input type="text" 
                                value={about}
                                onChange={handleAbout}
                                className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} w-full h-full rounded-4xl pl-4 focus:outline-none text-center transition-all duration-300`}/>
                            </div>
                        </div>


                    </section>

                    <section className="flex flex-col w-1/3 rounded-4xl p-10 gap-10 items-center">
                        <div className="flex flex-col gap-2 w-8/10">
                            <div className="flex justify-between items-center">
                                <h2 className="font-[Oswald] font-bold text-lg transition-all duration-300">Membros</h2>
                                {addM ? 
                                <div className="flex justify-end items-center h-full">
                                    <input
                                    className={`${darkTheme ? `bg-[#484848]` : `bg-[#AEB6B5]`} text-white text-sm font-[inter] items-center p-2 rounded-lg focus:outline-none placeholder:text-white transition-all duration-300`} 
                                    placeholder="BUSCAR"/>
                                    <IoMdSearch className={`${darkTheme ? `text-black` : `text-white`} flex absolute transition-all duration-300`}></IoMdSearch>
                                </div>
                                :
                                <AiOutlinePlusCircle 
                                onClick={addMember}
                                className={`${darkTheme ? `text-white` : `text-[#555E5E]`} cursor-pointer h-5 w-5 transition-all duration-300`}></AiOutlinePlusCircle>}
                            </div>
                            <div className={`${darkTheme ? `scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} flex lg: h-40 justify-center items-center flex-col gap-2 pr-2 overflow-y-auto scrollbar-thin transition-all duration-300`}>
                                <MemberCard></MemberCard>
                                <MemberCard></MemberCard>
                                <MemberCard></MemberCard>
                                <MemberCard></MemberCard>
                                <MemberCard></MemberCard>
                                <MemberCard></MemberCard>
                                <MemberCard></MemberCard>
                                <MemberCard></MemberCard>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-8/10">
                            <div className="flex justify-between items-center">
                                <h2 className="font-[Oswald] font-bold text-lg transition-all duration-300">Ação</h2>
                                {addA ? 
                                <div className="flex justify-end items-center">
                                    <input
                                    className={`${darkTheme ? `bg-[#484848]` : `bg-[#AEB6B5]`} text-white text-sm font-[inter] items-center p-2 rounded-lg focus:outline-none placeholder:text-white transition-all duration-300`} 
                                    placeholder="BUSCAR"/>
                                    <IoMdSearch className={`${darkTheme ? `text-black` : `text-white`} flex absolute transition-all duration-300`}></IoMdSearch>
                                </div>
                                :
                                <AiOutlinePlusCircle 
                                onClick={addAction}
                                className={`${darkTheme ? `text-white` : `text-[#555E5E]`} cursor-pointer h-5 w-5 transition-all duration-300`}></AiOutlinePlusCircle>}
                            </div>
                            <div className={`${darkTheme ? `scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} flex lg: h-40 justify-center items-center flex-col gap-2 pr-2 overflow-y-auto scrollbar-thin transition-all duration-300`}>
                                <ActionCard></ActionCard>
                                <ActionCard></ActionCard>
                                <ActionCard></ActionCard>
                                <ActionCard></ActionCard>
                                <ActionCard></ActionCard>
                                <ActionCard></ActionCard>
                                <ActionCard></ActionCard>
                                <ActionCard></ActionCard>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-5 items-center">
                            <button className={`${darkTheme ? `bg-[#4562B3] text-white` : `bg-[#4562B3] text-white`} lg: w-40 lg: h-10 rounded-3xl text-xl hover: cursor-pointer transition-all duration-300`}>Salvar</button>
                            <button 
                            onClick={(clearAbout && clearArea && clearFrom && clearTo && clearProject && clearTime && clearTitle)}
                            className={`${darkTheme ? `bg-[#FF2E17] text-white border-none` : `bg-white text-[#FF1100] border border-[#FF1100]`} lg: w-40 lg: h-10 rounded-3xl text-xl hover: cursor-pointer transition-all duration-300`}>Limpar</button>
                        </div>

                    </section>
                    
                </article>

            </main>
        </div>
    )
}

export default UserActivities;
