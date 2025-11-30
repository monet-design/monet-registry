"use client";

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

interface FeatureItem {
  text: string;
}

interface LogoItem {
  name: string;
  logo: React.ReactNode;
}

interface TaskCard {
  title: string;
  subtitle?: string;
  metric?: string;
  metricLabel?: string;
  tag?: string;
  status?: "todo" | "done";
}

interface SustainableFutureHeroProps {
  headline?: string;
  highlightedWord?: string;
  features?: FeatureItem[];
  ctaText?: string;
  ctaIcon?: React.ReactNode;
  onCtaClick?: () => void;
  logoSectionTitle?: string;
  logos?: LogoItem[];
  taskCards?: TaskCard[];
}

const defaultFeatures: FeatureItem[] = [
  { text: "GHG Protocol Compliant Emissions Disclosure Report: Scopes 1, 2 & 3" },
  { text: "Net Zero Certification & Climate Expert support" },
  { text: "Reduction Plan in line with Science-Based Targets" },
  { text: "High quality certified offsets" },
];

const defaultLogos: LogoItem[] = [
  { name: "ARAVO", logo: <span className="font-semibold tracking-wide text-lg">AR<span className="text-[#30B55D]">A</span>VO</span> },
  { name: "ZOOPLA", logo: <span className="font-bold text-xl tracking-tight">zoopla</span> },
  { name: "PayFit", logo: <span className="font-semibold text-lg flex items-center gap-1"><span className="w-5 h-5 bg-[#0066FF] rounded-full flex items-center justify-center text-white text-xs">P</span>PayFit</span> },
  { name: "Swile", logo: <span className="font-bold text-xl">swile</span> },
  { name: "Konbini", logo: <span className="font-bold text-lg flex items-center gap-1"><span className="bg-black text-white px-1.5 py-0.5 text-sm">K</span>Konbini</span> },
  { name: "Tripadvisor", logo: <span className="font-semibold text-lg flex items-center gap-1"><span className="text-[#00AA6C]">●</span>Tripadvisor</span> },
];

const defaultTaskCards: TaskCard[] = [
  {
    title: "Transfer your data to low carbon servers",
    tag: "DIGITAL",
    metric: "68 tCO₂e",
    metricLabel: "CO2 avoided",
    status: "todo",
  },
  {
    title: "Switch to rented IT equipment",
    tag: "OFFICE",
    metric: "12 tCO₂e",
    metricLabel: "CO2 avoided",
    status: "done",
  },
  {
    title: "Replace natural gas with biomethane",
    metric: "15 CO₂e",
    metricLabel: "CO2 avoided",
    status: "todo",
  },
];

function TaskCardComponent({ card, index }: { card: TaskCard; index: number }) {
  const isDone = card.status === "done";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
      className={`bg-white rounded-xl p-4 shadow-lg ${isDone ? "border-2 border-[#30B55D]" : ""}`}
      style={{ minWidth: "180px", maxWidth: "200px" }}
    >
      {card.status && (
        <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${
          isDone ? "bg-[#30B55D]/10 text-[#30B55D]" : "bg-gray-100 text-gray-600"
        }`}>
          {isDone ? (
            <>
              <Check className="w-3 h-3" />
              Done
            </>
          ) : (
            <>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              To-Do
            </>
          )}
        </div>
      )}
      <h4 className="text-sm font-medium text-gray-900 mb-3 leading-tight">{card.title}</h4>
      {card.tag && (
        <span className="inline-block px-2 py-0.5 bg-[#30B55D] text-white text-[10px] font-semibold rounded mb-2">
          {card.tag}
        </span>
      )}
      {card.metric && (
        <div className="mt-2 pt-2 border-t border-gray-100">
          <p className="text-[10px] text-gray-400 uppercase tracking-wide">{card.metricLabel}</p>
          <p className="text-lg font-bold text-[#145A47]">{card.metric}</p>
        </div>
      )}
      <button className="mt-2 text-[10px] text-[#30B55D] font-medium flex items-center gap-1">
        Alternatives <ArrowRight className="w-3 h-3" />
      </button>
    </motion.div>
  );
}

export default function SustainableFutureHero({
  headline = "The go-to carbon accounting platform for your",
  highlightedWord = "business",
  features = defaultFeatures,
  ctaText = "Schedule a call",
  ctaIcon = <ArrowRight className="w-4 h-4" />,
  onCtaClick,
  logoSectionTitle = "Join the 800+ companies committed to fighting climate change",
  logos = defaultLogos,
  taskCards = defaultTaskCards,
}: SustainableFutureHeroProps) {
  return (
    <section className="relative w-full bg-[#F7F8F8] overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Content */}
        <div className="flex-1 px-6 md:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-serif font-bold text-gray-900 leading-[1.1] mb-8">
              {headline}{" "}
              <span className="relative inline-block">
                <span
                  className="relative z-10 italic"
                  style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
                >
                  {highlightedWord}
                </span>
                <svg
                  className="absolute -bottom-1 left-0 w-full h-4 z-0"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,15 Q50,5 100,12 T200,10"
                    fill="none"
                    stroke="#30B55D"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#30B55D] flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {feature.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#30B55D] hover:bg-[#28a050] text-white font-medium rounded-full transition-colors shadow-lg shadow-[#30B55D]/25"
            >
              {ctaIcon}
              {ctaText}
            </motion.button>
          </motion.div>
        </div>

        {/* Right Content - Dark Green Background with Cards */}
        <div className="flex-1 bg-[#145A47] relative overflow-hidden min-h-[400px] lg:min-h-0">
          {/* Floating Task Cards */}
          <div className="absolute inset-0 p-6 lg:p-8">
            <div className="relative h-full w-full">
              {/* Card 1 - Top Left */}
              <div className="absolute top-4 left-4 lg:top-8 lg:left-8">
                <TaskCardComponent card={taskCards[0]} index={0} />
              </div>

              {/* Card 2 - Top Right */}
              <div className="absolute top-4 right-4 lg:top-16 lg:right-8">
                <TaskCardComponent card={taskCards[1]} index={1} />
              </div>

              {/* Card 3 - Bottom Center */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:bottom-12 lg:left-1/4">
                <TaskCardComponent card={taskCards[2]} index={2} />
              </div>

              {/* Cursor decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="absolute top-1/2 right-1/4 hidden lg:block"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 3L19 12L12 14L9 21L5 3Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-white py-10 px-6 md:px-12 lg:px-16 border-t border-gray-100">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="text-center text-gray-600 text-sm mb-8"
        >
          {logoSectionTitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
              className="text-gray-600 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              {logo.logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
