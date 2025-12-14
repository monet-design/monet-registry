"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#f5f5f0",
    cardBg: "#e8e4de",
    heading: "#111827",
    text: "#6b7280",
    accent: "#7c3aed", // purple
  },
  dark: {
    background: "#1f2937",
    cardBg: "#374151",
    heading: "#f9fafb",
    text: "#9ca3af",
    accent: "#a78bfa",
  },
} as const;

const IMAGES = {
  inbox: {
    path: "/registry/userband-com-feature-3/inbox.jpg",
    alt: "Unified Inbox Screenshot",
    prompt:
      "SaaS unified inbox showing messages from multiple channels like email, slack, and widget with user avatars and message previews",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface UserbandComFeature3Props {
  mode?: "light" | "dark";
}

export default function UserbandComFeature3({
  mode = "light",
}: UserbandComFeature3Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-12"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-center gap-8">
            {/* Left - Image */}
            <motion.div
              className="flex justify-center w-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-200"
                style={{ backgroundColor: colors.cardBg }}
              >
                {/* Channel Icons */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
                  {/* Widget Icon */}
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  {/* Gmail Icon */}
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                  {/* Slack Icon */}
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.124 2.521a2.528 2.528 0 0 1 2.52-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zm-2.521 10.124a2.528 2.528 0 0 1 2.521 2.52A2.528 2.528 0 0 1 15.166 24a2.527 2.527 0 0 1-2.521-2.522v-2.52h2.521zm0-1.271a2.527 2.527 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.521h-6.312z"
                        fill="#E01E5A"
                      />
                    </svg>
                  </div>
                </div>

                {/* Inbox List */}
                <div className="absolute right-4 top-4 bottom-4 left-32 bg-white rounded-xl shadow-lg p-4 overflow-hidden">
                  <h4 className="font-semibold mb-4" style={{ color: colors.heading }}>
                    Inbox
                  </h4>
                  <div className="space-y-4">
                    {[
                      { name: "김승현", message: "이메일 주소는 설정 - 내 프로필 페이지에서 변경할 수..." },
                      { name: "이성아", message: "팀 설정 페이지에서 멤버를 초대할 수 있어요...." },
                      { name: "박지환", message: "안녕하세요, 지환님! 피드백 감사합니다. 내일중으로 확..." },
                      { name: "고세준", message: "커스텀 알림 설정 기능은 이번주중으로 공개될 예정이에..." },
                      { name: "정지영", message: "안녕하세요, 지영님! 이용에 불편을 드려 죄송합니다." },
                      { name: "송아림", message: "네, 감사합니다. 추가적으로 문의하실 사항이 있다면 언..." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate" style={{ color: colors.heading }}>
                            {item.name}
                          </p>
                          <p className="text-xs truncate" style={{ color: colors.text }}>
                            {item.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              className="w-full lg:px-16 py-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p
                className="text-sm font-bold mb-3"
                style={{ color: colors.accent }}
              >
                서포트 에이전트
              </p>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: colors.heading }}
              >
                통합 인박스
              </h2>
              <p
                className="mt-6 text-lg leading-8"
                style={{ color: colors.text }}
              >
                앱 내 위젯, 이메일, Slack 등에서 남긴 유저의 목소리를 자동으로
                수집합니다. 유저와 나눈 모든 대화를 통합된 유저밴드 인박스에서
                관리할 수 있습니다.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 transition-colors"
                  style={{ color: colors.text }}
                >
                  <span>더 알아보기</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
