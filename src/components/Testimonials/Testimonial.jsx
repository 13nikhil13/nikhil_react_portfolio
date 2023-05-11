import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1, //firoz sir
      review:
      "Hi! I am Firoz Khan, Your web development skills are top-notch! The website you created exceeded my expectations with its stunning design and seamless functionality. Thank you for your exceptional work.",
    },
    {
      img: profilePic2, //aditya
      review:
      "Hi! I am Additya Kashyap, Your web development skills are impressive. The website you built is user-friendly, responsive, and visually appealing. Thank you for your hard work!",
    },
    {
      img: profilePic3, //sis
      review:
      "I'm blown away by your web development skills! The website you built is flawless in both design and functionality. It's been a pleasure working with such a talented developer.",    
    },
    {
      img: profilePic4, //bhai
      review:
      "Hi! I am Shubham Kakkar, You are a true web development expert! The website you developed is not only visually stunning but also highly functional and easy to navigate. Thank you for your outstanding work.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
