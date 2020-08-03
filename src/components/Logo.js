// import logoPic from "./Images/Logo/DAAndM_HandDrawn_ProfileImage copy.jpg"
import logo from "../logo.jpg"
import React from "react"

    
    const Logo = () => {

        return (
        <div className="logoPic" style={{display: "flex", justifyContent: "center"}}>
            <img width="100%" src={logo} alt="Dayton Arcades and More Logo"></img>
        </div>
        )
}

export default Logo;