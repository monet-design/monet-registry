"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface RbbAboutHeroProps {
  logoText?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image1Src?: string;
  image1Alt?: string;
  image2Src?: string;
  image2Alt?: string;
}

export default function RbbAboutHero({
  logoText = "RBB",
  title = "About",
  subtitle = "Expert, user-friendly advice",
  description = "We provide our clients with the best prospect of success before competition authorities and courts by understanding the competitive reality of their industries. We combine this with rigorous economic analysis, supported by facts and data, cutting edge techniques, presented in clear and compelling expert reports. Our approach is practical and user-friendly; we prioritise what matters.",
  image1Src = "/registry/rbb-about-hero/team-1.jpg",
  image1Alt = "Team member smiling in office",
  image2Src = "/registry/rbb-about-hero/team-2.jpg",
  image2Alt = "Team member in meeting",
}: RbbAboutHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#F6F5EC] overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-10 lg:left-10"
      >
        <span className="font-serif text-lg sm:text-xl tracking-wide text-[#1A1A1A]">
          {logoText}
          <span className="text-[#1A1A1A]">|</span>
        </span>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:px-8 sm:pt-28 lg:px-12 lg:pt-20">
        {/* Top Image - Partially visible on left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute top-16 -left-8 sm:top-20 sm:-left-4 lg:top-12 lg:left-0 w-[180px] sm:w-[220px] lg:w-[280px] h-[140px] sm:h-[170px] lg:h-[200px] overflow-hidden"
        >
          <Image
            src={image1Src}
            alt={image1Alt}
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* Title - Centered */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#1A1A1A] mt-8 sm:mt-12 lg:mt-16"
        >
          {title}
        </motion.h1>

        {/* Grid Layout for Image and Content */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 lg:col-start-2"
          >
            <div className="relative w-full aspect-[4/5] max-w-[400px] mx-auto lg:mx-0 overflow-hidden">
              <Image
                src={image2Src}
                alt={image2Alt}
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Content Section with Vertical Line */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 lg:col-start-7 flex"
          >
            {/* Vertical Divider Line */}
            <div className="hidden lg:block w-px bg-[#D4D2CE] mr-8 self-stretch" />

            {/* Text Content */}
            <div className="flex-1 pt-4 lg:pt-8">
              <h2 className="text-xl sm:text-2xl font-normal text-[#1A1A1A] mb-4 sm:mb-6">
                {subtitle}
              </h2>
              <p className="text-sm sm:text-[15px] leading-relaxed text-[#5A5A5A]">
                {description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
