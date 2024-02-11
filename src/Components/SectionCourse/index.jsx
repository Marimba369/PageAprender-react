import React from "react";
import './style.css'
import media1 from '../../assets/Vector.svg'
import media2 from '../../assets/Vector(1).svg'
import media3 from '../../assets/Vector(2).svg'

export default function SectionCourse(){
    return (
        <div className="container-course">

            <div className="section-logica">
                <img src={media1} />
                <h2>Lógica de programação</h2>
            </div>
                
            <div className="section-html">
                <img src={media2} />
                <h2> Introdução à HTML </h2>
            </div>

            <div className="section-css">
                <img src={media3}/>
                <h2> Introdução à CSS </h2>
            </div>

        </div>
    )
}