import Home from "@/app/home/Home";
import Services from "@/app/home/Services";
import WhyChooseUs from "@/app/home/WhyChooseUs";
import Clients from "@/app/home/Clients";
import CTA from "@/app/components/CTA";

const HomePage = () => {
  return (
    <>
      <Home />
      <Services />
      <WhyChooseUs />
      <Clients />
      <CTA />
    </>
  );
};

export default HomePage;
