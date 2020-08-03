import React from "react"
import PhotoOne from '../DaytonArcadesAndMore_10_web.jpg'

function Services() {
    return (
        <div>
            <img src={PhotoOne} className="aboutCoverImg"></img>
            <h1 className="ServicesH1">What Can We Do For You?</h1>
            <p className="ServicesP"> We provide services at arcade and pinball component level repair.</p>
            <p className="ServicesP">We will repair your game boards to the component level, if we can.</p>
            <p className="ServicesP">Severly damaged boards, including acid damage, are likely unreparable.</p>
            <p className="ServicesP">We will inspect any board we recieve and will make a determination if it's reparable.</p>
            <p className="ServicesP">Drop your machine or parts to us or deliever to our mailing address at 1712 Springfield St. Dayton, OH 45403.</p>
            <br></br>
            <h2 className="ServicesH2">We have artist playfield spot restoration services!</h2>
            <p className="ServicesP">We have an artist on staff that can repair damaged artwork on your machine. Her name is Keri, she does great!</p>
            <p className="ServicesP">We'd like to kindly note, this service is limited to small sections, mainly for pinball machines.</p>
            <br></br>
            <h2 className="ServicesH2">What else?!</h2>
           <ul className="servicesUL">
                <li className="servicesList">Tube radio restoration</li>
                <li className="servicesList">Antiques, including recording devices</li>
                <li className="servicesList">Minor repairs, including springs, bolts, wires, etc.</li>
                <li className="servicesList">Modern additions, like adding Bluetooth to your old tube radio</li>
            </ul>

            <h1 className="ContactH1"> Contact us today! 🎉</h1>

        </div>
    )
}

export default Services;