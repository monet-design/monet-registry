"use client";

import { motion } from "motion/react";
import { ArrowRight, Heart, MessageCircle, Repeat2 } from "lucide-react";

// Types
interface Tweet {
  id: number;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  content: string;
  date: string;
  retweetCount?: number;
  favoriteCount?: number;
}

interface UserConf2014Props {
  title?: string;
  highlightWord?: string;
  tweets?: Tweet[];
  ctaText?: string;
  ctaLink?: string;
}

// Default tweets data based on the image
const defaultTweets: Tweet[] = [
  {
    id: 1,
    authorName: "holly goldin",
    authorHandle: "@HollyGoldin",
    authorAvatar: "https://picsum.photos/seed/holly-goldin/200/200",
    content:
      "This conference is fucking awesome. The end.\n#UserConf",
    date: "5:43 PM - 3 May 2013",
    favoriteCount: 2,
  },
  {
    id: 2,
    authorName: "Ali Canty",
    authorHandle: "@AliCanty",
    authorAvatar: "https://picsum.photos/seed/ali-canty/200/200",
    content:
      "I never want to suffer through another conference again. Nothing can compete with the #userconf awesomeness.",
    date: "8:13 PM - 3 May 2013",
    retweetCount: 1,
    favoriteCount: 3,
  },
  {
    id: 3,
    authorName: "Carter Gibson",
    authorHandle: "@CarterGee",
    authorAvatar: "https://picsum.photos/seed/carter-gee/200/200",
    content:
      "These are the smartest people you will find on the subject of customer service. Period. #UserConf\ninstagr.am/p/Qs3XQKH3ax/",
    date: "1:40 AM - 13 Oct 2012",
    retweetCount: 4,
    favoriteCount: 2,
  },
  {
    id: 4,
    authorName: "Jim Redding",
    authorHandle: "@jimredding",
    authorAvatar: "https://picsum.photos/seed/jim-redding/200/200",
    content:
      "Not even noon and #userconf has already been a wealth of information about vibes, gifs, memes, and awesome community knowledge!",
    date: "5:08 PM - 3 May 2013",
    retweetCount: 1,
    favoriteCount: 4,
  },
  {
    id: 5,
    authorName: "Marny Smith",
    authorHandle: "@marnysmith",
    authorAvatar: "https://picsum.photos/seed/marny-smith/200/200",
    content:
      "I know a conference is really good when I become so engrossed that I forget to tweet. #userconf",
    date: "10:17 PM - 3 May 2013",
    retweetCount: 2,
    favoriteCount: 8,
  },
  {
    id: 6,
    authorName: "Joans",
    authorHandle: "@joanofdark",
    authorAvatar: "https://picsum.photos/seed/joan-of-dark/200/200",
    content:
      "You know what is great about #UserConf? I have not seen a single fedora. And also the speakers are terrific.",
    date: "10:16 PM - 12 Oct 2012",
    favoriteCount: 2,
  },
  {
    id: 7,
    authorName: "William Herbert",
    authorHandle: "@thisiswherbert",
    authorAvatar: "https://picsum.photos/seed/william-herbert/200/200",
    content: "This conference is the shit!! @bunnystack #userconf",
    date: "8:12 PM - 3 May 2013",
    favoriteCount: 2,
  },
  {
    id: 8,
    authorName: "Kathryn Presner",
    authorHandle: "@zoonini",
    authorAvatar: "https://picsum.photos/seed/kathryn-presner/200/200",
    content:
      "Feels kinda neat to be in an auditorium full of people who do what I do for a living. My peoples, I've found my peoples! #userconf",
    date: "4:27 PM - 3 May 2013",
    favoriteCount: 4,
  },
];

// Helper function to render content with hashtags and links highlighted
function renderContent(content: string) {
  const parts = content.split(/(\s+)/);
  return parts.map((part, index) => {
    if (part.startsWith("#")) {
      return (
        <span key={index} className="text-[#1DA1F2] hover:underline cursor-pointer">
          {part}
        </span>
      );
    }
    if (part.startsWith("@")) {
      return (
        <span key={index} className="text-[#1DA1F2] hover:underline cursor-pointer">
          {part}
        </span>
      );
    }
    if (part.startsWith("http") || part.includes("instagr.am")) {
      return (
        <span key={index} className="text-[#1DA1F2] hover:underline cursor-pointer">
          {part}
        </span>
      );
    }
    return part;
  });
}

// Tweet Card Component
function TweetCard({ tweet, index }: { tweet: Tweet; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex flex-col rounded-sm border border-[#E1E8ED] bg-white p-4"
    >
      {/* Header: Avatar, Name, Handle, Follow Button */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <img
            src={tweet.authorAvatar}
            alt={tweet.authorName}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#14171A]">
              {tweet.authorName}
            </span>
            <span className="text-xs text-[#657786]">{tweet.authorHandle}</span>
          </div>
        </div>
        <button className="rounded bg-[#1DA1F2] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1A91DA] transition-colors">
          Follow
        </button>
      </div>

      {/* Content */}
      <p className="mb-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-[#14171A]">
        {renderContent(tweet.content)}
      </p>

      {/* Timestamp */}
      <p className="mb-2 text-xs text-[#657786]">{tweet.date}</p>

      {/* Stats */}
      <div className="mb-2 flex gap-4 text-xs text-[#657786]">
        {tweet.retweetCount !== undefined && tweet.retweetCount > 0 && (
          <span>
            <strong className="text-[#14171A]">{tweet.retweetCount}</strong> RETWEET{tweet.retweetCount > 1 ? "S" : ""}
          </span>
        )}
        {tweet.favoriteCount !== undefined && tweet.favoriteCount > 0 && (
          <span>
            <strong className="text-[#14171A]">{tweet.favoriteCount}</strong> FAVORITE{tweet.favoriteCount > 1 ? "S" : ""}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 border-t border-[#E1E8ED] pt-3">
        <button className="text-[#AAB8C2] hover:text-[#1DA1F2] transition-colors">
          <MessageCircle className="h-4 w-4" />
        </button>
        <button className="text-[#AAB8C2] hover:text-[#17BF63] transition-colors">
          <Repeat2 className="h-4 w-4" />
        </button>
        <button className="text-[#AAB8C2] hover:text-[#E0245E] transition-colors">
          <Heart className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}

// Main Component
export default function UserConf2014({
  title = "What people are saying about UserConf",
  tweets = defaultTweets,
  ctaText = "Check out more Tweets about UserConf",
  ctaLink = "#",
}: UserConf2014Props) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* Google Fonts Import for Lora */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,400;1,500;1,600&display=swap');
      `}</style>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2
            className="text-2xl leading-relaxed sm:text-3xl"
            style={{
              fontFamily: "'Lora', serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#E91E8C",
            }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Tweet Cards Grid - 2 columns */}
        <div className="grid gap-4 md:grid-cols-2">
          {tweets.map((tweet, index) => (
            <TweetCard key={tweet.id} tweet={tweet} index={index} />
          ))}
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href={ctaLink}
            className="inline-flex items-center gap-2 text-[#00BCD4] hover:underline transition-colors"
          >
            <span className="underline">{ctaText}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
