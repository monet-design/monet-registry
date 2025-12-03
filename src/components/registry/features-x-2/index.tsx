"use client";

import React from "react";
import { motion } from "motion/react";
import { BadgeCheck, Search, ChartLine, Users, X } from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface ProfilePill {
  name: string;
  verified?: boolean;
  avatar?: string;
}

interface TweetMock {
  username: string;
  handle: string;
  content: string;
  avatar?: string;
  verified?: boolean;
}

interface FeatureSection {
  title: string;
  features: Feature[];
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  mockType: "profiles" | "tweet" | "search" | "analytics";
}

// Default data
const defaultProfiles: ProfilePill[] = [
  { name: "Shinya Ryuunosuke", verified: true },
  { name: "AnimAI", verified: true },
  { name: "ouch", verified: false },
  { name: "AnimationInc", verified: true },
  { name: "Mohit", verified: false },
  { name: "Manfredo Panfilo", verified: false },
  { name: "Neil Keith", verified: true },
];

const defaultTweet: TweetMock = {
  username: "Dylan Abruscato",
  handle: "@dylan",
  content: "I'm joining @TBPN as President.\n\nJohn, Jordi & team have built something incredibly special.\n\nAnd after starting my career at CNBC, this feels full circle.",
  verified: true,
};

const defaultSections: FeatureSection[] = [
  {
    title: "인지도를 높이세요",
    features: [
      {
        icon: <BadgeCheck className="w-4 h-4" />,
        title: "눈보이는 검색 체크마크",
        description: "검색 체크마크는 귀사의 비즈니스가 인증된 합법적인 업체라는 것을 즉시 보여주므로 신뢰도와 공신력을 높일 수 있습니다.",
        mockType: "profiles",
      },
      {
        icon: <Users className="w-4 h-4" />,
        title: "제휴 계정 추가",
        description: "경영진, 직원, 서브 브랜드, 지원팀의 사용자 아이디를 연결하여 X 전반에 걸쳐 일관된 '인지도'를 구축하세요.",
        mockType: "tweet",
      },
    ],
  },
  {
    title: "누구보다 먼저 트렌드를 확인하세요",
    features: [
      {
        icon: <Search className="w-4 h-4" />,
        title: "강력한 실시간 인사이트 제공",
        description: "Radar를 활용하여 브랜드와 업계에 대한 대화의 정서를 파악하고 추적하세요.",
        mockType: "search",
      },
      {
        icon: <ChartLine className="w-4 h-4" />,
        title: "모든 중요 지표를 한곳에서 조회",
        description: "중앙 애널리틱스 대시보드를 통해 비즈니스에 가장 크게 기여한 제휴 계정을 즉시 확인하세요.",
        mockType: "analytics",
      },
    ],
  },
];

// Sub-components
const ProfilePillComponent = ({ profile, index }: { profile: ProfilePill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] rounded-full border border-[#2a2a2a]"
  >
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-600 to-gray-800" />
    <span className="text-white text-sm font-medium">{profile.name}</span>
    {profile.verified && (
      <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500" />
    )}
  </motion.div>
);

const ProfilesMock = ({ profiles = defaultProfiles }: { profiles?: ProfilePill[] }) => (
  <div className="p-6 h-full">
    <div className="flex flex-wrap gap-3 justify-center">
      {profiles.map((profile, index) => (
        <ProfilePillComponent key={index} profile={profile} index={index} />
      ))}
    </div>
  </div>
);

const TweetMockComponent = ({ tweet = defaultTweet }: { tweet?: TweetMock }) => (
  <div className="p-4 h-full flex flex-col sm:flex-row gap-4">
    {/* Left side - TBPN card */}
    <div className="flex-1 bg-[#141414] rounded-xl p-4 border border-[#2a2a2a]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-bold text-black text-xs">
          T
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-white text-sm font-semibold">TBPN</span>
            <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500" />
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 mb-3">Affiliates</div>
      <div className="flex -space-x-2 mb-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 border-2 border-[#141414]"
          />
        ))}
      </div>
      <div className="text-gray-500 text-xs">John Gruggele - @tbpn</div>
    </div>

    {/* Right side - Tweet */}
    <div className="flex-1 bg-[#141414] rounded-xl p-4 border border-[#2a2a2a]">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-amber-600 to-amber-800" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-1 flex-wrap">
            <span className="text-white text-sm font-semibold">{tweet.username}</span>
            {tweet.verified && (
              <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500" />
            )}
            <div className="w-4 h-4 rounded bg-white flex items-center justify-center">
              <span className="text-[8px] font-bold text-black">T</span>
            </div>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            I&apos;m joining <span className="text-blue-400">@TBPN</span> as President.
            <br /><br />
            John, Jordi & team have built something incredibly special.
            <br /><br />
            And after starting my career at CNBC, this feels full circle.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const SearchMock = () => (
  <div className="p-6 h-full">
    <div className="bg-[#141414] rounded-xl p-4 border border-[#2a2a2a]">
      <h4 className="text-white text-sm font-semibold mb-4">Find out what&apos;s happening</h4>
      <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-lg px-3 py-2 mb-4">
        <Search className="w-4 h-4 text-gray-500" />
        <span className="text-gray-400 text-sm">&quot;Pre-seed&quot; AND &quot;Healthcare&quot; &quot;Medical AI&quot;</span>
      </div>
      <div className="flex gap-2">
        <button className="px-3 py-1.5 bg-[#1a1a1a] text-gray-400 text-xs rounded-lg border border-[#2a2a2a]">
          Clear search
        </button>
        <button className="px-3 py-1.5 bg-[#1a1a1a] text-gray-400 text-xs rounded-lg border border-[#2a2a2a]">
          Examples
        </button>
      </div>
      {/* Chart placeholder */}
      <div className="mt-6 h-24 relative">
        <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 Q30,55 60,50 T120,45 T180,35 T240,25 T300,20 L300,80 L0,80 Z"
            fill="url(#chartGradient)"
          />
          <path
            d="M0,60 Q30,55 60,50 T120,45 T180,35 T240,25 T300,20"
            fill="none"
            stroke="rgb(59, 130, 246)"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  </div>
);

const AnalyticsMock = () => (
  <div className="p-6 h-full">
    <div className="bg-[#141414] rounded-xl p-4 border border-[#2a2a2a]">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white text-sm font-semibold">Organic Analytics</h4>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-xs">251 affiliates</span>
          <div className="flex -space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 border border-[#141414]"
              />
            ))}
          </div>
          <span className="text-gray-500 text-xs">Include organization</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-gray-500 text-xs mb-1">Impressions</div>
          <div className="flex items-baseline gap-2">
            <span className="text-white text-xl font-semibold">20,789,920</span>
            <span className="text-green-500 text-xs">+202%</span>
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-xs mb-1">Engagement rate</div>
          <div className="flex items-baseline gap-2">
            <span className="text-white text-xl font-semibold">3.9%</span>
            <span className="text-green-500 text-xs">+18%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-gray-500 text-xs mb-1">Reach</div>
          <div className="flex items-baseline gap-2">
            <span className="text-white text-xl font-semibold">120,293,989</span>
            <span className="text-green-500 text-xs">+630%</span>
          </div>
        </div>
        <div>
          <div className="text-gray-500 text-xs mb-1">Engagements</div>
          <div className="flex items-baseline gap-2">
            <span className="text-white text-xl font-semibold">9,892,881</span>
            <span className="text-green-500 text-xs">+5,942%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const renderMock = () => {
    switch (feature.mockType) {
      case "profiles":
        return <ProfilesMock />;
      case "tweet":
        return <TweetMockComponent />;
      case "search":
        return <SearchMock />;
      case "analytics":
        return <AnalyticsMock />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#0a0a0a] rounded-2xl border border-[#1a1a1a] overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
          {feature.icon}
          <span>{feature.title}</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Mock Content */}
      <div className="min-h-[280px]">
        {renderMock()}
      </div>
    </motion.div>
  );
};

// Main Component
interface FeaturesX2Props {
  mode?: "light" | "dark";
  sections?: FeatureSection[];
  className?: string;
}

export default function FeaturesX2({
  mode = "light",
  sections = defaultSections,
  className = "",
}: FeaturesX2Props) {
  return (
    <section className={`bg-black py-20 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={sectionIndex > 0 ? "mt-20" : ""}>
            {/* Section Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-2xl md:text-3xl font-bold mb-8"
            >
              {section.title}
            </motion.h2>

            {/* Feature Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {section.features.map((feature, featureIndex) => (
                <FeatureCard
                  key={featureIndex}
                  feature={feature}
                  index={featureIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
