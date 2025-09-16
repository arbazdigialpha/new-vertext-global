'use client';

interface BannerProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  sectionClass?: string;
}

const Banner = ({ title, description, children, sectionClass }: BannerProps) => {
  return (
    <section className={sectionClass || "default-hero"} aria-label="Page banner">
      <div className="hero-section-content">
        <div className="copy">
          <h1 
            className="hero-title" 
            data-aos="fade-up" 
            data-aos-duration="800"
          >
            {title}
          </h1>

          <p 
            className="sub" 
            data-aos="fade-up" 
            data-aos-delay="200" 
            data-aos-duration="800"
          >
            {description}
          </p>

          <div 
            data-aos="fade-up" 
            data-aos-delay="400" 
            data-aos-duration="800"
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
