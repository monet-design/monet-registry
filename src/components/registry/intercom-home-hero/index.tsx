"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { useEffect } from "react";

interface IntercomHomeHeroProps {
  logo?: React.ReactNode;
  navItems?: Array<{
    label: string;
    href?: string;
    hasDropdown?: boolean;
  }>;
  title?: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href?: string;
  };
  secondaryCta?: {
    label: string;
    href?: string;
  };
  videoCard?: {
    title: string;
    playLabel?: string;
  };
  trustSection?: {
    label: string;
    logos: Array<{
      name: string;
      logo?: React.ReactNode;
    }>;
  };
}

// Default Logo SVG component
function IntercomLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="28" height="28" rx="6" fill="#0154F0" />
        <path
          d="M7 9.5C7 9.22386 7.22386 9 7.5 9H8.5C8.77614 9 9 9.22386 9 9.5V16.5C9 16.7761 8.77614 17 8.5 17H7.5C7.22386 17 7 16.7761 7 16.5V9.5Z"
          fill="white"
        />
        <path
          d="M10.5 8C10.5 7.72386 10.7239 7.5 11 7.5H12C12.2761 7.5 12.5 7.72386 12.5 8V18C12.5 18.2761 12.2761 18.5 12 18.5H11C10.7239 18.5 10.5 18.2761 10.5 18V8Z"
          fill="white"
        />
        <path
          d="M15.5 8C15.5 7.72386 15.7239 7.5 16 7.5H17C17.2761 7.5 17.5 7.72386 17.5 8V18C17.5 18.2761 17.2761 18.5 17 18.5H16C15.7239 18.5 15.5 18.2761 15.5 18V8Z"
          fill="white"
        />
        <path
          d="M19 9.5C19 9.22386 19.2239 9 19.5 9H20.5C20.7761 9 21 9.22386 21 9.5V16.5C21 16.7761 20.7761 17 20.5 17H19.5C19.2239 17 19 16.7761 19 16.5V9.5Z"
          fill="white"
        />
        <path
          d="M7.5 19C7.5 19 9 21 14 21C19 21 20.5 19 20.5 19"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-white font-semibold text-lg tracking-tight">
        INTERCOM
      </span>
    </div>
  );
}

// Company logos for trust section
const defaultLogos = [
  { name: "SPACES" },
  { name: "amazon" },
  { name: "Frame.io" },
  { name: "Meta" },
  { name: "coda" },
  { name: "inter" },
  { name: "ATLASSIAN" },
  { name: "ClickTravel" },
];

export default function IntercomHomeHero({
  logo,
  navItems = [
    { label: "Products", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Customers" },
    { label: "Pricing" },
  ],
  title = "The only AI customer\nservice solution you need",
  subtitle = "The only solution that combines an AI chatbot, help desk, and proactive support—so you can keep costs low, support teams happy, and customers satisfied.",
  primaryCta = { label: "Start free trial", href: "#" },
  secondaryCta = { label: "View demo", href: "#" },
  videoCard = {
    title: "The next generation\ncustomer service platform\nbuilt for an AI-first world",
    playLabel: "Play with sound",
  },
  trustSection = {
    label: "TRUSTED BY +25,000 BUSINESSES",
    logos: defaultLogos,
  },
}: IntercomHomeHeroProps) {
  // Load Instrument Serif font
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-20 w-full bg-[#051428]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-10">
            {logo || <IntercomLogo />}

            {/* Nav Items */}
            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href || "#"}
                  className="flex items-center gap-1 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden text-sm text-gray-300 transition-colors hover:text-white lg:block"
            >
              Contact Sales
            </a>
            <a
              href="#"
              className="hidden text-sm text-gray-300 transition-colors hover:text-white lg:block"
            >
              Sign In
            </a>
            <a
              href={primaryCta.href}
              className="flex items-center gap-2 rounded-full bg-[#4385E9] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#3a77d6]"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={secondaryCta.href}
              className="hidden rounded-full border border-gray-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-gray-400 md:block"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#051428] via-[#1a2a3d] to-[#2d3d4f] pb-8 pt-16 md:pt-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl leading-tight text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
          >
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base text-gray-300 md:text-lg"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={primaryCta.href}
              className="flex items-center gap-2 rounded-full bg-[#4385E9] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#3a77d6]"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={secondaryCta.href}
              className="flex items-center gap-2 rounded-full border border-gray-500 px-6 py-3 text-sm font-medium text-white transition-all hover:border-gray-300"
            >
              {secondaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Video Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-12 max-w-5xl px-6"
        >
          <div className="relative overflow-hidden rounded-3xl bg-[#0154F0] p-8 md:p-16">
            {/* Play button */}
            <button className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-[#051428] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#0a2040]">
              {videoCard.playLabel}
              <Play className="h-4 w-4" fill="white" />
            </button>

            {/* Video card title */}
            <div className="flex min-h-[280px] items-center justify-center text-center md:min-h-[320px]">
              <h2
                className="text-3xl leading-tight text-white md:text-4xl lg:text-5xl"
                style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
              >
                {videoCard.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < videoCard.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust Section */}
      <div className="bg-[#F4F4F5] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 text-center text-xs font-semibold tracking-wider text-gray-600"
          >
            {trustSection.label}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {trustSection.logos.map((company, index) => (
              <div
                key={index}
                className="flex items-center text-gray-700"
              >
                {company.logo || (
                  <span
                    className={`text-sm font-semibold tracking-tight md:text-base ${
                      company.name === "amazon"
                        ? "text-lg font-bold md:text-xl"
                        : ""
                    }`}
                  >
                    {company.name}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
