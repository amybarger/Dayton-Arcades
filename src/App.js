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
import Sales from "./components/Sales"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import Home from "./components/Home"

import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route path="/Services" component={Services}/>
      <Route path="/Sales" component={Sales}/>
      <Route path="/About" component={About}/>
      <Route path="/Contact" component={Contact}/>
      <NavBarBottom />
      <div className="socialIcons">
      <IconButton href="https://www.facebook.com/DaytonArcadesAndMore/" target="_blank">
      <FacebookIcon />
      </IconButton> 
      <IconButton href="">
      <TwitterIcon />
      </IconButton >
      <IconButton href="">
      <InstagramIcon />
      </IconButton>
      </div>
      <br></br>
      <footer>
      <p className="footer">&copy; {new Date().getFullYear()} Dayton Arcades and More</p>
      </footer>
    </div>
  );
}

export default App;

// comment
