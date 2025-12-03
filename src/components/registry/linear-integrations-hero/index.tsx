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
    background: "#ffffff",
    cardBackground: "#f9fafb",
    border: "#e5e7eb",
    accent: "#8b5cf6",          // Purple-500
    accentSecondary: "#ec4899", // Pink-500
    button: "rgba(255, 255, 255, 0.1)",
    buttonHover: "rgba(255, 255, 255, 0.15)",
  },
  dark: {
    background: "#000000",
    cardBackground: "#111111",
    border: "#222222",
    accent: "#8b5cf6",
    accentSecondary: "#ec4899",
    button: "rgba(255, 255, 255, 0.1)",
    buttonHover: "rgba(255, 255, 255, 0.15)",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  // No external images - component uses inline code/UI examples
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Smile, Check } from "lucide-react";

interface LinearIntegrationsHeroProps {
  mode?: "light" | "dark";
  label?: string;
  title?: string;
  description?: string;
  card1Label?: string;
  card1Title?: string;
  card1Description?: string;
  card1ButtonText?: string;
  card1ButtonHref?: string;
  card2Label?: string;
  card2Title?: string;
  card2Description?: string;
  card2ButtonText?: string;
  card2ButtonHref?: string;
}

// Chat message component
interface ChatMessageProps {
  avatar: string;
  name: string;
  time: string;
  children: React.ReactNode;
  reactions?: Array<{ emoji: string; count: number }>;
}

function ChatMessage({ avatar, name, time, children, reactions }: ChatMessageProps) {
  return (
    <div className="flex gap-3 py-2 group">
      <div
        className="w-8 h-8 rounded-full flex-shrink-0"
        style={{ backgroundColor: avatar }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#1a1a1a] text-sm">{name}</span>
          <span className="text-xs text-gray-400">{time}</span>
        </div>
        <div className="text-sm text-[#1a1a1a] mt-0.5">{children}</div>
        {reactions && reactions.length > 0 && (
          <div className="flex gap-1.5 mt-2">
            {reactions.map((reaction, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-xs"
              >
                {reaction.emoji} {reaction.count}
              </span>
            ))}
            <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200">
              <Smile className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
      <div className="flex items-start gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1 rounded hover:bg-gray-100">
          <Check className="w-4 h-4 text-gray-400" />
        </button>
        <button className="p-1 rounded hover:bg-gray-100">
          <Smile className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}

// Code tag component
function CodeTag({ children, variant = "purple" }: { children: React.ReactNode; variant?: "purple" | "pink" }) {
  const bgColor = variant === "purple" ? "bg-purple-100 text-purple-700" : "bg-pink-100 text-pink-600";
  return (
    <code className={`px-1.5 py-0.5 rounded text-xs font-mono ${bgColor}`}>
      {children}
    </code>
  );
}

// Mention component
function Mention({ children }: { children: React.ReactNode }) {
  return <span className="text-purple-600 font-medium">{children}</span>;
}

// Code Editor component
function CodeEditor() {
  return (
    <div className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#222]">
      {/* Tab bar */}
      <div className="flex items-center gap-0 border-b border-[#222] bg-[#0f0f0f]">
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27ca3f]" />
          </div>
        </div>
        <div className="flex">
          <button className="px-4 py-2 text-xs text-gray-400 hover:text-gray-300 border-r border-[#222] flex items-center gap-1.5">
            <FileIcon /> Comment.tsx
          </button>
          <button className="px-4 py-2 text-xs text-gray-400 hover:text-gray-300 border-r border-[#222] flex items-center gap-1.5">
            <FileIcon /> Composer.tsx
          </button>
          <button className="px-4 py-2 text-xs text-gray-400 hover:text-gray-300 flex items-center gap-1.5">
            <FileIcon /> User.tsx
          </button>
        </div>
      </div>
      {/* Code content */}
      <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto">
        <CodeLine num={1}>
          <Keyword>import</Keyword> cx <Keyword>from</Keyword> <String>&quot;classnames&quot;</String>;
        </CodeLine>
        <CodeLine num={2}>
          <Keyword>import</Keyword> {"{"} <Component>Suspense</Component> {"}"} <Keyword>from</Keyword> <String>&quot;react&quot;</String>;
        </CodeLine>
        <CodeLine num={3}>
          <Keyword>import</Keyword> {"{"}
        </CodeLine>
        <CodeLine num={4}>
          {"  "}<Component>Comment</Component> <Keyword>as</Keyword> <Component>CommentPrimitive</Component>,
        </CodeLine>
        <CodeLine num={5}>
          {"  "}<Component>Timestamp</Component> <Keyword>as</Keyword> <Component>TimestampPrimitive</Component>,
        </CodeLine>
        <CodeLine num={6}>
          {"}"} <Keyword>from</Keyword> <String>&quot;@liveblocks/react-comments/primitives&quot;</String>;
        </CodeLine>
        <CodeLine num={7}>
          <Keyword>import</Keyword> {"{"} <Component>User</Component> {"}"} <Keyword>from</Keyword> <String>&quot;./User&quot;</String>;
        </CodeLine>
        <CodeLine num={8}>{""}</CodeLine>
        <CodeLine num={9}>
          <Keyword>export function</Keyword> <Function>Comment</Function>({"{"} comment, className, ...<Variable>props</Variable> {"}"}) {"{"}
        </CodeLine>
        <CodeLine num={10}>
          {"  "}<Keyword>return</Keyword> (
        </CodeLine>
        <CodeLine num={11}>
          {"    "}&lt;<Component>div</Component> <Attribute>className</Attribute>={"{"}cx(className, <String>&quot;p-4&quot;</String>){"}"} {"{"}<Variable>...props</Variable>{"}"}&gt;
        </CodeLine>
        <CodeLine num={12}>
          {"      "}&lt;<Component>div</Component> <Attribute>className</Attribute>=<String>&quot;flex items-center gap-3&quot;</String>&gt;
        </CodeLine>
        <CodeLine num={13}>
          {"        "}&lt;<Keyword>span</Keyword> <Attribute>className</Attribute>=<String>&quot;font-semibold&quot;</String>&gt;
        </CodeLine>
        <CodeLine num={14}>
          {"          "}&lt;<Component>Suspense</Component> <Attribute>fallback</Attribute>={"{"}comment.userId{"}"}&gt;
        </CodeLine>
        <CodeLine num={15}>
          {"            "}&lt;<Component>User</Component> <Attribute>userId</Attribute>={"{"}comment.userId{"}"} /&gt;
        </CodeLine>
        <CodeLine num={16}>
          {"          "}&lt;/<Component>Suspense</Component>&gt;
        </CodeLine>
        <CodeLine num={17}>
          {"        "}&lt;/<Keyword>span</Keyword>&gt;
        </CodeLine>
        <CodeLine num={18}>
          {"        "}&lt;<Component>TimestampPrimitive</Component>
        </CodeLine>
        <CodeLine num={19}>
          {"          "}<Attribute>date</Attribute>={"{"}comment.createdAt{"}"}
        </CodeLine>
      </div>
    </div>
  );
}

function CodeLine({ num, children }: { num: number; children: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="w-6 text-right mr-4 text-gray-600 select-none">{num}</span>
      <span className="text-gray-300">{children}</span>
    </div>
  );
}

function Keyword({ children }: { children: React.ReactNode }) {
  return <span className="text-purple-400">{children}</span>;
}

function String({ children }: { children: React.ReactNode }) {
  return <span className="text-emerald-400">{children}</span>;
}

function Component({ children }: { children: React.ReactNode }) {
  return <span className="text-pink-400">{children}</span>;
}

function Function({ children }: { children: React.ReactNode }) {
  return <span className="text-yellow-300">{children}</span>;
}

function Variable({ children }: { children: React.ReactNode }) {
  return <span className="text-orange-400">{children}</span>;
}

function Attribute({ children }: { children: React.ReactNode }) {
  return <span className="text-sky-400">{children}</span>;
}

function FileIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
    </svg>
  );
}

// Color dots component
function ColorDots() {
  const colors = [
    "#5B5BD6", // purple
    "#E54D7E", // pink
    "#F5A623", // yellow
    "#36B37E", // green
    "#00B8D9", // cyan
    "#6554C0", // indigo
  ];

  return (
    <div className="flex gap-1.5">
      {colors.map((color, idx) => (
        <div
          key={idx}
          className="w-5 h-5 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

// Tool icons component
function ToolIcons() {
  return (
    <div className="flex gap-1">
      <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v10M1 12h6m6 0h10" />
        </svg>
      </button>
      <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        </svg>
      </button>
    </div>
  );
}

// Shape icons component
function ShapeIcons() {
  return (
    <div className="flex gap-1">
      {[...Array(4)].map((_, idx) => (
        <button
          key={idx}
          className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
          </svg>
        </button>
      ))}
    </div>
  );
}

export default function LinearIntegrationsHero({
  mode = "dark",
  label = "CUSTOMIZABLE",
  title = "Integrate flawlessly\ninto your design",
  description = "Rely on versatile ready-made components, or use primitives to\nbuild a completely custom interface using React.",
  card1Label = "Default components",
  card1Title = "Make it your own",
  card1Description = "Default components allow you to customize colors,\nspacing, and more, via CSS variables and classes.",
  card1ButtonText = "Learn more",
  card1ButtonHref = "#",
  card2Label = "Primitives",
  card2Title = "Above and beyond",
  card2Description = "Primitives are unstyled, headless components\nwhich allow you to create fully custom\ncommenting experiences.",
  card2ButtonText = "Learn more",
  card2ButtonHref = "#",
}: LinearIntegrationsHeroProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full py-24 px-4" style={{ backgroundColor: colors.background }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-500 text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            {label}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
            {title}
          </h1>
          <p className="text-gray-400 text-base md:text-lg whitespace-pre-line">
            {description}
          </p>
        </motion.div>

        {/* Card 1 - Chat UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden mb-4"
          style={{ backgroundColor: colors.cardBackground, borderColor: colors.border, borderWidth: '1px' }}
        >
          {/* Chat Thread */}
          <div className="p-6">
            <div className="bg-white rounded-xl shadow-xl max-w-md mx-auto overflow-hidden">
              <div className="p-4 space-y-1 divide-y divide-gray-100">
                <ChatMessage
                  avatar="#f59e0b"
                  name="Guillaume"
                  time="4h ago"
                >
                  <Mention>@Marc</Mention> This looks great! Can I make it look like my brand?
                </ChatMessage>

                <ChatMessage
                  avatar="#8b5cf6"
                  name="Marc"
                  time="2h ago"
                >
                  Sure! Try to tweak <CodeTag variant="purple">--lb-radius</CodeTag> and <CodeTag variant="pink">--lb-accent</CodeTag> for example.
                </ChatMessage>

                <ChatMessage
                  avatar="#ec4899"
                  name="Alicia"
                  time="8m ago"
                  reactions={[
                    { emoji: "\u{1F389}", count: 4 },
                    { emoji: "\u{1F60D}", count: 3 },
                  ]}
                >
                  <Mention>@Marc</Mention> So cool!
                </ChatMessage>

                <ChatMessage
                  avatar="#10b981"
                  name="Nimesh"
                  time="now"
                >
                  Learn more at <a href="https://liveblocks.io/docs" className="text-blue-600 underline">https://liveblocks.io/docs</a>.
                </ChatMessage>
              </div>

              {/* Reply input */}
              <div className="border-t border-gray-100 p-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Reply to thread..."
                    className="flex-1 text-sm text-gray-500 bg-transparent outline-none"
                    readOnly
                  />
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15.172 7l-6.586 6.586a2 2 0 1 0 2.828 2.828l6.414-6.586a4 4 0 0 0-5.656-5.656l-6.415 6.585a6 6 0 1 0 8.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Smile className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Send button */}
              <div className="absolute bottom-3 right-3">
                <button className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white hover:bg-emerald-600">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Tool bar */}
          <div className="flex items-center justify-center gap-4 pb-6">
            <ToolIcons />
            <ShapeIcons />
            <ColorDots />
          </div>

          {/* Card 1 Text */}
          <div className="text-center pb-8 px-6">
            <span className="text-purple-500 text-xs font-medium tracking-wide mb-2 block">
              {card1Label}
            </span>
            <h2 className="text-xl font-semibold text-white mb-2">
              {card1Title}
            </h2>
            <p className="text-gray-400 text-sm mb-4 whitespace-pre-line">
              {card1Description}
            </p>
            <a
              href={card1ButtonHref}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium transition-colors"
              style={{ backgroundColor: colors.button }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.buttonHover}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.button}
            >
              {card1ButtonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Card 2 - Code Editor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: colors.cardBackground, borderColor: colors.border, borderWidth: '1px' }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left - Text */}
            <div className="p-8 flex flex-col justify-center">
              <span className="text-purple-500 text-xs font-medium tracking-wide mb-2 block">
                {card2Label}
              </span>
              <h2 className="text-xl font-semibold text-white mb-3">
                {card2Title}
              </h2>
              <p className="text-gray-400 text-sm mb-6 whitespace-pre-line">
                {card2Description}
              </p>
              <a
                href={card2ButtonHref}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium transition-colors self-start"
                style={{ backgroundColor: colors.button }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.buttonHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.button}
              >
                {card2ButtonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right - Code */}
            <div className="p-6">
              <CodeEditor />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
