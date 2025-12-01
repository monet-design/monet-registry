"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

interface InitiateHeroProps {
  mode?: "light" | "dark";
  title?: string;
  taglinePre?: string;
  taglineButton?: string;
  taglinePost?: string;
  taglineSecondLine?: string;
  navItems?: NavItem[];
  cartCount?: number;
  heroImage?: string;
  onNavClick?: (href: string) => void;
  onCartClick?: () => void;
  onCtaClick?: () => void;
}

export default function InitiateHero({
  mode = "light",
  title = "INITIATE",
  taglinePre = "We bring",
  taglineButton = "New Life",
  taglinePost = ", light, and joy to the old,",
  taglineSecondLine = "mundane or otherwise overlooked.",
  navItems = [
    { label: "Works", href: "/works" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Shop", href: "/shop" },
    { label: "Contact", href: "/contact" },
  ],
  cartCount = 0,
  heroImage = "/registry/initiate-hero/manor-house.jpg",
  onNavClick,
  onCartClick,
  onCtaClick,
}: InitiateHeroProps) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#D6D0CC" }}
    >
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500&display=swap');
      `}</style>

      <div className="flex min-h-screen">
        {/* Left Sidebar Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed left-0 top-0 z-20 flex h-screen flex-col justify-between px-6 py-8 md:px-8"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (onNavClick) {
                    e.preventDefault();
                    onNavClick(item.href);
                  }
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="text-sm tracking-wide transition-opacity hover:opacity-60"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  color: "#1a1a1a",
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            onClick={onCartClick}
            className="text-left text-sm tracking-wide transition-opacity hover:opacity-60"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              color: "#E07A3D",
            }}
          >
            Cart ({cartCount})
          </motion.button>
        </motion.nav>

        {/* Main Content */}
        <div className="flex flex-1 flex-col items-center justify-start pt-12 md:pt-16">
          {/* Large Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center leading-none"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(80px, 18vw, 220px)",
              letterSpacing: "-0.02em",
              color: "#0a0a0a",
            }}
          >
            {title}
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-center md:mt-6"
          >
            <p
              className="text-lg leading-relaxed md:text-xl lg:text-2xl"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                color: "#1a1a1a",
              }}
            >
              {taglinePre}{" "}
              <button
                onClick={onCtaClick}
                className="relative inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 transition-all hover:bg-white/30"
                style={{
                  borderColor: "#E07A3D",
                  color: "#E07A3D",
                  fontFamily: "'Inter', sans-serif",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "0.85em",
                }}
              >
                {taglineButton}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              {taglinePost}
            </p>
            <p
              className="text-lg md:text-xl lg:text-2xl"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                color: "#1a1a1a",
              }}
            >
              {taglineSecondLine}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mt-8 w-full max-w-4xl px-4 md:mt-12 md:px-8"
          >
            <div
              className="relative aspect-[16/10] w-full overflow-hidden"
              style={{ borderRadius: "24px" }}
            >
              <Image
                src={heroImage}
                alt="Featured property"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
