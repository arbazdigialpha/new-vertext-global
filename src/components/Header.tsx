'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { TextAlignJustify, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/services', label: 'Services' },
  { href: '#', label: 'Industries' },
  { href: '#', label: 'Careers' }
  // { href: '/industries', label: 'Industries' },
  // { href: '/careers', label: 'Careers' }
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header>
      <div className="nav-container navbar section-container" role="banner">
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
        {/* Desktop Navigation */}
        <nav className="desktop-nav" role="navigation" aria-label="Primary navigation">
          <ul className="navbar-nav">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href} className="nav-item">
                  <Link
                    href={href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="hamburger-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <TextAlignJustify
            size={32}
            className={`hamburger-icon ${isMobileMenuOpen ? 'active' : ''}`}
            color='#1f2937'
          />
          {/* <List
            size={32}
            weight="bold"
            className={`hamburger-icon ${isMobileMenuOpen ? 'active' : ''}`}
          /> */}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <h3 className='mobile-menu-title'>Menu</h3>
          <button
            type="button"
            className="close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <span className="close-icon">
              <X strokeWidth={2} color='#fff' />
            </span>
          </button>
        </div>

        <nav className="mobile-nav" role="navigation" aria-label="Mobile navigation">
          <ul className="mobile-nav-list">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href} className="mobile-nav-item">
                  <Link
                    href={href}
                    className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;