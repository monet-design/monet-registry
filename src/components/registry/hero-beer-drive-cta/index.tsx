"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroBeerDriveCtaProps {
  badgeText?: string;
  heading?: string;
  description?: string;
  phoneLabel?: string;
  phoneNumber?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroBeerDriveCta({
  badgeText = "BEER\nDRIVE",
  heading = "MEET THE\nFIRST BEERDRIVE\nIN UKRAINE!",
  description = "We took care of people who are constantly on the move and created a convenient way of fast and high-quality service, where you can order your favorite beer or meals and snacks from our restaurant without leaving your car.",
  phoneLabel = "Call for online ordering",
  phoneNumber = "067 656 44 31",
  ctaText = "See the menu",
  ctaHref = "#",
  imageSrc = "/registry/hero-beer-drive-cta/hero-image.png",
  imageAlt = "Beer drive service",
}: HeroBeerDriveCtaProps) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');
      `}</style>
      <section className="relative w-full bg-[#0F1D18] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image with badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
                {/* Badge text */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute top-4 left-4 z-10"
                >
                  <h2
                    className="text-[#E2D5A1] text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight tracking-tight"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {badgeText.split("\n").map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>
                </motion.div>

                {/* Image */}
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-left"
            >
              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#E2D5A1] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {heading.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-[#939A92] text-base md:text-lg leading-relaxed mb-8 max-w-lg"
              >
                {description}
              </motion.p>

              {/* Phone info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-8"
              >
                <p className="text-[#939A92] text-sm mb-1">{phoneLabel}</p>
                <p className="text-[#E2D5A1] text-lg font-medium">{phoneNumber}</p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-between gap-8 px-6 py-3 border border-[#E2D5A1]/60 rounded-full text-[#E2D5A1] hover:bg-[#E2D5A1]/10 transition-colors duration-300 group"
                >
                  <span className="text-base">{ctaText}</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
