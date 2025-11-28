"use client";

import { motion } from "motion/react";
import {
  Home,
  Mail,
  CheckSquare,
  MoreHorizontal,
  FolderOpen,
  Users,
  Handshake,
  HeartHandshake,
  Search,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  count?: number;
  isActive?: boolean;
}

function NavItem({ icon, label, count, isActive = false }: NavItemProps) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
        isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-xs font-medium">{label}</span>
      </div>
      {count !== undefined && (
        <span className="text-[10px] text-gray-400">{count}</span>
      )}
    </div>
  );
}

interface CollectionItemProps {
  icon: React.ReactNode;
  label: string;
  iconBgColor: string;
  isActive?: boolean;
}

function CollectionItem({
  icon,
  label,
  iconBgColor,
  isActive = false,
}: CollectionItemProps) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
        isActive ? "bg-blue-50" : "hover:bg-gray-50"
      }`}
    >
      <div
        className="flex h-5 w-5 items-center justify-center rounded"
        style={{ backgroundColor: iconBgColor }}
      >
        {icon}
      </div>
      <span
        className={`text-xs font-medium ${isActive ? "text-blue-600" : "text-gray-600"}`}
      >
        {label}
      </span>
    </div>
  );
}

interface ContactRowProps {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  location: string;
  avatarColor: string;
  delay?: number;
}

function ContactRow({
  name,
  email,
  company,
  projectType,
  budget,
  location,
  avatarColor,
  delay = 0,
}: ContactRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay }}
      className="grid grid-cols-[180px_180px_130px_150px_80px_100px] gap-2 px-3 py-2 text-[10px] border-b border-gray-100 hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center gap-2">
        <div
          className="h-5 w-5 rounded-full flex items-center justify-center text-white text-[8px] font-medium"
          style={{ backgroundColor: avatarColor }}
        >
          {name.charAt(0)}
        </div>
        <span className="text-blue-600 font-medium truncate">{name}</span>
      </div>
      <span className="text-gray-500 truncate">{email}</span>
      <span className="text-gray-700 truncate">{company}</span>
      <span className="text-gray-500 truncate">{projectType}</span>
      <span className="text-gray-700">{budget}</span>
      <span className="text-gray-500 truncate">{location}</span>
    </motion.div>
  );
}

function TrafficLightButton({ color }: { color: "red" | "yellow" | "green" }) {
  const colors = {
    red: "bg-[#FF5F57]",
    yellow: "bg-[#FEBC2E]",
    green: "bg-[#28C840]",
  };

  return <div className={`h-2.5 w-2.5 rounded-full ${colors[color]}`} />;
}

interface TabProps {
  label: string;
  isActive?: boolean;
}

function Tab({ label, isActive = false }: TabProps) {
  return (
    <button
      className={`relative px-4 py-2 text-sm font-medium transition-colors ${
        isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
        />
      )}
    </button>
  );
}

interface PeopleCrmShowcaseProps {
  title?: string;
  highlightedWord?: string;
  subtitle?: string;
  ctaText?: string;
  tabs?: string[];
  activeTab?: string;
}

const defaultContacts = [
  {
    name: "Megan Coleman",
    email: "megan.col@zoho.com",
    company: "Swipe Wire",
    projectType: "Webflow Development",
    budget: "$ 1,20,000",
    location: "Dhaka, Bangla",
    avatarColor: "#F97316",
  },
  {
    name: "Nicola Bond",
    email: "nicola1998@gmail.com",
    company: "Secure Smarter",
    projectType: "UI/UX design",
    budget: "$ 8,80,000",
    location: "Thimphu, Bhu",
    avatarColor: "#3B82F6",
  },
  {
    name: "Michael L. Ellis",
    email: "michael.ellis@yahoo.com",
    company: "Dwellsmith",
    projectType: "Website redevelopment",
    budget: "$ 53,400",
    location: "Ottawa, Cana",
    avatarColor: "#EF4444",
  },
  {
    name: "Karol W. Beck",
    email: "karol.w@aol.com",
    company: "Cloudtravel",
    projectType: "Custom code",
    budget: "$ 6,89,000",
    location: "Harare, Zimba",
    avatarColor: "#10B981",
  },
  {
    name: "John B. Ibarra",
    email: "john_ibarra@gmail.com",
    company: "Seekingon",
    projectType: "CMS Dashboard",
    budget: "$ 45,000",
    location: "Washington, U",
    avatarColor: "#8B5CF6",
  },
  {
    name: "Elizabeth Southern",
    email: "elizabeth@outlook.com",
    company: "Invest Spend",
    projectType: "App Development",
    budget: "$ 1,20,000",
    location: "London, UK",
    avatarColor: "#EC4899",
  },
  {
    name: "Joseph S. Arnold",
    email: "joseph.arnold@icloud.com",
    company: "Legalibright",
    projectType: "Logo maker",
    budget: "$ 70,738",
    location: "Abu Dhabi, UA",
    avatarColor: "#F59E0B",
  },
  {
    name: "Kenneth R. Nee",
    email: "kenneth.nee@outlook.com",
    company: "Securi Today",
    projectType: "Animation",
    budget: "$ 90,000",
    location: "Colombo, Sri L",
    avatarColor: "#06B6D4",
  },
  {
    name: "Vladen Bobrov",
    email: "bobrov24012@yahoo.com",
    company: "Game Eight",
    projectType: "Wordpress Development",
    budget: "$ 24,500",
    location: "New Delhi, In",
    avatarColor: "#6366F1",
  },
  {
    name: "Ahmed Degtyaryov",
    email: "ahmed_789@proton.net",
    company: "Nufraction",
    projectType: "Shopify Development",
    budget: "$ 50,400",
    location: "Sibolga, Indo",
    avatarColor: "#84CC16",
  },
  {
    name: "Lika Tychonoff",
    email: "lika.tych_on.off@gmail.com",
    company: "Tech Tack",
    projectType: "Figma Design",
    budget: "$ 6,80,000",
    location: "Rome, Italy",
    avatarColor: "#F43F5E",
  },
  {
    name: "Katherine Moy",
    email: "katherine@icloud.com",
    company: "Digimail",
    projectType: "Deal with client",
    budget: "$ 7,80,000",
    location: "Tokyo, Japan",
    avatarColor: "#0EA5E9",
  },
  {
    name: "Delfur Zavala Amo",
    email: "delfur.zavala@global.net",
    company: "Crowdstage",
    projectType: "Backend Development",
    budget: "$ 2,39,990",
    location: "Melbourne, A",
    avatarColor: "#A855F7",
  },
  {
    name: "Paciente Rico Ayala",
    email: "rico@outlook.com",
    company: "Seekingon",
    projectType: "React JS Development",
    budget: "$ 7,90,000",
    location: "Vancouver, C",
    avatarColor: "#14B8A6",
  },
  {
    name: "Esmeralda Benites",
    email: "esmeralda@hotmail.com",
    company: "Formaxis",
    projectType: "Backend Development",
    budget: "$ 89,000",
    location: "Jakarta, Indo",
    avatarColor: "#F472B6",
  },
  {
    name: "Celeste Yanez",
    email: "calvita.23@outlook.com",
    company: "Met Connect",
    projectType: "UX Design",
    budget: "$ 8,50,000",
    location: "Tual, Indone",
    avatarColor: "#22C55E",
  },
];

export default function PeopleCrmShowcase({
  title = "Unlock The Potential of",
  highlightedWord = "People",
  subtitle = "The easiest way to get started organizing your people and their communication.",
  ctaText = "Get Early Access",
  tabs = ["CRM", "Recruitment", "Fundraising", "Support"],
  activeTab = "CRM",
}: PeopleCrmShowcaseProps) {
  return (
    <div className="relative w-full h-[680px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 30%, #EEEEFA 100%)
            `,
          }}
        />
        {/* Orange/peach glow - bottom left */}
        <div
          className="absolute bottom-0 left-0 h-[550px] w-[550px] -translate-x-1/3 translate-y-1/3 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(254, 166, 123, 1) 0%, rgba(251, 169, 148, 0.85) 15%, rgba(251, 169, 148, 0.5) 35%, transparent 55%)",
          }}
        />
        {/* Blue glow - bottom right */}
        <div
          className="absolute bottom-0 right-0 h-[550px] w-[550px] translate-x-1/3 translate-y-1/3 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(18, 137, 254, 1) 0%, rgba(22, 131, 254, 0.8) 15%, rgba(22, 131, 254, 0.45) 35%, transparent 55%)",
          }}
        />
        {/* Purple tint - bottom center */}
        <div
          className="absolute bottom-0 left-1/2 h-[350px] w-[700px] -translate-x-1/2 translate-y-1/4 rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(171, 92, 170, 0.5) 0%, rgba(171, 92, 170, 0.25) 35%, transparent 55%)",
          }}
        />
        {/* Light purple tint - top right */}
        <div
          className="absolute -top-10 right-0 h-[350px] w-[450px] -translate-y-1/4 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(236, 233, 255, 0.85) 0%, rgba(214, 215, 254, 0.45) 35%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-12 pt-10 pb-0">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {title}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #5A90E6 0%, #8B5CF6 50%, #A855F7 100%)",
              }}
            >
              {highlightedWord}
            </span>
          </h1>
          <p className="text-sm text-gray-500 max-w-md mx-auto">{subtitle}</p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mb-6 px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors shadow-lg"
        >
          {ctaText}
        </motion.button>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-1 mb-8"
        >
          {tabs.map((tab) => (
            <Tab key={tab} label={tab} isActive={tab === activeTab} />
          ))}
        </motion.div>

        {/* App window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-4xl"
        >
          {/* macOS window chrome */}
          <div className="bg-white rounded-t-2xl shadow-2xl border border-gray-200/80 border-b-0">
            {/* Window header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-gray-50/80 rounded-t-2xl">
              <div className="flex items-center gap-1.5">
                <TrafficLightButton color="red" />
                <TrafficLightButton color="yellow" />
                <TrafficLightButton color="green" />
              </div>

              {/* Search bar */}
              <div className="flex-1 max-w-xs mx-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md text-xs text-gray-500">
                  <Search className="h-3 w-3" />
                  <span>Search + Action</span>
                  <span className="ml-auto text-[10px] text-gray-400">
                    &#8984; + K
                  </span>
                </div>
              </div>

              {/* Avatar group */}
              <div className="flex items-center -space-x-2">
                <Image
                  src="https://picsum.photos/seed/user1/32/32"
                  alt="User 1"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full border-2 border-white"
                />
                <Image
                  src="https://picsum.photos/seed/user2/32/32"
                  alt="User 2"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full border-2 border-white"
                />
                <Image
                  src="https://picsum.photos/seed/user3/32/32"
                  alt="User 3"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full border-2 border-white"
                />
                <Image
                  src="https://picsum.photos/seed/user4/32/32"
                  alt="User 4"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full border-2 border-white"
                />
              </div>
            </div>

            {/* App content */}
            <div className="flex">
              {/* Sidebar */}
              <div className="w-40 border-r border-gray-100 bg-gray-50/50 py-3 px-2">
                <div className="space-y-0.5">
                  <NavItem
                    icon={<Home className="h-3.5 w-3.5" />}
                    label="Home"
                  />
                  <NavItem
                    icon={<Mail className="h-3.5 w-3.5" />}
                    label="Email"
                    count={12}
                  />
                  <NavItem
                    icon={<CheckSquare className="h-3.5 w-3.5" />}
                    label="Task"
                    count={24}
                  />
                  <NavItem
                    icon={<MoreHorizontal className="h-3.5 w-3.5" />}
                    label="More"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <p className="px-3 text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2">
                    Collection
                  </p>
                  <div className="space-y-0.5">
                    <CollectionItem
                      icon={<Users className="h-3 w-3 text-blue-600" />}
                      label="Leads"
                      iconBgColor="#DBEAFE"
                      isActive
                    />
                    <CollectionItem
                      icon={<FolderOpen className="h-3 w-3 text-gray-600" />}
                      label="Accounts"
                      iconBgColor="#F3F4F6"
                    />
                    <CollectionItem
                      icon={<Handshake className="h-3 w-3 text-green-600" />}
                      label="Deals"
                      iconBgColor="#DCFCE7"
                    />
                    <CollectionItem
                      icon={
                        <HeartHandshake className="h-3 w-3 text-pink-600" />
                      }
                      label="Fundraising"
                      iconBgColor="#FCE7F3"
                    />
                    <CollectionItem
                      icon={<Users className="h-3 w-3 text-purple-600" />}
                      label="Recruitment"
                      iconBgColor="#F3E8FF"
                    />
                    <CollectionItem
                      icon={<Mail className="h-3 w-3 text-orange-600" />}
                      label="Support"
                      iconBgColor="#FFEDD5"
                    />
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 bg-white">
                {/* Table header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <button className="text-xs font-medium text-blue-600">
                      All
                    </button>
                    <button className="text-xs font-medium text-gray-500">
                      Hot
                    </button>
                    <button className="text-xs text-gray-400">+ + +</button>
                  </div>
                </div>

                {/* Column headers */}
                <div className="grid grid-cols-[180px_180px_130px_150px_80px_100px] gap-2 px-3 py-2 text-[10px] font-medium text-gray-400 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex items-center gap-1">
                    <span>Name</span>
                    <ChevronDown className="h-3 w-3" />
                  </div>
                  <span>Email</span>
                  <span>Company</span>
                  <span>Project Type</span>
                  <span>Budget</span>
                  <span>Location</span>
                </div>

                {/* Table rows */}
                <div className="max-h-[320px] overflow-y-auto">
                  {defaultContacts.map((contact, index) => (
                    <ContactRow
                      key={contact.email}
                      {...contact}
                      delay={0.5 + index * 0.03}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
