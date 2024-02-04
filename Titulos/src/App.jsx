import React, { Component } from "react";
import './App.css'
import { useState } from "react";

function app() {
    const [title, setTitle] = useState("Axel");
    const Newtitles = ["Hola", "Bienvenido", "Hey", "Bro", "Nomames", "Que onda"]

    function changeTitles() {
        setTitle(Newtitles[Math.floor(Math.random() * Newtitles.length)]);




    }

    return (
        <>
            <h1>{title}</h1>
            <button onClick={changeTitles}>Presiona</button>
        </>
    )
}


export default app;