import React from 'react';
import NavBar from "./components/NavBar"
import ControlledCarousel from "./components/Carousel"
import NavBarBottom from "./components/NavBar2"
import GameComingSoon from "./DaytonArcadesAndMore_14_web.jpg"
import Logo from "./components/Logo"
import { Route } from "react-router-dom";
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"

import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
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
      <NavBarBottom />
      <i class="fab fa-facebook"></i>

      {/* <Route path="/Home" component={App}/> */}
      <Route path="/Services" component={Services}/>
      <Route path="/About" component={About}/>
      <Route path="/Contact" component={Contact}/>



    </div>
  );
}

export default App;
