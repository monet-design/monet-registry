"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
interface ColorScheme {
  background: string;
  cardBackground: string;
  cardBorder: string;
  titleText: string;
  subtitleText: string;
  labelText: string;
  bodyText: string;
  accentPurple: string;
  accentBlue: string;
  mutedText: string;
}

const COLORS: Record<"light" | "dark", ColorScheme> = {
  light: {
    background: "#FFFFFF",
    cardBackground: "#F5F5F5",
    cardBorder: "#E5E5E5",
    titleText: "#1A1A1A",
    subtitleText: "#666666",
    labelText: "#888888",
    bodyText: "#333333",
    accentPurple: "#8B5CF6",
    accentBlue: "#3B82F6",
    mutedText: "#999999",
  },
  dark: {
    background: "#000000",
    cardBackground: "#141414",
    cardBorder: "#262626",
    titleText: "#FFFFFF",
    subtitleText: "#888888",
    labelText: "#6B6B6B",
    bodyText: "#FFFFFF",
    accentPurple: "#8B5CF6",
    accentBlue: "#5865F2",
    mutedText: "#6B6B6B",
  },
};

/**
 * Preview type definitions
 */
interface TagItem {
  icon: string;
  text: string;
}

interface SlackMessage {
  avatar: string;
  name: string;
  time: string;
  text: string;
  hasReaction?: boolean;
}

interface RequestPreviewData {
  type: "request";
  teamName: string;
  teamIcon: string;
  teamColor: string;
  requestTitle: string;
  requestText: string;
}

interface FormField {
  label: string;
  type: string;
}

interface FormPreviewData {
  type: "form";
  formTitle: string;
  formIcon: string;
  formColor: string;
  fields: FormField[];
}

interface ThreadMessage {
  avatar: string;
  channelName: string;
  channelIcon: string;
  time: string;
  text: string;
  subMessage?: {
    tag: string;
    tagLabel: string;
    description: string;
  };
}

interface ThreadPreviewData {
  type: "thread";
  threadTitle: string;
  messages: ThreadMessage[];
}

interface PrivatePreviewData {
  type: "private";
  icon: string;
  title: string;
  text: string;
}

interface TagsPreviewData {
  type: "tags";
  tags: TagItem[];
}

interface SlackPreviewData {
  type: "slack";
  messages: SlackMessage[];
}

type PreviewData =
  | TagsPreviewData
  | SlackPreviewData
  | RequestPreviewData
  | FormPreviewData
  | ThreadPreviewData
  | PrivatePreviewData;

interface UseCase {
  id: string;
  label: string;
  title: string;
  preview: PreviewData;
}

/**
 * Use case 데이터
 */
const USE_CASES: UseCase[] = [
  {
    id: "bug-reporting",
    label: "Streamline bug reporting",
    title: "Enable people outside of engineering to quickly file bug reports without worrying about complex issue details.",
    preview: {
      type: "tags",
      tags: [
        { icon: "hashtag", text: "#eng" },
        { icon: "clock", text: "EngineeringHub" },
        { icon: "file", text: "Bug template" },
        { icon: "flag", text: "SLA set to 24h" },
      ],
    },
  },
  {
    id: "it-help-desk",
    label: "Build an IT help desk",
    title: "Turn any message in your #ask-IT channel into an IT ticket by reacting with a ticket emoji.",
    preview: {
      type: "slack",
      messages: [
        {
          avatar: "/registry/footer-linear-asks-use-cases/avatar1.png",
          name: "alyssa",
          time: "14:25",
          text: "Conference room audio isn't working",
          hasReaction: true,
        },
        {
          avatar: "/registry/footer-linear-asks-use-cases/avatar2.png",
          name: "kenneth",
          time: "13:31",
          text: "I need a new computer",
          hasReaction: true,
        },
      ],
    },
  },
  {
    id: "data-science",
    label: "Centralize data request intake",
    title: "Manage requests and questions to your Data Science team more efficiently.",
    preview: {
      type: "request",
      teamName: "Data science",
      teamIcon: "A",
      teamColor: "#5865F2",
      requestTitle: "Request",
      requestText: "I need help with this SQL query:\nhttps://metabase.solar.app/dashboard/449",
    },
  },
  {
    id: "ops-requests",
    label: "Standardize Ops requests",
    title: "Configure templates with concrete instructions, placeholders, and checkboxes to standardize and streamline intake.",
    preview: {
      type: "form",
      formTitle: "KYC request",
      formIcon: "A",
      formColor: "#F59E0B",
      fields: [
        { label: "Identity proof", type: "header" },
        { label: "UID or Unique identification number", type: "checkbox" },
        { label: "PAN card", type: "checkbox" },
        { label: "Driving license", type: "checkbox" },
        { label: "Credit or debit card", type: "checkbox" },
      ],
    },
  },
  {
    id: "customer-success",
    label: "Improve customer success",
    title: "Add Linear Asks to shared Slack channels to enable your most important customers to file bug reports and feature requests.",
    preview: {
      type: "thread",
      threadTitle: "Thread",
      messages: [
        {
          avatar: "/registry/footer-linear-asks-use-cases/avatar3.png",
          channelName: "Asks",
          channelIcon: "A",
          time: "1 day ago",
          text: "Leela added a new Bug report",
          subMessage: {
            tag: "ENG-451",
            tagLabel: "Theme selector is broken",
            description: "I'm hitting a bug with the theme selector.",
          },
        },
      ],
    },
  },
  {
    id: "hr-tickets",
    label: "Manage sensitive HR tickets",
    title: "Create private Asks via DM for sensitive requests that only you and your HR team can access.",
    preview: {
      type: "private",
      icon: "lock",
      title: "Private Ask",
      text: "I have a question about my paychec",
    },
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Hash, Clock, FileText, Flag, Lock } from "lucide-react";

// Tag Preview Component
function TagsPreview({
  tags,
  colors
}: {
  tags: TagItem[];
  colors: ColorScheme;
}) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "hashtag":
        return <Hash className="w-3 h-3" />;
      case "clock":
        return <Clock className="w-3 h-3" />;
      case "file":
        return <FileText className="w-3 h-3" />;
      case "flag":
        return <Flag className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag, i) => (
        <div
          key={i}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs"
          style={{
            backgroundColor: colors.cardBorder,
            color: colors.mutedText,
          }}
        >
          {getIcon(tag.icon)}
          <span>{tag.text}</span>
        </div>
      ))}
    </div>
  );
}

// Slack Messages Preview
function SlackPreview({
  messages,
  colors
}: {
  messages: SlackMessage[];
  colors: ColorScheme;
}) {
  return (
    <div className="mt-4 space-y-3">
      {messages.map((msg, i) => (
        <div
          key={i}
          className="flex items-start gap-2.5 p-2.5 rounded-lg"
          style={{ backgroundColor: colors.cardBorder }}
        >
          <div
            className="w-8 h-8 rounded-md flex-shrink-0 overflow-hidden"
            style={{ backgroundColor: colors.mutedText }}
          >
            <img
              src={msg.avatar}
              alt={msg.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium" style={{ color: colors.bodyText }}>
                {msg.name}
              </span>
              <span className="text-xs" style={{ color: colors.mutedText }}>
                {msg.time}
              </span>
            </div>
            <p className="text-sm mt-0.5" style={{ color: colors.mutedText }}>
              {msg.text}
            </p>
            {msg.hasReaction && (
              <div className="flex items-center gap-1 mt-2">
                <span
                  className="text-xs px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: colors.accentBlue, color: "#FFFFFF" }}
                >
                  +1
                </span>
                <span className="text-xs">✓</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Request Preview
function RequestPreview({
  preview,
  colors
}: {
  preview: RequestPreviewData;
  colors: ColorScheme;
}) {
  return (
    <div className="mt-4 rounded-lg p-3" style={{ backgroundColor: colors.cardBorder }}>
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-6 h-6 rounded flex items-center justify-center text-xs font-semibold text-white"
          style={{ backgroundColor: preview.teamColor }}
        >
          {preview.teamIcon}
        </div>
        <span className="text-sm font-medium" style={{ color: colors.bodyText }}>
          {preview.teamName}
        </span>
      </div>
      <div
        className="text-xs font-medium px-2 py-1 rounded inline-block mb-2"
        style={{ backgroundColor: colors.background, color: colors.mutedText }}
      >
        {preview.requestTitle}
      </div>
      <p className="text-xs leading-relaxed" style={{ color: colors.mutedText }}>
        {preview.requestText.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < preview.requestText.split('\n').length - 1 && <br />}
          </span>
        ))}
      </p>
      <div
        className="w-full h-0.5 mt-3 rounded"
        style={{ backgroundColor: preview.teamColor }}
      />
    </div>
  );
}

// Form Preview
function FormPreview({
  preview,
  colors
}: {
  preview: FormPreviewData;
  colors: ColorScheme;
}) {
  return (
    <div className="mt-4 rounded-lg p-3" style={{ backgroundColor: colors.cardBorder }}>
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-6 h-6 rounded flex items-center justify-center text-xs font-semibold text-white"
          style={{ backgroundColor: preview.formColor }}
        >
          {preview.formIcon}
        </div>
        <span className="text-sm font-medium" style={{ color: colors.bodyText }}>
          {preview.formTitle}
        </span>
      </div>
      <div className="space-y-1.5">
        {preview.fields.map((field, i) => (
          <div key={i} className="flex items-center gap-2">
            {field.type === "header" ? (
              <span className="text-xs font-medium" style={{ color: colors.bodyText }}>
                {field.label}
              </span>
            ) : (
              <>
                <div
                  className="w-3.5 h-3.5 rounded border flex-shrink-0"
                  style={{ borderColor: colors.mutedText }}
                />
                <span className="text-xs" style={{ color: colors.mutedText }}>
                  {field.label}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Thread Preview
function ThreadPreview({
  preview,
  colors
}: {
  preview: ThreadPreviewData;
  colors: ColorScheme;
}) {
  return (
    <div className="mt-4 rounded-lg p-3" style={{ backgroundColor: colors.cardBorder }}>
      <div className="text-xs font-medium mb-3" style={{ color: colors.bodyText }}>
        {preview.threadTitle}
      </div>
      {preview.messages.map((msg, i) => (
        <div key={i}>
          <div className="flex items-start gap-2">
            <div
              className="w-7 h-7 rounded-md flex-shrink-0 overflow-hidden"
              style={{ backgroundColor: colors.mutedText }}
            >
              <img
                src={msg.avatar}
                alt={msg.channelName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <div
                  className="w-4 h-4 rounded flex items-center justify-center text-[10px] font-semibold text-white"
                  style={{ backgroundColor: colors.accentPurple }}
                >
                  {msg.channelIcon}
                </div>
                <span className="text-xs font-medium" style={{ color: colors.bodyText }}>
                  {msg.channelName}
                </span>
                <span className="text-[10px]" style={{ color: colors.mutedText }}>
                  {msg.time}
                </span>
              </div>
              <p className="text-xs mt-1" style={{ color: colors.mutedText }}>
                {msg.text}
              </p>
              {msg.subMessage && (
                <div
                  className="mt-2 pl-2 border-l-2"
                  style={{ borderColor: colors.accentPurple }}
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: colors.accentPurple, color: "#FFFFFF" }}
                    >
                      {msg.subMessage.tag}
                    </span>
                    <span className="text-[10px]" style={{ color: colors.accentPurple }}>
                      {msg.subMessage.tagLabel}
                    </span>
                  </div>
                  <p className="text-[10px] mt-1" style={{ color: colors.mutedText }}>
                    {msg.subMessage.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Private Ask Preview
function PrivatePreview({
  preview,
  colors
}: {
  preview: PrivatePreviewData;
  colors: ColorScheme;
}) {
  return (
    <div className="mt-4 rounded-lg p-3" style={{ backgroundColor: colors.cardBorder }}>
      <div className="flex items-center gap-2 mb-2">
        <Lock className="w-4 h-4" style={{ color: colors.mutedText }} />
        <span className="text-sm font-medium" style={{ color: colors.bodyText }}>
          {preview.title}
        </span>
      </div>
      <p className="text-xs" style={{ color: colors.mutedText }}>
        {preview.text}...
      </p>
    </div>
  );
}

// Use Case Card Component
function UseCaseCard({
  useCase,
  colors,
  index,
}: {
  useCase: UseCase;
  colors: ColorScheme;
  index: number;
}) {
  const renderPreview = () => {
    const preview = useCase.preview;
    switch (preview.type) {
      case "tags":
        return <TagsPreview tags={preview.tags} colors={colors} />;
      case "slack":
        return <SlackPreview messages={preview.messages} colors={colors} />;
      case "request":
        return <RequestPreview preview={preview} colors={colors} />;
      case "form":
        return <FormPreview preview={preview} colors={colors} />;
      case "thread":
        return <ThreadPreview preview={preview} colors={colors} />;
      case "private":
        return <PrivatePreview preview={preview} colors={colors} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="rounded-2xl p-5 h-full"
      style={{
        backgroundColor: colors.cardBackground,
        border: `1px solid ${colors.cardBorder}`,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span
        className="text-xs font-medium"
        style={{ color: colors.labelText }}
      >
        {useCase.label}
      </span>
      <h3
        className="text-base font-semibold leading-snug mt-2"
        style={{ color: colors.bodyText }}
      >
        {useCase.title}
      </h3>
      {renderPreview()}
    </motion.div>
  );
}

interface FooterLinearAsksUseCasesProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  useCases?: UseCase[];
}

export default function FooterLinearAsksUseCases({
  mode = "dark",
  title = "How teams use\nLinear Asks",
  subtitle = "Linear Asks supports all types of workplace requests.\nFrom engineering and design to IT, legal, and HR.",
  useCases = USE_CASES,
}: FooterLinearAsksUseCasesProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
            style={{ color: colors.titleText }}
          >
            {title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ color: colors.subtitleText }}
          >
            {subtitle.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < subtitle.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Row 1 */}
          <div className="lg:col-span-1">
            <UseCaseCard useCase={useCases[0]} colors={colors} index={0} />
          </div>
          <div className="lg:col-span-1">
            <UseCaseCard useCase={useCases[1]} colors={colors} index={1} />
          </div>
          <div className="lg:col-span-1">
            <UseCaseCard useCase={useCases[2]} colors={colors} index={2} />
          </div>

          {/* Row 2 */}
          <div className="lg:col-span-1">
            <UseCaseCard useCase={useCases[3]} colors={colors} index={3} />
          </div>
          <div className="lg:col-span-1 lg:-mt-12">
            <UseCaseCard useCase={useCases[4]} colors={colors} index={4} />
          </div>
          <div className="lg:col-span-1">
            <UseCaseCard useCase={useCases[5]} colors={colors} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
