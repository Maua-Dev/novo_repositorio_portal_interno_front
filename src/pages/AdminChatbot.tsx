import Navbar from "../components/Navbar";
import { ThemeContext } from "../contexts/themeContext";
import { useContext, useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { IoMdSearch } from "react-icons/io";
import { FiTrash2, FiUpload } from "react-icons/fi";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface ChatbotContent {
    id: string;
    title: string;
    updatedAt: string;
}

const MOCK_CONTENTS: ChatbotContent[] = [
    { id: "1", title: "Regras da salinha", updatedAt: "20/05/2026" },
    { id: "2", title: "Outros...", updatedAt: "00/00/0000" },
    { id: "3", title: "Outros...", updatedAt: "00/00/0000" },
    { id: "4", title: "Outros...", updatedAt: "00/00/0000" },
    { id: "5", title: "Outros...", updatedAt: "00/00/0000" },
    { id: "6", title: "Outros...", updatedAt: "00/00/0000" },
    { id: "7", title: "Outros...", updatedAt: "00/00/0000" },
    { id: "8", title: "FAQ de onboarding", updatedAt: "15/04/2026" },
    { id: "9", title: "Política de horas", updatedAt: "02/03/2026" },
    { id: "10", title: "Contatos da DEV", updatedAt: "10/01/2026" },
    { id: "11", title: "Projetos ativos", updatedAt: "28/02/2026" },
    { id: "12", title: "Eventos internos", updatedAt: "05/06/2026" },
    { id: "13", title: "Benefícios", updatedAt: "18/12/2025" },
    { id: "14", title: "Processo de strikes", updatedAt: "22/11/2025" },
];

const ITEMS_PER_PAGE = 7;

function formatDate(date: Date): string {
    return date.toLocaleDateString("pt-BR");
}

export default function AdminChatbot() {
    const { darkTheme } = useContext(ThemeContext);

    const [contents, setContents] = useState<ChatbotContent[]>(MOCK_CONTENTS);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [formTitle, setFormTitle] = useState("");
    const [formFile, setFormFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const formRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const cardClasses = `${darkTheme ? "bg-[#1E1E1E] text-white" : "bg-white text-black"} rounded-2xl p-6 md:p-8 transition-all duration-300`;
    const inputClasses = `${darkTheme ? "bg-[#484848] text-white placeholder:text-[#BCBCBC]" : "bg-[#E8ECEB] text-black placeholder:text-[#8F9A98]"} w-full rounded-2xl px-4 py-3 focus:outline-none transition-all duration-300`;
    const tableHeaderClasses = `${darkTheme ? "bg-[#484848] text-[#BCBCBC]" : "bg-[#E8ECEB] text-[#555E5E]"} text-sm font-semibold`;
    const tableRowClasses = `${darkTheme ? "border-[#484848] hover:bg-[#2a2a2a]" : "border-[#E8ECEB] hover:bg-[#F5F7F6]"} border-b transition-colors duration-200`;

    const filteredContents = contents.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.max(1, Math.ceil(filteredContents.length / ITEMS_PER_PAGE));
    const safePage = Math.min(currentPage, totalPages);
    const paginatedContents = filteredContents.slice(
        (safePage - 1) * ITEMS_PER_PAGE,
        safePage * ITEMS_PER_PAGE
    );

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleDelete = (id: string) => {
        setContents((prev) => prev.filter((item) => item.id !== id));
    };

    const handleFileSelect = (file: File | null) => {
        setFormFile(file);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFileSelect(file);
    };

    const clearForm = () => {
        setFormTitle("");
        setFormFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleAddContent = () => {
        if (!formTitle.trim()) return;

        const newContent: ChatbotContent = {
            id: crypto.randomUUID(),
            title: formTitle.trim(),
            updatedAt: formatDate(new Date()),
        };

        setContents((prev) => [newContent, ...prev]);
        clearForm();
        setCurrentPage(1);
    };

    const getPageNumbers = (): (number | "...")[] => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages: (number | "...")[] = [1];

        if (safePage > 3) pages.push("...");

        const start = Math.max(2, safePage - 1);
        const end = Math.min(totalPages - 1, safePage + 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (safePage < totalPages - 2) pages.push("...");
        pages.push(totalPages);

        return pages;
    };

    return (
        <div className="flex w-full poppins-regular">
            <div className="flex static">
                <Navbar />
            </div>

            <main className="bg-[url(src/assets/images/backgroundActivitiesPI.png)] bg-cover min-h-screen w-full flex justify-center pt-20 pb-20 md:pl-52 md:pr-20">
                <div className="w-5/6 md:w-full flex flex-col gap-6">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <section className={`${cardClasses} lg:w-2/3 flex flex-col gap-3`}>
                            <h1 className={`${darkTheme ? "text-white" : "text-black"} font-bold text-3xl md:text-4xl transition-all duration-300`}>
                                Chatbot
                            </h1>
                            <p className={`${darkTheme ? "text-[#BCBCBC]" : "text-[#555E5E]"} mt-1 text-sm md:text-base transition-all duration-300`}>
                                Gerencie os conteúdos que o chatbot usa para responder
                            </p>
                            <h2 className="font-bold text-xl md:text-2xl">Conteúdo cadastrado</h2>

                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    placeholder="Buscar conteúdo..."
                                    className={inputClasses}
                                />
                                <IoMdSearch className={`${darkTheme ? "text-[#BCBCBC]" : "text-[#8F9A98]"} absolute right-4 top-1/2 -translate-y-1/2 text-xl pointer-events-none`} />
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr>
                                            <th className={`${tableHeaderClasses} rounded-l-xl px-4 py-3`}>Título</th>
                                            <th className={`${tableHeaderClasses} px-4 py-3`}>Atualizado em</th>
                                            <th className={`${tableHeaderClasses} rounded-r-xl px-4 py-3 text-center w-20`}>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedContents.length > 0 ? (
                                            paginatedContents.map((item) => (
                                                <tr key={item.id} className={tableRowClasses}>
                                                    <td className="px-4 py-3.5 text-sm md:text-base">{item.title}</td>
                                                    <td className={`${darkTheme ? "text-[#BCBCBC]" : "text-[#555E5E]"} px-4 py-3.5 text-sm md:text-base`}>
                                                        {item.updatedAt}
                                                    </td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <button
                                                            type="button"
                                                            onClick={() => handleDelete(item.id)}
                                                            aria-label={`Excluir ${item.title}`}
                                                            className={`${darkTheme ? "text-[#BCBCBC] hover:text-red-400" : "text-[#555E5E] hover:text-red-500"} transition-colors duration-200 cursor-pointer`}
                                                        >
                                                            <FiTrash2 className="inline text-lg" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={3} className={`${darkTheme ? "text-[#BCBCBC]" : "text-[#555E5E]"} px-4 py-8 text-center text-sm`}>
                                                    Nenhum conteúdo encontrado.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {filteredContents.length > 0 && (
                                <div className="flex items-center justify-end gap-1 mt-auto pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        disabled={safePage === 1}
                                        aria-label="Página anterior"
                                        className={`${darkTheme ? "text-[#BCBCBC] hover:text-white disabled:text-[#484848]" : "text-[#555E5E] hover:text-black disabled:text-[#CCCCCC]"} p-1 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed`}
                                    >
                                        <IoChevronBack />
                                    </button>

                                    {getPageNumbers().map((page, index) =>
                                        page === "..." ? (
                                            <span key={`ellipsis-${index}`} className={`${darkTheme ? "text-[#BCBCBC]" : "text-[#555E5E]"} px-1 text-sm`}>
                                                ...
                                            </span>
                                        ) : (
                                            <button
                                                key={page}
                                                type="button"
                                                onClick={() => setCurrentPage(page)}
                                                className={`min-w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${safePage === page
                                                    ? "bg-[#4562B3] text-white"
                                                    : darkTheme
                                                        ? "text-[#BCBCBC] hover:bg-[#484848]"
                                                        : "text-[#555E5E] hover:bg-[#E8ECEB]"
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        )
                                    )}

                                    <button
                                        type="button"
                                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                        disabled={safePage === totalPages}
                                        aria-label="Próxima página"
                                        className={`${darkTheme ? "text-[#BCBCBC] hover:text-white disabled:text-[#484848]" : "text-[#555E5E] hover:text-black disabled:text-[#CCCCCC]"} p-1 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed`}
                                    >
                                        <IoChevronForward />
                                    </button>
                                </div>
                            )}
                        </section>

                        <section ref={formRef} className={`${cardClasses} lg:w-1/3 flex flex-col gap-5`}>
                            <h2 className="font-bold text-xl md:text-2xl">Adicionar conteúdo</h2>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="content-title" className="font-semibold text-sm md:text-base">
                                    Título do conteúdo
                                </label>
                                <input
                                    id="content-title"
                                    type="text"
                                    value={formTitle}
                                    onChange={(e) => setFormTitle(e.target.value)}
                                    className={inputClasses}
                                />
                            </div>

                            <div className="flex flex-col gap-2 flex-1">
                                <label className="font-semibold text-sm md:text-base">Arraste o arquivo</label>

                                <div
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => fileInputRef.current?.click()}
                                    onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    className={`${darkTheme ? "border-[#484848] bg-[#2a2a2a]" : "border-[#CCCCCC] bg-[#FAFAFA]"} ${isDragging ? "border-[#4562B3] bg-[#4562B3]/5" : ""
                                        } flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-2xl min-h-48 cursor-pointer transition-all duration-300`}
                                >
                                    <FiUpload className={`${darkTheme ? "text-[#BCBCBC]" : "text-[#8F9A98]"} text-3xl`} />
                                    {formFile ? (
                                        <p className={`${darkTheme ? "text-white" : "text-black"} text-sm text-center px-4`}>
                                            {formFile.name}
                                        </p>
                                    ) : (
                                        <p className={`${darkTheme ? "text-[#BCBCBC]" : "text-[#8F9A98]"} text-sm text-center px-4`}>
                                            Clique ou arraste um arquivo aqui
                                        </p>
                                    )}
                                </div>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => handleFileSelect(e.target.files?.[0] ?? null)}
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={clearForm}
                                    className={`${darkTheme ? "bg-transparent text-white border-[#484848]" : "bg-white text-[#555E5E] border-[#CCCCCC]"} border px-6 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-all duration-300 cursor-pointer`}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    onClick={handleAddContent}
                                    disabled={!formTitle.trim()}
                                    className="bg-[#4562B3] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#3a5299] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                                >
                                    Adicionar
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
