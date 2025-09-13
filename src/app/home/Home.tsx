'use client';
import Button from "../components/Button";
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <section className="home-hero" aria-label="Hero banner">
      <div className="hero-section-content">
        <div className="copy">
          <h1 className="hero-title" data-aos="fade-up" data-aos-duration="800">Delivering Scalable BPO Solutions for a Global Market</h1>
          <p className="sub" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            Vertex Globals provides comprehensive Business Process Outsourcing (BPO) services tailored
            to meet the unique needs of businesses worldwide. Our solutions are designed to enhance
            efficiency, reduce costs, and drive growth.
          </p>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
            <Button className="mt-16" onClick={handleContactClick}> Contact Us </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
