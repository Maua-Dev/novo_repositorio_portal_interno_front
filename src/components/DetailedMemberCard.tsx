import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { FaRegClock } from "react-icons/fa";
import { ImBubble } from "react-icons/im";
import { FaLinkedinIn,FaDiscord  } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoStar } from "react-icons/io5";

type Strike = {
    id: number,
    mensagem: string
}

type DetailedMemberInfo = {
    name: string,
    area: string,
    status: string,
    ra: string,
    admissionYear: number,
    collegeDegree: string,
    profilePicture: string,
    phoneNumber: string,
    discordProfile: string,
    linkedinProfile: string,
    currentProjects: string[],
    previousProjects: string[],
    memberHours: number,
    strikes: Strike[],
    memberStrikes: string,
    toggleOpenComments: () => void
}

export default function DetailedMemberCard({
    name,
    area,
    status,
    ra,
    admissionYear,
    collegeDegree,
    profilePicture,
    phoneNumber,
    discordProfile,
    linkedinProfile,
    currentProjects,
    previousProjects,
    memberHours,
    strikes,
    memberStrikes,
    toggleOpenComments}: DetailedMemberInfo) {

    const { darkTheme } = useContext(ThemeContext);

    //Lógica para adicionar ou remover strikes

    // const [striked, setStriked] = useState<number[]>([]);
    // const toggleStrike = (id: number) => {
    //     setStriked((prev) => {
    //         const isMarked = prev.includes(id);
    
    //         // Desmarcando
    //         if (isMarked) {
    //             // Não deixa remover se existir alguma estrela marcada depois dela
    //             if (prev.some((item) => item > id)) {
    //                 return prev;
    //             }
    
    //             return prev.filter((item) => item !== id);
    //         }
    
    //         // Marcando
    //         if (id > 0 && !prev.includes(id - 1)) {
    //             return prev;
    //         }
    
    //         return [...prev, id];
    //     });
    // };

    return (
<section className={`${darkTheme ? `bg-[#1E1E1E] text-white` : `bg-white text-black drop-shadow-2xl`} flex flex-col w-1/3 min-w-0 md:h-180 rounded-2xl gap-4 p-6 transition-all duration-300`}>
                <div className={`flex justify-between px-6`}>
                    <h1 className={`text-3xl font-bold`}>Detalhes do Membro</h1>
                    <ImBubble onClick={toggleOpenComments} className={`${darkTheme ? `text-white` : `text-gray-300 `} text-4xl hover:cursor-pointer`}></ImBubble>
                </div>
                <div className={`${darkTheme ? `text-white scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `bg-white text-black scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} flex flex-col w-full md:max-h-180 overflow-y-auto scrollbar-thin gap-4 p-6 transition-all duration-300`}>
                    <div className={`flex w-full gap-6 p-4 rounded-lg`}>
                        <img src={profilePicture} className={`md:w-30 md:h-30 rounded-full`}></img>
                        <div className={`flex flex-col gap-1`}>
                            <h2 className={`text-xl`}>{name}</h2>
                            <p className={`${darkTheme ? `bg-[#4562B3]` : `bg-[#ADDDFF]`} w-fit justify-center items-center px-4 rounded-2xl transition-all duration-300`}>{area}</p>
                            <h3>Status:</h3>
                            <p className={`${darkTheme ? `bg-[#B34444]` : `bg-[#FFD1CC]`} w-fit justify-center items-center px-4 rounded-2xl transition-all duration-300`}>{status}</p>
                        </div>
                    </div>

                    <div className={`${darkTheme ? `text-white` : `text-[#484848]`} flex flex-col gap-2 text-xl transition-all duration-300`}>
                        <div className={`flex gap-4 items-center`}>
                            <FiPhoneCall />
                            <p className={`text-lg`}>{phoneNumber}</p>
                        </div>
                        
                        <div className={`flex gap-4 items-center`}>
                            <FaLinkedinIn />
                            <p className={`text-lg`}>{linkedinProfile}</p>
                        </div>

                        <div className={`flex gap-4 items-center`}>
                            <FaDiscord />
                            <p className={`text-lg`}>{discordProfile}</p>
                        </div>
                    </div>
                    
                    <div className={`${darkTheme ? `border-white` : `border-[#A9A9A9]`} border transition-all duration-300`}></div>

                    <div className={`${darkTheme ? `text-white` : `text-[#484848]`} flex flex-col gap-2 text-lg transition-all duration-300`}>
                        <div className={`flex gap-2 items-center`}>
                            <p className={`${darkTheme ? `` : `text-[#9C9C9C]`} transition-all duration-300`}>RA:</p>
                            <p className={`${darkTheme ? `` : `text-[#9C9C9C]`} transition-all duration-300`}>{ra}</p>
                        </div>
                        
                        <div className={`flex gap-2 items-center`}>
                            <p className={`${darkTheme ? `` : `text-[#9C9C9C]`} transition-all duration-300`}>Ano de admissão:</p>
                            <p className={`${darkTheme ? `` : `text-[#9C9C9C]`} transition-all duration-300`}>{admissionYear}</p>
                        </div>

                        <div className={`flex gap-2 items-center`}>
                            <p className={`${darkTheme ? `` : `text-[#9C9C9C]`} transition-all duration-300`}>Curso:</p>
                            <p className={`${darkTheme ? `` : `text-[#9C9C9C]`} transition-all duration-300`}>{collegeDegree}</p>
                        </div>
                    </div>

                    <div className={`${darkTheme ? `border-white` : `border-[#A9A9A9]`} border transition-all duration-300`}></div>
                    
                    <div className="flex flex-col gap-6">
                        {/* mudar bg dark da div no map? */}
                        <div className={`flex flex-col gap-2`}>
                            <h3 className={`text-xl font-bold`}>Projetos Atuais:</h3>
                            <div className="flex flex-wrap gap-2">
                                {currentProjects.map((project) => (
                                    <div className={`${darkTheme ? `bg-[#4562B3]` : `bg-[#ADDDFF]`} py-1 px-8 rounded-2xl hover:cursor-pointer`}>{project}</div>
                                ))}    
                            </div>
                        </div>

                        <div className={`flex flex-col gap-2`}>
                            <h3 className={`text-xl font-bold`}>Projetos Anteriores:</h3>
                            <div className="flex flex-wrap gap-2">
                                {previousProjects.map((project) => (
                                    <div className={`${darkTheme ? `bg-[#B34444]` : `bg-[#FFD1CC]`} py-1 px-8 rounded-2xl hover:cursor-pointer`}>{project}</div>
                                ))}    
                            </div>
                        </div>

                        <div className={`flex flex-col gap-2`}>
                            <h3 className={`text-xl font-bold`}>Horas Registradas:</h3>
                            <div className={`flex gap-3 items-center`}>
                                <div className={`flex justify-center items-center h-12 w-12 text-3xl border rounded-lg p-2`}>
                                    <FaRegClock></FaRegClock>
                                </div>
                                <h3 className={`text-3xl`}>{memberHours}h</h3>
                            </div>
                        </div>
                    </div>

                    <div className={`${darkTheme ? `border-white` : `border-[#A9A9A9]`} border transition-all duration-300`}></div>

                    <div className="flex flex-col gap-2">
                        <h3 className={`text-xl font-bold`}>Strikes Registrados</h3>
                        <div className="flex gap-2">
                            {strikes.map((strike) => (
                                <IoStar
                                    key={strike.id}
                                    //onClick={() => toggleStrike(strike.id)}
                                    //strike.id + 1 porque strike.id começa em 0 e a qtde de strikes começa em 1
                                    className={`${((strike.id + 1) <= Number(memberStrikes)) ? "text-yellow-400" : "text-gray-400"} w-16 h-16 hover:cursor-pointer`}
                                />                              
                            ))}
                        </div>
                    </div>



                </div>
            </section>
    )
}