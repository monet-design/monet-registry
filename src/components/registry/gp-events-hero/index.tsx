"use client";

import { motion } from "motion/react";
import { ArrowRight, Calendar, User } from "lucide-react";
import "./font.css";

interface EventCardProps {
  label?: string;
  title?: string;
  speakerName?: string;
  speakerRole?: string;
  speakerImage?: string;
  date?: string;
  time?: string;
  timezone?: string;
}

interface ArticleCardProps {
  readTime?: string;
  title?: string;
  linkText?: string;
  linkHref?: string;
}

interface GpEventsHeroProps {
  tagline?: string;
  headline?: string;
  headlineHighlight?: string;
  headlineEnd?: string;
  description?: string;
  articleCard?: ArticleCardProps;
  eventCard?: EventCardProps;
}

// G-P Logo Component
function GPLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-10 w-10">
        {/* Stylized globe icon with lines */}
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <circle cx="20" cy="20" r="18" stroke="#0038D1" strokeWidth="2" />
          <ellipse cx="20" cy="20" rx="8" ry="18" stroke="#0038D1" strokeWidth="1.5" />
          <line x1="2" y1="20" x2="38" y2="20" stroke="#0038D1" strokeWidth="1.5" />
          <line x1="20" y1="2" x2="20" y2="38" stroke="#0038D1" strokeWidth="1.5" />
        </svg>
      </div>
      <span className="text-2xl font-bold text-[#0038D1]">G-P</span>
    </div>
  );
}

// Event Card Component
function EventCard({
  label = "EVENT",
  title = "2024 Global Workforce\nTrends - Americas",
  speakerName = "Laura Maffucci",
  speakerRole = "Vice President,\nHead of Human Resources",
  speakerImage,
  date = "February 26, 2024",
  time = "2:00 pm - 2:45 pm",
  timezone = "EST",
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="relative flex overflow-hidden rounded-lg bg-white shadow-xl"
    >
      {/* Main content */}
      <div className="flex flex-col p-6 pr-4 md:p-8 md:pr-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {label}
        </span>
        <h3 className="mt-2 text-lg font-bold leading-tight text-gray-900 md:text-xl whitespace-pre-line">
          {title}
        </h3>

        {/* Speaker info */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-200">
            {speakerImage ? (
              <img
                src={speakerImage}
                alt={speakerName}
                className="h-full w-full object-cover"
              />
            ) : (
              <User className="h-6 w-6 text-gray-400" />
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{speakerName}</p>
            <p className="text-xs text-gray-500 whitespace-pre-line">{speakerRole}</p>
          </div>
        </div>

        {/* Date and time */}
        <div className="mt-4 flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-[#E8F5E9]">
            <Calendar className="h-5 w-5 text-[#2E7D32]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{date}</p>
            <p className="text-xs text-gray-500">
              {time}
              <br />
              {timezone}
            </p>
          </div>
        </div>

        {/* Logo */}
        <div className="mt-6">
          <GPLogo />
        </div>
      </div>

      {/* Rainbow gradient bar on right side */}
      <div
        className="w-3 flex-shrink-0"
        style={{
          background: "linear-gradient(to bottom, #00C9B7, #0066FF, #6633FF, #FF3366, #FF6633)"
        }}
      />
    </motion.div>
  );
}

// Article Card Component
function ArticleCard({
  readTime = "1 MIN READ",
  title = "2024 Global Workforce\nTrends - Americas",
  linkText = "Read more",
  linkHref = "#",
}: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="flex flex-col"
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
        {readTime}
      </span>
      <h3 className="mt-3 text-2xl font-bold leading-tight text-[#B8F500] md:text-3xl whitespace-pre-line">
        {title}
      </h3>
      <a
        href={linkHref}
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#B8F500]"
      >
        {linkText}
        <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

// Main Component
export default function GpEventsHero({
  tagline = "EVENTS",
  headline = "Where ",
  headlineHighlight = "Global Minds",
  headlineEnd = " Meet.",
  description = "G-P hosts virtual and in-person events where senior HR and business leaders gather to discuss the latest growth trends. The highlight is the Pangeo Summit series, where we explore how our Global Growth Technology\u2122 can support business expansion and success worldwide.",
  articleCard = {
    readTime: "1 MIN READ",
    title: "2024 Global Workforce\nTrends - Americas",
    linkText: "Read more",
    linkHref: "#",
  },
  eventCard = {
    label: "EVENT",
    title: "2024 Global Workforce\nTrends - Americas",
    speakerName: "Laura Maffucci",
    speakerRole: "Vice President,\nHead of Human Resources",
    date: "February 26, 2024",
    time: "2:00 pm - 2:45 pm",
    timezone: "EST",
  },
}: GpEventsHeroProps) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0038D1 0%, #0047FF 30%, #00B4A0 100%)",
      }}
    >
      {/* Top section with headline */}
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8 sm:px-8 md:pt-24 md:pb-12">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-[#B8F500]"
        >
          {tagline}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-center text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
        >
          <span className="font-instrument-serif">{headline}</span>
          <span className="font-instrument-serif-italic text-[#B8F500]">
            {headlineHighlight}
          </span>
          <span className="font-instrument-serif">{headlineEnd}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/80 md:text-base"
        >
          {description}
        </motion.p>
      </div>

      {/* Cards section */}
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-12 lg:gap-16">
          {/* Article Card (left) */}
          <div className="w-full max-w-sm md:w-auto md:max-w-xs md:pt-8">
            <ArticleCard {...articleCard} />
          </div>

          {/* Event Card (right) */}
          <div className="w-full max-w-sm md:w-auto">
            <EventCard {...eventCard} />
          </div>
        </div>
      </div>
    </section>
  );
}
