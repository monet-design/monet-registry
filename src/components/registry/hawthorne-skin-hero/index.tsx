"use client";

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

import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles, Leaf, Gift, ShoppingBag } from "lucide-react";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  href?: string;
}

interface HawthorneSkinHeroProps {
  mode?: "light" | "dark";
  hashtag?: string;
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  consultationImage?: string;
  productsImage?: string;
  treatmentImage?: string;
  serviceCards?: ServiceCard[];
}

const defaultServiceCards: ServiceCard[] = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Skin Treatments",
    href: "#",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Brows & Beauty",
    href: "#",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Offers & Packages",
    href: "#",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Shop Skincare",
    href: "#",
  },
];

export default function HawthorneSkinHero({
  mode = "light",
  hashtag = "#RECONNECTWITHYOURINNERBEAUTY",
  headline = "Holistic skin &\nbeauty lab in\nBrisbane",
  description = "Discover Brisbane's ultimate skin & beauty experience with a range of personalised treatments and facials designed to reveal your most confident, radiant self.",
  primaryButtonText = "Book Now",
  primaryButtonHref = "#",
  secondaryButtonText = "Explore Our Treatments",
  secondaryButtonHref = "#",
  consultationImage = "/registry/hawthorne-skin-hero/consultation.png",
  productsImage = "/registry/hawthorne-skin-hero/products.png",
  treatmentImage = "/registry/hawthorne-skin-hero/facial-treatment.png",
  serviceCards = defaultServiceCards,
}: HawthorneSkinHeroProps) {
  return (
    <section className="relative w-full bg-white font-sans">
      {/* Hero Section with Gradient Background */}
      <div className="relative mx-4 mt-4 rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#e8ede9] via-[#dce5de] to-[#c5d4c9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Hashtag */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#276A5E] text-xs tracking-[0.2em] font-medium uppercase"
              >
                {hashtag}
              </motion.p>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl text-[#1a3a32] leading-[1.1] font-serif italic"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {headline.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < headline.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[#3d5c53] text-base md:text-lg max-w-md leading-relaxed"
              >
                {description}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <a
                  href={primaryButtonHref}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#2D6E61] text-white text-sm font-medium rounded-full hover:bg-[#245a50] transition-colors duration-300"
                >
                  {primaryButtonText}
                </a>
                <a
                  href={secondaryButtonHref}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#1a3a32] text-sm font-medium rounded-full border border-[#d0d5d2] hover:bg-gray-50 transition-colors duration-300"
                >
                  {secondaryButtonText}
                </a>
              </motion.div>
            </motion.div>

            {/* Right Image Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative h-[400px] md:h-[480px] lg:h-[520px]"
            >
              {/* Main Consultation Image */}
              <div className="absolute top-0 left-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={consultationImage}
                  alt="Spa consultation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Products Image */}
              <div className="absolute bottom-8 left-[10%] w-[40%] h-[35%] rounded-2xl overflow-hidden shadow-lg z-10">
                <Image
                  src={productsImage}
                  alt="Skincare products"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Treatment Image */}
              <div className="absolute top-[15%] right-0 w-[40%] h-[55%] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={treatmentImage}
                  alt="Facial treatment"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute top-[5%] right-[35%] text-[#2D6E61]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute top-[25%] right-[5%] text-[#2D6E61]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className="absolute bottom-[35%] right-[38%] text-[#2D6E61]"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {serviceCards.map((card, index) => (
            <motion.a
              key={index}
              href={card.href || "#"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="group flex flex-col items-start p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#2D6E61]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#e8f0ed] to-[#d4e4dc] text-[#2D6E61] mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <span className="text-[#1a3a32] font-medium text-sm md:text-base">
                {card.title}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Google Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap');
      `}</style>
    </section>
  );
}
