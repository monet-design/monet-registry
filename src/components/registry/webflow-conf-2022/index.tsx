"use client";

import { motion } from "motion/react";

// Types
interface Tweet {
  id: number;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  content: string;
  date: string;
}

interface QuoteCard {
  id: number;
  quote: string;
  hashtag: string;
}

interface WebflowConf2022Props {
  headerText?: string;
  tweets?: Tweet[];
  quoteCard?: QuoteCard;
}

// Default tweets data
const defaultTweets: Tweet[] = [
  {
    id: 1,
    authorName: "Joanne Berina",
    authorHandle: "@JOANNE_BERINA",
    authorAvatar: "https://picsum.photos/seed/joanne-berina/200/200",
    content:
      "3 words to summarize @NoCodeConf:\nInspiring, Enlightening and Empowering. \u{1F496}\u{2728}\n\u{1F44D}",
    date: "NOV 18, 2021",
  },
  {
    id: 2,
    authorName: "Jordan Shotwell",
    authorHandle: "@JORDANSHOTWELL",
    authorAvatar: "https://picsum.photos/seed/jordan-shotwell/200/200",
    content:
      "I've been building with Webflow for almost 8 years \u{1F7E1}\n\nHave never been more excited for the future of Webflow, visual development, and no-code than I am today \u{1F64F}#NoCodeConf",
    date: "NOV 17, 2021",
  },
];

// Default quote card data
const defaultQuoteCard: QuoteCard = {
  id: 1,
  quote: '"I feel like I\'m part of\na revolution"',
  hashtag: "#OVERHEARDNOCODECONF",
};

// Decorative Square Component
function DecorativeSquare({
  color,
  className,
}: {
  color: "white" | "yellow" | "pink";
  className?: string;
}) {
  const colorClasses = {
    white: "bg-white",
    yellow: "bg-[#FFD93D]",
    pink: "bg-[#FF6B9D]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`h-3 w-3 ${colorClasses[color]} ${className ?? ""}`}
    />
  );
}

// Tweet Card Component
function TweetCard({ tweet }: { tweet: Tweet }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-full flex-col rounded-sm bg-[#1F1F1F] p-5"
    >
      {/* Author Info */}
      <div className="mb-4 flex items-center gap-3">
        <img
          src={tweet.authorAvatar}
          alt={tweet.authorName}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white">
            {tweet.authorName}
          </span>
          <span className="text-xs text-gray-400">{tweet.authorHandle}</span>
        </div>
      </div>

      {/* Content */}
      <p className="mb-6 flex-1 whitespace-pre-line text-sm leading-relaxed text-white">
        {tweet.content}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-700 pt-4">
        <span className="text-[10px] font-medium tracking-widest text-gray-400">
          TWITTER
        </span>
        <span className="text-[10px] font-medium tracking-wider text-gray-400">
          {tweet.date}
        </span>
      </div>
    </motion.div>
  );
}

// Quote Card Component
function QuoteCardComponent({ quoteCard }: { quoteCard: QuoteCard }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative flex flex-col justify-between rounded-sm bg-[#1F1F1F] p-5"
    >
      {/* Quote */}
      <p className="whitespace-pre-line text-xl font-medium leading-tight text-white sm:text-2xl">
        {quoteCard.quote}
      </p>

      {/* Hashtag */}
      <span className="mt-6 text-[10px] font-medium tracking-widest text-gray-400">
        {quoteCard.hashtag}
      </span>

      {/* Decorative Squares near quote card */}
      <div className="absolute -bottom-6 -right-6 flex gap-1">
        <div className="h-3 w-3 bg-[#FFD93D]" />
        <div className="h-3 w-3 bg-white" />
      </div>
    </motion.div>
  );
}

// Main Component
export default function WebflowConf2022({
  headerText = "Don't just take our word for it \u2014 here's what past\nattendees have loved about our events:",
  tweets = defaultTweets,
  quoteCard = defaultQuoteCard,
}: WebflowConf2022Props) {
  return (
    <section className="relative w-full overflow-hidden bg-[#111111] py-16 sm:py-20 lg:py-24">
      {/* Decorative Squares - Top Center */}
      <div className="absolute left-1/2 top-8 flex -translate-x-1/2 gap-1">
        <DecorativeSquare color="white" />
        <DecorativeSquare color="yellow" />
      </div>

      {/* Decorative Squares - Top Right */}
      <div className="absolute right-4 top-24 flex gap-1 sm:right-8 lg:right-16">
        <DecorativeSquare color="yellow" />
        <DecorativeSquare color="pink" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="whitespace-pre-line text-xl font-normal leading-relaxed text-white sm:text-2xl">
            {headerText}
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Tweet Cards */}
          {tweets.map((tweet, index) => (
            <motion.div
              key={tweet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <TweetCard tweet={tweet} />
            </motion.div>
          ))}

          {/* Quote Card */}
          <QuoteCardComponent quoteCard={quoteCard} />
        </div>
      </div>

    </section>
  );
}
