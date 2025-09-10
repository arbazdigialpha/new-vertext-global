import ServiceCard from "@/app/components/ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Non-Voice Process Outsourcing",
      description:
        "Streamline your non-voice operations with our expert outsourcing solutions.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBXynDliZpVsB-aTTIPiudPOcLvd1GcNiHzRIps2Q08x5iJxS8f8r-qytrby0BKbi3FnUF4NJ_VLX0HvFvsPukX3knOQReN3ds-xdVi6so-stuvvwJyRKwR4o4BNJZ8BB6wfvwCSAtHV6lOyJ3U806BHeYo0W24e1sOAhPRC6M7Owms-8O37tPYdLT8z9NNIephOYROMLr0KDwCAaSHKw7qoXP0A1yfXpDvzmKWiWR96bvlxHH18QDEd2tEToNKt46CDPTsLpvLeZo",
    },
    {
      title: "Data Processing & Back Office",
      description:
        "Enhance efficiency with our comprehensive data processing and back-office services.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDDnKG_hnXfNmAhwUWVYfazNqKgFLQ4Qwzg1pBRuOSHPaJ6wAGzDb7i7RDgR4IS5sDzphpUXg_K-TERZ_v4mhWGKl5AyPYMzPUwqudNKTwxQ2-kgtdSyQBNMSaqRXNH9-TZuBh_D75DvCSAjF2WaYQt-GUT5KoUP5XkvAMfnfhjifnOcGnFSfCJCz15LdgizMTqzrQVf9IWzdWwZJ2R_AVm4ZtuKb5leLToJuw9bEiEjRA73UhrNT7VKpi3PLUF1C5mX7c_-FN7X68",
    },
    {
      title: "Customer Email & Chat Support",
      description:
        "Provide exceptional customer service through our email and chat support solutions.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBZGhpp6JI4B41gDNkyLBQy9U8P-XOHPeBiehQjAnY2ALHi4SKc2--k4cPz6I4BzLWBQ4yMuRPhiMoEMKUKCa58ySu_PMrpwsEl3SxX70mE7ZUJO_EFcYxkEyighCH62tVt3i60mbl2yItWjKHXEeICWl9FwfoSRq4AGzwXs_uorn7jY0--JB8qIMuEoaLffkWzPvE-nmJw7KBfxtesOmtsXwjhy2sa-dvt_qj9-PZlkvh8bLHE-P-J-2KF2RvH_PN2Kjx_Eu23xUc",
    },
    {
      title: "Document Management",
      description:
        "Efficiently manage your documents with our advanced document management services.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDE_B4lR5DU_BcY0d9thHPXfl3OTu53hChGG97s9NfiZ9qp7QAtWEGAjs66xLlmJFCJkzH-LyWethveuHOpsFaqNsP3wHCqJwA6O4E8SVyoGXPWmrMjK8a1a5jLVCv8GDX36EAVVQH2hhku7Pr72EcpkXHibzpYe61xHIQHRuOoons4D2N1_RC-FRVJrtRymY6yoOxnpVR_J-2ag9z6oWTj3nV3ROsQB0xMXqsCRJeF319poETmhr78JmLcyAw2B5WPwChhV2vjb3Q",
    },
  ];

  return (
    <section className="services-section section-padding bg-light-gray">
      <div className="container section-container">
        <h2 id="services-heading" aria-labelledby="services-heading" className="section-heading" data-aos="zoom-in">Our Services</h2>
        <div className="services__list card-arrangment">
          {services.map((service , i) => (
            <ServiceCard
              key={service.title.replace(/\s+/g, '-').toLowerCase()}
              index={i}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
