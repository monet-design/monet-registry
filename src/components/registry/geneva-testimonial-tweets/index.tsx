"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {},
  dark: {},
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import "./font.css";

interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  highlightBrand?: boolean;
}

interface GenevaTestimonialTweetsProps {
  mode?: "light" | "dark";
  title?: React.ReactNode;
  subtitle?: string;
  tweets?: Tweet[];
}

const defaultTweets: Tweet[] = [
  // Column 1
  {
    id: "1",
    author: {
      name: "Ben Hedlund",
      handle: "@bhed",
      avatar: "https://picsum.photos/seed/ben/48/48",
    },
    content:
      "@geneva is a joy to use. Fast, beautiful, and opinionated in the right ways.",
    highlightBrand: true,
  },
  {
    id: "2",
    author: {
      name: "Luisa Brimble",
      handle: "@luisabrimble",
      avatar: "https://picsum.photos/seed/luisa/48/48",
    },
    content:
      "LOVE THE @geneva TEAM! Thank you for creating such an incredible product.",
    highlightBrand: true,
  },
  {
    id: "3",
    author: {
      name: "Maudie",
      handle: "@mackdoggydryms",
      avatar: "https://picsum.photos/seed/maudie/48/48",
    },
    content:
      "The @geneva app is the hub to keep everything organized. From members, to spirituality + beauty. However you & your team set it up.",
    highlightBrand: true,
  },
  {
    id: "4",
    author: {
      name: "Carmen",
      handle: "@CarmenToubman",
      avatar: "https://picsum.photos/seed/carmen/48/48",
    },
    content:
      "I'm always checking out new community platforms. Thanks to Anna Grigoryan's community weekly newsletter for notifying me of @geneva- an all-in-one platform covering audio, video and text based channels. A tool that does it all, worth a look geneva.com #community",
    highlightBrand: true,
  },
  {
    id: "5",
    author: {
      name: "Anna Grigoryan",
      handle: "@annagrigoryan_",
      avatar: "https://picsum.photos/seed/anna/48/48",
    },
    content:
      "Just saw how @geneva works and it's actually the best community building tool I've seen.",
    highlightBrand: true,
  },
  // Column 2
  {
    id: "6",
    author: {
      name: "Guillaume Bardet",
      handle: "@GuillaumeBardet",
      avatar: "https://picsum.photos/seed/guillaume/48/48",
    },
    content:
      "You just might fall in love with Geneva. It has so much built into it. Slack/Discord, Circle, Clubhouse all in one.",
  },
  {
    id: "7",
    author: {
      name: "Liz Haw",
      handle: "@lizhaw",
      avatar: "https://picsum.photos/seed/liz/48/48",
    },
    content:
      "omg Kim I only just clocked you're at geneva - i am addicted to the app. Made one last week for all low BTS fans and it's a baby but it's growing.",
    highlightBrand: true,
  },
  {
    id: "8",
    author: {
      name: "Mohammed Rafi",
      handle: "@rahyaasmutta",
      avatar: "https://picsum.photos/seed/mohammed/48/48",
    },
    content:
      "@geneva is on shipping spree. They just released this cool reddit style feature. We call it Discuss on Jam Sessions. A new home for your community.",
    highlightBrand: true,
  },
  {
    id: "9",
    author: {
      name: "Jenn Soles",
      handle: "@jermsoles",
      avatar: "https://picsum.photos/seed/jenn/48/48",
    },
    content: "This is amazing! I'm buying your IPO!",
  },
  {
    id: "10",
    author: {
      name: "Sonia Sidney Nagar",
      handle: "@ssidney",
      avatar: "https://picsum.photos/seed/sonia/48/48",
    },
    content:
      "So... Geneva seems to be what all the hot consumer community-driven cos are using... it's almost becoming one of my diligence Qs @geneva",
    highlightBrand: true,
  },
  {
    id: "11",
    author: {
      name: "Nick Simpson",
      handle: "@itsNickSimpson",
      avatar: "https://picsum.photos/seed/nick/48/48",
    },
    content:
      "@geneva is actually solving this problem first hand. After being in a few groups it just feels very authentic, personable, yet UI when",
    highlightBrand: true,
  },
  // Column 3
  {
    id: "12",
    author: {
      name: "Alice Katter",
      handle: "@AliceKatter",
      avatar: "https://picsum.photos/seed/alice/48/48",
    },
    content:
      "With @geneva we're providing our #seattlofthetwerk community a space to reconnect and expand the conversation after our virtual gatherings. If you're a community builder and looking for an intimate space for your community to come together, I can highly recommend it!",
    highlightBrand: true,
  },
  {
    id: "13",
    author: {
      name: "Christie Kerner",
      handle: "@ckerner",
      avatar: "https://picsum.photos/seed/christie/48/48",
    },
    content:
      "Sidebar: How cool is this Geneva app?! Slack + Clubhouse + Zoomish - but with a more lovely u/ux than all three. Can we all just do a mass move from slack so the conversation of one for lots of apples is here? I'd go all in.",
  },
  {
    id: "14",
    author: {
      name: "danielleo",
      handle: "@daniielleo",
      avatar: "https://picsum.photos/seed/daniel/48/48",
    },
    content: "Geneva is great!",
  },
  {
    id: "15",
    author: {
      name: "Charlie Ward",
      handle: "@charlieward",
      avatar: "https://picsum.photos/seed/charlie/48/48",
    },
    content:
      "Just had the most product demo from @geneva. The UI and voice channels are chefs kiss",
    highlightBrand: true,
  },
  {
    id: "16",
    author: {
      name: "Ash Read",
      handle: "@Ashread_",
      avatar: "https://picsum.photos/seed/ash/48/48",
    },
    content:
      "+1 for Geneva. I've hosted a community there and been a part of another and it's a great platform.",
  },
  // Column 4
  {
    id: "17",
    author: {
      name: "Sana (Jet Black Social Club)",
      handle: "@sanasquared",
      avatar: "https://picsum.photos/seed/sana/48/48",
    },
    content:
      "yes! it's literally life changing it makes me so proud to host a community on such a fun and intuitive app",
  },
  {
    id: "18",
    author: {
      name: "Emma",
      handle: "@emmethethire",
      avatar: "https://picsum.photos/seed/emma/48/48",
    },
    content:
      "Yes, started a @grlnotes alumni chat last week which has been awesome to reconnect all the different teams together. This week we started an invite-only chat for our most active @pinterestbrands users. We have 150 people in it on day 1, sharing and talking.",
    highlightBrand: true,
  },
  {
    id: "19",
    author: {
      name: "Dr. Sohab Imtiaz",
      handle: "@digitalDoctor",
      avatar: "https://picsum.photos/seed/sohab/48/48",
    },
    content:
      "@geneva great platform and easiest interface to use that I've encountered for community cohesion and discussion.",
    highlightBrand: true,
  },
  {
    id: "20",
    author: {
      name: "Lucy Mort",
      handle: "@lucymort_",
      avatar: "https://picsum.photos/seed/lucy/48/48",
    },
    content:
      "Try @geneva. It's a lighter, friendlier Discord / Slack.",
    highlightBrand: true,
  },
  {
    id: "21",
    author: {
      name: "Rishab Gorasia",
      handle: "@risha_g",
      avatar: "https://picsum.photos/seed/rishab/48/48",
    },
    content: "Yes we love @geneva. Quite underwhelmed but amazing to use :)",
    highlightBrand: true,
  },
  {
    id: "22",
    author: {
      name: "Melody Estrada",
      handle: "@melody_estrada",
      avatar: "https://picsum.photos/seed/melody/48/48",
    },
    content: "I love @geneva **",
    highlightBrand: true,
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
        const isGeneva = part.toLowerCase() === "@geneva";
        return (
          <span
            key={index}
            className={isGeneva ? "text-[#4AA8D8]" : "text-[#4AA8D8]"}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const highlightHashtags = (text: string) => {
    const parts = text.split(/(#\w+)/g);
    return parts.map((part, index) => {
      if (part.startsWith("#")) {
        return (
          <span key={index} className="text-[#4AA8D8]">
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
      transition={{ duration: 0.4, delay }}
      className="rounded-xl border border-gray-100 bg-white p-3"
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-2.5">
          <img
            src={tweet.author.avatar}
            alt={tweet.author.name}
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-900">
              {tweet.author.name}
            </span>
            <span className="text-xs text-gray-500">{tweet.author.handle}</span>
          </div>
        </div>
        <TwitterIcon className="h-4 w-4 text-[#1DA1F2]" />
      </div>

      <div className="mt-2 text-xs leading-relaxed text-gray-700">
        {highlightHashtags(tweet.content)}
      </div>
    </motion.div>
  );
}

export default function GenevaTestimonialTweets({
  mode = "light",
  title,
  subtitle = "We know that's no small feat and we can't do it without you! Come join us on our journey.",
  tweets = defaultTweets,
}: GenevaTestimonialTweetsProps) {
  const defaultTitle = (
    <>
      <span className="mb-2 flex justify-center">
        <span className="inline-block h-2 w-2 rounded-full bg-[#4AA8D8]" />
      </span>
      We&apos;re on a mission to build the
      <br />
      <span className="font-instrument-serif italic text-[#4AA8D8]">
        best app for groups,
      </span>{" "}
      ever. <span className="inline-block align-middle text-[1em]">&#128517;</span>
    </>
  );

  const column1 = tweets.slice(0, 5);
  const column2 = tweets.slice(5, 11);
  const column3 = tweets.slice(11, 16);
  const column4 = tweets.slice(16, 22);

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 md:px-8 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-8 max-w-3xl text-center"
      >
        <h2 className="text-2xl font-medium tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
          {title || defaultTitle}
        </h2>
        <p className="mt-3 text-sm text-gray-500 md:text-base">{subtitle}</p>
      </motion.div>

      {/* Tweet Grid - 4 columns masonry style */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {column1.map((tweet, index) => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                delay={0.05 * index}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {column2.map((tweet, index) => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                delay={0.05 * (index + column1.length)}
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            {column3.map((tweet, index) => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                delay={0.05 * (index + column1.length + column2.length)}
              />
            ))}
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            {column4.map((tweet, index) => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                delay={
                  0.05 * (index + column1.length + column2.length + column3.length)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
