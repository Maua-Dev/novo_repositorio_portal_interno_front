import '../App.css'
import { Link } from "react-router";


function Home() {
    return(
        <div className='flex w-full min-h-screen justify-center items-center bg-[url(src/assets/images/backgroundActivitiesPI.png)]'>
            <div className='flex flex-col items-center gap-10'>
                <h1 className='text-white text-5xl font-bold'>HomePage Temporária</h1>
                <div className='flex gap-10'>
                    <div className='bg-red-500 rounded-4xl w-50 h-15 flex justify-center items-center text-white font-bold hover:cursor-pointer'><Link to='/perfil'>Página de Perfil</Link></div>
                    <div className='bg-red-500 rounded-4xl w-50 h-15 flex justify-center items-center text-white font-bold hover:cursor-pointer'><Link to='/adicionar-atividade'>Página de Atividades</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Home;