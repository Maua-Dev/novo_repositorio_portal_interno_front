import { ThemeContext } from "../contexts/themeContext";
import '../App.css'
import { Link } from "react-router";
import { useContext } from 'react';


function Home() {
    const { darkTheme } = useContext(ThemeContext);

    return(
        <main className={`${darkTheme ? `bg-[url(src/assets/images/desktopLoginDarkPI.png)]` : `bg-[url(src/assets/images/desktopLoginLightPI.png)]`} bg-cover flex w-full min-h-screen justify-center items-center`}>
            <article className={`${darkTheme ? `from-[#1A1A1A]/90 to-[#4C0F0F]/90` : `from-[#F8F8F8]/90 to-[#BCCCFA]/90`} flex flex-col bg-linear-to-r h-150 w-200 rounded-3xl justify-center drop-shadow-2xl gap-20 p-10`}>
                <section className='flex flex-col gap-10'>
                {darkTheme ? <img src={`/src/assets/images/logo_dev_white.png`} alt="Logo DEV" className="h-30 w-35 transition-all duration-300"/> : <img src={`/src/assets/images/logo_dev.png`} alt="Logo DEV" className="h-30 w-35 transition-all duration-300"/>}
                    <div className={`${darkTheme ? `bg-[#515151]` : `bg-[#E0E0E0]`} flex bg-[#515151] rounded-lg`}>
                        <h1 className={`${darkTheme ? `bg-[#515151] text-white` : `bg-[#E0E0E0] text-black`} flex p-2 px-4 text-lg rounded-lg`}>Email:</h1>
                        <input type="text"
                        placeholder="Digite seu email"
                        className={`${darkTheme ? `text-white placeholder:text-white bg-[#424242]` : `text-black placeholder:text-black bg-[#D0D0D0]`} w-full rounded-lg focus:outline-none px-5`}/>
                    </div>
                </section>

                <section className='flex flex-col gap-3'>
                    <button className={`${darkTheme ? `bg-[#4562B3]` : `bg-[#F24822]`} text-white w-50 h-12 rounded-xl border-2 border-white items-center text-lg cursor-pointer`}><Link to='/perfil'>Login</Link></button>
                    <p className={`${darkTheme ? `text-white hover:text-blue-300` : `text-black hover:text-blue-600`} w-fit underline text-sm cursor-pointer`}>Não tem conta? Crie uma aqui!</p>
                </section>
            </article>
        </main>
    )
}

export default Home;