import React from "react";
import imgGrid from '../images/photo-grid.png';

export default function Hero() {
    return(
        <section>
            <img src={imgGrid} alt="photoGrid" className="hero--photo"></img>
            <h1 className="hero--header">Online experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home</p>
        </section>
    )
} 