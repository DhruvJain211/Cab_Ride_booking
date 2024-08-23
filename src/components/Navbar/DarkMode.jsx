/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import React from 'react'
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi'

const DarkMode = () => {
    const[theme, setTheme] = useState(
        typeof window !== "undefined" && localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = typeof document !== "undefined" ? document.documentElement : null; // same as: element = document.querySelector('html')

    useEffect(() => {
        localStorage.setItem("theme", theme);
        element.classList.remove("light", "dark")
        element.classList.add(theme);
    }, [element.classList, theme])

    // see in BiSolidSun lines, in one part used '()' and in one part not used parenthesis
    return (
        <>
            {theme == "dark" ? (
            <BiSolidSun onClick={() => setTheme("light")} className="text-2xl hover:text-amber-300"/>
            ) : <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl hover:text-amber-300"/>}
        </>
    )
}

export default DarkMode