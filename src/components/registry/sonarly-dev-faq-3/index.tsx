"use client";

import { useState } from "react";

// ============================================================================
// CUSTOMIZATION - Modify values in this section to customize for your project
// ============================================================================

const COLORS = {
  light: {
    itemBorder: "#e5e7eb",
  },
  dark: {
    itemBorder: "#374151",
  },
} as const;

const FAQ_DATA = [
  {
    question: "Do you store my data?",
    answer:
      "All data is encrypted and no entity outside of Sonarly can access it. You can delete your data at any time.",
  },
  {
    question: "Is there a free version?",
    answer:
      "Yes! Our Developer plan is completely free and includes 1,000 sessions per month, 20 bugs detected per month, and 30 days of data retention.",
  },
  {
    question: "How to contact you?",
    answer:
      "You can reach us through our Discord community or schedule a call with our team through the contact page.",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SonarlyDevFaq3Props {
  mode?: "light" | "dark";
}

export default function SonarlyDevFaq3({
  mode = "light",
}: SonarlyDevFaq3Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="resources"
      className={`w-full py-24 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            className={`mb-4 text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Frequently asked questions
          </h2>
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Answers to common questions about Sonarly and its features. If you
            have any other questions, please don&apos;t hesitate to contact us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-0">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="border-b"
              style={{ borderColor: colors.itemBorder }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span
                  className={`text-base font-medium ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  } ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="pb-5">
                  <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
