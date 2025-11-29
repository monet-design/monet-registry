"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { MapPin } from "lucide-react";

interface GalShirProps {
  contactLabel?: string;
  email?: string;
  emailDescription?: string;
  location?: string;
  aboutLabel?: string;
  profileImage?: string;
  headline?: string;
  description?: string;
  readMoreText?: string;
  onReadMoreClick?: () => void;
  emailHref?: string;
}

export default function GalShir({
  contactLabel = "LET'S CHAT",
  email = "hi@gal.sh",
  emailDescription = "Drop me an email and I'll get back to you as soon as I can",
  location = "Tel Aviv",
  aboutLabel = "ABOUT",
  profileImage = "https://picsum.photos/seed/galshir/80/80",
  headline = "Gal Shir is an independent brand designer based Tel Aviv",
  description = "Gal helps innovative startups to develop and define their unique visual identity. Through logo design, visual language, illustration, and art direction, Gal provides a fundamental package for young brands that haven't set their visual footprint yet, or alternatively, a fresh makeover for established brands who want to look modern and attractive.",
  readMoreText = "Read more...",
  onReadMoreClick,
  emailHref,
}: GalShirProps) {
  const handleEmailClick = () => {
    if (emailHref) {
      window.location.href = emailHref;
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="w-full bg-white px-6 py-12 sm:px-8 lg:px-16 font-sans">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Section Label */}
            <span className="text-[11px] tracking-[0.15em] text-[#9B9B9B] uppercase font-medium">
              {contactLabel}
            </span>

            {/* Email */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleEmailClick}
                className="text-lg font-semibold text-[#1a1a1a] hover:opacity-70 transition-opacity text-left"
              >
                {email}
              </button>
              <p className="text-sm text-[#888888] leading-relaxed">
                {emailDescription}
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 pt-2">
              <MapPin className="w-4 h-4 text-[#888888]" strokeWidth={1.5} />
              <span className="text-sm text-[#888888]">{location}</span>
            </div>
          </motion.div>

          {/* Right Column - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Section Label with Profile Image */}
            <div className="flex items-center gap-4">
              <span className="text-[11px] tracking-[0.15em] text-[#9B9B9B] uppercase font-medium">
                {aboutLabel}
              </span>

              {/* Profile Image */}
              <div className="shrink-0">
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-lg font-semibold text-[#1a1a1a] leading-snug">
              {headline}
            </h2>

            {/* Description */}
            <p className="text-sm text-[#888888] leading-relaxed">
              {description}
            </p>

            {/* Read More Link */}
            <motion.button
              onClick={onReadMoreClick}
              className="text-sm text-[#C3C3C3] hover:text-[#888888] transition-colors"
              whileHover={{ x: 2 }}
            >
              {readMoreText}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
