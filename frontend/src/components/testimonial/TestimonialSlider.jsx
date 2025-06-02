// TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialSlider.css";
import { testimonial } from "../../../data";

const TestimonialSlider = () => {
  return (
    <div className="wrapper">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonial.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial-card">
              <h2>//</h2>
              <p className="message">"{item.message}"</p>
              <h4 className="name">- {item.name}</h4>
              <p className="profession">{item.profession}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
