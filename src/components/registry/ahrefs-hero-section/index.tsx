"use client";

import { motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";

interface AhrefsHeroSectionProps {
  headline?: {
    line1?: string;
    line2?: string;
    line3?: string;
  };
  ctaButton?: {
    text?: string;
    href?: string;
  };
  secondaryCta?: {
    prefix?: string;
    linkText?: string;
    href?: string;
  };
  stats?: {
    count?: string;
    description?: string;
  };
  trustedByText?: string;
  logos?: Array<{
    name: string;
    svg?: React.ReactNode;
  }>;
  navItems?: Array<{
    label: string;
    href?: string;
    hasDropdown?: boolean;
  }>;
}

// Logo components
const PlayStationLogo = () => (
  <svg viewBox="0 0 120 24" fill="currentColor" className="h-5 w-auto">
    <path d="M15.4 7.9v12.4l-4.2-1.5v-16l4.2 1.5V7.9zm-9.2 8.4c-.6.2-1.2.3-1.7.3-1.3 0-2-.5-2-1.5 0-.8.4-1.3 1.4-1.7l2.3-.9v3.8zm4.2-1.8v-5l-4.2 1.5v-3l-3.8 1.4c-1.5.5-2.4 1.6-2.4 3.3 0 2.2 1.6 3.4 4.4 3.4 1.2 0 2.4-.2 3.6-.6l2.4-.9v-.1zM25.6 8.2v10.5c-1.2.5-2.7.9-4.4.9-3.2 0-4.9-1.4-4.9-4.2V8.2h4.2v6.4c0 1.2.5 1.7 1.5 1.7.4 0 .8-.1 1.2-.2V8.2h2.4zM27.6 8.2h4.2v11.5h-4.2V8.2zm2.1-5.5c1.2 0 2.1.8 2.1 1.9 0 1.2-.9 2-2.1 2s-2.1-.8-2.1-2c0-1.1.9-1.9 2.1-1.9zM41 8c2.8 0 4.6 1.8 4.6 4.6 0 3.1-2 5.1-5.2 5.1-.8 0-1.5-.1-2.2-.4v5.2h-4.2V8.6c1.5-.4 3.3-.6 5-.6h2zm-.6 6.5c1.1 0 1.8-.7 1.8-1.9 0-1.1-.6-1.7-1.6-1.7-.4 0-.8.1-1.2.2v3.2c.3.1.6.2 1 .2z" />
  </svg>
);

const UberLogo = () => (
  <svg viewBox="0 0 80 24" fill="currentColor" className="h-5 w-auto">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm20-12v8c0 2.2 1.8 4 4 4s4-1.8 4-4V8h-3v8c0 .6-.4 1-1 1s-1-.4-1-1V8h-3zm16 0c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4h4v-3h-4c-.6 0-1-.4-1-1h5v-4c0-2.2-1.8-4-4-4zm1 5h-2v-1c0-.6.4-1 1-1s1 .4 1 1v1zm7-5v5c0 .6.4 1 1 1s1-.4 1-1V8h3v5c0 2.2-1.8 4-4 4s-4-1.8-4-4V8h3zm13 4c0-2.2-1.8-4-4-4h-4v12h3v-4h.2l2.3 4H76l-2.8-4.4c1-.7 1.8-2 1.8-3.6zm-5 1v-2h1c.6 0 1 .4 1 1s-.4 1-1 1h-1z" />
  </svg>
);

const AdidasLogo = () => (
  <svg viewBox="0 0 80 24" fill="currentColor" className="h-5 w-auto">
    <path d="M45.5 17.8h3.1l4.3-9.1h-3.1l-2.6 5.8-2.6-5.8H41l4.5 9.1zm-7.4 0h2.8V8.7h-2.8v9.1zm14.2 0h2.8V8.7h-2.8v9.1zm14.4-6.4c0-1.6-1.1-2.9-3.2-2.9-1.9 0-3.4 1.2-3.4 3 0 1.6 1.1 2.5 2.7 2.8l1.2.2c.7.1 1 .4 1 .9 0 .6-.5 1-1.4 1-.9 0-1.5-.4-1.6-1.1h-2.7c.1 1.8 1.5 3 4.2 3 2.4 0 4-1.2 4-3.1 0-1.5-1-2.4-2.8-2.7l-1.2-.2c-.6-.1-.9-.4-.9-.8 0-.5.5-.9 1.2-.9.8 0 1.3.4 1.3 1h2.6v-.2zM24.8 8.5c-2.7 0-4.7 2-4.7 4.7 0 2.6 2 4.7 4.7 4.7 1.7 0 3.1-.8 3.9-2.1v1.9h2.7V8.7h-2.7v1.9c-.8-1.3-2.2-2.1-3.9-2.1zm.5 6.8c-1.3 0-2.3-1-2.3-2.2 0-1.2 1-2.2 2.3-2.2 1.3 0 2.3 1 2.3 2.2 0 1.2-1 2.2-2.3 2.2zm12.5-6.8c-1.7 0-3.1.8-3.9 2.1V8.7h-2.7v9.1h2.7v-1.9c.8 1.3 2.2 2.1 3.9 2.1 2.7 0 4.7-2 4.7-4.7 0-2.7-2-4.8-4.7-4.8zm-.5 6.8c-1.3 0-2.3-1-2.3-2.2 0-1.2 1-2.2 2.3-2.2 1.3 0 2.3 1 2.3 2.2 0 1.2-1 2.2-2.3 2.2zM9.1 14.9l5.7-9.2H9.3L5.4 12 9.1 5.7H3.4L0 11.2v.6l3.4 5.5h5.7l-3.7-6.3 3.9 6.3h5.5l-5.7-9.2v6.8z" />
  </svg>
);

const AlibabaLogo = () => (
  <svg viewBox="0 0 100 24" fill="currentColor" className="h-5 w-auto">
    <path d="M14.6 8.4c-1.3 0-2.4.5-3.2 1.3V6h-3v11.8h3v-5.2c0-1.2.8-2 1.9-2 1.1 0 1.7.7 1.7 1.8v5.4h3v-6c0-2.2-1.5-3.4-3.4-3.4zm12.5 0c-3.1 0-5.2 2-5.2 4.8s2.1 4.8 5.2 4.8c3.1 0 5.2-2 5.2-4.8s-2.1-4.8-5.2-4.8zm0 7c-1.4 0-2.2-1-2.2-2.2s.8-2.2 2.2-2.2c1.4 0 2.2 1 2.2 2.2s-.8 2.2-2.2 2.2zm17-7c-1.3 0-2.4.5-3.2 1.3V6h-3v11.8h3v-5.2c0-1.2.8-2 1.9-2 1.1 0 1.7.7 1.7 1.8v5.4h3v-6c0-2.2-1.5-3.4-3.4-3.4zM52.6 6h-3v11.8h3V6zm5.2 2.4c-1.3 0-2.4.5-3.2 1.3V8.6h-3v9.2h3v-5.2c0-1.2.8-2 1.9-2 1.1 0 1.7.7 1.7 1.8v5.4h3v-6c0-2.2-1.5-3.4-3.4-3.4zm19.8 4.8c0-2.8-2.1-4.8-5-4.8-3.1 0-5.2 2-5.2 4.8s2.1 4.8 5.2 4.8c2 0 3.6-.9 4.4-2.3l-2.4-1.2c-.4.7-1.1 1.1-2 1.1-1.2 0-2-.6-2.2-1.7h7.1c.1-.2.1-.5.1-.7zm-7.1-1.1c.2-1 .9-1.6 2-1.6 1 0 1.7.6 1.9 1.6h-3.9zm18.3 1.1c0-2.8-2.1-4.8-5-4.8-3.1 0-5.2 2-5.2 4.8s2.1 4.8 5.2 4.8c2 0 3.6-.9 4.4-2.3l-2.4-1.2c-.4.7-1.1 1.1-2 1.1-1.2 0-2-.6-2.2-1.7h7.1c.1-.2.1-.5.1-.7zm-7.1-1.1c.2-1 .9-1.6 2-1.6 1 0 1.7.6 1.9 1.6h-3.9zM6.9 8.4c-1.3 0-2.5.5-3.3 1.4V8.6H.8v9.2h2.8v-5.2c0-1.2.8-2 1.9-2 1.1 0 1.8.7 1.8 1.8v5.4h2.8v-6c0-2.2-1.4-3.4-3.2-3.4z" />
  </svg>
);

const WundermanLogo = () => (
  <svg viewBox="0 0 100 24" fill="currentColor" className="h-4 w-auto">
    <text x="0" y="16" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">
      WUNDERMAN
    </text>
    <text x="0" y="23" fontSize="8" fontWeight="bold" fontFamily="Arial, sans-serif">
      THOMPSON
    </text>
  </svg>
);

// Star emoji component
const StarEmoji = () => (
  <span className="inline-block mx-1">
    <svg viewBox="0 0 36 36" className="w-12 h-12 md:w-16 md:h-16 inline-block align-middle">
      <path
        fill="#FFDC00"
        d="M18 2l4.5 11.5L35 14l-9.5 7.5L28 35l-10-6.5L8 35l2.5-13.5L1 14l12.5-.5z"
      />
      <circle cx="12" cy="14" r="1.5" fill="#1a1a1a" />
      <circle cx="22" cy="14" r="1.5" fill="#1a1a1a" />
      <path
        d="M14 19c0 0 2 3 4 3s4-3 4-3"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

// Mountain emoji component
const MountainEmoji = () => (
  <span className="inline-flex gap-0.5 mx-1 align-middle">
    <svg viewBox="0 0 36 36" className="w-10 h-10 md:w-14 md:h-14 inline-block">
      <path fill="#269" d="M2 28L14 8l12 20z" />
      <path fill="#55ACEE" d="M14 8l-3 5 3 4 3-4z" />
    </svg>
    <svg viewBox="0 0 36 36" className="w-10 h-10 md:w-14 md:h-14 inline-block -ml-4">
      <path fill="#5DADEC" d="M8 28L20 10l12 18z" />
      <path fill="#CCD6DD" d="M20 10l-4 6 4 5 4-5z" />
      <circle cx="28" cy="8" r="3" fill="#E1E8ED" />
    </svg>
  </span>
);

// Heart emoji for stats
const HeartEmoji = () => (
  <svg viewBox="0 0 36 36" className="w-6 h-6 inline-block">
    <path
      fill="#FFAC33"
      d="M18 32.5C8.6 25.2 3 19.4 3 13.5 3 8.8 6.8 5 11.5 5c2.8 0 5.4 1.4 7 3.5C20.1 6.4 22.7 5 25.5 5 30.2 5 34 8.8 34 13.5c0 5.9-5.6 11.7-15 19z"
    />
  </svg>
);

const defaultLogos = [
  { name: "PlayStation", svg: <PlayStationLogo /> },
  { name: "Uber", svg: <UberLogo /> },
  { name: "adidas", svg: <AdidasLogo /> },
  { name: "Alibaba", svg: <AlibabaLogo /> },
  { name: "Wunderman Thompson", svg: <WundermanLogo /> },
];

const defaultNavItems = [
  { label: "Tools", hasDropdown: true },
  { label: "Our data", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Enterprise", hasDropdown: false },
];

export default function AhrefsHeroSection({
  headline = {
    line1: "Everything you need",
    line2: "to rank higher",
    line3: "& get more traffic",
  },
  ctaButton = {
    text: "Sign up for Ahrefs",
    href: "#",
  },
  secondaryCta = {
    prefix: "Or get a free",
    linkText: "Ahrefs Webmaster Tools account",
    href: "#",
  },
  stats = {
    count: "13,708 users",
    description: "joined Ahrefs in the last 7 days",
  },
  trustedByText = "Ahrefs is trusted by marketers from the world's leading companies.",
  logos = defaultLogos,
  navItems = defaultNavItems,
}: AhrefsHeroSectionProps) {
  return (
    <section className="relative w-full bg-[#034BDB] overflow-hidden">
      {/* Google Font for Instrument Serif */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
        .headline-italic {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: italic;
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="#" className="text-white text-2xl font-bold italic">
            ahrefs
          </a>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href || "#"}
                className="text-white/90 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>
        </div>

        {/* Right side nav */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
          >
            <span className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white/70" />
            </span>
            Sign in
          </a>
          <button className="bg-[#1a1a1a] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#333] transition-colors">
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 md:py-24 lg:py-32">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="headline-italic text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-4xl"
        >
          <span className="block">{headline.line1}</span>
          <span className="block">
            to <StarEmoji /> {headline.line2?.replace("to ", "")}
          </span>
          <span className="block">
            {headline.line3} <MountainEmoji />
          </span>
        </motion.h1>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-10 md:mt-12"
        >
          {/* Primary CTA Button */}
          <a
            href={ctaButton.href}
            className="bg-[#F6A43A] hover:bg-[#e89a30] text-white font-semibold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
          >
            {ctaButton.text}
          </a>

          {/* Secondary CTA */}
          <div className="text-white/90 text-sm">
            <span>{secondaryCta.prefix} </span>
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="#FFDC00" />
                <circle cx="9" cy="10" r="1" fill="#1a1a1a" />
                <circle cx="15" cy="10" r="1" fill="#1a1a1a" />
                <path d="M8 14c0 0 2 2 4 2s4-2 4-2" stroke="#1a1a1a" strokeWidth="1" fill="none" />
              </svg>
              <a
                href={secondaryCta.href}
                className="text-[#FFDC00] hover:underline font-medium"
              >
                Ahrefs
              </a>
            </span>
            <br />
            <a
              href={secondaryCta.href}
              className="text-[#FFDC00] hover:underline font-medium inline-flex items-center gap-1"
            >
              Webmaster Tools <span>account</span> <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <HeartEmoji />
            <div>
              <span className="text-[#FFDC00] font-semibold">{stats.count}</span>
              <span className="ml-1">{stats.description?.split(" ").slice(0, 2).join(" ")}</span>
              <br />
              <span>{stats.description?.split(" ").slice(2).join(" ")}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Logo Cloud Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 bg-white py-8 px-6"
      >
        <div className="max-w-6xl mx-auto">
          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-4">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {logo.svg || (
                  <span className="font-bold text-lg">{logo.name}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Trust text */}
          <p className="text-gray-500 text-sm text-center">{trustedByText}</p>
        </div>
      </motion.div>
    </section>
  );
}
