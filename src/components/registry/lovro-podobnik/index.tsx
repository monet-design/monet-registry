"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface LovroPodobnikProps {
  title?: string;
  backgroundText?: string;
  name?: string;
  introText?: string;
  approachTitle?: string;
  approachText?: string;
  benefitText?: string;
  highlightQuote?: string;
  ctaText?: string;
  profileImage?: string;
}

export default function LovroPodobnik({
  title = "The Designer",
  backgroundText = "Behind the screen",
  name = "Lovro",
  introText = "Hello there! My name is Lovro, and I'm a freelance designer. I work directly with clients to provide high-quality design solutions that help businesses achieve their goals.",
  approachTitle = "My approach is simple:",
  approachText = "instead of charging per project or per hour, I offer a flat monthly rate that covers as many design requests as you need.",
  benefitText = "This way, you can focus on your business without worrying about the cost of design work.",
  highlightQuote = "My ultimate goal is your success. I'am committed to working with you until you're completely satisfied.",
  ctaText = "If you're interested in learning more about my approach and how I can help grow your business, let's schedule a free call. Together, we can take your business to the next level.",
  profileImage = "/registry/lovro-podobnik/profile.png",
}: LovroPodobnikProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030303] px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-xl font-medium tracking-wide text-white sm:text-2xl"
        >
          {title}
        </motion.h1>

        {/* Main Content Grid */}
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Side - Profile Image with Glow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            {/* Background Text - Behind the screen */}
            <div className="pointer-events-none absolute -top-8 left-0 right-0 select-none whitespace-nowrap text-center lg:-left-20 lg:-right-20 lg:-top-4 lg:text-left">
              <span className="text-2xl font-medium italic tracking-wide text-white/[0.06] sm:text-3xl lg:text-4xl">
                {backgroundText}
              </span>
            </div>

            {/* Profile Image Card with Glow Effect */}
            <div className="relative mx-auto w-fit lg:mx-0">
              {/* Outer Glow */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-teal-500/15 to-emerald-500/20 blur-xl" />
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-cyan-400/10 via-teal-400/10 to-emerald-400/10 blur-md" />

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-1 shadow-2xl shadow-cyan-500/10">
                <div className="relative h-52 w-44 overflow-hidden rounded-lg sm:h-60 sm:w-52">
                  <Image
                    src={profileImage}
                    alt={`${name}'s profile`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 176px, 208px"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 space-y-5"
          >
            {/* Intro Paragraph */}
            <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
              {introText}
            </p>

            {/* Approach Paragraph */}
            <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
              <span className="font-semibold text-white">{approachTitle}</span>{" "}
              {approachText}
            </p>

            {/* Benefit Text */}
            <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
              {benefitText}
            </p>

            {/* Highlighted Quote */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative border-l-2 border-white/60 py-2 pl-4"
            >
              <p className="text-sm font-medium leading-relaxed text-white sm:text-base">
                {highlightQuote}
              </p>
            </motion.div>

            {/* CTA Text */}
            <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
              {ctaText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
