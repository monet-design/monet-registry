"use client";

import { motion } from "motion/react";
import { Heart, MessageCircle, Repeat2, Twitter } from "lucide-react";
import Image from "next/image";

// Types
interface Tweet {
  id: number;
  content: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
  highlightedText?: string;
  linkText?: string;
  linkUrl?: string;
}

interface PrototyperForFigmaTestimonialProps {
  title?: string;
  tweets?: Tweet[];
}

// Default tweets data based on the image
const defaultTweets: Tweet[] = [
  {
    id: 1,
    content:
      "It feels really nice getting the higher fidelity control while still sitting right next to my layers on the canvas.",
    authorName: "Brian Lovin",
    authorRole: "Product Designer",
    authorAvatar: "https://picsum.photos/seed/brianlovin/100/100",
  },
  {
    id: 2,
    content:
      "Tried out {highlight} today on Figma and it's crazy. Imagine what you could achieve coding right in Figma.",
    authorName: "nuelCee",
    authorRole: "Product Designer",
    authorAvatar: "https://picsum.photos/seed/nuelcee/100/100",
    highlightedText: "Prototyper",
  },
  {
    id: 3,
    content: "Framer classic vibe in Figma.",
    authorName: "Junhyuk Jang",
    authorRole: "Interaction Designer",
    authorAvatar: "https://picsum.photos/seed/junhyuk/100/100",
    linkText: "prototyper.design",
    linkUrl: "https://prototyper.design",
  },
  {
    id: 4,
    content:
      "classic Framer returns in {highlight}, I am going to have so much fun with this",
    authorName: "Gavin Nelson",
    authorRole: "Product Designer",
    authorAvatar: "https://picsum.photos/seed/gavinnelson/100/100",
    highlightedText: "Prototyper",
  },
];

// Parse content with highlighted text
function parseContent(content: string, highlightedText?: string) {
  if (!highlightedText) return content;

  const parts = content.split("{highlight}");
  if (parts.length === 1) return content;

  return (
    <>
      {parts[0]}
      <span className="text-[#4A9ECA]">{highlightedText}</span>
      {parts[1]}
    </>
  );
}

// Tweet Card Component
function TweetCard({ tweet }: { tweet: Tweet }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-2xl bg-[#434343] p-4"
    >
      {/* Author Info */}
      <div className="mb-3 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-600">
          {tweet.authorAvatar && (
            <Image
              src={tweet.authorAvatar}
              alt={tweet.authorName}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{tweet.authorName}</p>
          <p className="text-xs text-[#8A8A8A]">{tweet.authorRole}</p>
        </div>
      </div>

      {/* Tweet Content */}
      <p className="mb-4 text-[13px] leading-relaxed text-[#B0B0B0]">
        {parseContent(tweet.content, tweet.highlightedText)}
        {tweet.linkText && (
          <>
            {" "}
            <a
              href={tweet.linkUrl || "#"}
              className="text-[#4A9ECA] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {tweet.linkText}
            </a>
          </>
        )}
      </p>

      {/* Twitter Actions */}
      <div className="mt-auto flex items-center gap-6">
        <button
          className="text-[#6A6A6A] transition-colors hover:text-[#8A8A8A]"
          aria-label="Comment"
        >
          <MessageCircle className="h-4 w-4" />
        </button>
        <button
          className="text-[#6A6A6A] transition-colors hover:text-[#8A8A8A]"
          aria-label="Retweet"
        >
          <Repeat2 className="h-4 w-4" />
        </button>
        <button
          className="text-[#6A6A6A] transition-colors hover:text-[#8A8A8A]"
          aria-label="Like"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}

// Main Component
export default function PrototyperForFigmaTestimonial({
  title = "What Designers Are Saying",
  tweets = defaultTweets,
}: PrototyperForFigmaTestimonialProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#383838] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Title with Twitter Icon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <Twitter className="h-6 w-6 fill-[#1DA1F2] text-[#1DA1F2]" />
          <h2 className="text-xl font-medium text-white sm:text-2xl">
            {title}
          </h2>
        </motion.div>

        {/* Tweets Grid - 2x2 layout */}
        <div className="grid gap-4 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
