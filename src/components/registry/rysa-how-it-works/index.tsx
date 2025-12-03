"use client";

import React from "react";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

// CUSTOMIZATION
export const CUSTOMIZATION = {};

interface Step {
  stepLabel: string;
  title: string;
  description: string;
  imageSrc: string;
}

interface RysaHowItWorksProps {
  mode?: "light" | "dark";
  heading?: string;
  steps?: Step[];
  buttonText?: string;
  onButtonClick?: () => void;
}

const defaultSteps: Step[] = [
  {
    stepLabel: "STEP ONE",
    title: "Upload & Sync",
    description:
      "Snap, upload & save your outfits, categorize them effortlessly, and see your full wardrobe at a glance.",
    imageSrc: "/beautiful-sections/rysa-how-it-works/step1-upload.png",
  },
  {
    stepLabel: "STEP TWO",
    title: "Connect with Your Stylist",
    description:
      "Get a personal match, expert guidance, and a custom closet strategy tailored to you.",
    imageSrc: "/beautiful-sections/rysa-how-it-works/step2-stylist.png",
  },
  {
    stepLabel: "STEP THREE",
    title: "Get Your Style Guide",
    description:
      "Receive tailored outfits, make the most of what you own, and stay prepared with event-ready styling.",
    imageSrc: "/beautiful-sections/rysa-how-it-works/step3-guide.png",
  },
  {
    stepLabel: "STEP FOUR",
    title: "Save Time Dressing",
    description:
      "Enjoy ready-to-wear looks, dress with ease, and free up your day for what matters most.",
    imageSrc: "/beautiful-sections/rysa-how-it-works/step4-wardrobe.png",
  },
];

const StepCard = ({
  step,
  index,
}: {
  step: Step;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden rounded-lg bg-[#F5F5F5]">
        <Image
          src={step.imageSrc}
          alt={step.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Step Label */}
      <span
        className="font-inter text-xs tracking-[0.1em] text-[#666666] mb-2"
        style={{ fontWeight: 400 }}
      >
        {step.stepLabel}
      </span>

      {/* Title */}
      <h3
        className="font-inter text-lg md:text-xl font-semibold text-[#171717] mb-2"
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="font-inter text-sm md:text-base text-[#666666] leading-relaxed"
        style={{ fontWeight: 400 }}
      >
        {step.description}
      </p>
    </motion.div>
  );
};

export default function RysaHowItWorks({
  mode = "light",
  heading = "Your path to wardrobe liberation",
  steps = defaultSteps,
  buttonText = "Claim Your Invitation",
  onButtonClick,
}: RysaHowItWorksProps) {
  return (
    <section
      className="w-full py-16 md:py-24 px-4 md:px-8 bg-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-instrument-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] mb-12 md:mb-16 italic"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          {heading}
        </motion.h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onButtonClick}
            className="font-inter flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-[#171717] rounded-full hover:bg-[#2a2a2a] transition-colors duration-200"
          >
            <Plus className="w-5 h-5" strokeWidth={2} />
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
