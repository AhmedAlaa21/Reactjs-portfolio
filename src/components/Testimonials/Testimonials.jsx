import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      imgPath: AVTR1,
      clientName: "Tina Snow",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atquererum aperiam nisi, voluptate necessitatibus nesciunt sapientenatus nemo neque. Praesentium perspiciatis quidem repudiandae aliquid odio eum esse nam veritatis laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores quae saepe! Accusamus ratione perspiciatis, repellendus architecto reprehenderit perferendis quos unde sequi distinctio. Maxime eum at consectetur veniam veritatis qui!",
    },
    {
      id: 2,
      imgPath: AVTR2,
      clientName: "Shatta Wale",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atquererum aperiam nisi, voluptate necessitatibus nesciunt sapientenatus nemo neque. Praesentium perspiciatis quidem repudiandae aliquid odio eum esse nam veritatis laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores quae saepe! Accusamus ratione perspiciatis, repellendus architecto reprehenderit perferendis quos unde sequi distinctio. Maxime eum at consectetur veniam veritatis qui!",
    },
    {
      id: 3,
      imgPath: AVTR3,
      clientName: "Kwame Despite",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atquererum aperiam nisi, voluptate necessitatibus nesciunt sapientenatus nemo neque. Praesentium perspiciatis quidem repudiandae aliquid odio eum esse nam veritatis laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores quae saepe! Accusamus ratione perspiciatis, repellendus architecto reprehenderit perferendis quos unde sequi distinctio. Maxime eum at consectetur veniam veritatis qui!",
    },
    {
      id: 4,
      imgPath: AVTR4,
      clientName: "Ernest Acheiver",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atquererum aperiam nisi, voluptate necessitatibus nesciunt sapientenatus nemo neque. Praesentium perspiciatis quidem repudiandae aliquid odio eum esse nam veritatis laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maiores quae saepe! Accusamus ratione perspiciatis, repellendus architecto reprehenderit perferendis quos unde sequi distinctio. Maxime eum at consectetur veniam veritatis qui!",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {reviews.map((review) => {
          return (
            <SwiperSlide className="testimonial" key={review.id}>
              <div className="client_avatar">
                <img src={review.imgPath} alt="Avatar One" />
              </div>
              <h5 className="client_name">{review.clientName}</h5>
              <small className="client_review">{review.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
