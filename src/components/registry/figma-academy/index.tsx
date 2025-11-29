"use client";

import { motion } from "motion/react";
import { Twitter } from "lucide-react";
import Image from "next/image";

interface FigmaAcademyProps {
  profileImage?: string;
  name?: string;
  sectionTitle?: string;
  description?: string[];
  trustedText?: string;
  twitterUrl?: string;
}

export default function FigmaAcademy({
  profileImage = "https://picsum.photos/seed/figma-creator/200/200",
  name = "Ridd",
  sectionTitle = "Meet the creator",
  description = [
    "Hi! My name is Michael Riddering. I've been designing products every day for the past decade. Currently, I'm the founding designer at Maven—a new platform for cohort-based courses.",
    "I love to teach, so I also spend time mentoring others as a design advisor for Shift Nudge—a course specializing in UI design.",
  ],
  trustedText = "Trusted by 3,000+ designers",
  twitterUrl = "#",
}: FigmaAcademyProps) {
  return (
    <section className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden bg-[#080B36] px-4 py-16 sm:px-6 lg:px-8">
      {/* Diagonal Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top-left triangle */}
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            background:
              "linear-gradient(135deg, #080B36 0%, #080B36 40%, transparent 40%)",
          }}
        />
        {/* Bottom-right triangle */}
        <div
          className="absolute bottom-0 right-0 h-full w-full"
          style={{
            background:
              "linear-gradient(-45deg, #080B36 0%, #080B36 40%, transparent 40%)",
          }}
        />
        {/* Light diagonal strip in the middle */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, transparent 25%, rgba(200, 200, 220, 0.15) 25%, rgba(200, 200, 220, 0.15) 75%, transparent 75%)",
          }}
        />
      </div>

      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[480px]"
      >
        {/* Card */}
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background:
              "linear-gradient(145deg, rgba(248, 245, 250, 0.95) 0%, rgba(232, 229, 238, 0.95) 50%, rgba(200, 199, 214, 0.9) 100%)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Header with Avatar and Twitter */}
          <div className="mb-6 flex items-start justify-between">
            {/* Avatar with Name Tooltip */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="relative"
              >
                {/* Profile Image */}
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-lg sm:h-20 sm:w-20">
                  <Image
                    src={profileImage}
                    alt={name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Name Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="absolute -bottom-2 left-12 sm:left-14"
                >
                  <div className="relative">
                    {/* Speech bubble pointer */}
                    <div
                      className="absolute -left-2 top-1/2 h-0 w-0 -translate-y-1/2"
                      style={{
                        borderTop: "6px solid transparent",
                        borderBottom: "6px solid transparent",
                        borderRight: "8px solid white",
                      }}
                    />
                    {/* Name badge */}
                    <div className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-800 shadow-md">
                      {name}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Twitter Icon */}
            <motion.a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-[#1DA1F2] transition-colors hover:text-[#0d8ddb]"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 fill-current" />
            </motion.a>
          </div>

          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-4 text-lg font-semibold text-gray-900 sm:text-xl"
          >
            {sectionTitle}
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mb-6 space-y-4"
          >
            {description.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-relaxed text-gray-600 sm:text-[15px]"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm sm:text-sm">
              {trustedText}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
