import { useContext } from "react"
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoSend } from "react-icons/io5";

import alanzoka from '../assets/images/alanzoka.png';
// import brksedu from '../assets/images/brksedu.png';
// import dino from '../assets/images/dino.png';
// import fall from '../assets/images/fall.png';
import calango from '../assets/images/calango.png';
// import cap from '../assets/images/cap.png';
// import stormfall33 from '../assets/images/stormfall33.png';
// import bagi from '../assets/images/bagi.png';
// import galaxy from '../assets/images/galaxy.png';
import { ThemeContext } from "../contexts/themeContext";
import CommentCard from "./commentCard";

type Comment = {
    userName: string,
    otherUserName: string,
    userPFP: string,
    date: string,
    message: string,
    handleMessage: (message: string) => void,
    addMessage: () => void,
    delMessage: (message: string) => void,
    messageList: string[]
    toggleOpenComments: () => void
}

type CommentProps = {
    comment: Comment
}



export default function CommentSection({comment}: CommentProps) {
    
    const { darkTheme } = useContext(ThemeContext)

    const userPFP = alanzoka
    const secondUserPFP = calango
    //const thirdUserPFP = cap
    //const otherMemberPFP = brksedu

   

    // const images = [
    //     alanzoka,
    //     brksedu,
    //     dino,
    //     stormfall33,
    //     bagi,
    //     galaxy,
    //     calango,
    //     cap,
    //     fall,
    // ]

    return (
        <section className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} absolute flex flex-col items-center justify-center z-2 md:w-280 md:h-150 md:rounded-tl-[200px] md:rounded-tr-4xl md:rounded-br-[200px] md:rounded-bl-4xl overflow-hidden drop-shadow-2xl transition-all duration-300`}>
                
                <article className="flex justify-center items-center gap-8">
                    <article className="flex flex-col justify-center items-center gap-6 md:h-100">
                        <div className={`flex w-full gap-6 items-center justify-start md:pl-4`}>
                            <img id={comment.userName} src={userPFP} className={`flex md:w-17 md:h-17 rounded-full transition-all duration-300`}></img>
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} text-2xl transition-all duration-300`}>{comment.userName}</h2>
                        </div>
                        <textarea value={comment.message} maxLength={250} onChange={(e) => {comment.handleMessage(e.target.value)}} className={`${darkTheme ? `bg-[#484848] border-white text-white` : `bg-[#EFEFEF] border-[#848484]`} flex flex-wrap md:h-80 md:w-100 overflow-y-auto appearance-none scrollbar-none border rounded-3xl px-6 py-2 text-lg placeholder:text-xl focus:outline-none transition-all duration-300`}></textarea>
                        <div className={`flex gap-8`}>
                            <button onClick={comment.toggleOpenComments} className={`${darkTheme ? `bg-red-800 text-white` : `bg-red-300 text-black`} flex items-center gap-2 py-2 px-4 text-lg rounded-3xl hover:scale-110 cursor-pointer transition-all duration-300`}>Voltar <RiArrowGoBackFill /></button>
                            <button onClick={comment.addMessage} className={`${darkTheme ? `bg-blue-800 text-white` : `bg-blue-300 text-black`} flex items-center gap-2 py-2 px-4 text-lg rounded-3xl hover:scale-110 cursor-pointer transition-all duration-300`}>Enviar Comentário <IoSend /></button>
                        </div>
                        {/* <input type="text" placeholder="Faça seu comentário..." className={`${darkTheme ? `bg-[#484848] border-white text-white` : `bg-[#EFEFEF] border-[#848484]`} flex flex-wrap border rounded-3xl py-2 px-6 text-xl placeholder:text-xl focus:outline-none transition-all duration-300`}/> */}
                    </article>

                    <div className={`${darkTheme ? `border-white` : `border-[#A2A2A2]`} border md:h-100 transition-all duration-300`}></div>

                    <article className={`${darkTheme ? `scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} flex flex-col items-center md:h-100 md:w-fit pr-10 overflow-y-auto scrollbar-thin gap-8 transition-all duration-300`}>

                        {/* Transformar essas divs em cards, criar botão de enviar comentário, adicionar comentário na lista messages e organizar ela com base na data de envio, criar lógica de deletar mensagem */}
                        {[...comment.messageList].reverse().map((message) => (
                            <CommentCard
                            pfp={secondUserPFP}
                            userName={comment.userName}
                            nameInComments={comment.otherUserName}
                            commentDate={comment.date}
                            comment={message}
                            delComment={comment.delMessage}
                            ></CommentCard>
                        ))}
                    </article>
                    
                </article>
            </section> 
    )
}