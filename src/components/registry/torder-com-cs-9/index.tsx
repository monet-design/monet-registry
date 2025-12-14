"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    text: "#111",
    subtext: "#666",
    bg: "#ffffff",
  },
  dark: {
    accent: "#FC0000",
    text: "#fff",
    subtext: "#999",
    bg: "#0a0a0a",
  },
} as const;

const VIDEO_THUMBNAIL = "/scraped/torder-com-2025-12-14/images/image-193.png";
const VIDEO_URL = "https://youtu.be/MSAb0vsfDjs";

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Play } from "lucide-react";
import Image from "next/image";

interface TorderComCs9Props {
  mode?: "light" | "dark";
}

export default function TorderComCs9({
  mode = "light",
}: TorderComCs9Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-24 px-4"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            {/* 365일 새벽 2시까지 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
                style={{ color: colors.text }}
              >
                365일 새벽 2시까지
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: colors.subtext }}
              >
                늦은 밤까지 고생하시는 사장님들의 원활한 <br />
                매장 운영을 위해 티오더는 업계 유일, 연중무휴 <br />
                심야 고객센터를 운영하고 있습니다.
              </p>
            </motion.div>

            {/* 원격 지원 서비스 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
                style={{ color: colors.text }}
              >
                원격 지원 서비스
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: colors.subtext }}
              >
                방문 서비스 지원이 어려운 사장님들을 위해 티오더는 <br />
                업계 최초 팀뷰어TeamViewer 원격 프로그램을 통해 <br />
                신속한 유지·보수와 서비스 개선을 제공합니다.
              </p>
              <p
                className="text-sm font-semibold pt-4"
                style={{ color: colors.text }}
              >
                티오더 CS에 만족한 사장님들의 후기가 궁금하다면?
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full text-white font-bold transition-colors"
                style={{ backgroundColor: colors.accent }}
              >
                영상 보러가기
              </motion.a>
            </motion.div>
          </div>

          {/* Right Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              {/* Tablet Frame */}
              <div className={`absolute inset-0 ${mode === "dark" ? "bg-gray-800" : "bg-gray-200"} p-4`}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                  {/* Video Thumbnail */}
                  <Image
                    src={VIDEO_THUMBNAIL}
                    alt="실제 사장님들이 직접 말하는 티오더 CS"
                    fill
                    className="object-cover"
                  />

                  {/* Play Button Overlay */}
                  <a
                    href={VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                  >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-red-600 fill-red-600 ml-1" />
                    </div>
                  </a>

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-xl md:text-2xl font-bold leading-tight">
                      실제 사장님들이 <br />
                      직접 말하는 티오더 CS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
