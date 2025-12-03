"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Category {
  id: string;
  label: string;
  image: string;
}

interface WebsiteTemplateCarouselProps {
  mode?: "preview" | "live";
  title?: React.ReactNode;
  subtitle?: string;
  categories?: Category[];
}

// [CUSTOMIZATION]
export const CUSTOMIZATION = {};
// [/CUSTOMIZATION]

const defaultCategories: Category[] = [
  {
    id: "saas",
    label: "SaaS Website",
    image: "/registry/website-template-carousel/saas-finance.png",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    image: "/registry/website-template-carousel/portfolio.png",
  },
  {
    id: "creative-agency",
    label: "Creative Agency",
    image: "/registry/website-template-carousel/creative-agency.png",
  },
  {
    id: "restaurant",
    label: "Restaurant",
    image: "/registry/website-template-carousel/restaurant.png",
  },
  {
    id: "architecture",
    label: "Architecture",
    image: "/registry/website-template-carousel/architecture.png",
  },
  {
    id: "consulting",
    label: "Consulting",
    image: "/registry/website-template-carousel/consulting.png",
  },
  {
    id: "construction",
    label: "Construction",
    image: "/registry/website-template-carousel/construction.png",
  },
];

export default function WebsiteTemplateCarousel({
  mode = "live",
  title = (
    <>
      Multipurpose website designs ready to shine
    </>
  ),
  subtitle = "Design your fully styled websites with AI",
  categories = defaultCategories,
}: WebsiteTemplateCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleCards = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % categories.length;
      result.push({ ...categories[index], originalIndex: index });
    }
    return result;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Left side - Title and category list */}
          <div className="flex-shrink-0 lg:w-[340px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[28px] font-normal italic leading-[1.15] tracking-tight text-gray-900 sm:text-[32px] lg:text-[36px]">
                {title}
              </h2>
              <p className="mt-4 text-sm text-gray-500">{subtitle}</p>
            </motion.div>

            {/* Category list */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 flex flex-col gap-2"
            >
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex items-center gap-2 text-left text-base transition-colors ${
                    index === activeIndex
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <span
                    className={`${
                      index === activeIndex ? "underline underline-offset-4" : ""
                    }`}
                  >
                    {category.label}
                  </span>
                  {index === activeIndex && (
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  )}
                </button>
              ))}
            </motion.nav>
          </div>

          {/* Right side - Carousel */}
          <div className="relative flex-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[320px] sm:h-[380px] lg:h-[420px]"
            >
              <AnimatePresence mode="popLayout">
                {visibleCards.map((card, index) => (
                  <motion.div
                    key={`${card.id}-${card.originalIndex}`}
                    initial={{ opacity: 0, scale: 0.95, x: 30 }}
                    animate={{
                      opacity: 1,
                      scale: 1 - index * 0.02,
                      x: index * 50,
                      zIndex: 3 - index,
                    }}
                    exit={{ opacity: 0, scale: 0.95, x: -30 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 overflow-hidden rounded-2xl shadow-xl"
                    style={{
                      transformOrigin: "left center",
                      width: "calc(100% - 100px)",
                    }}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={card.image}
                        alt={card.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Navigation arrows */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-6 flex items-center justify-center gap-4"
            >
              <button
                onClick={handlePrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-600"
                aria-label="Previous template"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-600"
                aria-label="Next template"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
