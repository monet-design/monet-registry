"use client";

import { type ReactNode } from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  content: ReactNode;
  colSpan?: "lg:col-span-2" | "lg:col-span-3" | "lg:col-span-4" | "lg:col-span-6";
  maxHeight?: string;
}

interface FeaturesV2Props {
  badge?: string;
  title?: string;
  subtitle?: string;
  cards?: FeatureCardProps[];
  disclaimer?: string;
  className?: string;
}

function FeatureCard({
  title,
  description,
  content,
  colSpan = "lg:col-span-3",
  maxHeight,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "md:p-1.5 bg-muted border border-border shadow-md rounded-[1.4rem] ring-inset *:first:border *:first:border-border *:first:rounded-[1.0rem] w-full h-full overflow-hidden transition-all duration-300 hover:shadow-lg p-1.5",
        colSpan,
        maxHeight
      )}
    >
      <div
        className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border py-6 shadow-sm justify-between h-full overflow-hidden"
        data-slot="card"
      >
        {content}
        <div className="flex flex-col px-6 gap-1.5" data-slot="card-header">
          <div className="text-xl leading-tight font-semibold">{title}</div>
          <p className="text-muted-foreground/70 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

const defaultCards: FeatureCardProps[] = [
  {
    title: "Intelligent Extraction for any Platform",
    description:
      "Smart extraction knows the difference between a tweet and a thread, a URL and a repository. Captures images, comments, code, audio, PDFs—filtering noise while preserving maximum context for intelligent summarization.",
    colSpan: "lg:col-span-3",
    content: (
      <div className="relative flex-1 min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 h-10 md:h-20 w-full bg-linear-to-t from-background to-transparent z-20"></div>
        <div className="pointer-events-none absolute top-0 left-0 h-10 md:h-20 w-full bg-linear-to-b from-background to-transparent z-20"></div>
        <div className="flex items-center justify-center">
          <div className="text-6xl">🧲</div>
        </div>
      </div>
    ),
  },
  {
    title: "Conversational AI for your Bookmarks",
    description:
      'No folders, no searching—just ask. "Find that tweet thread about fundraising" or "Is there any white dress for a wedding I have next month?" AI understands dates, topics, and context. Ask follow-ups to explore deeper',
    colSpan: "lg:col-span-3",
    content: (
      <div className="w-full flex-1 px-4 pb-4 flex flex-col items-center justify-start overflow-visible relative">
        <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-linear-to-t from-background to-transparent z-20"></div>
        <div className="relative flex h-full w-full overflow-hidden">
          <div className="max-w-md mx-auto w-full flex flex-col gap-3 h-[320px] pb-8 pt-4 pointer-events-none">
            <div className="flex items-end justify-end gap-3">
              <div className="max-w-[280px] bg-primary text-white p-4 rounded-2xl ml-auto shadow-[0_0_10px_rgba(0,0,0,0.05)]">
                <p className="text-sm">
                  Hey, can you check if I saved any great deals?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="p-4 bg-accent border border-border rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.05)] w-full">
                <p className="text-sm">
                  Yes! I found 3 great deals you saved last week. Would you like
                  me to show you all the details?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Smart Content Summaries & Analysis",
    description:
      "Every bookmark gets an instant summary. AI distills articles, threads, videos, and GitHub repos into 4-5 lines. Preserving key arguments, important takes, and critical insights. Scan summaries, read what matters.",
    colSpan: "lg:col-span-4",
    maxHeight: "max-h-[500px]",
    content: (
      <div className="w-full flex-1 min-h-[280px] md:min-h-[320px] px-4 flex flex-col items-center justify-start overflow-visible relative select-none">
        <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-linear-to-t from-background to-transparent z-20"></div>
        <div className="relative flex flex-col h-full w-full items-center justify-start overflow-hidden">
          <div className="flex items-center justify-center py-8">
            <Badge className="text-xs">✨ AI Summary</Badge>
          </div>
          <div className="text-center max-w-md">
            <p className="text-sm text-muted-foreground/90 leading-relaxed">
              Discover eco-friendly fashion brands and sustainable shopping tips.
              Focus on quality over quantity, choose natural fibers, support
              ethical brands, and embrace vintage clothing for a greener wardrobe.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Browser Extensions, MCP & Raycast",
    description:
      "Save anywhere: right-click links, highlight text, one-click toolbar. Works across all browsers. MCP for Claude Code/ChatGPT integration. Raycast for power users.",
    colSpan: "lg:col-span-2",
    maxHeight: "max-h-[500px]",
    content: (
      <div className="relative flex h-full w-full items-center justify-center overflow-visible select-none">
        <div className="flex items-center justify-center py-12">
          <div className="text-7xl">🔌</div>
        </div>
      </div>
    ),
  },
  {
    title: "Intelligent Search Beyond Keywords",
    description:
      'Hybrid semantic + vector search understands intent. "Wedding guest outfits" finds "formal dress ideas." "Legal advice contracts" surfaces liability, agreements, terms. Type naturally—"that recipe with garlic and pasta"—and find it instantly.',
    colSpan: "lg:col-span-3",
    content: (
      <div className="relative flex flex-1 w-full min-h-[280px] items-center justify-center overflow-visible select-none">
        <div className="relative w-full max-w-md mx-auto px-4">
          <div className="relative">
            <input
              className="border-input placeholder:text-muted-foreground/60 flex h-9 min-w-0 rounded-md border bg-transparent px-3 shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 w-full focus-visible:ring-2 text-lg py-6 pr-16"
              type="search"
              readOnly
              placeholder="Search bookmarks..."
              value="Find my saved deals"
            />
            <div className="block absolute right-3 top-1/2 -translate-y-1/2">
              <kbd className="inline-flex size-5 items-center justify-center rounded bg-muted px-1.5 text-xs font-medium text-muted-foreground shadow-xs ring ring-inset ring-input/70">
                ⌘
              </kbd>
              <kbd className="inline-flex size-5 items-center justify-center rounded bg-muted px-1.5 text-xs font-medium text-muted-foreground shadow-xs ring ring-inset ring-input/70">
                K
              </kbd>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Effortless Multi-Platform Sync",
    description:
      "Connect once, sync forever. Automatically imports favorites from Twitter, GitHub stars, Reddit saves, YouTube likes, LinkedIn posts. Everything extracted, tagged, and summarized by AI. Wake up to organized bookmarks—no manual work required.",
    colSpan: "lg:col-span-3",
    content: (
      <div className="relative flex h-full w-full min-h-[280px] items-center justify-center">
        <div className="w-full max-w-xl px-2 md:px-4 relative">
          <div className="flex flex-col gap-3 items-center">
            {[
              { name: "Twitter", icon: "𝕏", color: "bg-blue-500/10" },
              { name: "Reddit", icon: "📱", color: "bg-orange-500/10" },
              { name: "GitHub", icon: "⭐", color: "bg-gray-500/10" },
            ].map((platform, i) => (
              <div
                key={i}
                className="relative rounded-2xl bg-background border border-border shadow-sm select-none px-3 py-3 md:px-4 md:py-3.5 flex items-center justify-between w-full"
                style={{ marginTop: i > 0 ? "-12px" : "0" }}
              >
                <div className="flex items-center gap-3 md:gap-4 min-w-0">
                  <div
                    className={cn(
                      "size-10 rounded-md flex items-center justify-center shrink-0",
                      platform.color
                    )}
                  >
                    <span className="text-2xl">{platform.icon}</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="text-sm md:text-base font-medium leading-tight truncate">
                      {platform.name}
                    </div>
                  </div>
                </div>
                <button className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 ml-3 shrink-0">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeaturesV2({
  badge = "Simple, yet powerful",
  title = "Next-Generation Bookmarking powered by AI & Vector search",
  subtitle = "Powerful AI extraction captures everything from GitHub repos to TikTok videos. Semantic and vector search understands what you're looking for, not just keywords. Chat for instant answers, get smart summaries, sync platforms automatically. Advanced features that feel effortless.",
  cards = defaultCards,
  disclaimer = "Please keep in mind we still respect crawlers limits such as robots.txt, so some links or platforms might not be able to be indexed. We will always try our best to ensure we are able to index or figure out context even from the link itself.",
  className,
}: FeaturesV2Props) {
  return (
    <section
      className={cn("relative mt-20 px-3 md:px-0", className)}
      id="features-v2"
    >
      {/* Header */}
      <div className="container z-10 mx-auto mb-10 mt-20 flex w-full flex-col gap-y-2 text-center sm:mb-10 sm:mt-24">
        <Badge
          variant="outline"
          className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs w-fit whitespace-nowrap shrink-0 gap-1 max-w-xs self-center opacity-80 bg-background"
        >
          {badge}
        </Badge>
        <h2 className="relative mx-auto inline-flex max-w-3xl gap-x-2 text-center text-4xl font-bold leading-none tracking-normal md:text-5xl md:tracking-tight">
          {title}
        </h2>
        <p className="text-xs md:text-md mx-auto mt-2 max-w-4xl leading-tight text-muted-foreground/90 md:px-24">
          {subtitle}
        </p>
      </div>

      {/* Background Gradient */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 top-0 z-[-5] pointer-events-none"
        >
          <div className="aspect-video rounded-full bg-linear-to-tl blur-[100px] from-blue-500/70 to-cyan-400/70 opacity-30 dark:from-red-500 dark:to-green-400 dark:opacity-20 h-[718px] w-[855px]"></div>
        </div>

        {/* Cards Grid */}
        <div className="relative z-1 flex flex-col items-center justify-center max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-4 md:gap-2 lg:grid-cols-6">
            {cards.map((card, index) => (
              <FeatureCard key={index} {...card} />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        {disclaimer && (
          <div className="mx-auto mt-4 flex max-w-md md:max-w-xl items-start justify-center gap-x-1 text-center text-xs text-muted-foreground/40 md:[&_p]:text-xxs [&_p]:text-[8px]">
            <svg
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              className="size-3 shrink-0"
            >
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79c-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67c.32-.89 1.27-1.5 2.3-1.28c.95.2 1.65 1.13 1.57 2.1c-.1 1.34-1.62 1.63-2.45 2.88c0 .01-.01.01-.01.02c-.01.02-.02.03-.03.05c-.09.15-.18.32-.25.5c-.01.03-.03.05-.04.08c-.01.02-.01.04-.02.07c-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07c.02-.03.03-.06.05-.09c.08-.14.18-.27.28-.39c.01-.01.02-.03.03-.04c.1-.12.21-.23.33-.34c.96-.91 2.26-1.65 1.99-3.56c-.24-1.74-1.61-3.21-3.35-3.47"
              />
            </svg>
            <p>{disclaimer}</p>
          </div>
        )}
      </div>
    </section>
  );
}
