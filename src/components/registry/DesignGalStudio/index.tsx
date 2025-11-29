"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface DesignGalStudioProps {
  name?: string;
  alias?: string;
  greeting?: string;
  mainDescription?: string;
  featureCard1?: {
    title: string;
    description: string;
  };
  featureCard2?: {
    title: string;
    description: string;
  };
  yearsOfExperience?: number;
  profileImage?: string;
}

const defaultFeatureCard1 = {
  title: "The perfect blend of\nvisual design and UX.",
  description:
    "With 15 years of multi-disciplinary design experience, I blend beautiful visual design and the clarity of UX, all under one roof.",
};

const defaultFeatureCard2 = {
  title: "A true design partner\nyou can trust.",
  description:
    "I won't let you down. You can rely on me to communicate regularly, deliver on time, and provide real value to your business.",
};

function DecorativeScribble({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 6C8 2 14 10 20 6C26 2 32 10 38 6C44 2 50 10 58 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function DesignGalStudio({
  name = "Christine Maggi",
  alias = "Design Gal",
  greeting = "Nice to meet you!",
  mainDescription = "My goal is to elevate companies like yours through the power of design. I am here to help you effectively convey your message and make a positive impact. Let's bring your vision to life!",
  featureCard1 = defaultFeatureCard1,
  featureCard2 = defaultFeatureCard2,
  yearsOfExperience = 15,
  profileImage = "/features/biography/design-gal-studio/profile.png",
}: DesignGalStudioProps) {
  return (
    <section
      className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
      style={{
        backgroundColor: "#F5F1EB",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl lg:rounded-3xl">
              <Image
                src={profileImage}
                alt={`${name} - ${alias}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - Content Cards */}
          <div className="flex flex-col gap-4 lg:col-span-7 lg:gap-5">
            {/* Top Row - Main Intro Card and Small Pink Card */}
            <div className="flex flex-col gap-4 sm:flex-row lg:gap-5">
              {/* Main Yellow Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-1 rounded-2xl px-6 py-6 sm:px-7 sm:py-7 lg:rounded-3xl lg:px-8 lg:py-8"
                style={{ backgroundColor: "#FFDF2C" }}
              >
                <h2
                  className="mb-2 text-2xl tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontWeight: 400,
                  }}
                >
                  {greeting}
                </h2>
                <p
                  className="mb-4 text-sm text-gray-800 sm:text-base"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontStyle: "italic",
                  }}
                >
                  I'm {name}, a.k.a. {alias}
                </p>

                {/* Decorative scribble */}
                <div className="mb-3 text-gray-800">
                  <DecorativeScribble className="h-3 w-14" />
                </div>

                <p className="text-xs leading-relaxed text-gray-700 sm:text-sm">
                  {mainDescription}
                </p>
              </motion.div>

              {/* Small Pink/Yellow Decorative Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="hidden h-auto w-20 shrink-0 overflow-hidden rounded-2xl sm:block lg:w-24 lg:rounded-3xl"
                style={{
                  background:
                    "linear-gradient(180deg, #FFDF2C 0%, #FFDF2C 50%, #EFA4C9 50%, #EFA4C9 100%)",
                }}
              />
            </div>

            {/* Bottom Row - Two Feature Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              {/* Lime Green Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-2xl px-5 py-5 sm:px-6 sm:py-6 lg:rounded-3xl"
                style={{ backgroundColor: "#D7D93A" }}
              >
                <h3
                  className="mb-3 whitespace-pre-line text-lg leading-tight tracking-tight text-gray-900 sm:text-xl lg:text-2xl"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontWeight: 400,
                  }}
                >
                  {featureCard1.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-gray-700 sm:text-xs">
                  With {yearsOfExperience} years of multi-disciplinary design
                  experience, I blend beautiful visual design and the clarity of
                  UX, all under one roof.
                </p>
              </motion.div>

              {/* Yellow Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-2xl px-5 py-5 sm:px-6 sm:py-6 lg:rounded-3xl"
                style={{ backgroundColor: "#FFDF2C" }}
              >
                <h3
                  className="mb-3 whitespace-pre-line text-lg leading-tight tracking-tight text-gray-900 sm:text-xl lg:text-2xl"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontWeight: 400,
                  }}
                >
                  {featureCard2.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-gray-700 sm:text-xs">
                  {featureCard2.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
