import React from "react";
import './style.css'
import media from '../../assets/_.svg'

export default function Header(){

    return (
        <header>
            <img src={media} className="header-img" />
        </header>
    )
}