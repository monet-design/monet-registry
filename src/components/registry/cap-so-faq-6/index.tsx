"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const CONTENT = {
  headline: "Frequently asked questions",
  faqs: [
    {
      question: "Is Cap really free?",
      answer:
        "Yes! Cap Free includes unlimited local recordings, basic editing tools, and the ability to share via links. You can use it forever without paying anything. Cap Pro adds cloud storage, AI features, and team collaboration for power users.",
    },
    {
      question: "How does Cap compare to Loom?",
      answer:
        "Cap is the open source alternative to Loom. While Loom is great, Cap gives you more control over your data with self-hosting options and S3 bucket support. Plus, our native apps are faster and more reliable than browser-based solutions.",
    },
    {
      question: "Can I self-host Cap?",
      answer:
        "Absolutely! Cap is fully open source and can be self-hosted. This is perfect for teams with strict compliance requirements or those who want complete control over their data. Check our GitHub repo for deployment instructions.",
    },
    {
      question: "What platforms does Cap support?",
      answer:
        "Cap has native apps for macOS (Apple Silicon and Intel) and Windows. We're working on Linux support as well. Our web app works on any modern browser for viewing and sharing recordings.",
    },
    {
      question: "How secure are my recordings?",
      answer:
        "Security is a top priority. With Cap, you can keep recordings local, use your own S3 bucket, or use our secure cloud. We never access your recordings without permission, and you can password-protect sensitive content.",
    },
    {
      question: "Do you offer team plans?",
      answer:
        "Yes! Cap Pro includes team collaboration features. For larger organizations, our Commercial plan offers custom contracts, SSO, and dedicated support. Contact our sales team to learn more.",
    },
  ],
} as const;

interface CapSoFaq6Props {
  mode?: "light" | "dark";
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CapSoFaq6({ mode = "light" }: CapSoFaq6Props) {
  return (
    <section className="w-full py-[150px] lg:py-[200px] bg-white">
      <div className="w-full max-w-[800px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-gray-900">{CONTENT.headline}</h2>
        </div>

        {/* FAQ Items */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 px-8">
          {CONTENT.faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <FaqItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
