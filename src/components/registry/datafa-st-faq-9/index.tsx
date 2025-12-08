"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    borderColor: "#374151",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    borderColor: "#374151",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface DatafaStFaq9Props {
  mode?: "light" | "dark";
  headline?: string;
  items?: FAQItem[];
}

const defaultItems: FAQItem[] = [
  {
    question: "Starter or Growth?",
    answer: "The Starter plan is perfect for solo creators and small websites. Growth is ideal for teams and businesses with multiple websites that need advanced features like X (Twitter) mention tracking.",
  },
  {
    question: "10k, 100k, 1M+ events per month?",
    answer: "Events are any interaction tracked on your website - page views, button clicks, form submissions, etc. Most small to medium websites use 10k-100k events per month.",
  },
  {
    question: "What happens if I get more events than my plan?",
    answer: "We'll notify you before you reach your limit and give you the option to upgrade. We never charge overages without your consent.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! You get a 14-day free trial with full access to all features. No credit card required.",
  },
  {
    question: "Is DataFast GDPR compliant?",
    answer: "Yes, DataFast is fully GDPR compliant. We don't use cookies for tracking and we don't collect personally identifiable information.",
  },
  {
    question: "Do I need to make money to use DataFast?",
    answer: "No! DataFast is useful for any website, even if you're not selling anything yet. Track signups, downloads, or any other goals.",
  },
  {
    question: "Do I need to code to use DataFast?",
    answer: "Minimal coding required. Just paste a script tag in your website and you're good to go. Works with all major platforms.",
  },
  {
    question: "Can I migrate my existing data?",
    answer: "Yes, we offer migration support for users coming from Google Analytics, Plausible, and other analytics tools.",
  },
  {
    question: "Can I see SEO keywords that drive traffic to my website?",
    answer: "Yes! DataFast integrates with Google Search Console to show you which keywords bring visitors to your site.",
  },
  {
    question: "Which payment providers are supported?",
    answer: "We support Stripe, Gumroad, LemonSqueezy, Paddle, and more. Contact us if you need a specific integration.",
  },
  {
    question: "Does DataFast track across subdomains?",
    answer: "Yes, DataFast can track visitors across subdomains as a single session.",
  },
  {
    question: "Does DataFast track across different domains?",
    answer: "Yes, with our cross-domain tracking feature available on all plans.",
  },
  {
    question: "Does DataFast have an API?",
    answer: "Yes! Our REST API lets you access all your analytics data programmatically.",
  },
  {
    question: "Can I invite my team to DataFast?",
    answer: "Yes, Growth plan includes up to 30 team members. Starter plan includes 1 team member.",
  },
  {
    question: "Do you have an affiliate program?",
    answer: "Yes! Earn 50% recurring commission for every customer you refer. Apply through our affiliate program page.",
  },
];

export default function DatafaStFaq9({
  mode = "dark",
  headline = "FAQ",
  items = defaultItems,
}: DatafaStFaq9Props) {
  const colors = COLORS[mode];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-3xl px-4">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-3xl font-bold"
          style={{ color: colors.textPrimary }}
        >
          {headline}
        </motion.h2>

        {/* FAQ Items */}
        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="overflow-hidden rounded-lg border"
              style={{
                backgroundColor: colors.cardBg,
                borderColor: colors.borderColor,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-700/30"
              >
                <span
                  className="font-medium"
                  style={{ color: colors.textPrimary }}
                >
                  {item.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 flex-shrink-0" style={{ color: colors.textSecondary }} />
                ) : (
                  <Plus className="h-5 w-5 flex-shrink-0" style={{ color: colors.textSecondary }} />
                )}
              </button>
              {openIndex === index && (
                <div
                  className="border-t px-5 py-4"
                  style={{ borderColor: colors.borderColor }}
                >
                  <p style={{ color: colors.textSecondary }}>{item.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
