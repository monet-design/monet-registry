"use client";

import { motion } from "motion/react";
import {
  Search,
  LayoutGrid,
  Plus,
  Copy,
  Menu,
  Contact,
  MessageSquare,
  CheckSquare,
  FolderOpen,
  BookOpen,
  Music,
  Video,
  Bookmark,
  Heart,
  DollarSign,
} from "lucide-react";
import Image from "next/image";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  iconBgColor: string;
  delay?: number;
}

function CategoryCard({
  icon,
  title,
  subtitle,
  iconBgColor,
  delay = 0,
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
      className="flex flex-col gap-2 rounded-xl bg-white p-4 cursor-pointer transition-shadow"
    >
      <div
        className="flex h-10 w-10 items-center justify-center rounded-lg"
        style={{ backgroundColor: iconBgColor }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}

interface TabButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function TabButton({ label, isActive = false, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
        isActive
          ? "bg-gray-900 text-white"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
}

interface TrafficLightButtonProps {
  color: "red" | "yellow" | "green";
}

function TrafficLightButton({ color }: TrafficLightButtonProps) {
  const colors = {
    red: "bg-[#FF5F57]",
    yellow: "bg-[#FEBC2E]",
    green: "bg-[#28C840]",
  };

  return (
    <div
      className={`h-3 w-3 rounded-full ${colors[color]} transition-opacity hover:opacity-80`}
    />
  );
}

interface DesktopAppDashboardProps {
  tabs?: string[];
  activeTab?: string;
  categories?: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    iconBgColor: string;
  }[];
  searchPlaceholder?: string;
  avatarSrc?: string;
}

export default function DesktopAppDashboard({
  tabs = ["Inbox", "Recent", "Favorites", "Sets", "Archive"],
  activeTab = "Sets",
  categories = [
    {
      icon: <Contact className="h-5 w-5 text-orange-600" />,
      title: "Contacts",
      subtitle: "Set",
      iconBgColor: "#FFF7ED",
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-gray-600" />,
      title: "Messages",
      subtitle: "Set",
      iconBgColor: "#F3F4F6",
    },
    {
      icon: <CheckSquare className="h-5 w-5 text-blue-600" />,
      title: "Tasks",
      subtitle: "Set",
      iconBgColor: "#EFF6FF",
    },
    {
      icon: <FolderOpen className="h-5 w-5 text-amber-600" />,
      title: "Files",
      subtitle: "Set",
      iconBgColor: "#FFFBEB",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-emerald-600" />,
      title: "Diary",
      subtitle: "Set",
      iconBgColor: "#ECFDF5",
    },
    {
      icon: <Music className="h-5 w-5 text-pink-600" />,
      title: "Music",
      subtitle: "Set",
      iconBgColor: "#FDF2F8",
    },
    {
      icon: <Video className="h-5 w-5 text-gray-600" />,
      title: "Videos",
      subtitle: "Set",
      iconBgColor: "#F3F4F6",
    },
    {
      icon: <Bookmark className="h-5 w-5 text-yellow-600" />,
      title: "Bookmarks",
      subtitle: "Set",
      iconBgColor: "#FEFCE8",
    },
    {
      icon: <Heart className="h-5 w-5 text-green-600" />,
      title: "Health",
      subtitle: "Set",
      iconBgColor: "#F0FDF4",
    },
    {
      icon: <DollarSign className="h-5 w-5 text-green-700" />,
      title: "Finance",
      subtitle: "Set",
      iconBgColor: "#F0FDF4",
    },
  ],
  searchPlaceholder = "Search for an object",
  avatarSrc = "/registry/desktop-app-dashboard/avatar.png",
}: DesktopAppDashboardProps) {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-4xl"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#7AB7C2] via-[#83BCC3] to-[#88BFBE] p-4" />

        {/* Main window container */}
        <div className="m-4 overflow-hidden rounded-2xl bg-[#83BCC3] shadow-2xl backdrop-blur-xl">
          {/* Window header */}
          <div className="flex items-center justify-between px-4 py-3">
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <TrafficLightButton color="red" />
              <TrafficLightButton color="yellow" />
              <TrafficLightButton color="green" />
            </div>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-1 max-w-md mx-8"
            >
              <div className="flex w-full items-center justify-center gap-2 rounded-full bg-[#7AB7C2] px-4 py-1.5 text-sm">
                <span className="text-[#3D5A5E]">{searchPlaceholder}</span>
              </div>
            </motion.div>

            {/* Menu button */}
            <button className="text-gray-600 hover:text-gray-800 transition-colors">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Profile section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-4 py-6"
          >
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6AA8B0] text-white hover:bg-[#5D9BA3] transition-colors">
              <Copy className="h-4 w-4" />
            </button>
            <div className="relative">
              <Image
                src={avatarSrc}
                alt="User avatar"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full border-2 border-[#3A3A3A] object-cover shadow-md"
              />
            </div>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6AA8B0] text-white hover:bg-[#5D9BA3] transition-colors">
              <Plus className="h-4 w-4" />
            </button>
          </motion.div>

          {/* Tabs and action buttons */}
          <div className="flex items-center justify-between px-6 pb-4">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex items-center gap-1"
            >
              {tabs.map((tab) => (
                <TabButton key={tab} label={tab} isActive={tab === activeTab} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                <Search className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                <LayoutGrid className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          {/* Category cards grid */}
          <div className="bg-[#E4ECEC] px-6 py-6 rounded-b-2xl">
            <div className="grid grid-cols-5 gap-3">
              {categories.map((category, index) => (
                <CategoryCard
                  key={category.title}
                  icon={category.icon}
                  title={category.title}
                  subtitle={category.subtitle}
                  iconBgColor={category.iconBgColor}
                  delay={0.5 + index * 0.05}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
