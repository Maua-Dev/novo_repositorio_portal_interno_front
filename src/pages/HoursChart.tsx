import Navbar from "../components/Navbar"

export default function HoursChart() {
    return(
        <div className='flex w-full min-h-screen justify-center items-center bg-[url(src/assets/images/backgroundActivitiesPI.png)]'>
            <Navbar></Navbar>
            <div className='flex flex-col items-center gap-10'>
                <h1 className='text-white text-5xl font-bold'>Página do Gráfico de Horas do Admin</h1>
            </div>
        </div>
    )
}