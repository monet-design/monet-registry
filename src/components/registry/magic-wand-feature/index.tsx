"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Droplets, Settings2, Wand2 } from "lucide-react";

// CUSTOMIZATION
const CUSTOMIZATION = {};

interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface MagicWandFeatureProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  tabs?: TabItem[];
  defaultActiveTab?: string;
}

const defaultTabs: TabItem[] = [
  { id: "text-to-icon", label: "Text to Icon", icon: <Wand2 className="w-4 h-4" /> },
  { id: "copywriting", label: "Copywriting" },
  { id: "text-to-image", label: "Text to Image" },
];

export default function MagicWandFeature({
  mode = "dark",
  title = "Wave Your Magic Wand",
  subtitle = "Design with the power of AI to do everything from\ncopywriting to generating unique icons from text.",
  tabs = defaultTabs,
  defaultActiveTab = "text-to-icon",
}: MagicWandFeatureProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <section className="w-full bg-[#333333] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-white text-2xl sm:text-3xl font-semibold flex items-center justify-center gap-2 mb-4">
            <SparkleIcon className="w-6 h-6 text-white" />
            {title}
          </h2>
          <p className="text-[#999999] text-sm sm:text-base whitespace-pre-line leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-10 flex-wrap"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                flex items-center gap-2
                ${
                  activeTab === tab.id
                    ? "bg-white text-[#333333]"
                    : "bg-transparent text-[#999999] hover:text-white"
                }
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
          <span className="text-[#666666] text-sm">+ more</span>
        </motion.div>

        {/* Laptop Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <LaptopMockup>
            <div className="flex h-full">
              {/* Left Panel - Phone Mockup */}
              <div className="flex-1 flex items-center justify-center p-8 bg-[#E5E5E5]">
                <PhoneMockup />
              </div>

              {/* Right Panel - Sidebar */}
              <div className="w-[200px] bg-white border-l border-[#E5E5E5]">
                <SidebarPanel />
              </div>
            </div>
          </LaptopMockup>
        </motion.div>
      </div>
    </section>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LaptopMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Laptop Screen */}
      <div className="relative bg-[#1D1D1D] rounded-t-2xl p-2 pt-6">
        {/* Camera notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#444444]" />

        {/* Menu bar */}
        <div className="bg-[#2A2A2A] rounded-t-lg px-3 py-1 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-[#1D1D1D] rounded px-3 py-0.5 flex items-center gap-1">
              <span className="text-[10px] text-[#666666]">Magic Icon</span>
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="bg-[#E5E5E5] rounded-b-lg overflow-hidden h-[300px] sm:h-[350px]">
          {children}
        </div>
      </div>

      {/* Laptop Base */}
      <div className="relative">
        <div className="h-4 bg-gradient-to-b from-[#2A2A2A] to-[#1D1D1D] rounded-b-lg" />
        <div className="h-2 bg-[#1D1D1D] mx-auto w-1/4 rounded-b-lg" />
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 w-[160px] sm:w-[180px]">
      {/* Phone content */}
      <div className="space-y-4">
        {/* Icon placeholder with dashed border */}
        <div className="aspect-square rounded-xl border-2 border-dashed border-[#CFCFCF] flex items-center justify-center p-4">
          <WaterDropIcon className="w-12 h-12 text-[#1CA9F4]" />
        </div>

        {/* Text content */}
        <div className="text-center space-y-1">
          <h3 className="text-[#333333] font-semibold text-sm">Conserve water</h3>
          <p className="text-[#999999] text-[10px] leading-tight">
            Save the planet<br />by conserving water
          </p>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-[#1CA9F4] text-white text-xs font-medium py-2 rounded-lg hover:bg-[#0A99E4] transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}

function WaterDropIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Recycling water drops arrangement */}
      <path
        d="M24 8C24 8 18 16 18 20C18 23.3137 20.6863 26 24 26C27.3137 26 30 23.3137 30 20C30 16 24 8 24 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 2"
      />
      <path
        d="M14 28C14 28 8 36 8 40C8 43.3137 10.6863 46 14 46C17.3137 46 20 43.3137 20 40C20 36 14 28 14 28Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 2"
      />
      <path
        d="M34 28C34 28 28 36 28 40C28 43.3137 30.6863 46 34 46C37.3137 46 40 43.3137 40 40C40 36 34 28 34 28Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 2"
      />
      {/* Arrows connecting drops */}
      <path
        d="M20 24L16 28M28 24L32 28M20 40H28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 2"
      />
    </svg>
  );
}

function SidebarPanel() {
  return (
    <div className="p-3 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#666666]" />
          <span className="text-[10px] font-medium text-[#333333]">Magician</span>
        </div>
        <button className="text-[#999999] hover:text-[#666666]">
          <Settings2 className="w-3 h-3" />
        </button>
      </div>

      {/* Magic Icon Section */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <Sparkles className="w-3 h-3 text-[#1CA9F4]" />
          <span className="text-[10px] font-medium text-[#333333]">Magic Icon</span>
        </div>
        <div className="bg-[#F5F5F5] rounded-lg p-2">
          <input
            type="text"
            placeholder="water/conserving water"
            className="w-full text-[8px] text-[#999999] bg-transparent outline-none"
            readOnly
          />
        </div>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-3 gap-2 mt-auto">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg border border-[#E5E5E5] flex items-center justify-center"
          >
            <IconPlaceholder index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

function IconPlaceholder({ index }: { index: number }) {
  const icons = [
    <Droplets key="droplets" className="w-4 h-4 text-[#CCCCCC]" />,
    <WaveIcon key="wave" className="w-4 h-4 text-[#CCCCCC]" />,
    <LeafIcon key="leaf" className="w-4 h-4 text-[#CCCCCC]" />,
    <RecycleIcon key="recycle" className="w-4 h-4 text-[#CCCCCC]" />,
    <CloudIcon key="cloud" className="w-4 h-4 text-[#CCCCCC]" />,
    <SunIcon key="sun" className="w-4 h-4 text-[#CCCCCC]" />,
  ];
  return icons[index] || null;
}

function WaveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12C2 12 5 8 8 8C11 8 13 12 16 12C19 12 22 8 22 8" />
      <path d="M2 16C2 16 5 12 8 12C11 12 13 16 16 16C19 16 22 12 22 12" />
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22C12 22 4 18 4 10C4 6 8 2 12 2C16 2 20 6 20 10C20 18 12 22 12 22Z" />
      <path d="M12 22V12" />
      <path d="M8 14L12 10L16 14" />
    </svg>
  );
}

function RecycleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 19L4.5 14H9L7 19Z" />
      <path d="M17 19L19.5 14H15L17 19Z" />
      <path d="M12 5L14.5 10H9.5L12 5Z" />
      <path d="M9 10L7 14" />
      <path d="M15 10L17 14" />
      <path d="M7 19H17" />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 10H16.74C16.1 7.61 13.97 6 11.5 6C8.46 6 6 8.46 6 11.5C6 11.67 6.01 11.84 6.03 12H5C3.34 12 2 13.34 2 15C2 16.66 3.34 18 5 18H18C20.21 18 22 16.21 22 14C22 11.79 20.21 10 18 10Z" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2V4" />
      <path d="M12 20V22" />
      <path d="M4.93 4.93L6.34 6.34" />
      <path d="M17.66 17.66L19.07 19.07" />
      <path d="M2 12H4" />
      <path d="M20 12H22" />
      <path d="M6.34 17.66L4.93 19.07" />
      <path d="M19.07 4.93L17.66 6.34" />
    </svg>
  );
}
