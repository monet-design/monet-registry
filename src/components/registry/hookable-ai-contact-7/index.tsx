"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    cardBackground: "#ECECEC",
    formCardBackground: "#FFFFFF",
    text: "#111111",
    textSecondary: "#3D3D3D",
    buttonBackground: "#111111",
    buttonText: "#FFFFFF",
    inputBackground: "#ECECEC",
    placeholderText: "#888888",
    gradientStart: "#E35DFF",
    gradientEnd: "#00D9FF",
  },
  dark: {
    background: "#111111",
    cardBackground: "#1F1F1F",
    formCardBackground: "#1A1A1A",
    text: "#FFFFFF",
    textSecondary: "#BBBBBB",
    buttonBackground: "#FFFFFF",
    buttonText: "#111111",
    inputBackground: "#2A2A2A",
    placeholderText: "#666666",
    gradientStart: "#E35DFF",
    gradientEnd: "#00D9FF",
  },
} as const;

/**
 * 콘텐츠 텍스트
 */
const CONTENT = {
  badge: "문의하기",
  heading: "궁금한 점이 있다면\n편하게 말씀주세요.",
  description:
    "문의, 지원요청, 기업 간 협업, 피드백이 있으시면 연락주세요.\n언제나 친절히 도와드리겠습니다.",
  email: "koh@fulcrum.io.kr",
  emailButton: "메일 전송",
  address: "서울특별시 서초구 매헌로 16,\n서울AI허브 하이브랜드 1205호",
  addressButton: "사무실 보기",
  formTitle: "어떤 질문이든 환영해요",
  formEmoji: "🤗",
  submitButton: "CEO에게 보내기",
  fields: {
    name: { label: "이름", placeholder: "이름을 입력해주세요" },
    subject: { label: "제목", placeholder: "제목을 입력해주세요" },
    email: { label: "E-Mail", placeholder: "이메일 주소를 입력해주세요" },
    phone: { label: "전화번호", placeholder: "회신 받으실 전화번호를 입력해주세요" },
    question: { label: "질문 사항", placeholder: "질문 사항을 입력해주세요" },
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";

interface HookableAiContact7Props {
  mode?: "light" | "dark";
  email?: string;
  address?: string;
  mapUrl?: string;
  onSubmit?: (data: {
    name: string;
    subject: string;
    email: string;
    phone: string;
    question: string;
  }) => void;
}

export default function HookableAiContact7({
  mode = "light",
  email = CONTENT.email,
  address = CONTENT.address,
  mapUrl = "https://map.naver.com/p/entry/place/1013471135?placePath=%2Fhome",
  onSubmit,
}: HookableAiContact7Props) {
  const colors = COLORS[mode];
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    question: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative w-full py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.5 }}>
              <span
                className="inline-block px-4 py-2 text-sm font-medium rounded-full shadow-sm"
                style={{
                  backgroundColor: mode === "light" ? "#FFFFFF" : colors.cardBackground,
                  color: colors.text,
                }}
              >
                {CONTENT.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-semibold leading-tight whitespace-pre-line"
              style={{ color: colors.text }}
            >
              {CONTENT.heading}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-lg leading-relaxed whitespace-pre-line"
              style={{ color: colors.textSecondary }}
            >
              {CONTENT.description}
            </motion.p>

            {/* Contact Cards */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Email Card */}
              <div
                className="flex items-center justify-between p-4 rounded-xl"
                style={{ backgroundColor: colors.cardBackground }}
              >
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6" style={{ color: colors.text }} />
                  <span className="text-base font-medium" style={{ color: colors.text }}>
                    {email}
                  </span>
                </div>
                <a
                  href={`mailto:${email}`}
                  className="px-5 py-3 rounded-lg text-sm font-medium transition-transform hover:scale-105"
                  style={{
                    backgroundColor: colors.buttonBackground,
                    color: colors.buttonText,
                  }}
                >
                  {CONTENT.emailButton}
                </a>
              </div>

              {/* Address Card */}
              <div
                className="flex items-center justify-between p-4 rounded-xl"
                style={{ backgroundColor: colors.cardBackground }}
              >
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0" style={{ color: colors.text }} />
                  <span
                    className="text-base font-medium whitespace-pre-line"
                    style={{ color: colors.text }}
                  >
                    {address}
                  </span>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg text-sm font-medium transition-transform hover:scale-105 flex-shrink-0"
                  style={{
                    backgroundColor: colors.buttonBackground,
                    color: colors.buttonText,
                  }}
                >
                  {CONTENT.addressButton}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Gradient Border Effect */}
            <div
              className="absolute inset-0 rounded-2xl p-[2px]"
              style={{
                background: `linear-gradient(135deg, ${colors.gradientStart}, ${colors.gradientEnd})`,
              }}
            >
              <div
                className="w-full h-full rounded-2xl"
                style={{ backgroundColor: colors.formCardBackground }}
              />
            </div>

            {/* Form Content */}
            <form
              onSubmit={handleSubmit}
              className="relative z-10 p-8 md:p-10 space-y-6"
            >
              {/* Form Title */}
              <h3
                className="text-2xl md:text-3xl font-semibold"
                style={{ color: colors.text }}
              >
                {CONTENT.formTitle} {CONTENT.formEmoji}
              </h3>

              {/* Name and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    className="text-base font-medium"
                    style={{ color: colors.text }}
                  >
                    {CONTENT.fields.name.label}
                  </label>
                  <input
                    type="text"
                    placeholder={CONTENT.fields.name.placeholder}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all focus:ring-2 focus:ring-opacity-50"
                    style={{
                      backgroundColor: colors.inputBackground,
                      color: colors.text,
                      borderColor: "transparent",
                    }}
                    required
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label
                    className="text-base font-medium"
                    style={{ color: colors.text }}
                  >
                    {CONTENT.fields.subject.label}
                  </label>
                  <input
                    type="text"
                    placeholder={CONTENT.fields.subject.placeholder}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all focus:ring-2 focus:ring-opacity-50"
                    style={{
                      backgroundColor: colors.inputBackground,
                      color: colors.text,
                      borderColor: "transparent",
                    }}
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  className="text-base font-medium"
                  style={{ color: colors.text }}
                >
                  {CONTENT.fields.email.label}
                </label>
                <input
                  type="email"
                  placeholder={CONTENT.fields.email.placeholder}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: colors.inputBackground,
                    color: colors.text,
                    borderColor: "transparent",
                  }}
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label
                  className="text-base font-medium"
                  style={{ color: colors.text }}
                >
                  {CONTENT.fields.phone.label}
                </label>
                <input
                  type="tel"
                  placeholder={CONTENT.fields.phone.placeholder}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: colors.inputBackground,
                    color: colors.text,
                    borderColor: "transparent",
                  }}
                  required
                />
              </div>

              {/* Question Textarea */}
              <div className="space-y-2">
                <label
                  className="text-base font-medium"
                  style={{ color: colors.text }}
                >
                  {CONTENT.fields.question.label}
                </label>
                <textarea
                  placeholder={CONTENT.fields.question.placeholder}
                  value={formData.question}
                  onChange={(e) =>
                    setFormData({ ...formData, question: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all focus:ring-2 focus:ring-opacity-50 resize-y"
                  style={{
                    backgroundColor: colors.inputBackground,
                    color: colors.text,
                    borderColor: "transparent",
                  }}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-8 py-4 rounded-xl text-base font-medium transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: colors.buttonBackground,
                  color: colors.buttonText,
                }}
              >
                {CONTENT.submitButton}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
