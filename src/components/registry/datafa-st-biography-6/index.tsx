"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    cardBg: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    linkColor: "#3B82F6",
    badgeBg: "#F4E3C7",
    badgeText: "#92400E",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    linkColor: "#3B82F6",
    badgeBg: "#F4E3C7",
    badgeText: "#92400E",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Play } from "lucide-react";

interface DatafaStBiography6Props {
  mode?: "light" | "dark";
  greeting?: string;
  location?: string;
  authorName?: string;
  badge?: {
    year: string;
    title: string;
  };
  bio?: string[];
  reasons?: string[];
  buildingText?: string;
  twitterFollowers?: string;
  twitterHandle?: string;
  videoUrl?: string;
  avatarUrl?: string;
}

export default function DatafaStBiography6({
  mode = "dark",
  greeting = "Voyager",
  location = "South Korea",
  authorName = "Marc",
  badge = {
    year: "2023",
    title: "Maker of the Year",
  },
  bio = [
    "I'm Marc, the creator of DataFast. I've also built 24 startups and earned $2M+ online.",
    "I learned that data is a goldmine of opportunities. But most analytics tools just show vanity metrics...",
    "Pageviews, visitors, bounce rates... but do any of these actually tell you where your money is coming from?",
  ],
  reasons = [
    "Find marketing channels that drive PAYING customers, not just pageviews.",
    "Discover what makes people buy and turn more visits into revenue.",
    "Make revenue-driven decisions and work on the right things.",
  ],
  buildingText = "I'm building DataFast in front of",
  twitterFollowers = "127,000+ people",
  twitterHandle = "on Twitter. Let's ship!",
  videoUrl = "https://video.twimg.com/amplify_video/1943341884228665344/vid/avc1/640x360/9yZLIvHcgbnZriJk.mp4?tag=14",
  avatarUrl = "https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadam.d9b0a2ec.jpg&w=128&q=75",
}: DatafaStBiography6Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          {/* Header with Badge and Intro */}
          <div className="mb-8 flex flex-col items-center gap-6 md:flex-row md:items-start">
            {/* Badge */}
            <div
              className="flex flex-col items-center rounded-xl px-6 py-4"
              style={{ backgroundColor: colors.badgeBg }}
            >
              <div className="mb-2 h-16 w-16 overflow-hidden rounded-full bg-gradient-to-br from-orange-300 to-orange-500">
                {/* Avatar placeholder */}
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: colors.badgeText }}
                >
                  {badge.year}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: colors.badgeText }}
                >
                  {badge.title}
                </div>
              </div>
            </div>

            {/* Intro Text */}
            <div className="text-center md:text-left">
              <p className="mb-4" style={{ color: colors.textSecondary }}>
                Hey,{" "}
                <span className="border-b border-dashed border-blue-400 text-blue-400">
                  {greeting}
                </span>{" "}
                from <span className="font-medium text-white">{location}</span> 🇰🇷
              </p>
              {bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-3"
                  style={{ color: colors.textPrimary }}
                >
                  {index === 0 ? (
                    <>
                      I&apos;m {authorName}, the creator of DataFast. I&apos;ve also built{" "}
                      <a href="#" className="underline" style={{ color: colors.linkColor }}>
                        24 startups
                      </a>{" "}
                      and earned $2M+ online.
                    </>
                  ) : (
                    <>
                      {paragraph.includes("data is a goldmine") ? (
                        <>
                          I learned that{" "}
                          <strong>data is a goldmine of opportunities</strong>. But
                          most analytics tools just show{" "}
                          <em>vanity metrics</em>...
                        </>
                      ) : (
                        <em style={{ color: colors.textSecondary }}>{paragraph}</em>
                      )}
                    </>
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Reasons */}
          <div className="mb-8 text-center">
            <p className="mb-4" style={{ color: colors.textPrimary }}>
              So I built DataFast for 3 reasons:
            </p>
            <ol className="space-y-2 text-left">
              {reasons.map((reason, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                  style={{ color: colors.textPrimary }}
                >
                  <span>{index + 1}.</span>
                  <span>
                    {reason.includes("PAYING customers") ? (
                      <>
                        <strong>Find marketing channels that drive PAYING customers</strong>
                        , not just pageviews.
                      </>
                    ) : reason.includes("what makes people buy") ? (
                      <>
                        <strong>Discover what makes people buy</strong> and turn
                        more visits into revenue.
                      </>
                    ) : (
                      <>
                        <strong>Make revenue-driven decisions</strong> and work
                        on the right things.
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Twitter mention */}
          <p className="mb-8" style={{ color: colors.textPrimary }}>
            {buildingText}{" "}
            <a href="#" className="underline" style={{ color: colors.linkColor }}>
              {twitterFollowers}
            </a>{" "}
            {twitterHandle}
          </p>

          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-2xl overflow-hidden rounded-xl"
            style={{ backgroundColor: colors.cardBg }}
          >
            <div className="p-4">
              {/* Dashboard header */}
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-800">
                    DataFast
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{authorName} Lou</span>
                </div>
              </div>

              {/* Video content */}
              <div className="relative">
                <div className="h-64 overflow-hidden rounded-lg bg-gray-100">
                  <video
                    src={videoUrl}
                    className="h-full w-full object-cover"
                    controls
                    poster="https://datafa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdemo.8f89df2b.jpg&w=1080&q=100"
                  />
                </div>

                {/* Video thumbnail avatar */}
                <div className="absolute bottom-4 right-4 h-20 w-20 overflow-hidden rounded-lg bg-gray-300">
                  <img
                    src={avatarUrl}
                    alt="Author"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
