import { FaLinkedinIn,FaDiscord, FaPhone  } from "react-icons/fa";
export default function SocialProfile() {
    const socialMediasString = localStorage.getItem("Redes sociais");
    const socialMedias = socialMediasString ? JSON.parse(socialMediasString) : { phone: "Não informado", discord: "Não informado", linkedin: "Não informado" }
    return (
        <div>
            <p className="flex items-center gap-2 text-sm">{<FaLinkedinIn />} {socialMedias.linkedin}</p>
            <p className="flex items-center gap-2 text-sm">{<FaDiscord />} {socialMedias.discord}</p>
            <p className="flex items-center gap-2 text-sm">{<FaPhone />} {socialMedias.phone}</p>
        </div>
    )
}