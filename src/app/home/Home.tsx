'use client';
import { useRouter } from 'next/navigation';
import Banner from "../components/Banner";
import Button from "../components/Button";

const Home = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <Banner
      sectionClass="home-hero"
      title="Delivering Scalable BPO Solutions for a Global Market"
      description="Vertex Global provides comprehensive Business Process Outsourcing (BPO) services tailored to meet the unique needs of businesses worldwide. Our solutions are designed to enhance efficiency, reduce costs, and drive growth."
    >
      <Button className="mt-16" onClick={handleContactClick}>
        Contact Us
      </Button>
    </Banner>
  );
};

export default Home;
