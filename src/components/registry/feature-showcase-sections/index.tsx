"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureSection {
  heading: string;
  subheading: string;
  features: FeatureItem[];
  imageSrc: string;
  imageAlt: string;
  showCursorControls?: boolean;
}

interface CursorControlsProps {
  cursorDemo: boolean;
  onCursorDemoChange: (value: boolean) => void;
  movementStyle: string;
  onMovementStyleChange: (value: string) => void;
}

function CursorControls({
  cursorDemo,
  onCursorDemoChange,
  movementStyle,
  onMovementStyleChange,
}: CursorControlsProps) {
  const styles = ["Rapid", "Quick", "Default", "Slow"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="mt-6 flex items-center gap-4"
    >
      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-400">Cursor demo</span>
        <button
          onClick={() => onCursorDemoChange(!cursorDemo)}
          className={`relative h-5 w-9 rounded-full transition-colors ${
            cursorDemo ? "bg-indigo-600" : "bg-zinc-700"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
              cursorDemo ? "translate-x-4" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-400">Movement style</span>
        <div className="flex rounded-md bg-slate-900/90 p-0.5">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => onMovementStyleChange(style)}
              className={`rounded px-2.5 py-1 text-xs transition-colors ${
                movementStyle === style
                  ? "bg-slate-700 text-white"
                  : "text-slate-500 hover:text-slate-400"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface FeatureListProps {
  features: FeatureItem[];
  showCursorControls?: boolean;
}

function FeatureList({ features, showCursorControls = false }: FeatureListProps) {
  const [cursorDemo, setCursorDemo] = useState(true);
  const [movementStyle, setMovementStyle] = useState("Default");

  return (
    <div className="flex flex-col">
      <div className="space-y-0">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`border-l-2 py-3 pl-4 pr-3 transition-colors ${
              index === 0
                ? "border-zinc-600 bg-zinc-900/50 rounded-r-lg"
                : "border-zinc-800 hover:border-zinc-600"
            }`}
          >
            <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
            <p className="mt-1 text-xs leading-relaxed text-zinc-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {showCursorControls && (
        <CursorControls
          cursorDemo={cursorDemo}
          onCursorDemoChange={setCursorDemo}
          movementStyle={movementStyle}
          onMovementStyleChange={setMovementStyle}
        />
      )}
    </div>
  );
}

interface SectionProps {
  section: FeatureSection;
  index: number;
}

function Section({ section, index }: SectionProps) {
  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {section.heading}
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
          {section.subheading}
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
        <FeatureList
          features={section.features}
          showCursorControls={section.showCursorControls}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-xl"
        >
          <div className="relative aspect-video w-full">
            <Image
              src={section.imageSrc}
              alt={section.imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface FeatureShowcaseSectionsProps {
  mode?: "light" | "dark";
  sections?: FeatureSection[];
}

const defaultSections: FeatureSection[] = [
  {
    heading: "Automatic zoom for engaging screen recordings",
    subheading:
      "Make your demos and tutorials easier to follow while grabbing more attention. Especially on smaller screens.",
    features: [
      {
        title: "Automatic zoom",
        description:
          "To focus on the main action, Screen Studio automatically zooms in on actions you perform on your screen.",
      },
      {
        title: "Export in vertical mode",
        description:
          "If you need to export your video for social media, Screen Studio will automatically adjust all the zooms for optimal viewing experience.",
      },
      {
        title: "Manual zoom",
        description:
          "You can also manually pick important parts of your recording. Screen Studio will automatically animate all the zooms.",
      },
      {
        title: "Easy editing",
        description:
          "Simply drag your zooms on the timeline. All the heavy lifting is done automatically. No manual work is required.",
      },
    ],
    imageSrc: "/registry/feature-showcase-sections/zoom-demo.png",
    imageAlt: "Automatic zoom demonstration",
  },
  {
    heading: "Professional animations by default",
    subheading:
      "Screen Studio is a video editor that works automatically. Effects that would take hours of manual work are created instantly.",
    features: [
      {
        title: "Smooth cursor movement",
        description:
          "Shaky and rapid movement of your cursor is transformed into a smooth and beautiful glide.",
      },
      {
        title: "Change cursor size after recording",
        description:
          "Make your video easier to follow by changing the size of the cursor even after you have finished recording.",
      },
      {
        title: "Automatically hide static cursor",
        description:
          "If the cursor doesn't add value to your video - it can be automatically hidden in the final video with beautiful animation.",
      },
      {
        title: "Loop cursor position",
        description:
          "To make social media or demo videos loopable, the cursor can return to its initial position near the end of the final video.",
      },
      {
        title: "High-quality system cursors",
        description:
          "Screen Studio replaces known system cursors with their high-resolution versions if you increase cursor size.",
      },
    ],
    imageSrc: "/registry/feature-showcase-sections/cursor-demo.png",
    imageAlt: "Cursor animation demonstration",
    showCursorControls: true,
  },
];

export default function FeatureShowcaseSections({
  mode = "light",
  sections = defaultSections,
}: FeatureShowcaseSectionsProps) {
  return (
    <section className="w-full bg-black px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {sections.map((section, index) => (
          <Section key={section.heading} section={section} index={index} />
        ))}
      </div>
    </section>
  );
}
