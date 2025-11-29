"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
}

interface HeloTestimonialTweetsProps {
  brandName?: string;
  tweets?: Tweet[];
}

const defaultTweets: Tweet[] = [
  {
    id: "1",
    author: {
      name: "Taylor Otwell",
      handle: "@taylorotwell",
      avatar: "https://picsum.photos/seed/taylor/48/48",
    },
    content: "Gonna be good \u2764\uFE0F",
  },
  {
    id: "2",
    author: {
      name: "Kyle Charlebois",
      handle: "@kycharlie",
      avatar: "https://picsum.photos/seed/kyle/48/48",
    },
    content: "Looking awesome! Can't wait to give this a spin.",
  },
  {
    id: "3",
    author: {
      name: "Brandon O'Hara",
      handle: "@_brandonohara",
      avatar: "https://picsum.photos/seed/brandon/48/48",
    },
    content: "This looks incredible. I can't wait for it.",
  },
  {
    id: "4",
    author: {
      name: "Mike",
      handle: "@mike_elghali",
      avatar: "https://picsum.photos/seed/mike/48/48",
    },
    content: "",
  },
  {
    id: "5",
    author: {
      name: "Devin Gray",
      handle: "@devingray_",
      avatar: "https://picsum.photos/seed/devin/48/48",
    },
    content: "I'm starting a new savings account called\nthings @marcelpociot makes.",
  },
  {
    id: "6",
    author: {
      name: "Flavio Alves",
      handle: "@chesterduh",
      avatar: "https://picsum.photos/seed/flavio/48/48",
    },
    content: "My money is ready! \uD83D\uDCB8",
  },
];

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.3 8.8c0 2.2-1.6 4-3.6 4.4.2 1.2.8 2.4 1.8 3.4.2.2.2.6 0 .8-.2.2-.6.2-.8 0C6.8 15.6 6 13.6 6 11.4c0-3 2-5.4 4.4-5.4.6 0 .9.4.9 1v1.8zm6.6 0c0 2.2-1.6 4-3.6 4.4.2 1.2.8 2.4 1.8 3.4.2.2.2.6 0 .8-.2.2-.6.2-.8 0-1.9-1.8-2.7-3.8-2.7-6 0-3 2-5.4 4.4-5.4.6 0 .9.4.9 1v1.8z" />
    </svg>
  );
}

function TweetCard({
  tweet,
  delay = 0,
  className = "",
}: {
  tweet: Tweet;
  delay?: number;
  className?: string;
}) {
  const highlightMentions = (text: string) => {
    const parts = text.split(/(@\w+)/g);
    return parts.map((part, index) => {
      if (part.startsWith("@")) {
        return (
          <span key={index} className="text-[#4F7DF3]">
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
      transition={{ duration: 0.4, delay }}
      className={`relative rounded-xl bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${className}`}
    >
      <QuoteIcon className="absolute right-3 top-3 h-5 w-5 text-[#B8C4E8]" />

      {tweet.content ? (
        <p className="mb-3 pr-6 text-sm font-medium leading-relaxed text-[#1E293B] whitespace-pre-line">
          {highlightMentions(tweet.content)}
        </p>
      ) : (
        <div className="mb-3 h-4" />
      )}

      <div className="flex items-center gap-2.5">
        <img
          src={tweet.author.avatar}
          alt={tweet.author.name}
          className="h-8 w-8 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-[#1E293B]">
            {tweet.author.name}
          </span>
          <span className="text-xs text-[#64748B]">{tweet.author.handle}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeloTestimonialTweets({
  brandName = "HELO",
  tweets = defaultTweets,
}: HeloTestimonialTweetsProps) {
  const row1 = tweets.slice(0, 3);
  const row2 = tweets.slice(3, 6);

  return (
    <section className="relative w-full overflow-hidden bg-[#D9DFF5] px-4 py-12 md:px-8 md:py-16">
      {/* Decorative paper airplane */}
      <div className="absolute -top-4 right-4 h-24 w-24 md:right-12 md:h-32 md:w-32">
        <Image
          src="/registry/helo-testimonial-tweets/paper-airplane.png"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-3xl text-center"
      >
        <h2 className="text-xl font-semibold tracking-tight text-[#475569] md:text-2xl lg:text-3xl">
          What people are saying about{" "}
          <span className="text-[#4F7DF3]">{brandName}</span>
        </h2>
      </motion.div>

      {/* Tweet Grid - Scattered 3x2 layout */}
      <div className="mx-auto max-w-5xl">
        {/* Row 1 */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {row1.map((tweet, index) => (
            <TweetCard
              key={tweet.id}
              tweet={tweet}
              delay={0.1 * index}
              className={
                index === 0
                  ? "sm:mt-0"
                  : index === 1
                    ? "sm:mt-4"
                    : "sm:-mt-2"
              }
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {row2.map((tweet, index) => (
            <TweetCard
              key={tweet.id}
              tweet={tweet}
              delay={0.1 * (index + 3)}
              className={
                index === 0
                  ? "sm:mt-2"
                  : index === 1
                    ? "sm:-mt-2"
                    : "sm:mt-0"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
