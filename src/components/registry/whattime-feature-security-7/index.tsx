"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#00A47C",
  },
  dark: {
    accent: "#00C896",
  },
} as const;

const IMAGES = {
  features: [
    {
      iconPath: "/scraped/whattime-co-kr-2025-12-14/images/image-82.png",
      iconAlt: "후보자 데이터 암호화",
      title: "후보자 데이터 암호화",
      description: "Transport Layer Security 기반 전송\nAES-256 암호화 저장\n데이터 감청, 위조로부터 안전한 관리",
    },
    {
      iconPath: "/scraped/whattime-co-kr-2025-12-14/images/image-83.png",
      iconAlt: "오래된 일정 데이터 파기",
      title: "오래된 일정 데이터 파기",
      description: "채용법에 의거한 개인정보 보유기간에 맞춰 안전하게 자동 파기됩니다",
    },
    {
      iconPath: "/scraped/whattime-co-kr-2025-12-14/images/image-84.png",
      iconAlt: "AWS 보안 솔루션",
      title: "AWS 보안 솔루션",
      description: "모든 데이터는 최고 수준의 보안을 유지하는 Amazon의 보안 데이터 센터를 통해 호스팅 및 관리됩니다.",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface SecurityFeature {
  iconPath: string;
  iconAlt: string;
  title: string;
  description: string;
}

interface WhattimeFeatureSecurity7Props {
  mode?: "light" | "dark";
  subtitle?: string;
  title?: string;
  highlightedText?: string;
  description?: string;
  features?: SecurityFeature[];
}

export default function WhattimeFeatureSecurity7({
  mode = "light",
  subtitle = "보안",
  title = "강력한 보안",
  highlightedText = "으로 안전하게",
  description = "최고 수준의 보안으로 안심하고 믿고 사용하세요.",
  features = IMAGES.features as unknown as SecurityFeature[],
}: WhattimeFeatureSecurity7Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span style={{ color: colors.accent }}>{title}</span>{highlightedText}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={feature.iconPath}
                  alt={feature.iconAlt}
                  width={90}
                  height={90}
                  className="h-[90px] w-[90px] object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
