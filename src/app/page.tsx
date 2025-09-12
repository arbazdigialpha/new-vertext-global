import Home from "@/app/components/home/Home";
import Services from "@/app/components/home/Services";
import WhyChooseUs from "@/app/components/home/WhyChooseUs";
import Clients from "@/app/components/home/Clients";
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
