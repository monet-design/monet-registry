"use client";

import React from "react";
import { motion } from "motion/react";
import {
  FolderOpen,
  Settings2,
  Users,
  LayoutGrid,
  Calendar,
  MessageCircle,
  Sparkles,
  Fingerprint,
  Plus,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface RysaFeaturesProps {
  headline?: string;
  highlightedWord?: string;
  features?: Feature[];
  ctaText?: string;
  ctaSubtext?: string;
  onCtaClick?: () => void;
}

const defaultFeatures: Feature[] = [
  {
    icon: <FolderOpen className="w-5 h-5" strokeWidth={1.5} />,
    title: "Wardrobe Systemization",
    description: "Turn your wardrobe into\na daily-ready system.",
  },
  {
    icon: <Settings2 className="w-5 h-5" strokeWidth={1.5} />,
    title: "Style Alignment Engine",
    description: "Sync your style with your\ngoals and lifestyle.",
  },
  {
    icon: <Users className="w-5 h-5" strokeWidth={1.5} />,
    title: "1:1 Stylist Collaboration",
    description: "Get ongoing, expert support\nfrom a dedicated stylist.",
  },
  {
    icon: <LayoutGrid className="w-5 h-5" strokeWidth={1.5} />,
    title: "Visual Dashboard",
    description: "See your entire wardrobe\nat a glance, organized and styled.",
  },
  {
    icon: <Fingerprint className="w-5 h-5" strokeWidth={1.5} />,
    title: "Personal Brand Blueprint",
    description: "Define a clear, consistent\nvisual identity.",
  },
  {
    icon: <Calendar className="w-5 h-5" strokeWidth={1.5} />,
    title: "Adaptive Planning",
    description: "Update your wardrobe for seasons\nand milestones.",
  },
  {
    icon: <MessageCircle className="w-5 h-5" strokeWidth={1.5} />,
    title: "Guided Styling Sessions",
    description: "Make smart outfit\nchoices—no overthinking.",
  },
  {
    icon: <Sparkles className="w-5 h-5" strokeWidth={1.5} />,
    title: "Automated Outfit Picks",
    description: "Curated outfit ideas for\nyour day and goals.",
  },
];

export default function RysaFeatures({
  headline = "Cut wardrobe decisions by 80% with Rysa",
  highlightedWord = "Rysa",
  features = defaultFeatures,
  ctaText = "Experience Rysa First",
  ctaSubtext,
  onCtaClick,
}: RysaFeaturesProps) {
  // Split headline to highlight the word
  const renderHeadline = () => {
    if (!highlightedWord) return headline;

    const parts = headline.split(highlightedWord);
    if (parts.length === 1) return headline;

    return (
      <>
        {parts[0]}
        <span className="text-[#1a1a1a]">{highlightedWord}</span>
        {parts[1]}
      </>
    );
  };

  // Create 3x3 grid with CTA in center
  const topRow = features.slice(0, 3);
  const middleLeftRight = [features[3], features[4]];
  const bottomRow = features.slice(5, 8);

  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-[40px] font-normal text-[#1a1a1a] mb-12 tracking-tight"
        >
          {renderHeadline()}
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#e0e0e0]">
          {/* Top Row */}
          {topRow.map((feature, index) => (
            <FeatureCard
              key={`top-${index}`}
              feature={feature}
              index={index}
            />
          ))}

          {/* Middle Row: Left Feature, CTA Center, Right Feature */}
          {middleLeftRight[0] && (
            <FeatureCard
              key="middle-left"
              feature={middleLeftRight[0]}
              index={3}
            />
          )}

          {/* Center CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-r border-b border-[#e0e0e0] bg-[#f5f5f5] flex flex-col items-center justify-center p-8 cursor-pointer hover:bg-[#efefef] transition-colors"
            onClick={onCtaClick}
          >
            <Plus className="w-5 h-5 text-[#1a1a1a] mb-3" strokeWidth={1.5} />
            <span className="text-base font-medium text-[#1a1a1a]">
              {ctaText}
            </span>
            {ctaSubtext && (
              <span className="text-sm text-[#888888] mt-1">{ctaSubtext}</span>
            )}
          </motion.div>

          {middleLeftRight[1] && (
            <FeatureCard
              key="middle-right"
              feature={middleLeftRight[1]}
              index={4}
            />
          )}

          {/* Bottom Row */}
          {bottomRow.map((feature, index) => (
            <FeatureCard
              key={`bottom-${index}`}
              feature={feature}
              index={index + 5}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-r border-b border-[#e0e0e0] p-6 md:p-8 bg-white"
    >
      <div className="text-[#1a1a1a] mb-4">{feature.icon}</div>
      <h3 className="text-base font-medium text-[#1a1a1a] mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-[#888888] leading-relaxed whitespace-pre-line">
        {feature.description}
      </p>
    </motion.div>
  );
}
