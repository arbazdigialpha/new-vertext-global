"use client"
import { CheckIcon, ClockIcon, CurrencyInrIcon, ShieldCheckIcon } from "@phosphor-icons/react";
import { CircleGauge , Check , ShieldCheck , IndianRupee  } from "lucide-react";

const items = [
  {
    icon: <CircleGauge color="#1874d2" strokeWidth={2} />,
    title: "Speed",
    text:
      "We deliver solutions quickly and efficiently, ensuring your business stays ahead.",
  },
  {
    icon: <Check color="#1874d2" strokeWidth={2} />,
    title: "Accuracy",
    text:
      "Our processes are designed for precision, minimizing errors and maximizing quality.",
  },
  {
    icon: <ShieldCheck color="#1874d2" strokeWidth={2} />,
    title: "Reliability",
    text: "Count on us for consistent and dependable service, every time.",
  },
  {
    icon: <IndianRupee color="#1874d2" strokeWidth={2} />,
    title: "Cost-Effectiveness",
    text:
      "Optimize your budget with our competitive pricing and value-driven solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="home-why section-padding" aria-labelledby="why-choose-us-heading">
      <div className="section-container">
        <h2 id="why-choose-us-heading" className="section-heading" data-aos="zoom-in">Why Choose Us?</h2>
        <div className="why-choose-card card-arrangment small-card">
          {items.map((item, index) => (
            <article
              className="why-card"
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="600"
            >
              <span> {item.icon} </span>
              <h3 className="why-card-title card-title">{item.title}</h3>
              <p className="why-card-text card-content">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
