"use client"

import "./style.scss"
import { useState, createContext, useContext } from "react"

const context = createContext()
// prop drilling


function Test(props) {
    const [text, setText] = useState("Hello world")
    return ( 
        <context.Provider value={text}>
            <div className="test-wrapper">
                <Comp2/>
            </div>  
        </context.Provider>
    );
}
function Comp2(props) {
    return (
        <>
            <Comp3 />
        </>
    )
}
function Comp3(props) {
    return (
        <>
            <Comp4 />
        </>
    )
}
function Comp4(props) {
    return (
        <>
            <Comp5 />
        </>
    )
}
function Comp5(props) {
    const text = useContext(context)
    return (
        <>
            <h1>{text}</h1>
        </>
    )
}

export default Test;