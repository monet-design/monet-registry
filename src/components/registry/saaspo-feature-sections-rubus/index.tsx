"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FDF8F5",
    cardBackground: "#FFFFFF",
    heading: "#4A1D1F",
    subheading: "#1F1F1F",
    description: "#6B6B6B",
    divider: "#E8DDD8",
    link: "#8B3A3E",
    linkHover: "#6A2C2F",
    accent: "#3D4A3D",
    accentHover: "#2D3A2D",
    ctaButton: "#8B3A3E",
    ctaButtonHover: "#6A2C2F",
    yellowTag: "#F5E6B0",
    yellowTagText: "#8B7A3D",
    greenDot: "#22C55E",
    redDot: "#EF4444",
    chartLine: "#8B3A3E",
    chartLineLight: "#D4B5A0",
  },
  dark: {
    background: "#1A1A1A",
    cardBackground: "#2A2A2A",
    heading: "#F5E6E0",
    subheading: "#FFFFFF",
    description: "#A0A0A0",
    divider: "#444444",
    link: "#E8A0A4",
    linkHover: "#F5C0C4",
    accent: "#6B8B6B",
    accentHover: "#8BAB8B",
    ctaButton: "#E8A0A4",
    ctaButtonHover: "#F5C0C4",
    yellowTag: "#4A4535",
    yellowTagText: "#F5E6B0",
    greenDot: "#22C55E",
    redDot: "#EF4444",
    chartLine: "#E8A0A4",
    chartLineLight: "#6B5A50",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Plus, Filter, Clock, Check, ChevronRight, Pen, X } from "lucide-react";
import "./font.css";

interface SaaspoFeatureSectionsRubusProps {
  mode?: "light" | "dark";
  title?: string;
  features?: {
    title: string;
    description: string;
  }[];
  collaborationTitle?: string;
  collaborationDescription?: string;
  collaborationLinkText?: string;
  collaborationLinkHref?: string;
}

type ColorScheme = typeof COLORS.light | typeof COLORS.dark;

// Sub-components for feature cards
function OrderListCard({ colors }: { colors: ColorScheme }) {
  return (
    <div className="flex gap-3">
      {/* Left panel */}
      <div className="flex-1 space-y-3">
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium text-white"
          style={{ backgroundColor: colors.accent }}
        >
          <Plus size={12} />
          Create new order
        </button>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs" style={{ color: colors.description }}>
            <Filter size={12} />
            Filter
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium"
            style={{ backgroundColor: colors.yellowTag, color: colors.yellowTagText }}
          >
            <Filter size={10} />
            All
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: colors.description }}>
            <Clock size={10} />
            Awaiting offer
          </div>
          <div className="flex items-center gap-1.5 text-xs" style={{ color: colors.description }}>
            <Check size={10} />
            Offer received
          </div>
        </div>
      </div>
      {/* Right panel - Offers */}
      <div className="flex-1 space-y-2">
        <div className="p-3 rounded-lg border" style={{ borderColor: colors.divider, backgroundColor: colors.cardBackground }}>
          <div className="flex items-center gap-1.5 text-xs mb-1">
            <span style={{ color: colors.redDot }}>●</span>
            <span style={{ color: colors.description }}>Retracted</span>
          </div>
          <p className="text-sm font-medium" style={{ color: colors.subheading }}>Offer #66 retracted</p>
          <p className="text-xs" style={{ color: colors.description }}>Offer from: <span className="font-medium">Consto</span></p>
        </div>
        <div className="p-3 rounded-lg border" style={{ borderColor: colors.divider, backgroundColor: colors.cardBackground }}>
          <div className="flex items-center gap-1.5 text-xs mb-1">
            <span style={{ color: colors.greenDot }}>●</span>
            <span style={{ color: colors.description }}>Received</span>
          </div>
          <p className="text-sm font-medium" style={{ color: colors.subheading }}>Offer #113 received</p>
          <p className="text-xs" style={{ color: colors.description }}>Offer from: <span className="font-medium">Rentas</span></p>
        </div>
      </div>
    </div>
  );
}

function SignatureFormCard({ colors }: { colors: ColorScheme }) {
  return (
    <div className="space-y-3">
      {/* Form fields */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
        <div>
          <span style={{ color: colors.description }}>Name</span>
          <p className="font-medium" style={{ color: colors.subheading }}>Ola Normann</p>
        </div>
        <div>
          <span style={{ color: colors.description }}>Address</span>
          <p className="font-medium" style={{ color: colors.subheading }}>Ladebekktunet 10</p>
        </div>
        <div>
          <span style={{ color: colors.description }}>Email</span>
          <p className="font-medium" style={{ color: colors.subheading }}>ola.normann@gmail.com</p>
        </div>
      </div>
      {/* Signature */}
      <div className="border-t pt-3" style={{ borderColor: colors.divider }}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs mb-1" style={{ color: colors.description }}>Signature 1</p>
            <p className="text-lg italic" style={{ fontFamily: "'Playfair Display', serif", color: colors.heading }}>
              O. Normann
            </p>
            <div className="flex items-center gap-3 mt-2 text-xs">
              <button className="flex items-center gap-1" style={{ color: colors.description }}>
                <X size={10} />
                Remove
              </button>
              <button className="flex items-center gap-1" style={{ color: colors.description }}>
                <Pen size={10} />
                Confirm signature
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <button className="flex items-center gap-1.5 text-xs px-3 py-1.5 border rounded" style={{ borderColor: colors.divider, color: colors.description }}>
              <Pen size={10} />
              Cancel signature
            </button>
            <button
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded text-white"
              style={{ backgroundColor: colors.ctaButton }}
            >
              <Pen size={10} />
              Save and submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WarrantyCard({ colors }: { colors: ColorScheme }) {
  return (
    <div className="p-4 rounded-lg border" style={{ borderColor: colors.divider, backgroundColor: colors.cardBackground }}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-start gap-2">
          <span style={{ color: colors.redDot }}>●</span>
          <div>
            <p className="font-medium text-sm" style={{ color: colors.subheading }}>Fix sink drain</p>
            <p className="text-xs" style={{ color: colors.description }}>Case ID: #349</p>
          </div>
        </div>
        <p className="text-xs" style={{ color: colors.description }}>Created: 2 Jan 25</p>
      </div>
      <p className="text-sm mt-3" style={{ color: colors.description }}>
        Hey Plumber, my sink sounds like it&apos;s trying out for a horror movie with all the gurgling and slow draining. Any chance you can help?
      </p>
      <p className="text-xs mt-2" style={{ color: colors.description }}>Floor 5, A503</p>
    </div>
  );
}

function BusinessSolutionsCard({ colors }: { colors: ColorScheme }) {
  return (
    <div className="flex gap-4">
      {/* Customer satisfaction */}
      <div className="flex-1 p-3 rounded-lg border" style={{ borderColor: colors.divider, backgroundColor: colors.cardBackground }}>
        <p className="text-xs mb-2" style={{ color: colors.description }}>Customer satisfaction</p>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-semibold" style={{ color: colors.subheading }}>9.7/10</span>
          <span className="text-xs mb-1" style={{ color: colors.greenDot }}>▲ 8.6% vs last month</span>
        </div>
        {/* Simple chart visualization */}
        <div className="mt-3 h-8 flex items-end gap-1">
          {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                backgroundColor: i === 9 ? colors.chartLine : colors.chartLineLight,
              }}
            />
          ))}
        </div>
      </div>
      {/* Open Cases */}
      <div className="flex-1 p-3 rounded-lg border" style={{ borderColor: colors.divider, backgroundColor: colors.cardBackground }}>
        <p className="text-xs mb-1" style={{ color: colors.description }}>Open Cases</p>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold" style={{ color: colors.subheading }}>7</span>
          <span className="text-xs" style={{ color: colors.greenDot }}>▼ -20% vs last month</span>
        </div>
        {/* Line chart visualization */}
        <svg className="w-full h-12 mt-2" viewBox="0 0 100 40">
          <path
            d="M0 30 Q 20 35, 30 25 T 50 20 T 70 15 T 100 10"
            fill="none"
            stroke={colors.chartLine}
            strokeWidth="2"
          />
          <circle cx="100" cy="10" r="3" fill={colors.chartLine} />
        </svg>
      </div>
    </div>
  );
}

function CollaborationDiagram({ colors }: { colors: ColorScheme }) {
  return (
    <div className="relative w-full h-[320px]">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 320">
        {/* Curved connections */}
        <path d="M200 60 Q 200 140, 120 180" fill="none" stroke={colors.divider} strokeWidth="1.5" />
        <path d="M200 60 Q 280 100, 320 120" fill="none" stroke={colors.divider} strokeWidth="1.5" />
        <path d="M320 120 Q 340 180, 320 200" fill="none" stroke={colors.divider} strokeWidth="1.5" />
        <path d="M120 180 Q 100 220, 120 260" fill="none" stroke={colors.divider} strokeWidth="1.5" />
        <path d="M120 260 Q 160 280, 200 280" fill="none" stroke={colors.divider} strokeWidth="1.5" />
      </svg>

      {/* People cards */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <p className="text-xs text-center mb-1" style={{ color: colors.description }}>Real Estate Developer</p>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-white" style={{ borderColor: colors.divider }}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-orange-300" />
          <div>
            <p className="text-sm font-medium" style={{ color: colors.subheading }}>Olivia Brown</p>
            <p className="text-xs" style={{ color: colors.description }}>Brown Estate LTD</p>
          </div>
        </div>
      </div>

      <div className="absolute top-[100px] right-0">
        <p className="text-xs text-center mb-1" style={{ color: colors.description }}>Sub Contractors</p>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-white" style={{ borderColor: colors.divider }}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-200 to-rose-300" />
          <div>
            <p className="text-sm font-medium" style={{ color: colors.subheading }}>Rachel Ciervo</p>
            <p className="text-xs" style={{ color: colors.description }}>Ceramic King LLC</p>
          </div>
        </div>
      </div>

      <div className="absolute top-[170px] right-0">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-white" style={{ borderColor: colors.divider }}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 to-blue-300" />
          <div>
            <p className="text-sm font-medium" style={{ color: colors.subheading }}>Matthias Cordes</p>
            <p className="text-xs" style={{ color: colors.description }}>Electric Power GmbH</p>
          </div>
        </div>
      </div>

      <div className="absolute top-[160px] left-0">
        <p className="text-xs text-center mb-1" style={{ color: colors.description }}>General Contractor</p>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-white" style={{ borderColor: colors.divider }}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 to-amber-300" />
          <div>
            <p className="text-sm font-medium" style={{ color: colors.subheading }}>Matt Shae</p>
            <p className="text-xs" style={{ color: colors.description }}>Hamburg Construction GmbH</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <p className="text-xs text-center mb-1" style={{ color: colors.description }}>Home Buyer</p>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-white" style={{ borderColor: colors.divider }}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
          <div>
            <p className="text-sm font-medium" style={{ color: colors.subheading }}>Lars-Thomas Stene</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SaaspoFeatureSectionsRubus({
  mode = "light",
  title = "A proven platform you can\ncount on.",
  features = [
    {
      title: "Home customization tools",
      description: "Manage options and upgrades in a user-friendly portal.",
    },
    {
      title: "Seamless handovers",
      description: "Streamline inspection and handover with a digital partner.",
    },
    {
      title: "Warranty management",
      description: "Keep track of claims and resolve them efficiently.",
    },
    {
      title: "Business solutions",
      description: "Gain a competitive edge when using Rubus for every project.",
    },
  ],
  collaborationTitle = "Construction collaboration\nsoftware",
  collaborationDescription = "Reduce the reply-alls, follow-ups, headaches, and hassle with an intuitive customer experience platform. Spend less time talking about the work and more time doing it.",
  collaborationLinkText = "All features",
  collaborationLinkHref = "#",
}: SaaspoFeatureSectionsRubusProps) {
  const colors = COLORS[mode];

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
      className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl italic leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: colors.heading,
              whiteSpace: "pre-line",
            }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-px mb-12"
          style={{ backgroundColor: colors.divider }}
        />

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Feature 1: Home customization tools */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div
              className="p-6 rounded-xl shadow-sm"
              style={{ backgroundColor: colors.cardBackground }}
            >
              <OrderListCard colors={colors} />
            </div>
            <div className="px-2">
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: colors.subheading }}
              >
                {features[0].title}
              </h3>
              <p className="text-sm" style={{ color: colors.description }}>
                {features[0].description}
              </p>
            </div>
          </motion.div>

          {/* Feature 2: Seamless handovers */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div
              className="p-6 rounded-xl shadow-sm"
              style={{ backgroundColor: colors.cardBackground }}
            >
              <SignatureFormCard colors={colors} />
            </div>
            <div className="px-2">
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: colors.subheading }}
              >
                {features[1].title}
              </h3>
              <p className="text-sm" style={{ color: colors.description }}>
                {features[1].description}
              </p>
            </div>
          </motion.div>

          {/* Feature 3: Warranty management */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div
              className="p-6 rounded-xl shadow-sm"
              style={{ backgroundColor: colors.cardBackground }}
            >
              <WarrantyCard colors={colors} />
            </div>
            <div className="px-2">
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: colors.subheading }}
              >
                {features[2].title}
              </h3>
              <p className="text-sm" style={{ color: colors.description }}>
                {features[2].description}
              </p>
            </div>
          </motion.div>

          {/* Feature 4: Business solutions */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div
              className="p-6 rounded-xl shadow-sm"
              style={{ backgroundColor: colors.cardBackground }}
            >
              <BusinessSolutionsCard colors={colors} />
            </div>
            <div className="px-2">
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: colors.subheading }}
              >
                {features[3].title}
              </h3>
              <p className="text-sm" style={{ color: colors.description }}>
                {features[3].description}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Construction collaboration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Text content */}
          <div className="space-y-6">
            <h3
              className="text-2xl md:text-3xl lg:text-4xl italic leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: colors.heading,
                whiteSpace: "pre-line",
              }}
            >
              {collaborationTitle}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: colors.description }}>
              {collaborationDescription}
            </p>
            <a
              href={collaborationLinkHref}
              className="inline-flex items-center gap-2 text-sm font-medium group"
              style={{ color: colors.link }}
            >
              {collaborationLinkText}
              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Right: Collaboration diagram */}
          <div className="relative">
            <CollaborationDiagram colors={colors} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
