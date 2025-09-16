'use client';
import Banner from "../components/Banner";

const ContactBanner = () => {
  const handleScroll = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Banner
      sectionClass="contact-hero home-hero"
      title="Get in Touch with Vertex Global"
      description="Reach us today via email, phone, or our online form. Our team is ready to help with outsourcing and BPO solutions."
    >
      {/* Down Arrow Animation */}
      <div className="arrow-container" onClick={handleScroll} role="button" tabIndex={0}>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </Banner>
  );
};

export default ContactBanner;
