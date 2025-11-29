"use client";

import { motion } from "motion/react";

interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified?: boolean;
    flag?: string;
  };
  content: string;
}

interface SizzyTestimonialTweetsProps {
  title?: string;
  subtitle?: string;
  tweets?: Tweet[];
  accentColor?: string;
}

const defaultTweets: Tweet[] = [
  {
    id: "1",
    author: {
      name: "Jackson M. Wheeler",
      handle: "@jackson",
      avatar: "https://picsum.photos/seed/jackson-wheeler/48/48",
    },
    content:
      "Have you heard of @sizzyapp? Test numerous devices at once! #mobilefirst #css #javascript bit.ly/2p9fQGS",
  },
  {
    id: "2",
    author: {
      name: "Ash Connolly",
      handle: "@AshConnolly",
      avatar: "https://picsum.photos/seed/ash-connolly/48/48",
      flag: "GB",
    },
    content:
      "Loving @sizzyapp! Really helps development and the zoom feature is great for seeing more devices on smaller screens!",
  },
  {
    id: "3",
    author: {
      name: "Joel Piccoli da Rosa",
      handle: "@joelpiccoli",
      avatar: "https://picsum.photos/seed/joel-piccoli/48/48",
    },
    content:
      "@sizzyapp is an amazing tool for responsive design! I don't know how I survived until now without it... xD",
  },
  {
    id: "4",
    author: {
      name: "Michael Auupust",
      handle: "@MichaelAuupust",
      avatar: "https://picsum.photos/seed/michael-aug/48/48",
    },
    content:
      "Awesome tool to test your website on different smartphones & tablets // #Responsive #UI #Testing @sizzyapp sizzy.co",
  },
  {
    id: "5",
    author: {
      name: "Ohans Emmanuel",
      handle: "@OhansEmmanuel",
      avatar: "https://picsum.photos/seed/ohans-emmanuel/48/48",
    },
    content:
      "Using the @sizzyapp on local dev for responsive #webdesign is awesome. Try it @tolojaforta",
  },
  {
    id: "6",
    author: {
      name: "Andrey Los",
      handle: "@AAALoss",
      avatar: "https://picsum.photos/seed/andrey-los/48/48",
      flag: "UA",
    },
    content:
      "Got it. Had first time experience now with Sizzy, and with hot-reloading and it's just AMAZING. Save > BOOM! > PROFIT! Thanks a lot! :)",
  },
  {
    id: "7",
    author: {
      name: "Dust of Wakanda",
      handle: "@_eedadaju",
      avatar: "https://picsum.photos/seed/dust-wakanda/48/48",
    },
    content: "@sizzyapp is so useful!",
  },
  {
    id: "8",
    author: {
      name: "cristianoionescu",
      handle: "@cristiionescu",
      avatar: "https://picsum.photos/seed/cristiano/48/48",
    },
    content: "@sizzyapp Great job with Sizzy",
  },
  {
    id: "9",
    author: {
      name: "Doetrix",
      handle: "@doetrix",
      avatar: "https://picsum.photos/seed/doetrix/48/48",
    },
    content:
      "This is one of our favourite little resources for anyone who needs to test responsive design on multiple devices at once. Hello @sizzyapp dso.gd/2SmwIPx #productdesign #softwaredevelopment",
  },
  {
    id: "10",
    author: {
      name: "Corey Dodd",
      handle: "@CoreyWDodd",
      avatar: "https://picsum.photos/seed/corey-dodd/48/48",
    },
    content:
      "so randomly stumbled onto sizzy.co and it's actually a pretty sweet way to check out #responsive builds super quick @sizzyapp nice work. #WordPress #webdev @Djarni",
  },
  {
    id: "11",
    author: {
      name: "G",
      handle: "@GovPowerSoCaleb",
      avatar: "https://picsum.photos/seed/g-power/48/48",
    },
    content:
      "dabbling with @sizzyapp tonight for first time ... it really seems a perfect tool",
  },
  {
    id: "12",
    author: {
      name: "Jason Ewins",
      handle: "@jsnewins",
      avatar: "https://picsum.photos/seed/jason-ewins/48/48",
    },
    content: "Loving @sizzyapp responsive device previews! Thanks guys",
  },
  {
    id: "13",
    author: {
      name: "Kenny Petrowski",
      handle: "@kpetro",
      avatar: "https://picsum.photos/seed/kenny-pet/48/48",
    },
    content:
      "Just came across @sizzyapp by @thekitze for viewing websites as they display on different mobile devices. Beautifully executed and super helpful tool!",
  },
  {
    id: "14",
    author: {
      name: "Kirsty Jones",
      handle: "@kirstyljones",
      avatar: "https://picsum.photos/seed/kirsty-jones/48/48",
    },
    content:
      "Already tweeted about this once this week, but @sizzyapp has been a huge help this week! Check it out!",
  },
  {
    id: "15",
    author: {
      name: "Hugo",
      handle: "@hugomd",
      avatar: "https://picsum.photos/seed/hugo-md/48/48",
    },
    content: "The best tool i have try to test #RWD websites @sizzyapp",
  },
  {
    id: "16",
    author: {
      name: "Uncle Carlos",
      handle: "@unclecarloscom",
      avatar: "https://picsum.photos/seed/uncle-carlos/48/48",
    },
    content: "@sizzyapp Love this! Top work <3",
  },
  {
    id: "17",
    author: {
      name: "Mark Foster",
      handle: "@markfoster",
      avatar: "https://picsum.photos/seed/mark-foster/48/48",
    },
    content: "just used @sizzyapp for the first time...",
  },
  {
    id: "18",
    author: {
      name: "Matt Ots",
      handle: "@mattots",
      avatar: "https://picsum.photos/seed/matt-ots/48/48",
    },
    content:
      "If you do front end web development, check out @sizzyapp. Just do it. Now!",
  },
  {
    id: "19",
    author: {
      name: "Matt Durr",
      handle: "@MattDurrCom",
      avatar: "https://picsum.photos/seed/matt-durr/48/48",
    },
    content: "Holy cow, @sizzyapp makes reviewing responsive design a breeze",
  },
  {
    id: "20",
    author: {
      name: "Gatemiller's Daughter",
      handle: "@GatemillersDtr",
      avatar: "https://picsum.photos/seed/gatemiller/48/48",
    },
    content: "My life just got easier thanks to @sizzyapp",
  },
  {
    id: "21",
    author: {
      name: "Varun Joshi",
      handle: "@varunjoshi",
      avatar: "https://picsum.photos/seed/varun-joshi/48/48",
    },
    content:
      "Shout-out to the awesome @sizzyapp ! An excellent dev tool to check your website across multiple devices!",
  },
  {
    id: "22",
    author: {
      name: "Vedran Arnaudovic",
      handle: "@vedran_arnau",
      avatar: "https://picsum.photos/seed/vedran/48/48",
    },
    content:
      "My first #hackathon writing code as well as designing. @sizzyapp coming in very handy!",
  },
  {
    id: "23",
    author: {
      name: "Oskar Borek",
      handle: "@OskarBorek",
      avatar: "https://picsum.photos/seed/oskar-borek/48/48",
    },
    content:
      "Awesome tool for testing responsive sites the fast way: sizzy.co @sizzyapp",
  },
  {
    id: "24",
    author: {
      name: "Yashaswini",
      handle: "@yashaswini",
      avatar: "https://picsum.photos/seed/yashaswini/48/48",
    },
    content: "Hey guys loved sizzy !! neat job done here @sizzyapp",
  },
  {
    id: "25",
    author: {
      name: "Zan",
      handle: "@ZanDiamondHeart",
      avatar: "https://picsum.photos/seed/zan-diamond/48/48",
    },
    content: "@sizzyapp is amazing sizzy.co",
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
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TweetCard({
  tweet,
  delay = 0,
  accentColor = "#F97316",
}: {
  tweet: Tweet;
  delay?: number;
  accentColor?: string;
}) {
  const highlightMentionsAndHashtags = (text: string) => {
    const parts = text.split(/(@\w+|#\w+|https?:\/\/\S+|[\w]+\.[\w]+\/?\S*)/g);
    return parts.map((part, index) => {
      if (
        part.startsWith("@") ||
        part.startsWith("#") ||
        part.includes("://") ||
        /^[\w]+\.[\w]+/.test(part)
      ) {
        return (
          <span key={index} style={{ color: accentColor }}>
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
      className="rounded-lg bg-white p-4 shadow-sm"
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
              {tweet.author.flag && (
                <span className="text-xs">{tweet.author.flag === "GB" ? "GB" : tweet.author.flag === "UA" ? "UA" : ""}</span>
              )}
            </div>
            <span className="text-xs text-gray-500">{tweet.author.handle}</span>
          </div>
        </div>
        <TwitterIcon className="h-4 w-4 text-gray-400" />
      </div>

      <div className="mt-3 text-sm leading-relaxed text-gray-700">
        {highlightMentionsAndHashtags(tweet.content)}
      </div>
    </motion.div>
  );
}

export default function SizzyTestimonialTweets({
  title = "What our users say about us",
  subtitle = "Sizzy is a game changer, but don't take our word for it",
  tweets = defaultTweets,
  accentColor = "#F97316",
}: SizzyTestimonialTweetsProps) {
  const column1 = tweets.filter((_, i) => i % 3 === 0);
  const column2 = tweets.filter((_, i) => i % 3 === 1);
  const column3 = tweets.filter((_, i) => i % 3 === 2);

  return (
    <section
      className="relative w-full overflow-hidden px-6 py-16 md:px-12 md:py-24"
      style={{
        background: "linear-gradient(180deg, #1E164F 0%, #332C6F 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-12 max-w-4xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-3 text-base text-white/70 md:text-lg">{subtitle}</p>
      </motion.div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            {column1.map((tweet, index) => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                delay={index * 0.05}
                accentColor={accentColor}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {column2.map((tweet, index) => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                delay={index * 0.05 + 0.1}
                accentColor={accentColor}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {column3.map((tweet, index) => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                delay={index * 0.05 + 0.2}
                accentColor={accentColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
