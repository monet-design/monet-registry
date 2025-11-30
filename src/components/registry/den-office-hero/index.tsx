"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface NavItem {
  label: string;
  href: string;
}

interface NavGroup {
  items: NavItem[];
}

interface DenOfficeHeroProps {
  brandName?: string;
  headline?: string;
  exploreLabel?: string;
  exploreHref?: string;
  infoTitle?: string;
  infoDescription?: string;
  contactLabel?: string;
  contactHref?: string;
  brochureLabel?: string;
  brochureHref?: string;
  backgroundImage?: string;
  navGroups?: NavGroup[];
}

export default function DenOfficeHero({
  brandName = "theDen",
  headline = "The office that\nfeels like home",
  exploreLabel = "Explore",
  exploreHref = "#",
  infoTitle = "What is The Den?",
  infoDescription = "An easily accessible and high-quality office complex that aims to cultivate a strong sense of community. Turning spaces into vibrant, shared living environments where residents feel connected as part of a close-knit neighborhood within the city.",
  contactLabel = "Contact",
  contactHref = "#",
  brochureLabel = "Get Brochure",
  brochureHref = "#",
  backgroundImage = "/registry/den-office-hero/office-window-view.jpg",
  navGroups = [
    {
      items: [
        { label: "Building", href: "#" },
        { label: "Facilities", href: "#" },
        { label: "Location", href: "#" },
        { label: "Accessibility", href: "#" },
      ],
    },
    {
      items: [{ label: "Availability", href: "#" }],
    },
    {
      items: [
        { label: "Contact", href: "#" },
        { label: "Brochure", href: "#" },
      ],
    },
  ],
}: DenOfficeHeroProps) {
  const brandParts = brandName.match(/^(the)(.+)$/i);
  const brandItalic = brandParts ? brandParts[1] : "";
  const brandRegular = brandParts ? brandParts[2] : brandName;

  return (
    <section className="relative w-full bg-[#535854]">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Office window view"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex items-start justify-between px-8 py-6 md:px-12"
        >
          {/* Logo */}
          <div className="flex items-center gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white/90"
            >
              <circle cx="8" cy="8" r="3" fill="currentColor" />
              <circle cx="16" cy="8" r="3" fill="currentColor" />
              <circle cx="8" cy="16" r="3" fill="currentColor" />
              <circle cx="16" cy="16" r="3" fill="currentColor" />
            </svg>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-start gap-16">
            {navGroups.map((group, groupIndex) => (
              <ul key={groupIndex} className="flex flex-col gap-1">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href}
                      className="text-sm text-white/90 hover:text-white transition-colors font-light"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </motion.header>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-end min-h-[calc(70vh-100px)] px-8 pb-12 md:px-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            {/* Brand Name */}
            <h1
              className="text-4xl md:text-5xl text-white mb-2"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              <span className="italic">{brandItalic}</span>
              <span>{brandRegular}</span>
            </h1>

            {/* Headline */}
            <p
              className="text-3xl md:text-4xl text-white leading-tight whitespace-pre-line"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {headline}
            </p>

            {/* Explore Link */}
            <motion.a
              href={exploreHref}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block mt-8 text-sm text-white/90 hover:text-white transition-colors border-b border-white/60 pb-1 font-light"
            >
              {exploreLabel}
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-[#535854] px-8 py-12 md:px-12 md:py-16"
      >
        <div className="max-w-2xl mx-auto md:ml-[40%]">
          {/* Info Title */}
          <h2 className="text-lg md:text-xl text-white font-medium mb-6">
            {infoTitle}
          </h2>

          {/* Info Description */}
          <p className="text-base md:text-lg text-white/90 font-light leading-relaxed mb-8">
            {infoDescription}
          </p>

          {/* Action Links */}
          <div className="flex items-center gap-8 pt-4 border-t border-white/20">
            <a
              href={contactHref}
              className="text-sm text-white/90 hover:text-white transition-colors border-b border-white/60 pb-1 font-light"
            >
              {contactLabel}
            </a>
            <a
              href={brochureHref}
              className="text-sm text-white/90 hover:text-white transition-colors border-b border-white/60 pb-1 font-light"
            >
              {brochureLabel}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
