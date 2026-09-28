import { useContext, useState } from "react";
import { IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { ThemeContext } from "../contexts/themeContext";

interface FilterProps {
    searchByName: string,
    setSearchByName: React.Dispatch<React.SetStateAction<string>>,
}

export default function SearchFilter({searchByName, setSearchByName}:FilterProps) {

    const { darkTheme } = useContext(ThemeContext);

    const [filterOpen, setFilterOpen] = useState(false)
    const toggleFilterOpen = () => {
        setFilterOpen((prev) => (!prev))
    }

    return(
        <article className="flex items-center justify-between">
            <div className={`${darkTheme ? `bg-[#333333]` : `bg-white`} flex items-center rounded-3xl border transition-all duration-300`}>
                <div className={`flex ${darkTheme ? `border-white` : `border-black`} items-center gap-2 p-2 text-lg rounded-3xl border-r-2 transition-all duration-300`}>
                    <IoMdSearch className={`${darkTheme ? `text-white` : `text-black`} md:text-2xl transition-all duration-300`}></IoMdSearch>
                    <input type="text"
                    placeholder="Buscar...."
                    value={searchByName}
                    onChange={(e) => setSearchByName(e.target.value)}
                    className={`${darkTheme ? `placeholder:text-white` : `placeholder:text-black`} focus:outline-none transition-all duration-300`}/>
                </div>
                <div onClick={toggleFilterOpen} className={`flex items-center text-xl gap-2 py-2 px-3 hover:cursor-pointer`}>
                    <p className={`${darkTheme ? `text-white` : `text-black`} flex items-center transition-all duration-300`}>Filtros</p>
                    <IoIosArrowForward className={`${filterOpen ? `rotate-90` : ``} transition-all duration-300`}></IoIosArrowForward>
                </div>
            </div>
        </article>
    )
}