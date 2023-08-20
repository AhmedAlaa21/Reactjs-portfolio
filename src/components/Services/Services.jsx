import React, { useEffect,useRef } from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
import { useScrollContext } from "../../ScrollContext";


const Services = () => {
  const { setActiveIndex } = useScrollContext();
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;

      if (sectionTop <= window.innerHeight && sectionBottom >= 0) {
        setActiveIndex(3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setActiveIndex]);

  return (
    <section id="services" className="section" ref={sectionRef}>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>eCommerce Store Management</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Product management & Market Analysis</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Creating Eye Catchy Landing pages</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Dealing with Dropshipping stores worldwide</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Woocommerce full setup</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Applying Perfect themes according to owner's prespective</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Creative Ideas to get a good market share</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Converting Figma & PSD Desings to Full Optimized Website</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Interactive website with beautiful animations.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Readable & Reusable Code - Clean Code.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                React Hooks for state management & updating data. like useState
                & useEffect
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Fetching Restful APIs with Axios</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Google Maps & Others</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Creating trendy websites like Uber, kwai and TikTok </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_head">
            <h3>Digital Marketing</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Facebook & Instagram Marketing</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Tiktok and Snapchat campaigns</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Google & Youtube Ads</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Google Analytics & Daily Report</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Problem Solving according to Reports</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Making Successful Branding Journey</p>
            </li>
          </ul>
        </article>
        {/* END OF Conent Creation */}
      </div>
    </section>
  );
};

export default Services;
