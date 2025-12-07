"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    accentLight: "#FFF7ED",
  },
  dark: {
    accent: "#FB923C",
    accentLight: "#431407",
  },
} as const;

const CONTENT = {
  title: "고객의 데이터를",
  titleHighlight: "가장 안전하게 보호합니다.",
};

const TRUST_ITEMS = [
  {
    icon: "shield",
    title: "데이터 통신 암호화",
    description:
      "모든 통신 과정에서 TLS/SSL을 이용하여 고객의 정보와 모든 데이터를 안전하게 보호합니다.",
  },
  {
    icon: "aws",
    title: "Zero-trust on AWS",
    description:
      "서버와 데이터베이스 접근에 대한 기기/네트워크 (VPN), IdP/MFA 등 여러 보안 레이어를 확보하여 최고 수준의 보안성을 준수하고 있습니다.",
  },
  {
    icon: "lock",
    title: "비밀 유지 서약",
    description:
      "고객사의 정보를 누설하지 않도록 전 직원 비밀 유지 서약을 진행합니다.",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface BoltaIoTrust6Props {
  mode?: "light" | "dark";
}

export default function BoltaIoTrust6({ mode = "light" }: BoltaIoTrust6Props) {
  const colors = COLORS[mode];

  const getIcon = (type: string) => {
    switch (type) {
      case "shield":
        return (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
            <path
              fill={colors.accent}
              d="M12 2l8 4v6c0 5.55-3.84 10.74-8 12-4.16-1.26-8-6.45-8-12V6l8-4zm0 2.18L6 6.72v5.28c0 4.54 3.06 8.84 6 9.87 2.94-1.03 6-5.33 6-9.87V6.72l-6-2.54z"
            />
            <path
              fill={colors.accent}
              d="M12 7a2 2 0 100 4 2 2 0 000-4zm0 6c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              opacity="0.5"
            />
          </svg>
        );
      case "aws":
        return (
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xs"
            style={{ backgroundColor: colors.accent }}
          >
            AWS
          </div>
        );
      case "lock":
        return (
          <svg className="w-8 h-8" fill={colors.accent} viewBox="0 0 24 24">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-normal"
          >
            {CONTENT.title}
            <br />
            {CONTENT.titleHighlight}
          </motion.h2>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: colors.accentLight }}
              >
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
