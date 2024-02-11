import React from "react";
import './style.css'
import FirstButton from "../Button";

export default function SectionText(){
    return(
        <div className="container-section">
            <h1 className="section-title"> Desenvolva soluções incríveis </h1>
            <p className="section-subtitle"> Uma plataforma de aprendizado para alcançar seu próximo nível como programador(a) </p>

            <div>
                <FirstButton />
            </div>
        </div>

    )
}