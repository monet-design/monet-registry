"use client";

import { motion } from "motion/react";
import { Check, CircleDot, ArrowRight, Triangle } from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// ============================================
// Types
// ============================================

interface VerifiedBadge {
  name: string;
  avatar?: string;
  verified?: boolean;
  icon?: "coinbase" | "twitter" | "tesla";
}

interface RadarTag {
  label: string;
}

interface JobListing {
  title: string;
  location: string;
  type: "hybrid" | "remote";
}

interface HandleStatus {
  handle: string;
  available: boolean;
}

interface FeatureCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  delay?: number;
}

interface FeaturesXProps {
  mode?: "light" | "dark";
  heading?: string;
  features?: {
    title: string;
    description: string;
    type: "badges" | "radar" | "jobs" | "handle";
    data?: VerifiedBadge[] | RadarTag[] | JobListing[] | HandleStatus;
  }[];
}

// ============================================
// Sub Components
// ============================================

function CoinbaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.5c-4.142 0-7.5-3.358-7.5-7.5S7.858 4.5 12 4.5s7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z" />
    </svg>
  );
}

function VerifiedIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#1D9BF0">
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
    </svg>
  );
}

function GoldVerifiedIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#E4A72F">
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
    </svg>
  );
}

function FeatureCard({ title, description, children, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col"
    >
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 mb-6 min-h-[220px] flex items-center justify-center">
        {children}
      </div>
      <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

// Badge Mockup Card Content
function BadgesMockup({ badges }: { badges: VerifiedBadge[] }) {
  return (
    <div className="flex flex-col gap-3 w-full px-2">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.name}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          className="flex items-center gap-2.5 bg-zinc-800/80 rounded-full px-3 py-2 w-fit"
          style={{ marginLeft: index * 24 }}
        >
          {badge.icon === "coinbase" && (
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
              <CoinbaseIcon />
            </div>
          )}
          {badge.icon === "twitter" && badge.avatar && (
            <div className="w-5 h-5 rounded-full bg-zinc-700 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-600 to-zinc-800" />
            </div>
          )}
          {badge.icon === "tesla" && (
            <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
              T
            </div>
          )}
          <span className="text-white text-sm font-medium">{badge.name}</span>
          {badge.verified && badge.icon === "coinbase" && <GoldVerifiedIcon />}
          {badge.verified && badge.icon === "twitter" && (
            <div className="flex items-center gap-0.5">
              <VerifiedIcon />
              <div className="w-4 h-4 rounded bg-amber-500/20 flex items-center justify-center">
                <span className="text-amber-500 text-[10px]">ID</span>
              </div>
            </div>
          )}
          {badge.verified && badge.icon === "tesla" && <GoldVerifiedIcon />}
        </motion.div>
      ))}
    </div>
  );
}

// Radar Chart Mockup
function RadarMockup({ tags }: { tags: RadarTag[] }) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-3">
        <CircleDot className="w-4 h-4 text-zinc-400" />
        <span className="text-white text-sm font-medium">Radar</span>
      </div>
      <div className="flex gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className="px-2.5 py-1 text-xs text-zinc-400 border border-zinc-700 rounded-md"
          >
            {tag.label}
          </span>
        ))}
      </div>
      <div className="relative h-24">
        <svg viewBox="0 0 200 60" className="w-full h-full">
          <path
            d="M0 45 Q25 35, 50 40 T100 30 T150 35 T200 25"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
          <path
            d="M0 50 Q25 40, 50 45 T100 35 T150 40 T200 30"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <motion.path
            d="M0 40 Q25 30, 50 35 T100 25 T150 30 T200 20"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
        </svg>
      </div>
    </div>
  );
}

// Job Listings Mockup
function JobsMockup({ jobs }: { jobs: JobListing[] }) {
  return (
    <div className="w-full space-y-2">
      {jobs.map((job, index) => (
        <motion.div
          key={job.title}
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          className="flex items-start gap-3 py-2"
        >
          <div className="mt-0.5">
            <Triangle className="w-3 h-3 text-white fill-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">{job.title}</p>
            <p className="text-zinc-500 text-xs">
              {job.type === "hybrid" ? "Hybrid" : "Remote"} - {job.location}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Handle Acquisition Mockup
function HandleMockup({ handleData }: { handleData: HandleStatus }) {
  return (
    <div className="w-full space-y-4">
      <h4 className="text-white text-base font-semibold text-center">
        Acquire a new handle
      </h4>
      <div className="flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-2.5">
        <span className="text-zinc-400 text-sm">@{handleData.handle}</span>
        <div className="ml-auto">
          <ArrowRight className="w-4 h-4 text-zinc-500" />
        </div>
      </div>
      <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg px-3 py-2.5 border border-zinc-700/50">
        <span className="text-white text-sm font-medium">@{handleData.handle}</span>
        <div className="flex items-center gap-2">
          {handleData.available && (
            <span className="text-green-500 text-xs font-medium">Available</span>
          )}
          <button className="px-3 py-1 bg-white text-black text-xs font-medium rounded-md hover:bg-zinc-200 transition-colors">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Default Data
// ============================================

const defaultFeatures: FeaturesXProps["features"] = [
  {
    title: "신뢰 향상 및 발견 가능성 증대",
    description: "금색 체크마크로 차별화하고 제휴 계정을 추가해 인지도를 높이세요.",
    type: "badges",
    data: [
      { name: "Coinbase", verified: true, icon: "coinbase" },
      { name: "tobi lutke", verified: true, icon: "twitter", avatar: "tobi" },
      { name: "Tesla", verified: true, icon: "tesla" },
    ] as VerifiedBadge[],
  },
  {
    title: "실시간 인사이트 확보",
    description: "Radar를 활용해 브랜드와 업계 전반에 관한 대화와 정서를 모니터링하세요.",
    type: "radar",
    data: [
      { label: "Crypto" },
      { label: "Fintech" },
      { label: "Series A" },
    ] as RadarTag[],
  },
  {
    title: "최고의 인재 채용",
    description: "세계에서 가장 똑똑하고 영향력 있는 사람들에게 귀사의 공개 채용 포지션을 알리세요.",
    type: "jobs",
    data: [
      { title: "Senior Product Marketing Manager, v0", location: "San Francisco", type: "hybrid" },
      { title: "Software Engineer, Lua", location: "United States", type: "remote" },
      { title: "Software Engineer, Accounts", location: "Berlin", type: "hybrid" },
      { title: "Design Engineer", location: "United States", type: "remote" },
    ] as JobListing[],
  },
  {
    title: "우선순위 사용자 아이디 획득",
    description: "추가 비용 없이 우선순위 사용자 아이디를 획득하고 가치 있는 비활성 사용자 아이디를 구매하세요.",
    type: "handle",
    data: { handle: "loop", available: true } as HandleStatus,
  },
];

// ============================================
// Main Component
// ============================================

export default function FeaturesX({
  mode = "light",
  heading = "성장을 위한 도구로 앞서 나가세요",
  features = defaultFeatures,
}: FeaturesXProps) {
  return (
    <section className="w-full bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-12 lg:mb-16"
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features?.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            >
              {feature.type === "badges" && (
                <BadgesMockup badges={feature.data as VerifiedBadge[]} />
              )}
              {feature.type === "radar" && (
                <RadarMockup tags={feature.data as RadarTag[]} />
              )}
              {feature.type === "jobs" && (
                <JobsMockup jobs={feature.data as JobListing[]} />
              )}
              {feature.type === "handle" && (
                <HandleMockup handleData={feature.data as HandleStatus} />
              )}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
