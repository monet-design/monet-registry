"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    twitter: "#1D9BF0",  // Twitter/X blue
  },
  dark: {
    twitter: "#1D9BF0",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface QuotedTweet {
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
}

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
  quotedTweet?: QuotedTweet;
  likes?: number;
  replies?: number;
}

interface IntroToIconsByMdsProps {
  mode?: "light" | "dark";
  tweets?: Tweet[];
}

const mdsQuotedTweet: QuotedTweet = {
  author: {
    name: "mds",
    handle: "@mds",
    avatar: "https://picsum.photos/seed/mds/48/48",
  },
  content:
    "Learn the fundamentals of Icon Design in one hour with this free video course introtoicons.com",
};

const defaultTweets: Tweet[] = [
  {
    id: "1",
    author: {
      name: "Marc Hemeon",
      handle: "@hemeon",
      avatar: "https://picsum.photos/seed/marc/48/48",
      verified: true,
    },
    content:
      "shoutout to @mds launched a free 1 hour intro to making icons video course - super produced - introtoicons.com <-- get it!",
    date: "7:07 PM - May 22, 2017",
    likes: 49,
  },
  {
    id: "2",
    author: {
      name: "Dann",
      handle: "@DannPetty",
      avatar: "https://picsum.photos/seed/dann/48/48",
    },
    content: "Learn icon design from the best",
    date: "4:41 PM - May 22, 2017",
    quotedTweet: mdsQuotedTweet,
    likes: 68,
  },
  {
    id: "3",
    author: {
      name: "Keegan Jones",
      handle: "@kieeg",
      avatar: "https://picsum.photos/seed/keegan/48/48",
    },
    content: "Congrats to Matt on killing this rad course on icon design!",
    date: "5:30 PM - May 22, 2017",
    quotedTweet: mdsQuotedTweet,
    likes: 4,
  },
  {
    id: "4",
    author: {
      name: "www.freelance-her.com",
      handle: "@hellodotmeier",
      avatar: "https://picsum.photos/seed/freelance/48/48",
    },
    content:
      "I got early access @mds's Intro to Icons (in 1 hour) course and it's super well done and full of great tips -- d.pr/2LO1n",
    date: "3:23 PM - May 22, 2017",
    likes: 2,
  },
  {
    id: "5",
    author: {
      name: "Juliana",
      handle: "@Hi_Ju",
      avatar: "https://picsum.photos/seed/juliana/48/48",
    },
    content:
      "A quick and to-the-point course on designing icons. Also, covers the basics of AI. Thanks for sharing the knowledge, @mds! :)",
    date: "6:06 PM - May 22, 2017",
    quotedTweet: mdsQuotedTweet,
  },
  {
    id: "6",
    author: {
      name: "Aubrey",
      handle: "@aub",
      avatar: "https://picsum.photos/seed/aubrey/48/48",
    },
    content:
      'Learn the fundaments of icon design in *an hour*!\n\nMade by @mdsintrotoicons.com',
    date: "6:18 PM - May 22, 2017",
    likes: 5,
  },
  {
    id: "7",
    author: {
      name: "Kanika Ahirwar",
      handle: "@KanikaAhirwar",
      avatar: "https://picsum.photos/seed/kanika/48/48",
    },
    content:
      "You've got to check out this free Intro to Icons course by @mds introtoicons.com SUPER rad for learning icon design! #aux",
    date: "5:43 PM - May 22, 2017",
  },
  {
    id: "8",
    author: {
      name: "Dan Rose",
      handle: "@dblizzy",
      avatar: "https://picsum.photos/seed/danrose/48/48",
    },
    content:
      "Looks like @mds put together a stellar, FREE course on the fundamentals of icon design: introtoicons.com",
    date: "3:54 PM - May 22, 2017",
    likes: 4,
  },
  {
    id: "9",
    author: {
      name: "Victor Kernes",
      handle: "@victorkernes",
      avatar: "https://picsum.photos/seed/victor/48/48",
    },
    content:
      "Really enjoyed this icon course by @mds It was easy to follow and helped me learn a few new tricks in @Illustrator",
    date: "6:17 PM - May 22, 2017",
    quotedTweet: mdsQuotedTweet,
  },
  {
    id: "10",
    author: {
      name: "Phil Coffman",
      handle: "@philcoffman",
      avatar: "https://picsum.photos/seed/phil/48/48",
    },
    content:
      "Signed up for @mds' free Intro to Icons course introtoicons.com Love that he's sharing this knowledge, stoked to get started! #aux",
    date: "7:06 PM - May 22, 2017",
    likes: 1,
  },
  {
    id: "11",
    author: {
      name: "Declan Harrop",
      handle: "@declanharrop",
      avatar: "https://picsum.photos/seed/declan/48/48",
    },
    content:
      "Check out this free Intro to Icons course by @mds icons.aux.co Pretty rad for learning icon design! #aux",
    date: "6:49 PM - May 5, 2017",
    likes: 1,
  },
  {
    id: "12",
    author: {
      name: "Richard Hawkes",
      handle: "@richardhawkes",
      avatar: "https://picsum.photos/seed/richard/48/48",
    },
    content:
      "Picked up a couple tricks in this one. Quick but thorough Intro to Icons course by @mds (and it's free!) icons.aux.co #aux",
    date: "7:49 PM - May 12, 2017",
    likes: 2,
  },
  {
    id: "13",
    author: {
      name: "Isaac Ali",
      handle: "@theisaacali",
      avatar: "https://picsum.photos/seed/isaac/48/48",
    },
    content:
      "This is absolutely incredible. Thank you so much for the work you put into making this and also for making it so easily available.",
    date: "6:02 PM - May 22, 2017 - California, MD",
    replyTo: "@mds",
  },
  {
    id: "14",
    author: {
      name: "Joey Bergeron",
      handle: "@jjoeybergeron",
      avatar: "https://picsum.photos/seed/joey/48/48",
    },
    content:
      "AH YEAH, It's launched! Join me in adding to that design tool belt by learning from the awesome @mds about icon design.",
    date: "4:46 PM - May 22, 2017",
    quotedTweet: mdsQuotedTweet,
  },
  {
    id: "15",
    author: {
      name: "Andres Carreno",
      handle: "@saypoleandres",
      avatar: "https://picsum.photos/seed/andres/48/48",
      verified: true,
    },
    content:
      "Really excited to take this amazing free course from @mds Thanks man introtoicons.com",
    date: "4:47 PM - May 22, 2017",
  },
  {
    id: "16",
    author: {
      name: "Renato Reis",
      handle: "@adesignpadawan",
      avatar: "https://picsum.photos/seed/renato/48/48",
    },
    content:
      "I just completed 'Intro to Icons - 2.01 Chevron Icon.' Check out the course by @mds icons.aux.co #AUX",
    date: "10:33 AM - May 5, 2017",
    likes: 3,
  },
  {
    id: "17",
    author: {
      name: "Jonathan Suh",
      handle: "@jonsuh",
      avatar: "https://picsum.photos/seed/jonathan/48/48",
    },
    content:
      "Interested in/want to learn icon design? Check out @mds' course--20 lessons, 1 hr, free! Looks like a great resource introtoicons.com",
    date: "3:14 PM - May 22, 2017",
    likes: 4,
  },
  {
    id: "18",
    author: {
      name: "Jason Wolf",
      handle: "@JasonGuyWolf",
      avatar: "https://picsum.photos/seed/jason/48/48",
    },
    content:
      "Not just a free 'Intro to Icons' course by @mds, but also a great overview of some of the shortcuts in AI. icons.aux.co #aux pic.twitter.com/U3gOqhqQJP",
    date: "7:04 PM - May 5, 2017",
    likes: 3,
  },
  {
    id: "19",
    author: {
      name: "Phil Goodwin",
      handle: "@thcreative",
      avatar: "https://picsum.photos/seed/philg/48/48",
    },
    content:
      "New icon course from @mds - so you know it's gonna be good... oh, did I mention it's FREE? introtoicons.com #aux",
    date: "2:37 PM - May 22, 2017",
  },
  {
    id: "20",
    author: {
      name: "Sebastiano Guerriero",
      handle: "@guerriero_se",
      avatar: "https://picsum.photos/seed/sebastiano/48/48",
    },
    content: "Great stuff! Intro to Icon Design by @mds introtoicons.com",
    date: "7:42 PM - May 22, 2017",
    likes: 11,
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

function VerifiedBadge() {
  return (
    <svg
      viewBox="0 0 22 22"
      className="ml-0.5 h-4 w-4 text-[#1D9BF0]"
      fill="currentColor"
      aria-label="Verified account"
    >
      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
    </svg>
  );
}

function QuotedTweetCard({ tweet }: { tweet: QuotedTweet }) {
  return (
    <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-3">
      <div className="flex items-center gap-2">
        <img
          src={tweet.author.avatar}
          alt={tweet.author.name}
          className="h-5 w-5 rounded-full object-cover"
        />
        <span className="text-sm font-semibold text-gray-900">
          {tweet.author.name}
        </span>
        <span className="text-sm text-gray-500">{tweet.author.handle}</span>
      </div>
      <p className="mt-1 text-sm text-gray-700">{tweet.content}</p>
    </div>
  );
}

function TweetCard({
  tweet,
  delay = 0,
}: {
  tweet: Tweet;
  delay?: number;
}) {
  const highlightMentions = (text: string) => {
    const parts = text.split(/(@\w+)/g);
    return parts.map((part, index) => {
      if (part.startsWith("@")) {
        return (
          <span key={index} className="text-[#1D9BF0]">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const highlightLinks = (text: string) => {
    const urlRegex = /([\w-]+\.[\w./]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, index) => {
      if (urlRegex.test(part) && !part.startsWith("@")) {
        return (
          <span key={index} className="text-[#1D9BF0]">
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

  const highlightHashtags = (text: string) => {
    const hashtagRegex = /(#\w+)/g;
    const parts = text.split(hashtagRegex);
    return parts.map((part, index) => {
      if (part.startsWith("#")) {
        return (
          <span key={index} className="text-[#1D9BF0]">
            {part}
          </span>
        );
      }
      if (typeof part === "string") {
        return <span key={index}>{highlightLinks(part)}</span>;
      }
      return part;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-lg border border-[#E1E8ED] bg-white p-4"
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <img
            src={tweet.author.avatar}
            alt={tweet.author.name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[15px] font-bold text-gray-900">
                {tweet.author.name}
              </span>
              {tweet.author.verified && <VerifiedBadge />}
            </div>
            <span className="text-[15px] text-gray-500">
              {tweet.author.handle}
            </span>
          </div>
        </div>
        <TwitterIcon className="h-5 w-5 text-[#1D9BF0]" />
      </div>

      {tweet.replyTo && (
        <div className="mt-2 text-[15px] text-gray-500">
          Replying to <span className="text-[#1D9BF0]">{tweet.replyTo}</span>
        </div>
      )}

      <div className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-gray-900">
        {highlightHashtags(tweet.content)}
      </div>

      {tweet.quotedTweet && <QuotedTweetCard tweet={tweet.quotedTweet} />}

      <div className="mt-3 text-[13px] text-gray-500">{tweet.date}</div>

      {(tweet.likes || tweet.replies) && (
        <div className="mt-2 flex items-center gap-4 border-t border-gray-100 pt-2 text-[13px] text-gray-500">
          {tweet.likes && (
            <span className="flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {tweet.likes}
            </span>
          )}
          {tweet.replies && (
            <span className="flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              {tweet.replies}
            </span>
          )}
        </div>
      )}

      <div className="mt-2 border-t border-gray-100 pt-2">
        <button className="text-[13px] text-gray-500 hover:text-[#1D9BF0] hover:underline">
          See {tweet.author.name.split(" ")[0]}&apos;s other Tweets
        </button>
      </div>
    </motion.div>
  );
}

export default function IntroToIconsByMds({
  mode = "light",
  tweets = defaultTweets,
}: IntroToIconsByMdsProps) {
  const colors = COLORS[mode];
  const leftColumnTweets = tweets.filter((_, i) => i % 2 === 0);
  const rightColumnTweets = tweets.filter((_, i) => i % 2 === 1);

  return (
    <section className="w-full bg-[#F0F0F0] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            {leftColumnTweets.map((tweet, index) => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                delay={index * 0.05}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {rightColumnTweets.map((tweet, index) => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                delay={index * 0.05 + 0.025}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
