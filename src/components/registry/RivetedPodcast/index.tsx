"use client";

import { motion } from "motion/react";
import Image from "next/image";

// Types
interface ItalicPhrase {
  text: string;
  isItalic: boolean;
}

interface Host {
  id: number;
  name: string;
  imageSrc: string;
  bio: ItalicPhrase[];
}

interface RivetedPodcastProps {
  sectionLabel?: string;
  hosts?: Host[];
}

// Helper function to parse bio text with italic markers
function parseBioText(text: string): ItalicPhrase[] {
  const parts: ItalicPhrase[] = [];
  const regex = /\*([^*]+)\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        text: text.slice(lastIndex, match.index),
        isItalic: false,
      });
    }
    parts.push({
      text: match[1],
      isItalic: true,
    });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({
      text: text.slice(lastIndex),
      isItalic: false,
    });
  }

  return parts;
}

// Default hosts data
const defaultHosts: Host[] = [
  {
    id: 1,
    name: "Amy Wallace",
    imageSrc: "https://picsum.photos/seed/amy-wallace/400/500",
    bio: parseBioText(
      "Amy Wallace is a journalist whose work has appeared in *GQ*, *Wired*, *Vanity Fair*, *The New Yorker*, and *The New York Times Magazine*. She is also the co-author of two books: *Creativity, Inc.* (with Pixar co-founder Ed Catmull) and *Hot Seat* (with former GE CEO Jeff Immelt)."
    ),
  },
  {
    id: 2,
    name: "Mary Melton",
    imageSrc: "https://picsum.photos/seed/mary-melton/400/500",
    bio: parseBioText(
      "Mary Melton is an award-winning writer and former editor-in-chief of *Los Angeles* magazine. As a leader on GDP's editorial team, she has spearheaded the redesign of *National Geographic* and helped companies like Nike, Lyft, and Microsoft create editorial strategies and tell journalistic stories."
    ),
  },
];

// Host Card Component
function HostCard({ host, index }: { host: Host; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex flex-col"
    >
      {/* Host Name */}
      <h3 className="mb-4 text-base font-semibold tracking-tight text-[#1a1a1a]">
        {host.name}
      </h3>

      {/* Host Image */}
      <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden">
        <Image
          src={host.imageSrc}
          alt={host.name}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover"
        />
      </div>

      {/* Host Bio */}
      <p className="text-sm leading-relaxed text-[#1a1a1a]">
        {host.bio.map((phrase, idx) =>
          phrase.isItalic ? (
            <em key={idx} className="italic">
              {phrase.text}
            </em>
          ) : (
            <span key={idx}>{phrase.text}</span>
          )
        )}
      </p>
    </motion.div>
  );
}

// Main Component
export default function RivetedPodcast({
  sectionLabel = "Hosted by",
  hosts = defaultHosts,
}: RivetedPodcastProps) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[120px_1fr_1fr] md:gap-10 lg:gap-12">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start"
          >
            <span className="text-sm font-medium text-[#1a1a1a]">
              {sectionLabel}
            </span>
          </motion.div>

          {/* Host Cards */}
          {hosts.map((host, index) => (
            <HostCard key={host.id} host={host} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
