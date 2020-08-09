import React from "react";
import PhotoOne from "../DaytonArcadesAndMore_09_web copy.jpg";
import GameComingSoon from "../DaytonArcadesAndMore_14_web.jpg";

export default function Sales() {
  return (
    <div>
      <img src={PhotoOne} className="aboutCoverImg"></img>
      <h1 className="SalesH1"> Available for Purchase </h1>
      <p className="SalesP">
        We are working hard on repairing a warehouse-full of older arcade
        machines and prepping them for our showroom floor.
      </p>
      <p className="SalesP">
        Please visit this page often to see machines for sale.
      </p>
      <p className="SalesP">
        Soon, we will also have brand new pinball and arcade machine offerings!
        Please check back for these announcements.
      </p>
      <div
        class="fb-post"
        data-href="https://www.facebook.com/DaytonArcadesAndMore/posts/119168376546918"
        data-show-text="true"
        data-width=""
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
      <div
        class="fb-post"
        data-href="https://www.facebook.com/DaytonArcadesAndMore/posts/125721672558255"
        data-show-text="true"
        data-width=""
      >
        <blockquote
          cite="https://developers.facebook.com/DaytonArcadesAndMore/posts/125721672558255"
          class="fb-xfbml-parse-ignore"
        >
          <p>
            Wild Riders arcade game ready to go! The picture(crt) is very good
            for the age. The cabinet has some cosmetic issues but overall looks
            good. Solid game stop by and take a ride! $1200.00
          </p>
          Posted by{" "}
          <a href="https://www.facebook.com/DaytonArcadesAndMore/">
            Dayton Arcades and More LLC
          </a>{" "}
          on&nbsp;
          <a href="https://developers.facebook.com/DaytonArcadesAndMore/posts/125721672558255">
            Friday, August 7, 2020
          </a>
        </blockquote>
      </div>
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
    </div>
  );
}
