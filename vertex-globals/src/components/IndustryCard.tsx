import React from 'react';
import Image from 'next/image';

interface IndustryCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, description, iconSrc, iconAlt }) => (
  <article className="industry-card" role="region" aria-labelledby={`industry-${title.replace(/\s+/g, '-').toLowerCase()}`}>
    <Image src={iconSrc} alt={iconAlt} width={64} height={64} />
    <h3 id={`industry-${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</h3>
    <p>{description}</p>
  </article>
);

export default IndustryCard;