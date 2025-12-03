"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface Testimonial {
  id: number;
  quote: string;
  variant:
    | "brown"
    | "pink"
    | "orange"
    | "cream"
    | "sage"
    | "terracotta"
    | "peach"
    | "mustard";
}

interface TestimonialSliderProps {
  mode?: "light" | "dark";
  badgeText?: string;
  headlineRegular?: string;
  headlineItalic?: string;
  testimonials?: Testimonial[];
  chocolateImage?: string;
  strawberryImage?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I finally found a protein drink that doesn't upset my gut. It just fits - and I feel the difference.",
    variant: "brown",
  },
  {
    id: 2,
    quote:
      '"Prebiotics and protein in one drink? No sugar? No crash? No artificial sweeteners? Honestly, it\'s about time."',
    variant: "pink",
  },
  {
    id: 3,
    quote:
      '"I gave up on protein drinks because they all tasted fake. This one is smooth, clean - and doesn\'t mess with my stomach."',
    variant: "orange",
  },
  {
    id: 4,
    quote:
      '"Finally, a protein shake that actually tastes good and keeps me full until lunch. Game changer for my morning routine."',
    variant: "cream",
  },
  {
    id: 5,
    quote:
      '"I was skeptical at first, but after a month of daily use, my energy levels are more consistent than ever."',
    variant: "sage",
  },
  {
    id: 6,
    quote:
      '"As someone with a sensitive stomach, finding a protein drink I can actually enjoy was a revelation."',
    variant: "terracotta",
  },
  {
    id: 7,
    quote:
      '"The prebiotics make such a difference. No more bloating, just clean energy and great taste."',
    variant: "peach",
  },
  {
    id: 8,
    quote:
      '"I recommend this to all my clients. Clean ingredients, no artificial junk, and it actually works."',
    variant: "mustard",
  },
];

function TestimonialCard({
  testimonial,
  position,
}: {
  testimonial: Testimonial;
  position: "left" | "center" | "right";
}) {
  const variantStyles = {
    brown: "bg-[#803B2C] text-white",
    pink: "bg-[#FBDBE0] text-[#803B2C]",
    orange: "bg-[#FCAA2D] text-[#803B2C]",
    cream: "bg-[#F5E6D3] text-[#5C4033]",
    sage: "bg-[#9CAF88] text-white",
    terracotta: "bg-[#C4704B] text-white",
    peach: "bg-[#FFCBA4] text-[#803B2C]",
    mustard: "bg-[#D4A537] text-white",
  };

  const positionAnimations = {
    left: { x: -40, scale: 0.9, opacity: 0.6 },
    center: { x: 0, scale: 1, opacity: 1 },
    right: { x: 40, scale: 0.9, opacity: 0.6 },
  };

  return (
    <motion.div
      layout
      animate={positionAnimations[position]}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1,
      }}
      className={`
        flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl p-6 md:p-8
        ${variantStyles[testimonial.variant]}
        ${position === "center" ? "z-10" : ""}
      `}
    >
      <p className="text-sm md:text-base leading-relaxed font-medium">
        {testimonial.quote}
      </p>
    </motion.div>
  );
}

function NavigationButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-[#803B2C]/30 flex items-center justify-center
        hover:border-[#803B2C] hover:bg-[#803B2C]/5 transition-all duration-200"
      aria-label={direction === "left" ? "Previous testimonial" : "Next testimonial"}
    >
      {direction === "left" ? (
        <ArrowLeft className="w-4 h-4 text-[#803B2C]" />
      ) : (
        <ArrowRight className="w-4 h-4 text-[#803B2C]" />
      )}
    </button>
  );
}

export default function TestimonialSlider({
  mode = "light",
  badgeText = "TESTIMONIALS",
  headlineRegular = "Why people keep",
  headlineItalic = "coming back",
  testimonials = defaultTestimonials,
  chocolateImage = "/registry/testimonial-slider/chocolate.png",
  strawberryImage = "/registry/testimonial-slider/strawberries.png",
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleTestimonials = () => {
    const prevIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const nextIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;

    return [
      { testimonial: testimonials[prevIndex], position: "left" as const },
      { testimonial: testimonials[currentIndex], position: "center" as const },
      { testimonial: testimonials[nextIndex], position: "right" as const },
    ];
  };

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] bg-[#FEF6EF] overflow-hidden py-12 md:py-16">
      {/* Chocolate decoration - top left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-8 left-4 md:top-12 md:left-12 w-20 h-20 md:w-28 md:h-28"
      >
        <Image
          src={chocolateImage}
          alt="Chocolate decoration"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Strawberry decoration - bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-12 w-24 h-24 md:w-36 md:h-36"
      >
        <Image
          src={strawberryImage}
          alt="Strawberry decoration"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-4"
        >
          <span className="inline-block px-4 py-1.5 bg-[#803B2C] text-white text-xs font-semibold tracking-wider rounded-full uppercase">
            {badgeText}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a]">
            <span className="font-medium">{headlineRegular}</span>
            <br />
            <span
              className="font-serif italic"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {headlineItalic}
            </span>
          </h2>
        </motion.div>

        {/* Testimonials slider */}
        <div className="relative flex justify-center items-center gap-2 md:gap-4 mb-10 md:mb-14 overflow-hidden px-4">
          <AnimatePresence mode="sync">
            {getVisibleTestimonials().map(({ testimonial, position }) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                position={position}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center gap-3"
        >
          <NavigationButton direction="left" onClick={handlePrev} />
          <NavigationButton direction="right" onClick={handleNext} />
        </motion.div>
      </div>
    </section>
  );
}
