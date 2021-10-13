import React, { useEffect } from "react";
import "./download.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Download() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);

  return (
    <div className="download">
      <div data-aos="fade-up" className="downloadContent">
        <h3>Download it now</h3>
        <div className="store">
          <span>
            <i class="fab fa-apple"></i>App store
          </span>
          <span>
            <i class="fab fa-google-play"></i>Google play
          </span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipi elit. Facere quas
          accusantium sapiente.
        </p>
      </div>
    </div>
  );
}

export default Download;
