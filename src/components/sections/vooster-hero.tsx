"use client";

import { ArrowRightIcon, Sparkles } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Glow from "../ui/glow";
import { Section } from "../ui/section";

export default function VoosterHero() {
  return (
    <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="relative">
        {/* Background Glow Effects */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-primary/15 blur-3xl" />
        </div>

        <div className="max-w-container mx-auto flex flex-col gap-10 py-16 md:flex-row md:items-center md:py-24">
          {/* Left: Copy */}
          <div className="flex-1 space-y-6">
            <Badge
              variant="outline"
              className="animate-appear inline-flex items-center gap-2 border-primary/20 bg-primary/5 px-3 py-1"
            >
              <Sparkles className="size-3 text-primary" />
              <span className="text-xs font-medium text-foreground">
                The AI PM Agent for Vibe Coding
              </span>
            </Badge>

            <h1 className="animate-appear text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              From Idea to Code in{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-blue-400 bg-clip-text text-transparent">
                Minutes, Not Weeks
              </span>
            </h1>

            <p className="animate-appear max-w-xl text-balance text-sm text-muted-foreground opacity-0 delay-100 sm:text-base">
              Vooster automates PRD, TRD, and task generation. Connect with
              Cursor and transform your ideas into production-ready code with
              AI-powered project management.
            </p>

            <div className="animate-appear flex flex-wrap items-center gap-3 opacity-0 delay-300">
              <Button
                size="lg"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold shadow-lg shadow-primary/40 hover:bg-primary/90"
                asChild
              >
                <a href={siteConfig.getStartedUrl}>
                  Get Started Free
                  <ArrowRightIcon className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border px-6 py-3 text-sm font-medium hover:border-primary/50 hover:bg-primary/5"
                asChild
              >
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-appear flex flex-wrap items-center gap-6 pt-4 opacity-0 delay-500">
              <div className="space-y-1">
                <div className="text-2xl font-semibold text-foreground">
                  5,000+
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Developers
                </div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="space-y-1">
                <div className="text-2xl font-semibold text-foreground">
                  90%
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Faster MVP
                </div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="space-y-1">
                <div className="text-2xl font-semibold text-foreground">
                  1M+
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Tasks Generated
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-0 -z-10 blur-3xl">
                <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(37,99,235,0.2),_transparent_55%)]" />
              </div>

              <div className="animate-appear rounded-2xl border border-border bg-card/70 p-6 shadow-2xl shadow-primary/20 opacity-0 delay-700 backdrop-blur-xl">
                {/* Mock UI - PRD Generation Interface */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-border pb-3">
                    <div className="size-2 rounded-full bg-primary" />
                    <span className="text-xs font-semibold text-foreground">
                      PRD Generator
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-lg border border-border bg-muted/30 p-3">
                      <div className="mb-1 text-[10px] font-medium text-muted-foreground">
                        Project Idea
                      </div>
                      <div className="text-xs text-foreground">
                        AI-powered email template automation tool
                      </div>
                    </div>

                    <div className="rounded-lg border border-border bg-muted/30 p-3">
                      <div className="mb-1 text-[10px] font-medium text-muted-foreground">
                        Target Users
                      </div>
                      <div className="text-xs text-foreground">
                        Solo developers & startups
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="h-1 flex-1 rounded-full bg-primary/20">
                        <div className="h-full w-3/4 rounded-full bg-primary" />
                      </div>
                      <span className="text-[10px] font-medium text-muted-foreground">
                        75%
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-primary/30 bg-primary/10 p-2">
                    <span className="text-[10px] font-medium text-primary">
                      Generating PRD & TRD...
                    </span>
                    <div className="flex gap-1">
                      <div className="size-1 animate-bounce rounded-full bg-primary delay-0" />
                      <div className="size-1 animate-bounce rounded-full bg-primary delay-100" />
                      <div className="size-1 animate-bounce rounded-full bg-primary delay-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
