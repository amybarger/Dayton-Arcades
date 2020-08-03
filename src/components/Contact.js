import React from "react"
import PhotoOne from '../DadOnPhone.jpg'


export default function Contact() {
    return (
        <div>
            <img src={PhotoOne} className="aboutCoverImg"></img>
            <h1 className="ContactH1">We Want to Connect With You!</h1>
            <p className="ContactP">Reach out to us in any of the ways convenient to you, below!</p>
            <p className="ContactP"><b>Call: 937.949.8803</b></p>
            <p className="ContactP"><b>Email: info@daytonarcadesandmore.com</b></p>
        </div>
    )
}