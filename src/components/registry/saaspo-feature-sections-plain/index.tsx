"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0A0A0A",
  cardBackground: "#141414",
  cardBorder: "#262626",
  accent: "#F97316",
  accentHover: "#EA580C",
  textPrimary: "#FFFFFF",
  textSecondary: "#A1A1AA",
  textMuted: "#71717A",
  axiomBackground: "#0F172A",
  tagTensormind: "#3B82F6",
  tagOlio: "#22C55E",
  tagAtrium: "#8B5CF6",
  tagSynthium: "#EC4899",
  enterpriseBar: "#3B82F6",
  proBar: "#6366F1",
  freeBar: "#8B5CF6",
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { MoreHorizontal, Share, ArrowUpRight, ChevronUp } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Tag component
function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
      style={{ backgroundColor: `${color}20`, color }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}

// Avatar component
function Avatar({
  initials,
  bgColor,
  size = "sm",
}: {
  initials: string;
  bgColor: string;
  size?: "sm" | "md";
}) {
  const sizeClasses = size === "sm" ? "w-6 h-6 text-xs" : "w-8 h-8 text-sm";
  return (
    <div
      className={`${sizeClasses} rounded-full flex items-center justify-center text-white font-medium`}
      style={{ backgroundColor: bgColor }}
    >
      {initials}
    </div>
  );
}

// Ticket Detail Card
function TicketDetailCard() {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl p-4 border"
      style={{
        backgroundColor: COLORS.cardBackground,
        borderColor: COLORS.cardBorder,
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#22C55E" }}
          />
          <span className="text-xs" style={{ color: COLORS.textMuted }}>
            I-1444
          </span>
        </div>
        <MoreHorizontal
          className="w-4 h-4"
          style={{ color: COLORS.textMuted }}
        />
      </div>

      <h3
        className="text-sm font-semibold mb-1"
        style={{ color: COLORS.textPrimary }}
      >
        Biometric Authentication Support
      </h3>
      <p className="text-xs mb-4" style={{ color: COLORS.textMuted }}>
        Enable authentication using biometric methods like
        <br />
        fingerprint scanning and facial recognition.
      </p>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-xs">
          <span style={{ color: COLORS.textMuted }}>Rank</span>
          <span style={{ color: COLORS.textPrimary }}>#1</span>
        </div>
        <div className="flex justify-between text-xs">
          <span style={{ color: COLORS.textMuted }}>Total requests</span>
          <span style={{ color: COLORS.textPrimary }}>51</span>
        </div>
        <div className="flex justify-between text-xs">
          <span style={{ color: COLORS.textMuted }}>Created</span>
          <span style={{ color: COLORS.textPrimary }}>13 Jul, 2024</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-xs mb-2 block" style={{ color: COLORS.textMuted }}>
          Requested by
        </span>
        <div className="flex flex-wrap gap-1.5">
          <Tag label="Tensormind" color={COLORS.tagTensormind} />
          <Tag label="Atrium" color={COLORS.tagAtrium} />
          <Tag label="Synthium" color={COLORS.tagSynthium} />
          <Tag label="Olio" color={COLORS.tagOlio} />
          <span className="text-xs px-2 py-0.5" style={{ color: COLORS.textMuted }}>
            + 67 more
          </span>
        </div>
      </div>

      <div>
        <span className="text-xs mb-2 block" style={{ color: COLORS.textMuted }}>
          Requests by tier
        </span>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 rounded-full bg-gray-800 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: "75%",
                  backgroundColor: COLORS.enterpriseBar,
                }}
              />
            </div>
            <span className="text-xs w-20" style={{ color: COLORS.textMuted }}>
              Enterprise
            </span>
            <span className="text-xs w-6 text-right" style={{ color: COLORS.textPrimary }}>
              39
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 rounded-full bg-gray-800 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: "15%",
                  backgroundColor: COLORS.proBar,
                }}
              />
            </div>
            <span className="text-xs w-20" style={{ color: COLORS.textMuted }}>
              Pro
            </span>
            <span className="text-xs w-6 text-right" style={{ color: COLORS.textPrimary }}>
              8
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Sentiment Card
function SentimentCard() {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-xl p-4 border"
      style={{
        backgroundColor: COLORS.cardBackground,
        borderColor: COLORS.cardBorder,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3
          className="text-sm font-semibold"
          style={{ color: COLORS.textPrimary }}
        >
          Sentiment
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-xs" style={{ color: COLORS.textMuted }}>
            <span className="px-2 py-0.5 rounded cursor-pointer hover:bg-gray-800">
              Custom
            </span>
            <span className="px-2 py-0.5 rounded cursor-pointer hover:bg-gray-800">
              All time
            </span>
            <span className="px-2 py-0.5 rounded cursor-pointer hover:bg-gray-800">
              90d
            </span>
            <span className="px-2 py-0.5 rounded cursor-pointer hover:bg-gray-800">
              60d
            </span>
            <span
              className="px-2 py-0.5 rounded"
              style={{ backgroundColor: COLORS.cardBorder, color: COLORS.textPrimary }}
            >
              30d
            </span>
            <span className="px-2 py-0.5 rounded cursor-pointer hover:bg-gray-800">
              7d
            </span>
          </div>
          <button
            className="flex items-center gap-1 px-2 py-1 rounded border text-xs"
            style={{ borderColor: COLORS.cardBorder, color: COLORS.textPrimary }}
          >
            <Share className="w-3 h-3" />
            Share
          </button>
        </div>
      </div>

      <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: COLORS.background }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-500">&#x1F60A;</span>
          <span className="text-sm font-medium" style={{ color: COLORS.textPrimary }}>
            Excited
          </span>
          <ChevronUp className="w-3 h-3" style={{ color: COLORS.textMuted }} />
        </div>
        <p className="text-xs mb-2" style={{ color: COLORS.textSecondary }}>
          Users want the ability to save filter configurations in the app for quick access to their preferred settings. This enhancement would boost efficiency and improve user-friendliness.
        </p>
        <div className="flex gap-1.5">
          <Tag label="Tensormind" color={COLORS.tagTensormind} />
          <Tag label="Olio" color={COLORS.tagOlio} />
          <Tag label="Atrium" color={COLORS.tagAtrium} />
          <Tag label="Synthium" color={COLORS.tagSynthium} />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex gap-3">
          <Avatar initials="AA" bgColor="#F472B6" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium" style={{ color: COLORS.textPrimary }}>
                Annie Atkins
              </span>
              <span className="text-xs" style={{ color: COLORS.textMuted }}>
                3m ago
              </span>
            </div>
            <p className="text-xs mt-1" style={{ color: COLORS.textSecondary }}>
              Also, I was thinking it would be awesome if we could add biometric login options like fingerprint or face recognition—it'd make accessing our app so much smoother for users.
            </p>
            <div className="mt-1.5">
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{ backgroundColor: `${COLORS.tagTensormind}20`, color: COLORS.tagTensormind }}
              >
                from Biometric auth support &gt;
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Avatar initials="CC" bgColor="#818CF8" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium" style={{ color: COLORS.textPrimary }}>
                Carla Cavani
              </span>
              <span className="text-xs" style={{ color: COLORS.textMuted }}>
                1mo ago
              </span>
            </div>
            <p className="text-xs mt-1" style={{ color: COLORS.textSecondary }}>
              Oh, and by the way, incorporating biometrics could really enhance the login experience for everyone; maybe we could consider that too?
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Feature List Item
function FeatureListItem({
  rank,
  status,
  id,
  title,
  votes,
  progress,
}: {
  rank: number;
  status: "green" | "yellow" | "gray";
  id: string;
  title: string;
  votes: number;
  progress: number;
}) {
  const statusColors = {
    green: "#22C55E",
    yellow: "#EAB308",
    gray: "#6B7280",
  };

  return (
    <div className="flex items-center gap-3 py-2">
      <span className="text-xs w-4" style={{ color: COLORS.textMuted }}>
        {rank}
      </span>
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: statusColors[status] }}
      />
      <span className="text-xs" style={{ color: COLORS.textMuted }}>
        {id}
      </span>
      <span className="text-xs flex-1 truncate" style={{ color: COLORS.textPrimary }}>
        {title}
      </span>
      <div className="w-16 h-1 rounded-full bg-gray-800 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${progress}%`,
            backgroundColor: COLORS.enterpriseBar,
          }}
        />
      </div>
      <span className="text-xs w-8 text-right" style={{ color: COLORS.textPrimary }}>
        {votes}
      </span>
      <ArrowUpRight className="w-3 h-3" style={{ color: COLORS.textMuted }} />
    </div>
  );
}

// Feature Voting Card
function FeatureVotingCard() {
  return (
    <motion.div variants={fadeInUp} className="space-y-4">
      {/* Feature Tags */}
      <div
        className="rounded-xl p-4 border"
        style={{
          backgroundColor: COLORS.cardBackground,
          borderColor: COLORS.cardBorder,
        }}
      >
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Token limits", count: 13 },
            { label: "Data syncing", count: 22 },
            { label: "API Downtime", count: 89 },
            { label: "Auth issues", count: 53, highlighted: true },
            { label: "Onboarding confusion", count: 17 },
            { label: "CSV Importing", count: 11 },
          ].map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs"
              style={{
                borderColor: item.highlighted ? COLORS.accent : COLORS.cardBorder,
                backgroundColor: item.highlighted ? `${COLORS.accent}20` : "transparent",
                color: item.highlighted ? COLORS.accent : COLORS.textPrimary,
              }}
            >
              {item.label}
              <span style={{ color: item.highlighted ? COLORS.accent : COLORS.textMuted }}>
                {item.count}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Feature List */}
      <div
        className="rounded-xl p-4 border"
        style={{
          backgroundColor: COLORS.cardBackground,
          borderColor: COLORS.cardBorder,
        }}
      >
        <FeatureListItem
          rank={1}
          status="green"
          id="I-1001"
          title="Biometric auth"
          votes={8}
          progress={90}
        />
        <FeatureListItem
          rank={2}
          status="green"
          id="I-1035"
          title="Multi-Factor Auth..."
          votes={3}
          progress={60}
        />
        <FeatureListItem
          rank={3}
          status="yellow"
          id="I-958"
          title="Single Sign-On (S..."
          votes={0}
          progress={40}
        />
        <FeatureListItem
          rank={4}
          status="gray"
          id=""
          title=""
          votes={0}
          progress={20}
        />
        <FeatureListItem
          rank={5}
          status="gray"
          id=""
          title=""
          votes={0}
          progress={10}
        />
      </div>

      {/* Chart Card */}
      <div
        className="rounded-xl p-4 border"
        style={{
          backgroundColor: COLORS.cardBackground,
          borderColor: COLORS.cardBorder,
        }}
      >
        <div className="text-xs mb-3" style={{ color: COLORS.textMuted }}>
          <span style={{ color: COLORS.textPrimary }}>I-1001</span>
        </div>
        <h4 className="text-sm font-medium mb-4" style={{ color: COLORS.textPrimary }}>
          Support for biometric authentication
        </h4>
        <div className="flex items-end gap-6">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <div
                className="h-3 rounded"
                style={{
                  width: "100%",
                  backgroundColor: COLORS.enterpriseBar,
                }}
              />
              <span className="text-xs whitespace-nowrap" style={{ color: COLORS.textMuted }}>
                Enterprise
              </span>
              <span className="text-xs font-medium" style={{ color: COLORS.textPrimary }}>
                30
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="h-3 rounded"
                style={{
                  width: "60%",
                  backgroundColor: COLORS.proBar,
                }}
              />
              <span className="text-xs whitespace-nowrap" style={{ color: COLORS.textMuted }}>
                Pro
              </span>
              <span className="text-xs font-medium" style={{ color: COLORS.textPrimary }}>
                18
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="h-3 rounded"
                style={{
                  width: "27%",
                  backgroundColor: COLORS.freeBar,
                }}
              />
              <span className="text-xs whitespace-nowrap" style={{ color: COLORS.textMuted }}>
                Free
              </span>
              <span className="text-xs font-medium" style={{ color: COLORS.textPrimary }}>
                8
              </span>
            </div>
          </div>
          <span className="text-xs" style={{ color: COLORS.textMuted }}>
            Community
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Feature Description
function FeatureDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div variants={fadeInUp}>
      <p className="text-sm" style={{ color: COLORS.textSecondary }}>
        <span className="font-semibold" style={{ color: COLORS.textPrimary }}>
          {title}
        </span>{" "}
        {description}
      </p>
    </motion.div>
  );
}

// Axiom Logo
function AxiomLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          fill="white"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-semibold text-white">AXIOM</span>
    </div>
  );
}

interface SaaspoFeatureSectionsPlainProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  features?: {
    title: string;
    description: string;
  }[];
  testimonial?: {
    logo?: React.ReactNode;
    quote: string;
    linkText?: string;
  };
}

export default function SaaspoFeatureSectionsPlain({
  title = "Turn customer requests\ninto product direction.",
  subtitle = "Take the guesswork out of your roadmap and prioritize features based on real customer data – powered by your support requests.",
  ctaText = "Book a demo",
  features = [
    {
      title: "Plain automatically extracts customer insights",
      description:
        "from your support queries and displays your most frequent requests in one dashboard.",
    },
    {
      title: "Keep track of the most frequently asked for features,",
      description:
        "understand sentiment, and analyse sub-themes within each feature requests.",
    },
    {
      title: "Tie each feature request to a company, tenant or pricing tier,",
      description: "and take the guesswork out of your roadmap.",
    },
  ],
  testimonial = {
    logo: <AxiomLogo />,
    quote:
      "Axiom has seen significant improvements in its support operations with Plain: faster response times and internal collaboration, and higher customer satisfaction.",
    linkText: "Read the case study",
  },
}: SaaspoFeatureSectionsPlainProps) {
  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 whitespace-pre-line"
            style={{ color: COLORS.textPrimary }}
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg max-w-xl mb-6"
            style={{ color: COLORS.textSecondary }}
          >
            {subtitle}
          </motion.p>
          <motion.button
            variants={fadeInUp}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: COLORS.accent }}
            whileHover={{ backgroundColor: COLORS.accentHover }}
          >
            {ctaText}
          </motion.button>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <TicketDetailCard />
          <SentimentCard />
          <FeatureVotingCard />
        </motion.div>

        {/* Feature Descriptions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24"
        >
          {features.map((feature, index) => (
            <FeatureDescription
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: COLORS.axiomBackground }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center justify-center p-12 md:p-16">
              {testimonial.logo}
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span
                className="text-xs font-medium uppercase tracking-wider mb-4"
                style={{ color: COLORS.textMuted }}
              >
                SUCCESS STORY
              </span>
              <p
                className="text-base md:text-lg font-medium mb-4"
                style={{ color: COLORS.textPrimary }}
              >
                {testimonial.quote}
              </p>
              {testimonial.linkText && (
                <a
                  href="#"
                  className="text-sm hover:underline"
                  style={{ color: COLORS.textSecondary }}
                >
                  {testimonial.linkText}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
