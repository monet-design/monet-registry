"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Users, TrendingUp, Cpu } from "lucide-react";

interface FureyHeroProps {
  badge?: string;
  title?: string;
  description?: string;
  inputPlaceholder?: string;
  buttonText?: string;
  teamImageSrc?: string;
  onSubmit?: (email: string) => void;
}

// Feature tag component
function FeatureTag({
  icon: Icon,
  title,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm"
      style={{ border: "1px solid #F0EDE9" }}
    >
      <div
        className="flex h-7 w-7 items-center justify-center rounded-md"
        style={{ backgroundColor: "#FEF3EE" }}
      >
        <Icon className="h-4 w-4" style={{ color: "#F16E2E" }} />
      </div>
      <span className="text-xs font-medium text-gray-700">{title}</span>
    </motion.div>
  );
}

// Bar chart component
function BarChart() {
  const bars = [40, 65, 50, 80, 95, 70, 85];

  return (
    <div className="flex items-end gap-1.5 h-20">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          className="w-4 rounded-sm"
          style={{ backgroundColor: "#F27241" }}
        />
      ))}
    </div>
  );
}

// Avatar stack component
function AvatarStack() {
  const colors = ["#F27241", "#2A3743", "#7B8288"];

  return (
    <div className="flex -space-x-2">
      {colors.map((color, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
          className="h-8 w-8 rounded-full border-2 border-white"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export default function FureyHero({
  title = "Dynamic solutions\nthat power high-growth\nstartups",
  description = "Accounting, finance, and payroll to help you move\nforward confidently.",
  inputPlaceholder = "Enter email",
  buttonText = "Let's talk",
  teamImageSrc = "/registry/furey-hero/team-collaboration.jpg",
  onSubmit,
}: FureyHeroProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    onSubmit?.(email);
  };

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "#FDFAF8" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            {/* Title */}
            <h1
              className="text-4xl font-normal leading-tight tracking-tight md:text-5xl lg:text-[56px]"
              style={{
                color: "#1A1A1A",
                fontFamily: "'DM Serif Display', serif",
                whiteSpace: "pre-line",
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              className="mt-6 text-base leading-relaxed md:text-lg"
              style={{
                color: "#7B8288",
                whiteSpace: "pre-line",
              }}
            >
              {description}
            </p>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="mt-8 flex gap-2">
              <div
                className="flex-1 max-w-[240px] rounded-full border bg-white px-5 py-3"
                style={{ borderColor: "#E5E5E5" }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder={inputPlaceholder}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  style={{ color: "#1A1A1A" }}
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#1A2B35" }}
              >
                {buttonText}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>

          {/* Right content - Dashboard cards */}
          <div className="relative h-[450px] lg:h-[500px]">
            {/* Main team photo card (Accounting) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-0 top-0 w-[280px] overflow-hidden rounded-xl bg-white shadow-lg md:w-[320px]"
              style={{ border: "1px solid #F0EDE9" }}
            >
              <div className="p-3">
                <span className="text-xs font-medium text-gray-500">
                  Accounting
                </span>
              </div>
              <div className="relative h-[160px] w-full">
                <Image
                  src={teamImageSrc}
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Feature tags on the right */}
            <div className="absolute right-0 top-8 flex flex-col gap-2 md:right-4">
              <FeatureTag icon={Users} title="Extension of your team" delay={0.4} />
              <FeatureTag icon={TrendingUp} title="Partner as you scale" delay={0.5} />
              <FeatureTag icon={Cpu} title="Technology expertise" delay={0.6} />
            </div>

            {/* Finance chart card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-16 left-8 w-[200px] rounded-xl bg-white p-4 shadow-lg md:left-16 md:w-[220px]"
              style={{ border: "1px solid #F0EDE9" }}
            >
              <span className="text-xs font-medium text-gray-500">Finance</span>
              <div className="mt-3">
                <BarChart />
              </div>
            </motion.div>

            {/* Payroll card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-0 right-0 w-[180px] rounded-xl bg-white p-4 shadow-lg md:right-4 md:w-[200px]"
              style={{ border: "1px solid #F0EDE9" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">
                  Payroll
                </span>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 }}
                  className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-medium text-white"
                  style={{ backgroundColor: "#F27241" }}
                >
                  8
                </motion.div>
              </div>
              <div className="mt-3">
                <AvatarStack />
              </div>
              {/* Placeholder lines */}
              <div className="mt-3 space-y-2">
                <div className="h-2 w-full rounded bg-gray-100" />
                <div className="h-2 w-3/4 rounded bg-gray-100" />
                <div className="h-2 w-5/6 rounded bg-gray-100" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Google Fonts for DM Serif Display */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
      `}</style>
    </section>
  );
}
