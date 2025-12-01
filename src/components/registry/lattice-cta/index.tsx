"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

interface ReviewBadge {
  rating: string;
  platform: string;
  icon: React.ReactNode;
}

interface LatticeCtaProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  reviews?: ReviewBadge[];
}

// G2 Logo Component
const G2Logo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="#6B7280" strokeWidth="1.5" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="11"
      fontWeight="600"
      fill="#6B7280"
      fontFamily="system-ui, sans-serif"
    >
      G
    </text>
  </svg>
);

// Capterra Logo Component
const CapterraLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="#6B7280" strokeWidth="1.5" />
    <path
      d="M8 16L12 6L16 16"
      stroke="#6B7280"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function LatticeCta({
  title = "Your people are your business",
  subtitle = "Ensure both are successful with Lattice.",
  buttonText = "Request a demo",
  onButtonClick,
  reviews = [
    {
      rating: "4.7",
      platform: "G2.com",
      icon: <G2Logo />,
    },
    {
      rating: "4.5",
      platform: "Capterra",
      icon: <CapterraLogo />,
    },
  ],
}: LatticeCtaProps) {
  return (
    <section
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{
        backgroundColor: "#FDFBF9",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Cloud-like gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left cloud */}
        <div
          className="absolute -top-20 -left-20 w-[600px] h-[400px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, #D7FCE5 0%, #E8FDEC 40%, transparent 70%)",
          }}
        />
        {/* Top right cloud */}
        <div
          className="absolute -top-10 right-0 w-[500px] h-[350px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, #E4FDE0 0%, #F1FCF3 40%, transparent 70%)",
          }}
        />
        {/* Center cloud */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, #C2DDCA 0%, #D7FCE5 30%, transparent 60%)",
          }}
        />
        {/* Bottom left cloud */}
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, #E8FDEC 0%, #F1FCF3 40%, transparent 70%)",
          }}
        />
        {/* Bottom right cloud */}
        <div
          className="absolute bottom-10 right-10 w-[450px] h-[320px] rounded-full opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, #D7FCE5 0%, #E4FDE0 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          style={{ color: "#031F1D" }}
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl lg:text-2xl"
          style={{ color: "#031F1D" }}
        >
          {subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onButtonClick}
          className="mt-8 px-8 py-4 text-base md:text-lg font-medium text-white rounded-xl transition-all duration-200 hover:shadow-lg"
          style={{
            backgroundColor: "#2F7E75",
            boxShadow: "0 4px 14px rgba(47, 126, 117, 0.25)",
          }}
        >
          {buttonText}
        </motion.button>

        {/* Review Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {reviews.map((review, index) => (
            <div key={index} className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span
                className="text-sm md:text-base font-medium"
                style={{ color: "#4B5563" }}
              >
                {review.rating}
              </span>
              <span
                className="text-sm md:text-base"
                style={{ color: "#6B7280" }}
              >
                on {review.platform}
              </span>
              {review.icon}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
