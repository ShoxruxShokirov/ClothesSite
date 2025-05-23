"use client"
import { createContext } from "react"

const context = createContext()

const initialData = {
    count: 1,
    color: "red",
    size: 16,
}

const nonRegisteredLinks = [
    { title: "About", path: "/about" },
    { title: "FAQ", path: "/faq" },
    { title: "Login", path: "/auth/login" },
]
const registeredLinks = [
    { title: "Explore", path: "/", },
    { title: "Trending", path: "/trending" },
    { title: "About", path: "/about" },
    { title: "FAQ", path: "/faq" },
    { title: "Profile", path: "/profile", id: "profile" },
]

export {
    nonRegisteredLinks,
    registeredLinks,
    context,
    initialData
}