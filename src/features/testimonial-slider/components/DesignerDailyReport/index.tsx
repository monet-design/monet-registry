"use client";

import { motion } from "motion/react";
import { Twitter, Check } from "lucide-react";
import Image from "next/image";
import "./font.css";

// Types
interface TwitterTestimonial {
  id: number;
  authorName: string;
  authorHandle: string;
  authorRole: string;
  authorAvatar: string;
  quote: string;
  hasEmoji?: boolean;
  checkItems?: string[];
  hashtags?: string[];
}

interface DesignerDailyReportProps {
  heading?: string;
  mascotImage?: string;
  testimonials?: TwitterTestimonial[];
}

// Default testimonials data
const defaultTestimonials: TwitterTestimonial[] = [
  {
    id: 1,
    authorName: "Pablo Stanley",
    authorHandle: "@pablostanley",
    authorRole: "Making stuff at @buninorth @humankindart @robotosart",
    authorAvatar: "https://picsum.photos/seed/pablo-stanley/200/200",
    quote:
      '"I\'ve been using it to stay updated on the best design trends, tools, typefaces, color palettes, and designers. It\'s pretty inspiring."',
  },
  {
    id: 2,
    authorName: "Vincent Le Moign",
    authorHandle: "@webalys",
    authorRole: "Founder @StreamlineHQ",
    authorAvatar: "https://picsum.photos/seed/vincent-lemoign/200/200",
    quote:
      '"With the Designer Daily Report I get all the best news, inspirations and discussions about design, right into my browser! Only the best curated content."',
    hasEmoji: true,
  },
  {
    id: 3,
    authorName: "Adham Dannaway",
    authorHandle: "@AdhamDannaway",
    authorRole: "Product Designer",
    authorAvatar: "https://picsum.photos/seed/adham-dannaway/200/200",
    quote:
      '"Get your daily design fix in just 5 mins with this awesome free Chrome extension',
    hasEmoji: true,
    checkItems: [
      "Latest news, articles, discussions, products & jobs",
      "Curated design inspiration",
      "Design resource library",
    ],
    hashtags: ["#design", "#uxdesign", "#uxui", "#designinspiration"],
  },
];

// Twitter Icon Component
function TwitterIcon() {
  return (
    <Twitter className="h-4 w-4 fill-[#1DA1F2] text-[#1DA1F2]" />
  );
}

// Testimonial Card Component
function TestimonialCard({
  testimonial,
  className = "",
  delay = 0,
}: {
  testimonial: TwitterTestimonial;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Header with avatar and info */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <img
              src={testimonial.authorAvatar}
              alt={testimonial.authorName}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">
              {testimonial.authorName}
            </span>
            <span className="text-xs text-gray-500">{testimonial.authorRole}</span>
          </div>
        </div>
        <TwitterIcon />
      </div>

      {/* Quote */}
      <div className="mt-4">
        <p className="text-sm italic leading-relaxed text-gray-600">
          {testimonial.hasEmoji && testimonial.checkItems ? (
            <>
              <span className="not-italic">&#128525;</span> Get your daily design fix in just 5{" "}
              <span className="not-italic">&#128170;</span> mins with this awesome free Chrome
              extension
            </>
          ) : testimonial.hasEmoji ? (
            <>
              {testimonial.quote} <span className="not-italic">&#128588;</span>
            </>
          ) : (
            testimonial.quote
          )}
        </p>

        {/* Check items for Adham's testimonial */}
        {testimonial.checkItems && (
          <div className="mt-3 space-y-1">
            {testimonial.checkItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex h-4 w-4 items-center justify-center rounded bg-[#10B981]">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-xs text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Hashtags */}
        {testimonial.hashtags && (
          <div className="mt-3 flex flex-wrap gap-1">
            {testimonial.hashtags.map((tag, index) => (
              <span key={index} className="text-xs text-[#1DA1F2]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Main Component
export default function DesignerDailyReport({
  heading = "We are proud to inspire",
  mascotImage = "/registry/designer-daily-report/bunny-mascot.png",
  testimonials = defaultTestimonials,
}: DesignerDailyReportProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative h-24 w-24 sm:h-28 sm:w-28">
            <Image
              src={mascotImage}
              alt="Designer Daily Report mascot"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="heading-serif mb-12 text-center text-3xl font-medium text-gray-900 sm:text-4xl"
        >
          {heading}
        </motion.h2>

        {/* Testimonial Cards - Staggered Layout */}
        <div className="relative">
          {/* Top row - 2 cards side by side */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TestimonialCard
              testimonial={testimonials[0]}
              delay={0.2}
            />
            <TestimonialCard
              testimonial={testimonials[1]}
              delay={0.3}
            />
          </div>

          {/* Bottom card - centered and overlapping */}
          <div className="relative z-10 mx-auto -mt-4 max-w-md sm:-mt-6">
            <TestimonialCard
              testimonial={testimonials[2]}
              delay={0.4}
              className="shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
