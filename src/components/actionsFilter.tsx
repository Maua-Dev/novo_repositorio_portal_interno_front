type AFilter = {
    action: string,
    chosen: boolean,
    onChoose: () => void
}

export default function ActionsFilter({action, chosen, onChoose}: AFilter) {
    return(
        <div className="flex justify-between gap-10">
            <p>{action}</p>
            <input type="checkbox" onClick={onChoose} className={`${chosen ? `bg-[#4562B3]` : ``} w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]`}/>
        </div>
    )
}