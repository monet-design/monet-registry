"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    text: "#111",
    subtext: "#666",
  },
  dark: {
    accent: "#FC0000",
    text: "#fff",
    subtext: "#999",
  },
} as const;

const CTA_ITEMS = [
  {
    tag: "체험하기",
    tagColor: "#FC0000",
    title: "우리 매장에 꼭 맞는\n티오더 제작하기",
    link: "/tableOrder#experience",
    icon: "design",
  },
  {
    tag: "고객사례",
    tagColor: "#22C55E",
    title: "우리 매장과 비슷한\n티오더 매장 구경하기",
    link: "/interview/case",
    icon: "search",
  },
  {
    tag: "도입문의",
    tagColor: "#FC0000",
    title: "전문 상담가에게\n바로 상담받기",
    link: "#contact",
    icon: "support",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Palette, Search, Headphones } from "lucide-react";

interface TorderComCta12Props {
  mode?: "light" | "dark";
}

export default function TorderComCta12({
  mode = "dark",
}: TorderComCta12Props) {
  const colors = COLORS[mode];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "design":
        return <Palette className="w-12 h-12 text-gray-400" />;
      case "search":
        return <Search className="w-12 h-12 text-gray-400" />;
      case "support":
        return <Headphones className="w-12 h-12 text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-12"
        >
          어디부터 시작해야 할지<br />
          모르겠다면?
        </motion.h2>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CTA_ITEMS.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-gray-100 hover:bg-white transition-colors"
            >
              {/* Tag */}
              <span
                className="text-sm font-bold"
                style={{ color: item.tagColor }}
              >
                {item.tag}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mt-2 whitespace-pre-line leading-tight">
                {item.title}
              </h3>

              {/* Bottom Row */}
              <div className="flex items-center justify-between mt-8">
                <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-colors">
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </button>
                {getIcon(item.icon)}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
