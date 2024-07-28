import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { web } from "./web";

export const socialItems = [
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://api.whatsapp.com/send?phone=" + web.phone,
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
];
