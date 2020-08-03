import React from 'react';
import { Link } from 'react-router-dom'
import Logo from "./Logo"
import Services from "./Services"
import About from "./About"
import Contact from "./Contact"

function NavBar() {
    return (
        <div className="navBar">
            <Logo />
            <div className="links">
            {/* <Link to="/Home">Home</Link> */}
            <Link to="/Services">Services</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;