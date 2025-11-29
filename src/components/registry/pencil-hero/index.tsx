"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import "./font.css";

interface PencilHeroProps {
  logoText?: string;
  backedByText?: string;
  backedByLogo?: string;
  headline?: string;
  headlineAccent?: string;
  subheadline?: string;
  ctaLabel?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  asciiArtSrc?: string;
  appPreviewSrc?: string;
  onSubmit?: (email: string) => void;
}

export default function PencilHero({
  logoText = "PENCIL",
  backedByText = "BACKED BY",
  backedByLogo = "a]a/speedrun",
  headline = "Design Mode",
  headlineAccent = "for Cursor",
  subheadline = "Introducing a new way to design\nright where you code.",
  ctaLabel = "Available soon. Be first to get access.",
  emailPlaceholder = "YOUR EMAIL",
  buttonText = "REQUEST ACCESS",
  asciiArtSrc = "/registry/pencil-hero/ascii-woman.png",
  appPreviewSrc = "/registry/pencil-hero/app-preview.png",
  onSubmit,
}: PencilHeroProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#E6EBE7]">
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-[0.2em] text-[#193F2B]"
        >
          {logoText}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-xs text-[#899F92]"
        >
          <span className="tracking-wider">{backedByText}</span>
          <span className="font-medium italic text-[#6B8577]">{backedByLogo}</span>
        </motion.div>
      </div>

      {/* ASCII Art - Positioned absolutely in the top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="pointer-events-none absolute -right-4 top-8 z-0 hidden overflow-hidden lg:block"
        style={{
          background: "#E6EBE7",
        }}
      >
        <div
          className="relative h-[420px] w-[400px] xl:h-[480px] xl:w-[460px]"
          style={{
            background: "#E6EBE7",
          }}
        >
          <Image
            src={asciiArtSrc}
            alt="ASCII art illustration"
            fill
            className="object-contain object-right-top mix-blend-multiply"
            priority
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-6 pt-2 sm:px-10 sm:pt-4 lg:px-16 lg:pt-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-start">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-instrument-serif text-5xl font-normal leading-[1.1] text-[#193F2B] sm:text-6xl lg:text-7xl"
            >
              {headline}
              <br />
              <span className="text-[#193F2B]">{headlineAccent}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 whitespace-pre-line text-base font-medium leading-relaxed text-[#193F2B] sm:text-lg"
            >
              {subheadline}
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-10"
            >
              <p className="mb-3 text-sm text-[#193F2B]">{ctaLabel}</p>
              <form onSubmit={handleSubmit} className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={emailPlaceholder}
                  className="flex-1 border border-[#193F2B] bg-transparent px-4 py-3 text-xs font-medium tracking-wider text-[#193F2B] placeholder-[#6B8577] outline-none transition-colors focus:border-[#193F2B] focus:ring-1 focus:ring-[#193F2B]"
                />
                <button
                  type="submit"
                  className="bg-[#0A3520] px-6 py-3 text-xs font-semibold tracking-wider text-white transition-colors hover:bg-[#082A1A]"
                >
                  {buttonText}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Column - ASCII Art (mobile only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-start justify-center lg:hidden"
          >
            <div className="relative h-[300px] w-[280px] sm:h-[380px] sm:w-[320px]">
              <Image
                src={asciiArtSrc}
                alt="ASCII art illustration"
                fill
                className="object-contain mix-blend-multiply"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* App Preview Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-16"
      >
        <div className="overflow-hidden rounded-t-xl shadow-2xl">
          <div className="relative aspect-[16/9] w-full bg-[#1C1C1C]">
            <Image
              src={appPreviewSrc}
              alt="App preview"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
