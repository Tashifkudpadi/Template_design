import React from "react";
import "./contact.css";

function Contact() {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <div className="first">
        <h3>Get in touch</h3>
        <p className="para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          excepturi est ipsum laudantium quisquam temporibus!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          excepturi est ipsum laudantium ullam ipsam nemo quisquam temporibus!
        </p>
        <div className="social">
          <span>
            <a
              href="https://www.facebook.com/profile.php?id=100010955229556"
              target="_blank"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
          </span>
          <span>
            <a href="https://twitter.com/tashifkmani" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/itz_tshif" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </span>
          <span>
            <a href="https://www.telegram.com/tashif kudpadi" target="_blank">
              <i class="fab fa-telegram-plane"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/tashif-kudpadi-b4464b1b9/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </span>
        </div>
      </div>
      <div className="second">
        <div className="call">
          <h3>Call Us</h3>
          <ul>
            <li>1(234)567-891</li>
            <li>1(234)567-891</li>
          </ul>
        </div>
        <div className="location">
          <h3>Location</h3>
          <ul>
            <li>121,rock Street, 21 Avenue,</li>
            <li>New York, NY 92456-9000</li>
          </ul>
        </div>
        <div className="services">
          <h3>Our top services</h3>
          <ul>
            <li>Local transfers</li>
            <li>Airport transfer</li>
            <li>Excursions and tours</li>
          </ul>
        </div>
      </div>
      <div className="third">
        <form onSubmit={formSubmitHandler}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter a valid email address"
            autoComplete="off"
          />
          <textarea name="textarea" id="textarea" cols="30" rows="6"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
