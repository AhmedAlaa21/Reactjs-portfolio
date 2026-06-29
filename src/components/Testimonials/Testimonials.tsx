import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import "./Testimonials.css";
import { testimonials } from "../../data";

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 50;

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const review = testimonials[activeIndex];

  const goTo = useCallback((index: number) => {
    const total = testimonials.length;
    setActiveIndex(((index % total) + total) % total);
  }, []);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsPaused(false);
    if (info.offset.x < -SWIPE_THRESHOLD) goNext();
    else if (info.offset.x > SWIPE_THRESHOLD) goPrev();
  };

  const handleBulletClick = (index: number) => {
    goTo(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), AUTOPLAY_MS);
  };

  return (
    <section className="section testimonials_section" id="testimonials">
      <h5>Review from colleagues</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_wrapper">
        <div
          className="testimonial_viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={review.id}
              className="testimonial_slide"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragStart={() => setIsPaused(true)}
              onDragEnd={handleDragEnd}
            >
              <div className="client_info">
                <div className="client_avatar">
                  <img src={review.imgPath} alt={review.clientName} />
                </div>
                <h5 className="client_name">{review.clientName}</h5>
                <p className="client_role">{review.role}</p>
              </div>

              <div className="testimonial_card">
                <blockquote className="client_review" cite={review.clientName}>
                  <p>
                    <span className="quote_mark quote_mark--open">&ldquo;</span>
                    {review.review}
                    <span className="quote_mark quote_mark--close">&rdquo;</span>
                  </p>
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <nav
          className="testimonials_pagination"
          aria-label={`Testimonial navigation, ${testimonials.length} reviews`}
        >
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`testimonials_bullet${
                index === activeIndex ? " testimonials_bullet--active" : ""
              }`}
              onClick={() => handleBulletClick(index)}
              aria-label={`Show testimonial from ${item.clientName}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Testimonials;
