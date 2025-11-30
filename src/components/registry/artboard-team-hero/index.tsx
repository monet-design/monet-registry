"use client";

import { motion } from "motion/react";
import { Menu } from "lucide-react";
import "./font.css";

// Logo icons as inline SVGs
const MicrosoftLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 23 23" fill="currentColor">
    <rect width="11" height="11" fill="#f25022" />
    <rect x="12" width="11" height="11" fill="#7fba00" />
    <rect y="12" width="11" height="11" fill="#00a4ef" />
    <rect x="12" y="12" width="11" height="11" fill="#ffb900" />
  </svg>
);

const KlarnaLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 67 15" fill="currentColor">
    <path d="M59.363 1.846h3.528v11.182h-3.528V1.846zm1.764 13.12a1.867 1.867 0 0 0 0-3.734 1.867 1.867 0 0 0 0 3.734zM43.27 1.826h3.528v11.201h-3.528V1.826zm0 13.12a1.867 1.867 0 1 0 0-3.734 1.867 1.867 0 0 0 0 3.734zM33.74.011c0 2.68-1.048 5.12-2.902 6.924l4.406 6.092h-4.27l-4.13-5.72v5.72h-3.528V.011h3.528v6.044a7.986 7.986 0 0 0 3.368-6.044h3.528zm17.14 1.815h3.528v11.201h-3.528V1.826zm-14.285 7.58a3.567 3.567 0 1 1 0-7.134 3.567 3.567 0 0 1 0 7.134zm0-10.69a7.123 7.123 0 1 0 0 14.246 7.123 7.123 0 0 0 0-14.246zm-17.43 3.11h-.61v-.62h.61v.62zm-6.14 8.23h3.462V.006h-3.46v11.05zM8.385 5.65a7.123 7.123 0 0 0-1.764-4.7v4.7h1.764zm55.214-3.823h3.528v11.2h-3.528v-11.2z" />
  </svg>
);

interface NavItem {
  label: string;
  href?: string;
}

interface TrustLogo {
  name: string;
  logo?: React.ReactNode;
}

interface ArtboardTeamHeroProps {
  logo?: {
    icon?: React.ReactNode;
    text?: string;
  };
  navItems?: NavItem[];
  ctaButtonText?: string;
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  trustText?: string;
  trustLogos?: TrustLogo[];
  heroImageSrc?: string;
  onCtaClick?: () => void;
  onPrimaryClick?: () => void;
}

// Default Artboard Logo
function ArtboardLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="6" fill="#2F5233" />
      <path
        d="M16 6L8 26h4l1.5-4h5l1.5 4h4L16 6zm0 8l1.8 5h-3.6l1.8-5z"
        fill="white"
      />
    </svg>
  );
}

// Placeholder illustration component
function HeroIllustration({ src }: { src?: string }) {
  if (src) {
    return (
      <motion.img
        src={src}
        alt="Hero illustration"
        className="w-full h-auto max-w-[520px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    );
  }

  // Fallback SVG illustration
  return (
    <motion.svg
      viewBox="0 0 520 400"
      fill="none"
      className="w-full h-auto max-w-[520px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Background blob */}
      <ellipse cx="260" cy="200" rx="200" ry="160" fill="#E8DDD0" opacity="0.5" />

      {/* Purple sketchbook */}
      <rect x="280" y="180" width="120" height="160" rx="8" fill="#6B5B95" />
      <line x1="290" y1="180" x2="290" y2="340" stroke="#4A4063" strokeWidth="2" />
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={i} cx="290" cy={190 + i * 18} r="4" fill="#E8DDD0" />
      ))}

      {/* Orange plant stems */}
      <path d="M340 180 Q360 120 380 100" stroke="#FF8C42" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M350 180 Q380 140 410 130" stroke="#FF8C42" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M360 180 Q400 150 440 160" stroke="#FF8C42" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="380" cy="100" r="12" fill="#BFFF00" />
      <circle cx="410" cy="130" r="10" fill="#00CED1" />
      <circle cx="440" cy="160" r="8" fill="#FF6B6B" />

      {/* Main orange hand */}
      <path
        d="M200 320 Q180 280 190 240 Q200 200 220 180 L240 200 Q220 220 215 250 Q210 280 220 310 Z"
        fill="#FF8C42"
      />
      <path
        d="M220 180 Q230 150 250 140 L260 155 Q245 165 240 185 Z"
        fill="#FF8C42"
      />
      <path
        d="M240 200 Q260 170 280 165 L285 180 Q265 185 250 200 Z"
        fill="#FF8C42"
      />

      {/* Teal hand */}
      <path
        d="M120 200 Q100 180 110 150 Q120 120 150 110 L160 130 Q140 140 135 160 Q130 180 140 200 Z"
        fill="#20B2AA"
      />

      {/* Dialog box */}
      <rect x="340" y="60" width="150" height="100" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="2" />
      <text x="355" y="85" fontSize="10" fill="#333" fontWeight="600">Share Project</text>
      <rect x="355" y="95" width="120" height="20" rx="4" fill="#F5F5F5" />
      <text x="360" y="109" fontSize="8" fill="#999">Link is public now</text>
      <rect x="355" y="120" width="12" height="12" rx="2" fill="#BFFF00" />
      <rect x="375" y="120" width="12" height="12" rx="2" fill="white" stroke="#DDD" />
      <rect x="410" y="135" width="65" height="20" rx="4" fill="#BFFF00" />
      <text x="420" y="148" fontSize="8" fill="#333" fontWeight="500">Send Invite</text>

      {/* Small decorative elements */}
      <path d="M100 300 L110 280 L120 300 L110 295 Z" fill="#FF6B6B" />
      <circle cx="460" cy="220" r="6" fill="#BFFF00" />
      <rect x="80" y="140" width="20" height="20" fill="#333" opacity="0.2" />
      <rect x="85" y="145" width="10" height="10" fill="white" />

      {/* Arrow */}
      <path d="M150 280 L130 300 L150 295 L145 320 L155 295 L150 300 Z" fill="#00CED1" />

      {/* Hearts */}
      <path d="M420 250 C420 245 425 240 430 245 C435 240 440 245 440 250 C440 260 430 268 430 268 C430 268 420 260 420 250" fill="#FF6B6B" />
    </motion.svg>
  );
}

// Trust logo placeholder component
function TrustLogoItem({ name }: { name: string }) {
  const logoStyles: Record<string, { fontFamily: string; fontWeight: string; fontSize: string }> = {
    Microsoft: { fontFamily: "system-ui", fontWeight: "600", fontSize: "14px" },
    Klarna: { fontFamily: "system-ui", fontWeight: "700", fontSize: "16px" },
    GoDaddy: { fontFamily: "system-ui", fontWeight: "700", fontSize: "14px" },
    Squarespace: { fontFamily: "system-ui", fontWeight: "500", fontSize: "12px" },
    fiverr: { fontFamily: "system-ui", fontWeight: "700", fontSize: "16px" },
    "R/GA": { fontFamily: "system-ui", fontWeight: "700", fontSize: "14px" },
    isobar: { fontFamily: "system-ui", fontWeight: "400", fontSize: "14px" },
    shopify: { fontFamily: "system-ui", fontWeight: "600", fontSize: "14px" },
  };

  const style = logoStyles[name] || { fontFamily: "system-ui", fontWeight: "600", fontSize: "14px" };

  return (
    <span
      className="text-gray-800 opacity-70 hover:opacity-100 transition-opacity"
      style={style}
    >
      {name}
    </span>
  );
}

export default function ArtboardTeamHero({
  logo = {
    icon: <ArtboardLogo />,
    text: "Artboard",
  },
  navItems = [
    { label: "Product", href: "#" },
    { label: "Templates", href: "#" },
    { label: "Community", href: "#" },
    { label: "For Teams", href: "#" },
    { label: "Pricing", href: "#" },
  ],
  ctaButtonText = "Start Designing",
  headline = "Automate your\ndesign process\nat any scale",
  description = "Eliminate repetitive tasks, focus on creativity, and maintain\nbrand consistency across platforms. Artboard Studio is a\ncreative automation tool for design and marketing teams\nwith high ambitions & enormous creative workloads.",
  primaryButtonText = "Try Artboard Studio for Free",
  trustText = "Trusted by +650,000 designers and +3,000 best design teams around the world",
  trustLogos = [
    { name: "Microsoft" },
    { name: "Klarna." },
    { name: "GoDaddy" },
    { name: "SQUARESPACE" },
    { name: "fiverr." },
    { name: "R/GA" },
    { name: "isobar" },
    { name: "shopify" },
  ],
  heroImageSrc,
  onCtaClick,
  onPrimaryClick,
}: ArtboardTeamHeroProps) {
  return (
    <section className="relative w-full bg-[#F5E6D3] overflow-hidden artboard-font">
      {/* Navigation */}
      <nav className="w-full px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            {logo.icon}
            <span className="text-[#2F5233] font-semibold text-xl tracking-tight">
              {logo.text}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* CTA and Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={onCtaClick}
              className="hidden sm:block px-5 py-2.5 bg-[#BFFF00] hover:bg-[#a8e600] text-gray-900 text-sm font-semibold rounded-full transition-colors"
            >
              {ctaButtonText}
            </button>
            <button className="lg:hidden p-2 text-gray-700 hover:text-gray-900">
              <Menu className="w-6 h-6" />
            </button>
            <button className="hidden lg:block p-2 text-gray-700 hover:text-gray-900">
              <Menu className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.1] mb-6 whitespace-pre-line"
            >
              {headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8 whitespace-pre-line"
            >
              {description}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={onPrimaryClick}
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white text-base font-semibold rounded-full transition-colors"
            >
              {primaryButtonText}
            </motion.button>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <HeroIllustration src={heroImageSrc} />
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="w-full px-6 lg:px-12 py-8 border-t border-gray-300/30">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-gray-500 text-sm mb-6"
          >
            {trustText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6 lg:gap-10"
          >
            {trustLogos.map((logo, index) => (
              <TrustLogoItem key={index} name={logo.name} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
