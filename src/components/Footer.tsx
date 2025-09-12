'use client'
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, TwitterLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        {/* Left Section */}
        <div className="footer-brand">
          <div className="logo">
            <Link href="/" aria-label="Vertex Globals Home">
              <Image
                src="/images/logo/logo.svg"
                alt="Vertex Globals Logo"
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
            <a className="icons x-twitter" href="#">
            <XLogoIcon size={24} weight="fill" />
            </a>
            <a className="icons facebook" href="#">
              <FacebookLogoIcon size={24} weight="fill" />
            </a>
            <a className="icons instagram" href="#">
              <InstagramLogoIcon size={24} weight="fill" />
            </a>
            <a className="icons linkedin" href="#">
              <LinkedinLogoIcon size={24} weight="fill" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <nav className="footer-links" aria-labelledby="quick-links-heading">
          <h3 id="quick-links-heading">Quick Links</h3>
          <ul className="footer-link-list text-left">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/industries">Industries</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="footer-legal">
          <h3 className="text-left">Legal</h3>
          <ul className="footer-legal-list text-left">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="footer-bottom"></div>
    </footer>
  );
};

export default Footer;
