"use client";

import { motion } from "motion/react";
import { MessageCircle, Grid3X3, LayoutGrid, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface FeaturePillProps {
  children: React.ReactNode;
  delay?: number;
}

function FeaturePill({ children, delay = 0 }: FeaturePillProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600"
    >
      {children}
    </motion.span>
  );
}

interface ChatCardProps {
  productName?: string;
  productImage?: string;
  promptText?: string;
  responseText?: string;
}

function ChatCard({
  productName = "Lip Glaze",
  productImage = "/registry/creative-partner-showcase/lipgloss.png",
  promptText = "Create a campaign for this product",
  responseText = "On it. I'll prepare ad concepts in multiple formats for channels like Instagram, TikTok, and Google Ads — covering static images, videos, and animations.",
}: ChatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative w-72 overflow-hidden rounded-2xl bg-white pl-3 pr-5 py-5 shadow-xl"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-[#5B50E9]" />
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-900">{productName}</span>
        </div>
        <button className="rounded p-1 hover:bg-gray-100">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-gray-400"
          >
            <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* Product Image */}
      <div className="mt-4 flex justify-start">
        <div className="relative h-20 w-12 overflow-hidden rounded-lg bg-gradient-to-b from-gray-50 to-gray-100">
          <Image
            src={productImage}
            alt={productName}
            fill
            sizes="48px"
            className="object-contain p-1"
          />
        </div>
      </div>

      {/* Prompt */}
      <p className="mt-4 text-sm font-medium text-gray-900">{promptText}</p>

      {/* Response */}
      <p className="mt-3 text-sm leading-relaxed text-gray-500">{responseText}</p>
    </motion.div>
  );
}

interface PreviewCardProps {
  delay?: number;
  productImage?: string;
}

function PhonePreview({ delay = 0, productImage = "/registry/creative-partner-showcase/lipgloss.png" }: PreviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative h-80 w-40 overflow-hidden rounded-3xl border border-white/20 shadow-xl"
    >
      {/* Phone frame inner content */}
      <div className="absolute inset-0 flex flex-col">
        {/* Top gray area - blurred effect */}
        <div className="h-2/5 bg-gradient-to-b from-[#9A9B9E] via-[#B5B6B9] to-[#C8C9CC]">
          <div className="h-full w-full backdrop-blur-sm" />
        </div>
        {/* Product area with pink/beige tones */}
        <div className="relative flex-1 bg-gradient-to-b from-[#D0C5C2] via-[#DDD0CC] to-[#E5D8D4]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-20 w-12 blur-[1px]">
              <Image
                src={productImage}
                alt="Product preview"
                fill
                sizes="48px"
                className="object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Subtle overlay for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5" />
    </motion.div>
  );
}

function GridPreviewToggle() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="flex items-center gap-1 rounded-lg bg-white p-1 shadow-md"
    >
      <button className="rounded p-1.5 hover:bg-gray-100">
        <Grid3X3 className="h-4 w-4 text-gray-500" />
      </button>
      <button className="rounded p-1.5 hover:bg-gray-100">
        <LayoutGrid className="h-4 w-4 text-gray-500" />
      </button>
    </motion.div>
  );
}

function SmallPreviewCard({ delay = 0, productImage = "/registry/creative-partner-showcase/lipgloss.png" }: PreviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-16 w-28 overflow-hidden rounded-lg border border-gray-200/50 bg-gradient-to-br from-[#F5F5F6] to-[#EAEAEC] shadow-lg"
    >
      <div className="flex h-full items-center justify-center">
        <div className="relative h-12 w-8">
          <Image
            src={productImage}
            alt="Small preview"
            fill
            sizes="32px"
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

interface NavigationArrowsProps {
  onPrev?: () => void;
  onNext?: () => void;
}

function NavigationArrows({ onPrev, onNext }: NavigationArrowsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="flex items-center gap-2"
    >
      <button
        onClick={onPrev}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-colors hover:border-gray-300 hover:text-gray-600"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={onNext}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-colors hover:border-gray-300 hover:text-gray-600"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </motion.div>
  );
}

interface CreativePartnerShowcaseProps {
  tagline?: string;
  title?: string;
  description?: string;
  features?: string[];
  caption?: string;
  productName?: string;
  productImage?: string;
  promptText?: string;
  responseText?: string;
}

export default function CreativePartnerShowcase({
  tagline = "Agentic Creativity",
  title = "Your Creative Partner",
  description = "Creates top-tier branded content across every format, platform, and channel without top-tier effort.",
  features = [
    "Works with all channels",
    "Multi-platform ready",
    "Cares about quality and guidelines",
  ],
  caption = "Generates content for popular social media and advertising platforms.",
  productName = "Lip Glaze",
  productImage = "/registry/creative-partner-showcase/lipgloss.png",
  promptText = "Create a campaign for this product",
  responseText = "On it. I'll prepare ad concepts in multiple formats for channels like Instagram, TikTok, and Google Ads — covering static images, videos, and animations.",
}: CreativePartnerShowcaseProps) {
  return (
    <section className="w-full bg-[#FAFAFA] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-medium text-gray-600"
          >
            {tagline}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500"
          >
            {description}
          </motion.p>

          {/* Feature Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {features.map((feature, index) => (
              <FeaturePill key={feature} delay={0.3 + index * 0.1}>
                {feature}
              </FeaturePill>
            ))}
          </div>
        </div>

        {/* Showcase Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-12 overflow-hidden rounded-3xl bg-[#5B50E9] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-4">
            {/* Left: Chat Card */}
            <div className="flex-shrink-0">
              <ChatCard
                productName={productName}
                productImage={productImage}
                promptText={promptText}
                responseText={responseText}
              />
            </div>

            {/* Middle: Grid Toggle */}
            <div className="flex-shrink-0 pt-1">
              <GridPreviewToggle />
            </div>

            {/* Right: Preview Cards */}
            <div className="relative flex flex-1 items-start justify-center">
              {/* Phone Preview - centered */}
              <PhonePreview delay={0.5} productImage={productImage} />
            </div>
          </div>

          {/* Small preview card - positioned bottom right, extending outside purple area */}
          <div className="absolute -bottom-2 right-6">
            <SmallPreviewCard delay={0.6} productImage={productImage} />
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-sm text-gray-400"
          >
            {caption}
          </motion.p>

          <NavigationArrows />
        </div>
      </div>
    </section>
  );
}
