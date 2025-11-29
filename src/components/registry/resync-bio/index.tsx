"use client";

import { motion } from "motion/react";
import { MousePointer2 } from "lucide-react";
import Image from "next/image";

interface ComparisonItem {
  before: string;
  after: string;
}

interface ResyncBioProps {
  title?: string;
  comparisonItems?: ComparisonItem[];
  compoundId?: string;
  compoundStatus?: string;
  statusLabel?: string;
  ctaText?: string;
  moleculeImage?: string;
}

function BeforeAfterItem({
  before,
  after,
  index,
}: {
  before: string;
  after: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex items-start gap-2"
    >
      {/* Bullet */}
      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />

      {/* Cards container */}
      <div className="grid flex-1 grid-cols-2 gap-2">
        {/* Before Card */}
        <div className="rounded-lg bg-[#EFEFEF] px-3 py-2">
          <p className="text-[10px] leading-relaxed text-gray-500">{before}</p>
        </div>

        {/* After Card */}
        <div className="rounded-lg bg-[#F5F2F7] px-3 py-2">
          <p className="text-[10px] font-medium leading-relaxed text-gray-700">{after}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ProductCard({
  compoundId,
  compoundStatus,
  statusLabel,
  ctaText,
  moleculeImage,
}: {
  compoundId: string;
  compoundStatus: string;
  statusLabel: string;
  ctaText: string;
  moleculeImage: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative h-full w-full overflow-hidden rounded-2xl p-4"
      style={{
        background: "linear-gradient(135deg, #F5F1F7 0%, #E8D4F0 50%, #E1B8EE 100%)",
      }}
    >
      {/* Top Status Badge */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-gray-600 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
          {statusLabel}
        </div>
        <div className="rounded-full border border-[#86EFAC] bg-[#DCFCE7] px-2 py-0.5 text-[9px] font-medium text-[#22C55E]">
          Available
        </div>
      </div>

      {/* Main Card */}
      <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
        {/* Compound ID */}
        <h3 className="mb-2 text-center text-sm font-semibold text-gray-800">
          {compoundId}
        </h3>

        {/* Status Badge */}
        <div className="mb-3 flex justify-center">
          <span className="rounded-md bg-[#4ADE80] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            {compoundStatus}
          </span>
        </div>

        {/* Molecule Image */}
        <div className="flex justify-center">
          <div className="relative h-28 w-full max-w-[160px]">
            <Image
              src={moleculeImage}
              alt="Molecular structure"
              fill
              className="object-contain"
              sizes="160px"
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA with cursor */}
      <div className="mt-3 flex items-center justify-end gap-1">
        <span className="text-[9px] font-medium uppercase tracking-wider text-gray-500">
          {ctaText}
        </span>
        <MousePointer2 className="h-3.5 w-3.5 rotate-[135deg] text-gray-500" />
      </div>
    </motion.div>
  );
}

export default function ResyncBio({
  title = "Acceleration",
  comparisonItems = [
    {
      before: "Manual bottlenecks for assays & synthesis",
      after: "Automated, rules-based decision making",
    },
    {
      before: "Parsing CRO emails",
      after: "Visualize results in minutes",
    },
    {
      before: "Hiring or contracting to build bespoke data flows",
      after: "Plug-and-play solution that preserves your time, runway, and sanity",
    },
  ],
  compoundId = "RSNC-VC-266",
  compoundStatus = "ASSAYED",
  statusLabel = "IC50 Readout",
  ctaText = "REQUEST TIER 2 ASSAY",
  moleculeImage = "/registry/resync-bio/molecule.png",
}: ResyncBioProps) {
  return (
    <section className="w-full bg-[#FAFAFA] px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          {/* Left Side - Title and Comparison */}
          <div className="max-w-md flex-1">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-2xl font-light tracking-tight text-gray-900 sm:text-3xl"
            >
              {title}
            </motion.h2>

            {/* Before/After Labels */}
            <div className="mb-3 flex items-start gap-2">
              <div className="h-1.5 w-1.5 shrink-0 opacity-0" />
              <div className="grid flex-1 grid-cols-2 gap-2">
                <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-gray-400">
                  Before
                </p>
                <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-purple-400">
                  After
                </p>
              </div>
            </div>

            {/* Comparison Items */}
            <div className="flex flex-col gap-2">
              {comparisonItems.map((item, index) => (
                <BeforeAfterItem
                  key={index}
                  before={item.before}
                  after={item.after}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Product Card */}
          <div className="flex shrink-0 items-start justify-center lg:mt-1 lg:justify-end">
            <div className="h-[290px] w-[260px]">
              <ProductCard
                compoundId={compoundId}
                compoundStatus={compoundStatus}
                statusLabel={statusLabel}
                ctaText={ctaText}
                moleculeImage={moleculeImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
