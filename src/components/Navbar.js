import React from "react";
import imgLogo from '../images/airbnb-logo.png'
import '../index.css';


function Navbar() {
    return(
        <nav className="navBar">
            <img src={imgLogo} alt="airbnblogo"/>
        </nav>
    )
}

export default Navbar;