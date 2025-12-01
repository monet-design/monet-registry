"use client";

import { motion } from "motion/react";

// Font import for Instrument Serif (italic serif for headline)
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
`;

interface Feature {
  number: string;
  title: string;
  description: string;
}

interface DelphiDigitalMindCtaProps {
  /** Main headline text */
  headline?: string;
  /** Subheadline/description text */
  subheadline?: string;
  /** CTA button text */
  buttonText?: string;
  /** CTA button click handler */
  onButtonClick?: () => void;
  /** Features list */
  features?: Feature[];
}

// Logo icon component
function DelphiLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 16C8 16 12 12 16 12C20 12 24 16 24 16C24 16 20 20 16 20C12 20 8 16 8 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16C8 16 12 20 16 20C20 20 24 16 24 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const defaultFeatures: Feature[] = [
  {
    number: "01",
    title: "Connect your content",
    description:
      "Upload writing, videos, podcasts, or link to live feeds – Delphi indexes it all.",
  },
  {
    number: "02",
    title: "Train and customize",
    description:
      "We mirror your tone, style, and knowledge. Add notes on what your Delphi should do.",
  },
  {
    number: "03",
    title: "Share everywhere",
    description:
      "Deploy on your site, via SMS, or in any chat platform so your audience can talk to you.",
  },
];

export default function DelphiDigitalMindCta({
  headline = "Create your Digital Mind",
  subheadline = "Build the Digital Version of you to scale\nyour expertise & availability, infinitely.",
  buttonText = "Get Started",
  onButtonClick,
  features = defaultFeatures,
}: DelphiDigitalMindCtaProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyle }} />
      <section
        className="relative w-full py-12 px-4 md:px-8"
        style={{ backgroundColor: "#FDF6ED" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Gradient Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden mb-8"
            style={{
              background:
                "linear-gradient(135deg, #C84A3A 0%, #E85242 25%, #F48E60 50%, #F4A976 75%, #E8A07A 100%)",
            }}
          >
            {/* Inner glow/gradient overlay for depth */}
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 50%, rgba(180, 60, 50, 0.6) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 px-6 md:py-20 md:px-12">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <DelphiLogo className="w-10 h-10 text-white" />
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                {headline}
              </motion.h2>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-white/80 text-sm md:text-base mb-8 max-w-md whitespace-pre-line"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {subheadline}
              </motion.p>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={onButtonClick}
                className="px-6 py-2.5 bg-white text-gray-900 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {buttonText}
              </motion.button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="py-4"
              >
                {/* Number and Title */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: "#D85A4A",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {feature.number}
                  </span>
                  <h3
                    className="text-base font-medium text-gray-900"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {feature.description}
                </p>

                {/* Separator line (except last) */}
                {index < features.length - 1 && (
                  <div
                    className="hidden md:block absolute right-0 top-0 h-full w-px"
                    style={{ backgroundColor: "#E5DED6" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
