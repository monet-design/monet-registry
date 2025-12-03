"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface Tweet {
  id: number;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  content: string;
  mentionText?: string;
}

interface ConvertKitNewsletterPlanProps {
  mode?: "light" | "dark";
  heading?: string;
  tweets?: Tweet[];
  accentColor?: string;
}

// Default tweets data based on the image
const defaultTweets: Tweet[] = [
  {
    id: 1,
    authorName: "Jess Tapia",
    authorHandle: "@thejesscatapia",
    authorAvatar: "https://picsum.photos/seed/jess/200",
    content:
      "What's an email service that provides awesome templates, provides a way to make reusable sections of content, & makes getting paid easy?",
    mentionText: "Hint: it's @ConvertKit \u{1F60A}",
  },
  {
    id: 2,
    authorName: "Joe Forrest",
    authorHandle: "@JoeFWrites",
    authorAvatar: "https://picsum.photos/seed/joe/200",
    content:
      "I've sent out 14,500 emails in the past 3 months with a 40% open rate and a 6% click rate with @ConvertKit.",
    mentionText:
      "Their tools make it almost effortless to build and engage an audience.",
  },
  {
    id: 3,
    authorName: "East Coast Studio",
    authorHandle: "@ecpodcaststudio",
    authorAvatar: "https://picsum.photos/seed/eastcoast/200",
    content:
      "So glad we made the switch to @ConvertKit. It just makes a lot more sense to my brain and opened up the bottleneck that was stopping us from maximizing potential of e-mail.",
  },
];

// X (Twitter) Icon Component
function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Tweet Card Component
function TweetCard({ tweet }: { tweet: Tweet }) {
  // Function to render content with @ConvertKit highlighted
  const renderContent = (text: string) => {
    const parts = text.split(/(@ConvertKit)/g);
    return parts.map((part, index) => {
      if (part === "@ConvertKit") {
        return (
          <span key={index} className="text-[#2CA58D]">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-full min-w-[200px] max-w-[200px] flex-shrink-0 flex-col rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm"
    >
      {/* Header: Avatar, Name, Handle, X icon */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-200">
            <Image
              src={tweet.authorAvatar}
              alt={tweet.authorName}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-medium text-[#1F2937]">
              {tweet.authorName}
            </span>
            <span className="text-[10px] text-[#9CA3AF]">
              {tweet.authorHandle}
            </span>
          </div>
        </div>
        <XIcon className="h-4 w-4 text-[#374151]" />
      </div>

      {/* Tweet Content */}
      <p className="flex-1 text-[11px] leading-relaxed text-[#6B7280]">
        {renderContent(tweet.content)}
      </p>

      {/* Additional mention text if exists */}
      {tweet.mentionText && (
        <p className="mt-3 text-[11px] leading-relaxed text-[#6B7280]">
          {renderContent(tweet.mentionText)}
        </p>
      )}
    </motion.div>
  );
}

// Progress Bar Component
function ProgressBar({
  progress,
  accentColor,
}: {
  progress: number;
  accentColor: string;
}) {
  return (
    <div className="mx-auto mt-6 h-1 w-24 overflow-hidden rounded-full bg-[#E2EFEB]">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: accentColor }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

// Main Component
export default function ConvertKitNewsletterPlan({
  heading = "Join hundreds of thousands of creators already loving ConvertKit",
  tweets = defaultTweets,
  accentColor = "#2CA58D",
}: ConvertKitNewsletterPlanProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(33);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        const progress = (scrollLeft / maxScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-sm font-semibold tracking-tight text-[#1F2937] sm:text-base"
        >
          {heading}
        </motion.h2>

        {/* Tweets Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex justify-center gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {tweets.map((tweet, index) => (
            <motion.div
              key={tweet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TweetCard tweet={tweet} />
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <ProgressBar progress={scrollProgress} accentColor={accentColor} />
      </div>
    </section>
  );
}
