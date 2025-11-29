"use client";

import { motion } from "motion/react";
import { Heart, Twitter } from "lucide-react";
import Image from "next/image";

// Types
interface TweetTestimonial {
  id: number;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: React.ReactNode;
  likes?: number;
  date: string;
  image?: string;
  imageLabel?: string;
}

// Link Text Component
function LinkText({ children }: { children: React.ReactNode }) {
  return (
    <span className="cursor-pointer text-violet-500 hover:underline">
      {children}
    </span>
  );
}

// Tweet Card Component
function TweetCard({ tweet }: { tweet: TweetTestimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
    >
      {/* Header */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={tweet.author.avatar}
            alt={tweet.author.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {tweet.author.name}
            </p>
            <p className="text-xs text-gray-400">{tweet.author.handle}</p>
          </div>
        </div>
        <Twitter className="h-5 w-5 text-[#1DA1F2]" fill="#1DA1F2" />
      </div>

      {/* Content */}
      <div className="mb-3 text-sm leading-relaxed text-gray-600">
        {tweet.content}
      </div>

      {/* Image if exists */}
      {tweet.image && (
        <div className="relative mb-3 overflow-hidden rounded-xl">
          <Image
            src={tweet.image}
            alt="Tweet attachment"
            width={300}
            height={200}
            className="w-full object-cover"
          />
          {tweet.imageLabel && (
            <div className="absolute bottom-3 left-3 rounded bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm">
              {tweet.imageLabel}
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-4 text-xs text-gray-400">
        {tweet.likes !== undefined && (
          <div className="flex items-center gap-1">
            <Heart className="h-3.5 w-3.5" />
            <span>{tweet.likes}</span>
          </div>
        )}
        <span>{tweet.date}</span>
      </div>
    </motion.div>
  );
}

// Standalone Image Card Component
function ImageCard({
  image,
  date,
}: {
  image: string;
  date: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-2xl"
    >
      <Image
        src={image}
        alt="Profile picture"
        width={300}
        height={350}
        className="w-full object-cover"
      />
      <div className="flex items-center gap-2 px-1 pt-2 text-xs text-gray-400">
        <Heart className="h-3.5 w-3.5" />
        <span>{date}</span>
      </div>
    </motion.div>
  );
}

// Date Marker Component
function DateMarker({ date }: { date: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-end gap-2 text-xs text-gray-400"
    >
      <Heart className="h-3.5 w-3.5" />
      <span>{date}</span>
    </motion.div>
  );
}

// Main Component
export default function AiProfilePictureGenerator() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              578,400
            </span>{" "}
            <span className="text-gray-900">profile pictures already</span>
            <br />
            <span className="text-gray-900">created for</span>{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              3,645
            </span>{" "}
            <span className="text-gray-900">happy customers!</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-gray-400">
            You&apos;re in good company. Here&apos;s what our beautiful customers have to say about us.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {/* Steph Smith Tweet */}
            <TweetCard
              tweet={{
                id: 1,
                author: {
                  name: "Steph Smith",
                  handle: "@stephsmithio",
                  avatar: "https://picsum.photos/seed/steph/100/100",
                },
                content: (
                  <>
                    Over the moon (literally) with the results from{" "}
                    <LinkText>@dannypostmaa</LinkText>&apos;s{" "}
                    <LinkText>profilepicture.ai</LinkText>{" "}
                    <span className="text-pink-400">✨</span>
                    <br />
                    <br />
                    Going to have to change my profile pic to artificial me!
                  </>
                ),
                likes: 78,
                date: "Oct 30, 2022",
                image: "https://picsum.photos/seed/profile1/300/300",
              }}
            />

            {/* Anne-Laure Le Cunff Tweet */}
            <TweetCard
              tweet={{
                id: 2,
                author: {
                  name: "Anne-Laure Le Cunff",
                  handle: "@anthilemoon",
                  avatar: "https://picsum.photos/seed/anne/100/100",
                },
                content: (
                  <>
                    These are so cool! Made with the super talented{" "}
                    <LinkText>@dannypostmaa</LinkText>&apos;s ProfilePictureAI
                  </>
                ),
                date: "Nov 1, 2022",
              }}
            />
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-4">
            {/* Standalone Image Card */}
            <ImageCard
              image="https://picsum.photos/seed/grayscale/300/350"
              date="Nov 1, 2022"
            />

            {/* Lichen Zhang Tweet */}
            <TweetCard
              tweet={{
                id: 3,
                author: {
                  name: "Lichen Zhang",
                  handle: "@lichen_z",
                  avatar: "https://picsum.photos/seed/lichen/100/100",
                },
                content: (
                  <>
                    <LinkText>profilepicture.ai</LinkText> fulfilled my dreams of
                    becoming a warrior princess{" "}
                    <span className="text-yellow-400">🌟</span> Amazed how ML can
                    generate these distinct images (100+ sent to me) that all
                    capture my essence.
                  </>
                ),
                date: "Nov 1, 2022",
                image: "https://picsum.photos/seed/warrior/300/400",
                imageLabel: "Testimonial",
              }}
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            {/* Date Marker */}
            <DateMarker date="Oct 31, 2022" />

            {/* Wilbert Liu Tweet */}
            <TweetCard
              tweet={{
                id: 4,
                author: {
                  name: "Wilbert Liu",
                  handle: "@wilbertliu",
                  avatar: "https://picsum.photos/seed/wilbert/100/100",
                },
                content: (
                  <>
                    It&apos;s scary to see what AI can do to take your personal
                    pictures to the next level!{" "}
                    <span className="text-green-400">🚀</span>
                    <br />
                    <br />
                    If you need to generate a high-quality photograph, my fellow
                    makers already made some great apps:{" "}
                    <span className="text-yellow-300">✨</span>
                    <br />
                    <br />
                    <span className="text-violet-500">→</span>{" "}
                    <LinkText>avatarai.me</LinkText> by{" "}
                    <LinkText>@levelsio</LinkText>
                    <br />
                    <span className="text-violet-500">→</span>{" "}
                    <LinkText>profilepicture.ai</LinkText> by{" "}
                    <LinkText>@dannypostmaa</LinkText>
                  </>
                ),
                likes: 8,
                date: "Oct 31, 2022",
              }}
            />

            {/* jeroen.nl Tweet */}
            <TweetCard
              tweet={{
                id: 5,
                author: {
                  name: "jeroen.nl",
                  handle: "@3rn3n",
                  avatar: "https://picsum.photos/seed/jeroen/100/100",
                },
                content: (
                  <>
                    ai profielfoto&apos;s via{" "}
                    <LinkText>profilepicture.ai</LinkText> van{" "}
                    <LinkText>@dannypostmaa</LinkText>{" "}
                    <span className="text-yellow-400">👆</span>
                  </>
                ),
                date: "Oct 31, 2022",
                image: "https://picsum.photos/seed/phone/300/200",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
