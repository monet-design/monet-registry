"use client";

const COLORS = {
  light: {
    accent: "#1C1917",
    clay: "#D2886F",
    sand: "#F5F5F0",
    stone: "#E8E6E1",
  },
  dark: {
    accent: "#F5F5F0",
    clay: "#D2886F",
    sand: "#1C1917",
    stone: "#292524",
  },
} as const;

import { motion } from "motion/react";
import { useState } from "react";
import {
  Search,
  Plus,
  Star,
  Bot,
  MessageSquare,
  Code,
  Pencil,
} from "lucide-react";

interface LoadfastStoreDemo8Props {
  mode?: "light" | "dark";
}

export default function LoadfastStoreDemo8({
  mode = "light",
}: LoadfastStoreDemo8Props) {
  const colors = COLORS[mode];
  const [selectedSnippet, setSelectedSnippet] = useState(0);

  const categories = [
    { name: "All", active: true },
    { name: "Favorites", icon: Star },
    { name: "AI Prompts", icon: Bot },
    { name: "Messages", icon: MessageSquare },
    { name: "Code", icon: Code },
  ];

  const snippets = [
    {
      icon: MessageSquare,
      title: "Thank You Message",
      preview: "Thank you for your help! I really appreciate...",
      trigger: ".thanks",
      category: "Messages",
      favorited: true,
      content: "Thank you for your help! I really appreciate it",
    },
    {
      icon: Bot,
      title: "Blog Post Prompt",
      preview: "Write a detailed blog post about [topic] that...",
      trigger: "@gpt",
      category: "AI Prompts",
      favorited: false,
      content:
        "Write a detailed blog post about [topic] that covers key points, includes examples, and engages readers.",
    },
    {
      icon: Code,
      title: "React Component",
      preview: "import React, { useState, useEffect } from 'react';...",
      trigger: ".react",
      category: "Code",
      favorited: true,
      content: `import React, { useState, useEffect } from 'react';

export default function Component() {
  const [state, setState] = useState(null);

  return <div>Hello World</div>;
}`,
    },
    {
      icon: MessageSquare,
      title: "Social Media Post",
      preview: "Hey everyone! Check out this awesome new project...",
      trigger: ".social",
      category: "Messages",
      favorited: false,
      content: "Hey everyone! Check out this awesome new project I've been working on!",
    },
    {
      icon: MessageSquare,
      title: "Meeting Update",
      preview: "I'm running a few minutes late for our...",
      trigger: ".meeting",
      category: "Messages",
      favorited: true,
      content: "I'm running a few minutes late for our meeting. I'll be there in about 5 minutes.",
    },
  ];

  const selected = snippets[selectedSnippet];

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: colors.sand }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col text-center w-full mb-12"
        >
          <p className="font-medium mb-4" style={{ color: colors.clay }}>
            Interactive Demo
          </p>
          <h2
            className="font-serif font-normal text-3xl lg:text-5xl mb-6"
            style={{ color: colors.accent }}
          >
            Create and organize your text snippets
          </h2>
          <p
            className="lg:w-2/3 mx-auto"
            style={{ color: `${colors.accent}99` }}
          >
            Access your most used phrases, templates, and code snippets with a
            few keystrokes!
          </p>
        </motion.div>

        {/* Demo Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto"
        >
          <div
            className="rounded-lg border overflow-hidden"
            style={{
              backgroundColor: colors.stone,
              borderColor: `${colors.accent}1A`,
            }}
          >
            {/* Search Bar */}
            <div
              className="p-4 border-b flex items-center gap-4"
              style={{
                backgroundColor: colors.sand,
                borderColor: `${colors.accent}1A`,
              }}
            >
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
                  style={{ color: `${colors.accent}66` }}
                />
                <input
                  type="text"
                  placeholder="Search snippets..."
                  className="w-full pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none"
                  style={{
                    backgroundColor: colors.sand,
                    borderColor: `${colors.accent}1A`,
                    color: colors.accent,
                  }}
                />
              </div>
              <button
                className="p-2 rounded-md transition-colors"
                style={{ backgroundColor: colors.accent, color: colors.sand }}
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>

            {/* Category Tabs */}
            <div
              className="p-2 border-b flex gap-2 overflow-x-auto"
              style={{
                backgroundColor: colors.sand,
                borderColor: `${colors.accent}1A`,
              }}
            >
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className="px-3 py-1 rounded-md transition-colors flex items-center gap-1 whitespace-nowrap text-sm"
                  style={{
                    backgroundColor: cat.active ? colors.accent : "transparent",
                    color: cat.active ? colors.sand : colors.accent,
                  }}
                >
                  {cat.icon && <cat.icon className="h-4 w-4" />}
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex flex-row overflow-hidden h-[400px] relative">
              {/* Snippet List */}
              <div
                className="w-[35%] border-r overflow-y-auto"
                style={{
                  backgroundColor: colors.sand,
                  borderColor: `${colors.accent}1A`,
                }}
              >
                <div className="p-1">
                  {snippets.map((snippet, i) => {
                    const Icon = snippet.icon;
                    const isSelected = selectedSnippet === i;

                    return (
                      <div
                        key={i}
                        onClick={() => setSelectedSnippet(i)}
                        className="p-3 rounded-md cursor-pointer mb-1 transition-colors"
                        style={{
                          backgroundColor: isSelected
                            ? colors.accent
                            : "transparent",
                          color: isSelected ? colors.sand : colors.accent,
                        }}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1">
                              <Icon
                                className="h-4 w-4 flex-shrink-0"
                                style={{
                                  color: isSelected
                                    ? colors.sand
                                    : `${colors.accent}80`,
                                }}
                              />
                              <div className="font-medium truncate text-sm">
                                {snippet.title}
                              </div>
                            </div>
                            <div
                              className="text-xs truncate pl-7"
                              style={{
                                color: isSelected
                                  ? `${colors.sand}B3`
                                  : `${colors.accent}80`,
                              }}
                            >
                              {snippet.preview}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div
                              className="text-xs px-2 py-0.5 rounded"
                              style={{
                                backgroundColor: isSelected
                                  ? `${colors.sand}33`
                                  : colors.stone,
                                color: isSelected
                                  ? colors.sand
                                  : `${colors.accent}99`,
                              }}
                            >
                              {snippet.trigger}
                            </div>
                            <Star
                              className={`h-4 w-4 flex-shrink-0 ${
                                snippet.favorited ? "fill-current" : ""
                              }`}
                              style={{
                                color: snippet.favorited
                                  ? colors.clay
                                  : `${colors.accent}33`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Snippet Detail */}
              <div
                className="w-[65%] overflow-y-auto"
                style={{ backgroundColor: colors.stone }}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className="text-lg font-medium"
                        style={{ color: colors.accent }}
                      >
                        {selected.title}
                      </h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: `${colors.accent}1A`,
                          color: `${colors.accent}99`,
                        }}
                      >
                        {selected.trigger}
                      </span>
                      <span
                        className="px-2 py-1 text-xs rounded flex items-center gap-1 border"
                        style={{
                          backgroundColor: colors.sand,
                          color: `${colors.accent}B3`,
                          borderColor: `${colors.accent}1A`,
                        }}
                      >
                        <MessageSquare className="h-4 w-4" />
                        {selected.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        style={{
                          color: selected.favorited
                            ? colors.clay
                            : `${colors.accent}66`,
                        }}
                      >
                        <Star
                          className={`h-5 w-5 ${
                            selected.favorited ? "fill-current" : ""
                          }`}
                        />
                      </button>
                      <button style={{ color: `${colors.accent}66` }}>
                        <Pencil className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div
                    className="p-5 rounded-md border"
                    style={{
                      backgroundColor: colors.sand,
                      borderColor: `${colors.accent}1A`,
                    }}
                  >
                    <pre
                      className="whitespace-pre-wrap font-mono text-sm"
                      style={{ color: colors.accent }}
                    >
                      {selected.content}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
