"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CurrentFintechHeroProps {
  logoText?: string;
  navLinks?: { label: string; href: string }[];
  rightLinks?: { label: string; href: string }[];
  ctaButtonText?: string;
  headline?: string;
  inputPlaceholder?: string;
  inputButtonText?: string;
  bottomCtaText?: string;
  phoneImage?: string;
  cardImage?: string;
  onGetStarted?: () => void;
}

export default function CurrentFintechHero({
  logoText = "current",
  navLinks = [
    { label: "Spend", href: "#" },
    { label: "Save", href: "#" },
    { label: "Invest", href: "#" },
    { label: "Advance", href: "#" },
  ],
  rightLinks = [
    { label: "About", href: "#" },
    { label: "Help", href: "#" },
  ],
  ctaButtonText = "Get started",
  headline = "Build your\nmoney future",
  inputPlaceholder = "Enter your mobile number",
  inputButtonText = "Get Started",
  bottomCtaText = "Get the app & get\nyour money going",
  phoneImage = "/registry/current-fintech-hero/phone-mockup.png",
  cardImage = "/registry/current-fintech-hero/credit-card.png",
  onGetStarted,
}: CurrentFintechHeroProps) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#EFEBE8" }}
    >
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between px-8 py-5 border-b"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        {/* Left nav links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "#292727" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Center logo */}
        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2 text-2xl tracking-tight"
          style={{
            fontFamily: "'Instrument Serif', serif",
            color: "#292727",
          }}
        >
          {logoText}
        </a>

        {/* Right nav links and CTA */}
        <div className="flex items-center gap-6">
          {rightLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "#292727" }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onGetStarted}
            className="px-5 py-2.5 text-sm font-medium text-white rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: "#262525" }}
          >
            {ctaButtonText}
          </button>
        </div>
      </motion.nav>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-between px-8 lg:px-16 pt-16 lg:pt-24 pb-8">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-xl"
        >
          <h1
            className="text-5xl lg:text-7xl leading-tight mb-10"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              color: "#292727",
              fontWeight: 400,
            }}
          >
            {headline.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < headline.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Input field with button */}
          <div
            className="flex items-center rounded-full p-1.5 max-w-md"
            style={{ backgroundColor: "#D9D8DA" }}
          >
            <input
              type="tel"
              placeholder={inputPlaceholder}
              className="flex-1 px-4 py-3 bg-transparent text-sm outline-none placeholder:text-gray-500"
              style={{ color: "#292727" }}
            />
            <button
              onClick={onGetStarted}
              className="px-6 py-3 text-sm font-medium text-white rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: "#292727" }}
            >
              {inputButtonText}
            </button>
          </div>
        </motion.div>

        {/* Right side - Phone and Card images */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex flex-1 items-end justify-center relative"
        >
          {/* Phone mockup */}
          <div className="relative z-10">
            <Image
              src={phoneImage}
              alt="Current Banking App"
              width={340}
              height={680}
              className="drop-shadow-2xl"
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Credit card */}
          <div className="absolute right-0 top-1/4 z-20">
            <Image
              src={cardImage}
              alt="Current Visa Card"
              width={240}
              height={150}
              className="drop-shadow-xl"
              style={{ objectFit: "contain" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <a
          href="#"
          className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* App icon placeholder */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#301B2B" }}
          >
            <span
              className="text-white text-xs"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              C
            </span>
          </div>
          <div className="flex flex-col">
            {bottomCtaText.split("\n").map((line, index) => (
              <span
                key={index}
                className="text-sm font-medium"
                style={{ color: "#292727" }}
              >
                {line}
              </span>
            ))}
          </div>
          <ArrowRight className="w-5 h-5 ml-2" style={{ color: "#292727" }} />
        </a>
      </motion.div>

      {/* Background decorative elements - subtle texture/gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.03) 0%, transparent 50%)",
        }}
      />

      {/* Google Font import */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap");
      `}</style>
    </section>
  );
}
