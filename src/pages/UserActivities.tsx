import Navbar from "../components/Navbar";


function UserActivities() {
    return(
        <div className="flex w-full">

            <div className="flex">
            <Navbar></Navbar>
            </div>


            <main className="bg-[url(src/assets/images/backgroundActivitiesPI.png)] min-h-screen w-full flex justify-center items-center">
                <article className="bg-white lg: w-300 lg: h-200 rounded-4xl flex">
                    <section className="flex flex-col w-2/3 rounded-4xl gap-5 p-20">

                        <header className="flex flex-col">
                            <h1 className="text-2xl font-bold">Titulo da Atividade</h1>
                            <input type="text" className="bg-gray-200 rounded-3xl"/>
                        </header>

                        <section className="flex gap-5 justify-center">
                            <div>
                                <h2 className="text-xl font-medium">Projeto</h2>
                                <input type="text" className="bg-gray-200 rounded-3xl"/>
                            </div>
                            <div>
                                <h2 className="text-xl font-medium">Área</h2>
                                <input type="text" className="bg-gray-200 rounded-3xl"/>
                            </div>
                            <div>
                                <h2 className="text-xl font-medium">Tempo</h2>
                                <input type="text" className="bg-gray-200 rounded-3xl"/>
                            </div>
                        </section>

                        <section className="flex gap-5 justify-center">
                            <h2 className="text-xl font-medium">Data</h2>
                            <div>
                                <input type="text" className="bg-gray-200 rounded-3xl"/>
                                <h3>De</h3>
                            </div>
                            <div>
                                <input type="text" className="bg-gray-200 rounded-3xl"/>
                                <h3>Até</h3>
                            </div>
                            <button>BOTAO CALCULADORA</button>
                        </section>

                        <section className="flex flex-col gap-3 justify-center items-center">
                            <h2 className="text-xl font-medium">Descrição</h2>
                            <input type="text" className="bg-gray-200 w-full h-40 rounded-3xl"/>
                        </section>

                    </section>

                    <section className="flex flex-col w-1/3 rounded-4xl p-20 gap-10">
                        <div>

                            <div className="flex justify-between">
                                <h2>Membros</h2>
                                <p>ícone +</p>
                            </div>
                            <div className="flex bg-gray-200 lg: h-40 justify-center items-center">ESPAÇO DE MEMBROS</div>
                        </div>

                        <div>

                            <div className="flex justify-between">
                                <h2>Ação</h2>
                                <p>ícone +</p>
                            </div>
                            <div className="flex bg-gray-200 lg: h-40 justify-center items-center">ESPAÇO DE AÇÃO</div>
                        </div>
                        
                        <div className="flex flex-col gap-5 items-center">
                            <button className="bg-[#4562B3] text-white lg: w-40 lg: h-10 rounded-3xl font-medium text-xl hover: cursor-pointer">Salvar</button>
                            <button className="bg-white text-[#FF1100] border border-[#FF1100] lg: w-40 lg: h-10 rounded-3xl font-medium text-xl hover: cursor-pointer">Limpar</button>
                        </div>

                    </section>
                    
                </article>

            </main>
        </div>
    )
}

export default UserActivities;