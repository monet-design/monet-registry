"use client";

import { motion } from "motion/react";
import { User, UserPlus, AppWindow } from "lucide-react";

interface UseCaseCardProps {
  title: string;
  description: string;
  badge?: string;
  delay?: number;
}

function UseCaseCard({
  title,
  description,
  badge,
  delay = 0,
}: UseCaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="rounded-xl bg-[#2A2B2E] px-5 py-4"
    >
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-bold text-white">{title}</h3>
        {badge && (
          <span className="rounded-full bg-[#DAFF02] px-2 py-0.5 text-[10px] font-semibold text-black">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}

interface FlowNodeProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay?: number;
  isLast?: boolean;
}

function FlowNode({
  icon,
  title,
  subtitle,
  delay = 0,
  isLast = false,
}: FlowNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay, ease: "backOut" }}
      className="relative flex items-start gap-3"
    >
      {/* Icon container */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DAFF02]">
        {icon}
      </div>

      {/* Text content */}
      <div className="pt-0.5">
        <h4 className="text-xs font-semibold text-[#DAFF02]">{title}</h4>
        <p className="mt-0.5 text-[10px] text-gray-500">{subtitle}</p>
      </div>

      {/* Connector line to next node */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
          className="absolute left-[18px] top-10 h-8 w-px origin-top border-l border-dashed border-gray-600"
        />
      )}
    </motion.div>
  );
}

function FlowConnector({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="absolute -left-16 top-1/2 h-px w-12 -translate-y-1/2 border-t border-dashed border-gray-600"
    />
  );
}

interface UseCasesFlowProps {
  mode?: "preview" | "live";
  title?: string;
  subtitle?: string;
  useCases?: {
    title: string;
    description: string;
    badge?: string;
  }[];
  flowNodes?: {
    icon: "user" | "userPlus" | "app";
    title: string;
    subtitle: string;
  }[];
}

// [CUSTOMIZATION]
export const CUSTOMIZATION = {};
// [/CUSTOMIZATION]

export default function UseCasesFlow({
  mode = "live",
  title = "Use cases",
  subtitle = "A few simple examples of what is possible to build with WinWinKit.\nMore complex referral program can be built by combining simple rewards together.",
  useCases = [
    {
      title: "Basic",
      description: "Reward the referring user with an exclusive app icon.",
    },
    {
      title: "Credit",
      description:
        "Reward the invited user for downloading the app with 100 credits.",
    },
    {
      title: "Offer Codes",
      description:
        "Reward the referring user with an active subscription with a free month.\nReward the invited user with a free first month when starting a subscription.",
      badge: "Soon",
    },
  ],
  flowNodes = [
    {
      icon: "user" as const,
      title: "Referring user",
      subtitle: "Shares referral code #Y2123",
    },
    {
      icon: "userPlus" as const,
      title: "New user",
      subtitle: "Claimed referral code #Y2123",
    },
    {
      icon: "app" as const,
      title: "App Icon",
      subtitle: "Reward unlocked",
    },
  ],
}: UseCasesFlowProps) {
  const iconMap = {
    user: <User className="h-4 w-4 text-black" strokeWidth={2.5} />,
    userPlus: <UserPlus className="h-4 w-4 text-black" strokeWidth={2.5} />,
    app: <AppWindow className="h-4 w-4 text-black" strokeWidth={2.5} />,
  };

  return (
    <section className="w-full bg-[#111113] px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Use cases */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-normal tracking-tight text-white sm:text-3xl">
                {title}
              </h2>
              <p className="mt-3 whitespace-pre-line text-xs leading-relaxed text-gray-500">
                {subtitle}
              </p>
            </motion.div>

            <div className="flex flex-col gap-3">
              {useCases.map((useCase, index) => (
                <UseCaseCard
                  key={useCase.title}
                  title={useCase.title}
                  description={useCase.description}
                  badge={useCase.badge}
                  delay={0.1 + index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Right side - Flow diagram */}
          <div className="relative flex items-center justify-center lg:justify-start">
            {/* Main flow container */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-2xl border border-dashed border-gray-600 bg-transparent p-6"
            >
              {/* Outer connector from left cards */}
              <div className="absolute -left-8 top-6 hidden lg:block">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="h-px w-8 origin-right border-t border-dashed border-gray-600"
                />
              </div>

              <div className="flex flex-col gap-6">
                {flowNodes.map((node, index) => (
                  <FlowNode
                    key={node.title}
                    icon={iconMap[node.icon]}
                    title={node.title}
                    subtitle={node.subtitle}
                    delay={0.4 + index * 0.15}
                    isLast={index === flowNodes.length - 1}
                  />
                ))}
              </div>

              {/* Curved connection lines decoration */}
              <svg
                className="pointer-events-none absolute -left-20 top-0 hidden h-full w-24 lg:block"
                viewBox="0 0 96 200"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  d="M0 40 Q 48 40, 48 70 Q 48 100, 96 100"
                  stroke="#3f3f46"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  d="M0 100 Q 48 100, 48 100 Q 48 100, 96 100"
                  stroke="#3f3f46"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  d="M0 160 Q 48 160, 48 130 Q 48 100, 96 100"
                  stroke="#3f3f46"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  fill="none"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
