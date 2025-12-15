"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#141414",
    cardBg: "#1C1C1C",
    text: "#FAFAFA",
    textMuted: "#A1A1AA",
    verifiedBadge: "#3B82F6",
  },
  dark: {
    bg: "#141414",
    cardBg: "#1C1C1C",
    text: "#FAFAFA",
    textMuted: "#A1A1AA",
    verifiedBadge: "#3B82F6",
  },
} as const;

const TESTIMONIALS = [
  {
    quote: "gave this a try and holy shit. this is a new productivity unlock",
    author: "@nexxel",
    title: "Co-Founder, mocha.email",
    avatar: "/registry/conductor-build-testimonial-2/avatar-1.jpg",
  },
  {
    quote:
      "This is seriously insane... So much better than VSCode it's making me sick.",
    author: "Richard Waters",
    title: "CEO, Proprietary Innovation Labs",
    avatar: "/registry/conductor-build-testimonial-2/avatar-2.jpg",
  },
  {
    quote:
      "Conductor with multiple repos in multiple workspaces has been insane for my workflow, I feel like a true full stack engineer cross-platform",
    author: "Umar Qattan",
    title: "Sr. Software Engineer, Life360",
    avatar: "/registry/conductor-build-testimonial-2/avatar-3.jpg",
  },
  {
    quote: "Conductor is very good.",
    author: "Joe Choi-Greene",
    title: "Co-Founder and CTO, Clearly AI",
    avatar: "/registry/conductor-build-testimonial-2/avatar-4.jpeg",
  },
  {
    quote: "Loving using Conductor so far! Do give it a try.",
    author: "Ovais Tariq",
    title: "Co-Founder and CEO, Tigris Data",
    avatar: "/registry/conductor-build-testimonial-2/avatar-5.jpg",
  },
  {
    quote: "Future of AI software-making looks something like this",
    author: "Raphael Schaad",
    title: "Founder Cron, Design @ Notion",
    avatar: "/registry/conductor-build-testimonial-2/avatar-6.jpg",
  },
  {
    quote:
      "If you want to run multiple Claude Code agents at the same time, use Conductor. Beautiful UI and handles all the git worktree stuff for you!",
    author: "Ian Nuttall",
    title: "serial internet biz builder",
    avatar: "/registry/conductor-build-testimonial-2/avatar-7.jpg",
  },
  {
    quote:
      "It took some adjustment, but now I can't imagine building without @conductor_build",
    author: "Cole Bemis",
    title: "Design Engineer, Notion",
    avatar: "/registry/conductor-build-testimonial-2/avatar-8.jpeg",
  },
  {
    quote:
      "Is Conductor the new Cursor? Just used it for the first time and it's lovely",
    author: "Stammy",
    title: "Head of Design, Sesame",
    avatar: "/registry/conductor-build-testimonial-2/avatar-9.jpg",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Image from "next/image";
import { BadgeCheck } from "lucide-react";

interface ConductorBuildTestimonial2Props {
  mode?: "light" | "dark";
}

export default function ConductorBuildTestimonial2({
  mode = "dark",
}: ConductorBuildTestimonial2Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full py-16" style={{ backgroundColor: colors.bg }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid rounded-lg p-6"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Quote */}
              <p
                className="mb-4 font-mono text-sm leading-relaxed"
                style={{ color: colors.text }}
              >
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span
                      className="font-mono text-sm font-medium"
                      style={{ color: colors.text }}
                    >
                      {testimonial.author}
                    </span>
                    <BadgeCheck
                      className="h-4 w-4"
                      style={{ color: colors.verifiedBadge }}
                    />
                  </div>
                  <span
                    className="font-mono text-xs"
                    style={{ color: colors.textMuted }}
                  >
                    {testimonial.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
