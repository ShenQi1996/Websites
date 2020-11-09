import React, { useEffect, useRef } from "react";
import "./LoadingP.css";
import { TweenMax } from "gsap";

function LoadingP() {
  let s1,
    d1,
    h1,
    b1,
    b2,
    t1,
    t3 = useRef(null);

  useEffect(() => {
    /**TweenMax.to(s1, 1, { visibility: "visible" }, 0.5); 
    TweenMax.staggerTo([t3, t2], 2, { translateX: 1000 }, 1.5);
    TweenMax.staggerTo([t1, b2], 2, { translateX: -1000 }, 0.5);
    TweenMax.staggerTo([b1, h1], 2, { translateX: 1000 }, 0.5);
    TweenMax.staggerTo([d1, s1], 2, { translateX: -1000 }, 0.5);
    */
  }, []);

  return (
    <div className="screen1">
      <div className="display">
        <div className="hero">
          <div className="box1">
            <h1 className="hero-con">FRONT-END</h1>
          </div>
          <div className="box2">
            <h1 className="hero-con">DEVELOPER</h1>
            <h2>Sam Qi</h2>
          </div>
          <div className="box3"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingP;