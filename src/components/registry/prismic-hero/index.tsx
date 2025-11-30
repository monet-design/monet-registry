"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface PrismicHeroProps {
  logoText?: string;
  announcementBadge?: string;
  announcementText?: string;
  announcementLink?: string;
  announcementLinkText?: string;
  navItems?: NavItem[];
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  loginText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  illustrationSrc?: string;
}

// Logo SVG Component
function PrismicLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="6" fill="#5163BA" />
      <path
        d="M8 10C8 8.89543 8.89543 8 10 8H14C15.1046 8 16 8.89543 16 10V14C16 15.1046 15.1046 16 14 16H10C8.89543 16 8 15.1046 8 14V10Z"
        fill="white"
      />
      <path
        d="M12 14C12 12.8954 12.8954 12 14 12H18C19.1046 12 20 12.8954 20 14V18C20 19.1046 19.1046 20 18 20H14C12.8954 20 12 19.1046 12 18V14Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#", hasDropdown: true },
  { label: "Showcase", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#", hasDropdown: true },
];

export default function PrismicHero({
  logoText = "prismic",
  announcementBadge = "New Website",
  announcementText = "We spent 9 months refreshing our website, learn from our experience",
  announcementLink = "#",
  announcementLinkText = "Read the blog",
  navItems = defaultNavItems,
  headline = "From website to\ngrowth engine",
  description = "Prismic is the headless website builder that lets developers and marketers ship and iterate faster, and build sites that just keep getting better.",
  primaryButtonText = "Start building",
  secondaryButtonText = "Get a demo",
  loginText = "Login",
  onPrimaryClick,
  onSecondaryClick,
  illustrationSrc = "/registry/prismic-hero/illustration.png",
}: PrismicHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Announcement Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-3 bg-[#F8F8F8] px-4 py-2.5 border-b border-[#EBEBEB]"
      >
        <span className="rounded-full bg-[#E8E8E8] px-3 py-1 text-xs font-medium text-[#1A1A1A]">
          {announcementBadge}
        </span>
        <span className="text-sm text-[#4A4A4A]">{announcementText}</span>
        <a
          href={announcementLink}
          className="text-sm font-medium text-[#1A1A1A] underline underline-offset-2 hover:no-underline"
        >
          {announcementLinkText}
        </a>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <PrismicLogo />
          <span className="text-lg font-semibold text-[#1A1A1A]">{logoText}</span>
        </div>

        {/* Nav Items - Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-sm text-[#4A4A4A] transition-colors hover:text-[#1A1A1A]"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown className="h-4 w-4" strokeWidth={2} />
              )}
            </a>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden text-sm text-[#4A4A4A] transition-colors hover:text-[#1A1A1A] sm:block"
          >
            {loginText}
          </a>
          <button className="hidden rounded-lg border border-[#E0E0E0] bg-white px-4 py-2 text-sm font-medium text-[#1A1A1A] transition-colors hover:border-[#C0C0C0] hover:bg-[#F8F8F8] sm:block">
            {secondaryButtonText}
          </button>
          <button
            onClick={onPrimaryClick}
            className="rounded-lg bg-[#1A1A1A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#333333]"
          >
            {primaryButtonText}
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-12 sm:px-10 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:pt-20">
        {/* Left Content */}
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl"
          >
            {headline.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base leading-relaxed text-[#6A6A6A] sm:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onPrimaryClick}
              className="rounded-lg bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#333333] hover:shadow-lg"
            >
              {primaryButtonText}
            </button>
            <button
              onClick={onSecondaryClick}
              className="rounded-lg border border-[#1A1A1A] bg-white px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-all hover:bg-[#F8F8F8]"
            >
              {secondaryButtonText}
            </button>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
            <Image
              src={illustrationSrc}
              alt="Website builder illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
