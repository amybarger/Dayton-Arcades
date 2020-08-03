import React from "react"
import PhotoOne from '../DaytonAracadesAndMore_02_web copy.jpg'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div>
            <img src={PhotoOne} className="aboutCoverImg"></img>
            <h1 className="WhoWeAre">Who We Are</h1>
            <p className="WhoWeAreP">Our job exercises the logical and creative sides of our brains regularly! We are a driven group of creatives with the mechanical skills to bring new life to your favorite arcade games and antique machines.</p>
            <p className="WhoWeAreP">We have a passion for preserving the world's most beloved machines of the past and giving them new life for the present. It's a gift our families have enjoyed and want to share with others.</p>
            <br></br>
            <p className="WhoWeAreP">The owner, Doug Barger, is a 30-year veteran of electronic repairs.</p>
            <p className="WhoWeAreP">"So many of us older electronic restorers are gone or retired. It is my wish to preserve this skill-set by teaching it to the next generation."</p>
            <p className="WhoWeAreP">If you or someone you know is interested in working with us, <Link to="/Contact">contact us here.</Link></p>
        </div>
    )
}