import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

// Mock data for services
const servicesData = [
  {
    id: 1,
    title: "eCommerce Development",
    features: [
      "ReactJS-powered ecommerce websites with dynamic interfaces",
      "WooCommerce full setup and customization",
      "Optimized cart and checkout processes",
      "Secure payment integration and SSL implementation",
      "Performance optimization for better conversions",
      "Mobile-responsive design for all devices"
    ],
    isFeatured: false
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    features: [
      "React & Next.js applications with TypeScript",
      "Server-side rendering and static generation",
      "RESTful APIs and GraphQL integration",
      "Database design and management",
      "Authentication & authorization systems",
      "Cloud deployment and hosting",
      "Performance optimization and SEO",
      "Testing and quality assurance",
      "Ongoing support and maintenance"
    ],
    isFeatured: true
  },
  {
    id: 3,
    title: "Mobile App Development",
    features: [
      "Cross-platform React Native applications",
      "Native iOS and Android development",
      "App Store and Google Play deployment",
      "Push notifications and offline functionality",
      "API integration and backend connectivity",
      "Performance optimization and testing",
      "App maintenance and updates"
    ],
    isFeatured: false
  }
];

const Services = () => {
  return (
    <section id="services" className="section">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        {servicesData.map((service) => (
          <article 
            key={service.id} 
            className={`service ${service.isFeatured ? 'featured-service' : ''}`}
          >
            <div className="service_head">
              <h3>{service.title}</h3>
            </div>
            <ul className="service_list">
              {service.features.map((feature, index) => (
                <li key={index}>
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
