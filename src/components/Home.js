import React from "react";
import NavBar from "./NavBar";
import ControlledCarousel from "./Carousel";
import NavBarBottom from "./NavBar2";
import GameComingSoon from "../DaytonArcadesAndMore_14_web.jpg";
import Logo from "./Logo";
import { Route } from "react-router-dom";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";
import LylaPhoto from "./LylaPic";

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
          <h1 className="comingSoonH1">AVAILABLE NOW!</h1>
          <h2 className="comingSoonH2">
            {" "}
            Cocktail Arcade games, that include 60 GAMES, available for sale 🎉
            Opening sale $200 off!
          </h2>
        </div>
      </div>
      <h1 className="currentSalesH1">
        CURRENT SALES <br></br>on our Facebook page! 🎉
      </h1>
      <div style={{ width: "100vw" }}>
        <div
          className="fb-post"
          data-href="https://www.facebook.com/DaytonArcadesAndMore/posts/119168376546918"
          data-show-text="true"
          data-width="100%"
        >
          <blockquote
            cite="https://developers.facebook.com/DaytonArcadesAndMore/posts/119168376546918"
            class="fb-xfbml-parse-ignore"
          >
            <p>
              We have a Gottlieb Cross Town pinball ready for sale. This is a
              desirable wedgehead pinball machine. The playfield is a...
            </p>
            Posted by{" "}
            <a href="https://www.facebook.com/DaytonArcadesAndMore/">
              Dayton Arcades and More LLC
            </a>{" "}
            on&nbsp;
            <a href="https://developers.facebook.com/DaytonArcadesAndMore/posts/119168376546918">
              Tuesday, July 28, 2020
            </a>
          </blockquote>
        </div>
      </div>
      <h1 className="EnthusiastsH1">
        We repair more than just arcade and pinball machines 🕹️
      </h1>
      <h2 className="EnthusiastsH2">
        Our mission is to help keep the past alive through repairing antique
        electronics.
      </h2>
      <h1 className="ExperienceH1">
        {" "}
        We have over 30 years of experience in electronic repairs 🔩
      </h1>
      <h2 className="ExperienceH2">
        {" "}
        Whether your cherished machine of joy needs a small touch of paint or a
        circuit board repair, we will fix it with the best available methods.
      </h2>
      <h1 className="FutureH1">
        {" "}
        We also have capabilities to add modern interfaces that are completely
        reversable 🤖
      </h1>
      <h2 className="FutureH2">
        {" "}
        We can add Bluetooth to your antique tube radio and stream old-time
        radio shows right through the original radio. Yeah, we can do cool
        things like that too.
      </h2>
      <div className="LylaAndEmojis">
        <div className="monsterEmoji">👾</div>
        <LylaPhoto />
        <div className="monsterEmoji">👾</div>
      </div>
      <div className="contactCOA">
        <h1 className="ContactH1"> Contact us today! 🎉</h1>
      </div>
      <div
        className="logoBottom"
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Logo />
      </div>
    </div>
  );
}
