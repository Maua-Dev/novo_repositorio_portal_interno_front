import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/themeContext"
import Navbar from "../components/Navbar"
import { FiPlus } from "react-icons/fi";
import ProjectCard from "../components/projectProjects";
import type { ProjectProps } from "../components/projectProjects";
import DetailedProjectCard from "../components/DetailedProjectCard";
import SearchFilter from "../components/SearchFilter";
import AddNewMemberOrProject from "../components/addNewMemberOrProject";

export default function Projects() {

    const { darkTheme } = useContext(ThemeContext)

    const [addProject, setAddProject] = useState(false)
    const [openAddProject, setOpenAddProject] = useState(false)

    const [openDetails, setOpenDetails] = useState(false)

    const projectList: ProjectProps[] = [
        {
            id: 0,
            projectTitle: "Portal das Entidades",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Ativo",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "100 horas"

        },

        {
            id: 1,
            projectTitle: "Portal Interno",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Concluído",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "400 horas"

        },

        {
            id: 2,
            projectTitle: "Teia Criativa",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Congelado",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "50 horas"

        },

        {
            id: 3,
            projectTitle: "Projeto Com Nome Muito Grande Mesmo",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Desativado",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "75 horas"

        },

        {
            id: 4,
            projectTitle: "Portal das Entidades",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Ativo",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "100 horas"

        },

        {
            id: 5,
            projectTitle: "Portal Interno",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Concluído",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "400 horas"

        },

        {
            id: 6,
            projectTitle: "Teia Criativa",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Congelado",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "50 horas"

        },

        {
            id: 7,
            projectTitle: "Projeto Com Nome Muito Grande Mesmo",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Desativado",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "75 horas"

        },

        {
            id: 8,
            projectTitle: "Portal das Entidades",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Ativo",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "100 horas"

        },

        {
            id: 9,
            projectTitle: "Portal Interno",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Concluído",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "400 horas"

        },

        {
            id: 10,
            projectTitle: "Teia Criativa",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Congelado",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "50 horas"

        },

        {
            id: 11,
            projectTitle: "Projeto Com Nome Muito Grande Mesmo",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Desativado",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "75 horas"

        },

        {
            id: 12,
            projectTitle: "Portal das Entidades",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Ativo",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "100 horas"

        },

        {
            id: 13,
            projectTitle: "Portal Interno",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Concluído",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "400 horas"

        },

        {
            id: 14,
            projectTitle: "Teia Criativa",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Congelado",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "50 horas"

        },

        {
            id: 15,
            projectTitle: "Projeto Com Nome Muito Grande Mesmo",
            projectDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            projectStatus: "Desativado",
            projectCreationDate: new Date().toLocaleDateString('pt-BR'),
            projectTotalHours: "75 horas"

        },

        
    ]

    const [searchByName, setSearchByName] = useState<string>("")

    const filteredList = (project: ProjectProps) => {
        const matchesName =
            project.projectTitle.toLocaleLowerCase().includes(searchByName.toLocaleLowerCase())

        return matchesName
    }

    //ajeitar a borda inferior, em cima ta rounded embaixo ta quadradao
    return (
        <main className={`${darkTheme ? `bg-[url(src/assets/images/backgroundActivitiesPI.png)]` : `bg-[url(src/assets/images/whiteBackground.png)]`} relative bg-cover min-h-screen w-full flex justify-center items-center gap-10 pt-20 pb-20 px-4 md:pl-52 md:pr-10 lg:pr-20`}>
            <section className="flex">
                <Navbar></Navbar>
            </section>

            <section
            onClick={() => setOpenAddProject(false)}
            className={`fixed inset-0 z-1 bg-black/60 transition-opacity duration-300
                ${openAddProject ? `opacity-100` : `opacity-0 pointer-events-none`}`}
            ></section>

            {openAddProject ? 
            <AddNewMemberOrProject 
            id={"project"}
            close={() => setOpenAddProject(false)}
            titulo1={"Título do Projeto:"}
            placeholder1={"Digite o título do projeto"}
            titulo2={"Descrição:"}
            placeholder2={"Faça uma breve descrição do projeto"}
            titulo3={"Contato do P.O:"}
            placeholder3={"Digite o contato do P.O."}
            titulo4={"Imagem do projeto:"}
            buttonText={"Registrar novo projeto"}
            />
            : ``}

            <section className="flex flex-col md:flex-row md:gap-12 w-full">
                

                <article className={`${darkTheme ? `bg-[#1E1E1E] text-white` : `bg-white text-black drop-shadow-2xl`} ${openDetails? `w-2/3`: `w-3/3`} flex flex-col md:h-180 rounded-4xl drop-shadow-2xl transition-all duration-300`}>
                    
                    <div className="flex justify-between items-center py-4 px-8 border-b border-slate-500">
                        <div className="flex gap-12">
                            <h1 className="text-4xl font-semibold">Projetos</h1>
                            <SearchFilter 
                            searchByName={searchByName}
                            setSearchByName={setSearchByName}
                            />
                        </div>
                        <button onClick={() => setOpenAddProject(true)} onMouseEnter={() => setAddProject(true)} onMouseLeave={() => setAddProject(false)} className={`${darkTheme ? `bg-[#5C76DD]` : `bg-[#5C76BC]`} flex justify-center items-center text-white h-fit px-3 py-1 text-xl rounded-full hover:cursor-pointer hover:scale-110 transition-transform duration-300`}>
                            <FiPlus className={`${addProject ? `rotate-180` : `rotate-0`} flex transition-transform duration-300`}/>
                        </button>
                    </div>

                    <div className="flex flex-col h-[90%] md:pb-10">
                        <div className="flex flex-col w-full overflow-y-auto scrollbar-none">
                            {projectList.filter(filteredList).map((project) => (
                                <div onClick={() => setOpenDetails(true)}>
                                    <ProjectCard
                                    id={project.id}
                                    projectTitle={project.projectTitle}
                                    projectDescription={project.projectDescription}
                                    projectStatus={project.projectStatus}
                                    projectCreationDate={project.projectCreationDate}
                                    projectTotalHours={project.projectTotalHours}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </article>

                {openDetails ? 
                
                <DetailedProjectCard 
                closeCard={setOpenDetails}
                />
                
                : ``}

            </section>
        </main>
    )
}