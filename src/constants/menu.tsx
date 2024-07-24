import { FaBlog, FaHome, FaInfo } from "react-icons/fa"

import { Image } from "@chakra-ui/react"

export const MenuItems = [
    {
        name: "Zirve",
        path: "/",
        icon: <Image src="/icon.png" width={8} height={8} rounded={"full"} />,
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