"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
type ColorScheme = {
  background: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  betaTag: string;
  betaTagText: string;
  hiringTag: string;
  hiringTagText: string;
};

const COLORS: { light: ColorScheme; dark: ColorScheme } = {
  light: {
    background: "#FFFFFF",
    textPrimary: "#1A1A1A",
    textSecondary: "#666666",
    textMuted: "#999999",
    border: "#E5E5E5",
    betaTag: "#E8F4FD",
    betaTagText: "#2196F3",
    hiringTag: "#FFE4EC",
    hiringTagText: "#FF4D7D",
  },
  dark: {
    background: "#0A0A0A",
    textPrimary: "#F5F5F5",
    textSecondary: "#A0A0A0",
    textMuted: "#666666",
    border: "#333333",
    betaTag: "#1E3A5F",
    betaTagText: "#60A5FA",
    hiringTag: "#4A1A2C",
    hiringTagText: "#FF8FAB",
  },
};

/**
 * 푸터 링크 데이터
 */
const FOOTER_LINKS = {
  mainFeatures: {
    title: "주요기능",
    href: "/features",
    items: [
      { label: "웹사이트", href: "/features" },
      { label: "쇼핑몰", href: "/features#section3" },
      { label: "글로벌 판매", href: "/global_shopping" },
      { label: "앱스토어", href: "/appstore" },
      { label: "요금", href: "/pricing" },
    ],
  },
  explore: {
    title: "둘러보기",
    href: "/theme",
    items: [
      { label: "템플릿", href: "/theme" },
      { label: "고객사례", href: "/best_production_list" },
      { label: "블로그", href: "/blog" },
    ],
  },
  findExpert: {
    title: "전문가 찾기",
    href: "/expert",
    items: [
      { label: "전문가 찾기", href: "/expert" },
      { label: "작업 의뢰하기", href: "/expert/project" },
      { label: "전문가 되기", href: "/expert/intro" },
    ],
  },
  support: {
    title: "고객지원",
    href: "/qna",
    items: [
      { label: "고객 가이드(FAQ)", href: "/qna" },
      { label: "고객 성장 센터(교육)", href: "/edu" },
      { label: "아임웹 소식", href: "/notice" },
      { label: "쇼핑몰 이전 문의", href: "/shopping-migration", external: true },
      { label: "아임웹 리서치", href: "/research", external: true },
      { label: "개발자 센터", href: "/developers", tag: "Beta", external: true },
    ],
  },
  company: {
    title: "기업소개",
    href: "/team",
    items: [
      { label: "아임웹 팀", href: "/team", external: true },
      { label: "제휴문의", href: "/team/alliance", external: true },
      { label: "특허·인증서", href: "/team/patent", external: true },
      { label: "채용", href: "/career", tag: "진행 중", external: true },
      { label: "뉴스룸", href: "/team/newsroom", external: true },
      { label: "디자인 리소스 센터", href: "/design", external: true },
      { label: "IR 공고", href: "/team/ir", external: true },
    ],
  },
};

/**
 * 회사 정보
 */
const COMPANY_INFO = {
  name: "(주)아임웹",
  ceo: "이수모",
  privacyOfficer: "김형섭",
  businessNumber: "105-87-83592",
  ecommerceNumber: "제 2023-서울강남-02377",
  address: "서울 강남구 테헤란로 501 VPLEX",
  email: "help@imweb.me",
  slogan: "Start Your Brand",
  copyright: "imweb Corp.",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, Youtube, ChevronDown, Heart, Shield, CheckCircle } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  tag?: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  href: string;
  items: FooterLink[];
}

interface ImwebMeFooter8Props {
  mode?: "light" | "dark";
  companyInfo?: typeof COMPANY_INFO;
  footerLinks?: typeof FOOTER_LINKS;
}

function FooterLinkColumn({
  column,
  colors,
}: {
  column: FooterColumn;
  colors: ColorScheme;
}) {
  return (
    <div className="flex flex-col gap-4">
      <a
        href={column.href}
        className="text-base font-bold transition-colors hover:opacity-80"
        style={{ color: colors.textPrimary }}
      >
        {column.title}
      </a>
      <ul className="flex flex-col gap-3">
        {column.items.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-70"
              style={{ color: colors.textSecondary }}
            >
              {item.label}
              {item.tag && (
                <span
                  className="rounded px-2 py-0.5 text-xs font-medium"
                  style={{
                    backgroundColor:
                      item.tag === "Beta" ? colors.betaTag : colors.hiringTag,
                    color:
                      item.tag === "Beta"
                        ? colors.betaTagText
                        : colors.hiringTagText,
                  }}
                >
                  {item.tag}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLinks({ colors }: { colors: ColorScheme }) {
  const socialLinks = [
    { icon: Facebook, label: "페이스북", href: "#" },
    { icon: Instagram, label: "인스타그램", href: "#" },
    { icon: Youtube, label: "유투브", href: "#" },
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social, idx) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={idx}
            href={social.href}
            aria-label={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon
              size={18}
              style={{ color: colors.textMuted }}
            />
          </motion.a>
        );
      })}
    </div>
  );
}

function CompanyInfoSection({
  companyInfo,
  colors,
}: {
  companyInfo: typeof COMPANY_INFO;
  colors: ColorScheme;
}) {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const infoItems = [
    { label: "상호명", value: companyInfo.name },
    { label: "대표이사", value: companyInfo.ceo },
    { label: "개인정보책임자", value: companyInfo.privacyOfficer },
    { label: "사업자등록번호", value: companyInfo.businessNumber },
    { label: "통신판매업신고번호", value: companyInfo.ecommerceNumber },
  ];

  return (
    <address
      className="not-italic"
      style={{ color: colors.textMuted }}
    >
      <div className="flex flex-col gap-4">
        {/* 회사 정보 행 */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {infoItems.map((item, idx) => (
            <span key={idx} className="flex items-center">
              <span>
                {item.label} {item.value}
              </span>
              {idx < infoItems.length - 1 && (
                <span
                  className="mx-2 h-3 w-px"
                  style={{ backgroundColor: colors.border }}
                />
              )}
            </span>
          ))}
        </div>

        {/* 주소 */}
        <p className="text-sm">본사 : {companyInfo.address}</p>

        {/* 약관 및 지원 정보 */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          <div className="relative">
            <button
              onClick={() => setIsTermsOpen(!isTermsOpen)}
              className="flex items-center gap-1 font-bold transition-colors hover:opacity-70"
              style={{ color: colors.textSecondary }}
            >
              이용약관
              <ChevronDown
                size={16}
                className={`transition-transform ${isTermsOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>
          <span
            className="h-3 w-px"
            style={{ backgroundColor: colors.border }}
          />
          <a
            href="/privacy"
            className="font-bold transition-colors hover:opacity-70"
            style={{ color: colors.textSecondary }}
          >
            개인정보처리방침
          </a>
          <span
            className="h-3 w-px"
            style={{ backgroundColor: colors.border }}
          />
          <span>
            고객지원 :{" "}
            <button className="font-bold transition-colors hover:opacity-70">
              실시간 채팅
            </button>
            <a
              href={`mailto:${companyInfo.email}`}
              className="transition-colors hover:opacity-70"
            >
              {" "}
              및 이메일({companyInfo.email})
            </a>
          </span>
        </div>

        {/* 인증 마크 */}
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg border"
            style={{ borderColor: colors.border }}
            title="ISMS 인증"
          >
            <Shield size={20} style={{ color: colors.textMuted }} />
          </div>
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: "#4CAF50" }}
            title="대량문자 발송 인증"
          >
            <CheckCircle size={20} color="#FFFFFF" />
          </div>
        </div>
      </div>
    </address>
  );
}

function BrandSection({
  companyInfo,
  colors,
}: {
  companyInfo: typeof COMPANY_INFO;
  colors: ColorScheme;
}) {
  return (
    <div className="flex flex-col items-end gap-2">
      <p
        className="text-lg font-medium"
        style={{ color: colors.textPrimary }}
      >
        {companyInfo.slogan}
      </p>
      <div className="flex items-center gap-1 text-sm" style={{ color: colors.textMuted }}>
        <span>Made by</span>
        <Heart size={14} fill="#FF4D7D" color="#FF4D7D" />
        <span>{companyInfo.copyright}</span>
      </div>
    </div>
  );
}

export default function ImwebMeFooter8({
  mode = "light",
  companyInfo = COMPANY_INFO,
  footerLinks = FOOTER_LINKS,
}: ImwebMeFooter8Props) {
  const colors = COLORS[mode];

  const columns: FooterColumn[] = [
    footerLinks.mainFeatures,
    footerLinks.explore,
    footerLinks.findExpert,
    footerLinks.support,
    footerLinks.company,
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full px-6 py-12 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* 상단: 링크 목록 + SNS */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          {/* 링크 컬럼들 */}
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
            {columns.map((column, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <FooterLinkColumn column={column} colors={colors} />
              </motion.div>
            ))}
          </nav>

          {/* SNS 아이콘 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-start lg:justify-end"
          >
            <SocialLinks colors={colors} />
          </motion.div>
        </div>

        {/* 구분선 */}
        <div
          className="my-10 h-px w-full"
          style={{ backgroundColor: colors.border }}
        />

        {/* 하단: 회사 정보 + 브랜드 */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CompanyInfoSection companyInfo={companyInfo} colors={colors} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <BrandSection companyInfo={companyInfo} colors={colors} />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
