"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    text: "#111",
    subtext: "#666",
    gradient: "linear-gradient(135deg, #FC0000 0%, #FF6B6B 100%)",
  },
  dark: {
    accent: "#FC0000",
    text: "#fff",
    subtext: "#999",
    gradient: "linear-gradient(135deg, #FC0000 0%, #FF6B6B 100%)",
  },
} as const;

const TESTIMONIALS = [
  {
    case: "사례 1",
    issue: "PG 수수료 과다 청구",
    title: "추가 수수료 없는\n티오더 덕분에\n안심이에요",
    description: "PG 업체 A사 해지 후 티오더를 도입하신\n아산 '외암파전상전' 점주님",
    video: "/file/upload/videos/section7_1.mp4",
  },
  {
    case: "사례 2",
    issue: "불안정한 포스연동",
    title: "티오더는 포스와\n연동만 하면 되니까\n오류가 없어요",
    description: "렌탈 업체 B사 해지 후 티오더를 도입하신\n부산 '일삼육고기' 점주님",
    video: "/file/upload/videos/section7_2.mp4",
  },
  {
    case: "사례 3",
    issue: "해지 위약금 과다 청구",
    title: "티오더의 든든한\n지원 덕분에\n큰 도움이 됐어요",
    description: "위약금 청구 업체 C사 해지 후 티오더를\n도입하신 인계동 '까몬' 점주님",
    video: "/file/upload/videos/section7_3.mp4",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Play } from "lucide-react";

interface TorderComTestimonial6Props {
  mode?: "light" | "dark";
}

export default function TorderComTestimonial6({
  mode = "dark",
}: TorderComTestimonial6Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Title */}
          <div className="lg:sticky lg:top-24">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-bold text-gray-400"
            >
              테이블오더의 기준
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4 text-white"
            >
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: colors.gradient }}
              >
                93개+의 매장
              </span>
              이<br />
              티오더로 환승한 이유
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-400 leading-relaxed"
            >
              테이블오더라고 다 똑같을까요?<br /><br />
              결국 종착역은 티오더인 이유,<br />
              실제 고객 후기로 확인하세요.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="/interview/campaign/better-choice/1"
              className="inline-block mt-8 px-6 py-3 rounded-full border-2 border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition-colors"
            >
              후기 확인하기
            </motion.a>
          </div>

          {/* Right: Testimonial Cards */}
          <div className="space-y-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative rounded-3xl overflow-hidden bg-gray-900 group"
              >
                {/* Video Background Placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </button>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold">
                        {testimonial.case}
                      </span>
                      <span className="text-gray-300">{testimonial.issue}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white mt-4 whitespace-pre-line leading-tight">
                      {testimonial.title}
                    </h3>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm text-gray-400 whitespace-pre-line">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
