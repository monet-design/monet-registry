"use client";

import { Check, MoveRight, Sparkles } from "lucide-react";

import { Section } from "../ui/section";

const steps = [
  {
    number: "01",
    title: "Answer Questions",
    description: "Simple guided questions about your idea, users, and features",
  },
  {
    number: "02",
    title: "AI Generates Docs",
    description: "Professional PRD and TRD created instantly with best practices",
  },
  {
    number: "03",
    title: "Tasks Ready",
    description: "Broken down into actionable tasks with clear priorities",
  },
];

const benefits = [
  "No PM experience required",
  "Industry-standard documentation",
  "Instant task breakdown",
  "Export and share anywhere",
];

export default function PRDAutomation() {
  return (
    <Section className="relative border-t-4 border-foreground/10 py-20 overflow-hidden">
      {/* Diagonal background split */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 80%)' }} />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(45deg,transparent_48%,rgba(6,182,212,0.3)_49%,rgba(6,182,212,0.3)_51%,transparent_52%)] bg-[length:20px_20px]" />
        </div>
      </div>

      <div className="max-w-container mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="relative space-y-8">
            {/* Accent decoration */}
            <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-fuchsia-400 to-transparent" />

            <div className="inline-flex items-center gap-2 border-2 border-fuchsia-400/40 bg-fuchsia-400/5 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-fuchsia-400 shadow-lg shadow-fuchsia-500/20">
              <Sparkles className="size-3.5" />
              <span>Core Feature</span>
            </div>

            <h2 className="font-black text-5xl tracking-tight leading-[1.05] sm:text-6xl">
              Professional
              <span className="block mt-1 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                PRD & TRD
              </span>
              <span className="block mt-1 text-foreground">in Minutes</span>
            </h2>

            <p className="max-w-lg text-base leading-relaxed text-muted-foreground/90 font-medium border-l-4 border-cyan-400/40 pl-4">
              Stop struggling with blank documents. Vooster's AI understands
              product development and guides you through creating comprehensive
              specifications that developers can actually use.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex size-6 shrink-0 items-center justify-center border-2 border-cyan-400 bg-cyan-400/10 transition-all group-hover:bg-cyan-400 group-hover:scale-110">
                    <Check className="size-4 text-cyan-400 transition-colors group-hover:text-background" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-cyan-400 transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Process Steps */}
          <div className="relative space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="group relative border-4 border-foreground/20 bg-background p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-x-2">
                  {/* Number badge - positioned absolutely outside */}
                  <div className="absolute -left-4 -top-4 flex size-16 items-center justify-center border-4 border-foreground/20 bg-gradient-to-br from-cyan-400 to-fuchsia-400 font-mono text-2xl font-black text-background shadow-lg transition-all group-hover:scale-110 group-hover:rotate-6">
                    {step.number}
                  </div>

                  <div className="ml-4 space-y-2">
                    <h3 className="font-black text-lg uppercase tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground/90">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full" />
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="my-4 flex items-center gap-2 pl-20">
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent" />
                    <MoveRight className="size-6 text-cyan-400/60" strokeWidth={2} />
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/40" />
                  </div>
                )}
              </div>
            ))}

            {/* Decorative geometric shape */}
            <div className="absolute -right-8 -bottom-8 h-32 w-32 border-4 border-fuchsia-400/20 -z-10 animate-spin" style={{ animationDuration: '20s', clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
          </div>
        </div>
      </div>
    </Section>
  );
}
