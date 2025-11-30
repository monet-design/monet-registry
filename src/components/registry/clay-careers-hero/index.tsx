"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import "./font.css";

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface ClayCareersHeroProps {
  logoText?: string;
  navItems?: NavItem[];
  signInText?: string;
  ctaText?: string;
  headline?: string;
  subheadline?: string;
  onSignIn?: () => void;
  onGetStarted?: () => void;
}

// Handwritten signature SVG components
function Signature1() {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 50C25 35 35 25 45 30C55 35 50 50 40 55C30 60 25 50 30 40C35 30 50 25 60 30C70 35 65 45 55 48"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M55 48C60 50 70 45 75 40C80 35 85 38 82 45"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M70 25C72 22 75 20 78 22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Signature2() {
  return (
    <svg width="100" height="70" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 45C20 30 30 20 40 25C50 30 45 45 35 50C25 55 22 45 28 35C34 25 45 22 55 28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M55 28L60 20C62 18 65 20 63 25L58 35"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M58 35C62 38 68 35 72 30C76 25 82 28 80 35"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Signature3() {
  return (
    <svg width="160" height="70" viewBox="0 0 160 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 40C30 25 50 20 70 35C90 50 110 40 130 30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M130 30C135 28 140 30 138 38C136 46 125 50 115 45"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M60 30C62 25 68 22 72 28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Signature4() {
  return (
    <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25 70C30 50 35 30 40 15C45 30 50 50 55 70"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30 45C40 42 50 45 55 48"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M55 70C58 72 62 70 60 65"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Signature5() {
  return (
    <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 45C25 30 40 25 55 35C70 45 85 40 95 30C105 20 115 25 120 35"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M95 30C100 28 108 32 105 40C102 48 90 50 85 45"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M120 35C125 38 128 35 126 30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Signature6() {
  return (
    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 50C30 30 45 25 55 35C65 45 60 55 50 58C40 61 35 55 40 45C45 35 60 30 75 40"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M75 40C85 45 95 40 100 32"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 32C102 30 105 32 103 38L95 55"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Signature7() {
  return (
    <svg width="100" height="90" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25 65C30 45 40 25 50 20C55 22 55 30 50 40C45 50 35 55 30 52"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 40C55 38 62 35 68 38C74 41 72 50 65 55"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M55 20C58 18 62 20 60 25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Signature8() {
  return (
    <svg width="90" height="80" viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 50C28 35 38 28 48 32C58 36 55 48 45 55C35 62 28 58 32 48C36 38 48 32 60 38"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M60 38C65 42 72 40 75 35"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M75 35L78 50C79 55 75 58 70 55"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Signature9() {
  return (
    <svg width="130" height="70" viewBox="0 0 130 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 40C35 25 55 22 70 35C85 48 100 45 115 35"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M115 35C118 33 122 36 120 42C118 48 108 52 100 48"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 28C52 25 56 24 58 28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M85 28C88 24 92 25 90 30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

const defaultNavItems: NavItem[] = [
  { label: "STORIES", href: "#stories" },
  { label: "CAREERS", href: "#careers", isActive: true },
  { label: "PRICING", href: "#pricing" },
  { label: "ABOUT", href: "#about" },
];

// Signature positions matching the original layout
const signaturePositions = [
  { top: "12%", left: "18%", rotate: -5, delay: 0.1 },
  { top: "10%", left: "42%", rotate: 3, delay: 0.15 },
  { top: "8%", left: "68%", rotate: -3, delay: 0.2 },
  { top: "32%", left: "22%", rotate: 8, delay: 0.25 },
  { top: "30%", left: "55%", rotate: -6, delay: 0.3 },
  { top: "50%", left: "28%", rotate: 4, delay: 0.35 },
  { top: "48%", left: "52%", rotate: -8, delay: 0.4 },
  { top: "52%", left: "75%", rotate: 5, delay: 0.45 },
  { top: "68%", left: "40%", rotate: -4, delay: 0.5 },
];

const signatures = [
  Signature1,
  Signature2,
  Signature3,
  Signature4,
  Signature5,
  Signature6,
  Signature7,
  Signature8,
  Signature9,
];

export default function ClayCareersHero({
  logoText = "CLAY",
  navItems = defaultNavItems,
  signInText = "SIGN IN",
  ctaText = "GET STARTED",
  headline = "We believe in creating work that we're",
  subheadline = "proud to sign our name on.",
  onSignIn,
  onGetStarted,
}: ClayCareersHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <div className="text-white text-lg font-bold tracking-wider">
          {logoText}
        </div>

        {/* Center Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs tracking-widest transition-colors ${
                item.isActive
                  ? "text-white border-b border-white pb-0.5"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSignIn}
            className="px-4 py-1.5 text-xs tracking-wider text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
          >
            {signInText}
          </button>
          <button
            onClick={onGetStarted}
            className="px-4 py-1.5 text-xs tracking-wider text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors flex items-center gap-1.5"
          >
            {ctaText}
            <ArrowRight size={12} />
          </button>
        </div>
      </motion.nav>

      {/* Signatures Container */}
      <div className="absolute inset-0 z-10">
        {signatures.map((SignatureComponent, index) => {
          const pos = signaturePositions[index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: pos.delay,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="absolute"
              style={{
                top: pos.top,
                left: pos.left,
                transform: `rotate(${pos.rotate}deg)`,
              }}
            >
              <SignatureComponent />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute bottom-16 left-0 right-0 z-20 text-center px-6"
      >
        <p
          className="text-white text-xl sm:text-2xl md:text-3xl leading-relaxed"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: "italic",
          }}
        >
          {headline}
          <br />
          {subheadline}
        </p>
      </motion.div>
    </section>
  );
}
