import React, { useEffect } from "react";
import classes from "./features.module.css";
import data from "./featuresData";

import AOS from "aos";
import "aos/dist/aos.css";

function Features() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up" className={classes.features}>
        <span>Features</span>
        <h1>Our Features & Services</h1>
        <div className={classes.fContainer}>
          {data.map((d) => (
            <div data-aos="fade-up" className={classes.fContent}>
              <img src={d.img} alt="err" />
              <h3>{d.title}</h3>
              <p>{d.para}</p>
              <button>{d.btn} </button>
            </div>
          ))}
        </div>
        <span>
          Image from <a href="#">Freepik</a>
        </span>
      </div>
    </>
  );
}

export default Features;
