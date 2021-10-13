import React, { useEffect } from "react";
import classes from "./info.module.css";

function Info() {
  return (
    <div className={classes.info}>
      <h1>Quick & Easy Process</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas soluta
        ratione quo dolorum, eos non accusantium corporis. Eius provident quam
        libero quia?
      </p>
      <button>Read More</button>
    </div>
  );
}

export default Info;
