"use client";

import { useState } from "react";
import { motion } from "motion/react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    badge: "#F542A5",
    badgeText: "#FFFFFF",
    heading: "#000000",
    body: "#4B5563",
    buttonBg: "#000000",
    buttonText: "#FFFFFF",
    tabInactive: "#9CA3AF",
    tabActive: "#000000",
    tabUnderline: "#000000",
    cardBg: "#F5F5F5",
    iphoneButtonBg: "#A3E635",
    iphoneButtonText: "#000000",
    sectionBg: "#EBEBEB",
    contentBg: "#FFFFFF",
  },
} as const;

const TABS_DATA = [
  {
    id: "social-media",
    title: "Social media",
    description:
      "Create scroll-stopping content for Instagram, TikTok, and YouTube. Design animated posts that capture attention and boost engagement.",
  },
  {
    id: "advertising",
    title: "Advertising",
    description:
      "Craft compelling ad creatives that convert. Build dynamic banner ads, video ads, and interactive experiences for your campaigns.",
  },
  {
    id: "prototyping",
    title: "Prototyping",
    description:
      "Test ideas, interactions, and transitions quickly. Bring your apps and websites to life and hand off your animations to developers.",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SaaspoFeatureSectionsJitterProps {
  badge?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  tabs?: {
    id: string;
    title: string;
    description: string;
  }[];
  iphoneHeading?: string;
  iphoneButtonText?: string;
}

export default function SaaspoFeatureSectionsJitter({
  badge = "Use cases",
  heading = "Animate for social media, ads, marketing, brand, product, and more",
  description = "The best brands use motion across all platforms to capture attention, tell powerful stories, and drive more engagement.",
  buttonText = "Read customer stories",
  tabs = TABS_DATA,
  iphoneHeading = "175 COUNTRIES. 50 CURRENCIES. ONE ACCOUNT",
  iphoneButtonText = "Get started",
}: SaaspoFeatureSectionsJitterProps) {
  const [activeTab, setActiveTab] = useState(tabs[tabs.length - 1]?.id || "prototyping");
  const colors = COLORS.light;

  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: colors.sectionBg }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 md:p-12 lg:p-16"
          style={{ backgroundColor: colors.contentBg }}
        >
          {/* Header Section */}
          <div className="mb-12 lg:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12">
              <div className="max-w-2xl">
                {/* Badge */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                  style={{
                    backgroundColor: colors.badge,
                    color: colors.badgeText,
                  }}
                >
                  {badge}
                </motion.span>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  style={{ color: colors.heading }}
                >
                  {heading}
                </motion.h2>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-4 lg:pt-12">
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-base md:text-lg max-w-sm"
                  style={{ color: colors.body }}
                >
                  {description}
                </motion.p>

                {/* Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-full text-sm font-medium transition-all"
                  style={{
                    backgroundColor: colors.buttonBg,
                    color: colors.buttonText,
                  }}
                >
                  {buttonText}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Content Section - Tabs + iPhone Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-2"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="text-left p-6 rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor:
                      activeTab === tab.id ? colors.cardBg : "transparent",
                  }}
                >
                  <h3
                    className="text-lg font-semibold mb-2 transition-colors duration-300"
                    style={{
                      color:
                        activeTab === tab.id
                          ? colors.tabActive
                          : colors.tabInactive,
                    }}
                  >
                    {tab.title}
                  </h3>
                  {activeTab === tab.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p
                        className="text-sm mb-4"
                        style={{ color: colors.body }}
                      >
                        {tab.description}
                      </p>
                      <div
                        className="w-24 h-0.5"
                        style={{ backgroundColor: colors.tabUnderline }}
                      />
                    </motion.div>
                  )}
                </button>
              ))}
            </motion.div>

            {/* iPhone Mockup Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-2xl p-8 flex items-center justify-center"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* iPhone Frame */}
              <div className="relative w-64 md:w-72">
                {/* iPhone outer frame */}
                <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
                  {/* iPhone inner screen */}
                  <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-6 py-2 bg-white">
                      <span className="text-xs font-medium text-black">9:41</span>
                      <div className="w-20 h-6 bg-black rounded-full" />
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3C8.5 3 5.5 4.5 3.5 7L5 8.5C6.5 6.5 9 5 12 5s5.5 1.5 7 3.5L20.5 7C18.5 4.5 15.5 3 12 3zm0 4c-2.5 0-4.5 1-6 2.5L7.5 11c1-1 2.5-2 4.5-2s3.5 1 4.5 2l1.5-1.5C16.5 8 14.5 7 12 7zm0 4c-1.5 0-2.5.5-3.5 1.5L12 16l3.5-3.5c-1-.5-2-1.5-3.5-1.5z"/>
                        </svg>
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2 22h20V2z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Screen content */}
                    <div className="px-6 py-8 pb-12 min-h-[380px] flex flex-col items-center">
                      {/* 3D Jars Illustration Placeholder */}
                      <div className="mb-8 relative">
                        <div className="flex items-end gap-2">
                          {/* Coin */}
                          <div className="w-6 h-6 rounded-full bg-yellow-400 shadow-md absolute -top-2 left-0" />
                          {/* Green jar */}
                          <div className="w-16 h-24 rounded-xl bg-gradient-to-br from-teal-400 via-green-400 to-emerald-500 shadow-lg transform rotate-[-5deg]" />
                          {/* Red jar */}
                          <div className="w-14 h-20 rounded-xl bg-gradient-to-br from-red-400 via-orange-500 to-red-600 shadow-lg transform rotate-[5deg] -ml-2" />
                          {/* Colorful jar */}
                          <div className="w-16 h-24 rounded-xl bg-gradient-to-br from-green-300 via-blue-400 to-purple-500 shadow-lg transform rotate-[3deg] -ml-2" />
                        </div>
                      </div>

                      {/* Text */}
                      <h3 className="text-center text-lg font-bold text-black leading-tight mb-6">
                        {iphoneHeading}
                      </h3>

                      {/* Button */}
                      <button
                        className="w-full py-3 rounded-full text-sm font-semibold"
                        style={{
                          backgroundColor: colors.iphoneButtonBg,
                          color: colors.iphoneButtonText,
                        }}
                      >
                        {iphoneButtonText}
                      </button>
                    </div>

                    {/* Home indicator */}
                    <div className="flex justify-center pb-2">
                      <div className="w-32 h-1 bg-black rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
