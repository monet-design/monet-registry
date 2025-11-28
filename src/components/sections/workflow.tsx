"use client";

import { Lightbulb, FileText, ListChecks, Code, Rocket, ArrowRight } from "lucide-react";

import { Section } from "../ui/section";

const workflowSteps = [
  {
    icon: Lightbulb,
    title: "Idea",
    description: "Describe your project",
    accent: "yellow",
  },
  {
    icon: FileText,
    title: "PRD & TRD",
    description: "AI generates docs",
    accent: "cyan",
  },
  {
    icon: ListChecks,
    title: "Tasks",
    description: "Actionable items",
    accent: "fuchsia",
  },
  {
    icon: Code,
    title: "Code",
    description: "Cursor builds it",
    accent: "cyan",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Ship your MVP",
    accent: "fuchsia",
  },
];

export default function Workflow() {
  return (
    <Section className="relative border-t-4 border-foreground/10 py-20 overflow-hidden">
      {/* Dramatic diagonal background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-cyan-500/5" style={{ clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)' }} />
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(6,182,212,0.1)_10px,rgba(6,182,212,0.1)_20px)]" />
        </div>
      </div>

      <div className="max-w-container mx-auto">
        <div className="mb-20 text-center">
          <div className="mb-6 inline-block border-4 border-foreground/20 bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 px-6 py-2 font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_rgba(217,70,239,0.2)]">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Complete Workflow
            </span>
          </div>

          <h2 className="mb-4 font-black text-4xl tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            From <span className="text-cyan-400">Idea</span> to{" "}
            <span className="text-fuchsia-400">Production</span>
            <span className="block mt-2 text-foreground">in One Flow</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base text-muted-foreground/90 sm:text-lg font-medium">
            No context switching. No manual coordination. Just pure velocity.
          </p>
        </div>

        {/* Workflow steps - horizontal layout with arrows */}
        <div className="relative mb-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {workflowSteps.map((step, index) => {
              const isYellow = step.accent === "yellow";
              const isCyan = step.accent === "cyan";
              const borderColor = isYellow
                ? "border-yellow-400/60"
                : isCyan
                ? "border-cyan-400/60"
                : "border-fuchsia-400/60";
              const bgColor = isYellow
                ? "bg-yellow-400/10"
                : isCyan
                ? "bg-cyan-400/10"
                : "bg-fuchsia-400/10";
              const textColor = isYellow
                ? "text-yellow-400"
                : isCyan
                ? "text-cyan-400"
                : "text-fuchsia-400";
              const shadowColor = isYellow
                ? "shadow-yellow-500/30"
                : isCyan
                ? "shadow-cyan-500/30"
                : "shadow-fuchsia-500/30";

              return (
                <div key={index} className="flex items-center gap-6 lg:flex-1 lg:flex-col lg:gap-0">
                  {/* Step card */}
                  <div className="group relative flex-1">
                    {/* Number badge */}
                    <div className={`absolute -top-3 -left-3 z-10 flex size-10 items-center justify-center border-2 ${borderColor} bg-background font-mono text-lg font-black ${textColor} shadow-lg ${shadowColor} transition-all group-hover:scale-125 group-hover:rotate-12`}>
                      {index + 1}
                    </div>

                    <div className={`relative border-4 ${borderColor} ${bgColor} p-6 transition-all duration-300 group-hover:shadow-2xl ${shadowColor} group-hover:-translate-y-2`}>
                      {/* Icon */}
                      <div className={`mb-4 flex size-16 items-center justify-center border-2 ${borderColor} ${bgColor} ${shadowColor} shadow-lg transition-all group-hover:scale-110 group-hover:rotate-6`}>
                        <step.icon className={`size-8 ${textColor}`} strokeWidth={2.5} />
                      </div>

                      <h3 className={`mb-1 font-black text-lg uppercase tracking-tight ${textColor}`}>
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-muted-foreground/90">
                        {step.description}
                      </p>

                      {/* Bottom accent */}
                      <div className={`absolute bottom-0 left-0 h-2 w-0 ${isYellow ? 'bg-yellow-400' : isCyan ? 'bg-cyan-400' : 'bg-fuchsia-400'} transition-all duration-300 group-hover:w-full`} />
                    </div>
                  </div>

                  {/* Arrow connector - hidden on last item */}
                  {index < workflowSteps.length - 1 && (
                    <div className="flex shrink-0 items-center justify-center lg:my-6">
                      <ArrowRight className="size-8 text-foreground/40 transition-all lg:rotate-90" strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats - More dramatic */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { value: "4 Weeks", label: "Average MVP Time", accent: "cyan" },
            { value: "Zero", label: "PM Experience Needed", accent: "fuchsia" },
            { value: "100%", label: "AI-Powered", accent: "cyan" },
          ].map((stat, index) => {
            const isCyan = stat.accent === "cyan";
            const borderColor = isCyan ? "border-cyan-400" : "border-fuchsia-400";
            const textColor = isCyan ? "text-cyan-400" : "text-fuchsia-400";
            const shadowColor = isCyan ? "shadow-cyan-500/20" : "shadow-fuchsia-500/20";

            return (
              <div
                key={index}
                className={`group relative border-4 ${borderColor} bg-background/80 p-8 text-center backdrop-blur-sm transition-all hover:shadow-2xl ${shadowColor} hover:-translate-y-2`}
              >
                <div className={`mb-2 font-mono text-5xl font-black ${textColor} transition-all group-hover:scale-110`}>
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>

                {/* Top corner accent */}
                <div className={`absolute top-0 left-0 h-0 w-0 border-l-[24px] border-t-[24px] border-l-transparent ${isCyan ? 'border-t-cyan-400/60' : 'border-t-fuchsia-400/60'} transition-all group-hover:border-l-[32px] group-hover:border-t-[32px]`} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
