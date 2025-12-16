"use client";

import { motion } from "motion/react";
import { Lock, Play, RefreshCw, ShieldCheck, BadgeCheck } from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  background: "#F7F7F7",
  cardBackground: "#FFFFFF",
  cardBorder: "#E8E8E8",
  titleHighlight: "#1A1A1A",
  textPrimary: "#1A1A1A",
  textSecondary: "#666666",
  accentBeige: "#E8D5C4",
  accentBeigeLight: "#F5EBE3",
  dashedBorder: "#D4C4B5",
  chatBar: "#1A1A1A",
  chatBarLight: "#E5E5E5",
} as const;

const CONTENT = {
  title: {
    prefix: "The platform for ",
    highlight: "hybrid AI & human sales motions",
  },
  features: [
    {
      id: "intelligent-conversations",
      title: "Intelligent conversations",
      description:
        "Spara's AI efficiently steers conversations through your sales funnel, guiding buyers to key topics and asking questions to align with your sales goals.",
      tags: [
        "Business banking",
        "Taxes",
        "Expense management",
        "Virtual cards",
        "Payroll",
        "Generative AI",
      ],
    },
    {
      id: "enterprise-safety",
      title: "Enterprise-grade safety",
      description:
        "Spara's SOC 2-compliant AI pipeline flags malicious or sensitive conversations with buyers, ensuring that your brand never engages with a harmful situation.",
    },
    {
      id: "multimodal-responses",
      title: "Multimodal responses",
      description:
        "Spara leverages your existing sales collateral to educate buyers. Show off your product and value prop with videos, PDFs, slides, and more.",
    },
    {
      id: "easy-to-train",
      title: "Easy to train",
      description:
        "Spara learns from your website, sales collateral, and training guides. Use our no-code platform to test and improve responses over time.",
    },
  ],
} as const;

// ============================================================================
// COMPONENT
// ============================================================================

interface SaaspoFeatureSectionsSparaProps {
  title?: {
    prefix?: string;
    highlight?: string;
  };
  features?: Array<{
    id: string;
    title: string;
    description: string;
    tags?: string[];
  }>;
}

export default function SaaspoFeatureSectionsSpara({
  title = CONTENT.title,
  features = CONTENT.features as unknown as Array<{
    id: string;
    title: string;
    description: string;
    tags?: string[];
  }>,
}: SaaspoFeatureSectionsSparaProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="w-full py-20 px-4 md:px-8"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-center mb-16"
          style={{ color: COLORS.textPrimary }}
        >
          {title.prefix}
          <span
            className="px-3 py-1 rounded-md"
            style={{ backgroundColor: COLORS.titleHighlight, color: "#FFFFFF" }}
          >
            {title.highlight}
          </span>
        </motion.h2>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card 1: Intelligent Conversations */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-8 pb-0 overflow-hidden"
            style={{
              backgroundColor: COLORS.cardBackground,
              border: `1px solid ${COLORS.cardBorder}`,
            }}
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: COLORS.textPrimary }}
            >
              {features[0]?.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: COLORS.textSecondary }}
            >
              {features[0]?.description}
            </p>
            {/* Tags and Chat UI */}
            <div className="relative h-[280px]">
              {/* Tags */}
              <div className="space-y-2">
                {features[0]?.tags?.map((tag, index) => {
                  const positions = [
                    { left: "0px", top: "0px" },
                    { left: "40px", top: "40px" },
                    { left: "0px", top: "80px" },
                    { left: "50px", top: "120px" },
                    { left: "20px", top: "160px" },
                    { left: "0px", top: "200px" },
                  ];
                  const pos = positions[index] || { left: "0px", top: `${index * 40}px` };
                  return (
                    <div
                      key={tag}
                      className="absolute px-4 py-2 rounded-full text-sm border whitespace-nowrap"
                      style={{
                        left: pos.left,
                        top: pos.top,
                        backgroundColor: COLORS.accentBeigeLight,
                        borderColor: COLORS.accentBeige,
                        color: COLORS.textSecondary,
                      }}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
              {/* Chat Bar */}
              <div
                className="absolute right-0 bottom-8 w-[280px] rounded-xl p-4 shadow-lg"
                style={{ backgroundColor: COLORS.cardBackground, border: `1px solid ${COLORS.cardBorder}` }}
              >
                <div
                  className="h-3 w-32 rounded-full mb-2"
                  style={{ backgroundColor: COLORS.chatBar }}
                />
                <div className="flex gap-2">
                  <div
                    className="h-2 w-16 rounded-full"
                    style={{ backgroundColor: COLORS.chatBarLight }}
                  />
                  <div
                    className="h-2 w-24 rounded-full"
                    style={{ backgroundColor: COLORS.chatBarLight }}
                  />
                  <div
                    className="h-2 w-12 rounded-full"
                    style={{ backgroundColor: COLORS.chatBarLight }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Enterprise-grade Safety */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-8 pb-0 overflow-hidden"
            style={{
              backgroundColor: COLORS.cardBackground,
              border: `1px solid ${COLORS.cardBorder}`,
            }}
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: COLORS.textPrimary }}
            >
              {features[1]?.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: COLORS.textSecondary }}
            >
              {features[1]?.description}
            </p>
            {/* Shield with SOC II */}
            <div className="relative h-[280px] flex items-center justify-center">
              {/* Dashed Circle */}
              <div
                className="absolute w-48 h-48 rounded-full"
                style={{
                  border: `2px dashed ${COLORS.dashedBorder}`,
                }}
              />
              {/* Shield Icon */}
              <div
                className="relative w-24 h-28 flex items-center justify-center rounded-t-full"
                style={{ backgroundColor: COLORS.accentBeige }}
              >
                <Lock className="w-8 h-8" style={{ color: COLORS.textPrimary }} />
              </div>
              {/* Warning Badge */}
              <div
                className="absolute left-1/2 -translate-x-24 bottom-20 w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#FEF3C7" }}
              >
                <span className="text-amber-600 font-bold text-sm">!</span>
              </div>
              {/* Check Badge */}
              <div
                className="absolute left-1/2 translate-x-16 bottom-20 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: COLORS.cardBackground, border: `1px solid ${COLORS.cardBorder}` }}
              >
                <BadgeCheck className="w-5 h-5 text-gray-500" />
              </div>
              {/* SOC II Badge */}
              <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-lg"
                style={{ backgroundColor: COLORS.accentBeigeLight }}
              >
                <span
                  className="text-sm font-medium tracking-wider"
                  style={{ color: COLORS.textSecondary }}
                >
                  SOC II
                </span>
                <ShieldCheck className="w-4 h-4 text-green-500" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Multimodal Responses */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-8 pb-0 overflow-hidden"
            style={{
              backgroundColor: COLORS.cardBackground,
              border: `1px solid ${COLORS.cardBorder}`,
            }}
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: COLORS.textPrimary }}
            >
              {features[2]?.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: COLORS.textSecondary }}
            >
              {features[2]?.description}
            </p>
            {/* Video Placeholder */}
            <div className="relative h-[280px]">
              {/* Decorative curved line */}
              <div
                className="absolute top-0 left-0 w-full h-8 rounded-t-full opacity-30"
                style={{ backgroundColor: COLORS.accentBeige }}
              />
              {/* Video Card */}
              <div
                className="absolute bottom-8 left-0 w-full max-w-[320px] rounded-xl p-4"
                style={{
                  backgroundColor: COLORS.cardBackground,
                  border: `1px solid ${COLORS.cardBorder}`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                {/* Placeholder lines */}
                <div className="space-y-2 mb-4">
                  <div
                    className="h-2 w-full rounded-full"
                    style={{ backgroundColor: COLORS.chatBarLight }}
                  />
                  <div
                    className="h-2 w-3/4 rounded-full"
                    style={{ backgroundColor: COLORS.chatBarLight }}
                  />
                  <div
                    className="h-2 w-1/2 rounded-full"
                    style={{ backgroundColor: COLORS.chatBarLight }}
                  />
                </div>
                {/* Video label */}
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <Play className="w-4 h-4" style={{ color: COLORS.textSecondary }} />
                  <span className="text-sm" style={{ color: COLORS.textSecondary }}>
                    Introduction video
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Easy to Train */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-8 pb-0 overflow-hidden"
            style={{
              backgroundColor: COLORS.cardBackground,
              border: `1px solid ${COLORS.cardBorder}`,
            }}
          >
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: COLORS.textPrimary }}
            >
              {features[3]?.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: COLORS.textSecondary }}
            >
              {features[3]?.description}
            </p>
            {/* Training Data Placeholder */}
            <div className="relative h-[280px]">
              {/* Decorative curved line */}
              <div
                className="absolute top-0 right-0 w-3/4 h-12 rounded-tl-full opacity-20"
                style={{ backgroundColor: COLORS.accentBeige }}
              />
              {/* Training Card */}
              <div
                className="absolute bottom-8 right-0 w-full max-w-[340px] rounded-xl p-4"
                style={{
                  backgroundColor: COLORS.cardBackground,
                  border: `1px solid ${COLORS.cardBorder}`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                {/* Dashed border container */}
                <div
                  className="rounded-lg p-4 mb-4"
                  style={{ border: `2px dashed ${COLORS.dashedBorder}` }}
                >
                  {/* Corner brackets */}
                  <div className="relative h-20">
                    {/* Top left bracket */}
                    <div
                      className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2"
                      style={{ borderColor: COLORS.textSecondary }}
                    />
                    {/* Top right bracket */}
                    <div
                      className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2"
                      style={{ borderColor: COLORS.textSecondary }}
                    />
                    {/* Bottom left bracket */}
                    <div
                      className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2"
                      style={{ borderColor: COLORS.textSecondary }}
                    />
                    {/* Bottom right bracket */}
                    <div
                      className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2"
                      style={{ borderColor: COLORS.textSecondary }}
                    />
                    {/* Placeholder lines inside */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 px-6">
                      <div
                        className="h-2 w-full rounded-full"
                        style={{ backgroundColor: COLORS.chatBarLight }}
                      />
                      <div
                        className="h-2 w-3/4 rounded-full"
                        style={{ backgroundColor: COLORS.chatBarLight }}
                      />
                    </div>
                  </div>
                </div>
                {/* Training data label */}
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" style={{ color: COLORS.textSecondary }} />
                  <span className="text-sm" style={{ color: COLORS.textSecondary }}>
                    Training data...
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
