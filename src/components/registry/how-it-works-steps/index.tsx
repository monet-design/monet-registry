"use client";

import { motion } from "motion/react";
import { Atom } from "lucide-react";
import Image from "next/image";
import "./font.css";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  bottomLabel: string;
  logos: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}

function StepCard({
  stepNumber,
  title,
  description,
  bottomLabel,
  logos,
  children,
  delay = 0,
}: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col"
    >
      <div className="relative">
        <div className="relative h-52 overflow-hidden rounded-3xl">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 0.3, ease: "backOut" }}
            className="absolute top-3 left-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-medium text-white"
          >
            {stepNumber}
          </motion.div>
          {children}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {description}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="text-xs text-gray-400">{bottomLabel}</span>
        <div className="flex items-center gap-2">{logos}</div>
      </div>
    </motion.div>
  );
}

function SubscribeCard() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Image
        src="/registry/how-it-works-steps/cloud-pink-purple.png"
        alt="Cloud background"
        fill
        className="object-cover"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="relative z-10 rounded-full bg-gray-900/90 px-6 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-gray-800"
      >
        Start scaling
      </motion.button>
    </div>
  );
}

function RequestCard() {
  const tags = [
    { label: "Design", position: "top-4 left-12" },
    { label: "Webdesign", position: "top-4 left-24" },
    { label: "SaaS", position: "top-4 right-14" },
    { label: "Emails", position: "top-4 right-4" },
    { label: "Landing pages", position: "top-12 left-8" },
    { label: "Copywriting", position: "top-12 right-8" },
    { label: "Branding", position: "bottom-12 left-6" },
    { label: "Illustrations", position: "bottom-12 left-28" },
    {
      label: "Data visualization",
      position: "bottom-5 left-1/2 -translate-x-1/2",
    },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Image
        src="/registry/how-it-works-steps/cloud-pink-orange.png"
        alt="Cloud background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0">
        {tags.map((tag, index) => (
          <motion.span
            key={tag.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            className={`absolute ${tag.position} rounded-full bg-white/70 px-2 py-0.5 text-[10px] text-gray-600 backdrop-blur-sm`}
          >
            {tag.label}
          </motion.span>
        ))}
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg"
      >
        <Atom className="h-8 w-8 text-gray-700" strokeWidth={1.5} />
      </motion.div>
    </div>
  );
}

function ReceiveCard() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#1e2a4a]">
      <Image
        src="/registry/how-it-works-steps/dashboard-mockup.png"
        alt="Dashboard mockup"
        fill
        className="object-cover"
      />
    </div>
  );
}

function StripeLogo() {
  return (
    <svg viewBox="0 0 60 25" className="h-5 w-auto" fill="#635BFF">
      <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a10.3 10.3 0 0 1-4.56 1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.58zm-6.02-5.2c-1.03 0-1.88.77-2.04 2.32h4.08c-.04-1.46-.6-2.32-2.04-2.32zM38.29 5.2c1.67 0 3.02.38 4.05 1.02l-1.05 3.09c-.9-.47-1.8-.74-2.8-.74-1.56 0-2.4.72-2.4 1.58 0 1.1 1.22 1.53 2.71 2.11 2.12.83 3.78 1.86 3.78 4.37 0 3.44-2.79 5.57-6.86 5.57-1.95 0-3.78-.49-5.01-1.25l1.13-3.19c1.1.66 2.52 1.1 3.88 1.1 1.56 0 2.52-.57 2.52-1.62 0-1.04-1.01-1.53-2.52-2.13-2.4-.95-4.02-2.1-4.02-4.38 0-2.87 2.33-5.53 6.59-5.53zM28.89 22h-4.41V5.4h4.41v16.6zM24.26 2.47c0-1.37 1.1-2.47 2.47-2.47s2.47 1.1 2.47 2.47a2.47 2.47 0 0 1-4.94 0zM20.09 5.4l.15 1.56c.87-1.1 2.13-1.76 3.82-1.76v4.03c-.3-.04-.6-.06-.9-.06-1.55 0-2.63.74-2.93 1.86V22h-4.41V5.4h4.27zM8.86 12.28c0-2.08-.9-3.13-2.32-3.13-1.1 0-1.86.6-2.28 1.24V14.9c.42.64 1.13 1.28 2.28 1.28 1.47 0 2.32-1.1 2.32-3.28v-.62zm4.51.68c0 4.51-2.35 7.24-5.57 7.24-1.37 0-2.52-.53-3.32-1.37l-.15 1.17H0V0h4.47v6.45c.74-.83 1.88-1.25 3.22-1.25 3.37 0 5.68 2.65 5.68 7.14v.62z" />
    </svg>
  );
}

function NotionLogo() {
  return (
    <svg viewBox="0 0 100 100" className="h-5 w-5" fill="none">
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000"
      />
    </svg>
  );
}

function SlackLogo() {
  return (
    <svg viewBox="0 0 127 127" className="h-5 w-5">
      <path
        d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z"
        fill="#E01E5A"
      />
      <path
        d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z"
        fill="#36C5F0"
      />
      <path
        d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z"
        fill="#2EB67D"
      />
      <path
        d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z"
        fill="#ECB22E"
      />
    </svg>
  );
}

function FigmaLogo() {
  return (
    <svg viewBox="0 0 38 57" className="h-5 w-auto" fill="none">
      <path
        d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
        fill="#1ABCFE"
      />
      <path
        d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
        fill="#0ACF83"
      />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
      <path
        d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
        fill="#F24E1E"
      />
      <path
        d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
        fill="#A259FF"
      />
    </svg>
  );
}

function AdobeLogo() {
  return (
    <svg viewBox="0 0 30 26" className="h-5 w-auto" fill="#FF0000">
      <path d="M11.5 0H0v26l11.5-26zm7 0H30v26L18.5 0zm-3.75 9.74L19.21 26h-4.67l-2.2-5.78h-4.6l5.01-10.48z" />
    </svg>
  );
}

interface HowItWorksStepsProps {
  title?: React.ReactNode;
  subtitle?: string;
  steps?: {
    stepNumber: number;
    title: string;
    description: string;
    bottomLabel: string;
    type: "subscribe" | "request" | "receive";
  }[];
}

export default function HowItWorksSteps({
  title = (
    <>
      <span className="font-instrument italic font-normal">Simple</span>{" "}
      <span className="font-semibold">as 1,2,3</span>
    </>
  ),
  subtitle = "Get retainer-level support, predictable pricing, and a seamless workflow - so you can focus on growing, not managing creatives.",
  steps = [
    {
      stepNumber: 1,
      title: "Subscribe",
      description:
        "Subscribe to a ScaleFast plan (as simple as pushing a button).",
      bottomLabel: "Secure Payments via:",
      type: "subscribe" as const,
    },
    {
      stepNumber: 2,
      title: "Request",
      description:
        "From logos to landing pages: drop your request and we'll handle the rest, fast!",
      bottomLabel: "Comms via:",
      type: "request" as const,
    },
    {
      stepNumber: 3,
      title: "Receive",
      description:
        "Receive drafts or final assets in just 48 hours on average.",
      bottomLabel: "Designs via:",
      type: "receive" as const,
    },
  ],
}: HowItWorksStepsProps) {
  const renderLogos = (type: string) => {
    switch (type) {
      case "subscribe":
        return <StripeLogo />;
      case "request":
        return (
          <>
            <NotionLogo />
            <SlackLogo />
          </>
        );
      case "receive":
        return (
          <>
            <FigmaLogo />
            <AdobeLogo />
          </>
        );
      default:
        return null;
    }
  };

  const renderCardContent = (type: string) => {
    switch (type) {
      case "subscribe":
        return <SubscribeCard />;
      case "request":
        return <RequestCard />;
      case "receive":
        return <ReceiveCard />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-white px-4 py-16 font-satoshi sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              bottomLabel={step.bottomLabel}
              logos={renderLogos(step.type)}
              delay={index * 0.15}
            >
              {renderCardContent(step.type)}
            </StepCard>
          ))}
        </div>
      </div>
    </section>
  );
}
