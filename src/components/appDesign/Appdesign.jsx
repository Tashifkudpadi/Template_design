import React, { useEffect } from "react";
import "./appdesign.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Appdesign() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
    });
  }, []);

  return (
    <div className="appdesign">
      <div data-aos="fade-right" className="aLeft">
        <h3>App Design</h3>
        <p>Check our latest blog post for more update. </p>
        <span>
          Learn more<i class="fas fa-long-arrow-alt-right"></i>
        </span>
      </div>
      <div data-aos="fade-left" className="aRight">
        <h3>App Design</h3>
        <p>Check our latest blog post for more update. </p>
        <span>
          Learn more<i class="fas fa-long-arrow-alt-right"></i>
        </span>
      </div>
    </div>
  );
}

export default Appdesign;
