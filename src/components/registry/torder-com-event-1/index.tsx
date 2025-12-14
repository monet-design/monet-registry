"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    accentHover: "#D90000",
    cardBg1: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
    cardBg2: "linear-gradient(135deg, #1c1c1c 0%, #2d2d2d 100%)",
    cardBg3: "linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)",
  },
  dark: {
    accent: "#FC0000",
    accentHover: "#FF3333",
    cardBg1: "linear-gradient(135deg, #0c4a6e 0%, #075985 100%)",
    cardBg2: "linear-gradient(135deg, #1c1c1c 0%, #2d2d2d 100%)",
    cardBg3: "linear-gradient(135deg, #9a3412 0%, #c2410c 100%)",
  },
} as const;

const EVENTS = [
  {
    tag: "티오더 도입하면",
    title: "현대큐밍 정수기\n최저가 드림",
    titleHighlight: true,
    link: "/ceoGuide/post/hdquming",
    bgImage: "https://kr.prd.image.homepage.torder.com/banner/event/c0ce962e-bcf3-4e24-afaf-bcc3accd14f9.png",
    bgColor: "#e0f4ff",
  },
  {
    tag: "KB국민 사장님카드로",
    title: "티오더 구매하면\n36개월 무이자",
    titleHighlight: false,
    link: "/ceoGuide/post/kbcard",
    bgImage: "https://kr.prd.image.homepage.torder.com/banner/event/9c3be936-0e6d-4056-a9a5-eee5a2e0c35a.png",
    bgColor: "#1c1c1c",
    textColor: "white",
  },
  {
    tag: "단골 손님 만들기",
    title: "티오더 사장님께\n당근 광고비 드려요",
    titleHighlight: false,
    link: "/ceoGuide/post/daangn",
    bgImage: "https://kr.prd.image.homepage.torder.com/banner/event/ca8d178b-b487-42c8-aac9-f7c60b08464d.png",
    bgColor: "#ff6f00",
    textColor: "white",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface TorderComEvent1Props {
  mode?: "light" | "dark";
}

export default function TorderComEvent1({
  mode = "dark",
}: TorderComEvent1Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center mb-12"
        >
          지금 놓치면 후회하는 혜택
        </motion.h2>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((event, index) => (
            <motion.a
              key={index}
              href={event.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] flex flex-col justify-between p-6"
              style={{ backgroundColor: event.bgColor }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${event.bgImage})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                <span
                  className="text-sm font-semibold"
                  style={{ color: event.textColor || "#333" }}
                >
                  {event.tag}
                </span>
                <h3
                  className="text-xl md:text-2xl font-extrabold mt-2 whitespace-pre-line"
                  style={{
                    color: event.textColor || "#000",
                    textShadow: event.titleHighlight ? "0 0 10px rgba(79, 170, 230, 0.5)" : "none"
                  }}
                >
                  {event.title}
                </h3>
              </div>

              {/* Button */}
              <div className="relative z-10">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-sm font-semibold text-gray-900
                    group-hover:bg-white transition-colors"
                >
                  자세히 보기
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
