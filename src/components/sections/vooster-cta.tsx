"use client";

import { ArrowRight, Sparkles, Zap } from "lucide-react";

import { siteConfig } from "@/config/site";

import { Button } from "../ui/button";
import { Section } from "../ui/section";

export default function VoosterCTA() {
  return (
    <Section className="relative border-t-4 border-foreground/10 py-24 overflow-hidden">
      {/* Explosive background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.2)_0%,_transparent_50%),_radial-gradient(circle_at_80%_80%,_rgba(217,70,239,0.2)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
      </div>

      <div className="max-w-container mx-auto">
        <div className="relative">
          {/* Main CTA container with dramatic styling */}
          <div className="relative border-8 border-foreground/20 bg-background p-12 shadow-[20px_20px_0_0_rgba(6,182,212,0.2)] sm:p-16 lg:p-20">
            {/* Noise texture */}
            <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.02] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

            <div className="relative z-10 flex flex-col items-center gap-10 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border-2 border-cyan-400/40 bg-cyan-400/5 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-400 shadow-lg shadow-cyan-500/20">
                <Sparkles className="size-4" />
                <span>Start Building Today</span>
              </div>

              {/* Headline */}
              <h2 className="max-w-4xl font-black text-4xl tracking-tight leading-[1.1] sm:text-5xl lg:text-7xl">
                Ready to turn{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-cyan-400">ideas</span>
                  <div className="absolute inset-0 -rotate-1 border-4 border-cyan-400/40 -z-10" />
                </span>
                {" "}into{" "}
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  production code?
                </span>
              </h2>

              {/* Description */}
              <p className="max-w-2xl text-base text-muted-foreground/90 sm:text-lg font-medium">
                Join <span className="font-black text-cyan-400">5,000+</span> developers who ship faster with AI-powered product
                management. Free plan available, no credit card required.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                <Button
                  size="lg"
                  className="group relative overflow-hidden border-4 border-cyan-400 bg-cyan-400 px-10 py-7 text-lg font-black uppercase tracking-wider text-background shadow-[8px_8px_0_0_rgba(6,182,212,0.5)] transition-all hover:shadow-[12px_12px_0_0_rgba(6,182,212,0.7)] hover:translate-x-[-4px] hover:translate-y-[-4px]"
                  asChild
                >
                  <a href={siteConfig.getStartedUrl}>
                    <span className="relative z-10 flex items-center gap-2">
                      <Zap className="size-5" />
                      Start Free
                      <ArrowRight className="size-5 transition-transform group-hover:translate-x-2" />
                    </span>
                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-300 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-4 border-foreground/20 bg-transparent px-10 py-7 text-lg font-black uppercase tracking-wider shadow-[8px_8px_0_0_rgba(255,255,255,0.1)] transition-all hover:border-fuchsia-400/50 hover:shadow-[12px_12px_0_0_rgba(217,70,239,0.2)] hover:translate-x-[-4px] hover:translate-y-[-4px]"
                  asChild
                >
                  <a href="https://discord.gg/vooster">Join Discord</a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
                {[
                  { icon: "✓", text: "Free plan available" },
                  { icon: "✓", text: "No credit card required" },
                  { icon: "✓", text: "3 projects included" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 border-2 border-foreground/10 bg-foreground/5 px-4 py-2 backdrop-blur-sm">
                    <span className="font-mono text-sm font-black text-cyan-400">{item.icon}</span>
                    <span className="font-mono text-xs font-bold text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 right-0 h-16 w-16 border-r-4 border-t-4 border-cyan-400/60" />
            <div className="absolute bottom-0 left-0 h-16 w-16 border-b-4 border-l-4 border-fuchsia-400/60" />
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -right-12 -top-12 h-32 w-32 border-4 border-fuchsia-400/30 animate-spin -z-10" style={{ animationDuration: '20s', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
          <div className="absolute -bottom-12 -left-12 h-24 w-24 bg-cyan-400/10 border-4 border-cyan-400/40 -z-10 animate-pulse" style={{ animationDuration: '3s' }} />
        </div>
      </div>
    </Section>
  );
}
