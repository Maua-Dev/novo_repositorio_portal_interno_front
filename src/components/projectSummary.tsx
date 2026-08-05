type ProjectSummary = {
    project: string,
    hours: number
    totalHours: number
}

export default function ProjectSummary({project, hours, totalHours}: ProjectSummary) {
    const percentage = (hours/totalHours)*100
   
    return(
        <div className="flex flex-col p-3 gap-3">
            <div className={`flex justify-between text-xl transition-all duration-300`}>
                <h3>{project}</h3>
                <h3>{hours}H</h3>
            </div>

            <div className="w-full h-5 rounded-2xl bg-[#D9D9D9]">
                <div  style={{ width: `${percentage}%` }} className={`h-5 rounded-2xl bg-blue-500`}></div>
            </div>
        </div>
    )
}