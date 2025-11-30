"use client";

import { motion } from "motion/react";

interface ConwayHeroProps {
  logo?: string;
  navItems?: { label: string; href: string }[];
  ctaText?: string;
  ctaHref?: string;
  headline?: string;
  subheadline?: string;
  features?: { icon: "strategy" | "technology" | "data"; label: string }[];
}

// SVG component for the concentric dotted circles pattern
function ConcentricDotsPattern() {
  const rings = [
    { radius: 160, dotCount: 80, dotSize: 4 },
    { radius: 130, dotCount: 65, dotSize: 4 },
    { radius: 100, dotCount: 50, dotSize: 4 },
    { radius: 70, dotCount: 35, dotSize: 4 },
  ];

  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      fill="currentColor"
    >
      <g transform="translate(200, 200)">
        {rings.map((ring, ringIndex) => {
          const dots = [];
          for (let i = 0; i < ring.dotCount; i++) {
            const angle = (i / ring.dotCount) * 2 * Math.PI;
            const x = ring.radius * Math.cos(angle);
            const y = ring.radius * Math.sin(angle);
            dots.push(
              <motion.circle
                key={`${ringIndex}-${i}`}
                cx={x}
                cy={y}
                r={ring.dotSize / 2}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: ringIndex * 0.1 + i * 0.005,
                  ease: "easeOut",
                }}
              />
            );
          }
          return dots;
        })}
      </g>
    </svg>
  );
}

// Strategy icon - dotted grid pattern
function StrategyIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="currentColor">
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={4 + col * 8}
            cy={4 + row * 8}
            r={1.5}
          />
        ))
      )}
    </svg>
  );
}

// Technology icon - horizontal lines
function TechnologyIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="currentColor">
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="4" y={6 + i * 7} width="32" height="2" rx="1" />
      ))}
    </svg>
  );
}

// Data icon - radial dots
function DataIcon() {
  return (
    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="currentColor">
      <g transform="translate(20, 20)">
        {[0, 1, 2].map((ring) => {
          const radius = 6 + ring * 6;
          const count = 8 + ring * 4;
          const dots = [];
          for (let i = 0; i < count; i++) {
            const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            dots.push(<circle key={`${ring}-${i}`} cx={x} cy={y} r={1.2} />);
          }
          return dots;
        })}
        <circle cx={0} cy={0} r={1.5} />
      </g>
    </svg>
  );
}

const featureIcons = {
  strategy: StrategyIcon,
  technology: TechnologyIcon,
  data: DataIcon,
};

export default function ConwayHero({
  logo = "CONWAY\n&CO",
  navItems = [
    { label: "Home", href: "#" },
    { label: "For investors", href: "#" },
    { label: "Insights", href: "#" },
  ],
  ctaText = "TALK TO SALES",
  ctaHref = "#",
  headline = "Experts\nin digital\ncommerce",
  subheadline = "Get fit for growth and unlock crazy ambition",
  features = [
    { icon: "strategy" as const, label: "Strategy" },
    { icon: "technology" as const, label: "Technology" },
    { icon: "data" as const, label: "Data" },
  ],
}: ConwayHeroProps) {
  const headlineLines = headline.split("\n");
  const logoLines = logo.split("\n");

  return (
    <section className="relative min-h-screen w-full bg-[#DEDDD2]">
      {/* Navigation */}
      <nav className="w-full px-6 md:px-12 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#1A1A1A]"
          >
            {logoLines.map((line, index) => (
              <div
                key={index}
                className="text-sm font-bold tracking-wider leading-tight"
              >
                {line}
              </div>
            ))}
          </motion.div>

          {/* Nav Items */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[#1A1A1A] text-sm hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href={ctaHref}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="px-5 py-2.5 bg-[#F5F4F2] text-[#1A1A1A] text-xs font-medium tracking-widest border border-[#E0E0E0] hover:bg-white transition-colors"
          >
            {ctaText}
          </motion.a>
        </div>

        {/* Divider line */}
        <div className="mt-6 h-px bg-[#C5C4BC]" />
      </nav>

      {/* Main Content */}
      <div className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left - Concentric Dots Pattern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[380px] aspect-square text-[#1A1A1A]"
          >
            <ConcentricDotsPattern />
          </motion.div>

          {/* Right - Text Content */}
          <div className="flex-1 max-w-xl">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#1A1A1A] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              {headlineLines.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-[#1A1A1A] text-base md:text-lg opacity-80"
            >
              {subheadline}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex items-center gap-8 md:gap-12"
            >
              {features.map((feature, index) => {
                const IconComponent = featureIcons[feature.icon];
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-[#1A1A1A] opacity-70">
                      <IconComponent />
                    </div>
                    <span className="text-[#1A1A1A] text-sm font-medium">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
