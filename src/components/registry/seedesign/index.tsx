"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles, Award, Zap, LayoutGrid, ChevronDown, Calendar } from "lucide-react";

interface Feature {
  icon: "award" | "zap" | "layout";
  title: string;
  description: string;
}

interface FounderInfo {
  name: string;
  role: string;
  message: string;
  avatarUrl?: string;
}

interface SeedesignProps {
  headline?: {
    regular: string;
    accent: string;
  };
  features?: Feature[];
  founder?: FounderInfo;
  formTitle?: string;
  formAcceptingText?: string;
  budgetOptions?: string[];
  submitButtonText?: string;
  bookCallButtonText?: string;
  leftDecorationImage?: string;
  rightDecorationImage?: string;
  onSubmit?: (data: FormData) => void;
  onBookCall?: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  budget: string;
  brief: string;
}

const defaultFeatures: Feature[] = [
  {
    icon: "award",
    title: "Quality First",
    description:
      "We never compromise on quality, delivering polished, high-conversion designs every time.",
  },
  {
    icon: "zap",
    title: "Quick Turnaround",
    description:
      "We believe in fast execution — focusing, shipping quickly, and refining through iteration.",
  },
  {
    icon: "layout",
    title: "Flexible Process",
    description:
      "Efficiency is key. We streamline workflows to deliver high-quality designs without unnecessary delays.",
  },
];

const defaultFounder: FounderInfo = {
  name: "Marko",
  role: "founder of SeeDesign agency",
  message: "Hey, Marko here — founder of SeeDesign agency. Excited to hear from you!",
  avatarUrl: undefined,
};

const defaultBudgetOptions = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
];

function FeatureIcon({ type }: { type: "award" | "zap" | "layout" }) {
  const iconClass = "w-4 h-4 text-white";
  switch (type) {
    case "award":
      return <Award className={iconClass} />;
    case "zap":
      return <Zap className={iconClass} />;
    case "layout":
      return <LayoutGrid className={iconClass} />;
    default:
      return <Award className={iconClass} />;
  }
}

export default function Seedesign({
  headline = {
    regular: "The premium design partner that sets you up for",
    accent: "success.",
  },
  features = defaultFeatures,
  founder = defaultFounder,
  formTitle = "GET A QUOTE",
  formAcceptingText = "Accepting new projects",
  budgetOptions = defaultBudgetOptions,
  submitButtonText = "Submit request",
  bookCallButtonText = "Book a free call",
  leftDecorationImage = "/registry/seedesign/3d-shapes-left.png",
  rightDecorationImage = "/registry/seedesign/pixel-decoration.png",
  onSubmit,
  onBookCall,
}: SeedesignProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    budget: "",
    brief: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://db.onlinewebfonts.com/c/82346df2075cf90ed44a8e36099a87a8?family=Satoshi+Variable";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData((prev) => ({ ...prev, budget }));
    setIsDropdownOpen(false);
  };

  return (
    <section
      className="relative w-full min-h-[600px] bg-[#0A0A0A] overflow-hidden py-12 md:py-16 lg:py-20"
      style={{ fontFamily: "'Satoshi Variable', 'Inter', sans-serif" }}
    >
      {/* Left 3D Decoration */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -left-10 md:-left-14 lg:-left-16 top-1/2 -translate-y-1/4 w-24 md:w-32 lg:w-40 h-44 md:h-56 lg:h-64 pointer-events-none z-0"
      >
        <Image
          src={leftDecorationImage}
          alt="3D decorative shapes"
          fill
          className="object-contain object-left"
        />
      </motion.div>

      {/* Right Pixel Decoration */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-4 md:right-8 lg:right-16 top-6 md:top-10 w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 pointer-events-none z-20"
      >
        <Image
          src={rightDecorationImage}
          alt="Pixel decoration"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Headline & Features */}
          <div className="space-y-10">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight">
                {headline.regular.split(" ").map((word, i, arr) => (
                  <span key={i}>
                    {word}
                    {i < arr.length - 1 ? " " : ""}
                    {i === 5 && <br className="hidden md:block" />}
                    {i === 8 && <br className="hidden md:block" />}
                  </span>
                ))}
                <span className="inline-flex items-center">
                  <Zap className="w-6 h-6 md:w-7 md:h-7 text-[#4CC57A] mx-1 inline" fill="#4CC57A" />
                  <span className="text-[#4CC57A] italic">{headline.accent}</span>
                </span>
              </h1>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <FeatureIcon type={feature.icon} />
                    </div>
                    <h3 className="text-white font-semibold text-sm">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[#888888] text-sm leading-relaxed pl-7">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-[#080808] border border-[#1A1A1A] rounded-2xl p-6 md:p-8"
          >
            {/* Form Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-semibold text-sm tracking-wide">
                {formTitle}
              </h2>
              <div className="flex items-center gap-1.5 text-[#4CC57A] text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="italic">{formAcceptingText}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[#666666] text-xs">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Jane Smith"
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#4CC57A] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#666666] text-xs">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#4CC57A] transition-colors"
                  />
                </div>
              </div>

              {/* Budget Dropdown */}
              <div className="space-y-2">
                <label className="text-[#666666] text-xs">Budget</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-left text-sm flex items-center justify-between focus:outline-none focus:border-[#4CC57A] transition-colors"
                  >
                    <span className={formData.budget ? "text-white" : "text-[#555555]"}>
                      {formData.budget || "Select..."}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#555555] transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-20 w-full mt-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden shadow-xl"
                    >
                      {budgetOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleBudgetSelect(option)}
                          className="w-full px-4 py-2.5 text-left text-sm text-[#AAAAAA] hover:bg-[#252525] hover:text-white transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Brief Textarea */}
              <div className="space-y-2">
                <label className="text-[#666666] text-xs">Short brief</label>
                <textarea
                  name="brief"
                  value={formData.brief}
                  onChange={handleInputChange}
                  placeholder="Write a short brief"
                  rows={4}
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#555555] focus:outline-none focus:border-[#4CC57A] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#4CC57A] hover:bg-[#3DAF68] text-white font-medium py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                {submitButtonText}
                <span className="text-lg">&raquo;</span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Founder Section - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center gap-4 bg-[#151515] rounded-xl p-4 border border-[#222222] max-w-xl"
        >
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#2A2A2A] overflow-hidden flex items-center justify-center">
              {founder.avatarUrl ? (
                <Image
                  src={founder.avatarUrl}
                  alt={founder.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              ) : (
                <span className="text-white text-lg font-medium">
                  {founder.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#C19710] rounded-full flex items-center justify-center">
              <span className="text-[8px]">S</span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-semibold text-sm">
              Let&apos;s create magic together
            </h4>
            <p className="text-[#888888] text-xs truncate">
              Hey, {founder.name} here — {founder.role}. Excited to hear from you!
            </p>
          </div>
          <button
            onClick={onBookCall}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-transparent border border-[#333333] text-white text-xs font-medium rounded-lg hover:bg-[#1A1A1A] transition-colors whitespace-nowrap"
          >
            {bookCallButtonText}
            <Calendar className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
