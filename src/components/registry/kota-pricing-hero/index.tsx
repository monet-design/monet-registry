"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface KotaPricingHeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  leftImage?: string;
  rightImage?: string;
}

export default function KotaPricingHero({
  badge = "PRICING",
  title = "An affordable way to scale\nyour benefits",
  subtitle = "No minimums, initial fees or contracts – get started\nin minutes",
  leftImage = "/registry/kota-pricing-hero/person-left.jpg",
  rightImage = "/registry/kota-pricing-hero/person-right.jpg",
}: KotaPricingHeroProps) {
  const titleLines = title.split("\n");
  const subtitleLines = subtitle.split("\n");

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24">
        {/* Text Content - Centered */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-gray-800">
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-serif text-4xl leading-tight font-normal italic text-gray-900 sm:text-5xl md:text-6xl"
          >
            {titleLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            {subtitleLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < subtitleLines.length - 1 && <br />}
              </span>
            ))}
          </motion.p>
        </div>

        {/* Left Side - Image with Blob */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute left-0 top-1/2 -translate-y-1/3 hidden md:block"
          style={{ width: "40%", maxWidth: "450px" }}
        >
          <div className="relative">
            {/* Purple Blob Background - Left Side */}
            <svg
              viewBox="0 0 400 500"
              className="absolute -right-8 top-1/2 -z-10 -translate-y-1/2 w-64 h-80"
              fill="none"
            >
              <path
                d="M200 50 C320 80, 380 180, 350 300 C320 420, 200 480, 100 420 C0 360, 20 200, 80 120 C140 40, 80 20, 200 50"
                fill="#BBA5F7"
                opacity="0.6"
              />
            </svg>

            {/* Orange Starburst */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -right-4 top-1/3 z-20"
            >
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                  d="M25 0 L28 18 L45 10 L32 22 L50 25 L32 28 L45 40 L28 32 L25 50 L22 32 L5 40 L18 28 L0 25 L18 22 L5 10 L22 18 Z"
                  fill="#F0916C"
                />
              </svg>
            </motion.div>

            {/* Image with organic mask */}
            <div className="relative overflow-hidden" style={{
              clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%)",
              borderRadius: "0 0 40% 0"
            }}>
              <Image
                src={leftImage}
                alt="Person working"
                width={400}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image with Blob */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute right-0 top-1/2 -translate-y-1/4 hidden md:block"
          style={{ width: "38%", maxWidth: "420px" }}
        >
          <div className="relative">
            {/* Large Purple Blob - Right Side */}
            <svg
              viewBox="0 0 300 400"
              className="absolute -left-20 top-0 z-10 w-72 h-96"
              fill="none"
            >
              <path
                d="M150 20 C250 40, 280 120, 270 200 C260 280, 200 380, 100 360 C40 345, 60 280, 80 220 C100 160, 50 80, 150 20"
                fill="#BBA5F7"
                opacity="0.7"
              />
            </svg>

            {/* Small Purple Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute -bottom-8 left-1/4 z-20"
            >
              <div className="h-8 w-8 rounded-full bg-[#BBA5F7] opacity-80" />
            </motion.div>

            {/* Image with organic mask */}
            <div className="relative z-20 overflow-hidden" style={{
              clipPath: "polygon(0% 0%, 70% 0%, 100% 30%, 100% 100%, 0% 100%)",
              borderRadius: "0 0 0 40%"
            }}>
              <Image
                src={rightImage}
                alt="Person working"
                width={400}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Images - Stacked */}
      <div className="relative z-0 flex justify-center gap-4 px-4 pb-12 md:hidden">
        <div className="relative w-1/2">
          <svg
            viewBox="0 0 200 250"
            className="absolute -right-4 top-1/2 -z-10 -translate-y-1/2 w-32 h-40"
            fill="none"
          >
            <path
              d="M100 25 C160 40, 190 90, 175 150 C160 210, 100 240, 50 210 C0 180, 10 100, 40 60 C70 20, 40 10, 100 25"
              fill="#BBA5F7"
              opacity="0.6"
            />
          </svg>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={leftImage}
              alt="Person working"
              width={200}
              height={250}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
        <div className="relative w-1/2">
          <svg
            viewBox="0 0 200 250"
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 w-32 h-40"
            fill="none"
          >
            <path
              d="M100 10 C160 20, 180 80, 170 130 C160 180, 130 230, 70 220 C30 212, 40 170, 50 130 C60 90, 30 50, 100 10"
              fill="#BBA5F7"
              opacity="0.7"
            />
          </svg>
          <div className="relative z-20 overflow-hidden rounded-2xl">
            <Image
              src={rightImage}
              alt="Person working"
              width={200}
              height={250}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
