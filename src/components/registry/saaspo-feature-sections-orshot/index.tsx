"use client";

import { motion } from "motion/react";
import {
  LayoutGrid,
  Users,
  Cloud,
  Zap,
  Activity,
  ChevronDown,
  Grid3X3,
} from "lucide-react";

// ============================================================================
// TYPES & DATA
// ============================================================================

interface TeamMember {
  email: string;
  role: string;
  status: "Owner" | "Accepted" | "Pending";
  you?: boolean;
}

interface FeatureCardData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DEFAULT_TITLE = "Scale, Speed, and Reliability.";
const DEFAULT_SUBTITLE = "Your Entire Creative Workflow, Automated.";
const DEFAULT_DESCRIPTION =
  "Organize, own your renders and collaborate effortlessly.\nKeep track with detailed logs and insights";

const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  { email: "hi@daskrad.com", role: "", status: "Owner" },
  { email: "arry@daskrad.com", role: "Admin", status: "Accepted", you: true },
  { email: "tom@daskrad.com", role: "Member", status: "Accepted" },
  { email: "dev@acmelabs.com", role: "Member", status: "Pending" },
  { email: "skyler@daskrad.com", role: "Member", status: "Pending" },
];

const FEATURES: FeatureCardData[] = [
  {
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "Organize with Workspaces",
    description:
      "Organize Workspaces by campaign, client, or project for maximum efficiency",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Bring your Team",
    description:
      "Add team members to workspaces, manage permissions, collaborate",
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Bring Your Own Storage",
    description:
      "Own your renders, use your own storage. We support S3 and Cloudflare R2",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Superfast Rendering",
    description:
      "Superfast rendering from templates. See insights to track response times",
  },
  {
    icon: <Activity className="h-5 w-5" />,
    title: "Logs and Usage Insights",
    description:
      "Get detailed logs and reports for all your renders, errors and performance",
  },
];

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

function WorkspaceDropdown() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-100">
        <div className="flex items-center justify-center w-6 h-6 rounded bg-gray-900 text-white text-xs font-medium">
          @
        </div>
        <span className="text-sm font-medium text-gray-900">DaSkrad</span>
        <ChevronDown className="h-3.5 w-3.5 text-gray-400 ml-auto" />
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <Grid3X3 className="h-3 w-3" />
          <span>Workspaces (1/1)</span>
        </div>

        <div className="rounded-md border border-gray-200 p-3 mb-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Rishi&apos;s Workspace
              </p>
              <p className="text-xs text-gray-500">rishis-workspace</p>
            </div>
            <div className="flex gap-1.5">
              <span className="px-2 py-0.5 text-xs rounded border border-gray-200 text-gray-600">
                Default
              </span>
              <span className="px-2 py-0.5 text-xs rounded border border-gray-200 text-gray-600">
                Owner
              </span>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-500 flex items-center gap-1.5 mb-2">
          <span className="text-gray-400">✧</span> Shared With You
        </div>

        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-900">Acme One</span>
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          </div>
          <span className="text-xs text-gray-500">acme</span>
          <span className="px-2 py-0.5 text-xs rounded border border-gray-200 text-gray-600 ml-auto">
            Admin
          </span>
        </div>
      </div>
    </div>
  );
}

function TeamTable({ members }: { members: TeamMember[] }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-3 text-xs font-medium text-gray-500 px-4 py-2 bg-gray-50 border-b border-gray-100">
        <span>EMAIL</span>
        <span>ROLE</span>
        <span className="text-right">INVITE STATUS</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-100">
        {members.map((member, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center px-4 py-2.5 text-sm"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-gray-900">{member.email}</span>
              {member.you && (
                <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                  You
                </span>
              )}
            </div>
            <span className="text-gray-600">
              {member.role || member.status}
            </span>
            <div className="flex items-center justify-end gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  member.status === "Accepted" || member.status === "Owner"
                    ? "bg-emerald-500"
                    : "bg-orange-400"
                }`}
              ></span>
              <span className="text-gray-600">{member.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StorageForm() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm p-4 space-y-3">
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">
          R2 Endpoint
        </label>
        <input
          type="text"
          readOnly
          value="https://7856a31f0aaa467c2b9carfedct914f03c2.cloudflarestrrage.com"
          className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-600 truncate"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">
          Access Key ID
        </label>
        <input
          type="password"
          readOnly
          value="************************"
          className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-600"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">
          Secret Key
        </label>
        <input
          type="password"
          readOnly
          value="************************"
          className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-600"
        />
      </div>
      <div>
        <label className="text-xs font-medium text-gray-600 block mb-1">
          Bucket Name
        </label>
        <input
          type="text"
          readOnly
          value="acme-corp"
          className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-600"
        />
      </div>
    </div>
  );
}

function RenderTimeCard() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm p-4">
      <div className="flex items-center gap-2 mb-2">
        <Zap className="h-4 w-4 text-gray-700" />
        <span className="text-sm font-medium text-gray-900">
          Average Render Time
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-3">
        This is the average render time for last{" "}
        <span className="font-medium text-gray-900">28 renders</span> in{" "}
        <span className="text-blue-600 font-medium">Pika</span>. Keep a check on
        this number to see how fast your renders are
      </p>
      <p className="text-4xl font-light text-gray-400">
        2,341<span className="text-2xl">ms</span>
      </p>
    </div>
  );
}

function UsageChart() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm p-4 h-full">
      <svg
        viewBox="0 0 300 150"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Y-axis labels */}
        <text x="5" y="15" className="text-[8px] fill-gray-400">
          100
        </text>
        <text x="5" y="50" className="text-[8px] fill-gray-400">
          75
        </text>
        <text x="5" y="85" className="text-[8px] fill-gray-400">
          50
        </text>
        <text x="5" y="120" className="text-[8px] fill-gray-400">
          25
        </text>

        {/* Grid lines */}
        <line
          x1="25"
          y1="12"
          x2="295"
          y2="12"
          stroke="#f3f4f6"
          strokeWidth="1"
        />
        <line
          x1="25"
          y1="47"
          x2="295"
          y2="47"
          stroke="#f3f4f6"
          strokeWidth="1"
        />
        <line
          x1="25"
          y1="82"
          x2="295"
          y2="82"
          stroke="#f3f4f6"
          strokeWidth="1"
        />
        <line
          x1="25"
          y1="117"
          x2="295"
          y2="117"
          stroke="#f3f4f6"
          strokeWidth="1"
        />

        {/* Area fill */}
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 35 110 Q 65 100, 95 95 T 155 60 T 185 75 T 215 55 T 245 80 T 285 65 L 285 130 L 35 130 Z"
          fill="url(#areaGradient)"
        />

        {/* Line */}
        <path
          d="M 35 110 Q 65 100, 95 95 T 155 60 T 185 75 T 215 55 T 245 80 T 285 65"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
        />

        {/* Data points */}
        <circle cx="155" cy="60" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="245" cy="80" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />

        {/* Tooltip box */}
        <rect
          x="125"
          y="30"
          width="60"
          height="25"
          rx="4"
          fill="#1f2937"
          opacity="0.9"
        />
        <text x="132" y="40" className="text-[7px] fill-white">
          March 28
        </text>
        <text x="132" y="50" className="text-[7px] fill-gray-300">
          Renders
        </text>
        <text x="165" y="50" className="text-[7px] fill-white font-medium">
          56
        </text>

        {/* Second tooltip */}
        <rect
          x="225"
          y="58"
          width="40"
          height="16"
          rx="3"
          fill="#1f2937"
          opacity="0.8"
        />
        <text x="232" y="70" className="text-[6px] fill-white">
          45
        </text>

        {/* X-axis labels */}
        <text x="35" y="145" className="text-[7px] fill-gray-400">
          March 27
        </text>
        <text x="95" y="145" className="text-[7px] fill-gray-400">
          March 28
        </text>
        <text x="155" y="145" className="text-[7px] fill-gray-400">
          March 30
        </text>
        <text x="215" y="145" className="text-[7px] fill-gray-400">
          March 31
        </text>
        <text x="255" y="145" className="text-[7px] fill-gray-400">
          April 1
        </text>
      </svg>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

interface SaaspoFeatureSectionsOrshotProps {
  title?: string;
  subtitle?: string;
  description?: string;
  teamMembers?: TeamMember[];
}

export default function SaaspoFeatureSectionsOrshot({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  description = DEFAULT_DESCRIPTION,
  teamMembers = DEFAULT_TEAM_MEMBERS,
}: SaaspoFeatureSectionsOrshotProps) {
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-1">
            {title}
          </h2>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {subtitle}
          </h2>
          <p className="text-gray-500 text-base md:text-lg whitespace-pre-line">
            {description}
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Row 1: Two cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Organize with Workspaces */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-gray-50 p-6 pb-8"
            >
              <div className="mb-6 max-w-xs">
                <WorkspaceDropdown />
              </div>
              <div className="flex items-center gap-2 mb-2">
                {FEATURES[0].icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {FEATURES[0].title}
              </h3>
              <p className="text-sm text-gray-500">{FEATURES[0].description}</p>
            </motion.div>

            {/* Bring your Team */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-gray-50 p-6 pb-8"
            >
              <div className="mb-6">
                <TeamTable members={teamMembers} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                {FEATURES[1].icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {FEATURES[1].title}
              </h3>
              <p className="text-sm text-gray-500">{FEATURES[1].description}</p>
            </motion.div>
          </div>

          {/* Row 2: Single wide card */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-gray-50 p-6 pb-8"
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="max-w-sm">
                <StorageForm />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {FEATURES[2].icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {FEATURES[2].title}
                </h3>
                <p className="text-sm text-gray-500">
                  {FEATURES[2].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 3: Two cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Superfast Rendering */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-gray-50 p-6 pb-8"
            >
              <div className="mb-6 max-w-sm">
                <RenderTimeCard />
              </div>
              <div className="flex items-center gap-2 mb-2">
                {FEATURES[3].icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {FEATURES[3].title}
              </h3>
              <p className="text-sm text-gray-500">{FEATURES[3].description}</p>
            </motion.div>

            {/* Logs and Usage Insights */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-gray-50 p-6 pb-8"
            >
              <div className="mb-6 h-44">
                <UsageChart />
              </div>
              <div className="flex items-center gap-2 mb-2">
                {FEATURES[4].icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {FEATURES[4].title}
              </h3>
              <p className="text-sm text-gray-500">{FEATURES[4].description}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
