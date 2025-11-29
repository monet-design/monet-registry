"use client";

import { motion } from "motion/react";

interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  date: string;
  replyTo?: string;
}

interface AlfreadTestimonialTweetsProps {
  title?: string;
  subtitle?: string;
  tweets?: Tweet[];
  logoIcon?: React.ReactNode;
}

const defaultTweets: Tweet[] = [
  {
    id: "1",
    author: {
      name: "Dustin McCaffree",
      handle: "@permatilledearth",
      avatar: "https://picsum.photos/seed/dustin/48/48",
      verified: true,
    },
    content:
      "@AlfreadHQ is so good. It's integrated with @Pocket and @Instapaper, so you can still add things to those reading lists. But then it adds magic!\n\nYou can set reading goals, highlight text to save for later, and automatically archive articles (or have it remind you tomorrow).",
    date: "11:32 PM - Jan 24, 2021",
  },
  {
    id: "2",
    author: {
      name: "Kayla McEowen",
      handle: "@KaylaKEowen",
      avatar: "https://picsum.photos/seed/kayla/48/48",
    },
    content:
      "My Photos app is full of screenshots of articles and blogs posts I had every intention of reading and then immediately forgot about.\n\nSurely there must be a better way? How do you save resources you want to read later?",
    date: "Jan 5, 2022",
  },
  {
    id: "3",
    author: {
      name: "Jamie Lawrence",
      handle: "@ideasstorm",
      avatar: "https://picsum.photos/seed/jamie/48/48",
    },
    content:
      "a work in progress but...\n\nForward email / save webpages to @instapaper\n\n@AlfreadHQ pulls articles from Instapaper and reminds me to actually read them\n\nInstapaper and Alfread (and Kindle and other places) send highlights to readwise.io to remind me of the key ideas",
    date: "Jan 6, 2022",
    replyTo: "@KaylaKEowen",
  },
  {
    id: "4",
    author: {
      name: "Kate Prylluk",
      handle: "@katepryluk",
      avatar: "https://picsum.photos/seed/kate/48/48",
    },
    content:
      "Galaxy brain app: @AlfreadHQ rakes through your Instapaper abyss for you to, ya know, actually read something. Guilt eliminator for text hoarders.\n\nEarly access here: alfreadapp.com",
    date: "3:26 PM - Oct 27, 2020",
  },
  {
    id: "5",
    author: {
      name: "Jason Baroni",
      handle: "@jasonbaronis",
      avatar: "https://picsum.photos/seed/jason/48/48",
    },
    content:
      "@AlfreadHQ has matured rapidly since its first beta. Such a breakthrough app for article readers on the iPhone.",
    date: "12:33 AM - Mar 23, 2021",
  },
  {
    id: "6",
    author: {
      name: "Josh Pigford",
      handle: "@Shpigford",
      avatar: "https://picsum.photos/seed/josh/48/48",
    },
    content: 'What\'s your "read later" app of choice?',
    date: "Feb 20, 2022",
  },
  {
    id: "7",
    author: {
      name: "Felix Wang",
      handle: "@C1772",
      avatar: "https://picsum.photos/seed/felix/48/48",
    },
    content:
      "Been using @AlfreadHQ for 2 months now, good experience so far!",
    date: "5:19 AM - Feb 21, 2022",
    replyTo: "@Shpigford",
  },
  {
    id: "8",
    author: {
      name: "Daritan Thej",
      handle: "@arjtsrh",
      avatar: "https://picsum.photos/seed/daritan/48/48",
    },
    content:
      "Hey Fedor,\n\nYou guys did a great job with Alfread app. My Pocket Chrome Bookmarks and Chrome Reading list is full with unread saving articles. I installed today and managed to read some good articles I saved before. All those cool features I found on it I needed badly. Congrats",
    date: "12:30 AM - Dec 16, 2021",
    replyTo: "@idefixaleru @AlfreadHQ @ProductHunt",
  },
];

function TwitterIcon({ className, isBlue }: { className?: string; isBlue?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} ${isBlue ? "text-[#1DA1F2]" : "text-gray-400"}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg
      viewBox="0 0 22 22"
      className="h-4 w-4 text-blue-500"
      fill="currentColor"
      aria-label="Verified account"
    >
      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
    </svg>
  );
}

function AlfreadLogo() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EBE5BA]">
      <div className="relative flex items-center justify-center">
        <div className="flex gap-1.5">
          <div className="h-3.5 w-3.5 rounded-full bg-slate-900" />
          <div className="h-3.5 w-3.5 rounded-full bg-slate-900" />
        </div>
      </div>
    </div>
  );
}

function TweetCard({
  tweet,
  className,
  delay = 0,
  isBlueTwitter = false,
  rotation = 0,
}: {
  tweet: Tweet;
  className?: string;
  delay?: number;
  isBlueTwitter?: boolean;
  rotation?: number;
}) {
  const highlightMentions = (text: string) => {
    const parts = text.split(/(@\w+)/g);
    return parts.map((part, index) => {
      if (part.startsWith("@")) {
        return (
          <span key={index} className="text-blue-500">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const highlightLinks = (text: string) => {
    const urlRegex = /([\w]+\.[\w]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, index) => {
      if (urlRegex.test(part) && !part.startsWith("@")) {
        return (
          <span key={index} className="text-blue-500">
            {part}
          </span>
        );
      }
      if (typeof part === "string") {
        return <span key={index}>{highlightMentions(part)}</span>;
      }
      return part;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl border border-gray-200 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ${className}`}
      style={{ maxWidth: 300, transform: `rotate(${rotation}deg)` }}
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <img
            src={tweet.author.avatar}
            alt={tweet.author.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-gray-900">
                {tweet.author.name}
              </span>
              {tweet.author.verified && <VerifiedBadge />}
            </div>
            <span className="text-xs text-gray-500">{tweet.author.handle}</span>
          </div>
        </div>
        <TwitterIcon className="h-5 w-5" isBlue={isBlueTwitter} />
      </div>

      {tweet.replyTo && (
        <div className="mt-2 text-xs text-gray-500">
          Replying to <span className="text-blue-500">{tweet.replyTo}</span>
        </div>
      )}

      <div className="mt-2 whitespace-pre-line text-[13px] leading-relaxed text-gray-700">
        {highlightLinks(tweet.content)}
      </div>

      <div className="mt-2 text-[11px] text-gray-400">{tweet.date}</div>

      <div className="mt-2 border-t border-gray-100 pt-2">
        <button className="text-[11px] text-blue-500 hover:underline">
          Read the full conversation on Twitter
        </button>
      </div>
    </motion.div>
  );
}

export default function AlfreadTestimonialTweets({
  title = "Here's what people",
  subtitle = "are saying",
  tweets = defaultTweets,
  logoIcon,
}: AlfreadTestimonialTweetsProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#F9F8F3] px-4 py-16 md:px-8 md:py-24">
      {/* Logo in top left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute left-6 top-6 z-10 md:left-8 md:top-8"
      >
        {logoIcon || <AlfreadLogo />}
      </motion.div>

      {/* Central title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mx-auto mb-8 text-center"
      >
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
          {title}
          <br />
          {subtitle}
        </h2>
      </motion.div>

      {/* Scattered tweet cards - Desktop layout */}
      <div className="relative mx-auto hidden max-w-6xl lg:block" style={{ height: 700 }}>
        {/* Left column cards */}
        <div className="absolute left-0 top-0" style={{ transform: "rotate(-1deg)" }}>
          <TweetCard tweet={tweets[0]} delay={0.1} rotation={-1} />
        </div>
        <div className="absolute left-0 top-[260px]" style={{ transform: "rotate(0deg)" }}>
          <TweetCard tweet={tweets[3]} delay={0.4} rotation={0} />
        </div>
        <div className="absolute left-0 top-[450px]" style={{ transform: "rotate(0deg)" }}>
          <TweetCard tweet={tweets[4]} delay={0.5} rotation={0} />
        </div>

        {/* Center column cards */}
        <div className="absolute left-1/2 top-[120px] -translate-x-1/2" style={{ transform: "translateX(-50%) rotate(0deg)" }}>
          <TweetCard tweet={tweets[5]} delay={0.6} rotation={0} />
        </div>
        <div className="absolute left-1/2 top-[240px] -translate-x-1/2" style={{ transform: "translateX(-50%) rotate(0deg)" }}>
          <TweetCard tweet={tweets[6]} delay={0.7} rotation={0} />
        </div>

        {/* Right column cards */}
        <div className="absolute right-0 top-0" style={{ transform: "rotate(1deg)" }}>
          <TweetCard tweet={tweets[1]} delay={0.2} isBlueTwitter rotation={1} />
        </div>
        <div className="absolute right-0 top-[200px]" style={{ transform: "rotate(0deg)" }}>
          <TweetCard tweet={tweets[2]} delay={0.3} rotation={0} />
        </div>
        <div className="absolute right-0 top-[460px]" style={{ transform: "rotate(0deg)" }}>
          <TweetCard tweet={tweets[7]} delay={0.8} rotation={0} />
        </div>
      </div>

      {/* Mobile/Tablet layout */}
      <div className="relative mx-auto max-w-6xl lg:hidden">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <TweetCard tweet={tweets[0]} delay={0.1} />
          <TweetCard tweet={tweets[1]} delay={0.2} isBlueTwitter />
          <TweetCard tweet={tweets[3]} delay={0.4} />
          <TweetCard tweet={tweets[2]} delay={0.3} />
          <TweetCard tweet={tweets[4]} delay={0.5} />
          <TweetCard tweet={tweets[5]} delay={0.6} />
          <TweetCard tweet={tweets[6]} delay={0.7} />
          <TweetCard tweet={tweets[7]} delay={0.8} />
        </div>
      </div>
    </section>
  );
}
