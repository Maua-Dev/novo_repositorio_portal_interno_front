type PFilter = {
    project: string;
    chosen: boolean;
    onChoose: () => void
}

export default function ProjectsFilter({project, chosen, onChoose}: PFilter) {
    return(
        <div className="flex justify-between gap-10">
            <p>{project}</p>
            <input type="checkbox" onClick={onChoose} className={`${chosen ? `bg-[#4562B3]` : ``} w-4 h-4 z-1 cursor-pointer appearance-none rounded-full border border-[#CAD0CF]`}/>
        </div>
    )
}