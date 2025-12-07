"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    accentHover: "#EA580C",
    discord: "#5865F2",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
    discord: "#5865F2",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface VoosterAiKoRoadmap3Props {
  mode?: "light" | "dark";
}

const roadmapItems = [
  {
    title: "컨텍스트 통합 관리",
    description:
      "우리 회사, 서비스의 모든 데이터를 이해하고,\n작업마다 정확한 컨텍스트를 제공합니다.",
    gridClass: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
  },
  {
    title: "팀 협업 기능",
    description:
      "Cursor 도입 개발팀 최적화 협업 기능을 제공합니다.\nMCP로 모든 티켓 처리가 가능해집니다.",
    gridClass: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    title: "마일스톤, 로드맵 관리",
    description:
      "티켓 처리 데이터 심층 분석으로 프로젝트의 진행상황,\n퍼포먼스를 한눈에 파악할 수 있습니다.",
    gridClass: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
  },
  {
    title: "인사이트 도출",
    description:
      "GA 등 여러 서비스의 데이터를 종합 분석해\n인사이트를 도출하고, 액션 플랜을 제안합니다.",
    gridClass: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
];

export default function VoosterAiKoRoadmap3({
  mode = "light",
}: VoosterAiKoRoadmap3Props) {
  const colors = COLORS[mode];

  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-medium text-purple-600">로드맵</p>
          <h2 className="mb-4 text-4xl font-medium tracking-tight text-gray-950 md:text-5xl">
            함께 만들어가는 Vooster의 미래
          </h2>
          <p className="text-lg font-light text-gray-600">
            사용자 피드백을 기반으로 지속적으로 발전하고 있습니다
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 grid w-full auto-rows-[10rem] grid-cols-1 gap-4 md:grid-cols-2 lg:auto-rows-[12rem] lg:grid-cols-3 lg:grid-rows-2"
        >
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`group relative flex h-fit flex-col justify-between overflow-hidden rounded-xl bg-white pt-10 sm:h-auto ${item.gridClass} [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]`}
            >
              {/* Content */}
              <div className="pointer-events-none z-10 mt-auto flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
                <h3 className="text-xl font-semibold text-neutral-700">
                  {item.title}
                </h3>
                <p className="max-w-lg text-sm tracking-tighter text-neutral-400 whitespace-pre-line">
                  {item.description}
                </p>
              </div>

              {/* Hover Button */}
              <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <a
                  href="#"
                  className="pointer-events-auto inline-flex h-8 items-center justify-center whitespace-nowrap rounded px-3 text-xs font-medium text-neutral-600 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-900"
                >
                  알림받기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Hover Overlay */}
              <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
            </div>
          ))}

          {/* Discord Card - What's Next */}
          <div className="group relative flex h-fit flex-col justify-between overflow-hidden rounded-xl bg-white pt-10 sm:h-auto lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]">
            {/* Background with Discord Icon */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100 opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="absolute right-6 top-6 size-12 text-purple-400 lg:size-32"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              <div className="absolute left-4 top-4">
                <div className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              </div>
            </div>

            {/* Content */}
            <div className="pointer-events-none z-10 mt-auto flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
              <h3 className="text-xl font-semibold text-neutral-700">
                What&apos;s Next?
              </h3>
              <p className="max-w-lg text-sm tracking-tighter text-neutral-400 whitespace-pre-line">
                커뮤니티에서 피드백을 제공해주세요.{"\n"}실시간으로 반영하여 더
                나은 제품을 만들겠습니다.
              </p>
            </div>

            {/* Hover Button */}
            <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href="#"
                className="pointer-events-auto inline-flex h-8 items-center justify-center whitespace-nowrap rounded px-3 text-xs font-medium text-neutral-600 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-900"
              >
                피드백 제공
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Hover Overlay */}
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl bg-gray-900 px-8 py-12 text-center text-white"
        >
          <h3
            className="mb-4 text-3xl font-medium md:text-4xl"
            style={{ color: colors.accent }}
          >
            지금 합류하세요
          </h3>
          <p className="mx-auto mb-6 max-w-2xl text-gray-300">
            얼리어답터 커뮤니티에 참여하여 제품 개선에 직접 기여하고, AI Product
            Manager의 미래를 만들어보세요.
          </p>
          <p className="mb-8 text-sm text-gray-400">
            #신기능우선테스트 #기술지원 #제품로드맵제안
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-gray-600 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-all hover:bg-gray-100"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-[#5865F2]"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
            커뮤니티
          </a>
        </motion.div>
      </div>
    </section>
  );
}
