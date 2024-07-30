import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaEnvelope, FaPhone, FaXTwitter } from "react-icons/fa6"
import { web } from "./web"

export type SocialLabels =
  | "WhatsApp"
  | "X"
  | "Instagram"
  | "Youtube"
  | "Mail"
  | "Phone"

export const socialItems: { label: SocialLabels; icon: any; link: string }[] = [
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://api.whatsapp.com/send?phone=" + web.phone.replace('+', ''),
  },
  {
    label: "X",
    icon: FaXTwitter,
    link: "https://x.com/dorukakademi",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/dorukakademi",
  },
  {
    label: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/dorukakademi",
  },
  {
    label: "Mail",
    icon: FaEnvelope,
    link: "mailto:" + web.email,
  },
  {
    label: "Phone",
    icon: FaPhone,
    link: "tel:" + web.phone,
  },
]
