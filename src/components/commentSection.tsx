import { useContext, useState } from "react"
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoSend } from "react-icons/io5";
import { ThemeContext } from "../contexts/themeContext";
import CommentCard from "./commentCard";

type Commentary = {
    id: number;
    writerpfp: string;
    writer: string;
    date: string;
    writerComment: string;
};

type Comment = {
    // userName: string,
    // otherUserName: string,
    // userPFP: string,
    // date: string,
    // message: string,
    // handleMessage: (message: string) => void,
    // addMessage: () => void,
    // delMessage: (message: string) => void,
    // messageList: commentaryList[],
    // toggleOpenComments: () => void

    userpfp: string,
    userName: string,
    commentList: Commentary[],
    setCommentList: React.Dispatch<React.SetStateAction<Commentary[]>>, ///////////////////////////////////////////////////////////////////////
    toggleOpenComments: () => void,
}

// type CommentProps = {
//     comment: Comment
// }



export default function CommentSection({userpfp, userName, commentList, setCommentList, toggleOpenComments}: Comment) {
    
    const { darkTheme } = useContext(ThemeContext)

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

    const [comment, setComment] = useState<string>("")

    // const addComment = (comment: Commentary) => {
    //     commentList(prev => [...prev, comment]);
    // };
    
    const deleteComment = (id: number) => {
        setCommentList(prevComments => 
            prevComments.filter((comment) => (comment.id !== id)))
    }

    const addNewComment = (text: string) => {
        if (text.trim() === "") {
            return
        }
    
        setCommentList(prevComments => [
            ...prevComments,
            {
                id: Date.now(),////////////////////////////////////////////////////////////////////////////////
                date: new Date().toLocaleDateString("pt-BR"),
                writer: userName,
                writerComment: text,
                writerpfp: userpfp
            }
        ])
    
        setComment("")
    }
    
    
    

    return (
        <section className={`${darkTheme ? `bg-[#1E1E1E]` : `bg-white`} absolute flex flex-col items-center justify-center z-2 md:w-280 md:h-150 md:rounded-tl-[200px] md:rounded-tr-4xl md:rounded-br-[200px] md:rounded-bl-4xl overflow-hidden drop-shadow-2xl transition-all duration-300`}>
                
                <article className="flex justify-center items-center gap-8">
                    <article className="flex flex-col justify-center items-center gap-6 md:h-100">
                        <div className={`flex w-full gap-6 items-center justify-start md:pl-4`}>
                            <img id={userpfp} src={userpfp} className={`flex md:w-17 md:h-17 rounded-full transition-all duration-300`}></img>
                            <h2 className={`${darkTheme ? `text-white` : `text-black`} text-2xl transition-all duration-300`}>{userName}</h2>
                        </div>
                        <textarea value={comment} maxLength={250} onChange={(e) => {setComment(e.target.value)}} className={`${darkTheme ? `bg-[#484848] border-white text-white` : `bg-[#EFEFEF] border-[#848484]`} flex flex-wrap md:h-80 md:w-100 overflow-y-auto appearance-none scrollbar-none border rounded-3xl px-6 py-2 text-lg placeholder:text-xl focus:outline-none transition-all duration-300`}></textarea>
                        <div className={`flex gap-8`}>
                            <button onClick={() => {setComment(""); toggleOpenComments();}} className={`${darkTheme ? `bg-red-800 text-white` : `bg-red-300 text-black`} flex items-center gap-2 py-2 px-4 text-lg rounded-3xl hover:scale-110 cursor-pointer transition-all duration-300`}>Voltar <RiArrowGoBackFill /></button>
                            <button onClick={() => addNewComment(comment)} className={`${darkTheme ? `bg-blue-800 text-white` : `bg-blue-300 text-black`} flex items-center gap-2 py-2 px-4 text-lg rounded-3xl hover:scale-110 cursor-pointer transition-all duration-300`}>Enviar Comentário <IoSend /></button>
                        </div>
                        {/* <input type="text" placeholder="Faça seu comentário..." className={`${darkTheme ? `bg-[#484848] border-white text-white` : `bg-[#EFEFEF] border-[#848484]`} flex flex-wrap border rounded-3xl py-2 px-6 text-xl placeholder:text-xl focus:outline-none transition-all duration-300`}/> */}
                    </article>

                    <div className={`${darkTheme ? `border-white` : `border-[#A2A2A2]`} border md:h-100 transition-all duration-300`}></div>

                    <article className={`${darkTheme ? `scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} flex flex-col items-center md:h-100 md:w-fit pr-10 overflow-y-auto scrollbar-thin gap-8 transition-all duration-300`}>

                        {[...commentList].reverse().map((commentary) => (
                            <CommentCard
                            id={commentary.id}
                            pfp={commentary.writerpfp}
                            userName={userName}
                            nameInComments={commentary.writer}
                            commentDate={commentary.date}
                            comment={commentary.writerComment}
                            delComment={deleteComment}
                            ></CommentCard>
                        ))}
                    </article>
                    
                </article>
            </section> 
    )
}