import Carousel from "../components/Carousel";

const Clients = () => {
  return (
    <section aria-label="Client logos and testimonials " className="container section-padding clients-section bg-light-gray">
      <h2 className="section-heading" data-aos="zoom-in">Our Clients</h2>

      <div>
        <Carousel autoPlay={false} showArrows={true} showDots={true} slidesToShow={4}>
          <div className="logo-item">
            <img src="/images/client1.png" alt="Client 1 logo" />
          </div>
          <div className="logo-item">
            <img src="/images/client2.png" alt="Client 2 logo" />
          </div>
          <div className="logo-item">
            <img src="/images/client3.png" alt="Client 3 logo" />
          </div>
          <div className="logo-item">
            <img src="/images/client4.png" alt="Client 4 logo" />
          </div>
          <div className="logo-item">
            <img src="/images/client5.png" alt="Client 5 logo" />
          </div>
          <div className="logo-item">
            <img src="/images/client6.png" alt="Client 6 logo" />
          </div>
          <div className="logo-item">
            <img src="/images/client7.png" alt="Client 7 logo" />
          </div>
          <div className="logo-item">
            <img src="/images/client8.png" alt="Client 8 logo" />
          </div>
          <div className="logo-item">
            <img src="/images/client9.png" alt="Client 9 logo" />
          </div>
          <div className="logo-item">
            <img src="/images/client10.png" alt="Client 10 logo" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;
