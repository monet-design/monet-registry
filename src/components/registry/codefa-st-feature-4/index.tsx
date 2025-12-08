"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize for your project
// ============================================================================

/**
 * Custom colors (brand colors)
 * - Use Tailwind semantic colors for grayscale text (text-gray-900 etc)
 * - Define only unique brand colors here
 */
const COLORS = {
  light: {
    // Primary accent (buttons, links)
    accent: "#22C55E", // Green for time badges
    accentText: "#166534",
    highlight: "#FACC15", // Yellow highlight
  },
  dark: {
    accent: "#22C55E",
    accentText: "#166534",
    highlight: "#FACC15",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseModule {
  number: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
  items: string[];
}

interface CodefaStFeature4Props {
  mode?: "light" | "dark";
  title?: string;
  highlightedText?: string;
  titleSuffix?: string;
  subtitle?: string;
  modules?: CourseModule[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

const defaultModules: CourseModule[] = [
  {
    number: 1,
    title: "The Mindset",
    description: "Learn to code as an entrepreneur, not an employee",
    icon: "💡",
    duration: "15 minutes",
    items: [
      "How to ship products fast",
      "How to make money with code",
      "Finding motivation to build",
    ],
  },
  {
    number: 2,
    title: "The Fundamentals",
    description:
      "Everything important about web development so you know how to tell the AI what to code for you",
    icon: "🏠",
    duration: "1 hour 15 minutes",
    items: [
      "How the internet works (HTTP, domain names)",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    number: 3,
    title: "Your First SaaS",
    description: "Build and launch a real SaaS business that makes money",
    icon: "💰",
    duration: "10 hours 26 minutes",
    items: [],
    // Categories will be handled separately for this module
  },
];

interface SaaSCategory {
  icon: string;
  title: string;
  items: string[];
}

const saasCategories: SaaSCategory[] = [
  {
    icon: "🎨",
    title: "FRONTEND DEVELOPMENT",
    items: [
      "Next.js application",
      "UI/UX design",
      "Images",
      "Responsive design",
      "React components",
      "SVG & icons",
      "Links",
      "Buttons",
      "Tailwind CSS",
      "Copywriting essentials",
      "Dynamic pages",
      "Form inputs",
    ],
  },
  {
    icon: "🔐",
    title: "BACKEND & AUTHENTICATION",
    items: [
      "Magic link authentication",
      "API routes",
      "Data structures",
      "Google OAuth login",
      "Backend VS. Frontend",
      "Private user dashboard",
      "Database with MongoDB",
      "Cookies",
    ],
  },
  {
    icon: "🚀",
    title: "BUSINESS & DEPLOYMENT",
    items: [
      "Stripe subscriptions",
      "Domain names",
      "LemonSqueezy subscriptions",
      "DNS",
      "Emails",
      "Server hosting",
    ],
  },
  {
    icon: "🛠",
    title: "DEVELOPER TOOLS & SKILLS",
    items: [
      "SEO",
      "Node.js",
      "npm",
      "AI-powered coding 🤖",
      "AI-powered design 🤖",
      "Terminal",
      "Git & GitHub",
      "Security best practices",
      "VSCode extensions",
    ],
  },
];

export default function CodefaStFeature4({
  mode = "light",
  title = "From 0 to SaaS in",
  highlightedText = "12 hours",
  titleSuffix = "of video",
  subtitle = "Everything you need to build an online business, even if you have no experience",
  modules = defaultModules,
  ctaLabel = "Watch a preview 👀",
  onCtaClick,
}: CodefaStFeature4Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`w-full py-16 lg:py-24 ${
        isDark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            {title}{" "}
            <span
              className="relative inline-block"
              style={{ color: colors.highlight }}
            >
              <span className="relative z-10">{highlightedText}</span>
              <span
                className="absolute bottom-0 left-0 right-0 h-3 md:h-4 -z-0 opacity-30"
                style={{ backgroundColor: colors.highlight }}
              />
            </span>{" "}
            {titleSuffix}
          </h2>
          <p
            className={`text-lg italic ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Course Modules Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-xl border overflow-hidden ${
            isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
          }`}
        >
          {/* Top row - 2 columns */}
          <div className="grid md:grid-cols-2">
            {modules.slice(0, 2).map((module, index) => (
              <div
                key={module.number}
                className={`p-6 lg:p-8 relative ${
                  index === 0 ? "md:border-r" : ""
                } ${
                  isDark ? "border-gray-800" : "border-gray-200"
                }`}
              >
                {/* Duration badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: `${colors.accent}20`,
                      color: colors.accent,
                    }}
                  >
                    {module.duration}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-6xl mb-4">{module.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">
                  {module.number}. {module.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm mb-4 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {module.description}
                </p>

                {/* Checklist */}
                <ul className="space-y-2">
                  {module.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            className={`border-t ${
              isDark ? "border-gray-800" : "border-gray-200"
            }`}
          />

          {/* Bottom row - Full width SaaS module */}
          {modules[2] && (
            <div className="p-6 lg:p-8 relative">
              {/* Duration badge */}
              <div className="absolute top-4 right-4">
                <span
                  className="text-xs font-medium px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: `${colors.accent}20`,
                    color: colors.accent,
                  }}
                >
                  {modules[2].duration}
                </span>
              </div>

              {/* Icon */}
              <div className="text-6xl mb-4">{modules[2].icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">
                {modules[2].number}. {modules[2].title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm mb-6 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {modules[2].description}
              </p>

              {/* Categories Grid */}
              <div className="space-y-6">
                {saasCategories.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h4
                      className={`text-xs font-semibold mb-3 flex items-center gap-2 ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <span>{category.icon}</span>
                      {category.title}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start gap-2"
                        >
                          <Check
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <Button
            variant="outline"
            className={`px-8 py-6 text-base font-medium rounded-full ${
              isDark
                ? "border-gray-700 hover:bg-gray-800 text-white"
                : "border-gray-300 hover:bg-gray-50 text-gray-900"
            }`}
            onClick={onCtaClick}
          >
            {ctaLabel}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
