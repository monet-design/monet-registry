"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SocialLinks {
  twitter?: string;
  linkedin?: string;
}

interface Author {
  name: string;
  image: string;
  clarityLink?: string;
  socialLinks?: SocialLinks;
  bio: string;
}

interface FreePrBookProps {
  mode?: "light" | "dark";
  badgeText?: string;
  authors?: Author[];
}

function ClarityButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded-full bg-[#E5E5E5] px-3 py-1.5 text-xs text-[#666666] transition-opacity hover:opacity-80"
    >
      <span className="text-[10px]">Request a call on</span>
      <span className="font-semibold italic text-[#333333]">Clarity</span>
    </a>
  );
}

function SocialIcon({
  type,
  href,
}: {
  type: "twitter" | "linkedin";
  href: string;
}) {
  const Icon = type === "twitter" ? Twitter : Linkedin;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#BEBEBE] transition-colors hover:text-[#999999]"
    >
      <Icon className="h-4 w-4" strokeWidth={1.5} />
    </a>
  );
}

function AuthorCard({ author, index }: { author: Author; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
      className="flex flex-col"
    >
      {/* Author Image */}
      <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden">
        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Author Name */}
      <h3 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-[#333333] sm:text-3xl">
        {author.name.split(" ").map((word, idx) => (
          <span key={idx} className="block">
            {word}
          </span>
        ))}
      </h3>

      {/* Social Links Row */}
      <div className="mb-4 flex items-center gap-3">
        {author.clarityLink && <ClarityButton href={author.clarityLink} />}
        {author.socialLinks?.twitter && (
          <SocialIcon type="twitter" href={author.socialLinks.twitter} />
        )}
        {author.socialLinks?.linkedin && (
          <SocialIcon type="linkedin" href={author.socialLinks.linkedin} />
        )}
      </div>

      {/* Author Bio */}
      <p className="text-xs leading-relaxed text-[#727272]">{author.bio}</p>
    </motion.div>
  );
}

export default function FreePrBook({
  mode = "light",
  badgeText = "MEET THE AUTHORS",
  authors = [
    {
      name: "Cameron Herold",
      image: "https://picsum.photos/seed/cameron-herold/400/300",
      clarityLink: "https://clarity.fm",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
      bio: 'Cameron Herold is an international speaker and the bestselling author of "Double Double: How to Double Your Revenue and Profit in 3 Years or Less" and "Meetings Suck". During his time as COO of 1-800-GOT-JUNK?, Cameron founded COO Alliance, which helps COOs become better leaders. Now he uses his experience to help companies reach exponential growth and get noticed by major media outlets like the Associated Press, Bloomberg, USA Today, New York Times, Wall Street Journal, Fast Company and Fortune, as well as such television like Donny Deutsch, Oprah and Dr. Phil. His current clients include a \'Big 4\' wireless carrier and a monarchy.',
    },
    {
      name: "Adrian Salamunovic",
      image: "https://picsum.photos/seed/adrian-salamunovic/400/300",
      clarityLink: "https://clarity.fm",
      socialLinks: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
      bio: "Adrian Salamunovic is the co-founder of DNA11 and CanvasPop, which he bootstrapped to 8-figure sales. Now he's a public speaker, startup advisor, investor, and PR expert who's passionate about helping entrepreneurs reach mainstream success using the power of earned media. His companies have been featured in The New York Times, Wall Street Journal, Today Show, The Doctors, Good Morning America, The Big Idea with Donny Deutsch, CNN, MSNBC, TechCrunch, Mashable, Fast Company, Forbes, The Verge, and WIRED. He is a global mentor for San Francisco based 500 Startups and and is the #1 rated advisor on Clarity.fm.",
    },
  ],
}: FreePrBookProps) {
  return (
    <section className="w-full bg-white px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex justify-center"
        >
          <span className="inline-block rounded-full bg-[#F7E365] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#333333]">
            {badgeText}
          </span>
        </motion.div>

        {/* Authors Grid */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {authors.map((author, index) => (
            <AuthorCard key={author.name} author={author} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
