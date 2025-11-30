"use client";

import { motion } from "motion/react";
import { Menu } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href?: string;
}

interface CtaButton {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface RivianHeroProps {
  announcementText?: string;
  announcementLinkText?: string;
  onAnnouncementClick?: () => void;
  logoText?: string;
  navItems?: NavItem[];
  rightNavItems?: NavItem[];
  headline?: string;
  superscript?: string;
  subheadline?: string;
  ctaButtons?: CtaButton[];
  backgroundImage?: string;
  onMenuClick?: () => void;
}

// Rivian-style logo text
function RivianLogo({ text = "RIVIAN" }: { text?: string }) {
  return (
    <span
      className="text-white text-lg tracking-[0.3em] font-light"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {text}
    </span>
  );
}

export default function RivianHero({
  announcementText = "Want to see what we're up to?",
  announcementLinkText = "Get updates from Rivian.",
  onAnnouncementClick,
  logoText = "RIVIAN",
  navItems = [
    { label: "R1T" },
    { label: "R1S" },
    { label: "R2" },
    { label: "R3" },
  ],
  rightNavItems = [{ label: "Demo Drive" }, { label: "Sign In" }],
  headline = "Lease an R1 starting\nat $559/mo",
  superscript = "3",
  subheadline = "Includes a $7,500 EV lease credit at\ntime of lease.",
  ctaButtons = [{ label: "Shop R1T" }, { label: "Shop R1S" }],
  backgroundImage = "/registry/rivian-hero/hero-bg.jpg",
  onMenuClick,
}: RivianHeroProps) {
  // Parse headline to extract price and add superscript
  const renderHeadline = () => {
    const parts = headline.split("$559/mo");
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}$559/mo<sup className="text-[0.5em] align-super">{superscript}</sup>
          {parts[1]}
        </>
      );
    }
    return headline;
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      </div>

      {/* Announcement Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full bg-[#F5F5F0] py-2.5 text-center"
      >
        <p className="text-xs text-[#1a1a1a]">
          {announcementText}{" "}
          <button
            onClick={onAnnouncementClick}
            className="underline underline-offset-2 hover:no-underline transition-all"
          >
            {announcementLinkText}
          </button>
        </p>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-10"
      >
        {/* Left Nav - Menu + Items */}
        <div className="flex items-center gap-6">
          <button
            onClick={onMenuClick}
            className="text-white hover:opacity-70 transition-opacity"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href || "#"}
                className="text-white text-sm font-medium hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <RivianLogo text={logoText} />
        </div>

        {/* Right Nav Items */}
        <div className="flex items-center gap-5">
          {rightNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href || "#"}
              className="text-white text-sm font-medium hover:opacity-70 transition-opacity hidden sm:block"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-end min-h-[calc(100vh-100px)] px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="max-w-lg">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight whitespace-pre-line"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {renderHeadline()}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed whitespace-pre-line"
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {ctaButtons.map((button) => (
              <button
                key={button.label}
                onClick={button.onClick}
                className="px-6 py-3 bg-[#F5F5F0] text-[#1a1a1a] text-sm font-medium rounded-full hover:bg-white transition-colors"
              >
                {button.label}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
