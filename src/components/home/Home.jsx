import React, { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);

  return (
    <div className="homeContainer">
      <div data-aos="fade-right" className="left">
        <h3>About us</h3>
        <h1>1000+ customer using Our Application.</h1>
        <ul>
          <li>Powerful and flexible them</li>
          <li>Simple,transparent pricing</li>
          <li>Build tools and full documentation</li>
        </ul>
        <button>Read more</button>
      </div>
      <div data-aos="fade-left" className="right">
        <img
          src="https://cdn.dribbble.com/users/1615584/screenshots/14304518/media/538e8f7901acb3f818ef760fd7953191.jpg?compress=1&resize=500x500"
          alt="err"
        />
      </div>
    </div>
  );
}

export default Home;
