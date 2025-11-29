"use client";

import { motion } from "motion/react";

interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  date: string;
  stats?: {
    replies?: number;
    retweets?: number;
    likes?: number;
  };
  replyTo?: string;
}

interface ZoommyTestimonialTweetsProps {
  brandName?: string;
  brandTagline?: string;
  brandUrl?: string;
  tweets?: Tweet[];
}

const defaultTweets: Tweet[] = [
  {
    id: "1",
    author: {
      name: "Meng To",
      handle: "@MengTo",
      avatar: "https://picsum.photos/seed/mengto/48/48",
    },
    content:
      "Neat Mac app for browsing and downloading free stock photos:\nzoommyapp.com",
    date: "03:14 - 27 mar 2015",
    stats: {
      replies: 4,
      retweets: 57,
      likes: 158,
    },
  },
  {
    id: "2",
    author: {
      name: "Sean PJPGR Doran",
      handle: "@_seandoran",
      avatar: "https://picsum.photos/seed/seandoran/48/48",
    },
    content:
      "Just found a Mac app to search through free stock photo sites.\n\nGreat for a beta :)\n\nZoommy.\nzoommyapp.com",
    date: "06:04 - 28 mar 2015",
    stats: {
      replies: 0,
      retweets: 0,
      likes: 2,
    },
  },
  {
    id: "3",
    author: {
      name: "Jed Bridges",
      handle: "@jedbridges",
      avatar: "https://picsum.photos/seed/jedbridges/48/48",
    },
    content: "Saving a ton of time using zoommy",
    date: "19:24 - 27 mar 2015",
    stats: {
      replies: 0,
      retweets: 3,
      likes: 2,
    },
  },
  {
    id: "4",
    author: {
      name: "Mike McAlister",
      handle: "@mikemcalister",
      avatar: "https://picsum.photos/seed/mikemcalister/48/48",
    },
    content: "Finding the perfect photo with Zoommy.\narray.io/finding-the-pe...",
    date: "20:03 - 28 mar 2015",
    stats: {
      replies: 1,
      retweets: 3,
      likes: 5,
    },
  },
  {
    id: "5",
    author: {
      name: "Con Sotidis",
      handle: "@LeanKnee",
      avatar: "https://picsum.photos/seed/consotidis/48/48",
    },
    content:
      "Zoommy helps you find awesome free stock photos (but only on Mac!)\nzoommyapp.com HT @hiskali",
    date: "01:35 - 28 mar 2015",
    stats: {
      replies: 0,
      retweets: 0,
      likes: 0,
    },
  },
  {
    id: "6",
    author: {
      name: "The Dire Wolf",
      handle: "@DireWolf_sr",
      avatar: "https://picsum.photos/seed/direwolf/48/48",
    },
    content:
      "Zoommy helps you find awesome free stock photos for your creative product or inspiration zoommyapp.com #Tool",
    date: "07:44 - 29 mar 2015",
    stats: {
      replies: 0,
      retweets: 0,
      likes: 0,
    },
  },
  {
    id: "7",
    author: {
      name: "Mia",
      handle: "@MHarneltner",
      avatar: "https://picsum.photos/seed/mia/48/48",
    },
    content:
      "@rdle hey buddy! check out zoommyapp.com try awesome app for free stock photos #zoommy",
    date: "17:26 - 27 mar 2015",
    stats: {
      replies: 1,
      retweets: 1,
      likes: 1,
    },
  },
  {
    id: "8",
    author: {
      name: "Francesco Kirchhoff",
      handle: "@Francescokir",
      avatar: "https://picsum.photos/seed/francesco/48/48",
    },
    content:
      "Oh, this looks like it could be valuable in the future: Zoommy, a Mac app to search various free stock photo sites.\nzoommyapp.com",
    date: "09:02 - 27 mar 2015",
    stats: {
      replies: 0,
      retweets: 1,
      likes: 1,
    },
  },
];

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
    </svg>
  );
}

function ZoommyLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill="url(#zoommy-gradient)" />
      <circle cx="16" cy="18" r="6" stroke="white" strokeWidth="2" />
      <line
        x1="20.5"
        y1="22.5"
        x2="26"
        y2="28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="zoommy-gradient"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AppScreenshot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
    >
      <div className="flex h-6 items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>
      <div className="grid grid-cols-4 gap-1 bg-slate-900 p-2">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] overflow-hidden rounded"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/zoommy${i}/200/150)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function AppUICard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="overflow-hidden rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#6366F1] p-6 shadow-xl"
    >
      <div className="flex items-center gap-3">
        <ZoommyLogo className="h-10 w-10" />
        <span className="text-xl font-bold text-white">ZOOMMY</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-white/80">
        Zoommy helps you find awesome free stock photos for your creative
        product or inspiration.
      </p>
      <button className="mt-4 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/30">
        Download
      </button>
    </motion.div>
  );
}

function BrandCard({
  brandName,
  brandTagline,
  brandUrl,
}: {
  brandName: string;
  brandTagline: string;
  brandUrl: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="overflow-hidden rounded-xl bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6366F1] p-6 shadow-xl"
    >
      <div className="flex items-center gap-3">
        <ZoommyLogo className="h-12 w-12" />
        <span className="text-2xl font-bold tracking-wide text-white">
          {brandName}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-white/90">
        {brandTagline}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <div className="h-8 w-8 overflow-hidden rounded">
          <img
            src="https://picsum.photos/seed/brand1/32/32"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-8 w-8 overflow-hidden rounded">
          <img
            src="https://picsum.photos/seed/brand2/32/32"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-8 w-8 overflow-hidden rounded">
          <img
            src="https://picsum.photos/seed/brand3/32/32"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-8 w-8 overflow-hidden rounded">
          <img
            src="https://picsum.photos/seed/brand4/32/32"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

function TweetCard({
  tweet,
  delay = 0,
}: {
  tweet: Tweet;
  delay?: number;
}) {
  const highlightMentionsAndLinks = (text: string) => {
    const parts = text.split(/(@\w+|#\w+|(?:https?:\/\/)?[\w.-]+\.(?:com|io|co|app)[^\s]*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("@") || part.startsWith("#")) {
        return (
          <span key={index} className="text-[#1DA1F2]">
            {part}
          </span>
        );
      }
      if (part.match(/[\w.-]+\.(?:com|io|co|app)/)) {
        return (
          <span key={index} className="text-[#1DA1F2]">
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
      transition={{ duration: 0.5, delay }}
      className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <img
            src={tweet.author.avatar}
            alt={tweet.author.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-900">
              {tweet.author.name}
            </span>
            <span className="text-sm text-gray-500">{tweet.author.handle}</span>
          </div>
        </div>
        <TwitterIcon className="h-5 w-5 text-[#1DA1F2]" />
      </div>

      <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-gray-800">
        {highlightMentionsAndLinks(tweet.content)}
      </div>

      <div className="mt-3 text-xs text-gray-400">{tweet.date}</div>

      {tweet.stats && (
        <div className="mt-2 flex items-center gap-4 border-t border-gray-100 pt-2 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {tweet.stats.replies || 0}
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {tweet.stats.retweets || 0}
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            {tweet.stats.likes || 0}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function ZoommyTestimonialTweets({
  brandName = "ZOOMMY",
  brandTagline = "Zoommy helps you find awesome free stock photos for your creative product or inspiration.",
  brandUrl = "zoommyapp.com",
  tweets = defaultTweets,
}: ZoommyTestimonialTweetsProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F9F9] px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            <AppScreenshot />
            <TweetCard tweet={tweets[0]} delay={0.1} />
            <AppUICard />
            <TweetCard tweet={tweets[1]} delay={0.3} />
          </div>

          {/* Center column */}
          <div className="flex flex-col gap-4">
            <TweetCard tweet={tweets[2]} delay={0.15} />
            <TweetCard tweet={tweets[3]} delay={0.25} />
            <TweetCard tweet={tweets[4]} delay={0.35} />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <BrandCard
              brandName={brandName}
              brandTagline={brandTagline}
              brandUrl={brandUrl}
            />
            <TweetCard tweet={tweets[5]} delay={0.2} />
            <TweetCard tweet={tweets[6]} delay={0.3} />
            <TweetCard tweet={tweets[7]} delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
}
