import React, { useState, useEffect } from "react"

export default function ControlledInput () {
    const [myText, setMyText] = useState("");
    const [myText2, setMyText2] = useState("");

    console.log("ControlledInput: Render")

    useEffect(()=>{
        console.log("ControlledInput: Mount")})
    
    useEffect(()=>{
        console.log("ControlledInput: Mount 1st time")
        return () => console.log("ControlledInput: end component")
    }, [])
   
    useEffect(()=>{
        console.log("ControlledInput: Mount after changing myText2")
    }, [myText2])
    
    
    return (
    <>
    <h1>Controlled Input</h1>
    <input onChange={(e)=> setMyText(e.target.value)}></input>
    <h2>{myText}</h2>
    <input onChange={(e)=> setMyText2(e.target.value)}></input>
    <h2>{myText2}</h2>
    </>
    )
}