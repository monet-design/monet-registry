"use client";

import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Section } from "../ui/section";
import { CheckCircleIcon } from "lucide-react";

interface StepCardProps {
  title: string;
  subtitle?: string;
  bgGradient: string;
  content: ReactNode;
  className?: string;
}

interface ListItem {
  text: string;
}

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps?: StepCardProps[];
  className?: string;
}

function StepCard({
  title,
  subtitle,
  bgGradient,
  content,
  className,
}: StepCardProps) {
  return (
    <div className={cn("rounded-3xl p-6 md:p-10", bgGradient, className)}>
      {content}
    </div>
  );
}

function FeatureList({ items }: { items: ListItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircleIcon className="size-5 text-green-600 mt-0.5 shrink-0" />
          <span className="text-gray-800">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HowItWorks({
  title = "How It Works",
  subtitle = "Just 3 simple steps to create amazing designs",
  steps = [
    {
      title: "Simply chat your idea",
      bgGradient:
        "bg-gradient-to-br from-[#D6CBFF] to-[#CCBEFF] ring-1 ring-purple-300/50",
      className: "min-h-[250px]",
      content: (
        <>
          <h3 className="text-3xl font-medium text-[#151515] mb-5 mt-20 ml-5">
            Simply chat your idea
          </h3>
          <img
            src="/prompt_box.png"
            alt="Prompt Box"
            className="w-full h-full object-cover"
          />
        </>
      ),
    },
    {
      title: "Get editable designs",
      subtitle: "and not static images",
      bgGradient: "bg-gradient-to-br from-[#FFEACD] to-[#FFDEB0]",
      className: "min-h-[350px]",
      content: (
        <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm min-h-[300px]">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="w-full mt-7">
              <img
                src="/prompt_results.png"
                alt="Prompt Results"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-full self-start mt-3">
              <h3 className="text-3xl font-medium text-[#151515] mt-0 whitespace-nowrap">
                Get editable designs
              </h3>
              <p className="text-gray-600 text-[10px] md:text-xs leading-tight mb-6">
                and not static images
              </p>
              <FeatureList
                items={[
                  { text: "100% layered design" },
                  { text: "Truly prompt following" },
                  { text: "You own what you create" },
                ]}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Open in the editor",
      subtitle: "and take full control",
      bgGradient: "bg-gradient-to-br from-[#CDFFF4] to-[#6EC6B3]",
      className: "min-h-[250px]",
      content: (
        <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="w-full self-start mt-3">
              <h3 className="text-3xl font-medium text-[#151515] mt-0 whitespace-nowrap">
                Open in the editor
              </h3>
              <p className="text-gray-600 text-[10px] md:text-xs leading-tight mb-6">
                and take full control
              </p>
              <FeatureList
                items={[
                  { text: "Edit everything like canva" },
                  { text: "Ask AI for changes" },
                  { text: "Want to add images? Add" },
                  { text: "Custom font? Yes" },
                ]}
              />
            </div>
            <div className="w-full">
              <video
                autoPlay
                loop
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src="/editing.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      ),
    },
  ],
  className,
}: HowItWorksProps) {
  return (
    <Section
      id="how-it-works-section"
      className={cn("bg-white py-16 px-4 pt-20", className)}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </Section>
  );
}
