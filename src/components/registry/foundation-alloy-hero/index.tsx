"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import "./font.css";
import "./styles.css";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

interface SlideIndicator {
  number: string;
  active?: boolean;
}

interface FoundationAlloyHeroProps {
  logoText?: string;
  headline1?: string;
  headline2?: string;
  highlightedText1?: string;
  highlightedText2?: string;
  navItems?: NavItem[];
  slideIndicators?: SlideIndicator[];
  onNavClick?: (href: string) => void;
  onSlideClick?: (index: number) => void;
}

// Parallelogram SVG component for the logo and decorative shapes
function Parallelogram({
  className,
  fill = "#E8E44A",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      className={className}
      preserveAspectRatio="none"
    >
      <polygon points="20,0 100,0 80,60 0,60" fill={fill} />
    </svg>
  );
}

// Logo Icon Component
function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <polygon points="6,4 20,4 18,12 4,12" fill="#E8E44A" />
      <polygon points="8,12 22,12 20,20 6,20" fill="#E8E44A" />
    </svg>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "Company", href: "#company" },
  { label: "Careers", href: "#careers", external: true },
  { label: "Contact", href: "#contact" },
];

const defaultSlideIndicators: SlideIndicator[] = [
  { number: "01", active: true },
  { number: "02" },
  { number: "03" },
];

export default function FoundationAlloyHero({
  logoText = "Foundation Alloy",
  headline1 = "Better Materials.",
  headline2 = "Better Engineering.",
  highlightedText1 = "Mat",
  highlightedText2 = "Engin",
  navItems = defaultNavItems,
  slideIndicators = defaultSlideIndicators,
  onNavClick,
  onSlideClick,
}: FoundationAlloyHeroProps) {
  // Function to render text with highlighted portion
  const renderHighlightedText = (
    text: string,
    highlightPart: string,
    delay: number
  ) => {
    const startIndex = text.indexOf(highlightPart);
    if (startIndex === -1) {
      return (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay, duration: 0.6 }}
          className="text-stroke"
        >
          {text}
        </motion.span>
      );
    }

    const before = text.slice(0, startIndex);
    const highlight = text.slice(startIndex, startIndex + highlightPart.length);
    const after = text.slice(startIndex + highlightPart.length);

    return (
      <>
        {before && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0.6 }}
            className="text-stroke"
          >
            {before}
          </motion.span>
        )}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.1, duration: 0.6 }}
          className="text-black"
        >
          {highlight}
        </motion.span>
        {after && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.6 }}
            className="text-stroke"
          >
            {after}
          </motion.span>
        )}
      </>
    );
  };

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <LogoIcon className="w-6 h-6" />
          <span className="text-sm font-normal text-black tracking-tight">
            {logoText}
          </span>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-6 sm:gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
              onClick={() => onNavClick?.(item.href)}
              className="flex items-center gap-0.5 text-sm text-black hover:opacity-70 transition-opacity"
            >
              {item.label}
              {item.external && <ArrowUpRight className="w-3 h-3" />}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
        {/* Decorative Parallelograms - positioned behind text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Top parallelogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="absolute"
            style={{
              width: "280px",
              height: "120px",
              top: "18%",
              left: "50%",
              transform: "translateX(-30%)",
            }}
          >
            <Parallelogram className="w-full h-full" />
          </motion.div>

          {/* Middle parallelogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="absolute"
            style={{
              width: "320px",
              height: "140px",
              top: "35%",
              left: "50%",
              transform: "translateX(-55%)",
            }}
          >
            <Parallelogram className="w-full h-full" />
          </motion.div>

          {/* Bottom parallelogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="absolute"
            style={{
              width: "200px",
              height: "100px",
              top: "55%",
              left: "50%",
              transform: "translateX(10%)",
            }}
          >
            <Parallelogram className="w-full h-full" />
          </motion.div>
        </div>

        {/* Headlines */}
        <div className="relative z-10 text-center">
          <h1 className="font-instrument-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl italic font-normal leading-[0.95] tracking-tight">
            <span className="block">
              {renderHighlightedText(headline1, highlightedText1, 0.3)}
            </span>
            <span className="block">
              {renderHighlightedText(headline2, highlightedText2, 0.5)}
            </span>
          </h1>
        </div>
      </div>

      {/* Slide Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 left-0 right-0 flex justify-center gap-32 sm:gap-48 lg:gap-64 px-6"
      >
        {slideIndicators.map((indicator, index) => (
          <button
            key={indicator.number}
            onClick={() => onSlideClick?.(index)}
            className={`text-xs font-normal transition-opacity ${
              indicator.active
                ? "text-black"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {indicator.number}
          </button>
        ))}
      </motion.div>
    </section>
  );
}
