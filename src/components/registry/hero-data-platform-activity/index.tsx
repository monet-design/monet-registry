"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const CUSTOMIZATION = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import {
  User,
  DollarSign,
  FolderOpen,
  FilePlus,
  Star,
  Share2,
} from "lucide-react";

interface ActivityItem {
  icon: React.ReactNode;
  title: string;
  time: string;
  details?: { label: string; value: string }[];
  score?: number;
}

interface UserProfile {
  name: string;
  role: string;
  company: string;
  lastSeen: string;
  avatarUrl?: string;
}

interface HeroDataPlatformActivityProps {
  tagline?: string;
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  userProfile?: UserProfile;
  activities?: ActivityItem[];
  heroImageUrl?: string;
}

const defaultUserProfile: UserProfile = {
  name: "Jenn Higgs",
  role: "UX Designer",
  company: "Presently",
  lastSeen: "Last seen 2 hours ago in San Francisco.",
};

const defaultActivities: ActivityItem[] = [
  {
    icon: <User className="w-4 h-4 text-gray-500" />,
    title: "Signed up",
    time: "3d",
  },
  {
    icon: <DollarSign className="w-4 h-4 text-white" />,
    title: "Started free trial",
    time: "3d",
  },
  {
    icon: <FolderOpen className="w-4 h-4 text-gray-500" />,
    title: "Created folder",
    time: "2d",
    details: [{ label: "Folder name", value: "Marketing designs" }],
  },
  {
    icon: <FilePlus className="w-4 h-4 text-gray-500" />,
    title: "Created file",
    time: "2d",
    details: [
      { label: "File name", value: "New landing page" },
      { label: "Folder", value: "Marketing designs" },
    ],
  },
  {
    icon: <Star className="w-4 h-4 text-gray-500" />,
    title: "Score updated",
    time: "2d",
    score: 4,
  },
  {
    icon: <Share2 className="w-4 h-4 text-gray-500" />,
    title: "Shared file",
    time: "8m",
  },
  {
    icon: <DollarSign className="w-4 h-4 text-white" />,
    title: "Subscription purchased",
    time: "1m",
    details: [
      { label: "Total spent", value: "$399" },
      { label: "Location", value: "Sydney" },
    ],
  },
];

function ActivityCard({
  userProfile = defaultUserProfile,
  activities = defaultActivities,
}: {
  userProfile?: UserProfile;
  activities?: ActivityItem[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm"
    >
      {/* User Profile */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white font-semibold">
          {userProfile.avatarUrl ? (
            <Image
              src={userProfile.avatarUrl}
              alt={userProfile.name}
              width={48}
              height={48}
              className="rounded-full"
            />
          ) : (
            userProfile.name
              .split(" ")
              .map((n) => n[0])
              .join("")
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{userProfile.name}</h4>
          <p className="text-sm text-gray-500">
            {userProfile.role}, {userProfile.company}
          </p>
          <p className="text-sm text-gray-400">{userProfile.lastSeen}</p>
        </div>
      </div>

      {/* Activity List */}
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className="border-t border-gray-100 pt-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded flex items-center justify-center ${
                    activity.title === "Started free trial" ||
                    activity.title === "Subscription purchased"
                      ? "bg-[#4874E2]"
                      : "bg-gray-100"
                  }`}
                >
                  {activity.icon}
                </div>
                <span className="font-medium text-gray-900 text-sm">
                  {activity.title}
                </span>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
            {activity.details && (
              <div className="ml-8 mt-1 space-y-0.5">
                {activity.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center text-xs">
                    <span className="text-gray-400 w-20">{detail.label}</span>
                    <span className="text-gray-300 mx-2">........</span>
                    <span className="text-gray-700">{detail.value}</span>
                  </div>
                ))}
              </div>
            )}
            {activity.score !== undefined && (
              <div className="ml-8 mt-1 flex items-center text-xs">
                <span className="text-gray-400 w-20">Product score</span>
                <span className="text-gray-300 mx-2">........</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-base ${i < activity.score! ? "" : "opacity-30"}`}
                    >
                      🚀
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function HeroImages({ imageUrl }: { imageUrl?: string }) {
  const defaultImage = "/registry/hero-data-platform-activity/hero-woman.png";
  const src = imageUrl || defaultImage;

  return (
    <div className="relative flex items-center justify-center h-full">
      {/* First (leftmost) half-circle */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute right-[200px] w-[180px] h-[360px] overflow-hidden rounded-l-full"
        style={{
          clipPath: "ellipse(100% 50% at 100% 50%)",
        }}
      >
        <Image
          src={src}
          alt="Team member"
          fill
          className="object-cover object-center"
        />
      </motion.div>

      {/* Second (middle) half-circle */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute right-[80px] w-[200px] h-[400px] overflow-hidden rounded-l-full z-10"
        style={{
          clipPath: "ellipse(100% 50% at 100% 50%)",
        }}
      >
        <Image
          src={src}
          alt="Team member"
          fill
          className="object-cover object-center"
        />
      </motion.div>

      {/* Third (rightmost) half-circle */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute right-[-40px] w-[220px] h-[440px] overflow-hidden rounded-l-full z-20"
        style={{
          clipPath: "ellipse(100% 50% at 100% 50%)",
        }}
      >
        <Image
          src={src}
          alt="Team member"
          fill
          className="object-cover object-center"
        />
      </motion.div>
    </div>
  );
}

export default function HeroDataPlatformActivity({
  tagline = "CUSTOMER DATA PLATFORM (CDP)",
  heading = "Put your data to work",
  description = "With a customer data platform that breaks down data silos\nand empowers your entire team to do more.",
  primaryButtonText = "Try Ortto free",
  secondaryButtonText = "Book a demo",
  onPrimaryClick,
  onSecondaryClick,
  userProfile = defaultUserProfile,
  activities = defaultActivities,
  heroImageUrl,
}: HeroDataPlatformActivityProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#4874E2] overflow-hidden">
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white/80 text-sm tracking-wide uppercase"
            >
              {tagline}
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold italic text-white leading-tight"
            >
              {heading}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/90 text-lg whitespace-pre-line max-w-md"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 pt-2"
            >
              <button
                onClick={onSecondaryClick}
                className="text-white hover:text-white/80 font-medium underline underline-offset-4 transition-colors"
              >
                {secondaryButtonText}
              </button>
              <button
                onClick={onPrimaryClick}
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors shadow-lg"
              >
                {primaryButtonText}
              </button>
            </motion.div>

            {/* Activity Card */}
            <div className="pt-4">
              <ActivityCard
                userProfile={userProfile}
                activities={activities}
              />
            </div>
          </div>

          {/* Right Column - Hero Images */}
          <div className="hidden lg:block relative h-[600px]">
            <HeroImages imageUrl={heroImageUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}
