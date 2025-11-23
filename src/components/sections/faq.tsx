"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { Section } from "../ui/section";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  description?: string;
  items?: FAQItem[];
  initialVisibleCount?: number;
  className?: string;
}

const defaultItems: FAQItem[] = [
  {
    question: "How is DesignLumo different from Canva?",
    answer:
      "Canva is template-based. You pick a pre-made design and tweak it. DesignLumo is AI-first: you just describe what you need ('Facebook ad for 50% sale on shoes') and it generates a unique, editable design in seconds. No scrolling through hundreds of templates. Faster, smarter, and built for fresh content every time.",
  },
  {
    question: "What makes DesignLumo different from AI image generators?",
    answer:
      "Most AI tools generate pictures or flat images you can't edit. DesignLumo creates fully editable designs — with text, fonts, colors, and layers you can move around just like in Canva. That means you don't just get an image, you get a complete design you can customize.",
  },
  {
    question: "Can I edit the designs like in Canva?",
    answer:
      "Yes, every design from DesignLumo is layer-by-layer editable. You can change text, fonts, colors, positions, images, and shapes easily. It feels just like Canva, but without the repetitive templates.",
  },
  {
    question: "Is DesignLumo just for social media?",
    answer:
      "No. We primarily focus on social media, but you can also use DesignLumo to generate flyers, banners, documents, infographics, and more. If you can describe it, DesignLumo can design it for you.",
  },
  {
    question: "How much does it cost?",
    answer:
      "You can try it with free credits. After that, affordable plans give you professional designs for a month — far cheaper than hiring designers or agencies.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer refunds for unused credits. If you decide to cancel your subscription, we'll refund any remaining credits after deducting applicable fees. This ensures you only pay for what you've actually used.",
  },
  {
    question: "Do I need design skills to use DesignLumo?",
    answer:
      "Not at all. Just type what you want, and you'll get a ready-to-use, editable design. Even if you've never designed before, you'll have scroll-stopping creatives in minutes.",
  },
  {
    question: "Do I own the designs I make with DesignLumo?",
    answer:
      "Yes. You get full usage rights for personal or commercial use.",
  },
  {
    question: "Can DesignLumo replace a graphic designer?",
    answer:
      "No, It won't replace creativity, but it removes time-consuming grunt work. Designers can use it to speed up drafts, while non-designers can get professional-looking creatives without hiring an agency.",
  },
];

export default function FAQ({
  title = "FAQ",
  description = "Everything you need to know about DesignLumo",
  items = defaultItems,
  initialVisibleCount = 5,
  className,
}: FAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const visibleItems = showAll ? items : items.slice(0, initialVisibleCount);
  const hasMoreItems = items.length > initialVisibleCount;
  const hiddenItemsCount = items.length - initialVisibleCount;

  return (
    <Section className={cn("bg-white py-16 px-4", className)}>
      <div className="max-w-3xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="space-y-3">
          {visibleItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-4 text-left flex justify-between items-center hover:text-blue-600 transition-colors"
                aria-expanded={expandedIndex === index}
              >
                <span className="text-base font-medium text-gray-900 pr-4">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "text-gray-400 transition-transform duration-300 ease-in-out shrink-0",
                    expandedIndex === index ? "rotate-0" : "rotate-0"
                  )}
                >
                  {expandedIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  expandedIndex === index
                    ? "max-h-96 pb-4 opacity-100"
                    : "max-h-0 pb-0 opacity-0"
                )}
              >
                <p className="text-gray-600 text-sm leading-relaxed pl-0">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {hasMoreItems && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              {showAll ? "Show Less" : `View ${hiddenItemsCount} More Questions`}
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
