"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#000000",
    cardBackground: "#14151A",
    cardBorder: "#27282D",
    title: "#ffffff",
    subtitle: "#9CA3AF",
    authorName: "#ffffff",
    handle: "#8B8C90",
    content: "#E7E9EA",
    mention: "#8B5CF6",
    footer: "#6B7280",
  },
  dark: {
    background: "#000000",
    cardBackground: "#14151A",
    cardBorder: "#27282D",
    title: "#ffffff",
    subtitle: "#9CA3AF",
    authorName: "#ffffff",
    handle: "#8B8C90",
    content: "#E7E9EA",
    mention: "#8B5CF6",
    footer: "#6B7280",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

// Types
interface Tweet {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  content: string;
}

interface ScreenStudioTestimonialProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  tweets?: Tweet[];
}

// Default tweets data based on the image
const defaultTweets: Tweet[] = [
  {
    id: 1,
    name: "Rene Brandel",
    handle: "@renebrandel",
    avatar: "https://picsum.photos/seed/rene/100/100",
    content:
      "The best $89 I spent in the last week is buying a license for https://screen.studio it makes you an instant DIY promo video production company! Thanks @pie6k",
  },
  {
    id: 2,
    name: "Gil Greenberg",
    handle: "@gilgNYC",
    avatar: "https://picsum.photos/seed/gil/100/100",
    content:
      "@pie6k Love it! Just bought a license. Ps: would love a way to crop out the browser header somehow.",
  },
  {
    id: 3,
    name: "Martin Harrisson",
    handle: "@mharrisson101",
    avatar: "https://picsum.photos/seed/martin/100/100",
    content:
      "@pie6k Just downloaded it. That's f*cking insane. Congrats. Super easy to use and amazing results!",
  },
  {
    id: 4,
    name: "\u{1F440} allworknosleep",
    handle: "@allworknosleep",
    avatar: "https://picsum.photos/seed/allwork/100/100",
    content:
      "I have been looking for a screen recording app like https://screen.studio for a while now. Came across @pie6k and his work the other day, which is top-notch. Love the transparency and know it's only gonna get better from here!",
  },
  {
    id: 5,
    name: "No I Diaz \u{2728}",
    handle: "@ded",
    avatar: "https://picsum.photos/seed/diaz/100/100",
    content:
      "Just got my license key for https://screen.studio from @pie6k! This screen recorder is truly a game changer for creating delightful demos!",
  },
  {
    id: 6,
    name: "Andrew Daniels \u{1F49C}",
    handle: "@design_nocodeio",
    avatar: "https://picsum.photos/seed/andrew/100/100",
    content:
      "@pie6k just downloaded #screenstudio and already sort of love it! Def. using it for screen recordings of @flutterflow so awesome!",
  },
  {
    id: 7,
    name: "Yassine Zeriouh",
    handle: "@xyassini",
    avatar: "https://picsum.photos/seed/yassine/100/100",
    content: "Get ready for me absolutely overusing Screen Studio by @pie6k \u{1F440}",
  },
  {
    id: 8,
    name: "Brendin Venter",
    handle: "@VenterBrendin",
    avatar: "https://picsum.photos/seed/brendin/100/100",
    content:
      "@pie6k Hey Adam just want to say it looks incredible thank you been looking for a tool like yours for years! My desktop and main driver is windows. That's quite a way out isn't it? Otherwise all good will use on my Mac. \u{1F44B}\u{1F44C}",
  },
  {
    id: 9,
    name: "Sukh - Programmatic SEO guy \u{2728}",
    handle: "@thisissukh_",
    avatar: "https://picsum.photos/seed/sukh/100/100",
    content:
      "Never bought something so fast - https://screen.studio screen recordings look amazing! \u{1F92F}\u{2728}",
  },
  {
    id: 10,
    name: "Rene Brandel",
    handle: "@renebrandel",
    avatar: "https://picsum.photos/seed/rene2/100/100",
    content:
      "@pie6k The rate of updates to https://screen.studio is pretty amazing!",
  },
  {
    id: 11,
    name: "Ismail Pelaseyed",
    handle: "@pelaseyed",
    avatar: "https://picsum.photos/seed/ismail/100/100",
    content: "@pie6k Best thing ever, saved me half a day!",
  },
  {
    id: 12,
    name: "Bala",
    handle: "@Pranavbala2",
    avatar: "https://picsum.photos/seed/bala/100/100",
    content:
      "Tried out https://screen.studio by @pie6k. It is a rewarding experience \u{1F60A} Screen recording for guides and simple bug reports is going to be a cake walk here onwards. Truly a service to mankind. Really looking forward to all the new updates and changes.",
  },
  {
    id: 13,
    name: "cn80",
    handle: "@cn8011",
    avatar: "https://picsum.photos/seed/cn80/100/100",
    content:
      "@pie6k This is awesome, charge double plz! This is far more useful than Camtasia & other screen recorders.",
  },
  {
    id: 14,
    name: "Gil Greenberg",
    handle: "@gilgNYC",
    avatar: "https://picsum.photos/seed/gil2/100/100",
    content:
      "@pie6k Amazing! Going to start using Screen studio for all my Twitter demos. Excited :)",
  },
  {
    id: 15,
    name: "Andrew Daniels \u{1F49C}",
    handle: "@design_nocodeio",
    avatar: "https://picsum.photos/seed/andrew2/100/100",
    content: "@pie6k Wow I also love this! Buying the pro version today!",
  },
  {
    id: 16,
    name: "Kenneth Frimpong [Kwasi XR] \u{21C4}",
    handle: "@techziward",
    avatar: "https://picsum.photos/seed/kenneth/100/100",
    content: "@pie6k This is an amazing software \u{1F44D} good job!",
  },
  {
    id: 17,
    name: "Fernando Pessagno",
    handle: "@Fer_MOMENTO",
    avatar: "https://picsum.photos/seed/fernando/100/100",
    content:
      "Hey indie hackers! Check out this amazing tool from @pie6k. Just in time for running some marketing experiments on Instagram, TikTok, and YouTube. I'll be buying it this weekend!",
  },
  {
    id: 18,
    name: "Rafal Wilinski",
    handle: "@rafalwilinski",
    avatar: "https://picsum.photos/seed/rafal/100/100",
    content: '@pie6k This is *exactly* what I was looking for, thanks.',
  },
  {
    id: 19,
    name: "Alfred Lua",
    handle: "@alfred_lua",
    avatar: "https://picsum.photos/seed/alfred/100/100",
    content:
      "@pie6k Congrats! Screen Studio looks cool! I have been doing a lot of screen recording and video making (with ScreenFlow mostly because I am familiar with it and paid for an upgraded license recently).",
  },
  {
    id: 20,
    name: "Ibrahim \u{1F680}",
    handle: "@Ibralassaf",
    avatar: "https://picsum.photos/seed/ibrahim/100/100",
    content:
      "@pie6k I Just tried it and the experience was amazing and smooth \u{1F680}",
  },
];

// Helper function to parse tweet content and highlight mentions and links
function parseTweetContent(content: string, mentionColor: string) {
  const parts: Array<{ type: "text" | "mention" | "link"; value: string }> = [];
  const regex = /(@\w+|https?:\/\/[^\s]+)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", value: content.slice(lastIndex, match.index) });
    }
    if (match[0].startsWith("@")) {
      parts.push({ type: "mention", value: match[0] });
    } else {
      parts.push({ type: "link", value: match[0] });
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < content.length) {
    parts.push({ type: "text", value: content.slice(lastIndex) });
  }

  return parts.map((part, i) => {
    if (part.type === "mention" || part.type === "link") {
      return (
        <span key={i} style={{ color: mentionColor }}>
          {part.value}
        </span>
      );
    }
    return <span key={i}>{part.value}</span>;
  });
}

// Tweet Card Component
function TweetCard({ tweet, index, colors }: { tweet: Tweet; index: number; colors: typeof COLORS.light }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border p-4"
      style={{ borderColor: colors.cardBorder, backgroundColor: colors.cardBackground }}
    >
      {/* Author Info */}
      <div className="flex items-start gap-3">
        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full" style={{ backgroundColor: colors.cardBorder }}>
          <Image
            src={tweet.avatar}
            alt={tweet.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium" style={{ color: colors.authorName }}>{tweet.name}</p>
          <p className="truncate text-sm" style={{ color: colors.handle }}>{tweet.handle}</p>
        </div>
      </div>

      {/* Tweet Content */}
      <div className="mt-3 text-sm leading-relaxed" style={{ color: colors.content }}>
        {parseTweetContent(tweet.content, colors.mention)}
      </div>
    </motion.div>
  );
}

// Main Component
export default function ScreenStudioTestimonial({
  mode = "light",
  title = "Meet Screen Studio users",
  subtitle = "Screen Studio empowers people to quickly create beautiful videos of their products and services.",
  tweets = defaultTweets,
}: ScreenStudioTestimonialProps) {
  const colors = COLORS[mode];
  // Split tweets into two columns for masonry effect
  const leftColumn = tweets.filter((_, i) => i % 2 === 0);
  const rightColumn = tweets.filter((_, i) => i % 2 === 1);

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl" style={{ color: colors.title }}>
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base" style={{ color: colors.subtitle }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftColumn.map((tweet, index) => (
              <TweetCard key={tweet.id} tweet={tweet} index={index * 2} colors={colors} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightColumn.map((tweet, index) => (
              <TweetCard key={tweet.id} tweet={tweet} index={index * 2 + 1} colors={colors} />
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center text-xs"
          style={{ color: colors.footer }}
        >
          If you are one of the people quoted above and would like to have your testimonial removed, please{" "}
          <span className="underline" style={{ color: colors.mention }}>get in touch</span> and I will remove it instantly.
        </motion.p>
      </div>
    </section>
  );
}
