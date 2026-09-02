import Navbar from "../components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import MemberCard from "../components/memberCardActivities";
import ActionCard from "../components/actionCard";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";
import MembersArea from "../components/memberArea";
import ActionArea from "../components/actionsArea";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { FaCalendarAlt } from "react-icons/fa";
import AnalogClock from "../components/analogClock";
import AnalogClockLuka from "../components/analogLuka";

function UserActivities() {
  const { darkTheme } = useContext(ThemeContext);

  const [openMembersArea, setOpenMembersArea] = useState(false);
  const toggleMembersArea = () => {
    setOpenMembersArea((prev) => !prev);
  };

  const [openActionsArea, setOpenActionsArea] = useState(false);
  const toggleActionsArea = () => {
    setOpenActionsArea((prev) => !prev);
  };

  const [title, setTitle] = useState<string>("");

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const clearTitle = () => {
    setTitle("");
  };

  const [projOpen, setProjOpen] = useState(false)
  const toggleProjOpen = () => {
    setProjOpen((prev) => !prev)
  }

  const [project, setProject] = useState<string>("");

  //Ver um jeito de puxar os projetos que existem no filtro do HoursChart ao invés de usar a "const projetos"?
  const projetos: string[] = ["Reservation", "Portal Interno", "Luz", "Portal das Entidades", "DevMedias"]
  function mapProjetos() {
    return projetos.map((projeto, index) => (
        <h2 key={index} onMouseEnter={() => setProject(projeto)} onMouseLeave={() => setProject("")} onClick={() => handleProjectChosen(projeto)} className={`${darkTheme ? `hover:bg-blue-900` : `hover:bg-blue-300`} px-2 py-2 rounded-xl cursor-pointer transition-all duration-200`}>{projeto}</h2>
    ))
  }

  const handleProjectChosen = (chosenProject: string) => {
    setProject(chosenProject)
    setProjOpen(false)
  }

  const handleProject = (e: ChangeEvent<HTMLInputElement>) => {
    setProject(e.target.value);
  };

  const clearProject = () => {
    setProject("");
  };

  const [areaOpen, setAreaOpen] = useState(false)
  const toggleAreaOpen = () => {
    setAreaOpen((prev) => ! prev)
  }

  //Ver um jeito de puxar as áreas que existem no filtro do HoursChart ao invés de usar a "const areas"?
  const areas: string[] = ["Front-end", "Back-end", "UI/UX", "Business", "RH"]
  function mapAreas() {
    return areas.map((area, index) => (
        <h2 key={index} onMouseEnter={() => setArea(area)} onMouseLeave={() => setArea("")} onClick={() => handleAreaChosen(area)} className={`${darkTheme ? `hover:bg-blue-900` : `hover:bg-blue-300`} px-2 py-2 rounded-xl cursor-pointer transition-all duration-200`}>{area}</h2>
    ))
  }

  const [area, setArea] = useState<string>("");

  const handleAreaChosen = (chosenArea: string) => {
    setArea(chosenArea)
    setAreaOpen(false)
  }

  const handleArea = (e: ChangeEvent<HTMLInputElement>) => {
    setArea(e.target.value);
  };

  const clearArea = () => {
    setArea("");
  };

  const [time, setTime] = useState<string>("");

  const handleTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const clearTime = () => {
    setTime("");
  };

  const [from, setFrom] = useState<string>("");

  const handleFrom = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (Number(value.slice(0,1)) > 3) {
      value = value.replace(value[0], "")
    }

    if ((Number(value.slice(0,1)) === 0) && (Number(value.slice(1,2)) === 0)) {
      value = value.replace(value[1], "")
    }

    if ((Number(value.slice(0,1)) === 3) && (Number(value.slice(1,2)) > 1)) {
      value = value.replace(value[1], "")
    }

    if (value.length > 2) {
      if (!value.includes("/")) {
        value = value.slice(0,2) + "/" + value.slice(2)
      }
    }

    if (Number(value.slice(3,4)) > 1) {
      value = value.replace(value[3], "")
    }

    if ((Number(value.slice(3,4)) === 0) && (Number(value.slice(4,5)) === 0)) {
      value = value.replace(value[4], "")
    }

    if ((Number(value.slice(3,4)) === 1) && (Number(value.slice(4,5)) > 2)) {
      value = value.replace(value[4], "")
    }

    if (value.length > 5) {
      if (value[5] != "/") {
        value = value.slice(0,5) + "/" + value.slice(5)
      }
    }

    //TESTAR MAIS, TÁ ESTRANHO COM 01/00 
    //NÃO ESQUECER DO ANO BISSEXTO E FEVEREIRO
    value = value.slice(0, 10)

    setFrom(value);
  };

  const clearFrom = () => {
    setFrom("");
  };

  const [fromOpen, setFromOpen] = useState(false)
  const toggleFromOpen = () => {
    setFromOpen((prev) => (!prev))
  }

  const [to, setTo] = useState<string>("");

  const handleTo = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (Number(value.slice(0,1)) > 3) {
      value = value.replace(value[0], "")
    }

    if ((Number(value.slice(0,1)) === 0) && (Number(value.slice(1,2)) === 0)) {
      value = value.replace(value[1], "")
    }

    if ((Number(value.slice(0,1)) === 3) && (Number(value.slice(1,2)) > 1)) {
      value = value.replace(value[1], "")
    }

    if (value.length > 2) {
      if (!value.includes("/")) {
        value = value.slice(0,2) + "/" + value.slice(2)
      }
    }

    if (Number(value.slice(3,4)) > 1) {
      value = value.replace(value[3], "")
    }

    if ((Number(value.slice(3,4)) === 0) && (Number(value.slice(4,5)) === 0)) {
      value = value.replace(value[4], "")
    }

    if ((Number(value.slice(3,4)) === 1) && (Number(value.slice(4,5)) > 2)) {
      value = value.replace(value[4], "")
    }

    if (value.length > 5) {
      if (value[5] != "/") {
        value = value.slice(0,5) + "/" + value.slice(5)
      }
    }

    //TESTAR MAIS, TÁ ESTRANHO
    //NÃO ESQUECER DO ANO BISSEXTO E FEVEREIRO
    value = value.slice(0, 10)

    setTo(value);
  };

  const clearTo = () => {
    setTo("");
  };

  const [toOpen, setToOpen] = useState(false)
  const toggleToOpen = () => {
    setToOpen((prev) => (!prev))
  }

  const [calc, setCalc] = useState(false);
  const toggleCalc = () => {
    setCalc((prev) => (!prev));
  };

  //FAZER LÓGICA PRA IMPEDIR QUE O USUÁRIO NÃO COLOQUE OUTRA COISA SEM SER NÚMERO AQUI!
  function calcTime(time: string) {
    const value = Number(time)
    if (time.trim() === "" || isNaN(value)) {
      return ""
    }
    else {
      return (value / 60).toFixed(2);
    }
  }

  const [about, setAbout] = useState<string>("");

  const handleAbout = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAbout(e.target.value);
  };

  const clearAbout = () => {
    setAbout("");
  };

  //Lista para simular os membros do backend
  const memberList = [
    {id: 0, name: "Luka O Mago", ra: "00.00000-0", chosen: false },
    {id: 1, name: "Cesar The Goat", ra: "11.11111-1", chosen: false },
    {id: 2, name: "Lucca Rodrigues", ra: "22.22222-2", chosen: false },
    {id: 3, name: "Isa Nakai", ra: "33.33333-3", chosen: false },
    {id: 4, name: "Giulia Soares", ra: "44.44444-4", chosen: false },
    {id: 5, name: "Thiago Tokuji", ra: "55.55555-5", chosen: false },
    {id: 6, name: "Eu", ra: "55.55555-5", chosen: false },
    {id: 7, name: "Estou", ra: "55.55555-5", chosen: false },
    {id: 8, name: "Ficando", ra: "55.55555-5", chosen: false },
    {id: 9, name: "Louco", ra: "55.55555-5", chosen: false },
    {id: 10, name: "Com", ra: "55.55555-5", chosen: false },
    {id: 11, name: "Essa", ra: "55.55555-5", chosen: false },
    {id: 12, name: "Bagaça", ra: "55.55555-5", chosen: false }
  ];

  //Ordenando a lista de membros do backend para display em "membersArea"
  const [orderedMemberList, setOrderedMemberList] = useState([...memberList].sort((a, b) => a.name.localeCompare(b.name, "pt-BR")))

  const toggleMemberChosen = (index: number) => {
    setOrderedMemberList(prev =>
        prev.map((member, i) =>
            i === index 
              ? {...member, chosen: !member.chosen}
              : member)
    )
  }

  const [chosenMembers, setChosenMembers] = useState<
  { id: number; name: string; ra: string; chosen: boolean }[]
  >([])

  const saveMember = () => {
    const selectedMembers = orderedMemberList.filter(m => m.chosen)
    setChosenMembers(selectedMembers);

    toggleMembersArea()
  }

  const removeMember = (index: number) => {
    setChosenMembers((prev) => prev.filter((member) => member.id !== index))
    setOrderedMemberList((prev) => prev.map((member) => member.id === index ? {...member, chosen: false} : member))
  };

  //Lista para simular as ações do backend
  const devActions = [
    {id: 0, action: "Frontend", chosen: false },
    {id: 1, action: "Backend", chosen: false },
    {id: 2, action: "UI/UX", chosen: false },
    {id: 3, action: "Business", chosen: false },
    {id: 4, action: "RH", chosen: false },
    {id: 5, action: "Infra", chosen: false },
    {id: 6, action: "Áreas Internas", chosen: false }
  ];

  //Ordenando a lista de ações do backend para display em "actionsArea"
  const [orderedActionList, setOrderedActionList] = useState([...devActions].sort((a, b) => a.action.localeCompare(b.action, "pt-BR")))
  
  const toggleActionChosen = (index: number) => {
    setOrderedActionList(prev =>
        prev.map((area, i) =>
            i === index
              ? { ...area, chosen: !area.chosen }
              : area
        )
    );
  }

  const [chosenActions, setChosenActions] = useState<
  { id: number; action: string; chosen: boolean }[]
  >([])
  
  const saveAction = () => {
    const selectedActions = orderedActionList.filter(a => a.chosen)
    setChosenActions(selectedActions);

    toggleActionsArea()
  }

  const removeAction = (index: number) => {
    setChosenActions((prev) => prev.filter((action) => action.id !== index))
    setOrderedActionList((prev) => prev.map((action) => action.id === index ? {...action, chosen: false} : action))
  }

  const clearMember = () => {
    setChosenMembers([])

    setOrderedMemberList((prev) => prev.map((member) => ({...member, chosen: false})))
  }

  const clearAction = () => {
    setChosenActions([])

    setOrderedActionList((prev) => prev.map((action) => ({...action, chosen: false})))
  }

  const clearAll = () => {
    clearAbout()
    clearArea()
    clearFrom()
    clearTo()
    clearProject() 
    clearTime() 
    if (calc){
      toggleCalc()
    }
    clearTitle()
    clearMember()
    clearAction()
    resetPlaceholders()
  }

  const [notTitle, setNotTitle] = useState<string>("");
  const handleTitleError = () => {
    if (title === "") {
      setNotTitle("Digite o título da sua atividade")
      return false
    }
    //fazer else if (só tiver números ou caracteres especiais) {setNotTitle("Digite um título válido")}
    else {
      return true
    }
  }

  const [notProject, setNotProject] = useState<string>("")
  const handleProjectError = () => {
    if (project === "") {
      setNotProject("Escolha um projeto")
      return false
    }
    else if (!projetos.includes(project)) {
      setProject("")
      setNotProject("Escolha um projeto válido")
      return false
    }
    else {
      return true
    }
  }

  const [notArea, setNotArea] =  useState<string>("")
  const handleAreaError = () => {
    if (area === "") {
      setNotArea("Escolha uma área")
      return false
    }
    else if (!areas.includes(area)) {
      setArea("")
      setNotArea("Escolha uma área válida")
      return false
    }
    else {
      return true
    }
  }

  const [notFrom, setNotFrom] = useState<string>("")
  const handleFromError = () => {
    if (from === "") {
      setNotFrom("Escolha uma data")
      return false
    }
    else {
      return true
    }
  }

  
  const [timeFrom, setTimeFrom] = useState<string>("")
  const handleTimeFrom = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    if (Number(value.slice(0,1)) > 2) {
      value = value.replace(value[0], "")
    }

    if ((Number(value.slice(0,1)) === 2) && (Number(value.slice(1,2)) > 3)) {
      value = value.replace(value[1], "")
    }

    if (value.length > 2) {
      if (!value.includes(":")) {
        value = value.slice(0,2) + ":" + value.slice(2)
      }
    }

    if (Number(value.slice(3,4)) > 5) {
      value = value.replace(value[3], "")
    }

    value = value.slice(0,5)

    setTimeFrom(value)
  }

  const [notTimeFrom, setNotTimeFrom] = useState<string>("")
  const handleTimeFromError = () => {
    if (notTimeFrom === "") {
      setNotTimeFrom("Horário Inválido")
      return false
    }
    else {
      return true
    }
  }

  const [notTo, setNotTo] = useState<string>("")
  const handleToError = () => {
    if (to === "") {
      setNotTo("Escolha uma data")
      return false
    }
    else {
      return true
    }
  }

  const [timeTo, setTimeTo] = useState<string>("")
  const handleTimeTo = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    if (Number(value.slice(0,1)) > 2) {
      value = value.replace(value[0], "")
    }

    if ((Number(value.slice(0,1)) === 2) && (Number(value.slice(1,2)) > 3)) {
      value = value.replace(value[1], "")
    }

    if (value.length > 2) {
      if (!value.includes(":")) {
        value = value.slice(0,2) + ":" + value.slice(2)
      }
    }

    if (Number(value.slice(3,4)) > 5) {
      value = value.replace(value[3], "")
    }

    value = value.slice(0,5)

    setTimeTo(value)
  }

  const [notTimeTo, setNotTimeTo] = useState<string>("")
  const handleTimeToError = () => {
    if (to === "") {
      setNotTimeTo("Escolha uma data")
      return false
    }
    else {
      return true
    }
  }

  const [notTime, setNotTime] = useState<string>("")
  const handleTimeError = () => {
      const result = calcTime(time);

      if (result === "") {
        toggleCalc()
        setNotTime("Tempo inválido")
        setTime("")
        return false
      }
      return true
  }

  const [notAbout, setNotAbout] = useState<string>("")
  const handleAboutError = () => {
    if (about === "") {
      setNotAbout("Descreva a sua atividade")
      return false
    }
    else {
      return true
    }
  }

  const [emptyChosenActionList, setEmptyChosenActionList] = useState(false)
  const handleEmptyActionList = () => {
    if (chosenActions.length === 0) {
      setEmptyChosenActionList(true)
      return false
    }
    else {
      return true
    }
  }

  const resetPlaceholders = () => {
    setNotTitle("")
    setNotProject("")
    setNotArea("")
    setNotFrom("")
    setNotTimeFrom("")
    setNotTimeTo("")
    setNotTo("")
    setNotTime("")
    setNotAbout("")
    setEmptyChosenActionList(false)
  }
  //verificação no instante do envio
  const saveAll = () => {

    const titleValid = handleTitleError()
    const projectValid = handleProjectError()
    const areaValid = handleAreaError() 
    const fromValid = handleFromError()
    const timeFromValid = handleTimeFromError()
    const toValid = handleToError()
    const timeToValid = handleTimeToError()
    const timeValid = handleTimeError() 
    const aboutValid = handleAboutError()
    const actionValid = handleEmptyActionList()

    if (
      titleValid &&
      projectValid && 
      areaValid && 
      fromValid &&
      timeFromValid &&
      toValid &&
      timeToValid &&
      timeValid && 
      aboutValid &&
      actionValid
    ) {
      setTitle("TODAS AS VALIDAÇÕES FORAM FEITAS E A ATIVIDADE ESTÁ VÁLIDA PARA ENVIO.")
      setTimeout(() => {clearAll()}, 5000)
      setTimeout(() => {resetPlaceholders()}, 5000)
    }
  }

  //Lembrar de transformar "dd/MM/yyyy" em "dd-MM-yyyy" na hora de enviar para a API, se precisar!
  const [selectedDate, setSelectedDate] = useState<Date>();
  const setDate = () => {
    const formattedDate = selectedDate
    ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR }) : "";

    if (fromOpen) {
      setFrom(formattedDate)
    }
    else if (toOpen) {
      setTo(formattedDate)
    }
  }
  const closeDate = () => {
    if (fromOpen) {
      toggleFromOpen()
    }
    else if (toOpen) {
      toggleToOpen()
    }
  }

  //Não ta funcionando para fromOpen e toOpen
  const closeAll = () => {
    setOpenMembersArea(false)
    setOpenActionsArea(false)
    setFromOpen(false)
    setToOpen(false)
  }

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center w-full">
      <div className="flex">
        <Navbar></Navbar>
      </div>

      <article
        onClick={closeAll}
        className={`${openMembersArea || openActionsArea || fromOpen || toOpen ? `absolute z-1 bg-black/60 w-full min-h-screen` : ``} transition-all duration-300`}
      ></article>

      {openMembersArea ? <MembersArea 
      list={orderedMemberList}
      toggleChosen={toggleMemberChosen} 
      toggleOpen={toggleMembersArea}
      save={saveMember}
      /> : ``}

      {openActionsArea ? <ActionArea
      list={orderedActionList}
      toggleChosen={toggleActionChosen}
      toggleOpen={toggleActionsArea}
      save={saveAction} /> : ``}

      {(fromOpen || toOpen) ? (
              <div className={`absolute z-2 inset-0 flex items-center justify-center gap-10`}>
                <div className={`${darkTheme ? `bg-[#111111] text-white` : `bg-white`} flex flex-col gap-4 rounded-2xl p-8 text-xl drop-shadow-2xl transition-all duration-300`}>
                  <DayPicker
                    locale={ptBR}
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    classNames={{
                      day_button: "h-10 w-10 hover:cursor-pointer",
                      selected: "border border-[#4562B3] font-bold",
                      today: "text-blue-600 font-bold",
                      chevron: "fill-blue-600"
                    }}
                  
                  />

                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => closeDate()}
                      className={`${darkTheme ? `bg-[#FF2E17] text-white border border-[#FF2E17]` : `bg-white border border-[#FF1100] text-[#FF1100]`} rounded-xl  px-4 py-2 cursor-pointer transition-all duration-300`}
                    >
                      Cancelar
                    </button>

                    <button
                      onClick={() => {
                        console.log(selectedDate)
                        setDate()
                        closeDate()
                      }}
                      className="rounded-xl bg-[#4562B3] px-4 py-2 text-white cursor-pointer"
                    >
                      Confirmar
                    </button>
                  </div>
                </div>

                <div className={`${darkTheme ? `bg-[#111111] text-white` : `bg-white text-black`} rounded-2xl transition-all duration-300`}>
                  <AnalogClock></AnalogClock>
                </div>

                <div className={`${darkTheme ? `bg-[#111111] text-white` : `bg-white text-black`} rounded-2xl transition-all duration-300`}>
                  <AnalogClockLuka></AnalogClockLuka>
                </div>
              </div>
            ) : ``}
      
      <main
        className={`${darkTheme ? `bg-[url(src/assets/images/backgroundActivitiesPI.png)]` : `bg-[url(src/assets/images/whiteBackground.png)]`} bg-cover min-h-screen w-full flex justify-center items-center pt-20 pb-20 px-4 md:pl-52 md:pr-10 lg:pr-20`}
      >
        <article
          className={`${darkTheme ? `bg-[#1E1E1E] text-white ` : `bg-white text-black drop-shadow-2xl`} w-full max-w-350 rounded-4xl flex flex-col lg:flex-row transition-all duration-300`}
        >
          <section className="flex flex-col w-full lg:w-2/3 rounded-4xl gap-5 p-6 md:p-10 lg:p-15">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-2xl">Título da Atividade</h1>

              <input
                type="text"
                value={title}
                maxLength={50}
                onChange={handleTitle}
                placeholder={notTitle}
                className={`${darkTheme ? `bg-[#484848] text-white` : `bg-[#E8ECEB] text-black`} placeholder:text-red-500 w-full rounded-3xl p-4 focus:outline-none transition-all duration-300`}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-5 md:justify-between">
              <div className="relative flex flex-col gap-2 w-full">
                <h2 className="font-bold text-lg">Projeto</h2>

                <div className="relative flex w-full items-center">
                  <input
                    type="text"
                    value={project}
                    onChange={handleProject}
                    placeholder={notProject}
                    className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} placeholder:text-red-500 w-full rounded-full py-2 pl-4 pr-20 focus:outline-none transition-all duration-300`}
                  />

                  <button
                    type="button"
                    onClick={toggleProjOpen}
                    className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#CCCCCC]`} absolute right-0 rounded-r-3xl h-full w-10 border cursor-pointer transition-all duration-300`}
                  >
                    <IoIosArrowForward className={`${projOpen ? `rotate-90` : ``} h-full w-full transition-all duration-300`}></IoIosArrowForward>
                  </button>
                </div>
                {projOpen ?
                <section className={`${darkTheme ? `bg-[#303030]` : `bg-[#E8ECEB]`} flex absolute translate-y-20 z-1 w-full rounded-xl transition-all duration-300`}>
                    <div className="flex flex-col w-full shadow-2xl rounded-xl">
                        {mapProjetos()}
                    </div>
                </section> : ``}
              </div>

              <div className="relative flex flex-col gap-2 w-full">
                <h2 className="font-bold text-lg">Área</h2>

                <div className="relative flex w-full items-center">
                  <input
                    type="text"
                    value={area}
                    onChange={handleArea}
                    placeholder={notArea}
                    className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} placeholder:text-red-500 w-full rounded-full py-2 pl-4 pr-20 focus:outline-none transition-all duration-300`}
                  />

                  <button
                    type="button"
                    onClick={toggleAreaOpen}
                    className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#CCCCCC]`} absolute right-0 rounded-r-3xl h-full w-10 border cursor-pointer transition-all duration-300`}
                  >
                    <IoIosArrowForward className={`${areaOpen ? `rotate-90` : ``} h-full w-full transition-all duration-300`}></IoIosArrowForward>
                  </button>
                </div>
                {areaOpen ?
                <section className={`${darkTheme ? `bg-[#303030]` : `bg-[#E8ECEB]`} flex absolute translate-y-20 z-1 w-full rounded-xl transition-all duration-300`}>
                    <div className="flex flex-col w-full shadow-2xl rounded-xl">
                        {mapAreas()}
                    </div>
                </section> : ``}
              </div>

              <div className="flex flex-col gap-2 w-full md:max-w-37.5">
                <h2 className="font-bold text-lg">Tempo</h2>

                <div className="flex">
                  <input
                    type="text"
                    value={`${calc ? (calcTime(time) === "" ? handleTimeError() : calcTime(time)) : time}`}
                    onChange={handleTime}
                    placeholder={notTime}
                    disabled={calc}
                    className={`${darkTheme ? `bg-[#484848] text-white` : `bg-[#E8ECEB]`} placeholder:text-red-500 w-full rounded-3xl py-2 pl-4 focus:outline-none transition-all duration-300`}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="font-bold text-lg">Data</h2>

              <div className="flex flex-col lg:flex-row gap-5 lg:justify-between">
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-col">
                    <div className="relative flex w-full items-center">
                      <div className={`${darkTheme ? `bg-[#484848] ` : `bg-[#E8ECEB]`} flex justify-center rounded-full transition-all duration-300`}>
                        <input
                          type="text"
                          value={from}
                          placeholder={notFrom || "dd/mm/aaaa"}
                          disabled
                          onChange={handleFrom}
                          className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} ${notFrom ? `placeholder:text-red-500` : ``} w-1/2 placeholder:text-lg rounded-l-full py-2 pl-6 focus:outline-none transition-all duration-300`}
                        />
                        <input
                          type="text"
                          value={timeFrom}
                          placeholder={notTimeFrom || "-- : --"}
                          onChange={handleTimeFrom}
                          className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} ${notFrom ? `placeholder:text-red-500` : ``} w-1/2 placeholder:text-lg rounded-full py-2 pl-4 focus:outline-none transition-all duration-300`}
                        />
                      </div>


                      <button
                        type="button"
                        onClick={toggleFromOpen}
                        className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#CCCCCC]`} 
                        absolute right-0 flex justify-center items-center rounded-lg h-full w-10 border cursor-pointer transition-all duration-300`}
                      >
                        <FaCalendarAlt  className="md:h-5 md:w-full"></FaCalendarAlt >
                      </button>
                    </div>
                    <p className="lg:hidden">De</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <div>
                    <div className="relative flex w-full items-center">
                      <div className={`${darkTheme ? `bg-[#484848] ` : `bg-[#E8ECEB]`} flex justify-center rounded-full transition-all duration-300`}>
                        <input
                          type="text"
                          value={to}
                          placeholder={notTo || "dd/mm/aaaa"}
                          disabled
                          onChange={handleTo}
                          className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} ${notFrom ? `placeholder:text-red-500` : ``} w-1/2 placeholder:text-lg rounded-l-full py-2 pl-6 focus:outline-none transition-all duration-300`}
                        />
                        <input
                          type="text"
                          value={timeTo}
                          placeholder={notTimeTo || "-- : --"}
                          onChange={handleTimeTo}
                          className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} ${notFrom ? `placeholder:text-red-500` : ``} w-1/2 placeholder:text-lg rounded-full py-2 pl-4 focus:outline-none transition-all duration-300`}
                        />
                      </div>

                      <button
                        type="button"
                        onClick={toggleToOpen}
                        className={`${darkTheme ? `bg-[#1E1E1E] text-[#B0B1B3] border-[#8F9A98]` : `bg-white text-[#B0B1B3] border-[#CCCCCC]`}
                        absolute right-0 rounded-lg h-full w-10 border cursor-pointer transition-all duration-300`}
                      >
                        <FaCalendarAlt  className="md:h-5 md:w-full"></FaCalendarAlt >
                      </button>
                    </div>
                    <p className="lg:hidden">Até</p>
                  </div>
                </div>

                <div className="flex w-full lg:w-fit justify-center gap-5 items-center">
                  <div
                    className={`${calc ? `bg-[#4562B3]` : `${darkTheme ? `bg-[#484848]` : `bg-[#D9D9D9]`} `} w-15 rounded-full p-2 cursor-pointer transition-all duration-300`}
                    onClick={toggleCalc}
                  >
                    <div
                      className={`${calc ? `flex text-white justify-end` : `flex text-white justify-start`} transition-all duration-300`}
                    >
                      <FaCircle />
                    </div>
                  </div>

                  <p
                    className={`${darkTheme ? `text-white` : `text-black`} transition-all duration-300`}
                  >
                    Calculadora <br /> de Horas
                  </p>
                </div>
              </div>

              <div className="lg:flex justify-between w-3/7 hidden">
                <p>De</p>
                <p>Até</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-lg">Descrição</h2>

              <div className="flex h-40 md:h-50 w-full">
                <textarea
                  value={about}
                  maxLength={500}
                  onChange={handleAbout}
                  placeholder={notAbout}
                  className={`${darkTheme ? `bg-[#484848] text-white ` : `bg-[#E8ECEB]`} 
                  placeholder:text-red-500 w-full h-full rounded-4xl p-4 resize-none focus:outline-none transition-all duration-300`}
                />
              </div>
            </div>
          </section>

          <section className="flex flex-col w-full lg:w-1/3 rounded-4xl p-6 md:p-10 gap-10 items-center">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between items-center">
                <h2 className="font-[Oswald] font-bold text-lg transition-all duration-300">
                  Membros
                </h2>
                <AiOutlinePlusCircle
                  onClick={toggleMembersArea}
                  className={`${darkTheme ? `text-white` : `text-[#555E5E]`}  cursor-pointer h-6 w-6 transition-all duration-300`}
                ></AiOutlinePlusCircle>
              </div>

              <div
                className={`${darkTheme ? `scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} h-40 flex flex-col gap-2 pr-2 overflow-y-auto scrollbar-thin transition-all duration-300`}
              >
                {chosenMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  name={member.name}
                  onDelete={() => removeMember(member.id)}
                />
                ))}
                
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between items-center">
                <h2 className="font-[Oswald] font-bold text-lg transition-all duration-300">
                  Ação
                </h2>

                <AiOutlinePlusCircle
                  onClick={toggleActionsArea}
                  className={`${darkTheme ? `text-white` : `text-[#555E5E]`} cursor-pointer h-6 w-6 transition-all duration-300`}
                ></AiOutlinePlusCircle>
              </div>

              <div
                className={`${darkTheme ? `scrollbar-thumb-[#8F9A98] scrollbar-track-[#484848]` : `scrollbar-thumb-[#8F9A98] scrollbar-track-[#E8ECEB]`} h-40 flex flex-col gap-2 pr-2 overflow-y-auto scrollbar-thin transition-all duration-300`}
              >
                {(emptyChosenActionList && chosenActions.length === 0) ? <div className=" flex w-full h-full justify-center items-center">
                  <p className="bg-[#484848] text-red-500 text-2xl p-5 rounded-2xl">Escolha uma ação</p>
                </div> : ``}
                {chosenActions.map((action) => (
                  <ActionCard
                  key={action.id}
                  action={action.action}
                  onDelete={() => removeAction(action.id)}
                  />
                ))}
                
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-5 items-center w-full">
              <button
                className={`bg-[#4562B3] text-white w-full sm:w-40 h-10 rounded-3xl text-xl hover:cursor-pointer transition-all duration-300`}
                onClick={saveAll}
              >
                Salvar
              </button>

              <button
                onClick={clearAll}
                className={`${darkTheme ? `bg-[#FF2E17] text-white border-none` : `bg-white text-[#FF1100] border border-[#FF1100]`} w-full sm:w-40 h-10 rounded-3xl text-xl hover:cursor-pointer transition-all duration-300`}
              >
                Limpar
              </button>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default UserActivities;
