"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    cardBorder: "#F1F0EE",
    textPrimary: "#111111",
    textSecondary: "#4C4C4C",
    textMuted: "#767676",
    // 통계 카드 색상
    stat1Bg: "#F1FDE7", // 연두 (kmong)
    stat1Border: "#D3E4C4",
    stat2Bg: "#F4E7FD", // 연보라 (NAVER)
    stat2Border: "#DFB7FA",
    stat3Bg: "#F1FDE7", // 연두 (Figma)
    stat3Border: "#D3E4C4",
    stat4Bg: "#FDE7E7", // 연핑크 (coupang)
    stat4Border: "#FAB7B7",
  },
  dark: {
    background: "#0A0A0A",
    cardBorder: "#262626",
    textPrimary: "#FFFFFF",
    textSecondary: "#B3B3B3",
    textMuted: "#737373",
    stat1Bg: "#1A2E14",
    stat1Border: "#2D4A22",
    stat2Bg: "#2A1A3E",
    stat2Border: "#3D2A54",
    stat3Bg: "#1A2E14",
    stat3Border: "#2D4A22",
    stat4Bg: "#3E1A1A",
    stat4Border: "#542A2A",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Instagram } from "lucide-react";

interface StatCard {
  stat: string;
  label: string;
  company: string;
  bgColor: string;
  borderColor: string;
}

interface TestimonialCard {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  instagram?: string;
}

interface HookableAiTestimonial4Props {
  mode?: "light" | "dark";
  badge?: string;
  heading?: string;
  statCards?: StatCard[];
  testimonials?: TestimonialCard[];
}

const defaultStatCards: StatCard[] = [
  {
    stat: "10X",
    label: "비용 절감",
    company: "kmong",
    bgColor: "#F1FDE7", // 연두
    borderColor: "#D3E4C4",
  },
  {
    stat: "2X",
    label: "구매 전환율",
    company: "NAVER",
    bgColor: "#F4E7FD", // 연보라
    borderColor: "#DFB7FA",
  },
  {
    stat: "5X",
    label: "생산성 증가",
    company: "Figma",
    bgColor: "#F1FDE7", // 연두
    borderColor: "#D3E4C4",
  },
  {
    stat: "10X",
    label: "신제품 출시 속도",
    company: "coupang",
    bgColor: "#FDE7E7", // 연핑크
    borderColor: "#FAB7B7",
  },
];

const defaultTestimonials: TestimonialCard[] = [
  {
    quote:
      '"상세페이지 하나 만드는데도 몇백씩 드는게 아까워서 계속 미루고 있었어요. 이제는 신제품 나올 때마다 바로 채팅하면서 만들어요!"',
    name: "이지윤",
    role: "유산균 스토어 'BDFerm' 마케터",
    avatar: "https://framerusercontent.com/images/Sw1eOQ929Bcfos5mlNitBWKK9u8.png?width=74&height=74",
    instagram: "https://www.instagram.com/bdferm_global/",
  },
  {
    quote:
      '"디자이너 연락하고 기다리고 수정요청하고... 이 과정만 2주는 걸렸는데, 이제는 하루 만에 끝나요. 제품 런칭속도가 완전 달라지네요."',
    name: "고우빈",
    role: "헬스 디바이스 기업 '머슬싱크' 대표",
    avatar: "https://framerusercontent.com/images/2iIndn5SmbzHHDVuPDdOIMCMD1I.png?width=74&height=74",
    instagram: "https://www.instagram.com/musclesync_official/",
  },
  {
    quote:
      '"같은 제품도 빠르게 다양한 버전으로 만들어볼 수 있어서 A/B 테스트하기 좋아요. 어떤 소구점이 더 잘 팔리는지 알 수 있어요."',
    name: "신재연",
    role: "비건빵 셀러 '우디베이크샵' 대표",
    avatar: "https://framerusercontent.com/images/m1TmmDgMdK6GvfiSR3zbFTuWcI.png?width=74&height=74",
    instagram: "https://www.instagram.com/udi_bakeshop/",
  },
  {
    quote:
      '"처음엔 반신반의 했는데 써보니까 완전 괜찮은데요..? 외주 디자이너 연락처 지워도 될 것 같아요."',
    name: "조수양",
    role: "건강 크래커 'Nourish' 대표",
    avatar: "https://framerusercontent.com/images/Hb7kJWo9BfMJgNeYuufTQCyTE.png?width=74&height=74",
    instagram: "https://www.instagram.com/nourish.cracker/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function HookableAiTestimonial4({
  mode = "light",
  badge = "실제 이용 후기",
  heading = "먼저 사용해본\n사용자들의 생생한 후기.",
  statCards = defaultStatCards,
  testimonials = defaultTestimonials,
}: HookableAiTestimonial4Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          {/* Badge */}
          <span
            className={`mb-6 inline-flex rounded-full px-3 py-1.5 text-sm font-medium shadow-sm ${
              isDark
                ? "bg-gray-800 text-gray-200"
                : "bg-white text-gray-900"
            }`}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
            }}
          >
            {badge}
          </span>

          {/* Heading */}
          <h2
            className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            style={{ color: colors.textPrimary }}
          >
            {heading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < heading.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-3"
        >
          {/* Row 1 */}
          {/* Stat Card 1 - kmong */}
          <motion.div variants={itemVariants}>
            <StatCardComponent
              stat={statCards[0].stat}
              label={statCards[0].label}
              company={statCards[0].company}
              bgColor={isDark ? colors.stat1Bg : statCards[0].bgColor}
              borderColor={isDark ? colors.stat1Border : statCards[0].borderColor}
              isDark={isDark}
            />
          </motion.div>

          {/* Stat Card 2 - NAVER */}
          <motion.div variants={itemVariants}>
            <StatCardComponent
              stat={statCards[1].stat}
              label={statCards[1].label}
              company={statCards[1].company}
              bgColor={isDark ? colors.stat2Bg : statCards[1].bgColor}
              borderColor={isDark ? colors.stat2Border : statCards[1].borderColor}
              isDark={isDark}
            />
          </motion.div>

          {/* Testimonial Card 1 - 이지윤 */}
          <motion.div variants={itemVariants}>
            <TestimonialCardComponent
              quote={testimonials[0].quote}
              name={testimonials[0].name}
              role={testimonials[0].role}
              avatar={testimonials[0].avatar}
              instagram={testimonials[0].instagram}
              colors={colors}
              isDark={isDark}
            />
          </motion.div>

          {/* Row 2 */}
          {/* Testimonial Card 2 - 고우빈 */}
          <motion.div variants={itemVariants}>
            <TestimonialCardComponent
              quote={testimonials[1].quote}
              name={testimonials[1].name}
              role={testimonials[1].role}
              avatar={testimonials[1].avatar}
              instagram={testimonials[1].instagram}
              colors={colors}
              isDark={isDark}
            />
          </motion.div>

          {/* Testimonial Card 3 - 신재연 */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <TestimonialCardComponent
              quote={testimonials[2].quote}
              name={testimonials[2].name}
              role={testimonials[2].role}
              avatar={testimonials[2].avatar}
              instagram={testimonials[2].instagram}
              colors={colors}
              isDark={isDark}
            />
          </motion.div>

          {/* Row 3 */}
          {/* Stat Card 3 - Figma */}
          <motion.div variants={itemVariants}>
            <StatCardComponent
              stat={statCards[2].stat}
              label={statCards[2].label}
              company={statCards[2].company}
              bgColor={isDark ? colors.stat3Bg : statCards[2].bgColor}
              borderColor={isDark ? colors.stat3Border : statCards[2].borderColor}
              isDark={isDark}
            />
          </motion.div>

          {/* Testimonial Card 4 - 조수양 */}
          <motion.div variants={itemVariants}>
            <TestimonialCardComponent
              quote={testimonials[3].quote}
              name={testimonials[3].name}
              role={testimonials[3].role}
              avatar={testimonials[3].avatar}
              instagram={testimonials[3].instagram}
              colors={colors}
              isDark={isDark}
            />
          </motion.div>

          {/* Stat Card 4 - coupang */}
          <motion.div variants={itemVariants}>
            <StatCardComponent
              stat={statCards[3].stat}
              label={statCards[3].label}
              company={statCards[3].company}
              bgColor={isDark ? colors.stat4Bg : statCards[3].bgColor}
              borderColor={isDark ? colors.stat4Border : statCards[3].borderColor}
              isDark={isDark}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: string;
  label: string;
  company: string;
  bgColor: string;
  borderColor: string;
  isDark: boolean;
}

function StatCardComponent({
  stat,
  label,
  company,
  bgColor,
  borderColor,
  isDark,
}: StatCardProps) {
  return (
    <div
      className="flex h-full min-h-[200px] flex-col justify-between rounded-xl p-6"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <div>
        <p
          className="text-4xl font-semibold md:text-5xl"
          style={{ color: isDark ? "#FFFFFF" : "#111111" }}
        >
          {stat}
        </p>
        <p
          className="mt-1 text-base"
          style={{ color: isDark ? "#B3B3B3" : "#4C4C4C" }}
        >
          {label}
        </p>
      </div>
      <p
        className="mt-4 text-xl font-bold tracking-tight md:text-2xl"
        style={{ color: isDark ? "#FFFFFF" : "#111111" }}
      >
        {company}
      </p>
    </div>
  );
}

type ColorScheme = typeof COLORS.light | typeof COLORS.dark;

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  instagram?: string;
  colors: ColorScheme;
  isDark: boolean;
}

function TestimonialCardComponent({
  quote,
  name,
  role,
  avatar,
  instagram,
  colors,
  isDark,
}: TestimonialCardProps) {
  return (
    <div
      className="flex h-full min-h-[200px] flex-col justify-between rounded-xl p-6"
      style={{
        backgroundColor: isDark ? "#1A1A1A" : "#FFFFFF",
        border: `1px solid ${colors.cardBorder}`,
      }}
    >
      <p
        className="text-base leading-relaxed md:text-lg"
        style={{ color: isDark ? "#E5E5E5" : "#1E1E1E" }}
      >
        {quote}
      </p>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-lg">
            <img
              src={avatar}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p
              className="text-sm font-semibold"
              style={{ color: isDark ? "#FFFFFF" : "#111111" }}
            >
              {name}
            </p>
            <p
              className="text-sm"
              style={{ color: isDark ? "#B3B3B3" : "#4C4C4C" }}
            >
              {role}
            </p>
          </div>
        </div>
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-opacity hover:opacity-80"
            style={{
              backgroundColor: isDark ? "#FFFFFF" : "#111111",
            }}
            aria-label={`${name} Instagram`}
          >
            <Instagram
              className="h-5 w-5"
              style={{ color: isDark ? "#111111" : "#FFFFFF" }}
            />
          </a>
        )}
      </div>
    </div>
  );
}
