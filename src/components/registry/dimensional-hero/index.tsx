"use client";

import { motion } from "motion/react";
import { Apple, Mail } from "lucide-react";
import Image from "next/image";
import "./font.css";

interface DimensionalHeroProps {
  logoText?: string;
  navLinks?: { label: string; href: string; isActive?: boolean }[];
  headline?: string;
  subheadline?: string;
  downloadTitle?: string;
  appStoreUrl?: string;
  webAppNote?: string;
  betaLabel?: string;
  disclaimerText?: string;
  phoneMockup1?: string;
  phoneMockup2?: string;
  onSignInWithApple?: () => void;
  onSignInWithGoogle?: () => void;
  onSignInWithEmail?: () => void;
}

// Google Icon Component
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// Dimensional Logo
function DimensionalLogo({ text = "Dimensional" }: { text?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        <div className="w-4 h-4 rounded-full border-2 border-white" />
        <div className="flex gap-0.5">
          <div className="w-1 h-4 bg-white rounded-full" />
          <div className="w-1 h-4 bg-white rounded-full" />
          <div className="w-1 h-4 bg-white rounded-full" />
        </div>
        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-white" />
      </div>
      <span className="text-white text-lg font-medium tracking-tight">{text}</span>
    </div>
  );
}

export default function DimensionalHero({
  logoText = "Dimensional",
  navLinks = [
    { label: "Home", href: "#", isActive: true },
    { label: "Blog", href: "#" },
    { label: "About", href: "#" },
  ],
  headline = "Know yourself.\nConnect with others.",
  subheadline = "Take personality tests. Learn about people in\nyour life. Make new friends.",
  downloadTitle = "Download the App",
  appStoreUrl = "#",
  webAppNote = "No iPhone? Try our web app*",
  betaLabel = "BETA",
  disclaimerText = "* Our web experience is in beta. Some features are missing.\niOS users are strongly advised to use our native application.",
  phoneMockup1 = "/registry/dimensional-hero/phone-mockup-1.png",
  phoneMockup2 = "/registry/dimensional-hero/phone-mockup-2.png",
  onSignInWithApple,
  onSignInWithGoogle,
  onSignInWithEmail,
}: DimensionalHeroProps) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#2D2928" }}
    >
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DimensionalLogo text={logoText} />
        </motion.div>

        <motion.div
          className="flex items-center gap-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-sm transition-colors ${
                link.isActive
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-8 lg:px-16 pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
          {/* Left Section - Text and Phone Mockups */}
          <div className="flex-1 max-w-2xl">
            {/* Headline */}
            <motion.h1
              className="text-5xl lg:text-6xl text-white leading-tight mb-6 font-instrument-serif-italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg lg:text-xl text-white leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {subheadline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < subheadline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.p>

            {/* Phone Mockups */}
            <motion.div
              className="relative h-[400px] lg:h-[500px] mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Phone 1 - Left/Back */}
              <div className="absolute left-0 top-0 w-[220px] lg:w-[280px] h-full z-10">
                <Image
                  src={phoneMockup1}
                  alt="App screenshot - Personality traits"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
              {/* Phone 2 - Right/Front */}
              <div className="absolute left-[120px] lg:left-[160px] top-0 w-[220px] lg:w-[280px] h-full z-20">
                <Image
                  src={phoneMockup2}
                  alt="App screenshot - User profile"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Section - Download Options */}
          <motion.div
            className="lg:w-[320px] flex flex-col items-center lg:items-start lg:pt-32"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Download Title */}
            <h2 className="text-white text-lg font-medium mb-4">{downloadTitle}</h2>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-white mb-6" />

            {/* App Store Button */}
            <a
              href={appStoreUrl}
              className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-lg hover:bg-gray-100 transition-colors mb-8"
            >
              <Apple className="w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-[10px] leading-tight">Download on the</span>
                <span className="text-base font-semibold leading-tight">App Store</span>
              </div>
            </a>

            {/* Web App Note */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 text-sm">{webAppNote}</span>
              <span
                className="text-[10px] px-1.5 py-0.5 rounded text-white font-medium"
                style={{ backgroundColor: "#C9A227" }}
              >
                {betaLabel}
              </span>
            </div>

            {/* Social Sign In Buttons */}
            <div className="flex flex-col gap-3 w-full max-w-[280px]">
              <button
                onClick={onSignInWithApple}
                className="flex items-center gap-3 w-full px-5 py-3 rounded-lg transition-colors"
                style={{ backgroundColor: "#787372" }}
              >
                <Apple className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Sign in with Apple</span>
              </button>

              <button
                onClick={onSignInWithGoogle}
                className="flex items-center gap-3 w-full px-5 py-3 rounded-lg transition-colors"
                style={{ backgroundColor: "#787372" }}
              >
                <GoogleIcon className="w-5 h-5" />
                <span className="text-white text-sm font-medium">Sign in with Google</span>
              </button>

              <button
                onClick={onSignInWithEmail}
                className="flex items-center gap-3 w-full px-5 py-3 rounded-lg transition-colors"
                style={{ backgroundColor: "#787372" }}
              >
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Sign in with email</span>
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-gray-500 text-[11px] mt-6 leading-relaxed">
              {disclaimerText.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < disclaimerText.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
