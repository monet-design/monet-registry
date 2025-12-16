"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0a0a14",
  cardBackground: "rgba(20, 20, 35, 0.6)",
  cardBorder: "rgba(139, 92, 246, 0.15)",
  accent: "#a855f7",
  accentLight: "#c084fc",
  textPrimary: "#ffffff",
  textSecondary: "#9ca3af",
  textMuted: "#6b7280",
  iconBg: "rgba(139, 92, 246, 0.1)",
  iconBorder: "rgba(139, 92, 246, 0.3)",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Shield,
  CreditCard,
  Network,
  Key,
  Search,
  Lock,
  BarChart3,
  Layers,
  ArrowRight,
} from "lucide-react";
import "./font.css";

interface FeatureIconItem {
  icon: React.ReactNode;
  label: string;
}

interface FeatureCardProps {
  tag: string;
  title: string;
  description: string;
  linkText?: string;
  visual: React.ReactNode;
  reversed?: boolean;
  delay?: number;
}

const featureIcons: FeatureIconItem[] = [
  { icon: <Shield className="w-5 h-5" />, label: "PCI\nCompliance" },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Payments\nOptimization" },
  { icon: <CreditCard className="w-5 h-5" />, label: "Card\nIssuing" },
  { icon: <Network className="w-5 h-5" />, label: "Network\nTokens" },
  { icon: <Layers className="w-5 h-5" />, label: "Card\nInsights" },
  { icon: <Key className="w-5 h-5" />, label: "Key\nManagement" },
  { icon: <Search className="w-5 h-5" />, label: "BIN\nLookup" },
  { icon: <Lock className="w-5 h-5" />, label: "3D\nSecure" },
];

// Credit Cards Visual Component
function CreditCardsVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Card 3 (back) */}
      <motion.div
        initial={{ opacity: 0, x: -20, rotate: -15 }}
        whileInView={{ opacity: 1, x: 0, rotate: -15 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute w-48 h-28 rounded-xl"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16161a 100%)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
          left: "10%",
          transform: "rotate(-15deg)",
        }}
      >
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/10 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-purple-400/50" />
        </div>
      </motion.div>

      {/* Card 2 (middle) */}
      <motion.div
        initial={{ opacity: 0, x: -10, rotate: -8 }}
        whileInView={{ opacity: 1, x: 0, rotate: -8 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute w-48 h-28 rounded-xl"
        style={{
          background: "linear-gradient(135deg, #1f1f35 0%, #18181c 100%)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
          left: "18%",
          transform: "rotate(-8deg)",
        }}
      >
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/10 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-purple-400/50" />
        </div>
      </motion.div>

      {/* Card 1 (front) */}
      <motion.div
        initial={{ opacity: 0, x: 0, rotate: 0 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute w-48 h-28 rounded-xl"
        style={{
          background: "linear-gradient(135deg, #252540 0%, #1a1a25 100%)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
          left: "26%",
        }}
      >
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/40 to-purple-600/20 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-purple-400/60" />
        </div>
        <div className="absolute bottom-4 right-4 text-white/60 text-xs font-semibold tracking-wider">
          VISA
        </div>
      </motion.div>
    </div>
  );
}

// Payment Logos Visual Component
function PaymentLogosVisual() {
  const logos = [
    { name: "PayPal", letter: "P", color: "#003087" },
    { name: "Stripe", letter: "S", color: "#635bff" },
    { name: "Adyen", letter: "A", color: "#0abf53" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="flex items-center gap-4">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(30, 30, 50, 0.8)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            <span
              className="text-lg font-bold"
              style={{ color: logo.color }}
            >
              {logo.letter}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Security Dial Visual Component
function SecurityDialVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative w-40 h-40"
      >
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 180deg, rgba(168, 85, 247, 0.6) 0deg, rgba(168, 85, 247, 0.1) 180deg, rgba(168, 85, 247, 0.6) 360deg)",
            padding: "3px",
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{ background: COLORS.background }}
          />
        </div>

        {/* Inner ring with notches */}
        <div className="absolute inset-4 rounded-full border border-purple-500/30">
          {/* Notches */}
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-2 bg-purple-500/40"
              style={{
                left: "50%",
                top: "0",
                transformOrigin: "50% 66px",
                transform: `translateX(-50%) rotate(${i * 15}deg)`,
              }}
            />
          ))}
        </div>

        {/* Center */}
        <div className="absolute inset-12 rounded-full bg-gradient-to-br from-purple-600/20 to-purple-900/20 flex items-center justify-center">
          <Lock className="w-8 h-8 text-purple-400" />
        </div>
      </motion.div>
    </div>
  );
}

// Small Card Visual Component
function SmallCardVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-24 h-16 rounded-lg"
        style={{
          background: "linear-gradient(135deg, #1f1f35 0%, #18181c 100%)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <div className="absolute top-3 left-3 w-4 h-3 rounded-sm bg-gradient-to-br from-yellow-400/80 to-yellow-600/60" />
      </motion.div>
    </div>
  );
}

function FeatureCard({
  tag,
  title,
  description,
  linkText = "Learn more",
  visual,
  reversed = false,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="rounded-2xl p-8 md:p-10"
      style={{
        background: COLORS.cardBackground,
        border: `1px solid ${COLORS.cardBorder}`,
        backdropFilter: "blur(10px)",
      }}
    >
      <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <span
            className="text-xs uppercase tracking-wider"
            style={{ color: COLORS.accent }}
          >
            {tag}
          </span>
          <h3
            className="text-xl md:text-2xl font-semibold leading-tight"
            style={{ color: COLORS.textPrimary }}
          >
            {title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            {description}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: COLORS.accent }}
          >
            {linkText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Visual */}
        <div className="flex-1 h-48 md:h-56">
          {visual}
        </div>
      </div>
    </motion.div>
  );
}

interface SaaspoFeatureSectionsEvervaultProps {
  title?: string;
  subtitle?: string;
}

export default function SaaspoFeatureSectionsEvervault({
  title = "Accelerate your business with\na first-class payments stack",
}: SaaspoFeatureSectionsEvervaultProps) {
  return (
    <section
      className="relative w-full py-20 md:py-32 overflow-hidden"
      style={{ background: COLORS.background }}
    >
      {/* Background gradient effects */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-tight"
            style={{
              color: COLORS.textPrimary,
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
            }}
          >
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Feature Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16"
        >
          {featureIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: COLORS.iconBg,
                  border: `1px solid ${COLORS.iconBorder}`,
                }}
              >
                <span style={{ color: COLORS.textSecondary }}>
                  {item.icon}
                </span>
              </div>
              <span
                className="text-xs text-center whitespace-pre-line"
                style={{ color: COLORS.textMuted }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Card Product */}
          <FeatureCard
            tag="Accelerate your card product"
            title="Expedite the security and compliance requirements of launching a card product"
            description="Improve your card's time-to-market from months to days, by using Evervault to tokenize cards from the issuer of your choice, store card data with minimal PCI compliance impact, and even reveal the raw card numbers to users."
            visual={<CreditCardsVisual />}
            delay={0.2}
          />

          {/* Card 2: Multi-processor */}
          <FeatureCard
            tag="Optimize pay-in performance"
            title="Improve payment costs & global coverage with a multi-processor payment setup"
            description="Avoid payment processor vendor lock-in, optimize payment costs and acceptance rates by selectively routing payments to different payment processors."
            visual={<PaymentLogosVisual />}
            reversed
            delay={0.3}
          />

          {/* Card 3: Card Sharing */}
          <FeatureCard
            tag="Build complex card sharing workflows"
            title="Share card data securely while keeping compliance scope to a minimum"
            description="Evervault gives you flexible, compliant products for sharing card data with third-parties. For example, booking aggregators and platforms can compliantly forward card data to their partners for storing or processing."
            visual={<SmallCardVisual />}
            delay={0.4}
          />

          {/* Card 4: Enterprise Security */}
          <FeatureCard
            tag="Computing for highly sensitive payment operations"
            title="Easily prove to enterprise customers that their data is handled with maximum security."
            description="Evervault makes it easy for developers to run sensitive payment workloads in highly-constrained compute environments using secure enclaves."
            visual={<SecurityDialVisual />}
            reversed
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}
