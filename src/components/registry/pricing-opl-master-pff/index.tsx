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
    cardBg: "#F5F5F5",
    textPrimary: "#1A1A1A",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    accent: "#F26522",
    accentHover: "#E05A1A",
    strikethrough: "#FFD93D",
    linkColor: "#F26522",
  },
  dark: {
    background: "#0F172A",
    cardBg: "#1E293B",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    textMuted: "#64748B",
    accent: "#F97316",
    accentHover: "#EA580C",
    strikethrough: "#FACC15",
    linkColor: "#FB923C",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  ebookPlan: {
    title: "eBook",
    subtitle: "PDF, EPUB, Kindle.",
    price: "$29",
    buttonText: "Buy for $29",
    guarantee: "30-day moneyback guarantee",
  },
  paperbackPlan: {
    title: "Paperback + eBook",
    subtitle: "Worldwide shipping.",
    price: "$39",
    buttonText: "Buy for $39",
    previewLink: "Free preview",
  },
  amazonSection: {
    text: "Paperback is also available on",
    links: [
      { name: "amazon.de", url: "#" },
      { name: "amazon.com", url: "#" },
      { name: "amazon.co.uk", url: "#" },
    ],
  },
  bookTitle: "Product\nDesign\nPortfolio",
  bookSubtitle: "Final",
  authorName: "Peter Williams",
};

/**
 * 이미지 에셋
 */
const IMAGES = {
  ebookMockup: {
    path: "/registry/pricing-opl-master-pff/ebook-mockup.png",
    alt: "eBook displayed on tablet and phone devices",
    prompt: `<is_transparent_background>true</is_transparent_background>
<summary>Digital eBook mockup showing Product Design Portfolio book on tablet and smartphone devices</summary>
<mood>Clean, professional, modern tech product showcase</mood>
<background_summary>Transparent background</background_summary>
<primary_element>Gray tablet device in portrait orientation showing a book cover with title "Product Design Portfolio" and yellow sticky notes saying "Final", positioned on the left. The book cover has clean typography with the title in black on white background.</primary_element>
<etc_element>A smartphone showing the same book cover, positioned slightly behind and to the right of the tablet, angled to show depth. Both devices have thin bezels and modern design.</etc_element>`,
  },
  paperbackMockup: {
    path: "/registry/pricing-opl-master-pff/paperback-mockup.png",
    alt: "Physical paperback book with eBook",
    prompt: `<is_transparent_background>true</is_transparent_background>
<summary>Physical paperback book mockup showing Product Design Portfolio with yellow sticky notes</summary>
<mood>Professional, tangible, real product showcase</mood>
<background_summary>Transparent background</background_summary>
<primary_element>A physical white paperback book standing upright with title "Product Design Portfolio" in black text. Yellow sticky notes attached saying "Final" in handwritten style. The book has clean minimal design with author name at bottom.</primary_element>
<etc_element>Subtle shadow beneath the book to give it a floating, professional look.</etc_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, Eye } from "lucide-react";

interface PlanContent {
  title: string;
  subtitle: string;
  price: string;
  buttonText: string;
  guarantee?: string;
  previewLink?: string;
}

interface AmazonLink {
  name: string;
  url: string;
}

interface AmazonSection {
  text: string;
  links: AmazonLink[];
}

interface PricingOplMasterPffProps {
  mode?: "light" | "dark";
  ebookPlan?: PlanContent;
  paperbackPlan?: PlanContent;
  amazonSection?: AmazonSection;
  bookTitle?: string;
  bookSubtitle?: string;
  authorName?: string;
  onEbookBuyClick?: () => void;
  onPaperbackBuyClick?: () => void;
  onPreviewClick?: () => void;
}

// Book Cover Component
function BookCover({
  title,
  subtitle,
  authorName,
  variant = "tablet",
  strikethroughColor,
}: {
  title: string;
  subtitle: string;
  authorName: string;
  variant?: "tablet" | "phone" | "book";
  strikethroughColor: string;
}) {
  const lines = title.split("\n");
  const scale = variant === "phone" ? 0.6 : variant === "book" ? 1 : 0.85;

  return (
    <div
      className="bg-white border border-gray-200 flex flex-col justify-between p-3"
      style={{
        width: variant === "phone" ? 60 : variant === "book" ? 140 : 100,
        height: variant === "phone" ? 90 : variant === "book" ? 180 : 130,
        transform: `scale(${scale})`,
        transformOrigin: "center",
      }}
    >
      <div className="flex-1 flex flex-col justify-center">
        {lines.map((line, idx) => (
          <p
            key={idx}
            className="text-gray-900 font-semibold leading-tight"
            style={{ fontSize: variant === "book" ? 14 : 10 }}
          >
            {line}
          </p>
        ))}
        <div className="mt-1">
          <span
            className="text-xs relative inline-block"
            style={{
              fontSize: variant === "book" ? 11 : 8,
              color: "#9CA3AF",
            }}
          >
            <span
              style={{
                textDecoration: "line-through",
                textDecorationColor: strikethroughColor,
                textDecorationThickness: "2px",
              }}
            >
              {subtitle}
            </span>
          </span>
          <span
            className="ml-1 font-medium text-gray-900"
            style={{ fontSize: variant === "book" ? 11 : 8 }}
          >
            {subtitle}
          </span>
        </div>
      </div>
      <div className="mt-auto pt-2 border-t border-gray-100">
        <p
          className="text-gray-500 truncate"
          style={{ fontSize: variant === "book" ? 8 : 6 }}
        >
          {authorName}
        </p>
      </div>
    </div>
  );
}

// Device Mockup Component
function TabletPhoneMockup({
  title,
  subtitle,
  authorName,
  strikethroughColor,
}: {
  title: string;
  subtitle: string;
  authorName: string;
  strikethroughColor: string;
}) {
  return (
    <div className="relative w-48 h-52 flex items-center justify-center">
      {/* Tablet */}
      <div className="absolute left-0 top-4 bg-gray-800 rounded-lg p-1.5 shadow-lg">
        <div className="bg-white rounded overflow-hidden">
          <BookCover
            title={title}
            subtitle={subtitle}
            authorName={authorName}
            variant="tablet"
            strikethroughColor={strikethroughColor}
          />
        </div>
      </div>
      {/* Phone */}
      <div className="absolute right-4 bottom-4 bg-gray-900 rounded-lg p-1 shadow-lg z-10">
        <div className="bg-white rounded overflow-hidden">
          <BookCover
            title={title}
            subtitle={subtitle}
            authorName={authorName}
            variant="phone"
            strikethroughColor={strikethroughColor}
          />
        </div>
      </div>
    </div>
  );
}

// Physical Book Mockup Component
function PhysicalBookMockup({
  title,
  subtitle,
  authorName,
  strikethroughColor,
}: {
  title: string;
  subtitle: string;
  authorName: string;
  strikethroughColor: string;
}) {
  return (
    <div className="relative w-48 h-52 flex items-center justify-center">
      {/* Book with spine effect */}
      <div className="relative">
        {/* Book spine shadow */}
        <div
          className="absolute -left-1 top-2 bottom-2 w-3 bg-gradient-to-r from-gray-300 to-gray-100 rounded-l"
          style={{ transform: "skewY(-2deg)" }}
        />
        {/* Book cover */}
        <div className="relative bg-white border border-gray-200 shadow-lg rounded-r overflow-hidden">
          <BookCover
            title={title}
            subtitle={subtitle}
            authorName={authorName}
            variant="book"
            strikethroughColor={strikethroughColor}
          />
        </div>
        {/* Yellow sticky note */}
        <div
          className="absolute -top-2 -right-2 w-12 h-10 bg-yellow-300 shadow-md flex items-center justify-center"
          style={{ transform: "rotate(5deg)" }}
        >
          <span className="text-xs font-medium text-gray-800">Final!</span>
        </div>
      </div>
    </div>
  );
}

export default function PricingOplMasterPff({
  mode = "light",
  ebookPlan = DEFAULT_CONTENT.ebookPlan,
  paperbackPlan = DEFAULT_CONTENT.paperbackPlan,
  amazonSection = DEFAULT_CONTENT.amazonSection,
  bookTitle = DEFAULT_CONTENT.bookTitle,
  bookSubtitle = DEFAULT_CONTENT.bookSubtitle,
  authorName = DEFAULT_CONTENT.authorName,
  onEbookBuyClick,
  onPaperbackBuyClick,
  onPreviewClick,
}: PricingOplMasterPffProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        .font-heading {
          font-family: "Inter", system-ui, sans-serif;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* eBook Card */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col items-center text-center"
            style={{ backgroundColor: colors.cardBg }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Device Mockup */}
            <TabletPhoneMockup
              title={bookTitle}
              subtitle={bookSubtitle}
              authorName={authorName}
              strikethroughColor={colors.strikethrough}
            />

            {/* Plan Info */}
            <h3
              className="font-heading text-xl font-bold mt-4 mb-1"
              style={{ color: colors.textPrimary }}
            >
              {ebookPlan.title}
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: colors.textSecondary }}
            >
              {ebookPlan.subtitle}
            </p>

            {/* Buy Button */}
            <motion.button
              onClick={onEbookBuyClick}
              className="w-full max-w-xs py-3 px-6 rounded-full text-white font-semibold text-sm transition-colors duration-200"
              style={{ backgroundColor: colors.accent }}
              whileHover={{
                backgroundColor: colors.accentHover,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              {ebookPlan.buttonText}
            </motion.button>

            {/* Guarantee */}
            {ebookPlan.guarantee && (
              <div className="flex items-center gap-1.5 mt-4">
                <Check
                  className="w-4 h-4"
                  style={{ color: colors.textMuted }}
                />
                <span
                  className="text-xs"
                  style={{ color: colors.textMuted }}
                >
                  {ebookPlan.guarantee}
                </span>
              </div>
            )}
          </motion.div>

          {/* Paperback + eBook Card */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col items-center text-center"
            style={{ backgroundColor: colors.cardBg }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Book Mockup */}
            <PhysicalBookMockup
              title={bookTitle}
              subtitle={bookSubtitle}
              authorName={authorName}
              strikethroughColor={colors.strikethrough}
            />

            {/* Plan Info */}
            <h3
              className="font-heading text-xl font-bold mt-4 mb-1"
              style={{ color: colors.textPrimary }}
            >
              {paperbackPlan.title}
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: colors.textSecondary }}
            >
              {paperbackPlan.subtitle}
            </p>

            {/* Buy Button */}
            <motion.button
              onClick={onPaperbackBuyClick}
              className="w-full max-w-xs py-3 px-6 rounded-full text-white font-semibold text-sm transition-colors duration-200"
              style={{ backgroundColor: colors.accent }}
              whileHover={{
                backgroundColor: colors.accentHover,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              {paperbackPlan.buttonText}
            </motion.button>

            {/* Preview Link */}
            {paperbackPlan.previewLink && (
              <button
                onClick={onPreviewClick}
                className="flex items-center gap-1.5 mt-4 transition-opacity hover:opacity-70"
                style={{ color: colors.linkColor }}
              >
                <Eye className="w-4 h-4" />
                <span className="text-xs font-medium">
                  {paperbackPlan.previewLink}
                </span>
              </button>
            )}
          </motion.div>
        </div>

        {/* Amazon Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            className="text-sm mb-4"
            style={{ color: colors.textSecondary }}
          >
            {amazonSection.text}
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {amazonSection.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="transition-opacity hover:opacity-70"
              >
                <span
                  className="font-medium text-sm"
                  style={{ color: colors.textPrimary }}
                >
                  <span className="font-bold">amazon</span>
                  <span style={{ color: colors.accent }}>
                    .{link.name.replace("amazon.", "")}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
