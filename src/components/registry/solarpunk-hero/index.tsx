"use client";

import { motion } from "motion/react";
import { Search, Sun } from "lucide-react";
import Image from "next/image";
import "./font.css";

interface SolarpunkHeroProps {
  logoText?: string;
  navItems?: { label: string; href?: string }[];
  loginText?: string;
  contactText?: string;
  headline?: string;
  subheadline?: string;
  searchPlaceholder?: string;
  missionText?: string;
  highlightWord?: string;
  missionYear?: string;
  onSearch?: (query: string) => void;
  onContactClick?: () => void;
  onLoginClick?: () => void;
}

// Sun Logo Icon
function SunLogo({ className = "" }: { className?: string }) {
  return (
    <Sun className={className} strokeWidth={2} />
  );
}

export default function SolarpunkHero({
  logoText = "Solarpunk",
  navItems = [
    { label: "WHAT IS AGRIVOLTAICS", href: "#" },
    { label: "BLOG", href: "#" },
  ],
  loginText = "Login",
  contactText = "Contact us",
  headline = "Covering farms\nwith solar panels",
  subheadline = "Accelerate global transition to renewable\nenergy while capitalizing on your acres.",
  searchPlaceholder = "Enter your address, neighborhood, city or ZIP code",
  missionText = "OUR MISSION IS TO 100X THE DEPLOYMENT OF SOLAR PANELS AND CREATE A",
  highlightWord = "SOLARPUNK",
  missionYear = "FUTURE BY 2077.",
  onSearch,
  onContactClick,
  onLoginClick,
}: SolarpunkHeroProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    onSearch?.(query);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F5]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <SunLogo className="h-5 w-5 text-[#1a1a1a]" />
          <span className="text-base font-semibold text-[#1a1a1a]">
            {logoText}
          </span>
        </div>

        {/* Nav Items */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href || "#"}
              className="text-xs font-medium tracking-wide text-[#1a1a1a] transition-colors hover:text-[#666]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onLoginClick}
            className="text-sm font-medium text-[#1a1a1a] transition-colors hover:text-[#666]"
          >
            {loginText}
          </button>
          <button
            onClick={onContactClick}
            className="rounded-md bg-[#2a2a2a] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3a3a3a]"
          >
            {contactText}
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-120px)] flex-col">
        {/* Hero Section with Background Image */}
        <div className="relative flex-1">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/registry/solarpunk-hero/solar-panel-hero.jpg"
              alt="Solar panels in a green farm setting"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient overlay for text readability on left side */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-8 lg:px-12">
            <div className="max-w-xl">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-dm-serif text-4xl font-normal leading-tight text-white sm:text-5xl md:text-6xl"
                style={{ whiteSpace: "pre-line" }}
              >
                {headline}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg"
                style={{ whiteSpace: "pre-line" }}
              >
                {subheadline}
              </motion.p>

              {/* Search Input */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                onSubmit={handleSearch}
                className="mt-8"
              >
                <div className="flex items-center overflow-hidden rounded-lg bg-white shadow-lg">
                  <input
                    type="text"
                    name="search"
                    placeholder={searchPlaceholder}
                    className="flex-1 bg-transparent px-4 py-4 text-sm text-[#333] placeholder:text-[#999] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex h-full items-center justify-center px-4 text-[#666] transition-colors hover:text-[#333]"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>

        {/* Bottom Mission Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="relative z-20 bg-[#C8D517] px-6 py-4 sm:px-8 lg:px-12"
        >
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 text-center text-xs font-medium tracking-wide text-[#1a1a1a] sm:text-sm">
            <span>{missionText}</span>
            <span className="font-serif text-base italic sm:text-lg">
              {highlightWord}
            </span>
            <span>{missionYear}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
