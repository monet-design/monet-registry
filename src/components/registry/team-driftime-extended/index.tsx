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
    background: "#1a1a1a",
    cardBackground: "#1a1a1a",
    textPrimary: "#ffffff",
    textSecondary: "#9ca3af",
    tagBorder: "#4b5563",
    developmentIcon: "#d97706",
    advisoryIcon: "#facc15",
  },
  dark: {
    background: "#1a1a1a",
    cardBackground: "#1a1a1a",
    textPrimary: "#ffffff",
    textSecondary: "#9ca3af",
    tagBorder: "#4b5563",
    developmentIcon: "#d97706",
    advisoryIcon: "#facc15",
  },
} as const;

/**
 * 팀원 데이터 타입
 */
interface TeamMember {
  name: string;
  role: "Development" | "Advisory Board";
  description: string;
  linkedinUrl?: string;
}

/**
 * 기본 팀원 데이터
 */
const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Jon Barmby",
    role: "Development",
    description:
      "As an avid film-and-photo-making enthusiast, Jon isn't always behind the camera and often found putting pen to paper in writing film scripts. A vegetarian at heart, Jon is no stranger to a midweek kitchen experiment with a particular love for an abundance of garlic, and an evening in front of the footie.",
    linkedinUrl: "#",
  },
  {
    name: "John Foster",
    role: "Development",
    description:
      "A self-proclaimed music nerd, when John's not trawling for new tunes, he's making it under the name 'Hyperlife'. When not building prototypes at SpinUp, he can be found working on his friend's websites, enjoying a sunset on the coast, or walking his adorable border collie.",
    linkedinUrl: "#",
  },
  {
    name: "Piers Cowburn",
    role: "Advisory Board",
    description:
      "Driven by all things visual, Modyfi co-founder and creative engineer Piers shows enthusiastic interest in what can come from authentic collaboration, connectivity, community and the power of AI. Through his advisory role, Piers helps future-face Driftime on progressive tech shaping the industry.",
    linkedinUrl: "#",
  },
  {
    name: "Papa Akuffo",
    role: "Advisory Board",
    description:
      "As the London Design Director of global design company IDEO, Papa adds his perspective and passion for making people's lives better through design and strategy, building much needed solutions for complex challenges, bringing diverse and expert perspective into Driftime's thinking.",
    linkedinUrl: "#",
  },
  {
    name: "Martin Edwards",
    role: "Development",
    description:
      "When Martin's not tinkering with the latest technologies at SpinUp, you'll likely find him down the gym or bouldering, trying to offset the 8 hours sitting at his desk perma-snacking. With a toddler in the midst, Martin rely's on waking himself up with metal music through a past life as the lead guitarist in Tyrannosaurus Dead.",
    linkedinUrl: "#",
  },
  {
    name: "Ashleigh Penrod",
    role: "Advisory Board",
    description:
      "Founder of Mess Hill, Ashley has an interest in regenerative soil and cooperative communities. Through her practice, Ashley makes regenerative and resilient practices the norm. Helping to run and build NOSTOS, a network of best-in-class independent agencies, Ashley has extensive experience in fostering shared resiliency and impact.",
    linkedinUrl: "#",
  },
  {
    name: "Phil Clarke",
    role: "Advisory Board",
    description:
      "Fellow B Corp member, B Leader and founder of Consciam, Phil has more than 25 years of experience delivering complex projects, motivated by his environmental studies and interest in sustainability. Phil plays a fundamental role in advising Driftime on sustainable practices and core B Corp values.",
    linkedinUrl: "#",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

// Development icon - stylized hand/wave shape
const DevelopmentIcon = ({ color }: { color: string }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 20C8 20 10 18 14 18C18 18 20 22 24 22C28 22 30 20 30 20"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="10" cy="14" r="3" fill={color} />
    <circle cx="18" cy="12" r="3" fill={color} />
    <circle cx="26" cy="14" r="3" fill={color} />
  </svg>
);

// Advisory Board icon - sparkle/star shape
const AdvisoryIcon = ({ color }: { color: string }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 4L20.5 14L30 14L22.5 20L25.5 30L18 24L10.5 30L13.5 20L6 14L15.5 14L18 4Z"
      fill={color}
    />
    <circle cx="28" cy="8" r="2" fill={color} />
    <circle cx="8" cy="8" r="1.5" fill={color} />
  </svg>
);

interface TeamDriftimeExtendedProps {
  mode?: "light" | "dark";
  title?: string;
  teamMembers?: TeamMember[];
}

export default function TeamDriftimeExtended({
  mode = "dark",
  title = "Extended Team",
  teamMembers = DEFAULT_TEAM_MEMBERS,
}: TeamDriftimeExtendedProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span
            className="inline-block rounded-full border px-4 py-1.5 text-sm"
            style={{
              color: colors.textPrimary,
              borderColor: colors.tagBorder,
            }}
          >
            {title}
          </span>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="flex flex-col"
            >
              {/* Icon */}
              <div className="mb-4">
                {member.role === "Development" ? (
                  <DevelopmentIcon color={colors.developmentIcon} />
                ) : (
                  <AdvisoryIcon color={colors.advisoryIcon} />
                )}
              </div>

              {/* Name */}
              <h3
                className="mb-3 text-2xl font-bold tracking-tight"
                style={{ color: colors.textPrimary }}
              >
                {member.name}
              </h3>

              {/* Role Tag and LinkedIn */}
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="inline-flex items-center rounded-full border px-3 py-1 text-xs"
                  style={{
                    color: colors.textPrimary,
                    borderColor: colors.tagBorder,
                  }}
                >
                  {member.role}
                </span>
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-70"
                    style={{ color: colors.textPrimary }}
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
