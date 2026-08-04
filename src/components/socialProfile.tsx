import { useContext } from "react";
import type { IconType } from "react-icons";
import { FaDiscord, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { ThemeContext } from "../contexts/themeContext";

type SocialItemProps = {
    icon: IconType;
    label: string;
    value: string;
    href?: string;
    darkTheme: boolean;
};

function SocialItem({ icon: Icon, label, value, href, darkTheme }: SocialItemProps) {
    const content = (
        <>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs opacity-0 transition-all duration-300 ease-out group-hover/social:mr-1.5 group-hover/social:max-w-48 group-hover/social:opacity-100 group-focus-within/social:mr-1.5 group-focus-within/social:max-w-48 group-focus-within/social:opacity-100 md:text-sm">
                {value}
            </span>
            <Icon aria-hidden="true" className="size-3.5 shrink-0 md:size-5 " />
        </>
    );

    const themeClasses = darkTheme
        ? "text-white group-hover/social:bg-[#363636] group-focus-within/social:bg-[#363636]"
        : "text-black group-hover/social:bg-gray-50 group-focus-within/social:bg-gray-50";
    const className = `flex h-6 items-center justify-end rounded-full px-1.5 transition-colors duration-300 md:h-8 md:px-2 ${themeClasses}`;

    if (href) {
        return (
            <a
                className={`${className} cursor-pointer ${darkTheme ? "hover:text-blue-300" : "hover:text-blue-600"}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={`Abrir ${label}: ${value}`}
                aria-label={`Abrir ${label} de ${value}`}
            >
                {content}
            </a>
        );
    }

    return <div className={className} title={`${label}: ${value}`}>{content}</div>;
}

export default function SocialProfile() {
    const { darkTheme } = useContext(ThemeContext);
    const socialMediasString = localStorage.getItem("Redes sociais");
    const socialMedias = socialMediasString
        ? JSON.parse(socialMediasString)
        : { phone: "Não informado", discord: "Não informado", linkedin: "Não informado" };

    return (
        <div
            className="group/social flex w-fit flex-col items-end gap-1"
            aria-label="Redes sociais"
            tabIndex={0}
        >
            <SocialItem icon={FaPhone} label="Telefone" value={socialMedias.phone} darkTheme={darkTheme} />
            <SocialItem
                icon={FaLinkedinIn}
                label="LinkedIn"
                value={socialMedias.linkedin}
                href={`https://www.linkedin.com/in/${socialMedias.linkedin}`}
                darkTheme={darkTheme}
            />
            <SocialItem
                icon={FaDiscord}
                label="Discord"
                value={socialMedias.discord}
                href="https://discord.com/app"
                darkTheme={darkTheme}
            />
        </div>
    );
}
