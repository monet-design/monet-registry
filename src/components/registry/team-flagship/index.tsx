"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    background: "#0d0a1c",
    cardBorder: "#3d2e7c",
    cardBg: "rgba(25, 18, 55, 0.7)",
    accent: "#7c3aed",
    accentHover: "#6d28d9",
    roleColor: "#a78bfa",
    textPrimary: "#ffffff",
    textSecondary: "#9ca3af",
    ctaBg: "rgba(25, 18, 55, 0.9)",
  },
  dark: {
    background: "#0d0a1c",
    cardBorder: "#3d2e7c",
    cardBg: "rgba(25, 18, 55, 0.7)",
    accent: "#7c3aed",
    accentHover: "#6d28d9",
    roleColor: "#a78bfa",
    textPrimary: "#ffffff",
    textSecondary: "#9ca3af",
    ctaBg: "rgba(25, 18, 55, 0.9)",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import "./font.css";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
  linkedinUrl?: string;
}

interface TeamFlagshipProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  teamMembers?: TeamMember[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  onCtaClick?: () => void;
}

const defaultTeamMembers: TeamMember[] = [
  {
    name: "Simon Molnar",
    role: "Founder",
    description:
      "Tech whiz turned jewellery mogul. Simon turns old-school retailers into data wizards while crushing it in work-life balance and PlayStation high scores.",
    linkedinUrl: "#",
  },
  {
    name: "Roger Qian",
    role: "Chief Product Officer",
    description:
      "Roger is the retail whisperer, tackling the big opportunities, building innovative, customer-centric solutions that add value and make a significant impact to customer businesses.",
    linkedinUrl: "#",
  },
  {
    name: "Ronnie Kessler",
    role: "Growth & Strategy",
    description:
      "A seasoned tech aficionado with a wealth of experience fostering successful ventures. Ronnie steers Flagship's strategy and growth initiatives, with strong focus and motivation.",
    linkedinUrl: "#",
  },
  {
    name: "Shane Knowles",
    role: "Head of US Sales",
    description:
      "Meet Shane, our seasoned sales guru with a decade of retail mastery. With a passion for growth and a contagious smile, he's the driving force to redefine retail success.",
    linkedinUrl: "#",
  },
  {
    name: "Marcel Ninio",
    role: "Partnerships",
    description:
      "Say hi to Marcel, the business guru with a killer 3-point shot. He brings wit, wisdom, and wicked problem-solving skills to the Flagship team.",
    linkedinUrl: "#",
  },
  {
    name: "Deena Metz",
    role: "Customer Success",
    description:
      "Deena is an operational ninja, taking on any challenge that comes her way. At Flagship, she ensures our customers receive top-notch service with a touch of joy.",
    linkedinUrl: "#",
  },
  {
    name: "Ben Rohald",
    role: "Co-CTO",
    description:
      "With a nickname like Big Brain – he's not just a genius but turns code into coolness. With a resume boasting Atlassian and Optiver, he turns every project into a tech spectacle.",
    linkedinUrl: "#",
  },
  {
    name: "Ryan Lonstein",
    role: "Co-CTO",
    description:
      "Ryan is a code wizard with a reputation for building systems like a boss at Canva and various other startups. He's always hungry for a new challenge, coding at full throttle.",
    linkedinUrl: "#",
  },
  {
    name: "Sylvain Garcia",
    role: "Senior Product Designer",
    description:
      "Our design dynamo, turns customer needs into digital dreams with pixel perfection. When he's not crafting solutions, he is riding waves or blazing trails in the bush.",
    linkedinUrl: "#",
  },
  {
    name: "Derek Wang",
    role: "Software Engineer",
    description:
      "A biotech whiz turned self-taught software guru. Now at Flagship, Derek's ready to lift both industries and weights, dreaming of squatting 2x his bodyweight.",
    linkedinUrl: "#",
  },
];

// Avatar placeholder component with initials
function AvatarPlaceholder({
  name,
  image,
  className = "",
}: {
  name: string;
  image?: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (image) {
    return (
      <div
        className={`relative overflow-hidden rounded-full bg-gray-600 ${className}`}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-br from-gray-500 to-gray-700 text-white font-semibold ${className}`}
    >
      {initials}
    </div>
  );
}

// Team member card component
function TeamMemberCard({
  member,
  colors,
  index,
}: {
  member: TeamMember;
  colors: (typeof COLORS)["light"];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]"
      style={{
        backgroundColor: colors.cardBg,
        border: `1px solid ${colors.cardBorder}`,
      }}
    >
      {/* LinkedIn icon */}
      {member.linkedinUrl && (
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      )}

      <div className="flex gap-4">
        {/* Avatar */}
        <AvatarPlaceholder
          name={member.name}
          image={member.image}
          className="w-16 h-16 flex-shrink-0 text-xl"
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3
            className="font-semibold text-base mb-0.5"
            style={{ color: colors.textPrimary }}
          >
            {member.name}
          </h3>
          <p
            className="text-sm font-medium mb-2"
            style={{ color: colors.roleColor }}
          >
            {member.role}
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            {member.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// CTA card component
function CtaCard({
  title,
  description,
  buttonText,
  onClick,
  colors,
}: {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  colors: (typeof COLORS)["light"];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="relative rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full min-h-[200px]"
      style={{
        backgroundColor: colors.ctaBg,
        border: `1px solid ${colors.cardBorder}`,
      }}
    >
      <h3
        className="font-semibold text-lg mb-2"
        style={{ color: colors.textPrimary }}
      >
        {title}
      </h3>
      <p
        className="text-sm mb-6 max-w-xs"
        style={{ color: colors.textSecondary }}
      >
        {description}
      </p>
      <button
        onClick={onClick}
        className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-colors"
        style={{ backgroundColor: colors.accent }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = colors.accentHover)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = colors.accent)
        }
      >
        {buttonText}
      </button>
    </motion.div>
  );
}

export default function TeamFlagship({
  mode = "light",
  title = "Meet the team behind it all.",
  subtitle = "Meet the Flagship team. We're a bunch of go-getters, problem-solvers, and idea-generators who love nothing more than working together to bring new technology to the retail world. We're constantly pushing ourselves to think outside the box and have a blast doing it.",
  teamMembers = defaultTeamMembers,
  ctaTitle = "Could this be you?",
  ctaDescription = "Interested in being part of a high-performance, driven team that is making tangible impact in our customers lives?",
  ctaButtonText = "Join our team",
  onCtaClick,
}: TeamFlagshipProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-6 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(124, 58, 237, 0.15), transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="team-flagship-title text-3xl md:text-4xl lg:text-5xl mb-6"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              colors={colors}
              index={index}
            />
          ))}

          {/* CTA Card - appears in the last grid position */}
          <CtaCard
            title={ctaTitle}
            description={ctaDescription}
            buttonText={ctaButtonText}
            onClick={onCtaClick}
            colors={colors}
          />
        </div>
      </div>
    </section>
  );
}
