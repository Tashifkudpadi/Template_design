import React, { useEffect } from "react";
import "./satisfaction.css";

import AOS from "aos";
import "aos/dist/aos.css";

import data from "./satisfactionData";

function Satisfaction() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);

  return (
    <>
      <div data-aos="fade-right" className="satisfaction">
        <h3>We believe in Customer Satisfaction</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          dignissimos ipsum autem, sit animi quidem perspiciatis accusantium
          delectus.
        </p>
      </div>
      <div className="cards">
        {data.map((d) => (
          <div data-aos="fade-up" className="card">
            <span>{d.img}</span>
            <h3>{d.title}</h3>
            <p>{d.para}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Satisfaction;
