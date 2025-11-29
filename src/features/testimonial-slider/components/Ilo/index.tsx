"use client";

import { motion } from "motion/react";
import Image from "next/image";

// Types
interface Tweet {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  content: string;
  boldPhrases?: string[];
}

interface IloTestimonialProps {
  title?: string;
  emoji?: string;
  tweets?: Tweet[];
}

// Default tweets data based on the image
const defaultTweets: Tweet[] = [
  {
    id: 1,
    name: "Nathan Baschez",
    handle: "@nbashaw",
    avatar: "https://picsum.photos/seed/nathan/100/100",
    content:
      "I've always wanted a simple way to see if all the time I waste spend on Twitter is paying off, and ilo is exactly what I was hoping for!",
    boldPhrases: ["ilo is exactly what I was hoping for!"],
  },
  {
    id: 2,
    name: "KP",
    handle: "@migsisko_",
    avatar: "https://picsum.photos/seed/kp/100/100",
    content:
      "ilo allows you to go deeper than Twitter's basic analytics and helps you optimize for engagement. It also shows interesting data like follower count for each day and engagement per tweet. I enjoy checking out the dashboard each morning!",
    boldPhrases: [
      "go deeper than Twitter's basic analytics",
      "helps you optimize for engagement",
    ],
  },
  {
    id: 3,
    name: "Justin Jackson",
    handle: "@mjjustin",
    avatar: "https://picsum.photos/seed/justin/100/100",
    content:
      "ilo is the best alternative to Twitter's Analytics I've found. Tracking my most popular tweets and my follower growth are my two favorite features!",
    boldPhrases: ["the best alternative to Twitter's Analytics I've found"],
  },
  {
    id: 4,
    name: "Catalin Pit",
    handle: "@catalinmpit",
    avatar: "https://picsum.photos/seed/catalin/100/100",
    content:
      "I gave ilo a try to see how effective it is, and I am pleased to say it's the most useful Twitter analytics tool.",
    boldPhrases: ["it's the most useful Twitter analytics tool"],
  },
  {
    id: 5,
    name: "Anisha Sunkerneni",
    handle: "@youfoundanisha",
    avatar: "https://picsum.photos/seed/anisha/100/100",
    content:
      "I used to check Twitter's basic analytics no more often than once a month. With ilo, I found myself checking analytics almost daily. ilo allows me to check engagements on a per-tweet basis, capture trends earlier, and ultimately learn more about my behavior in the past so I can optimize for my future.",
    boldPhrases: [
      "With ilo, I found myself checking analytics almost daily",
      "learn more about my behavior in the past so I can optimize for my future",
    ],
  },
  {
    id: 6,
    name: "Dan Parry",
    handle: "@yodanparry",
    avatar: "https://picsum.photos/seed/dan/100/100",
    content:
      "ilo is so simple and clear that I'm able to figure out how to adjust my strategies for Twitter. It's a pleasure to use!",
    boldPhrases: ["so simple and clear"],
  },
  {
    id: 7,
    name: "Marc Thomas",
    handle: "@iammarcthomas",
    avatar: "https://picsum.photos/seed/marc/100/100",
    content:
      "The main reason I prefer ilo to Twitter Analytics is that it prioritises engagement over vanity metrics. That's what growing an audience is about—it's great to use a product that optimises for that.",
    boldPhrases: ["prioritises engagement over vanity metrics"],
  },
  {
    id: 8,
    name: "Nick Frost",
    handle: "@nickrfrost",
    avatar: "https://picsum.photos/seed/nick/100/100",
    content:
      "I've been on Twitter for 11 years and have tried many solutions to get the right metrics that can help me understand what content works for me and my audience. ilo is the best tool by far and now I have clear insights into how every tweet performs, what content resonates, and a dashboard to manage my growth metrics.",
    boldPhrases: [
      "ilo is the best tool by far",
      "have clear insights into how every tweet performs",
    ],
  },
];

// Helper function to render content with bold phrases
function renderContentWithBold(content: string, boldPhrases?: string[]) {
  if (!boldPhrases || boldPhrases.length === 0) {
    return <span>{content}</span>;
  }

  let result: React.ReactNode[] = [];
  let remainingContent = content;
  let key = 0;

  // Sort bold phrases by their position in content to process them in order
  const sortedPhrases = [...boldPhrases].sort((a, b) => {
    const posA = content.indexOf(a);
    const posB = content.indexOf(b);
    return posA - posB;
  });

  for (const phrase of sortedPhrases) {
    const index = remainingContent.indexOf(phrase);
    if (index !== -1) {
      // Add text before the bold phrase
      if (index > 0) {
        result.push(<span key={key++}>{remainingContent.slice(0, index)}</span>);
      }
      // Add the bold phrase
      result.push(
        <strong key={key++} className="font-semibold">
          {phrase}
        </strong>
      );
      // Update remaining content
      remainingContent = remainingContent.slice(index + phrase.length);
    }
  }

  // Add any remaining content
  if (remainingContent) {
    result.push(<span key={key++}>{remainingContent}</span>);
  }

  return <>{result}</>;
}

// Tweet Card Component
function TweetCard({ tweet, index }: { tweet: Tweet; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl bg-[#FFF8F2] p-5"
    >
      {/* Tweet Content */}
      <p className="text-sm leading-relaxed text-[#1A1A1A]">
        {renderContentWithBold(tweet.content, tweet.boldPhrases)}
      </p>

      {/* Author Info */}
      <div className="mt-4 flex items-center gap-3">
        <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-[#E5E0DB]">
          <Image
            src={tweet.avatar}
            alt={tweet.name}
            fill
            className="object-cover"
            sizes="32px"
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-[#1A1A1A]">{tweet.name}</p>
          <p className="text-sm text-[#D97706]">{tweet.handle}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function IloTestimonial({
  title = "Hundreds of happy users",
  emoji = "😊",
  tweets = defaultTweets,
}: IloTestimonialProps) {
  // Split tweets into two columns for masonry effect
  const leftColumn = tweets.filter((_, i) => i % 2 === 0);
  const rightColumn = tweets.filter((_, i) => i % 2 === 1);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#1A1A1A] sm:text-3xl lg:text-4xl">
            {title}{" "}
            <span role="img" aria-label="smiling face">
              {emoji}
            </span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftColumn.map((tweet, index) => (
              <TweetCard key={tweet.id} tweet={tweet} index={index * 2} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightColumn.map((tweet, index) => (
              <TweetCard key={tweet.id} tweet={tweet} index={index * 2 + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
