import React from 'react';
import PhotoOne from '../DaytonAracadesAndMore_02_web.jpg'
import PhotoTwo from '../DaytonArcardesAndMore_01_web.jpg'
import PhotoThree from "../DaytonArcadesAndMore_04_web.jpg"
import PhotoFour from "../DaytonArcadesAndMore_09_web.jpg"
import PhotoFive from "../DaytonArcadesAndMore_07_web.jpg"
// import BackgroundPic from "../DaytonArcadesAndMore_12_web.jpg"

  const Carousel = () => {
      return (
        <>
          {/* <img src={BackgroundPic} className="carouselBackground"></img> */}
        
          <div className="pic-ctn">
            <img src={PhotoOne} className="pic"></img>
            <img src={PhotoTwo} className="pic"></img>
            <img src={PhotoThree} className="pic"></img>
            <img src={PhotoFour} className="pic"></img>
            <img src={PhotoFive} className="pic"></img>
          </div>
        </>
      
      )
  }

  export default Carousel;