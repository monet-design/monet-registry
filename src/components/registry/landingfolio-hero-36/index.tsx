"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#5046E5", // Purple brand color
    buttonBg: "#303743", // Dark button background
  },
  dark: {
    accent: "#5046E5",
    buttonBg: "#303743",
  },
} as const;

const IMAGES = {
  avatar1: {
    path: "/registry/landingfolio-hero-36/avatar-1.jpg",
    alt: "User avatar 1",
    prompt: `Professional headshot portrait for avatar.
Style: Clean, professional, friendly
Layout: Head and shoulders, centered
Composition: Neutral background, professional attire
Color palette: Natural, diverse skin tones
Mood: Approachable, professional
Technical: Square crop, high resolution`,
  },
  avatar2: {
    path: "/registry/landingfolio-hero-36/avatar-2.jpg",
    alt: "User avatar 2",
    prompt: `Professional headshot portrait for avatar.
Style: Clean, professional, friendly
Layout: Head and shoulders, centered
Composition: Neutral background, professional attire
Color palette: Natural, diverse skin tones
Mood: Approachable, professional
Technical: Square crop, high resolution`,
  },
  avatar3: {
    path: "/registry/landingfolio-hero-36/avatar-3.jpg",
    alt: "User avatar 3",
    prompt: `Professional headshot portrait for avatar.
Style: Clean, professional, friendly
Layout: Head and shoulders, centered
Composition: Neutral background, professional attire
Color palette: Natural, diverse skin tones
Mood: Approachable, professional
Technical: Square crop, high resolution`,
  },
  avatar4: {
    path: "/registry/landingfolio-hero-36/avatar-4.jpg",
    alt: "User avatar 4",
    prompt: `Professional headshot portrait for avatar.
Style: Clean, professional, friendly
Layout: Head and shoulders, centered
Composition: Neutral background, professional attire
Color palette: Natural, diverse skin tones
Mood: Approachable, professional
Technical: Square crop, high resolution`,
  },
  avatar5: {
    path: "/registry/landingfolio-hero-36/avatar-5.jpg",
    alt: "User avatar 5",
    prompt: `Professional headshot portrait for avatar.
Style: Clean, professional, friendly
Layout: Head and shoulders, centered
Composition: Neutral background, professional attire
Color palette: Natural, diverse skin tones
Mood: Approachable, professional
Technical: Square crop, high resolution`,
  },
  avatar6: {
    path: "/registry/landingfolio-hero-36/avatar-6.jpg",
    alt: "User avatar 6",
    prompt: `Professional headshot portrait for avatar.
Style: Clean, professional, friendly
Layout: Head and shoulders, centered
Composition: Neutral background, professional attire
Color palette: Natural, diverse skin tones
Mood: Approachable, professional
Technical: Square crop, high resolution`,
  },
  avatar7: {
    path: "/registry/landingfolio-hero-36/avatar-7.jpg",
    alt: "User avatar 7",
    prompt: `Professional headshot portrait for avatar.
Style: Clean, professional, friendly
Layout: Head and shoulders, centered
Composition: Neutral background, professional attire
Color palette: Natural, diverse skin tones
Mood: Approachable, professional
Technical: Square crop, high resolution`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface NavItem {
  label: string;
  href: string;
}

interface AvatarUser {
  image: string;
  alt: string;
}

interface FeaturedBrand {
  name: string;
  icon: React.ReactNode;
}

interface LandingfolioHero36Props {
  mode?: "light" | "dark";
  logo?: {
    icon?: React.ReactNode;
    text?: string;
  };
  navItems?: NavItem[];
  headline?: string;
  description?: string;
  avatars?: AvatarUser[];
  socialProofText?: string;
  formTitle?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  featuredTitle?: string;
  featuredBrands?: FeaturedBrand[];
  onSubmit?: (name: string, email: string) => void;
}

// Logo Icon Component
function LogoIcon({ className = "w-6 h-6", color = "#5046E5" }: { className?: string; color?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke={color}
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}

// Sparkle Icon for headline (accent line style)
function SparkleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 4C10 8 14 12 18 14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M14 2C15 5 17 7 20 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Featured Brand Icons
function VertexIcon() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10L8 15L17 5"
          stroke="#00D4AA"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="font-semibold text-white text-base tracking-wide">
        VERTEX
      </span>
    </div>
  );
}

function SquareStoneIcon() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2L18 10L10 18L2 10L10 2Z"
          stroke="#00D4AA"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M5 10L10 5L15 10L10 15L5 10Z"
          stroke="#00D4AA"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <span className="font-medium text-white text-sm">SquareStone</span>
    </div>
  );
}

function MartinoIcon() {
  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold text-white text-base">martino</span>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 1L11 7H17L12 11L14 17L9 13L4 17L6 11L1 7H7L9 1Z"
          fill="url(#martino-gradient)"
        />
        <defs>
          <linearGradient
            id="martino-gradient"
            x1="1"
            y1="1"
            x2="17"
            y2="17"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF6B9D" />
            <stop offset="0.5" stopColor="#A855F7" />
            <stop offset="1" stopColor="#00D4AA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function WaverioIcon() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2L16 6V14L10 18L4 14V6L10 2Z"
          stroke="#00D4AA"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="10" cy="10" r="3" stroke="#00D4AA" strokeWidth="1.5" fill="none" />
      </svg>
      <span className="font-medium text-white text-sm">waverio</span>
    </div>
  );
}

// Default avatar images (placeholders)
const defaultAvatars: AvatarUser[] = [
  { image: IMAGES.avatar1.path, alt: IMAGES.avatar1.alt },
  { image: IMAGES.avatar2.path, alt: IMAGES.avatar2.alt },
  { image: IMAGES.avatar3.path, alt: IMAGES.avatar3.alt },
  { image: IMAGES.avatar4.path, alt: IMAGES.avatar4.alt },
  { image: IMAGES.avatar5.path, alt: IMAGES.avatar5.alt },
  { image: IMAGES.avatar6.path, alt: IMAGES.avatar6.alt },
  { image: IMAGES.avatar7.path, alt: IMAGES.avatar7.alt },
];

// Main Component
export default function LandingfolioHero36({
  mode = "light",
  logo = {
    icon: <LogoIcon className="w-7 h-7" />,
    text: "ClarityUI",
  },
  navItems = [
    { label: "Tour", href: "#tour" },
    { label: "Products", href: "#products" },
    { label: "Customers", href: "#customers" },
    { label: "Articles", href: "#articles" },
  ],
  headline = "Get marketing\ninspirations weekly",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.",
  avatars = defaultAvatars,
  socialProofText = "Join other 3200+ Marketers now",
  formTitle = "Join our email list",
  namePlaceholder = "ex: James Darek",
  emailPlaceholder = "Email address",
  buttonText = "Join LandingFolio Newsletter For Free",
  featuredTitle = "FEATURED ON",
  featuredBrands = [
    { name: "Vertex", icon: <VertexIcon /> },
    { name: "SquareStone", icon: <SquareStoneIcon /> },
    { name: "Martino", icon: <MartinoIcon /> },
    { name: "Waverio", icon: <WaverioIcon /> },
  ],
  onSubmit,
}: LandingfolioHero36Props) {
  const colors = COLORS[mode];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    onSubmit?.(name, email);
  };

  return (
    <section className="w-full min-h-screen bg-white">
        {/* Header */}
        <nav className="w-full px-6 lg:px-12 py-5 bg-white">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              {logo.icon}
              <span className="text-black font-semibold text-lg">
                {logo.text}
              </span>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center gap-10"
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-800 text-sm font-medium hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>

            {/* Empty space for balance */}
            <div className="w-20" />
          </div>
        </nav>

        {/* Main Content */}
        <div className="w-full px-6 lg:px-12 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden"
            style={{ backgroundColor: colors.accent }}
          >
            <div className="flex flex-col px-8 lg:px-16 py-12 lg:py-16">
              {/* Top Section - Two Columns */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Left Content */}
                <div className="flex flex-col justify-start">
                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-4xl sm:text-5xl lg:text-[3.5rem] text-white mb-6 leading-[1.1] tracking-tight dm-serif-display"
                  >
                    {headline.split("\n").map((line, i) => (
                      <span key={i} className="block">
                        {i === 0 ? (
                          <>
                            <span className="italic">{line}</span>
                            <SparkleIcon className="inline-block w-5 h-5 ml-2 -mt-1 text-white" />
                          </>
                        ) : (
                          <span className="italic">{line}</span>
                        )}
                      </span>
                    ))}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-white/80 text-base lg:text-lg max-w-md leading-relaxed"
                  >
                    {description}
                  </motion.p>
                </div>

                {/* Right Content - Form */}
                <div className="flex flex-col justify-start">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-col gap-5"
                  >
                    {/* Form Title */}
                    <h2 className="text-white text-lg font-semibold">
                      {formTitle}
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <input
                        type="text"
                        name="name"
                        placeholder={namePlaceholder}
                        className="w-full px-5 py-4 bg-white rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder={emailPlaceholder}
                        className="w-full px-5 py-4 bg-white rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button
                        type="submit"
                        className="w-full px-5 py-4 text-white text-sm font-semibold rounded-xl transition-colors hover:opacity-90"
                        style={{ backgroundColor: colors.buttonBg }}
                      >
                        {buttonText}
                      </button>
                    </form>

                    {/* Featured On */}
                    <div className="mt-4">
                      <p className="text-white/60 text-xs font-medium tracking-widest mb-4">
                        {featuredTitle}
                      </p>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {featuredBrands.map((brand, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          >
                            {brand.icon}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Section - Avatars on the left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-center lg:items-start mt-12 lg:mt-16"
              >
                {/* Avatar Stack */}
                <div className="flex -space-x-2">
                  {avatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="relative w-[52px] h-[52px] rounded-full border-[2.5px] border-white/80 overflow-hidden bg-gray-200"
                      style={{ zIndex: avatars.length - index }}
                    >
                      <Image
                        src={avatar.image}
                        alt={avatar.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Social Proof Text */}
                <p className="text-white/80 text-sm font-medium mt-3">
                  {socialProofText}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
