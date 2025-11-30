"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Star, TrendingUp, MessageCircle } from "lucide-react";

interface HeroOdditFreshPerspectiveProps {
  title?: string;
  titleHighlight?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  socialProofText?: string;
  socialProofCount?: string;
  brands?: { name: string; logo?: string }[];
  stats?: { value: string; label: string; color: "red" | "mint" }[];
  illustrationSrc?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function HeroOdditFreshPerspective({
  title = "A Fresh Perspective",
  titleHighlight = "on your Customer\nJourney",
  description = "Conversion optimized design and UX for fast growing brands who want to improve performance, without sacrificing quality.",
  primaryButtonText = "Book A Call",
  secondaryButtonText = "Explore Our Products",
  socialProofText = "Happy Brands Worldwide",
  socialProofCount = "10,000+",
  brands = [
    { name: "the oodie" },
    { name: "Huel" },
    { name: "CORKCICLE." },
    { name: "CROSSNET" },
    { name: "Dr. Squatch" },
    { name: "JONES" },
  ],
  stats = [
    { value: "70%", label: "CVR", color: "red" },
    { value: "20%", label: "ADD TO CART", color: "mint" },
  ],
  illustrationSrc = "/registry/hero-oddit-fresh-perspective/illustration.png",
  onPrimaryClick,
  onSecondaryClick,
}: HeroOdditFreshPerspectiveProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#F9FEFD] overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-xl"
          >
            <h1 className="text-[#1E1B4B] text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              <span className="italic">{title}</span>
              <br />
              <span className="italic whitespace-pre-line">{titleHighlight}</span>
            </h1>

            <p className="text-[#4A4A68] text-base md:text-lg leading-relaxed mb-8 max-w-md">
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onSecondaryClick}
                className="px-6 py-3 border-2 border-[#1E1B4B] text-[#1E1B4B] font-medium rounded-lg hover:bg-[#1E1B4B] hover:text-white transition-colors duration-300"
              >
                {secondaryButtonText}
              </button>
              <button
                onClick={onPrimaryClick}
                className="px-6 py-3 bg-[#C4F4ED] text-[#1E1B4B] font-medium rounded-lg hover:bg-[#A8E8DF] transition-colors duration-300"
              >
                {primaryButtonText}
              </button>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <Image
                src={illustrationSrc}
                alt="Creative illustration"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="border-t border-[#E5E5F0]">
        <div className="container mx-auto px-6 py-8">
          {/* Stars and Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#1E1B4B] text-[#1E1B4B]"
                />
              ))}
            </div>
            <span className="text-[#1E1B4B] font-medium ml-2">
              {socialProofCount} {socialProofText}
            </span>
          </motion.div>

          {/* Brand Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8"
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="text-[#1E1B4B] font-bold text-lg md:text-xl tracking-tight opacity-80 hover:opacity-100 transition-opacity"
                style={{
                  fontFamily:
                    brand.name === "the oodie"
                      ? "cursive"
                      : brand.name === "Dr. Squatch"
                        ? "serif"
                        : "sans-serif",
                  fontStyle: brand.name === "Dr. Squatch" ? "italic" : "normal",
                }}
              >
                {brand.name}
              </div>
            ))}
          </motion.div>

          {/* Stats Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            {stats.map((stat, index) => (
              <StatBadge
                key={index}
                value={stat.value}
                label={stat.label}
                color={stat.color}
              />
            ))}

            {/* Chat Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-[#FEE8E7] text-[#1E1B4B] rounded-full text-sm font-medium hover:bg-[#FDD9D7] transition-colors">
              <MessageCircle className="w-4 h-4" />
              We&apos;re humans, let&apos;s chat!
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatBadge({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: "red" | "mint";
}) {
  const bgColor = color === "red" ? "bg-[#F87171]" : "bg-[#C4F4ED]";
  const textColor = color === "red" ? "text-white" : "text-[#1E1B4B]";

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 ${bgColor} ${textColor} rounded-lg`}
    >
      <span className="font-bold">{value}</span>
      <TrendingUp className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
