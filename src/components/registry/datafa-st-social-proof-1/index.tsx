"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#15202B",
    cardBg: "#1E2732",
    textPrimary: "#FFFFFF",
    textSecondary: "#8899A6",
    accent: "#E07B39",
    link: "#1DA1F2",
  },
  dark: {
    background: "#15202B",
    cardBg: "#1E2732",
    textPrimary: "#FFFFFF",
    textSecondary: "#8899A6",
    accent: "#E07B39",
    link: "#1DA1F2",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Heart, MessageCircle, Link2 } from "lucide-react";

interface Tweet {
  author: string;
  handle: string;
  avatar?: string;
  content: string;
  date: string;
  likes: number;
  hasMedia?: boolean;
  mediaUrl?: string;
  highlight?: string;
}

interface DatafaStSocialProof1Props {
  mode?: "light" | "dark";
  tweets?: Tweet[];
}

const defaultTweets: Tweet[] = [
  {
    author: "Wanderson Jackson",
    handle: "@jackson99ai",
    content: "I'm really enjoying @DataFast_, it's probably the best Analytics tools I've ever used in 14 years of career:) thanks @marclou",
    date: "Jun 25, 2025",
    likes: 7,
    hasMedia: true,
    mediaUrl: "https://pbs.twimg.com/media/G2UsTSpXAAAfejG?format=jpg&name=small",
  },
  {
    author: "jack friks",
    handle: "@jackfriks",
    content: "name a cleaner & simpler web analytics tool i dare you",
    date: "Dec 18, 2024",
    likes: 54,
    hasMedia: true,
    mediaUrl: "https://pbs.twimg.com/media/GywOBiwacAEvtIZ?format=png&name=small",
  },
  {
    author: "Kai Jiabo Feng",
    handle: "@KF_builds",
    content: "@marclou Marc I LOVE datafa.st! Came from Plausible and can't go back anymore.\n\nAlso there's basically no need for amplitude / posthog anymore given how good this is and how little effort it is to start attributing revenue to marketing efforts.\n\nWell done!!",
    date: "Jul 26, 2025",
    likes: 12,
    highlight: "datafa.st",
  },
  {
    author: "Rohan Gilkes, CFA",
    handle: "@rohangilkes",
    content: "Just set up datafa.st by @marclou.\n\nMan WTF!!!\n\nSetting up analytics can be like a 3 hour job depending on who is doing it.\n\nLol might be more for me.\n\nDatafast was like 4 minutes set up time. 5 minutes tops.\n\nDon't mention Google Analytics to me ever",
    date: "Nov 14, 2025",
    likes: 39,
    highlight: "datafa.st",
  },
  {
    author: "Chris DeWeese",
    handle: "@chrisdeweese_",
    content: "Why I switched from @PlausibleHQ to @DataFast_",
    date: "Mar 14, 2025",
    likes: 5,
    hasMedia: true,
    mediaUrl: "https://pbs.twimg.com/media/GuRfcifacAAlkU8?format=jpg&name=small",
  },
  {
    author: "Kevin",
    handle: "@kevton_",
    content: "Switched from Vercel Analytics to @DataFast_! Being able to track every payment is really good",
    date: "Aug 12, 2025",
    likes: 10,
    hasMedia: true,
    mediaUrl: "https://pbs.twimg.com/media/GfFaYUzWsAAmqgL?format=jpg&name=small",
  },
  {
    author: "Theo Stowell",
    handle: "@theostowell",
    content: "As a tool, @DataFast_ has improved so much since I first came across it.\n\nThese days it's a no-brainer choice for my business",
    date: "Aug 16, 2025",
    likes: 4,
  },
  {
    author: "Nico",
    handle: "@nico_jeannen",
    content: "I cancelled Plausible and am moving all my analytics to Datafast!\n\n@marclou did a great job with the app\n\nIt kinda pains me to say that because I wanted to make a marketer-first analytics app after I sold Talknotes.\n\nBut instead of just *thinking* about making an analytics",
    date: "Aug 20, 2025",
    likes: 263,
    hasMedia: true,
    mediaUrl: "https://pbs.twimg.com/media/GfFal0QXQAAUm-D?format=jpg&name=small",
  },
];

export default function DatafaStSocialProof1({
  mode = "dark",
  tweets = defaultTweets,
}: DatafaStSocialProof1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Twitter/X style masonry grid */}
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3 xl:columns-4">
          {tweets.map((tweet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-4 break-inside-avoid rounded-xl border border-gray-700/50 p-4"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Tweet Header */}
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-600">
                    <div className="h-full w-full bg-gradient-to-br from-blue-400 to-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-white">{tweet.author}</span>
                      <svg className="h-4 w-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: colors.textSecondary }}>
                      {tweet.handle}
                    </span>
                  </div>
                </div>
                {/* X Logo */}
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>

              {/* Tweet Content */}
              <p className="mb-3 whitespace-pre-line text-white">
                {tweet.highlight ? (
                  <>
                    {tweet.content.split(tweet.highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span style={{ color: colors.accent }}>{tweet.highlight}</span>
                        )}
                      </span>
                    ))}
                  </>
                ) : (
                  tweet.content
                )}
              </p>

              {/* Media */}
              {tweet.hasMedia && (
                <div className="mb-3 h-40 overflow-hidden rounded-xl bg-gray-700/50">
                  {tweet.mediaUrl ? (
                    <img
                      src={tweet.mediaUrl}
                      alt="Tweet media"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-500">
                      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
              )}

              {/* Tweet Footer */}
              <div className="flex items-center justify-between">
                <span className="text-sm" style={{ color: colors.textSecondary }}>
                  {tweet.date}
                </span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1" style={{ color: colors.textSecondary }}>
                    <Heart className="h-4 w-4 text-pink-500" fill="#EC4899" />
                    <span className="text-sm">{tweet.likes}</span>
                  </div>
                  <MessageCircle className="h-4 w-4" style={{ color: colors.textSecondary }} />
                  <Link2 className="h-4 w-4" style={{ color: colors.textSecondary }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
