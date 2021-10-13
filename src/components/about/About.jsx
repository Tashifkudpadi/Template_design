import React, { useEffect } from "react";
import image from "../../images/myphoto.jpg";
import "./about.css";

import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);

  return (
    <div className="about">
      <div data-aos="fade-right" className="aboutLeft">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis
          id odit quidem laudantium reiciendis, recusandae, unde expedita quas
          velit ipsa optio. Atque possimus nisi minima praesentium totam porro
          repudiandae est blanditiis! Doloremque, tenetur voluptatem commodi
          reprehenderit quae fugiat nostrum suscipit, asperiores voluptatum
          deleniti odio!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis
          id odit quidem laudantium reiciendis, recusandae, unde expedita quas
          velit ipsa optio. Atque possimus nisi minima praesentium totam porro
          repudiandae est blanditiis! Doloremque, tenetur voluptatem commodi
          reprehenderit quae fugiat nostrum suscipit, asperiores voluptatum
          deleniti odio! repudiandae est blanditiis! Doloremque, tenetur
          voluptatem commodi reprehenderit quae fugiat nostrum suscipit,
          asperiores voluptatum deleniti odio!
        </p>
        <span>
          Image from <a href="#">Freepik</a>
        </span>
      </div>
      <div data-aos="fade-left" className="aboutRight">
        <img
          src="https://images.pexels.com/photos/7322309/pexels-photo-7322309.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="err"
        />
        <p>
          I help companies lorem ipsum dolor, sit amet consectetur adipisicing
          elit.
        </p>
        <span>
          <a
            href="https://www.linkedin.com/in/tashif-kudpadi-b4464b1b9/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
            Find me on LinkedIn
          </a>
        </span>
      </div>
    </div>
  );
}

export default About;
