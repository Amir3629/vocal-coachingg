"use client"

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface NavigationLink {
  href: string;
  label: string;
}

export default function MainNavigation() {
  const { t } = useTranslation();
  
  const links: NavigationLink[] = [
    { href: '/', label: t('nav.home', 'Home') },
    { href: '/services', label: t('nav.services', 'Services') },
    { href: '/about', label: t('nav.about', 'About') },
    { href: '/contact', label: t('nav.contact', 'Contact') },
  ];
  
  return (
    <nav className="flex items-center space-x-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-white hover:text-white/80 transition-colors duration-300"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
} 