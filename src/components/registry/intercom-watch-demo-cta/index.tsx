"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface IntercomWatchDemoCtaProps {
  /** Main headline - first line */
  headlineLine1?: string;
  /** Main headline - second line */
  headlineLine2?: string;
  /** Description text with pricing info */
  description?: string;
  /** Primary button text */
  primaryButtonText?: string;
  /** Secondary button text */
  secondaryButtonText?: string;
  /** Primary button click handler */
  onPrimaryClick?: () => void;
  /** Secondary button click handler */
  onSecondaryClick?: () => void;
  /** Background image source */
  backgroundImage?: string;
}

export default function IntercomWatchDemoCta({
  headlineLine1 = "One suite.",
  headlineLine2 = "One contract.",
  description = "From $0.99 per resolution\n+ $29/seat per month",
  primaryButtonText = "View pricing",
  secondaryButtonText = "Start free trial",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
  backgroundImage = "/registry/intercom-watch-demo-cta/poppy-field.png",
}: IntercomWatchDemoCtaProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Poppy field illustration"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-6 py-20 md:min-h-[600px] md:py-28">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 text-center text-4xl font-semibold leading-tight tracking-tight text-[#1a1a1a] md:text-5xl lg:text-6xl"
        >
          {headlineLine1}
          <br />
          {headlineLine2}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-8 text-center text-sm leading-relaxed text-[#5c5c5c] md:text-base"
          style={{ whiteSpace: "pre-line" }}
        >
          {description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {/* Secondary Button (View pricing) */}
          <button
            onClick={onSecondaryClick}
            className="rounded-full border border-[#1a1a1a]/20 bg-white/80 px-5 py-2.5 text-sm font-medium text-[#1a1a1a] backdrop-blur-sm transition-all hover:border-[#1a1a1a]/40 hover:bg-white"
          >
            {primaryButtonText}
          </button>

          {/* Primary Button (Start free trial) */}
          <button
            onClick={onPrimaryClick}
            className="rounded-full bg-[#1a1a1a] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333]"
          >
            {secondaryButtonText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
