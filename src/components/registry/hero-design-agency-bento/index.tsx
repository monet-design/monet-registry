"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface HeroDesignAgencyBentoProps {
  logoText?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  headline?: string;
  subheadline?: string;
  aboutButtonText?: string;
  blueCardBadge?: string;
  blueCardTitle?: string;
  orangeCardText?: string;
  heroImage?: string;
  buildingImage?: string;
}

export default function HeroDesignAgencyBento({
  logoText = "NUTS\nDEV",
  navItems = [
    { label: "Solutions", href: "#", hasDropdown: true },
    { label: "Portfolio", href: "#" },
    { label: "Services", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
  ],
  ctaButtonText = "Let's Talk",
  headline = "We do design for\nbetter experience",
  subheadline = "Clients should love your digital look.\nWe at NutsDev help to make it happen.",
  aboutButtonText = "About Us",
  blueCardBadge = "Fixed Price",
  blueCardTitle = "Discover our\nunbeatable Real\nEstate solutions",
  orangeCardText = "Let's talk!\nHave a project in\nmind? Let us know\nhow we can help",
  heroImage = "/registry/hero-design-agency-bento/abstract-waves.jpg",
  buildingImage = "/registry/hero-design-agency-bento/modern-houses.jpg",
}: HeroDesignAgencyBentoProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#FDF5F0] p-4 md:p-6">
      {/* Main Grid Layout */}
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-[1fr_340px] lg:grid-cols-[1fr_380px]">
        {/* Left Column - Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-white"
        >
          {/* Navigation */}
          <nav className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between p-4 md:p-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-bold leading-tight tracking-tight text-[#F56623]"
                style={{ whiteSpace: "pre-line" }}
              >
                {logoText.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                    {i === 1 && (
                      <span className="inline-block -translate-y-0.5">&gt;</span>
                    )}
                  </span>
                ))}
              </span>
            </div>

            {/* Nav Items */}
            <div className="hidden items-center gap-1 rounded-full bg-white/95 px-2 py-2 shadow-sm backdrop-blur-sm md:flex">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:text-gray-900"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  )}
                </a>
              ))}
              <button className="ml-2 flex items-center gap-2 rounded-full bg-[#F56623] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#e05a1c]">
                {ctaButtonText}
                <ArrowRight className="h-4 w-4 -rotate-45" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="rounded-lg bg-white/90 p-2 md:hidden">
              <div className="space-y-1.5">
                <div className="h-0.5 w-5 bg-gray-800" />
                <div className="h-0.5 w-5 bg-gray-800" />
                <div className="h-0.5 w-5 bg-gray-800" />
              </div>
            </button>
          </nav>

          {/* Hero Image */}
          <div className="relative aspect-[4/3] w-full md:aspect-auto md:h-[520px]">
            <img
              src={heroImage}
              alt="Abstract design"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 bg-white p-6 md:right-auto md:w-[65%] md:rounded-tr-[48px] md:p-8 lg:p-10"
          >
            <h1
              className="text-3xl font-normal leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                whiteSpace: "pre-line",
              }}
            >
              {headline}
            </h1>
            <p
              className="mt-4 text-sm leading-relaxed text-gray-600 md:mt-6 md:text-base"
              style={{ whiteSpace: "pre-line" }}
            >
              {subheadline}
            </p>
            <button className="mt-6 rounded-full bg-[#F56623] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#e05a1c] md:mt-8">
              {aboutButtonText}
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column - Cards */}
        <div className="flex flex-col gap-4">
          {/* Blue Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex-1 overflow-hidden rounded-3xl bg-[#1E8BA8]"
          >
            {/* Badge */}
            <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-gray-900/80 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#F56623]" />
              <span className="text-xs font-medium text-white">
                {blueCardBadge}
              </span>
            </div>

            {/* Card Title */}
            <div className="absolute left-4 top-14 z-10 pr-4 md:left-5 md:top-16">
              <h2
                className="text-xl font-normal leading-tight text-white md:text-2xl"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  whiteSpace: "pre-line",
                }}
              >
                {blueCardTitle}
              </h2>
            </div>

            {/* Building Image */}
            <div className="absolute bottom-0 right-0 h-[60%] w-[85%]">
              <img
                src={buildingImage}
                alt="Modern buildings"
                className="h-full w-full rounded-tl-2xl object-cover"
              />
            </div>

            {/* Arrow Button */}
            <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white transition-transform hover:scale-105">
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>

          {/* Orange Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative overflow-hidden rounded-3xl bg-[#F56623] p-5 md:p-6"
          >
            <p
              className="text-lg font-normal leading-snug text-white md:text-xl"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                whiteSpace: "pre-line",
              }}
            >
              {orangeCardText}
            </p>

            {/* Arrow Button */}
            <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white transition-transform hover:scale-105">
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Google Font Import */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap");
      `}</style>
    </section>
  );
}
