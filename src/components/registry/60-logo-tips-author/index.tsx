"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface LogoTipsAuthorProps {
  avatarSrc?: string;
  avatarAlt?: string;
  heading?: string;
  primaryDescription?: string;
  secondaryDescription?: string;
  backgroundColor?: string;
  headingColor?: string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  heartColor?: string;
}

// Dashed Heart SVG Component
function DashedHeart({ color = "#B4B4B4" }: { color?: string }) {
  return (
    <svg
      width="54"
      height="48"
      viewBox="0 0 54 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27 47C27 47 1 31 1 14C1 6.82 6.82 1 14 1C19.5 1 24.24 4.22 27 9C29.76 4.22 34.5 1 40 1C47.18 1 53 6.82 53 14C53 31 27 47 27 47Z"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function LogoTipsAuthor({
  avatarSrc = "/beautiful-sections/60-logo-tips-author/author-avatar.jpg",
  avatarAlt = "Gal Shir - Brand Design Specialist",
  heading = "Gal Shir is a brand design specialist creating logos since 2010",
  primaryDescription = "Slow-cooked over a year, this book is a culmination of everything I've learned about logo design through my 15-year career. It's a hands-on guide created to help you become a succesful logo designer and make a living doing a fulfilling and meaningful work. In it, you'll find step-by-step instructions, clear explanations, and plenty of examples. Whether you're just starting out or looking to sharpen your craft, this book will inspire, motivate, and provide you with everything you need to take your logo design skills to the next level.",
  secondaryDescription = "In this book, you'll find step-by-step instructions, clear explanations, and plenty of examples. Whether you're just starting out or looking to sharpen your craft, this book will inspire, motivate, and provide you with everything you need to take your logo design skills to the next level.",
  backgroundColor = "#EBEBEB",
  headingColor = "#1A1A1A",
  primaryTextColor = "#727272",
  secondaryTextColor = "#B2B2B2",
  heartColor = "#B4B4B4",
}: LogoTipsAuthorProps) {
  return (
    <section
      className="w-full py-16 md:py-24 lg:py-32"
      style={{ backgroundColor }}
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10"
          >
            <div className="relative h-[130px] w-[130px] overflow-hidden rounded-full">
              <Image
                src={avatarSrc}
                alt={avatarAlt}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-8 text-2xl md:text-3xl lg:text-[32px] leading-tight md:leading-snug"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: headingColor,
            }}
          >
            {heading}
          </motion.h2>

          {/* Primary Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-6 text-sm md:text-[15px] leading-relaxed md:leading-[1.8]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: primaryTextColor,
            }}
          >
            {primaryDescription}
          </motion.p>

          {/* Secondary Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mb-12 text-sm md:text-[15px] leading-relaxed md:leading-[1.8]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: secondaryTextColor,
            }}
          >
            {secondaryDescription}
          </motion.p>

          {/* Dashed Heart Icon */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <DashedHeart color={heartColor} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
