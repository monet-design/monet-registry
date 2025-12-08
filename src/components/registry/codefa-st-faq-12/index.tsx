"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#ffffff",
    textPrimary: "#1f2937", // gray-800
    textSecondary: "#6b7280", // gray-500
    border: "#e5e7eb", // gray-200
  },
  dark: {
    background: "#030712",
    textPrimary: "#f9fafb",
    textSecondary: "#9ca3af",
    border: "#374151",
  },
} as const;

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const DEFAULT_FAQ_ITEMS: FAQItem[] = [
  {
    question: "What do I get exactly?",
    answer: (
      <ol className="space-y-3 list-decimal list-inside leading-relaxed">
        <li>
          <span className="font-semibold">Lifetime access to the CodeFast:</span> 12 hours of video content (215 short lessons) to learn how to code from 0. You'll learn the mindset to build your own online business and build a real SaaS.
        </li>
        <li>
          <span className="font-semibold">Private Discord community:</span> Ask questions, get help from our instructor, and share your progress with other learners.
        </li>
        <li>
          <span className="font-semibold">ShipFast (bundle only):</span> The codebase used by 5,000+ entrepreneurs to ship your ideas even faster. It includes 30+ UI components, advanced features for your SaaS, and access to the Leaderboard.
        </li>
      </ol>
    ),
  },
  {
    question: "Who is this course for?",
    answer: "This course is for anyone who wants to learn to code and build their own apps, whether you're a beginner or someone tired of long, theory-heavy courses made for the pre-AI world. If you have no idea what coding is, our instructor will help you get started.",
  },
  {
    question: "Is there a refund policy?",
    answer: (
      <div>
        Yes, you can get a 100% refund if you meet both conditions:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>You've watched less than 10% of the course</li>
          <li>It's within 7 days of your purchase</li>
        </ul>
        <br />
        Go to your CodeFast dashboard and click on the [Support] button to request a refund (no questions asked).
      </div>
    ),
  },
  {
    question: "What tech stack will I learn?",
    answer: (
      <div className="space-y-3">
        <div>We'll start with the basics: HTML, CSS, and JavaScript.</div>
        <div>Then you'll build a SaaS:</div>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <span className="font-semibold">Frontend:</span> React, Next.js, Tailwind CSS (+ daisyUI)
          </li>
          <li>
            <span className="font-semibold">Backend:</span> Next.js API, Stripe for payments (or Lemon Squeezy), Resend for emails, MongoDB for database
          </li>
          <li>
            <span className="font-semibold">Programming language:</span> JavaScript
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Will I learn how to use AI to build my app?",
    answer: "Of course! As soon as you're comfortable with the basics, you'll learn how to use AI (GitHub Copilot) to design components, debug your code, and build your app faster.",
  },
  {
    question: "What kind of apps will I build?",
    answer: "You'll build practical projects like a small YouTube clone and a SaaS app with user authentication, subscription payments, database, etc. (just like a real startup!)",
  },
  {
    question: "Do I need ShipFast to follow the course?",
    answer: "No, you don't need ShipFast to follow the course. CodeFast teaches you how to code a SaaS app from 0. ShipFast helps you launch your ideas faster (UI components, advanced features for your SaaS, etc...).",
  },
  {
    question: "What if I get stuck during the course?",
    answer: "You'll have access to a support community where you can ask questions and get help from our instructor. I'll also teach you how to use AI tools to debug your code easily.",
  },
  {
    question: "Can I use PayPal?",
    answer: "Yes! You can send over the USD equivalent of the plan you want to purchase ($169 or $299) to my PayPal account. Once done, please email me with your purchase email so I can give you access to the course. Please allow a few hours to get access.",
  },
  {
    question: "I have another question",
    answer: "Cool, contact me by email and I'll get back to you as soon as possible.",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

type ColorScheme = {
  background: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
};

interface FAQItemComponentProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  colors: ColorScheme;
}

function FAQItemComponent({ item, isOpen, onToggle, colors }: FAQItemComponentProps) {
  return (
    <li
      className="border-b"
      style={{ borderColor: colors.border }}
    >
      <button
        className="relative flex gap-2 items-center w-full py-6 text-base font-semibold text-left md:text-lg"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span
          className="flex-1"
          style={{ color: colors.textPrimary }}
        >
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <Plus
            className="w-5 h-5"
            style={{ color: colors.textPrimary }}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="pb-6 leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

interface CodefaStFaq12Props {
  mode?: "light" | "dark";
  title?: string;
  items?: FAQItem[];
}

export default function CodefaStFaq12({
  mode = "light",
  title = "Frequently Asked Questions",
  items = DEFAULT_FAQ_ITEMS,
}: CodefaStFaq12Props) {
  const colors = COLORS[mode];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="py-20 px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-4xl font-extrabold pb-16 text-center"
          style={{ color: colors.textPrimary }}
        >
          {title}
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          {items.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              colors={colors}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
