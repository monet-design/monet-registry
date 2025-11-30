"use client";

import { motion } from "motion/react";
import { TrendingUp, MessageSquare } from "lucide-react";

// ============================================
// Types
// ============================================

interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AdvantagesXPremiumProps {
  heading?: string;
  advantages?: Advantage[];
  ctaText?: string;
  ctaIcon?: React.ReactNode;
  onCtaClick?: () => void;
}

// ============================================
// Sub Components
// ============================================

// X Logo Icon
function XIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Grok/Sparkle Icon
function GrokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M5 19l1 3 1-3 3-1-3-1-1-3-1 3-3 1 3 1z" />
    </svg>
  );
}

// Profile Shield Icon
function ProfileShieldIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="12" cy="10" r="3" />
      <path d="M12 13c-2.5 0-4.5 1.5-4.5 3.5V18h9v-1.5c0-2-2-3.5-4.5-3.5z" />
    </svg>
  );
}

// Advantage Card Component
function AdvantageCard({
  icon,
  title,
  description,
  delay = 0
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center px-4"
    >
      <div className="mb-6 text-white/80">
        {icon}
      </div>
      <h3 className="text-white font-semibold text-base mb-3">
        {title}
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed max-w-[280px]">
        {description}
      </p>
    </motion.div>
  );
}

// ============================================
// Default Data
// ============================================

const defaultAdvantages: Advantage[] = [
  {
    icon: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />,
    title: "신속한 VIP 지원",
    description: "신속한 우선 지원을 제공하는 전담팀으로부터 적시에 도움을 받고 문제를 이관하세요.",
  },
  {
    icon: (
      <div className="flex items-center gap-2">
        <XIcon className="w-6 h-6" />
        <span className="text-white/60">+</span>
        <GrokIcon className="w-5 h-5" />
      </div>
    ),
    title: "Premium+ 및 SuperGrok",
    description: "Premium 비즈니스와 그 제휴 계정은 SuperGrok 기능을 포함해 모든 Premium+ 혜택을 받을 수 있습니다.",
  },
  {
    icon: <ProfileShieldIcon className="w-6 h-6" />,
    title: "맞춤 프로필",
    description: "사각형 아바타로 비즈니스를 더 눈에 띄게 차별화하고 새로운 탭에서 모든 제휴 계정을 확인할 수 있습니다.",
  },
];

// ============================================
// Main Component
// ============================================

export default function AdvantagesXPremium({
  heading = "기타 다양한 추가 혜택",
  advantages = defaultAdvantages,
  ctaText = "질문이 있으신가요? 지원팀에게 문의하세요",
  ctaIcon = <MessageSquare className="w-4 h-4" />,
  onCtaClick,
}: AdvantagesXPremiumProps) {
  return (
    <section className="w-full bg-black px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-16 lg:mb-20"
        >
          {heading}
        </motion.h2>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16 lg:mb-20">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={advantage.title}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={onCtaClick}
            className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-zinc-700 bg-transparent text-white text-sm font-medium hover:border-zinc-500 hover:bg-zinc-900/50 transition-all duration-200"
          >
            {ctaIcon}
            <span>{ctaText}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
