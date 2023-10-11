import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/edriss.jpg";
import AVTR2 from "../../assets/placeholder.jpg";
import AVTR3 from "../../assets/placeholder.jpg";
import AVTR4 from "../../assets/nabout.png";
import AVTR5 from "../../assets/ahmedbasha.png";

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
      clientName: "Mohamed Edriss",
      review: "أحمد علاء مصمم مواقع متميز و الكود الخاص بيه ممتاز ..اللهم بارك",
    },
    {
      id: 5,
      imgPath: AVTR5,
      clientName: "Ahmed El-Basha",
      review: "ما شاء الله شغل محترم ..  شكرا",
    },
    {
      id: 3,
      imgPath: AVTR3,
      clientName: "Mohamed Hussein",
      review: "أرسلت لأحمد تصميم فيجما و نفذه بمنتهى الاحترافيه .. بالتوفيق",
    },
    {
      id: 4,
      imgPath: AVTR4,
      clientName: "Ahmed Nabout",
      review:
        "أحمد يعتبر شريكي من أيام الكلية و الشغل معاه مريح لأنه عنده القدرة على تنظيم الوقت و التاسكات",
    },
    {
      id: 2,
      imgPath: AVTR2,
      clientName: "Manal Mohamed",
      review:
        "طلبت من المهندس أحمد موقع و تم الاستلام قبل ميعاد التسليم و بجد بشكره جدا",
    },
  ];
  return (
    <section className="section" id="testimonials">
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
