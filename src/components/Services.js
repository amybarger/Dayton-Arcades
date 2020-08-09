import React from "react"
import PhotoOne from '../DaytonArcadesAndMore_10_web.jpg'

function Services() {
    return (
        <div>
            <img src={PhotoOne} className="aboutCoverImg"></img>
            <h1 className="ServicesH1">What Can We Do For You?</h1>
            <p className="ServicesP"> We provide services on arcade and pinball machines to the component level.</p>
            <p className="ServicesP">Severly damaged boards, including acid damage, are likely unreparable.</p>
            <p className="ServicesP">We will inspect any board we recieve and will make a determination if it's reparable.</p>
            <p className="ServicesP">Drop your machine or boards off to us, or mail boards to us at 3665 North Dr. Greenville, OH 45331.</p>
            <br></br>
            <h2 className="ServicesH2">We have an artist on staff!</h2>
            <p className="ServicesP">Our artist can repair damaged artwork on your machine. Her name is Kyrie, she does great!</p>
            <p className="ServicesP">We'd like to kindly note, this service is limited to small sections, mainly for pinball machines.</p>
            <br></br>
            <h2 className="ServicesH2">What else?!</h2>
           <ul className="servicesUL">
                <li className="servicesList">Tube radio restoration</li>
                <li className="servicesList">Antiques, including recording devices</li>
                <li className="servicesList">Mechanical assemblies and rewiring</li>
                <li className="servicesList">We have the parts to rebuild most multi-products gear box assemblies for your pinball machine</li>
                <li className="servicesList">We can add modern interfaces that are completely reversable</li>
            </ul>

            <h1 className="ContactH1"> Contact us today! 🎉</h1>

        </div>
    )
}

export default Services;