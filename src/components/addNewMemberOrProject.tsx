import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
import { CgClose } from "react-icons/cg";


interface AddNewMemberOrProjectProps{
    id: string,
    close: () => void,
    titulo1: string,
    placeholder1: string,
    titulo2: string,
    placeholder2: string,
    titulo3: string,
    placeholder3: string,
    titulo4: string,
    buttonText: string,
}

export default function AddNewMemberOrProject({id, close, titulo1, titulo2, titulo3, titulo4, placeholder1, placeholder2, placeholder3, buttonText}:AddNewMemberOrProjectProps) {

    const { darkTheme } = useContext(ThemeContext)

    return(
        <section className={`${darkTheme ? `bg-[#1E1E1E] border-indigo-500` : `bg-white border-violet-300`} absolute flex flex-col items-center justify-center z-2 md:w-140 md:h-170 border-8 rounded-2xl overflow-hidden drop-shadow-2xl transition-all duration-300`}>
                <article className={`flex w-full justify-end text-4xl px-4`}>
                    <CgClose onClick={close} className={`${darkTheme ? `text-white` : `text-black`} hover:cursor-pointer hover:scale-120 transition-all duration-300`}/>
                </article>
                <article className={`md:h-9/10 flex flex-col justify-center items-center gap-4`}>
                    <article className={`md:w-120 flex flex-col gap-4`}>
                        <div className={`flex flex-col gap-2`}>
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} text-xl font-bold transition-all duration-300`}>{titulo1}</h2>
                            <input type="text" className={`${darkTheme ? `bg-[#484848] text-white` : `bg-gray-200 text-black`} rounded-2xl focus:outline-none px-4 py-1 transition-all duration-300`} placeholder={placeholder1}/>
                        </div>

                        {id === "project" ? 
                        <div className={`flex flex-col gap-2`}>
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} text-xl font-bold transition-all duration-300`}>{titulo2}</h2>
                            <textarea className={`${darkTheme ? `bg-[#484848] text-white` : `bg-gray-200 text-black`} rounded-2xl focus:outline-none px-4 py-1 transition-all duration-300`} placeholder={placeholder2}/>
                        </div>
                        :
                        <div className={`flex flex-col gap-2`}>
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} text-xl font-bold transition-all duration-300`}>{titulo2}</h2>
                            <input type="text" className={`${darkTheme ? `bg-[#484848] text-white` : `bg-gray-200 text-black`} rounded-2xl focus:outline-none px-4 py-1 transition-all duration-300`} placeholder={placeholder2}/>
                        </div>
                        }

                        <div className={`flex flex-col gap-2`}>
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} text-xl font-bold transition-all duration-300`}>{titulo3}</h2>
                            <input type="text" className={`${darkTheme ? `bg-[#484848] text-white` : `bg-gray-200 text-black`} rounded-2xl focus:outline-none px-4 py-1 transition-all duration-300`} placeholder={placeholder3}/>
                        </div>

                    </article>

                    <div className={`${darkTheme ? `text-[#CCCCCC]` : `text-black`} border w-full transition-all duration-300`}></div>

                    <article className={`h-1/2 md:w-full flex flex-col items-start gap-2`}>
                        <h2 className={`${darkTheme ? `text-white` : `text-black`} text-xl font-bold transition-all duration-300`}>{titulo4}</h2>
                        <div className={`flex h-full w-full justify-center items-center`}>
                            {id === "project" ? 
                            <input type="" className={`${darkTheme ? `border-white placeholder:text-white` : `border-gray-600 placeholder:text-gray-400`} border-2 border-dashed h-full md:w-100 md:h-50 rounded-4xl text-center md:text-2xl hover:cursor-pointer focus:outline-none transition-all duration-300`} placeholder="Selecione um arquivo"/>
                            : 
                            <input type="" className={`${darkTheme ? `border-white placeholder:text-white` : `border-gray-600 placeholder:text-gray-400`} border-2 border-dashed h-full md:w-60 md:h-60 rounded-full text-center hover:cursor-pointer focus:outline-none transition-all duration-300`} placeholder="Selecione um arquivo"/>
                            }
                        </div>
                    </article>

                    <button className={`bg-[#5C76BC] text-white text-lg px-6 py-1 rounded-2xl hover:cursor-pointer hover:scale-110 transition-all duration-300`}>{buttonText}</button>
                </article>
            </section>
    )
}