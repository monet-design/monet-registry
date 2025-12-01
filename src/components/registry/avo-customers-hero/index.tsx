"use client";

import { motion } from "motion/react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface LogoItem {
  name: string;
  logo?: React.ReactNode;
}

interface AvoCustomersHeroProps {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  logos?: LogoItem[];
}

const defaultLogos: LogoItem[] = [
  { name: "Fender" },
  { name: "Rappi" },
  { name: "taxfix" },
  { name: "Bill.com" },
  { name: "Sixt" },
  { name: "Sotheby's" },
  { name: "OneFootball" },
  { name: "JOYBIRD" },
  { name: "Rapchat" },
  { name: "termius" },
  { name: "Doodle" },
  { name: "Bitso" },
];

export default function AvoCustomersHero({
  mode = "light",
  title = "You're in good company",
  description = "Join leading organizations using Avo to ship faster without\ncompromising their data quality.",
  ctaText = "Request demo",
  ctaHref = "#",
  logos = defaultLogos,
}: AvoCustomersHeroProps) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        rel="stylesheet"
      />
      <section className="relative w-full bg-[#F9F9FB] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-normal italic text-black mb-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {title}
            </h1>

            <p className="text-[#6B6B6D] text-base md:text-lg max-w-md whitespace-pre-line mb-8">
              {description}
            </p>

            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#EC4EC1] text-white font-medium text-sm px-6 py-3 rounded-full transition-colors hover:bg-[#D93DAD]"
            >
              {ctaText}
            </motion.a>
          </motion.div>

          {/* Logo Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                className="flex items-center justify-center bg-white border border-[#ECECEC] rounded-xl h-20 px-4 hover:border-[#D0D0D0] transition-colors"
              >
                {logo.logo ? logo.logo : <LogoText name={logo.name} />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function LogoText({ name }: { name: string }) {
  // Different font styles for different logos to mimic the original
  const getLogoStyle = (
    name: string
  ): { className: string; style?: React.CSSProperties } => {
    switch (name) {
      case "Fender":
        return {
          className: "italic text-xl font-normal tracking-tight",
          style: { fontFamily: "Georgia, serif" },
        };
      case "Rappi":
        return { className: "font-bold text-xl tracking-tight" };
      case "taxfix":
        return { className: "font-bold text-xl tracking-tight" };
      case "Bill.com":
        return { className: "font-medium text-lg" };
      case "Sixt":
        return { className: "font-bold text-2xl tracking-tighter uppercase" };
      case "Sotheby's":
        return {
          className: "text-lg tracking-wide",
          style: { fontFamily: "Georgia, serif" },
        };
      case "OneFootball":
        return { className: "text-xs font-medium tracking-wide uppercase" };
      case "JOYBIRD":
        return { className: "font-bold text-sm tracking-widest" };
      case "Rapchat":
        return { className: "font-bold text-sm tracking-wide uppercase" };
      case "termius":
        return { className: "font-medium text-base" };
      case "Doodle":
        return { className: "font-semibold text-lg" };
      case "Bitso":
        return { className: "font-bold text-lg" };
      default:
        return { className: "font-medium text-base" };
    }
  };

  const logoStyle = getLogoStyle(name);

  return (
    <span
      className={`text-[#2D2D2D] ${logoStyle.className}`}
      style={logoStyle.style}
    >
      {name}
    </span>
  );
}
