"use client"
import { defaultTheme } from "@/constants/theme"
import { ChakraProvider } from "@chakra-ui/react"



export const Providers = ({ children }: { children: React.ReactNode }) => {
    return <ChakraProvider
        theme={defaultTheme}
    >
        {children}
    </ChakraProvider>
}