import React from 'react';
import NavBar from "./NavBar"
import ControlledCarousel from "./Carousel"
import NavBarBottom from "./NavBar2"
import GameComingSoon from "../DaytonArcadesAndMore_14_web.jpg"
import Logo from "./Logo"
import { Route } from "react-router-dom";
import Services from "./Services"
import About from "./About"
import Contact from "./Contact"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';

export default function Home() {
    return (
        <div>
        <div className="border1"></div>
 <div className="border2"></div>
 <div className="border3"></div>
 <ControlledCarousel />
 <div className="comingSoonFlex">
 <img src={GameComingSoon} className="gameComingSoon"></img>
 <div className="comingSoonText">
 <h1 className="comingSoonH1">COMING SOON!</h1>
 <h2 className="comingSoonH2"> 60 games in 1 Cocktail Arcade games will be available for sale🎉 </h2>
 </div>
 </div>
 <h1 className="EnthusiastsH1">We are more than just arcade and pinball enthusiasts. 🕹️</h1>
 <h2 className="EnthusiastsH2">We are dreamers and history buffs with a mission to help keep the past alive through repairing
  some of the world's greatest arcade games.
 </h2>
 <h1 className="ExperienceH1"> We have over 30 years of experience in electronic repairs. 🔩</h1>
 <h2 className="ExperienceH2"> Whether your cherished machine of joy needs new life with fresh paint or a circuit board replacement, we will repair it with love.</h2>
 <h1 className="FutureH1"> We also have capabilities to modernize your machine! 🤖</h1>
 <h2 className="FutureH2"> We can add Bluetooth capability to your antique tube radio and stream music right through the original radio. Yeah, we can do cool things like that too.</h2>
 <div className="contactCOA">
 <h1 className="ContactH1"> Contact us today! 🎉</h1>
 <div className="logoBottom">
 <Logo />
 </div>
 </div>
 </div>
    )
}
 