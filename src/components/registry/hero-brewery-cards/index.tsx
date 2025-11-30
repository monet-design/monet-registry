"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface CardItem {
  title: string;
  description: string;
  href: string;
}

interface HeroBreweryCardsProps {
  logoText?: string;
  navItems?: NavItem[];
  heroTitle?: string[];
  cards?: CardItem[];
  backgroundImage?: string;
  languageOptions?: string[];
  currentLanguage?: string;
}

export default function HeroBreweryCards({
  logoText = "MOVA",
  navItems = [
    { label: "Brewery", href: "#" },
    { label: "Restaurant", href: "#" },
    { label: "MOVA BAR", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Cooperation", href: "#" },
    { label: "Contacts", href: "#" },
  ],
  heroTitle = ["TASTE. MEET.", "TALK"],
  cards = [
    {
      title: "MOVA BREWING",
      description:
        "Our goal is to find a common language between people with the help of beer.",
      href: "#",
    },
    {
      title: "RESTAURANT BEER SPACE",
      description:
        "This space is about optimism, simple and concise beer-inspired cuisine, change, lively atmosphere and the place of a person in the community.",
      href: "#",
    },
    {
      title: "BEER SHOP",
      description:
        "There are no such situations where you cannot find common communications. You just need to choose the right type of beer for conversation.",
      href: "#",
    },
  ],
  backgroundImage = "/registry/hero-brewery-cards/hero-bg.jpg",
  languageOptions = ["Укр", "Eng"],
  currentLanguage = "Eng",
}: HeroBreweryCardsProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#0F1D18]">
      {/* Hero Background */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex items-center justify-between px-8 py-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
            >
              <path
                d="M12 2L8 6H4V10L0 14L4 18V22H8L12 26L16 22H20V18L24 14L20 10V6H16L12 2Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-lg font-bold tracking-wider text-white">
              {logoText}
            </span>
          </div>

          {/* Nav Items */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-white/80">
              {languageOptions.map((lang, index) => (
                <span key={lang}>
                  <span
                    className={
                      lang === currentLanguage ? "text-white" : "text-white/60"
                    }
                  >
                    {lang}
                  </span>
                  {index < languageOptions.length - 1 && (
                    <span className="ml-2 text-white/40">|</span>
                  )}
                </span>
              ))}
            </div>
            <div className="h-0.5 w-8 bg-white" />
          </div>
        </motion.nav>

        {/* Hero Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            {heroTitle.map((line, index) => (
              <h1
                key={index}
                className="font-bold uppercase leading-[0.9] tracking-tight text-white"
                style={{
                  fontSize: "clamp(3rem, 12vw, 10rem)",
                  fontStretch: "condensed",
                  fontFamily:
                    "'Oswald', 'Bebas Neue', 'Impact', sans-serif",
                }}
              >
                {line}
              </h1>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 -mt-20 px-4 pb-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.href}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group flex flex-col justify-between rounded-lg bg-[#16322D] p-6 transition-all hover:bg-[#1d3f39] md:p-8"
              style={{ minHeight: "280px" }}
            >
              <h3
                className="text-xl font-bold uppercase italic tracking-wide text-white md:text-2xl"
                style={{
                  fontFamily: "'Oswald', 'Bebas Neue', sans-serif",
                }}
              >
                {card.title.split(" ").length > 2 ? (
                  <>
                    {card.title.split(" ").slice(0, 2).join(" ")}
                    <br />
                    {card.title.split(" ").slice(2).join(" ")}
                  </>
                ) : (
                  card.title
                )}
              </h3>
              <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                <p className="max-w-[280px] text-sm italic leading-relaxed text-white/80">
                  {card.description}
                </p>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-white transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Google Font Import */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap");
      `}</style>
    </section>
  );
}
