"use client";

import { motion, AnimatePresence } from "motion/react";
import { Check, CalendarDays, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import "./font.css";

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface TaskManagementFeatureProps {
  title?: string;
  highlightedTitle?: string;
  features?: FeatureItem[];
  ctaText?: string;
  onCtaClick?: () => void;
}

function FeatureCard({
  icon,
  title,
  description,
  index,
  isActive,
  progress,
  onClick,
}: FeatureItem & {
  index: number;
  isActive: boolean;
  progress: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
      onClick={onClick}
      className="relative flex w-full flex-col overflow-hidden rounded-xl bg-white p-4 text-left shadow-sm transition-all hover:shadow-md"
    >
      {/* Progress bar at top border */}
      {isActive && (
        <div className="absolute left-0 top-0 h-0.5 w-full bg-gray-200">
          <motion.div
            className="h-full bg-[#1a1a2e]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      )}
      <div className="flex items-start gap-3">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {icon}
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-bold text-[#1a1a2e] font-satoshi">
            {title}
          </h4>
          <AnimatePresence>
            {isActive && description && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs leading-relaxed text-[#696B77]"
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.button>
  );
}

function CurvedLine() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute -right-6 top-0 h-48 w-20"
      viewBox="0 0 80 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M5 5 C 40 5, 70 40, 70 80 C 70 120, 40 150, 10 170"
        stroke="url(#curveGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      <defs>
        <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#455EF8" />
          <stop offset="100%" stopColor="#A9BEF1" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

const previewImages = [
  "/registry/task-management-feature/preview-capture.png",
  "/registry/task-management-feature/preview-schedule.png",
  "/registry/task-management-feature/preview-collaboration.png",
];

function PreviewImage({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative w-full max-w-[320px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#E6E6E8] bg-white shadow-lg"
        >
          <Image
            src={previewImages[activeIndex]}
            alt={`Feature preview ${activeIndex + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: (
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981]">
        <Check className="h-3 w-3 text-white" strokeWidth={3} />
      </div>
    ),
    title: "Instant task capture",
    description:
      "Global shortcuts to capture tasks anywhere and integrations with your favourite apps (like Slack) to bring tasks in one place.",
  },
  {
    icon: <CalendarDays className="h-4 w-4 text-[#455EF8]" />,
    title: "Plan and schedule tasks in one drag",
    description:
      "Drag tasks directly onto your calendar to schedule them. Visual timeline helps you see your day at a glance.",
  },
  {
    icon: <Users className="h-4 w-4 text-[#455EF8]" />,
    title: "Simplify balance of collaboration and deep work",
    description:
      "Smart notifications and focus mode help you collaborate without interrupting your flow state.",
  },
];

export default function TaskManagementFeature({
  title = "Centralize and prioritize",
  highlightedTitle = "tasks with ease",
  features = defaultFeatures,
  ctaText = "Get Started",
  onCtaClick,
}: TaskManagementFeatureProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % features.length);
    setProgress(0);
  }, [features.length]);

  const handleToggle = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [goToNext]);

  return (
    <section className="w-full bg-[#F3F4F6] px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-6">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-[#1a1a2e] sm:text-4xl"
            >
              {title}
              <br />
              <span className="text-green-600">{highlightedTitle}</span>
            </motion.h2>

            {/* Feature List */}
            <div className="flex flex-col gap-3">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                  index={index}
                  isActive={activeIndex === index}
                  progress={activeIndex === index ? progress : 0}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button
                onClick={onCtaClick}
                className="w-fit rounded-full bg-[#10B981] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#10B981]/30 transition-all hover:bg-[#059669] hover:shadow-[#10B981]/40"
              >
                {ctaText}
              </Button>
            </motion.div>

            {/* Bottom Left Decoration - Chain Links */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-6"
            >
              <svg
                width="48"
                height="24"
                viewBox="0 0 48 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#1a1a2e"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle
                  cx="28"
                  cy="12"
                  r="10"
                  stroke="#1a1a2e"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </motion.div>
          </div>

          {/* Right Column - Preview Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Curved Line Decoration */}
            <CurvedLine />

            {/* Preview Image */}
            <PreviewImage activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
