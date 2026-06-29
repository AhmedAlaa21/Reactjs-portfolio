import "./Services.css";
import { BiCheck } from "react-icons/bi";
import { servicesData } from "../../data";

const Services = () => {
  return (
    <section id="services" className="section">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        {servicesData.map((service) => (
          <article
            key={service.id}
            className={`service ${service.isFeatured ? "featured-service" : ""}`}
          >
            <div className="service_head">
              <h3>{service.title}</h3>
            </div>
            <ul className="service_list">
              {service.features.map((feature) => (
                <li key={feature}>
                  <BiCheck className="service_list_icon" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
