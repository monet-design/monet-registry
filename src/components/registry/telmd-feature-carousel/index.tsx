"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "./font.css";

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

interface FeatureSlide {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface TelmdFeatureCarouselProps {
  mode?: "light" | "dark";
  sectionTitle?: string;
  sectionSubtitle?: string;
  slides?: FeatureSlide[];
}

const defaultSlides: FeatureSlide[] = [
  {
    id: 1,
    title: "Set Your Goal",
    description:
      "Set a health and wellness goal. Through answering a set of five questions you can better understand where you are today and create goals that will lead you to live the life you deserve.",
    imageSrc: "/registry/telmd-feature-carousel/dashboard-mockup.png",
    imageAlt: "TelMD Dashboard showing health goals and wellness team",
  },
  {
    id: 2,
    title: "Track Progress",
    description:
      "Monitor your daily activities and health metrics. Our intuitive dashboard helps you visualize your journey and stay motivated with real-time insights.",
    imageSrc: "/registry/telmd-feature-carousel/dashboard-mockup.png",
    imageAlt: "TelMD Progress tracking dashboard",
  },
  {
    id: 3,
    title: "Connect with Experts",
    description:
      "Access a team of wellness professionals ready to support your journey. Get personalized advice and guidance from certified health coaches.",
    imageSrc: "/registry/telmd-feature-carousel/dashboard-mockup.png",
    imageAlt: "TelMD Wellness team connection",
  },
  {
    id: 4,
    title: "Personalized Plans",
    description:
      "Receive customized health plans tailored to your unique needs. Our AI-powered system adapts recommendations based on your progress.",
    imageSrc: "/registry/telmd-feature-carousel/dashboard-mockup.png",
    imageAlt: "TelMD Personalized health plans",
  },
  {
    id: 5,
    title: "Community Support",
    description:
      "Join a thriving community of health-conscious individuals. Share experiences, celebrate wins, and find motivation from others on similar journeys.",
    imageSrc: "/registry/telmd-feature-carousel/dashboard-mockup.png",
    imageAlt: "TelMD Community features",
  },
  {
    id: 6,
    title: "Achieve Results",
    description:
      "See real transformation with our proven methodology. Track milestones, earn achievements, and celebrate your health victories along the way.",
    imageSrc: "/registry/telmd-feature-carousel/dashboard-mockup.png",
    imageAlt: "TelMD Results and achievements",
  },
];

function NavigationButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/50 bg-[#1A1D35] text-slate-300 transition-all duration-300 hover:border-[#E86C4F]/50 hover:bg-[#1A1D35]/80 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    >
      <Icon className="h-4 w-4" strokeWidth={1.5} />
    </button>
  );
}

function PageIndicator({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const formattedCurrent = String(current).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");

  return (
    <div className="flex items-baseline gap-1.5">
      <span className="text-xl font-semibold tracking-tight text-[#E86C4F]">{formattedCurrent}</span>
      <span className="text-sm text-slate-500">/ {formattedTotal}</span>
    </div>
  );
}

export default function TelmdFeatureCarousel({
  mode = "light",
  sectionTitle = "Features",
  sectionSubtitle = "TelMD Supports You in Becoming the YOU You Want to Be!",
  slides = defaultSlides,
}: TelmdFeatureCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full overflow-visible">
      {/* Dark Navy Background Section */}
      <div className="relative bg-[#0D1025] px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center"
          >
            <h2 className="font-instrument-serif text-4xl font-normal italic tracking-tight text-white sm:text-5xl lg:text-6xl">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm tracking-wide text-slate-400 sm:text-base">
              {sectionSubtitle}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid items-start gap-6 lg:grid-cols-[200px_1fr] lg:gap-6">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col pt-2"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-2"
                >
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {currentSlide.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed text-slate-400 sm:text-xs">
                    {currentSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-5 flex items-center gap-2">
                <NavigationButton direction="prev" onClick={goToPrevious} />
                <NavigationButton direction="next" onClick={goToNext} />
              </div>

              {/* Page Indicator */}
              <div className="mt-5">
                <PageIndicator
                  current={currentIndex + 1}
                  total={slides.length}
                />
              </div>
            </motion.div>

            {/* Right Side - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-lg border border-slate-700/30 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={currentSlide.imageSrc}
                      alt={currentSlide.imageAlt}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Background Glow Effects */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
        >
          <div className="absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-[#C9A962]/5 blur-3xl" />
          <div className="absolute -left-20 bottom-1/4 h-48 w-48 rounded-full bg-[#1A1D35]/50 blur-3xl" />
          <div className="absolute right-1/3 top-0 h-40 w-40 rounded-full bg-[#E86C4F]/5 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
