import "./package.css";
import React from "react";
import { services, testimonial } from "../../../data";
import TestimonialSlider from "../../components/testimonial/TestimonialSlider";
import { Link } from "react-router-dom";

function Package() {
  return (
    <main>
      <section className="first-content">
        <div className="first-wrapper">
          <h1>Our Packages</h1>

          <p>We offer the Highest Quality for the Best Price.</p>
        </div>
      </section>
      <section className="second-content">
        <div className="second-wrapper">
          <div className="center-2">
            <p>Choose A Package</p>
          </div>

          <div className="booking-display">
            {services.map((pick) => (
              <div key={pick.id} className="pick">
                <div className="opacity">
                  <img src={pick.img} alt="" />
                  <div className="box-content">
                    <h1>{pick.title}</h1>
                  </div>

                  <Link to={pick.link}>
                    <button className="details">
                      <p>View details</p>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="third-content">
        <div className="third-wrapper">
          <div className="center-3">
            <h1>Testimonials</h1>
          </div>
          <div className="comments">
            <TestimonialSlider />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Package;
