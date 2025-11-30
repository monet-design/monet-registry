"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface SandboxCard {
  id: string;
  title: string;
  type: "code" | "preview" | "image";
  imageUrl?: string;
  bgColor?: string;
}

interface CreativeSandboxesShowcaseProps {
  badge?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  cards?: SandboxCard[];
}

const defaultCards: SandboxCard[] = [
  {
    id: "torus",
    title: "3D Torus",
    type: "image",
    imageUrl: "/registry/creative-sandboxes-showcase/golden-torus.png",
    bgColor: "#1a1a1a",
  },
  {
    id: "code-editor",
    title: "Code Editor",
    type: "code",
    bgColor: "#151515",
  },
  {
    id: "dot-animation",
    title: "Dot Animation",
    type: "preview",
    bgColor: "#0a0a0a",
  },
  {
    id: "clip",
    title: "Paper Clip",
    type: "image",
    imageUrl: "/registry/creative-sandboxes-showcase/paper-clip.png",
    bgColor: "#C2FDE5",
  },
];

function CodeEditorCard() {
  return (
    <div className="h-full w-full overflow-hidden rounded-lg bg-[#151515]">
      {/* Header bar */}
      <div className="flex h-8 items-center gap-2 border-b border-white/5 bg-[#1a1a1a] px-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#27ca40]" />
        </div>
        <span className="ml-2 text-[10px] text-white/40">App.js</span>
      </div>
      {/* Code content */}
      <div className="p-3 font-mono text-[9px] leading-relaxed">
        <div>
          <span className="text-[#c586c0]">import</span>{" "}
          <span className="text-white/80">React</span>
          <span className="text-white/40">,</span>{" "}
          <span className="text-white/40">{"{"}</span>{" "}
          <span className="text-white/80">useMemo</span>
          <span className="text-white/40">,</span>{" "}
          <span className="text-white/80">useRef</span>{" "}
          <span className="text-white/40">{"}"}</span>{" "}
          <span className="text-[#c586c0]">from</span>{" "}
          <span className="text-[#ce9178]">&apos;react&apos;</span>
        </div>
        <div>
          <span className="text-[#c586c0]">import</span>{" "}
          <span className="text-white/40">{"{"}</span>{" "}
          <span className="text-white/80">Canvas</span>
          <span className="text-white/40">,</span>{" "}
          <span className="text-white/80">useFrame</span>{" "}
          <span className="text-white/40">{"}"}</span>{" "}
          <span className="text-[#c586c0]">from</span>{" "}
          <span className="text-[#ce9178]">&apos;@react-three/fiber&apos;</span>
        </div>
        <div className="mt-2">
          <span className="text-[#569cd6]">const</span>{" "}
          <span className="text-[#dcdcaa]">roundedSquareWave</span>{" "}
          <span className="text-white/60">=</span>{" "}
          <span className="text-white/40">(</span>
          <span className="text-[#9cdcfe]">t</span>
          <span className="text-white/40">,</span>{" "}
          <span className="text-[#9cdcfe]">delta</span>
          <span className="text-white/40">,</span>{" "}
          <span className="text-[#9cdcfe]">a</span>
          <span className="text-white/40">,</span>{" "}
          <span className="text-[#9cdcfe]">f</span>
          <span className="text-white/40">)</span>{" "}
          <span className="text-[#569cd6]">=&gt;</span>{" "}
          <span className="text-white/40">{"{"}</span>
        </div>
        <div className="pl-3">
          <span className="text-[#c586c0]">return</span>{" "}
          <span className="text-white/40">(</span>
          <span className="text-[#b5cea8]">2</span>{" "}
          <span className="text-white/60">*</span>{" "}
          <span className="text-[#9cdcfe]">a</span>
          <span className="text-white/40">)</span>{" "}
          <span className="text-white/60">/</span>{" "}
          <span className="text-white/80">Math</span>
          <span className="text-white/40">.</span>
          <span className="text-[#dcdcaa]">PI</span>
        </div>
        <div className="text-white/40">{"}"}</div>
        <div className="mt-2">
          <span className="text-[#569cd6]">function</span>{" "}
          <span className="text-[#dcdcaa]">Dots</span>
          <span className="text-white/40">()</span>{" "}
          <span className="text-white/40">{"{"}</span>
        </div>
        <div className="pl-3">
          <span className="text-[#569cd6]">const</span>{" "}
          <span className="text-[#9cdcfe]">ref</span>{" "}
          <span className="text-white/60">=</span>{" "}
          <span className="text-[#dcdcaa]">useRef</span>
          <span className="text-white/40">()</span>
        </div>
        <div className="pl-3">
          <span className="text-[#569cd6]">const</span>{" "}
          <span className="text-white/40">{"{"}</span>{" "}
          <span className="text-[#9cdcfe]">vec</span>
          <span className="text-white/40">,</span>{" "}
          <span className="text-[#9cdcfe]">transform</span>{" "}
          <span className="text-white/40">{"}"}</span>{" "}
          <span className="text-white/60">=</span>{" "}
          <span className="text-[#dcdcaa]">useMemo</span>
          <span className="text-white/40">()</span>
        </div>
      </div>
    </div>
  );
}

function DotAnimationPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
      {/* Browser chrome */}
      <div className="flex h-6 items-center gap-2 border-b border-white/5 bg-[#1a1a1a] px-2">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="ml-2 flex-1 rounded bg-[#0a0a0a] px-2 py-0.5 text-[8px] text-white/30">
          https://csb.app/
        </div>
      </div>
      {/* Dot grid animation */}
      <div className="relative flex h-[calc(100%-24px)] items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        >
          {/* Create a spiral/wave pattern of dots */}
          {Array.from({ length: 15 }).map((_, rowIdx) =>
            Array.from({ length: 15 }).map((_, colIdx) => {
              const cx = 15 + colIdx * 12;
              const cy = 15 + rowIdx * 12;
              const distFromCenter = Math.sqrt(
                Math.pow(cx - 100, 2) + Math.pow(cy - 100, 2)
              );
              const opacity = Math.max(
                0.3,
                1 - distFromCenter / 100
              );
              const radius = 1.5 + (1 - distFromCenter / 150) * 1;
              return (
                <motion.circle
                  key={`${rowIdx}-${colIdx}`}
                  cx={cx}
                  cy={cy}
                  r={radius}
                  fill="white"
                  initial={{ opacity: 0.2 }}
                  animate={{
                    opacity: [0.2, opacity, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: distFromCenter * 0.01,
                    ease: "easeInOut",
                  }}
                />
              );
            })
          )}
        </svg>
      </div>
    </div>
  );
}

function ImageCard({
  imageUrl,
  bgColor,
}: {
  imageUrl: string;
  bgColor: string;
}) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg"
      style={{ backgroundColor: bgColor }}
    >
      <Image
        src={imageUrl}
        alt="3D Object"
        width={200}
        height={200}
        className="h-auto w-3/4 object-contain"
      />
    </div>
  );
}

function SandboxCardComponent({ card }: { card: SandboxCard }) {
  switch (card.type) {
    case "code":
      return <CodeEditorCard />;
    case "preview":
      return <DotAnimationPreview />;
    case "image":
      return (
        <ImageCard
          imageUrl={card.imageUrl || ""}
          bgColor={card.bgColor || "#1a1a1a"}
        />
      );
    default:
      return null;
  }
}

export default function CreativeSandboxesShowcase({
  badge = "Discover",
  title = "Get inspired\nwith creative\nsandboxes.",
  description = "Like an idea? Take it into your project. It's simple.\nClick, fork, tweak and keep building.",
  ctaText = "Discover new ideas",
  ctaHref = "#",
  cards = defaultCards,
}: CreativeSandboxesShowcaseProps) {
  const titleLines = title.split("\n");
  const descriptionLines = description.split("\n");

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0E0E0E] px-4 py-20">
      {/* Badge */}
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-medium tracking-wide text-white/60">
          {badge}
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
        className="mx-auto mb-16 max-w-4xl text-center font-sans text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {titleLines.map((line, idx) => (
          <span key={idx} className="block">
            {line}
          </span>
        ))}
      </motion.h2>

      {/* Cards Grid */}
      <div className="relative mx-auto mb-16 h-[500px] max-w-5xl md:h-[550px]">
        {/* Left top card - Golden Torus */}
        <motion.div
          className="absolute left-0 top-0 h-48 w-40 md:left-4 md:h-56 md:w-48 lg:left-0"
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <SandboxCardComponent card={cards[0]} />
        </motion.div>

        {/* Center main card - Code Editor */}
        <motion.div
          className="absolute left-1/2 top-12 z-10 h-72 w-64 -translate-x-1/2 shadow-2xl md:left-20 md:top-16 md:h-80 md:w-72 md:translate-x-0 lg:left-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <SandboxCardComponent card={cards[1]} />
        </motion.div>

        {/* Right card - Dot Animation Preview */}
        <motion.div
          className="absolute right-0 top-8 z-20 h-80 w-72 shadow-2xl md:right-4 md:top-12 md:h-96 md:w-96 lg:right-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <SandboxCardComponent card={cards[2]} />
        </motion.div>

        {/* Bottom left card - Paper Clip */}
        <motion.div
          className="absolute bottom-0 left-0 h-44 w-36 md:bottom-4 md:left-8 md:h-52 md:w-44"
          initial={{ opacity: 0, y: 50, rotate: 5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <SandboxCardComponent card={cards[3]} />
        </motion.div>
      </div>

      {/* Description */}
      <motion.p
        className="mx-auto mb-6 max-w-lg text-center text-base text-white/60 md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {descriptionLines.map((line, idx) => (
          <span key={idx} className="block">
            {line}
          </span>
        ))}
      </motion.p>

      {/* CTA Link */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <a
          href={ctaHref}
          className="group inline-flex items-center gap-1 text-base font-medium text-[#C2FDE5] transition-colors hover:text-[#a8f5d8]"
        >
          {ctaText}
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}
