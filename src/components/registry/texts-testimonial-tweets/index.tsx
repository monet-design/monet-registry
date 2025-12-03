"use client";

import { motion } from "motion/react";
import { Info, MessageCircle, Repeat2, Upload } from "lucide-react";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: React.ReactNode | null;
  date: string;
  stats?: {
    replies?: number;
    retweets?: number;
  };
  quotedTweet?: {
    author: {
      name: string;
      handle: string;
      avatar: string;
    };
    content: string;
  };
  images?: {
    src: string;
    alt: string;
    label?: string;
  }[];
}

interface TextsTestimonialTweetsProps {
  mode?: "light" | "dark";
  tweets?: Tweet[];
}

function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}

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

function TweetCard({
  tweet,
  delay = 0,
}: {
  tweet: Tweet;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl bg-white p-4"
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <img
            src={tweet.author.avatar}
            alt={tweet.author.name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-[15px] font-bold text-gray-900">
              {tweet.author.name}
            </span>
            <span className="text-[15px] text-gray-500">{tweet.author.handle}</span>
          </div>
        </div>
        <TwitterIcon className="h-5 w-5 text-[#1DA1F2]" />
      </div>

      {tweet.content && (
        <div className="mt-3 text-[15px] leading-relaxed text-gray-900">
          {tweet.content}
        </div>
      )}

      {tweet.quotedTweet && (
        <div className="mt-3 rounded-xl border border-gray-200 p-3">
          <div className="flex items-center gap-2">
            <img
              src={tweet.quotedTweet.author.avatar}
              alt={tweet.quotedTweet.author.name}
              className="h-5 w-5 rounded-full object-cover"
            />
            <span className="text-sm font-bold text-gray-900">
              {tweet.quotedTweet.author.name}
            </span>
            <span className="text-sm text-gray-500">
              {tweet.quotedTweet.author.handle}
            </span>
          </div>
          <div className="mt-1 text-sm text-gray-900">
            {tweet.quotedTweet.content}
          </div>
        </div>
      )}

      {tweet.images && tweet.images.length > 0 && (
        <div className="mt-3">
          {tweet.images.some((img) => img.label) && (
            <div className="mb-2 flex justify-between text-[15px] text-gray-900">
              {tweet.images.map((image, index) => (
                <span key={index}>{image.label}</span>
              ))}
            </div>
          )}
          <div className="grid grid-cols-2 gap-1">
            {tweet.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-3 flex items-center gap-1 text-[13px] text-gray-500">
        <span>{tweet.date}</span>
        <Info className="h-3.5 w-3.5 text-gray-400" />
      </div>

      {tweet.stats && (
        <div className="mt-3 flex items-center gap-4 border-t border-gray-100 pt-3 text-gray-500">
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span className="text-[13px]">{formatNumber(tweet.stats.replies || 0)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Repeat2 className="h-4 w-4" />
            <span className="text-[13px]">{formatNumber(tweet.stats.retweets || 0)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Upload className="h-4 w-4" />
            <span className="text-[13px] text-[#1DA1F2]">Copy link to Tweet</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

const defaultTweets: Tweet[] = [
  {
    id: "1",
    author: {
      name: "vivian in nyc",
      handle: "@vivianphung",
      avatar: "https://picsum.photos/seed/vivian/48/48",
    },
    content: (
      <>
        i&apos;ve been using{" "}
        <span className="text-[#1DA1F2]">@textshq</span> (on macos) for
        less than seven hrs & it&apos;s been life altering: all my dms + imessage in one
        inbox w search & other advance features. sign up for early access @{" "}
        <span className="text-[#1DA1F2]">texts.com</span>
      </>
    ),
    date: "7:12 PM - Dec 29, 2020 from Manhattan, NY",
    stats: {
      replies: 26,
      retweets: 9,
    },
    quotedTweet: {
      author: {
        name: "vivian in nyc",
        handle: "@vivianphung",
        avatar: "https://picsum.photos/seed/vivian/48/48",
      },
      content: "YALL WHY AREN'T TWITTER DMS SEARCHABLE",
    },
  },
  {
    id: "2",
    author: {
      name: "Brian Lovin",
      handle: "@brian_lovin",
      avatar: "https://picsum.photos/seed/brian/48/48",
    },
    content: (
      <>
        Got access to <span className="text-[#1DA1F2]">texts.com</span> yesterday. It&apos;s
        nice! Specifically, I love the feature where messages stay unread until you actually
        reply.
      </>
    ),
    date: "7:35 PM - Jan 15, 2021",
    stats: {
      replies: 86,
      retweets: 12,
    },
  },
  {
    id: "3",
    author: {
      name: "Kishan Bagaria",
      handle: "@KishanBagaria",
      avatar: "https://picsum.photos/seed/kishan/48/48",
    },
    content: null,
    date: "10:31 PM - Oct 12, 2020",
    stats: {
      replies: 1100,
      retweets: 83,
    },
    images: [
      {
        src: "https://picsum.photos/seed/phone1/300/400",
        alt: "iPhone home screen before - many messaging apps",
        label: "how it started",
      },
      {
        src: "https://picsum.photos/seed/phone2/300/400",
        alt: "iPhone home screen after - organized with Texts app",
        label: "how it's going",
      },
    ],
  },
];

export default function TextsTestimonialTweets({
  mode = "light",
  tweets = defaultTweets,
}: TextsTestimonialTweetsProps) {
  return (
    <section className="w-full bg-[#F9FAFA] px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tweets.map((tweet, index) => (
            <TweetCard key={tweet.id} tweet={tweet} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
