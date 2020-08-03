import React from 'react';
import { Link } from 'react-router-dom'
import Services from "./Services"
import About from "./About"
import Contact from "./Contact"

function NavBarBottom() {
    return (
        <div className="navBarBottom">
            {/* <Link className="link2" to="/Home">Home</Link> */}
            <Link className="link2" to="/Services">Services</Link>
            <Link className="link2" to="/About">About</Link>
            <Link className="link2" to="/Contact">Contact</Link>
        </div>
    )
}

export default NavBarBottom;