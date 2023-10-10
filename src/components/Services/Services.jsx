import React, { useEffect, useRef } from "react";
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveIndex]);

  return (
    <section id="services" className="section" ref={sectionRef}>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>eCommerce Store Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Create vibrant and dynamic ecommerce websites using ReactJS.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Craft engaging user interfaces for an immersive shopping
                experience.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Implement smooth navigation and product browsing for users.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Woocommerce full setup</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Optimize cart functionality for streamlined shopping processes.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Ensure safe and secure payment transactions for customers' peace
                of mind.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Tailor solutions to suit unique ecommerce needs and branding.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              Enhance site speed and performance to boost user satisfaction and
              conversions.
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
              <p>
                Develop modern web applications leveraging React and Next.js for
                superior performance.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Harness Next.js for rapid server-side rendering and seamless
                routing, ensuring swift user experiences.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Design polished, responsive interfaces that captivate users and
                drive engagement.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Engineer robust, scalable codebases to accommodate future growth
                and changing needs.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Maximize visibility on search engines with Next.js' server-side
                rendering capabilities.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Prioritize lightning-fast page loads and a fluid, delightful
                user journey.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Customize solutions to align precisely with specific project
                requirements and objectives.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Engage clients closely in an iterative process to realize their
                vision effectively.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Offer ongoing assistance and updates, ensuring the application
                remains optimal and up-to-date.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Remain at the forefront of industry trends to deliver innovative
                web solutions that leave a lasting impact.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_head">
            <h3>Mobile Apps Development (iOS + Android)</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Engineer mobile applications using React Native for a consistent
                user experience across iOS and Android.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Leverage React Native's efficiency for swift development,
                enhancing productivity without compromising quality.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Deliver apps with a native look and feel, providing users with a
                smooth and engaging interaction.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Manage resources effectively by maintaining a single codebase
                for both iOS and Android platforms, reducing time and costs.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Customize applications to align with unique project needs and
                brand identity, ensuring a personalized touch.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Easily maintain and update applications, thanks to React
                Native's streamlined debugging and easy-to-implement changes.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Construct applications that are ready to embrace future mobile
                advancements, ensuring long-term relevance and scalability.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF Conent Creation */}
      </div>
    </section>
  );
};

export default Services;
