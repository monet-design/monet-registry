"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import "./font.css";

// Types
interface TeamMember {
  name: string;
  role: string;
  location: string;
  avatarUrl?: string;
}

interface LawtradesHeroProps {
  titlePrefix?: string;
  titleAccent?: string;
  subtitle?: string;
  members?: TeamMember[];
}

// Default team members data based on the image
const defaultMembers: TeamMember[] = [
  { name: "Karen Frame", role: "Attorney", location: "Colorado" },
  { name: "Amy Pough", role: "Legal Ops", location: "Massachusetts" },
  { name: "Allison Mulford", role: "Attorney", location: "Maryland" },
  { name: "Justin Higgs", role: "Labor & Employment", location: "Texas" },
  { name: "L.L Crawley", role: "Contract Management", location: "California" },
  { name: "Phillip Imanlihen", role: "Attorney", location: "California" },
  { name: "Eric Frank", role: "Contract Admin", location: "Massachusetts" },
  { name: "Paula Kirlin", role: "Attorney", location: "California" },
  { name: "Tim Nitsch", role: "Attorney", location: "Illinois" },
  { name: "Joseph Budde", role: "Attorney", location: "Pennsylvania" },
  { name: "Serge Yakubov", role: "Attorney", location: "New York" },
  { name: "Nicole Newman", role: "Attorney", location: "New Hampshire" },
  { name: "Allison Mulford", role: "Attorney", location: "Maryland" },
  { name: "Sharzard Kojouri", role: "Attorney", location: "Pennsylvania" },
  { name: "Tatiana Pumprep", role: "Paralegal", location: "Florida" },
];

// Generate initials from name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Generate a consistent color based on name
function getAvatarColor(name: string): string {
  const colors = [
    "#E8E8E8",
    "#D4D4D4",
    "#BDBDBD",
    "#A8A8A8",
    "#F0E6D8",
    "#E6DCC8",
    "#D8D0C0",
  ];
  const index = name.length % colors.length;
  return colors[index];
}

// Member Card Component
function MemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const initials = getInitials(member.name);
  const avatarBg = getAvatarColor(member.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
      className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
      style={{ minWidth: "200px" }}
    >
      {/* Avatar */}
      {member.avatarUrl ? (
        <img
          src={member.avatarUrl}
          alt={member.name}
          className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
        />
      ) : (
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium text-gray-600"
          style={{ backgroundColor: avatarBg }}
        >
          {initials}
        </div>
      )}

      {/* Info */}
      <div className="flex flex-col gap-0.5 overflow-hidden">
        <span className="truncate text-sm font-semibold text-gray-900">
          {member.name}
        </span>
        <span className="truncate text-xs text-gray-500">{member.role}</span>
        <div className="flex items-center gap-1 text-gray-400">
          <MapPin className="h-3 w-3 flex-shrink-0" />
          <span className="truncate text-xs">{member.location}</span>
        </div>
      </div>
    </motion.div>
  );
}

// Marquee Row Component
function MarqueeRow({
  members,
  direction = "left",
  speed = 30,
  rowIndex = 0,
}: {
  members: TeamMember[];
  direction?: "left" | "right";
  speed?: number;
  rowIndex?: number;
}) {
  // Double the members for seamless loop
  const duplicatedMembers = [...members, ...members];

  return (
    <div className="relative flex overflow-hidden py-2">
      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedMembers.map((member, index) => (
          <MemberCard
            key={`${member.name}-${index}`}
            member={member}
            index={rowIndex * 5 + (index % 5)}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Main Component
export default function LawtradesHero({
  titlePrefix = "The Lawtrades",
  titleAccent = "Network",
  subtitle = "Formed with 2000+ Lawtraders from top law firms and legal departments across the US and abroad.",
  members = defaultMembers,
}: LawtradesHeroProps) {
  // Split members into 3 rows
  const row1 = members.slice(0, 5);
  const row2 = members.slice(5, 10);
  const row3 = members.slice(10, 15);

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "#F7F1EC" }}
    >
      {/* Title Section */}
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lawtrades-hero-title mb-4 text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="text-gray-900">{titlePrefix} </span>
          <span style={{ color: "#69A19E" }}>{titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-xl text-base text-gray-500 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Cards Grid - Marquee Style */}
      <div className="mt-12 sm:mt-16">
        <MarqueeRow members={row1} direction="left" speed={40} rowIndex={0} />
        <MarqueeRow members={row2} direction="right" speed={35} rowIndex={1} />
        <MarqueeRow members={row3} direction="left" speed={45} rowIndex={2} />
      </div>
    </section>
  );
}
