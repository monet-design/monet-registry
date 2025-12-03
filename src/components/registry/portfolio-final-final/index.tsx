"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    cardBackground: "#FAFAFA",
  },
  dark: {
    cardBackground: "#1A1A1A",
  },
} as const;

const IMAGES = {
  profile: {
    path: "/registry/portfolio-final-final/profile.png",
    alt: "Profile photo of product designer",
    prompt: `Professional headshot portrait of a male product designer.
Style: Natural, approachable, modern professional photography
Layout: Square format, head and shoulders composition
Composition: Centered subject with slight off-center gaze, casual smile
Background: Soft gray or blurred neutral background
Color palette: Warm skin tones, neutral clothing, soft lighting
Mood: Friendly, confident, approachable, professional
Technical: High resolution, natural lighting, sharp focus on face`,
  },
  book: {
    path: "/registry/portfolio-final-final/book.png",
    alt: "Product Design Portfolio book cover",
    prompt: `Book cover design for product design portfolio guide.
Style: Modern, professional, design-focused aesthetic
Layout: 3D perspective book mockup, slight angle view
Composition: Book standing upright showing front cover and spine
Cover design: Clean typography, bold title, minimalist design elements
Color palette: Professional colors (blue, gray, white tones)
Elements: Title "Product Design Portfolio Final Final", author name, simple geometric accents
Mood: Educational, professional, design-industry standard
Technical: PNG with transparency, realistic book rendering`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { Twitter } from "lucide-react";
import "./font.css";

interface PortfolioFinalFinalProps {
  mode?: "light" | "dark";
  profileImage?: string;
  bookImage?: string;
  authorName?: string;
  bookTitle?: string;
  authorBio?: React.ReactNode;
  letterContent?: React.ReactNode;
  workedWithLogos?: { name: string; icon: React.ReactNode }[];
  helpedDesignApps?: { name: string; icon: React.ReactNode }[];
  awards?: { label: string; sublabel?: string }[];
  pressLogo?: React.ReactNode;
}

function IkeaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-auto" fill="currentColor">
      <path d="M2 4h20v16H2V4zm1 1v14h18V5H3zm2 2h14v2H5V7zm0 4h14v2H5v-2zm0 4h10v2H5v-2z" />
    </svg>
  );
}

function AmexIcon() {
  return (
    <span className="text-[10px] font-bold tracking-tight">
      AMERICAN
      <br />
      EXPRESS
    </span>
  );
}

function AdidasIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-auto" fill="currentColor">
      <path d="M12 2L2 22h4l2-4h8l2 4h4L12 2zm0 6l3 6H9l3-6z" />
    </svg>
  );
}

function PolyworkIcon() {
  return (
    <div className="flex items-center gap-0.5">
      <div className="h-2 w-2 rounded-full bg-current" />
      <span className="text-[10px] font-semibold">Polywork</span>
    </div>
  );
}

function PandaDocIcon() {
  return <span className="text-[10px] font-semibold">PandaDoc</span>;
}

function SpotifyIcon() {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1DB954]">
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.36c-.18.29-.51.38-.8.21-2.2-1.35-4.98-1.65-8.24-.9-.31.07-.63-.12-.7-.43-.07-.31.12-.63.43-.7 3.57-.82 6.64-.47 9.1 1.02.29.18.38.51.21.8zm1.22-2.7c-.23.36-.64.48-1 .25-2.52-1.55-6.36-2-9.34-1.09-.39.12-.8-.1-.92-.49-.12-.39.1-.8.49-.92 3.4-1.04 7.63-.54 10.52 1.25.36.23.48.64.25 1zm.1-2.82c-3.02-1.79-8-1.96-10.88-1.08-.46.14-.95-.12-1.09-.58-.14-.46.12-.95.58-1.09 3.31-1.01 8.81-.81 12.29 1.25.42.25.56.79.31 1.21-.25.41-.79.55-1.21.29z" />
      </svg>
    </div>
  );
}

function ZeroIcon() {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded bg-[#FF6B35] text-[10px] font-bold text-white">
      Zero
    </div>
  );
}

function SketchIcon() {
  return (
    <div className="flex h-6 w-6 items-center justify-center">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#F7B500">
        <path d="M12 2L3 9l9 13 9-13-9-7zM5.5 9L12 4l6.5 5H5.5zM12 19.5L5 10h14l-7 9.5z" />
      </svg>
    </div>
  );
}

function TypeformIcon() {
  return (
    <div className="flex items-center gap-0.5">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </div>
  );
}

function ProductHuntBadge() {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DA552F]">
        <span className="text-[10px] font-bold text-white">P</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[9px] font-medium uppercase tracking-wide text-gray-500">
          Product Hunt
        </span>
        <span className="text-[10px] font-semibold text-gray-900">#1 Product of the Week</span>
      </div>
    </div>
  );
}

function AppOfTheDayBadge() {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600">
        <span className="text-[10px] font-bold text-white">A</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[9px] font-medium uppercase tracking-wide text-gray-500">
          App Store
        </span>
        <span className="text-[10px] font-semibold text-gray-900">App of the day</span>
      </div>
    </div>
  );
}

function FastCompanyLogo() {
  return (
    <span className="font-inter text-sm font-bold uppercase tracking-wide text-gray-400">
      FAST COMPANY
    </span>
  );
}

export default function PortfolioFinalFinal({
  mode = "light",
  profileImage = IMAGES.profile.path,
  bookImage = IMAGES.book.path,
  authorName = "Fedor Shkliarau",
  bookTitle = "Product Design Portfolio Final Final",
  authorBio = (
    <>
      <span className="font-semibold">{authorName}</span> is a product designer with 12+ years of
      industry experience.
      <br />
      <br />
      Every new version of his{" "}
      <a href="#" className="text-blue-600 underline">
        portfolio
      </a>{" "}
      has helped him reach new heights: from his first design internship to his first lead designer
      role to, now, a rewarding consulting career.
    </>
  ),
  letterContent = (
    <>
      <p className="mb-4">Hey,</p>
      <p className="mb-4">
        I&apos;m Fedor, author of <span className="italic">Product Design Portfolio Final Final</span>.
      </p>
      <p className="mb-4">
        Sometimes, working on your portfolio can be the hardest and longest project out there.
      </p>
      <p className="mb-4">
        And yet, it&apos;s one of the most rewarding and impactful ventures since it impacts your
        career a lot.
      </p>
      <p className="mb-4">
        It sets you up for success in job applications and helps you get noticed by hiring managers
        and design peers.
      </p>
      <p className="mb-4">I&apos;ve been there myself.</p>
      <p className="mb-4">
        First, I didn&apos;t know what mattered in portfolios. But finally publishing my portfolio led
        to peace of mind, referrals, and dream jobs.
      </p>
      <p className="mb-4">
        <span className="italic">Product Design Portfolio Final Final</span> will not design your
        portfolio for you. But it will provide guidance so working on your portfolio doesn&apos;t feel
        endless and in the end will help land dream jobs.
      </p>
    </>
  ),
  workedWithLogos = [
    { name: "Twitter", icon: <Twitter className="h-4 w-4" /> },
    { name: "IKEA", icon: <IkeaIcon /> },
    { name: "American Express", icon: <AmexIcon /> },
    { name: "Adidas", icon: <AdidasIcon /> },
    { name: "Polywork", icon: <PolyworkIcon /> },
    { name: "PandaDoc", icon: <PandaDocIcon /> },
  ],
  helpedDesignApps = [
    { name: "Spotify", icon: <SpotifyIcon /> },
    { name: "Zero", icon: <ZeroIcon /> },
    { name: "Sketch", icon: <SketchIcon /> },
    { name: "Typeform", icon: <TypeformIcon /> },
  ],
  awards = [
    { label: "#1 Product of the Week", sublabel: "Product Hunt" },
    { label: "App of the day", sublabel: "App Store" },
  ],
  pressLogo = <FastCompanyLogo />,
}: PortfolioFinalFinalProps) {
  const colors = COLORS[mode];

  return (
    <section className="font-inter flex min-h-screen w-full items-center justify-center bg-white p-4 sm:p-8">
      <div className="flex w-full max-w-5xl flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Left Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-full flex-col gap-6 lg:w-72"
        >
          {/* Profile Image */}
          <div className="relative aspect-square w-32 overflow-hidden rounded-lg bg-gray-100 sm:w-40">
            <Image
              src={profileImage}
              alt={IMAGES.profile.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Book Image */}
          <div className="relative aspect-[4/3] w-40 sm:w-48">
            <Image
              src={bookImage}
              alt={IMAGES.book.alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Author Bio */}
          <div className="text-xs leading-relaxed text-gray-600">{authorBio}</div>

          {/* Worked With Section */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
              HAS WORKED WITH
            </span>
            <div className="flex flex-wrap items-center gap-3 text-gray-600">
              {workedWithLogos.map((logo, index) => (
                <div key={index} title={logo.name} className="flex items-center">
                  {logo.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Helped Design Apps Section */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
              HELPED DESIGN APPS LIKE
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {helpedDesignApps.map((app, index) => (
                <div key={index} title={app.name}>
                  {app.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Press Section */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
              AWARDS & PRESS
            </span>
            <div className="flex flex-col gap-2">
              <ProductHuntBadge />
              <AppOfTheDayBadge />
            </div>
          </div>

          {/* Press Logo */}
          <div className="mt-2">{pressLogo}</div>
        </motion.aside>

        {/* Right Content - Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <div className="rounded-2xl bg-[#FAFAFA] p-6 shadow-[0_4px_40px_rgba(0,0,0,0.08)] sm:p-10">
            {/* Letter Content */}
            <div className="text-sm leading-relaxed text-gray-700">{letterContent}</div>

            {/* Signature */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <div className="font-caveat text-3xl text-gray-800">Fedor</div>
              <div className="mt-2 flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-gray-900">{authorName}</span>
                <span className="text-xs italic text-gray-500">Author of {bookTitle}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
