"use client";

import { FileText, Zap, Users, Workflow } from "lucide-react";

import { Section } from "../ui/section";

const features = [
  {
    icon: FileText,
    title: "PRD/TRD Automation",
    description:
      "Answer simple questions, get professional PRD and TRD documents instantly. No PM experience needed.",
    accent: "cyan",
  },
  {
    icon: Zap,
    title: "Fast MVP Delivery",
    description:
      "From idea to deployed MVP in weeks, not months. 90% faster than traditional development.",
    accent: "fuchsia",
  },
  {
    icon: Users,
    title: "Built for Solo Devs",
    description:
      "Perfect for solo developers and small teams. No dedicated PM required.",
    accent: "cyan",
  },
  {
    icon: Workflow,
    title: "Seamless Integration",
    description:
      "MCP integration with Cursor and AI coding tools. One workflow, end-to-end.",
    accent: "fuchsia",
  },
];

export default function WhyVooster() {
  return (
    <Section className="border-t-4 border-foreground/10 py-20">
      <div className="max-w-container mx-auto">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-block border-4 border-foreground/20 bg-background px-6 py-2 font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_rgba(6,182,212,0.2)]">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Why Vooster?
            </span>
          </div>
          <h2 className="mx-auto mb-4 max-w-3xl font-black text-4xl tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Traditional dev is{" "}
            <span className="relative inline-block">
              <span className="relative z-10">slow</span>
              <span className="absolute inset-0 -rotate-2 bg-red-500/20 border-2 border-red-500/40" style={{ transform: 'rotate(-2deg) translateY(2px)' }} />
            </span>
            .{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Ship faster.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground/80 sm:text-lg font-medium">
            Vooster bridges the gap between ideas and code with AI-powered automation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const isCyan = feature.accent === "cyan";
            const borderColor = isCyan ? "border-cyan-400/40" : "border-fuchsia-400/40";
            const bgColor = isCyan ? "bg-cyan-400/5" : "bg-fuchsia-400/5";
            const textColor = isCyan ? "text-cyan-400" : "text-fuchsia-400";
            const shadowColor = isCyan ? "shadow-cyan-500/20" : "shadow-fuchsia-500/20";
            const hoverShadow = isCyan ? "hover:shadow-cyan-500/40" : "hover:shadow-fuchsia-500/40";

            return (
              <div
                key={index}
                className={`group relative border-2 ${borderColor} ${bgColor} p-6 transition-all duration-300 hover:shadow-xl ${hoverShadow} hover:-translate-y-1`}
              >
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 h-0 w-0 border-l-[20px] border-t-[20px] border-l-transparent ${isCyan ? 'border-t-cyan-400/60' : 'border-t-fuchsia-400/60'} transition-all group-hover:border-l-[30px] group-hover:border-t-[30px]`} />

                {/* Icon */}
                <div className={`mb-4 inline-flex size-14 items-center justify-center border-2 ${borderColor} ${bgColor} ${shadowColor} shadow-lg transition-all group-hover:scale-110 group-hover:rotate-6`}>
                  <feature.icon className={`size-7 ${textColor}`} strokeWidth={2.5} />
                </div>

                {/* Number badge */}
                <div className={`absolute top-3 left-3 flex size-8 items-center justify-center border-2 ${borderColor} bg-background font-mono text-xs font-black ${textColor}`}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className={`mb-3 font-black text-base uppercase tracking-tight ${textColor}`}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground/90">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 ${isCyan ? 'bg-cyan-400' : 'bg-fuchsia-400'} transition-all duration-300 group-hover:w-full`} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
