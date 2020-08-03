import React from "react"
import PhotoOne from '../DaytonArcadesAndMore_09_web copy.jpg'
import GameComingSoon from "../DaytonArcadesAndMore_14_web.jpg"

export default function Sales() {
    return (
        <div>
            <img src={PhotoOne} className="aboutCoverImg"></img>
           <h1 className="SalesH1"> Available for Purchase </h1>
           <p className="SalesP">We are working hard on repairing a warehouse-full of older arcade machines and prepping them for our showroom floor.</p> 
            <p className="SalesP">Please visit this page often to see machines for sale.</p>
            <p className="SalesP">Soon, we will also have brand new pinball and arcade machine offerngs! Please
            check back for these announcements.</p>
            <div className="comingSoonFlex">
            <img src={GameComingSoon} className="gameComingSoon"></img>
            <div className="comingSoonText">
            <h1 className="comingSoonH1">COMING SOON!</h1>
            <h2 className="comingSoonH2"> 60 games in 1 Cocktail Arcade games will be available for sale🎉 </h2>
            </div>
            </div>
        </div>
    )
}