"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "./font.css";

interface FeatureSlide {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface TelmdFeatureCarouselProps {
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
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-transparent text-white transition-all duration-300 hover:border-white/70 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
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
    <div className="flex items-baseline gap-1.5 text-white">
      <span className="text-xl font-semibold tracking-tight">{formattedCurrent}</span>
      <span className="text-sm text-white/50">/ {formattedTotal}</span>
    </div>
  );
}

export default function TelmdFeatureCarousel({
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
      {/* Purple Background Section */}
      <div
        className="relative px-4 pb-24 pt-10 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(180deg, #9173F9 0%, #805DFF 100%)",
        }}
      >
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center"
          >
            <h2 className="font-playfair text-3xl font-normal italic text-white sm:text-4xl">
              {sectionTitle}
            </h2>
            <p className="mx-auto mt-2 max-w-md text-[11px] tracking-wide text-white/60 sm:text-xs">
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
                  <p className="text-[11px] leading-relaxed text-white/60 sm:text-xs">
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
                  className="relative overflow-hidden rounded-lg bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]"
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
      </div>
    </section>
  );
}
