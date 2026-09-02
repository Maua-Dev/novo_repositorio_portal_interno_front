
import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
import { FaTrashAlt } from "react-icons/fa";

type CommentInfo = {
    id: number,
    pfp: string,
    userName: string,
    nameInComments: string,
    commentDate: string,
    comment: string,
    delComment: (idInList: number) => void
}

export default function CommentCard({id, pfp, userName, nameInComments, commentDate, comment, delComment}: CommentInfo) {

    const { darkTheme } = useContext(ThemeContext)

    return (
        <div id={String(id)} className={`flex gap-6`}>
            <img src={pfp} className={`${darkTheme ? `bg-[#484848]` : `bg-gray-300`} md:w-15 md:h-15 rounded-full transition-all duration-300`}/>
            <div className={`md:w-90 rounded-2xl`}>
                <div className={`${darkTheme ? `bg-[#222222] text-white` : `bg-[#D9D9D9]`} flex justify-between items-center rounded-t-2xl border-t border-l border-r p-2 transition-all duration-300`}>
                    <div className="flex gap-2">
                        <h2 className="font-bold">{nameInComments}</h2>
                        <h2>-</h2>
                        <h2 className="italic">{commentDate}</h2>
                    </div>
                    {/* Apenas diretoria e RH podem fazer e apagar comentários, então não precisa da lógica abaixo. Apenas retirar a lixeira da
                    visão de business e travar e deixar cinza o botão de fazer comentário, assim como travar o textarea da commentSection*/}
                    <FaTrashAlt onClick={userName === nameInComments ? () => delComment(id) : undefined}
                    className={`${darkTheme ? `text-[#B34444]` : `text-red-600`} ${userName === nameInComments ? `hover:cursor-pointer` : `cursor-not-allowed`}`}>
                    </FaTrashAlt>
                </div>
                <p className={`${darkTheme ? `bg-[#484848] text-white` : `bg-[#EFEFEF]`} flex-wrap wrap-break-word rounded-b-2xl border p-2 transition-all duration-300`}>{comment}</p>
            </div>
        </div>
    )
}