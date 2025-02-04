import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            <span>Anwar</span>Blog
          </h1>
          <p>
            Anwar's Blog is a fictional blog conceived for the purpose of a
            tutorial on YouTube. However, it has a blog called
            pieceofadvice.org where he writes truly inspiring stuff.
          </p>
          <div className="contact">
            <span>
              <i className="fas fa-phone" /> &nbsp; 123-456-789
            </span>
            <span>
              <i className="fas fa-envelope" /> &nbsp; info@anwarblog.com
            </span>
          </div>
          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <a href="#">
              <li>Events</li>
            </a>
            <a href="#">
              <li>Team</li>
            </a>
            <a href="#">
              <li>Mentores</li>
            </a>
            <a href="#">
              <li>Gallery</li>
            </a>
            <a href="#">
              <li>Terms and Conditions</li>
            </a>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact us</h2>
          <br />
          <form action="index.html" method="post">
            <input
              type="email"
              name="email"
              className="text-input contact-input"
              placeholder="Your email address..."
            />
            <textarea
              rows={4}
              name="message"
              className="text-input contact-input"
              placeholder="Your message..."
              defaultValue={""}
            />
            <button type="submit" className="btn btn-big contact-btn">
              <i className="fas fa-envelope" />
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        © codingpoets.com | Designed by Awa Melvine
      </div>
    </div>
  );
};

export default Footer;
