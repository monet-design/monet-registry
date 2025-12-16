"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Header background
    headerBg: "#013E39",
    // Accent color for "KEY FEATURES" text
    accent: "#FE8C6A",
    // Card backgrounds
    videoCardBg: "#00D7C8",
    socialCardBg: "#013E39",
    googleCardBg: "#FE8C6A",
    htmlCardBg: "#E4B764",
    // Feature title color
    featureTitle: "#1a3c34",
  },
  dark: {
    headerBg: "#013E39",
    accent: "#FE8C6A",
    videoCardBg: "#00D7C8",
    socialCardBg: "#013E39",
    googleCardBg: "#FE8C6A",
    htmlCardBg: "#E4B764",
    featureTitle: "#ffffff",
  },
} as const;

/**
 * Feature content
 */
const FEATURES = [
  {
    id: "video",
    title: "VIDEO ADVERTISING",
    description:
      "Personalized video advertising on Instagram, Facebook, and YouTube delivers emotional branding and high advertising impact. Video advertising currently has the highest growth rates, promising great success for your brand, especially locally.",
    cardBgKey: "videoCardBg" as const,
  },
  {
    id: "social",
    title: "SOCIAL IMAGE ADS",
    description:
      "Utilize Instagram, the network of images and inspiration, to emotionally engage customers and increase the advertising impact of your local offers. Target potential customers on Facebook who share similar interests to enhance brand awareness.",
    cardBgKey: "socialCardBg" as const,
  },
  {
    id: "google",
    title: "GOOGLE SEARCH ADS",
    description:
      "Target potential customers actively searching for your services with local Google search ads. This classic entry-level advertising channel is fundamental for local online marketing and long-term success.",
    cardBgKey: "googleCardBg" as const,
  },
  {
    id: "html5",
    title: "ANIMATED HTML5\nBANNERS",
    description:
      "Engage audiences with animated regional HTML5 banner ads. Reach potential customers on topic-relevant websites and increase your brand awareness through displays on local news sites and high-reach platforms like spiegel.de and wetter.de.",
    cardBgKey: "htmlCardBg" as const,
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Play, Search, Monitor } from "lucide-react";

interface SaaspoFeatureSectionsLocalyzerProps {
  mode?: "light" | "dark";
  headerLabel?: string;
  headerTitle?: string;
}

// Video Card Illustration Component
function VideoCardIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      {/* Phone mockup */}
      <div className="relative">
        <div className="w-36 h-64 bg-white rounded-3xl shadow-lg border-4 border-gray-800 overflow-hidden">
          {/* Phone screen */}
          <div className="w-full h-full bg-gradient-to-br from-teal-100 to-cyan-200 flex items-center justify-center">
            <div className="w-20 h-32 bg-white/80 rounded-lg flex items-center justify-center">
              <Play className="w-8 h-8 text-teal-600" fill="currentColor" />
            </div>
          </div>
        </div>
        {/* Person silhouette */}
        <div className="absolute -right-8 bottom-0">
          <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
            {/* Head */}
            <circle cx="30" cy="15" r="12" fill="#1a3c34" />
            {/* Body */}
            <path
              d="M15 35 Q30 30 45 35 L50 70 Q30 75 10 70 Z"
              fill="#00D7C8"
            />
            {/* Legs */}
            <path d="M20 70 L15 100 M40 70 L45 100" stroke="#1a3c34" strokeWidth="6" strokeLinecap="round" />
            {/* Arms */}
            <path d="M15 45 L5 55 M45 40 L55 30" stroke="#1a3c34" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Social Card Illustration Component
function SocialCardIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="relative">
        {/* Main social post card */}
        <div className="w-52 h-64 bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Image area with tennis player */}
          <div className="w-full h-40 bg-gradient-to-br from-green-400 to-teal-500 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                {/* Tennis player silhouette */}
                <circle cx="40" cy="20" r="12" fill="white" />
                <path
                  d="M25 35 Q40 30 55 35 L58 65 Q40 70 22 65 Z"
                  fill="white"
                />
                {/* Tennis racket */}
                <ellipse cx="60" cy="30" rx="8" ry="12" stroke="white" strokeWidth="2" fill="none" />
                <line x1="60" y1="42" x2="60" y2="55" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            {/* Heart icon overlay */}
            <div className="absolute bottom-2 right-2 bg-white/90 rounded-full p-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#e74c3c">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
          {/* Post info */}
          <div className="p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-gray-300" />
              <div className="text-xs font-medium text-gray-700">@localtennis</div>
            </div>
            <div className="text-xs text-gray-500">Local tennis training...</div>
          </div>
        </div>
        {/* Second card behind */}
        <div className="absolute -right-4 -bottom-4 w-48 h-56 bg-white/60 rounded-xl shadow-lg -z-10" />
      </div>
    </div>
  );
}

// Google Ads Illustration Component
function GoogleAdsIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="w-64 bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Google Ads header */}
        <div className="bg-white border-b px-4 py-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-blue-500 font-bold text-sm">G</span>
            <span className="text-red-500 font-bold text-sm">o</span>
            <span className="text-yellow-500 font-bold text-sm">o</span>
            <span className="text-blue-500 font-bold text-sm">g</span>
            <span className="text-green-500 font-bold text-sm">l</span>
            <span className="text-red-500 font-bold text-sm">e</span>
          </div>
          <span className="text-gray-500 text-xs ml-1">Ads</span>
        </div>
        {/* Search bar */}
        <div className="px-4 py-2 border-b">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-xs text-gray-600">local services near me</span>
          </div>
        </div>
        {/* Search results */}
        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <div className="text-xs text-green-700">Ad - www.example.com</div>
            <div className="text-sm font-medium text-blue-700">Shop the Latest Trends - Fast Delivery</div>
            <div className="text-xs text-gray-500">Find the best local deals...</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-green-700">Ad - www.localshop.com</div>
            <div className="text-sm font-medium text-blue-700">Up to 50% Off - Shop Your Favorites</div>
            <div className="text-xs text-gray-500">Great prices, fast service...</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-green-700">Ad - www.deals.com</div>
            <div className="text-sm font-medium text-blue-700">Best Online Deals - Shop Today!</div>
            <div className="text-xs text-gray-500">Amazing offers on all items...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// HTML5 Banners Illustration Component
function Html5BannersIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="relative">
        {/* Main banner */}
        <div className="w-56 bg-white rounded-lg shadow-xl overflow-hidden">
          {/* HTML5 badge */}
          <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 text-center">
            HTML5
          </div>
          {/* Banner content */}
          <div className="p-4 space-y-2">
            <div className="text-sm font-bold text-gray-800">Your New Home</div>
            <div className="text-xs text-gray-500">is Closer Than Ever</div>
            <div className="h-16 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center">
              <Monitor className="w-8 h-8 text-teal-600" />
            </div>
          </div>
        </div>
        {/* Second banner */}
        <div className="absolute -left-8 top-12 w-32 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-teal-600 px-2 py-1">
            <div className="text-[10px] text-white font-medium">Shop the Latest</div>
            <div className="text-[8px] text-white/80">Trends - Fast</div>
          </div>
          <div className="p-2 h-12 bg-gray-50" />
        </div>
        {/* Third banner */}
        <div className="absolute -right-4 bottom-0 w-36 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-yellow-500 px-2 py-1 text-center">
            <div className="text-[10px] text-white font-bold">Best Online Deals</div>
            <div className="text-[8px] text-white">Shop Today!</div>
          </div>
          <div className="p-2 h-10 bg-gray-50" />
        </div>
      </div>
    </div>
  );
}

export default function SaaspoFeatureSectionsLocalyzer({
  mode = "light",
  headerLabel = "KEY FEATURES",
  headerTitle = "OUR MOST COMMONLY USED\nADVERTISING FORMATS AND\nCHANNELS",
}: SaaspoFeatureSectionsLocalyzerProps) {
  const colors = COLORS[mode];

  const illustrations: Record<string, React.ReactNode> = {
    video: <VideoCardIllustration />,
    social: <SocialCardIllustration />,
    google: <GoogleAdsIllustration />,
    html5: <Html5BannersIllustration />,
  };

  return (
    <section className="relative w-full bg-white dark:bg-gray-950">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full py-16 md:py-24 text-center"
        style={{ backgroundColor: colors.headerBg }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.2em] font-medium mb-4"
            style={{ color: colors.accent }}
          >
            {headerLabel}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight whitespace-pre-line"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {headerTitle}
          </motion.h2>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-20 md:space-y-32">
          {FEATURES.map((feature, index) => {
            const isReversed = index % 2 === 1;
            const cardBg = colors[feature.cardBgKey];

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-12 lg:gap-16`}
              >
                {/* Image Card */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="aspect-[4/3] rounded-2xl overflow-hidden"
                    style={{ backgroundColor: cardBg }}
                  >
                    {illustrations[feature.id]}
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold mb-4 whitespace-pre-line"
                    style={{ color: colors.featureTitle }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-600 dark:text-gray-400 leading-relaxed"
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
