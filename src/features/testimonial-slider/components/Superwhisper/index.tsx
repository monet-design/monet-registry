"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";
import Image from "next/image";

// Types
interface Tweet {
  id: number;
  content: string;
  authorName: string;
  authorHandle: string;
  authorAvatar?: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  highlightedText?: string;
}

interface SuperwhisperTestimonialProps {
  badgeText?: string;
  tweets?: Tweet[];
}

// Default tweets data based on the image
const defaultTweets: Tweet[] = [
  {
    id: 1,
    content:
      "s/o to @superwhisperapp\u{1F44B}.\neasily best $ I've spent this week\n\nbeen using Whisper on my iPhone, but needed the same for Mac (sorry, Apple, the dictation model isn't quite there...)\n\nI freed up so much mental bandwidth...",
    authorName: "Christian",
    authorHandle: "@curious_vii",
    authorAvatar: "https://picsum.photos/seed/christian/100/100",
    highlightedText: "easily best $",
  },
  {
    id: 2,
    content:
      "I have replaced typing emails with dictating them using a client-side hosted version of Whisper.\n\nThe app I'm using is called @superwhisperapp.\n\nIt runs natively on macOS and integrates with the system clipboard.\n\nI highly recommend it.",
    authorName: "Alex MacCaw",
    authorHandle: "@maccaw",
    authorAvatar: "https://picsum.photos/seed/alex/100/100",
  },
  {
    id: 3,
    content:
      '"As a chiropractor, much of my day is spent writing reports. superwhisper has been amazing at helping me speed up that process. I love that the data never leaves my computer, so I know my data is safe."',
    authorName: "Dr. Palmer Piana",
    authorHandle: "@palmerpter",
    authorAvatar: "https://picsum.photos/seed/palmer/100/100",
  },
  {
    id: 4,
    content:
      "superwhisper is a great way to 'just talk' to your mac, it's way better than typing, and makes talking to chatGPT and other AIs super fun and easy.\n\nForget typing, just talk",
    authorName: "Alex Volkov",
    authorHandle: "@altryne",
    authorAvatar: "https://picsum.photos/seed/volkov/100/100",
  },
  {
    id: 5,
    content:
      "Superwhisper is an exciting new way to transcribe audio using AI saving you pesky administrative work",
    authorName: "Francesco (ToolFinder.co)",
    authorHandle: "@FrancescoD_Ales",
    authorAvatar: "https://picsum.photos/seed/francesco/100/100",
  },
  {
    id: 6,
    content: "",
    authorName: "Fernando Anselmi",
    authorHandle: "@fernandoanselmi",
    authorAvatar: "https://picsum.photos/seed/fernando/100/100",
    mediaUrl: "https://picsum.photos/seed/superwhisper/400/300",
    mediaType: "video",
  },
];

// Additional organization/company testimonial
const orgTestimonials = [
  {
    name: "Reflect Notes",
    icon: "https://picsum.photos/seed/reflect/100/100",
  },
];

// Helper function to render content with highlights and mentions
function renderContent(content: string, highlightedText?: string) {
  const parts: React.ReactNode[] = [];
  let remainingContent = content;
  let keyIndex = 0;

  // First, handle the highlighted text if exists
  if (highlightedText && remainingContent.includes(highlightedText)) {
    const highlightIndex = remainingContent.indexOf(highlightedText);
    const beforeHighlight = remainingContent.substring(0, highlightIndex);
    const afterHighlight = remainingContent.substring(
      highlightIndex + highlightedText.length
    );

    // Process before highlight
    if (beforeHighlight) {
      parts.push(
        ...processTextWithMentions(beforeHighlight, keyIndex.toString())
      );
      keyIndex++;
    }

    // Add highlighted text
    parts.push(
      <span key={`highlight-${keyIndex}`} className="text-yellow-400">
        {highlightedText}
      </span>
    );
    keyIndex++;

    remainingContent = afterHighlight;
  }

  // Process remaining content with mentions
  parts.push(...processTextWithMentions(remainingContent, keyIndex.toString()));

  return parts;
}

function processTextWithMentions(text: string, keyPrefix: string) {
  const parts: React.ReactNode[] = [];
  const mentionRegex = /@superwhisperapp/g;
  let lastIndex = 0;
  let match;
  let partIndex = 0;

  while ((match = mentionRegex.exec(text)) !== null) {
    // Add text before the mention
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add the mention with styling
    parts.push(
      <span key={`${keyPrefix}-mention-${partIndex}`} className="text-white">
        @superwhisperapp
      </span>
    );

    lastIndex = match.index + match[0].length;
    partIndex++;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

// Tweet Card Component
function TweetCard({ tweet }: { tweet: Tweet }) {
  const hasMedia = tweet.mediaUrl && tweet.mediaType;
  const isVideoMedia = tweet.mediaType === "video";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-xl bg-[#1A1A1A] p-4"
    >
      {/* Tweet Content */}
      {tweet.content && (
        <p className="mb-4 whitespace-pre-line text-[13px] leading-relaxed text-white/90">
          {renderContent(tweet.content, tweet.highlightedText)}
        </p>
      )}

      {/* Media Content */}
      {hasMedia && (
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <Image
            src={tweet.mediaUrl!}
            alt="Tweet media"
            width={400}
            height={300}
            className="h-auto w-full object-cover"
          />
          {isVideoMedia && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Play className="h-6 w-6 fill-white text-white" />
              </div>
            </div>
          )}
          {isVideoMedia && (
            <div className="absolute bottom-3 left-3 overflow-hidden rounded">
              <div className="bg-[#F97316] px-2 py-1">
                <span className="text-[10px] font-bold text-white">Super</span>
                <span className="text-[10px] font-bold text-black">
                  Whisper
                </span>
              </div>
              <div className="bg-[#F97316] px-2 pb-1">
                <span className="text-[11px] font-bold text-white">
                  TRY IT!
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Author Info */}
      <div className="mt-auto flex items-center gap-3">
        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-700">
          {tweet.authorAvatar && (
            <Image
              src={tweet.authorAvatar}
              alt={tweet.authorName}
              fill
              sizes="32px"
              className="object-cover"
            />
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{tweet.authorName}</p>
          <p className="text-xs text-gray-500">{tweet.authorHandle}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Organization Badge Component
function OrgBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-[#1E1B2E] px-3 py-1.5">
      <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden rounded bg-[#5B47A0]">
        <Image
          src={icon}
          alt={name}
          fill
          sizes="20px"
          className="object-cover"
        />
      </div>
      <span className="text-xs text-gray-400">{name}</span>
    </div>
  );
}

// Main Component
export default function SuperwhisperTestimonial({
  badgeText = "Reviews",
  tweets = defaultTweets,
}: SuperwhisperTestimonialProps) {
  return (
    <section className="relative w-full overflow-hidden bg-black py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex justify-center"
        >
          <span className="rounded-full border border-gray-600 bg-transparent px-4 py-1.5 text-sm text-gray-300">
            {badgeText}
          </span>
        </motion.div>

        {/* Tweets Grid - Masonry-like layout */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {tweets
              .filter((_, i) => i % 3 === 0)
              .map((tweet, index) => (
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

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {tweets
              .filter((_, i) => i % 3 === 1)
              .map((tweet, index) => (
                <motion.div
                  key={tweet.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.05 }}
                >
                  <TweetCard tweet={tweet} />
                  {/* Add org badge after second tweet in column 2 */}
                  {index === 0 && (
                    <div className="mt-2 flex justify-start">
                      {orgTestimonials.map((org) => (
                        <OrgBadge
                          key={org.name}
                          name={org.name}
                          icon={org.icon}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            {tweets
              .filter((_, i) => i % 3 === 2)
              .map((tweet, index) => (
                <motion.div
                  key={tweet.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                >
                  <TweetCard tweet={tweet} />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
