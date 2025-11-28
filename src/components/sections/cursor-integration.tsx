"use client";

import { Code2, GitBranch, Workflow as WorkflowIcon, Rocket, Link2 } from "lucide-react";

import { Section } from "../ui/section";

const integrationFeatures = [
  {
    icon: Code2,
    title: "MCP Protocol",
    description: "Native integration with Cursor via Model Context Protocol",
  },
  {
    icon: GitBranch,
    title: "Context Sync",
    description: "PRD and tasks automatically sync to your coding environment",
  },
  {
    icon: WorkflowIcon,
    title: "Task-to-Code",
    description: "AI understands requirements and generates accurate code",
  },
  {
    icon: Rocket,
    title: "One Workflow",
    description: "Plan, code, and deploy without switching tools",
  },
];

export default function CursorIntegration() {
  return (
    <Section className="relative border-t-4 border-foreground/10 bg-gradient-to-b from-cyan-400/5 to-transparent py-20">
      {/* Background pattern */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.15)_0%,_transparent_50%),_radial-gradient(circle_at_80%_20%,_rgba(217,70,239,0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="max-w-container mx-auto">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 border-2 border-cyan-400/40 bg-cyan-400/5 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-400 shadow-lg shadow-cyan-500/20">
            <Link2 className="size-3.5" />
            <span>Seamless Integration</span>
          </div>

          <h2 className="mb-4 font-black text-4xl tracking-tight sm:text-5xl lg:text-6xl leading-tight">
            Built for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                Cursor & AI Coding
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,4 Q25,0 50,4 T100,4" stroke="currentColor" strokeWidth="3" fill="none" className="text-cyan-400/40" />
              </svg>
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base text-muted-foreground/90 sm:text-lg font-medium">
            Vooster connects directly to Cursor via MCP, creating a unified
            workflow from ideation to implementation. Your AI PM and AI
            Developer working together.
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {integrationFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative border-2 border-foreground/10 bg-background/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
            >
              {/* Rotating border effect */}
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-fuchsia-400/10" />
              </div>

              <div className="mb-4 inline-flex size-12 items-center justify-center border-2 border-cyan-400/40 bg-cyan-400/10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:border-cyan-400 group-hover:bg-cyan-400/20 group-hover:shadow-cyan-500/40">
                <feature.icon className="size-6 text-cyan-400" strokeWidth={2.5} />
              </div>

              <h3 className="mb-2 font-black text-sm uppercase tracking-tight text-foreground group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground/90">
                {feature.description}
              </p>

              {/* Index number */}
              <div className="absolute top-3 right-3 font-mono text-xs font-black text-foreground/10 transition-colors group-hover:text-cyan-400/30">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Flow - More dramatic */}
        <div className="relative overflow-hidden border-4 border-foreground/20 bg-background/95 p-10 shadow-[16px_16px_0_0_rgba(6,182,212,0.15)]">
          {/* Animated background */}
          <div className="absolute inset-0 -z-0">
            <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(6,182,212,0.03)_50%,transparent_100%)] animate-pulse" style={{ animationDuration: '3s' }} />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Vooster side */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block border-4 border-cyan-400 bg-cyan-400/10 px-6 py-3 font-mono text-lg font-black text-cyan-400 shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 hover:bg-cyan-400/20">
                VOOSTER
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                {['PRD', 'TRD', 'Tasks'].map((item, i) => (
                  <span key={i} className="border border-foreground/20 bg-foreground/5 px-2 py-1 font-mono text-[10px] font-bold text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Connection */}
            <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent md:h-px md:w-20" />

              <div className="relative">
                <div className="flex items-center gap-2 border-2 border-fuchsia-400 bg-fuchsia-400/10 px-4 py-2 font-mono text-sm font-black text-fuchsia-400 shadow-lg shadow-fuchsia-500/30">
                  <div className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
                  <span>MCP</span>
                </div>
                {/* Pulse rings */}
                <div className="absolute inset-0 -z-10 animate-ping border-2 border-fuchsia-400/40" style={{ animationDuration: '2s' }} />
              </div>

              <div className="h-12 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent md:h-px md:w-20" />
            </div>

            {/* Cursor side */}
            <div className="flex-1 text-center md:text-right">
              <div className="inline-block border-4 border-cyan-400 bg-cyan-400/10 px-6 py-3 font-mono text-lg font-black text-cyan-400 shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 hover:bg-cyan-400/20">
                CURSOR
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-end">
                {['AI Coding', 'Deploy'].map((item, i) => (
                  <span key={i} className="border border-foreground/20 bg-foreground/5 px-2 py-1 font-mono text-[10px] font-bold text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 h-8 w-8 border-l-4 border-t-4 border-cyan-400/40" />
          <div className="absolute bottom-0 right-0 h-8 w-8 border-r-4 border-b-4 border-fuchsia-400/40" />
        </div>
      </div>
    </Section>
  );
}
