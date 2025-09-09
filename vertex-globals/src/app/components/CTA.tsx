'use client';
import { useRouter } from 'next/navigation';

const CTA = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <section aria-labelledby="cta-heading" className="section-padding clients-section cta-section">
      <h2 id="cta-heading" className="section-heading" data-aos="fade-up">Ready to Grow Your Business?</h2>
      <p className="cta-text" data-aos="fade-up" data-aos-delay="200">
        Partner with Vertex Globals and unlock the full potential of your business with
        our innovative solutions.
      </p>
      <div data-aos="fade-up" data-aos-delay="400">
        <button className="btn contact-us-btn" onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTA;
