import { useContext, useState, type ChangeEvent } from "react"
import { ThemeContext } from "../contexts/themeContext"

type Time = {
    hour: number,
    minute: number,
}

export default function AnalogClockLuka() {

    const { darkTheme } = useContext(ThemeContext)

    const [AM, setAM] = useState<string>("AM")
    const togggleAM = () => {
        if (AM == "AM") {
            setAM("PM")
        }
        else {
            setAM("AM")
        }
    }

    const today = new Date()

    const [now, setNow] = useState<Time>(() => {
        return {
            hour: today.getHours(),
            minute: today.getMinutes(),
        }
    })

    //TEM BUG
    const handleHours = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value

        //NÃO TA FUNCIONANDO
        if ((String(now.hour[0])) === "2" && Number(String(now.hour[1])) > 3) {
            value = value.replace(value[1], "")
        }

        if (String(now.hour).length == 2) {
            value = value.replace(value[2], "")
        }
        setNow({hour: Number(value), minute: now.minute})
    }

    //TEM BUG
    const handleMinutes = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value

        if (Number(value[0]) > 5) {
            value = value.replace(value[0], "")
        }

        if (String(now.minute).length == 2) {
            value = value.replace(value[2], "")
        }

        setNow({hour: now.hour, minute: Number(value)})
    }

    return (
        <main className="flex flex-col items-center gap-4 py-6 px-10">
            <section className={`flex w-full justify-end text-center`}>
                <button onClick={togggleAM} className={`${AM === "AM" ? `text-amber-400` : `text-indigo-400`} border px-1 rounded-sm hover:cursor-pointer`}>{AM}</button>
            </section>

            <section className={`flex flex-col md:gap-8`}>
                    
                <div id={`circle`} className={`h-60 w-60 rounded-full border`}>
                    
                </div>

                <article className="flex justify-center items-center">
                    <input type="text" value={now.hour} onChange={handleHours} className={`${darkTheme ? `bg-[#484848] text-white` : `bg-gray-300 text-black`} md:h-16 md:w-16 rounded-lg text-center text-4xl font-bold focus:outline-none`}/>
                    <p className="flex justify-center items-center md:w-10 text-4xl font-bold">:</p>
                    <input type="text" value={now.minute} onChange={handleMinutes} className={`${darkTheme ? `bg-[#484848] text-white` : `bg-gray-300 text-black`} md:h-16 md:w-16 rounded-lg text-center text-4xl font-bold focus:outline-none`}/>
                </article>
            </section>
        </main>
    )
}