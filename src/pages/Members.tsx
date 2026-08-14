import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../contexts/themeContext";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import MemberCardInfo from "../components/memberCardMembers"
import DetailedMemberCard from "../components/DetailedMemberCard";
import alanzoka from '../assets/images/alanzoka.png';
import brksedu from '../assets/images/brksedu.png';
import dino from '../assets/images/dino.png';
import fall from '../assets/images/fall.png';
import calango from '../assets/images/calango.png';
import cap from '../assets/images/cap.png';
import stormfall33 from '../assets/images/stormfall33.png';
import bagi from '../assets/images/bagi.png';
import galaxy from '../assets/images/galaxy.png';
import MembersFilter from "../components/MembersPageFilter";
import CommentSection from "../components/commentSection";

type Member = {
    id: number;
    profilePicture: string;
    name: string;
    ra: string;
    phoneNumber: string,
    discordProfile: string,
    linkedinProfile: string,
    currentProjects: string[],
    previousProjects: string[],
    admissionYear: number,
    collegeDegree: string,
    area: string;
    status: string;
    strike: string,
    memberHours: number,
    chosen: boolean;
};

type Strike = {
    id: number,
    mensagem: string
}

type Comment = {
    userName: string,
    otherUserName: string,
    userPFP: string,
    date: string,
    message: string,
    handleMessage: (message: string) => void,
    addMessage: () => void,
    delMessage: (message: string) => void,
    messageList: string[]
    toggleOpenComments: () => void
}


export default function MembersPage() {

    const { darkTheme } = useContext(ThemeContext);

    const [openDetails, setOpenDetails] = useState(false)
    const toggleOpenDetails = () => {
        setOpenDetails((prev) => (!prev))
    }

    const [openFilter, setOpenFilter] = useState(false)
    const toggleOpenFilter = () => {
        setOpenFilter((prev) => (!prev))
    }

    const [openComments, setOpenComments] = useState(false)
    const toggleOpenComments = () => {
        setOpenComments((prev) => (!prev))
    }

    const images = [
        alanzoka,
        brksedu,
        dino,
        stormfall33,
        bagi,
        galaxy,
        calango,
        cap,
        fall,
    ]

    const [previousAllowStrikeFilter, setPreviousAllowStrikeFilter] = useState(false)
    const [allowStrikeFilter, setAllowStrikeFilter] = useState(false)
    const toggleAllowStrikeFilter = () => {
        setAllowStrikeFilter((prev) => {
            const nextAllowStrikeValue = (!prev)

            if (nextAllowStrikeValue === true && numberOfStrikes === 4) {
                setNumberOfStrikes(0)
            }

            return nextAllowStrikeValue
        })
    }

    const [numberOfStrikes, setNumberOfStrikes] = useState<number>(4)
    const [previousNumberOfStrikes, setPreviousNumberOfStrikes] = useState<number>(numberOfStrikes)
    const toggleNumberOfStrikes = () => {
        if (numberOfStrikes === 0) {
            setNumberOfStrikes(1)
        }
        if (numberOfStrikes === 1) {
            setNumberOfStrikes(2)
        }
        if (numberOfStrikes === 2) {
            setNumberOfStrikes(3)
        }
        if (numberOfStrikes === 3) {
            setNumberOfStrikes(0)
        }
        if (numberOfStrikes === 4) {
            setNumberOfStrikes(0)
        }
    }

    const strikes: Strike[] = [
        {id: 0, mensagem:"Aviso"},
        {id: 1, mensagem:"Horas zeradas"},
        {id: 2, mensagem:"Reunião da diretoria"}
    ]


    // strikes????????????????,
    const members = [
        {id: 0, name: "Luka O Mago", ra: "00.00000-0", phoneNumber: "(11)11111-1111", discordProfile: "perfil discord Luka", linkedinProfile: "perfil linkedin Luka", currentProjects: ["Portal Interno", "Aerodesign"], previousProjects: ["Projeto 101", "Projeto 102"], admissionYear: 2020, collegeDegree: "CURSO 1", area: "Frontend", status: "Ativo", memberHours: 120 , strike: "0", chosen: false },
        {id: 1, name: "Cesar The Goat", ra: "11.11111-1", phoneNumber: "(22)22222-2222", discordProfile: "perfil discord Cesar", linkedinProfile: "perfil linkedin Cesar", currentProjects: ["DevMedias", "Luz"], previousProjects: ["Projeto 103", "Projeto 104"], admissionYear: 2021, collegeDegree: "CURSO 2", area: "UI/UX", status: "Congelado", memberHours: 130 , strike: "1", chosen: false },
        {id: 2, name: "Lucca Rodrigues", ra: "22.22222-2", phoneNumber: "(33)33333-3333", discordProfile: "perfil discord Lucca", linkedinProfile: "perfil linkedin Lucca", currentProjects: ["MauáFood", "Portal Interno"], previousProjects: ["Projeto 105", "Projeto 106"], admissionYear: 2022, collegeDegree: "CURSO 3", area: "Frontend", status: "Desligado", memberHours: 140 , strike: "2", chosen: false },
        {id: 3, name: "Isa Nakai", ra: "33.33333-3", phoneNumber: "(44)44444-4444", discordProfile: "perfil discord Nakai", linkedinProfile: "perfil linkedin Nakai", currentProjects: ["MauáFood", "Portal das Entidades"], previousProjects: ["Projeto 107", "Projeto 108"], admissionYear: 2023, collegeDegree: "CURSO 4", area: "UI/UX", status: "Ativo", memberHours: 150 , strike: "3", chosen: false },
        {id: 4, name: "Giulia Soares", ra: "44.44444-4", phoneNumber: "(55)55555-5555", discordProfile: "perfil discord Giulia", linkedinProfile: "perfil linkedin Giulia", currentProjects: ["Portal Interno", "Portifólio"], previousProjects: ["Projeto 109", "Projeto 110"], admissionYear: 2024, collegeDegree: "CURSO 5", area: "Frontend", status: "Congelado", memberHours: 160 , strike: "0", chosen: false },
        {id: 5, name: "Thiago Tokuji", ra: "55.55555-5", phoneNumber: "(66)66666-6666", discordProfile: "perfil discord Tokuji", linkedinProfile: "perfil linkedin Tokuji", currentProjects: ["Reservation", "Teia Criativa"], previousProjects: ["Projeto 111", "Projeto 112"], admissionYear: 2025, collegeDegree: "CURSO 6", area: "Backend",  status: "Desligado", memberHours: 170 , strike: "1", chosen: false },
        {id: 6, name: "Leo Moreno", ra: "66.66666-6", phoneNumber: "(77)77777-7777", discordProfile: "perfil discord Leo", linkedinProfile: "perfil linkedin Leo", currentProjects: ["Outros", "Aerodesign"], previousProjects: ["Projeto 113", "Projeto 114"], admissionYear: 2026, collegeDegree: "CURSO 7", area: "Backend",  status: "Ativo", memberHours: 180 , strike: "2", chosen: false },
        {id: 7, name: "Mateo", ra: "77.77777-7", phoneNumber: "(88)88888-8888", discordProfile: "perfil discord Mateo", linkedinProfile: "perfil linkedin Mateo", currentProjects: ["DevMedias", "Luz"], previousProjects: ["Projeto 115", "Projeto 116"], admissionYear: 2027, collegeDegree: "CURSO 8", area: "Business",  status: "Congelado", memberHours: 190 , strike: "3", chosen: false },        
        {id: 8, name: "Arthur", ra: "88.88888-8", phoneNumber: "(99)99999-9999", discordProfile: "perfil discord Arthur", linkedinProfile: "perfil linkedin Arthur", currentProjects: ["Portal das Entidades", "Portal Interno"], previousProjects: ["Projeto 117", "Projeto 118"], admissionYear: 2028, collegeDegree: "CURSO 9", area: "Business",  status: "Desligado", memberHours: 200 , strike: "0", chosen: false },
    ];

    const memberList = members.map((member, index) => ({
    id: member.id,
    profilePicture: images[index],
    name: member.name,
    ra: member.ra,
    phoneNumber: member.phoneNumber,
    discordProfile: member.discordProfile,
    linkedinProfile: member.linkedinProfile,
    currentProjects: member.currentProjects,
    previousProjects: member.previousProjects,
    admissionYear: member.admissionYear,
    collegeDegree: member.collegeDegree,
    area: member.area,
    status: member.status,
    strike: member.strike,
    memberHours: member.memberHours,
    chosen: member.chosen
    }))

      //Puxar os membros de uma lista em ordem alfabética (por nome), ao invés de puxar da lista de cima
      //const [orderedMemberList, setOrderedMemberList] = useState([...memberList].sort((a, b) => a.name.localeCompare(b.name, "pt-BR")))

    const [areasList, setAreasFilter] = useState([
    {id: 0, name: "Frontend", previousChosen: false, chosen: false },
    {id: 1, name: "Backend", previousChosen: false, chosen: false },
    {id: 2, name: "UI/UX", previousChosen: false, chosen: false },
    {id: 3, name: "Business", previousChosen: false, chosen: false },
    {id: 4, name: "RH", previousChosen: false, chosen: false }
    ])

    const toggleAreasFilter = (id: number) => {
        setAreasFilter(prev => 
          prev.map(action => 
          action.id === id ? {...action, chosen: !action.chosen} : action)
        )
      }

      const chosenAreasList = areasList.filter((area) => area.previousChosen === true)
    

    const [projects, setProjectsFilter] = useState([
    {id: 0, name: "Aerodesign", previousChosen: false, chosen: false},
    {id: 1, name: "DevMedias", previousChosen: false, chosen: false},
    {id: 2, name: "Luz", previousChosen: false, chosen: false},
    {id: 3, name: "MauáFood", previousChosen: false, chosen: false},
    {id: 4, name: "Portal das Entidades", previousChosen: false, chosen: false},
    {id: 5, name: "Portal Interno", previousChosen: false, chosen: false},
    {id: 6, name: "Portifólio", previousChosen: false, chosen: false},
    {id: 7, name: "Reservation", previousChosen: false, chosen: false},
    {id: 8, name: "Teia Criativa", previousChosen: false, chosen: false},
    {id: 9, name: "Outros", previousChosen: false, chosen: false}
    ])

    const toggleProjectsFilter = (id: number) => {
        setProjectsFilter((prev) => (
            prev.map(project => 
            project.id === id ? {...project, chosen: !project.chosen} : project)
        ))
    }

    const chosenProjectsList = projects.filter((project) => project.previousChosen === true)

    const [active, setActive] = useState(false)
    const toggleActive = () => {
        setFrozen(false)
        setOff(false)
        setActive((prev) => (!prev))
    }

    const [appliedActive, setAppliedActive] = useState(false)
    const toggleAppliedActive = () => {
        if (active) {
            setAppliedActive(true)
        }
        else {
            setAppliedActive(false)
        }
    } 
    const [previousActive, setPreviousActive] = useState<boolean>(active)

    const [frozen, setFrozen] = useState(false)
    const toggleFrozen = () => {
        setActive(false)
        setOff(false)
        setFrozen((prev) => (!prev))
    }

    const [appliedFrozen, setAppliedFrozen] = useState(false)
    const toggleAppliedFrozen = () => {
        if (frozen) {
            setAppliedFrozen(true)
        }
        else {
            setAppliedFrozen(false)
        }
    } 

    const [previousFrozen, setPreviousFrozen] = useState<boolean>(appliedActive)

    const [off, setOff] = useState(false)
    const toggleOff = () => {
        setActive(false)
        setFrozen(false)
        setOff((prev) => (!prev))
    }

    const [appliedOff, setAppliedOff] = useState(false)
    const toggleAppliedOff = () => {
        if (off) {
            setAppliedOff(true)
        }
        else {
            setAppliedOff(false)
        }
    }

    const [previousOff, setPreviousOff] = useState<boolean>(appliedActive)

    //começa em 4 pq??????????????
    const [appliedStrike, setAppliedStrike] = useState<number>(4)

    const [searchByName, setSearchByName] = useState("")
    

    const filterMemberList = (member: Member) => {
        const matchesName =
            member.name.toLocaleLowerCase().includes(searchByName.toLocaleLowerCase())
        
        const hasAreasFilter = chosenAreasList.length > 0

        const hasProjectsFilter = chosenProjectsList.length > 0

        //se algum filtro estiver ativo, hasStatusFilter vai ser true
        const hasStatusFilter =
            appliedActive ||
            appliedFrozen ||
            appliedOff;
    
        //se o membro tiver algum strike, hasStrikeFilter vai ser true
        const hasStrikeFilter = appliedStrike !== 4;

        //Filtra as áreas 
        const matchesAreas = 
            !hasAreasFilter ||
            chosenAreasList.some((area) => area.name === member.area)

        //Filtra os projetos
        const matchesProjects = 
            !hasProjectsFilter ||
            chosenProjectsList.some((project) => member.currentProjects.includes(project.name))
    
        //Filtra o número de strikes
        const matchesStrike =
            !hasStrikeFilter ||
            Number(member.strike) === appliedStrike;
    
        //Filtra o status
        const matchesStatus =
            !hasStatusFilter ||
            (appliedActive && member.status === "Ativo") ||
            (appliedFrozen && member.status === "Congelado") ||
            (appliedOff && member.status === "Desligado");

        return (matchesName && matchesAreas && matchesProjects && matchesStrike && matchesStatus)
        
        
    };

    const [chosenMember, setChosenMember] = useState<Member>()
    const [emptyList, setEmptyList] = useState(memberList.filter((member) => (member.chosen === true)))
    const getDetailedMember = (name: string) => {

        if (emptyList.length === 0){
        memberList
        .filter((member) => (name === member.name))
        .map((member) => (
            member.chosen = true,
            setChosenMember(member),
            setEmptyList([member])
        ))

        toggleOpenDetails()
        }
        else {
            if (emptyList.some((member) => name === member.name)) {
                return
            }
            else {
                emptyList.map((member) => (member.chosen = false))
                setEmptyList([])
    
                memberList
                .filter((member) => (name === member.name))
                .map((member) => (
                    member.chosen = !member.chosen,
                    setChosenMember(member),
                    setEmptyList([member])
                ))
            }
        }
    }


    const [commentMessage, setCommentMessage] = useState<string>("")

    const [messages, setMessages] = useState<string[]>([
        "Impressionante demais essa cena",
        "Olha essa geometria",
        "Meu Deus cara",
        "Como é que isso aqui é jogável?",
        "Olha o nível de detalhe, pelo amor de Deus",
        "Caraca, Kojima o que que cê fez?"
      ]);

    const addMessage = () => {
        if (commentMessage.trim() === "") {
            return
        }
        else {
            setMessages((prevMessages) => (
                [...prevMessages,
                commentMessage]
            ))
            setCommentMessage("")
            
        }
    }
    
    const deleteMessage = (comment: string) => {
        setMessages((prevMessages) => prevMessages.filter((message) => message != comment))
    }

    const comment: Comment = {
        userName: "Luka Santos Monteiro",
        otherUserName: "BRKsEDU",
        userPFP: "/images/joao.jpg",
        date: new Date().toLocaleDateString("pt-BR"),
        message: commentMessage,
        handleMessage: setCommentMessage,
        addMessage: addMessage,
        delMessage: deleteMessage,
        messageList: messages,
        toggleOpenComments: toggleOpenComments
      };
    

    //Os status, quando ativos, ao desativar e apertar cancelar, não voltam o estado do status pro estado certo
    const cancel = () => {

        setAreasFilter(prev => 
            prev.map((action) => 
             action ? {...action, chosen: action.previousChosen} : action)
        )

        setProjectsFilter(prev => 
            prev.map((project) => 
             project ? {...project, chosen: project.previousChosen} : project)
        )

        setAllowStrikeFilter(previousAllowStrikeFilter)
        setNumberOfStrikes(previousNumberOfStrikes)

        setActive(previousActive)
        setFrozen(previousFrozen)
        setOff(previousOff)

        toggleOpenFilter()
    }

    const save = () => {

        setAreasFilter(prev => 
            prev.map((action) => 
             action ? {...action, previousChosen: action.chosen} : action)
        )

        setProjectsFilter(prev => 
            prev.map((project) => 
             project ? {...project, previousChosen: project.chosen} : project)
        )

        setPreviousAllowStrikeFilter(allowStrikeFilter)
        setAppliedStrike(numberOfStrikes)
        if (allowStrikeFilter === false) {
            setAppliedStrike(4)
        }
        else {
            setPreviousNumberOfStrikes(numberOfStrikes)
        }
        

        setPreviousActive(active)
        setPreviousFrozen(frozen)
        setPreviousOff(off)

        toggleAppliedActive()
        toggleAppliedFrozen()
        toggleAppliedOff()


        toggleOpenFilter()
    }

    return(
        <main className={`${darkTheme ? `bg-[url(src/assets/images/backgroundActivitiesPI.png)]` : `bg-[url(src/assets/images/whiteBackground.png)]`} relative bg-cover min-h-screen w-full flex justify-center items-center gap-10 pt-20 pb-20 px-4 md:pl-52 md:pr-10 lg:pr-20`}>
            <div className="flex">
                <Navbar></Navbar>
            </div>

            <section
            className={`fixed inset-0 z-1 bg-black/60 transition-opacity duration-300
                ${openComments || openFilter ? `opacity-100` : `opacity-0 pointer-events-none`}`}
            ></section>

            {openComments ? 
            
            <CommentSection
            comment={comment}
            ></CommentSection>
            : ``}

            {openFilter ? 
            <MembersFilter
                areaList={areasList}
                projectList={projects}
                allowStrike={allowStrikeFilter}
                toggleAllowStrike={toggleAllowStrikeFilter}
                numberOfStrikes={numberOfStrikes}
                toggleStrikes={toggleNumberOfStrikes}
                active={active}
                toggleActive={toggleActive}
                frozen={frozen}
                toggleFrozen={toggleFrozen}
                off={off}
                toggleOff={toggleOff}
                onChooseArea={toggleAreasFilter}
                onChooseProject={toggleProjectsFilter}
                cancelFilter={cancel}
                saveFilter={save}
            >
            </MembersFilter>
            
            : ``}

            <section className={`${darkTheme ? `bg-[#1E1E1E] text-white` : `bg-white text-black drop-shadow-2xl`} ${openDetails? `w-2/3`: `w-3/3`} flex flex-col md:h-180 rounded-2xl gap-4 p-6 transition-all duration-300`}>
                
                {/* placeholder "Buscar membro...." não ta seguindo "transition-all duration-300" */}
                <article className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Membros da Dev Community</h1>
                    <div className={`${darkTheme ? `bg-[#333333]` : `bg-white`} flex items-center rounded-3xl border transition-all duration-300`}>
                        <div className={`flex ${darkTheme ? `border-white` : `border-black`} items-center gap-2 p-2 text-lg rounded-3xl border-r-2 transition-all duration-300`}>
                            <IoMdSearch className={`${darkTheme ? `text-white` : `text-black`} md:text-2xl transition-all duration-300`}></IoMdSearch>
                            <input type="text"
                            placeholder="Buscar membro...."
                            value={searchByName}
                            onChange={(e) => setSearchByName(e.target.value)}
                            className={`${darkTheme ? `placeholder:text-white` : `placeholder:text-black`} focus:outline-none transition-all duration-300`}/>
                        </div>
                        <div onClick={toggleOpenFilter} className={`flex items-center text-xl gap-2 py-2 px-3 hover:cursor-pointer`}>
                            <p className={`${darkTheme ? `text-white` : `text-black`} flex items-center transition-all duration-300`}>Filtros</p>
                            <IoIosArrowForward className={`${openFilter ? `rotate-90` : ``} transition-all duration-300`}></IoIosArrowForward>
                        </div>
                    </div>
                </article>
                
                <article className={`grid ${openDetails? `grid-cols-3`: `grid-cols-4 `} ${darkTheme ? `scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} w-full md:h-150 overflow-y-auto scrollbar-thin gap-4 p-4 transition-all duration-300`}>
                    {memberList.filter(filterMemberList).map((member) => (
                        <MemberCardInfo
                        profilePicture={member.profilePicture}
                        name={member.name}
                        area={member.area}
                        status={member.status}
                        projectsInvolved={member.currentProjects}
                        chosen={member.chosen}
                        strike={member.strike}
                        expandDetails={() => getDetailedMember(member.name)}
                        ></MemberCardInfo>
                    ))}
                </article>

            </section>

            {openDetails ?

            <DetailedMemberCard
            name={chosenMember.name}
            area={chosenMember.area}
            status={chosenMember.status}
            ra={chosenMember.ra}
            admissionYear={chosenMember.admissionYear}
            collegeDegree={chosenMember.collegeDegree}
            profilePicture={chosenMember.profilePicture}
            phoneNumber={chosenMember.phoneNumber}
            discordProfile={chosenMember.discordProfile}
            linkedinProfile={chosenMember.linkedinProfile}
            currentProjects={chosenMember.currentProjects}
            previousProjects={chosenMember.previousProjects}
            memberHours={chosenMember.memberHours}
            strikes={strikes}
            memberStrikes={chosenMember.strike}
            toggleOpenComments={toggleOpenComments}
            ></DetailedMemberCard>

            : ``}

        </main>
    )
}