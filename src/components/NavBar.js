import React from 'react'
import './navbar.css'
import {
  Link
} from "react-router-dom";


const NavBar = () => {

    const navStyle = {
        color: 'rgb(231, 199, 19)',
        textDecoration: "none",
        fontSize: "3vh",
        padding: "2vh",
    }
        
        
    
   

    return (
        <nav >
            <a className="Name" href="http://eliziejus.com/"><h1>Eliziejus Capas</h1></a>
            <ul className="nav-links">
                <Link style={navStyle } to="/about" refresh="true">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/work" refresh="true">
                    <li>Work</li>
                </Link>
            </ul>
        </nav>
    )
}





export default NavBar
