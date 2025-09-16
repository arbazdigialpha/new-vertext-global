import React from 'react';

interface SeoProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  breadcrumbItems?: { name: string; url: string }[];
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vertex Global",
  "url": "https://www.vertex-globals.com",
  "logo": "https://www.vertex-globals.com/images/logo-placeholder.webp",
  "sameAs": [
    "https://www.linkedin.com/company/vertex-globals",
    "https://www.facebook.com/vertex-globals"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vertex Global",
  "image": "https://www.vertex-globals.com/images/logo-placeholder.webp",
  "telephone": "+1-555-555-5555",
  "email": "connect@vertex-globals.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Corporate Blvd",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "USA"
  },
  "url": "https://www.vertex-globals.com"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.vertex-globals.com",
  "name": "Vertex Global",
  "publisher": {
    "@type": "Organization",
    "name": "Vertex Global",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.vertex-globals.com/images/logo-placeholder.webp"
    }
  }
};

const Seo: React.FC<SeoProps> = ({ title, description, url, image, breadcrumbItems }) => {
  const breadcrumbSchema = breadcrumbItems
    ? {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url,
      })),
    }
    : null;

  const pageUrl = url.startsWith('http') ? url : `https://www.vertex-globals.com${url}`;
  const imageUrl = image || 'https://www.vertex-globals.com/images/logo-placeholder.webp';

  // Note: In App Router, use metadata in layout.tsx or page.tsx instead
  // This component is kept for reference but won't render meta tags
  return null;
};

export default Seo;