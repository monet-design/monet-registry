"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface PortfolioFinalFinal2023Props {
  sectionTitle?: string;
  authorName?: string;
  profileImage?: string;
  yearsOfExperience?: number;
  profession?: string;
  portfolioLinkText?: string;
  portfolioLinkHref?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  companies?: string[];
}

export default function PortfolioFinalFinal2023({
  sectionTitle = "About the author",
  authorName = "Fedor Shkliarau",
  profileImage = "https://picsum.photos/seed/fedorshkliarau/400/400",
  yearsOfExperience = 11,
  profession = "product designer",
  portfolioLinkText = "portfolio",
  portfolioLinkHref = "#",
  paragraph1,
  paragraph2,
  paragraph3,
  companies = ["Twitter", "AmEx", "adidas", "HSBC", "Mercedes-Benz", "Blinkist", "IKEA"],
}: PortfolioFinalFinal2023Props) {
  const defaultParagraph1 = `${authorName} is a ${profession} with ${yearsOfExperience} years of industry experience.`;

  const defaultParagraph2Parts = {
    before: "Every new version of his ",
    after: " has helped achieve different goals: landing an internship, a full-time job, and in the last 3 years, getting clients for his consulting business.",
  };

  const defaultParagraph3 = `He has worked with companies like ${companies.join(", ")}.`;

  return (
    <section
      className="w-full bg-white px-6 py-16 sm:px-8 lg:px-12"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Left Column - Title and Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 md:w-[200px] shrink-0"
          >
            {/* Section Title */}
            <h2
              className="text-[#9A9A9A] text-2xl md:text-[26px] tracking-[-0.01em]"
              style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
            >
              {sectionTitle}
            </h2>

            {/* Profile Image */}
            <div className="w-full max-w-[180px] aspect-square overflow-hidden">
              <Image
                src={profileImage}
                alt={authorName}
                width={180}
                height={180}
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 space-y-5"
          >
            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[#333333] text-[15px] leading-[1.6] tracking-[-0.01em]"
            >
              {paragraph1 || defaultParagraph1}
            </motion.p>

            {/* Paragraph 2 - with portfolio link */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[#333333] text-[15px] leading-[1.6] tracking-[-0.01em]"
            >
              {paragraph2 || (
                <>
                  {defaultParagraph2Parts.before}
                  <a
                    href={portfolioLinkHref}
                    className="text-[#E85A24] hover:opacity-80 transition-opacity"
                  >
                    {portfolioLinkText}
                  </a>
                  {defaultParagraph2Parts.after}
                </>
              )}
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-[#333333] text-[15px] leading-[1.6] tracking-[-0.01em]"
            >
              {paragraph3 || defaultParagraph3}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
