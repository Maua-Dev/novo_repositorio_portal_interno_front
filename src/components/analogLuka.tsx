import { useContext, useEffect, useState, type ChangeEvent } from "react"
import { ThemeContext } from "../contexts/themeContext"

type Time = {
    hour: number,
    minute: number,
    second: number,
}

export default function AnalogClockLuka() {

    const { darkTheme } = useContext(ThemeContext)
    
    const today = new Date()

    const [now, setNow] = useState<Time>(() => {
        return {
            hour: today.getHours(),
            minute: today.getMinutes(),
            second: today.getSeconds(),
        }
    })

    const startTime = () => {
        let time: string
        if (now.hour >= 12 && now.hour < 24) {
            time = "PM"
        }
        else if (now.hour >= 0 && now.hour < 12) {
            time = "AM"
        }
        return time
    }

    const [AM, setAM] = useState<string>(startTime)
    const togggleAM = () => {
        if (AM == "AM") {
            setAM("PM")
        }
        else {
            setAM("AM")
        }
    }

    useEffect(() => {
        const RealTimeInterval = setInterval(() => {
            const intervalDate = new Date()

            setNow((prev) => ({
                ...prev,
                second: intervalDate.getSeconds(),
            }))
        }, 1000)
        return () => clearInterval(RealTimeInterval)
    }, [])

    //TEM BUG
    const handleHours = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value

        //NÃO TA FUNCIONANDO
        if ((String(now.hour[0])) === "2" && Number(String(now.hour[1])) > 3) {
            value = value.replace(value[1], "")
        }

        if (String(now.hour).length > 1) {
            value = value.replace(value[2], "")
        }
        setNow({hour: Number(value), minute: now.minute, second: now.second})
    }

    //TEM BUG
    const handleMinutes = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value

        if (Number(value[0]) > 5) {
            value = value.replace(value[0], "")
        }

        if (String(now.minute).length > 1) {
            value = value.replace(value[2], "")
        }

        setNow({hour: now.hour, minute: Number(value), second: now.second})
    }

    const AMHours = [
        {hour: 1, angle: 30},
        {hour: 2, angle: 60},
        {hour: 3, angle: 90},
        {hour: 4, angle: 120},
        {hour: 5, angle: 150},
        {hour: 6, angle: 180},
        {hour: 7, angle: 210},
        {hour: 8, angle: 240},
        {hour: 9, angle: 270},
        {hour: 10, angle: 300},
        {hour: 11, angle: 330},
        {hour: 12, angle: 360},
    ]

    const PMHours = [
        {hour: 12, angle: 360},
        {hour: 13, angle: 30},
        {hour: 14, angle: 60},
        {hour: 15, angle: 90},
        {hour: 16, angle: 120},
        {hour: 17, angle: 150},
        {hour: 18, angle: 180},
        {hour: 19, angle: 210},
        {hour: 20, angle: 240},
        {hour: 21, angle: 270},
        {hour: 22, angle: 300},
        {hour: 23, angle: 330},
    ]

    const startHourAngle = (now.hour % 12) * 30 + now.minute * 0.5
    const startMinuteAngle = now.minute * 6

    const [hourAngle, setHourAngle] = useState(startHourAngle)

    function getAngle (e: React.PointerEvent<HTMLDivElement>) {
        const rect = e.currentTarget.parentElement?.getBoundingClientRect()
        if (!rect) {
            return 0
        }

        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const x = e.clientX - centerX
        const y = e.clientY - centerY

        let angle = (Math.atan2(y, x) * (180 / Math.PI)) + 90
        if (angle < 0) {
            angle += 360
        }

        return angle
    }

    function updateHour (e: React.PointerEvent<HTMLDivElement>) {
        const currentAngle = getAngle(e)

        const updatedHour = Math.round(currentAngle / 30) % 12

        setHourAngle(updatedHour * 30)
    }

    const [minuteAngle, setMinuteAngle] = useState(startMinuteAngle)

    function updateMinute (e: React.PointerEvent<HTMLDivElement>) {
        const currentAngle = getAngle(e)

        const updatedMinute = Math.round(currentAngle / 6) % 60

        setMinuteAngle(updatedMinute * 6)
    }

    return (
        <main className="flex flex-col items-center gap-4 py-6 px-10">
            <section className={`flex w-full justify-end text-center`}>
                <button onClick={togggleAM} className={`${AM === "AM" ? `text-amber-400` : `text-indigo-400`} border px-1 rounded-sm hover:cursor-pointer`}>{AM}</button>
            </section>

            <section className={`flex flex-col md:gap-8`}>
                {/* shadow-[0_0_20px_3px_rgba(255,255,255,0.7)] => 0 = desloc em x, 0 = desloc em y, 20px = blur do shadow, 3px = area solida antes do blur, rgba(255,255,255,0.7) = cor do shadow*/}
                <div id={`circle`} className={`${darkTheme ? `shadow-[0_0_20px_3px_rgba(255,255,255,0.7)]` : ``} relative bg-white md:h-65 md:w-65 rounded-full border-6 border-black text-black flex items-center justify-center`}>
                    <div
                    style={{
                        rotate: `${now.second * 6}deg`
                    }} 
                    className={`${darkTheme ? `bg-red-400` : `bg-red-400`} second-hand absolute w-1 h-24 origin-bottom -translate-y-1/2 rounded-full`}></div>
                    
                    <div
                    onPointerDown={updateMinute} 
                    style={{
                        rotate: `${minuteAngle}deg`
                    }}
                    className={`${darkTheme ? `bg-blue-500` : `bg-blue-500`} minute-hand absolute w-1.5 h-20 origin-bottom -translate-y-1/2 rounded-full z-1 hover:cursor-pointer`}></div>
                    
                    <div
                    onPointerDown={updateHour}
                    style={{
                        rotate: `${hourAngle}deg`
                    }}
                    className={`${darkTheme ? `bg-[#333333]` : `bg-[#333333]`} hour-hand absolute w-1.5 h-13 origin-bottom -translate-y-1/2 rounded-full z-2 hover:cursor-pointer`}></div>
                    
                    <div className={`${darkTheme ? `bg-[#333333]` : `bg-[#333333]`} middle-dot absolute w-3 h-3 z-3 rounded-full`}></div>

                    {AMHours.map((AMhour) => (
                        <div key={`number-${AMhour.hour}`} className={`${AM === "AM" ? `opacity-100` : `opacity-0`} pointer-events-none absolute w-full h-full text-center font-bold text-xl rotate-${AMhour.angle} transition-opacity duration-500`}>{AMhour.hour}</div>
                    ))} 
                    {PMHours.map((PMhour) => (
                        <div key={`number-${PMhour.hour}`} className={`${AM === "AM" ? `opacity-0` : `opacity-100`} pointer-events-none absolute w-full h-full text-center font-bold text-xl rotate-${PMhour.angle} transition-opacity duration-500`}>{PMhour.hour}</div>
                    ))}
                    
                </div>

                <article className="flex justify-center items-center">
                    <input type="text" value={String(now.hour).padStart(2, '0')} onChange={handleHours} className={`${darkTheme ? `bg-[#484848] text-white` : `bg-gray-300 text-black`} md:h-16 md:w-16 rounded-lg text-center text-4xl font-bold focus:outline-none`}/>
                    <p className="flex justify-center items-center md:w-10 text-4xl font-bold">:</p>
                    <input type="text" value={String(now.minute).padStart(2, '0')} onChange={handleMinutes} className={`${darkTheme ? `bg-[#484848] text-white` : `bg-gray-300 text-black`} md:h-16 md:w-16 rounded-lg text-center text-4xl font-bold focus:outline-none`}/>
                </article>
            </section>
        </main>
    )
}