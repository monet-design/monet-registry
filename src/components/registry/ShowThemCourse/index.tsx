"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

// Types
interface CredentialItem {
  id: number;
  image: string;
  title: string;
  highlight?: string;
  description: string;
}

interface ShowThemCourseProps {
  label?: string;
  name?: string;
  tagline?: string;
  credentials?: CredentialItem[];
}

// Default data
const defaultCredentials: CredentialItem[] = [
  {
    id: 1,
    image: "/registry/show-them-course/landing-page-curator.jpg",
    title: "Landing Page Curator",
    highlight: "(8k collected)",
    description:
      "Each month 150k designers, developers and makers look to my site One Page Love for Landing Page references and inspiration.",
  },
  {
    id: 2,
    image: "/registry/show-them-course/hot-tips-book.jpg",
    title: "Landing Page Book Author",
    highlight: "(2k sales)",
    description:
      "The Landing Page Hot Tips Ebook contains 100 actionable tips to apply to your pages. Available in PDF, Notion and Audiobook.",
  },
  {
    id: 3,
    image: "/registry/show-them-course/consultant-ui.jpg",
    title: "Landing Page Consultant",
    description:
      "Helped brands like Unsplash, Quiksilver, Global News Canada and dozens of entrepreneurs strengthen their Landing Pages.",
  },
  {
    id: 4,
    image: "/registry/show-them-course/conference-speaker.jpg",
    title: "Conference Speaker",
    description:
      "Shared actionable lessons and fun stories about Landing Pages at Webflow Conf (London), WordCamp Europe (Berlin) and more.",
  },
  {
    id: 5,
    image: "/registry/show-them-course/course-outline.jpg",
    title: "Landing Page Workshop Host",
    description:
      "Hosted interactive workshops with Smashing Magazine, On Deck, The Travel Corporation and more.",
  },
  {
    id: 6,
    image: "/registry/show-them-course/maker-portrait.jpg",
    title: "Multi-disciplined Maker",
    description:
      "20yrs years of designing, developing, and marketing my own side projects have equipped me with the experience to consult on Landing Page effectively.",
  },
];

// Credential Card Component
function CredentialCard({ credential }: { credential: CredentialItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image
          src={credential.image}
          alt={credential.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-white">
          {credential.title}
          {credential.highlight && (
            <span className="ml-1 text-[#7A7579]">{credential.highlight}</span>
          )}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[#7A7579]">
          {credential.description}
        </p>
      </div>
    </motion.div>
  );
}

// Main Component
export default function ShowThemCourse({
  label = "COURSE INSTRUCTOR",
  name = "Rob Hope",
  tagline = "South African product builder, content\ncreator and educator.",
  credentials = defaultCredentials,
}: ShowThemCourseProps) {
  return (
    <section className="w-full bg-[#302B2F] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7A7579]">
            {label}
          </p>
          <h2
            className="mb-4 text-4xl italic text-white sm:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {name}
          </h2>
          <p className="whitespace-pre-line text-sm text-[#7A7579]">
            {tagline}
          </p>
        </motion.div>

        {/* Credentials Grid - 3 rows x 2 columns */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CredentialCard credential={credential} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
