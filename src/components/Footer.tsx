'use client'
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "./icons/FacebookIcon";
import XTwitterIcon from "./icons/XTwitterIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        {/* Left Section */}
        <div className="footer-brand">
          <div className="logo">
            <Link href="/" aria-label="Vertex Global Home">
              <Image
                src="/images/logo/logo.svg"
                alt="Vertex Global Logo"
                width={150}
                height={40}
                priority
              />
            </Link>
          </div>
          <p className="tagline">
            Delivering Scalable BPO Solutions for a Global Market.
          </p>
          <div className="social-icons">
            <Link className="icons facebook" href="https://www.facebook.com/profile.php?id=100051918513440" target="_blank">
              <FacebookIcon size={24} color="#fff" />
            </Link>
            <Link className="icons instagram" href="https://www.instagram.com/vertex.globals/" target="_blank">
              <InstagramIcon size={22} color="#fff" />
            </Link>
            <Link className="icons x-twitter" href="https://x.com/vertexglobals" target="_blank">
              <XTwitterIcon size={20} color="#fff" />
            </Link>
            <Link className="icons linkedin" href="https://www.linkedin.com/in/vertex-globals-48620a383/" target="_blank">
              <LinkedinIcon size={20} color="#fff" />
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <nav className="footer-links" aria-labelledby="quick-links-heading">
          <h3 id="quick-links-heading" className="text-left">Quick Links</h3>
          <ul className="footer-link-list text-left">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/industries">Industries</Link>
              {/* <Link href="#">Industries</Link> */}
            </li>
            <li>
              <Link href="/careers">Careers</Link>
              {/* <Link href="#">Careers</Link> */}
            </li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="footer-legal">
          <h3 className="text-left">Legal</h3>
          <ul className="footer-legal-list text-left">
            <li>
              {/* <Link href="/privacy-policy">Privacy Policy</Link> */}
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              {/* <Link href="/terms-of-service">Terms of Service</Link> */}
              <Link href="#">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="footer-bottom"></div>
      <p className="copyright-text"> © 2025 Vertex Global Solutions. All rights reserved. </p>
    </footer>
  );
};

export default Footer;
