"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

const ServiceCard = ({ title, description, imageUrl, index }: ServiceCardProps) => {
  const [aosType, setAosType] = useState("zoom-in");

  useEffect(() => {
    if (window.innerWidth < 680) {
      setAosType(index % 2 === 0 ? "fade-left" : "fade-right");
    } else {
      setAosType("fade-up");
    }
  }, [index]);

  const delay =
    title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 400;

  return (
    <article
      className="card service-card"
      data-aos={aosType}
      data-aos-delay={ 500 + index * 150}
      data-aos-duration="600"
    >
      <Link href={`/services`}>
        <img src={imageUrl} alt={title} className="service-card-image" />
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
      </Link>
    </article>
  );
};

export default ServiceCard;
