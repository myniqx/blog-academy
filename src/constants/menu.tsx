import { FaBlog, FaHome, FaInfo } from "react-icons/fa"

import { Image } from "@chakra-ui/react"
import { web } from "./web"

export const MenuItems = [
    {
        name: web.name,
        path: "/",
        icon: <Image src="/icon.png" width={8} height={8} rounded={"full"} alt={web.name} />,
    },
    {
        name: "Blogs",
        path: "/blogs",
        icon: <FaBlog />,
    },
    {
        name: "Hakkımızda",
        path: "/about",
        icon: <FaInfo />,
    },
]