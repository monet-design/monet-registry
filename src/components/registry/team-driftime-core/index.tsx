"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#1A1A1A",
    textMuted: "#888888",
    tabUnderline: "#C9A227",
    cardBorder: "#FFFFFF",
  },
  dark: {
    background: "#0D0D0D",
    text: "#FFFFFF",
    textMuted: "#888888",
    tabUnderline: "#C9A227",
    cardBorder: "#FFFFFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import Image from "next/image";

// Types
interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedIn?: string;
  bio: string;
  isPlaceholder?: boolean;
}

interface TeamDriftimeCoreProps {
  mode?: "light" | "dark";
  title?: string;
  tabLabel?: string;
  members?: TeamMember[];
  placeholderTitle?: string;
  placeholderRole?: string;
  placeholderBio?: string;
  placeholderEmail?: string;
}

// Default team members data
const DEFAULT_MEMBERS: TeamMember[] = [
  {
    name: "Edmund Marshall-Lovsey",
    role: "Creative",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    linkedIn: "#",
    bio: "When Ed isn't enjoying a newly brewed tipple on the advice of his local independent bartender, he's either heads down in a book about the planet, wielding a bow and arrow at a medieval fayre, or rolling the dice on a not-so competitive board game with friends and family.",
  },
  {
    name: "Elsa Monteith",
    role: "Communications",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    linkedIn: "#",
    bio: "Elsa feels most at home cooking in her kitchen surrounded by her well thumbed recipe books, good friends, and a trusty cup of tea. You can find her reading in the park regardless of the weather, or watching low-brow reality TV at any given opportunity.",
  },
  {
    name: "Holly Jackson",
    role: "Operations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    linkedIn: "#",
    bio: "Known as the team's resident garden guru and home-grown vegetable aficionado, Holly loves plant-based cooking, walking in nature, and evenings spent with friends playing games.",
  },
  {
    name: "Sara Taiyo",
    role: "Co-founder",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    linkedIn: "#",
    bio: "Sara has a love for cold water swimming with friends throughout the year, beginning many mornings with a dip in chilly waters. She's always been fascinated by the science and wizardry behind vegan baking, and loves experimenting with the seasonal harvests from the community garden she volunteers with.",
  },
  {
    name: "Joanne Billings",
    role: "Operations",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop",
    linkedIn: "#",
    bio: "When Jo isn't browsing for new titles in one of London's many bookshops, she is propped up with a notebook plotting ideas for her next creative venture or storytelling piece. A lover of tea and all things spiritual, she enjoys sound baths, yoga, festivals, exploring markets, and supporting local businesses.",
  },
  {
    name: "Olivia Dias Bagott",
    role: "Creative",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop",
    linkedIn: "#",
    bio: "Olivia is a collector of textiles from her travels, pulling at the thread of place and space at each destination she discovers. Soundtracked by spinning records and with a backdrop of the South coast of Brazil, Olivia enjoys slow sunny morning rituals and a Sunday brunch with friends.",
  },
  {
    name: "Abb-d Taiyo",
    role: "Co-founder & CCO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    linkedIn: "#",
    bio: "Lover of all things hip-hop and wabi sabi, Abb-d is also known for his background in both music and basketball. An accomplished linguist and self-confessed foodie, Abb-d makes sure to explore vegan menus of all cuisines, with a particular love for the classic New York reuben sandwich (plant based, of course).",
  },
  {
    name: "Kenny Heard",
    role: "Design Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    bio: "A minimalist at heart, Kenny is drawn to the simple and unobtrusive in life, investing a lot of his time and energy into restorative self-care, new technology, and the people that surround him. Starting his day with an early rise and a freshly-brewed coffee, Kenny eases into his creative headspace with some chilled, low-fi tracks.",
  },
  {
    name: "Rossouw Oosthuizen",
    role: "Creative",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    linkedIn: "#",
    bio: "Hailing from sunny Lisbon, Rossouw is a designer with a love for making, building, and repairing. He runs a small farm in Portugal that he's turning into a thriving food forest, accompanied by his energetic dog named Otta who joins him on explorations and adventures across the coast.",
  },
];

// Logo Component
function DriftimeLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="white" />
      <circle cx="9" cy="12" r="3" fill="#0D0D0D" />
    </svg>
  );
}

// Badge Component
function RoleBadge({ role }: { role: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/40 px-3 py-1 text-xs font-medium text-white">
      {role}
    </span>
  );
}

// Team Member Card Component
function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white sm:text-xl">
          {member.name}
        </h3>

        {/* Role and LinkedIn */}
        <div className="mt-2 flex items-center gap-2">
          <RoleBadge role={member.role} />
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors hover:text-white"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Bio */}
        <p className="mt-3 text-sm leading-relaxed text-[#888888]">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}

// Placeholder Card Component (You? card)
function PlaceholderCard({
  title = "You?",
  role = "Futures",
  bio = "Interested in working with Driftime toward longterm change and impact? Reach out and let us know why you'd be a good fit for the team.",
  email = "futures@driftime.com",
  index,
}: {
  title?: string;
  role?: string;
  bio?: string;
  email?: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col"
    >
      {/* Image placeholder */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#1A1A1A]">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1518012312832-96aea3c91144?w=400&h=500&fit=crop"
            alt="Join our team"
            fill
            className="object-cover opacity-60"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>

        {/* Role */}
        <div className="mt-2 flex items-center gap-2">
          <RoleBadge role={role} />
        </div>

        {/* Bio */}
        <p className="mt-3 text-sm leading-relaxed text-[#888888]">
          {bio}{" "}
          <a
            href={`mailto:${email}`}
            className="text-white underline underline-offset-2 transition-colors hover:text-[#C9A227]"
          >
            {email}
          </a>
        </p>
      </div>
    </motion.div>
  );
}

// Main Component
export default function TeamDriftimeCore({
  mode = "dark",
  title = "Team",
  tabLabel = "Core Team",
  members = DEFAULT_MEMBERS,
  placeholderTitle = "You?",
  placeholderRole = "Futures",
  placeholderBio = "Interested in working with Driftime toward longterm change and impact? Reach out and let us know why you'd be a good fit for the team.",
  placeholderEmail = "futures@driftime.com",
}: TeamDriftimeCoreProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {/* Title with Logo */}
          <div className="flex items-center gap-3">
            <DriftimeLogo />
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              {title}
            </h1>
          </div>

          {/* Tab */}
          <div className="mt-6">
            <button
              className="relative pb-2 text-sm font-medium text-white"
              style={{
                borderBottom: `2px solid ${colors.tabUnderline}`,
              }}
            >
              {tabLabel}
            </button>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
          <PlaceholderCard
            title={placeholderTitle}
            role={placeholderRole}
            bio={placeholderBio}
            email={placeholderEmail}
            index={members.length}
          />
        </div>
      </div>
    </section>
  );
}
