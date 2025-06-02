import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-abt">
          <h1>
            Illuminator <span>Photography</span>
          </h1>
          <p>
            24 - 48 Hours picture Delivery | Trusted by Wonderful families
            Monthly
          </p>
          <p>Copyright &copy; 2025 Illuminator Photography</p>
        </div>

        <div className="latest-photos">
          <h1>Latest Photos</h1>
          <div className="latest-img">
            <img className="latest-pic" src="img.png" alt="pic" />
            <img className="latest-pic" src="img.png" alt="pic" />
            <img className="latest-pic" src="img.png" alt="pic" />
            <img className="latest-pic" src="img.png" alt="pic" />
          </div>
        </div>
        <div className="Socials">
          <h1>Contacts</h1>
          <p>Abraham Adesanya : +00-0000-000-000</p>
          <p>Email : info@Illuminatorphotography.com</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
