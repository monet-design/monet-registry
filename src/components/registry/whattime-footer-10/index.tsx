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

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

interface FooterLink {
  label: string;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface WhattimeFooter10Props {
  mode?: "light" | "dark";
  columns?: FooterColumn[];
  companyName?: string;
  ceo?: string;
  phone?: string;
  email?: string;
  address?: string;
  businessNumber?: string;
  onlineBusinessNumber?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "주요 기능",
    links: [
      { label: "캘린더 연결" },
      { label: "가능한시간 설정" },
      { label: "팀 일정 관리" },
      { label: "웹사이트에 삽입" },
    ],
  },
  {
    title: "고객 사례",
    links: [
      { label: "고객 영업" },
      { label: "채용" },
      { label: "고객 관리" },
      { label: "교육" },
    ],
  },
  {
    title: "이메일 문의",
    links: [
      { label: "도움말 센터" },
      { label: "개발자 센터" },
      { label: "팀 채용" },
    ],
  },
];

export default function WhattimeFooter10({
  mode = "light",
  columns = defaultColumns,
  companyName = "주식회사 왓타임",
  ceo = "김재영",
  phone = "070-8844-1024",
  email = "contact@whattime.co.kr",
  address = "서울특별시 강남구 테헤란로 507, 위워크 삼성역점",
  businessNumber = "153-86-02475",
  onlineBusinessNumber = "2023-서울강남-06074",
}: WhattimeFooter10Props) {
  const colors = COLORS[mode];

  return (
    <footer className="relative w-full bg-white border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {columns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-sm font-bold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href || "#"}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="text-xs font-bold border border-gray-300 rounded px-1">Blog</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                  <Check className="h-5 w-5 text-white" strokeWidth={3} />
                </div>
              </div>

              {/* Company Info */}
              <div className="text-xs text-gray-500 space-y-1">
                <p>
                  {companyName} | 대표자 {ceo} | {phone} | {email} | {address}
                </p>
                <p>
                  사업자등록번호 {businessNumber} | 통신판매업 신고번호 {onlineBusinessNumber}
                </p>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">개인정보 보호정책</a>
              <a href="#" className="hover:text-gray-900 transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
