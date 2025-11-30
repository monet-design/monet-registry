"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// Types
interface ContactCard {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

interface ContactSectionCardsProps {
  badge?: string;
  heading?: string;
  subheading?: string;
  cards?: ContactCard[];
}

// Default data based on the image
const defaultCards: ContactCard[] = [
  {
    title: "Sales",
    description:
      "Get unrivaled payments performance with the help of our dedicated teams.",
    linkText: "Get in touch",
    linkHref: "#",
  },
  {
    title: "Merchant support",
    description:
      "Got a technical issue or need strategic advice? Our support team is here to help.",
    linkText: "Get support",
    linkHref: "#",
  },
  {
    title: "Partnership",
    description:
      "Let's team up to boost productivity and accelerate business growth.",
    linkText: "Become a partner",
    linkHref: "#",
  },
];

// Contact Card Component
function ContactCardItem({
  card,
  index,
  isLast,
}: {
  card: ContactCard;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="group relative flex flex-1 flex-col"
    >
      <div className="flex h-full flex-col justify-between rounded-2xl bg-[#2A2A3C] px-6 py-6 sm:px-7 sm:py-7">
        {/* Title */}
        <div>
          <h3 className="mb-3 text-lg font-semibold tracking-wide text-white sm:text-xl">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[#9CA3AF] sm:text-[15px]">
            {card.description}
          </p>
        </div>

        {/* Link */}
        <a
          href={card.linkHref}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-normal text-white transition-opacity hover:opacity-80"
        >
          {card.linkText}
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>

      {/* Vertical divider line (except for last card) */}
      {!isLast && (
        <div className="absolute right-0 top-4 hidden h-[calc(100%-32px)] w-px bg-[#3D3D4F] lg:block" />
      )}
    </motion.div>
  );
}

// Main Component
export default function ContactSectionCards({
  badge = "CONTACT US",
  heading = "LET'S TALK",
  subheading = "Got a question? Want to learn more about us? Get in touch.",
  cards = defaultCards,
}: ContactSectionCardsProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Top Section - Light Background */}
      <div className="bg-[#FAFAFA] pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A] sm:mb-5 sm:text-xs"
          >
            {badge}
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-4xl font-bold uppercase tracking-[0.05em] text-[#1A1A1A] sm:mb-5 sm:text-5xl lg:text-6xl"
          >
            {heading}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-[#4B5563] sm:text-base lg:text-lg"
          >
            {subheading}
          </motion.p>
        </div>
      </div>

      {/* Bottom Section - Dark Background */}
      <div className="bg-[#1C1C28] pb-12 pt-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Cards Grid */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            {cards.map((card, index) => (
              <ContactCardItem
                key={index}
                card={card}
                index={index}
                isLast={index === cards.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
