"use client";

import { motion } from "motion/react";
import "./font.css";

interface FeatureItem {
  title: string;
  titleColor: string;
  description: string;
  subDescription: string;
}

interface HeightFeatureShowcaseProps {
  sectionNumber?: string;
  mainTitle?: string;
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    title: "Manage tasks faster than ever.",
    titleColor: "#2DD4BF",
    description:
      "Create tasks and subtasks inline with a powerful spreadsheet interface.",
    subDescription:
      "Then keep your tasks up-to-date with inline editing, multi-select and shortcuts.",
  },
  {
    title: "Discuss tasks in context.",
    titleColor: "#A855F7",
    description:
      "Resolve and record product questions quicker, with real-time chat within tasks.",
    subDescription:
      "Supports markdown, images, videos, code, Figma and more.",
  },
  {
    title: "Customize your workflows.",
    titleColor: "#2DD4BF",
    description:
      "Never be constrained. Mold Height at your will — to work your own way.",
    subDescription:
      "Made possible by custom attributes, smart lists, group by, filters and ordering.",
  },
];

function GradientBorderCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative p-[1px] rounded-xl ${className}`}>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-200 via-purple-100 to-cyan-200 opacity-60" />
      <div className="relative rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function TaskListCard() {
  const tasks = [
    {
      id: "T-105",
      name: "Implement landing page",
      status: "In progress",
      statusColor: "#2DD4BF",
      tag: "launch",
      tagColor: "#F472B6",
    },
    {
      id: "T-106",
      name: "Implement mobile support",
      status: "In progress",
      statusColor: "#2DD4BF",
      tag: "feature",
      tagColor: "#FBBF24",
    },
    { id: "T-107", name: "Sign up form", status: "", statusColor: "" },
    { id: "T-102", name: "Design landing page", status: "", statusColor: "" },
    { id: "T-103", name: "Stakeholder approval", status: "", statusColor: "" },
    {
      id: "T-18",
      name: "Improve mobile support",
      status: "",
      statusColor: "",
      tag: "Bug",
      tagColor: "#F87171",
    },
  ];

  return (
    <GradientBorderCard className="w-[420px]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">#</span>
          <span className="text-gray-800 text-sm font-medium">
            marketing-site
          </span>
          <span className="text-yellow-500">*</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-500 text-xs px-2 py-1 hover:bg-gray-50 rounded">
            View
          </button>
          <button className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white text-xs px-3 py-1 rounded-md font-medium">
            Share
          </button>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="grid grid-cols-[1fr_80px_60px_80px] gap-2 text-xs text-gray-400 font-medium mb-2">
          <span>Tasks</span>
          <span>Status</span>
          <span>Tags</span>
          <span>Assignees</span>
        </div>
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1fr_80px_60px_80px] gap-2 py-1.5 items-center text-sm border-b border-gray-50 last:border-0"
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-xs">{task.id}</span>
              <span className="text-gray-700">{task.name}</span>
            </div>
            <div>
              {task.status && (
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: `${task.statusColor}20`,
                    color: task.statusColor,
                  }}
                >
                  {task.status}
                </span>
              )}
            </div>
            <div>
              {task.tag && (
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: `${task.tagColor}20`,
                    color: task.tagColor,
                  }}
                >
                  {task.tag}
                </span>
              )}
            </div>
            <div className="flex -space-x-1">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-400" />
            </div>
          </div>
        ))}
        <div className="mt-2 flex items-center gap-2 py-2 border-t border-gray-100">
          <input
            type="text"
            placeholder="Task name"
            className="flex-1 text-sm text-gray-500 bg-transparent outline-none"
          />
          <span className="text-xs text-gray-400">Back log</span>
          <span className="text-xs text-gray-400">Tags</span>
          <span className="text-xs text-gray-400">Assign...</span>
        </div>
        <div className="text-xs text-gray-400 mt-2">+ New task</div>
        <div className="text-xs text-gray-400 mt-4 mb-2">Recently completed</div>
      </div>
    </GradientBorderCard>
  );
}

function ChatCard() {
  const messages = [
    { user: "michael", action: "opened this task", time: "" },
    { user: "michael", action: "added", highlight: "bug", extra: "to tags" },
    { user: "michael", action: "assigned", avatars: true },
  ];

  return (
    <GradientBorderCard className="w-[420px]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">#</span>
          <span className="text-gray-400 text-sm">emails</span>
          <span className="text-gray-300 mx-1">&gt;</span>
          <span className="text-gray-400 text-xs">T-126</span>
          <span className="text-gray-800 text-sm font-medium">
            Support for plain text emails
          </span>
        </div>
        <div className="w-4 h-4 rounded border border-gray-300" />
      </div>
      <div className="px-4 py-4 min-h-[140px]">
        <div className="text-right text-xs text-gray-400 mb-4">10:54 AM</div>
        <div className="space-y-2 text-xs text-gray-500">
          {messages.map((msg, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <span className="text-gray-600 font-medium">{msg.user}</span>
              <span>{msg.action}</span>
              {msg.highlight && (
                <span className="px-1.5 py-0.5 bg-red-100 text-red-500 rounded text-xs">
                  {msg.highlight}
                </span>
              )}
              {msg.extra && <span>{msg.extra}</span>}
              {msg.avatars && (
                <div className="flex -space-x-1 ml-1">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-400 to-teal-400" />
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-rose-400" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
          <span className="text-gray-600 font-medium">alex</span>
          <span className="text-purple-500">*</span>
          <span>should we automatically extract the text from the</span>
          <span className="text-blue-500">@req</span>
          <span>email?</span>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 flex items-center justify-center">
          <span className="text-white text-xs">@</span>
        </div>
        <input
          type="text"
          placeholder="Message..."
          className="flex-1 text-sm text-gray-500 bg-transparent outline-none"
        />
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-lg">@</span>
          <span className="text-lg">B</span>
          <span className="text-lg">+</span>
        </div>
      </div>
    </GradientBorderCard>
  );
}

function WorkflowCard() {
  const tasks = [
    {
      name: "Paste clipboard to chat to upload an image",
      milestone: "Alpha",
      milestoneColor: "#2DD4BF",
      sprint: "Sprint 1 (Jan 1st)",
      sprintColor: "#818CF8",
      priority: "High",
      priorityColor: "#F87171",
    },
    {
      name: "Add inline video playing support",
      milestone: "Alpha",
      milestoneColor: "#2DD4BF",
      sprint: "Sprint 2 (Jan 8th)",
      sprintColor: "#818CF8",
      priority: "High",
      priorityColor: "#F87171",
    },
    {
      name: "Read receipts for any user reading messages",
      milestone: "",
      milestoneColor: "",
      sprint: "",
      sprintColor: "",
      priority: "Medium",
      priorityColor: "#FBBF24",
    },
    {
      name: "Real-time typing indicator is blinking",
      milestone: "Beta",
      milestoneColor: "#A78BFA",
      sprint: "",
      sprintColor: "",
      priority: "Low",
      priorityColor: "#34D399",
    },
    {
      name: "Read and respond to messages in one place",
      milestone: "Launch",
      milestoneColor: "#F472B6",
      sprint: "",
      sprintColor: "",
      priority: "Medium",
      priorityColor: "#FBBF24",
    },
    {
      name: "Inbox zero mode for Inbox",
      milestone: "",
      milestoneColor: "",
      sprint: "",
      sprintColor: "",
      priority: "Medium",
      priorityColor: "#FBBF24",
    },
    {
      name: "Resizable sidebar to show more information",
      milestone: "",
      milestoneColor: "",
      sprint: "",
      sprintColor: "",
      priority: "Low",
      priorityColor: "#34D399",
    },
    {
      name: "Emails are not correctly rendered on Gmail",
      milestone: "",
      milestoneColor: "",
      sprint: "",
      sprintColor: "",
      priority: "High",
      priorityColor: "#F87171",
      isBug: true,
    },
    {
      name: "Logo is cropped in the top right corner",
      milestone: "",
      milestoneColor: "",
      sprint: "",
      sprintColor: "",
      priority: "Medium",
      priorityColor: "#FBBF24",
    },
    {
      name: "Missing background color on the content",
      milestone: "",
      milestoneColor: "",
      sprint: "",
      sprintColor: "",
      priority: "Medium",
      priorityColor: "#FBBF24",
    },
  ];

  return (
    <GradientBorderCard className="w-[420px]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">#</span>
          <span className="text-gray-800 text-sm font-medium">general</span>
          <span className="text-gray-400">*</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-500 text-xs px-2 py-1 hover:bg-gray-50 rounded flex items-center gap-1">
            View <span className="text-gray-400">v</span>
          </button>
          <button className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white text-xs px-3 py-1 rounded-md font-medium">
            Share
          </button>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="grid grid-cols-[1fr_70px_90px_60px] gap-2 text-xs text-gray-400 font-medium mb-2">
          <span>Tasks</span>
          <span>Milestone</span>
          <span>Sprint</span>
          <span className="text-right">Priority</span>
        </div>
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1fr_70px_90px_60px] gap-2 py-1.5 items-center text-xs border-b border-gray-50 last:border-0"
          >
            <div className="flex items-center gap-1.5 text-gray-700">
              {task.isBug && (
                <span className="text-red-400 text-[10px]">o</span>
              )}
              <span className="truncate">{task.name}</span>
            </div>
            <div>
              {task.milestone && (
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded"
                  style={{ color: task.milestoneColor }}
                >
                  {task.milestone}
                </span>
              )}
            </div>
            <div>
              {task.sprint && (
                <span
                  className="text-[10px]"
                  style={{ color: task.sprintColor }}
                >
                  {task.sprint}
                </span>
              )}
            </div>
            <div className="text-right">
              <span style={{ color: task.priorityColor }}>{task.priority}</span>
            </div>
          </div>
        ))}
      </div>
    </GradientBorderCard>
  );
}

export default function HeightFeatureShowcase({
  sectionNumber = "1",
  mainTitle = "Why you'll love\nusing Height.",
  features = defaultFeatures,
}: HeightFeatureShowcaseProps) {
  const cards = [TaskListCard, ChatCard, WorkflowCard];

  return (
    <section className="w-full bg-white py-16 px-8 font-inter">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-[380px]">
            {/* Section number and title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-gray-300 text-5xl font-light font-dm-serif">
                {sectionNumber}
              </span>
              <h2 className="mt-4 text-4xl font-bold text-gray-900 font-dm-serif whitespace-pre-line leading-tight">
                {mainTitle}
              </h2>
            </motion.div>

            {/* Features list */}
            <div className="space-y-16">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                >
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: feature.titleColor }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    {feature.description}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.subDescription}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Stacked cards */}
          <div className="flex-1 relative">
            <div className="relative h-[900px]">
              {cards.map((CardComponent, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + idx * 0.2 }}
                  className="absolute"
                  style={{
                    top: `${idx * 260}px`,
                    right: `${(2 - idx) * 20}px`,
                    zIndex: idx + 1,
                  }}
                >
                  <CardComponent />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
