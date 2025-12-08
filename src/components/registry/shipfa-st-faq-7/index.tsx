"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#f3f4f6",
    textPrimary: "#1f2937",
    textSecondary: "#6b7280",
    border: "rgba(31, 41, 55, 0.1)",
    linkHover: "#3b82f6",
  },
  dark: {
    background: "#1b1d21",
    textPrimary: "#e5e7eb",
    textSecondary: "#9ca3af",
    border: "rgba(229, 231, 235, 0.1)",
    linkHover: "#60a5fa",
  },
} as const;

/**
 * FAQ 항목 데이터
 */
const DEFAULT_FAQ_ITEMS = [
  {
    question: "What do I get exactly?",
    answer:
      "1/ The NextJS starter with all the boilerplate code you need to run an online business: a payment system, a database, login, a blog, UI components, and much more. The repo is available in JavaScript and TypeScript, /app router and /pages router.\n\n2/ The documentation helps you set up your app from scratch, write copy that sells, and ship fast.\n\n3/ With the Premium plan, access to our Discord with 5,000+ makers, the Leaderboards to showcase your startup, and $1,210 worth of unique discounts.",
  },
  {
    question: "What are the ShipFast Leaderboards?",
    answer:
      "The Leaderboards are a fun way to showcase your startup. Startups are ranked by revenue (verified by Stripe), so you can see who's making the most money. Leaderboards also help you gain exposure by showing your startup to thousands of entrepreneurs who visit the leaderboards page every month.",
  },
  {
    question: "What are the ShipFast Discounts?",
    answer:
      "$1,210 worth of unique discounts for ShipFast members. We partner with companies like Rewardful, daisyUI, DataFast, Typefully, Vercel, Resend, and more to give you discounts on their products.",
  },
  {
    question: "Does ShipFast work with AI (Cursor, Copilot)?",
    answer:
      "It does not only work with AI, it's built for it. ShipFast comes with a complete codebase—which gives your AI code editor real context to build full features in seconds. You can just ask your AI to build the feature you need, and it will generate the code for you.",
  },
  {
    question: "Javascript or Typescript?",
    answer: "Both! You can choose once you get access.",
  },
  {
    question: "/app router or /pages router?",
    answer: "Both! You can choose once you get access.",
  },
  {
    question: "My tech stack is different, can I still use it?",
    answer:
      "Yes, as long as you're comfortable with React & NextJS. Libraries are independent. You can use SendGrid instead of Mailgun, LemonSqueezy instead of Stripe, or Postgres instead of MongoDB, for instance.",
  },
  {
    question: "Is it a website template?",
    answer:
      "It's more than just a template. You can copy/paste sections to build your site quickly, like a pricing section, an FAQ, and even an entire blog. You also get a bunch of UI components like buttons, modals, popovers, etc. The NextJS starter also comes with handy tools you need to run an online business—payment processing, emails, SEO, etc.",
  },
  {
    question: "Is ShipFast better than other boilerplates?",
    answer:
      "Customers do NOT buy code. Customers buy a life transformation. They ship startups. Every week. And they make $ from it.",
  },
  {
    question: "Is ShipFast better than AI tools like Lovable or Bolt?",
    answer:
      "Lovable and Bolt are great tools if you want to build a landing page quickly. But they don't help you ship a startup. ShipFast is a complete startup boilerplate. It comes with a payment system, a database, login, battle-tested UI components, and much more.",
  },
  {
    question: "Are there any other costs associated?",
    answer:
      "Many hosting platforms, like Vercel, let you host a project for free (front-end + back-end) and MongoDB/Supabase have free tiers — so you can launch for first app for $0/month. If you use Magic Link sign-ups, you'll spend $1 per 1,000 users.",
  },
  {
    question: "How often is ShipFast updated?",
    answer:
      "ShipFast is built for one purpose: to let you launch projects fast, without getting slowed down by constant dependency changes or breaking updates. You get lifetime updates — if we ever need to improve or fix it, you'll get the same update.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "After you've got access to the repo, ShipFast is yours forever, so it can't be refunded. But rest assured, users of ShipFast ship startups in 7 days on average and make their first $ online in record time.",
  },
  {
    question: "Can I use PayPal?",
    answer:
      "Yes! You can send over the USD equivalent of the plan you want to purchase. Once done, please email us your GitHub username so we can give you access to the repo.",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ShipfaStFaq7Props {
  mode?: "light" | "dark";
  title?: string;
  description?: React.ReactNode;
  items?: FAQItem[];
  twitterUrl?: string;
  email?: string;
}

type ColorScheme = {
  background: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  linkHover: string;
};

function AccordionItem({
  item,
  isOpen,
  onToggle,
  colors,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  colors: ColorScheme;
}) {
  return (
    <li className="list-none">
      <button
        onClick={onToggle}
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left md:text-lg"
        style={{ borderTop: `1px solid ${colors.border}` }}
        aria-expanded={isOpen}
      >
        <span
          className="flex-1"
          style={{ color: colors.textPrimary }}
        >
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <Plus
            className="w-4 h-4"
            style={{ color: colors.textPrimary }}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 0.8 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="pb-5 leading-relaxed whitespace-pre-line"
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

export default function ShipfaStFaq7({
  mode = "dark",
  title = "Frequently Asked Questions",
  description,
  items = DEFAULT_FAQ_ITEMS,
  twitterUrl = "https://x.com/marclou",
  email = "hello@shipfa.st",
}: ShipfaStFaq7Props) {
  const colors = COLORS[mode];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const defaultDescription = (
    <>
      Have another question? Contact me on{" "}
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-80 transition-opacity"
        style={{ color: colors.textPrimary }}
      >
        Twitter
      </a>{" "}
      or by{" "}
      <a
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-80 transition-opacity"
        style={{ color: colors.textPrimary }}
      >
        email
      </a>
      .
    </>
  );

  return (
    <section
      className="w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left column - Title and description */}
        <motion.div
          className="flex flex-col text-left basis-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-8"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h2>
          <p style={{ color: colors.textSecondary }}>
            {description || defaultDescription}
          </p>
        </motion.div>

        {/* Right column - FAQ list */}
        <motion.ul
          className="basis-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {items.map((item, index) => (
            <AccordionItem
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
