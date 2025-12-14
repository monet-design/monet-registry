"use client";

const COLORS = {
  light: {
    accent: "#1C1917",
    clay: "#D2886F",
    sand: "#F5F5F0",
    stone: "#E8E6E1",
  },
  dark: {
    accent: "#F5F5F0",
    clay: "#D2886F",
    sand: "#1C1917",
    stone: "#292524",
  },
} as const;

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface LoadfastStoreFaq9Props {
  mode?: "light" | "dark";
}

export default function LoadfastStoreFaq9({
  mode = "light",
}: LoadfastStoreFaq9Props) {
  const colors = COLORS[mode];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why is LoadFast $100 instead of free or cheaper?",
      answer:
        "Great question. Free tools come with hidden costs—ads, data selling, limited features, or they disappear overnight. LoadFast is $100 because we're committed to building a tool that saves you real money (the average user saves $7,500+ yearly in time value). You're not paying for software—you're investing in your productivity. Plus, it's a one-time payment with lifetime updates. No subscriptions eating into your budget every month.",
    },
    {
      question: "Why should I choose LoadFast over TextExpander?",
      answer:
        "TextExpander costs $40/year ($400+ over 10 years). LoadFast is $100 once—forever. You get modern UI, faster performance, better Chrome integration, and lifetime updates. We also include a one-click import tool to migrate all your TextExpander snippets in 30 seconds. Many users switch and never look back.",
    },
    {
      question: "Which platforms is LoadFast available on?",
      answer:
        "LoadFast is available as a Google Chrome extension and a Mac app. All current and future releases are included with your one-time purchase—no extra fees for new platforms.",
    },
    {
      question: "Do I need multiple licenses for multiple computers?",
      answer:
        "No. LoadFast syncs with your email address, so you can use it on unlimited devices—work laptop, home desktop, whatever you need. One purchase, unlimited devices, all your snippets synced everywhere.",
    },
    {
      question: "What if LoadFast doesn't work for me?",
      answer:
        "We offer a 30-day money-back guarantee, no questions asked. If LoadFast doesn't save you time as promised, email us for a full refund. We're confident you'll love it—most users see results on day one.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. Your snippets are encrypted and stored securely in the cloud, accessible only by you. LoadFast never sells your data or tracks what you type—your privacy is non-negotiable.",
    },
    {
      question: "Why is this an 'introductory price'?",
      answer:
        "We're offering $100 as our introductory price while we grow. The regular price will be $197 as we continue adding features. When you buy now, you lock in $100 forever—including all future updates and features at no extra cost.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: colors.stone }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="font-serif font-normal text-3xl lg:text-4xl tracking-tight mb-4"
            style={{ color: colors.accent }}
          >
            Frequently asked questions
          </h2>
        </motion.div>

        {/* FAQ List */}
        <ul className="space-y-0">
          {faqs.map((faq, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-t"
              style={{ borderColor: `${colors.accent}1A` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left md:text-lg"
              >
                <span className="flex-1" style={{ color: colors.accent }}>
                  {faq.question}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                  style={{ color: colors.accent }}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 0.8 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="pb-5 leading-relaxed"
                      style={{ color: `${colors.accent}CC` }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
