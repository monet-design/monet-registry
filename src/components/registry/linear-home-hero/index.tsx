"use client";

import { motion } from "motion/react";
import { Plus, ChevronRight, Github, Figma, MessageCircle } from "lucide-react";

// Integration item type
interface IntegrationItem {
  icon: React.ReactNode;
  name: string;
  description: string;
}

// Integration pair type for grid
interface IntegrationPair {
  icons: React.ReactNode[];
  names: string;
  description: string;
}

interface LinearHomeHeroProps {
  title?: string;
  titleLine2?: string;
  description?: string;
  ctaText?: string;
  integrationPairs?: IntegrationPair[];
  onCtaClick?: () => void;
}

// Custom SVG Icons for integrations
function FigmaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <Figma className={className} />;
}

function SlackIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

function ZendeskIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.4 4.66V19.5H0L11.4 4.66zm1.2 14.84V4.66L24 19.5H12.6zM11.4.462c0 3.147-2.553 5.7-5.7 5.7S0 3.609 0 .462h11.4zm1.2 0c0 3.147 2.553 5.7 5.7 5.7s5.7-2.553 5.7-5.7H12.6z" />
    </svg>
  );
}

function FrontIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.23 7.658h.963c-.37 2.626-.555 5.09-.555 7.394v3.125l5.593-4.98a1.16 1.16 0 011.538 0l5.593 4.98v-3.125c0-2.304-.185-4.768-.555-7.394h.963c.37 2.72.555 5.277.555 7.672v7.507a.982.982 0 01-1.636.74l-5.877-5.234a.388.388 0 00-.513 0L5.422 23.577a.982.982 0 01-1.636-.74V15.33c0-2.395.185-4.952.555-7.672h.889zm5.458-7.235a.194.194 0 01.324-.145l4.87 4.335a.194.194 0 01-.13.338H8.948a.194.194 0 01-.13-.338l1.87-1.665V.423z" />
    </svg>
  );
}

function GitLabIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m23.6 9.593-.033-.086L20.3.98a.851.851 0 0 0-.336-.405.879.879 0 0 0-.521-.144.87.87 0 0 0-.508.176.858.858 0 0 0-.296.422l-2.205 6.748H7.566L5.36 1.03a.857.857 0 0 0-.296-.421.87.87 0 0 0-.508-.177.879.879 0 0 0-.521.144.85.85 0 0 0-.336.405L.432 9.507l-.033.086a6.066 6.066 0 0 0 2.012 7.01l.01.008.028.02 4.97 3.722 2.458 1.86 1.496 1.131a1.009 1.009 0 0 0 1.22 0l1.496-1.131 2.458-1.86 4.998-3.742.012-.01a6.068 6.068 0 0 0 2.044-7.008Z" />
    </svg>
  );
}

function DiscordIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function SentryIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.6 8.196c1.459.842 2.67 2.046 3.494 3.481l.001.001a10.097 10.097 0 0 1 1.222 3.209h4.167c0-1.755-.392-3.494-1.143-5.073l-.001-.001a11.82 11.82 0 0 0-3.064-3.959l2.621-4.349zm4.356 16.91h2.899A1.503 1.503 0 0 0 22.5 17.61a1.46 1.46 0 0 0-.203-.74l-2.903-4.85a8.266 8.266 0 0 1 2.758 5.395h-3.867a6.862 6.862 0 0 0-1.482-3.282l-.857 1.423a5.185 5.185 0 0 1 .914 2.024c.12.53.182 1.073.182 1.619v.215H13.15a5.137 5.137 0 0 1-.24-1.834h-1.725a6.862 6.862 0 0 0 .438 2.4l.001.001c.19.49.43.96.714 1.397h3.45c-.273-.45-.51-.923-.704-1.413a5.127 5.127 0 0 1-.24-.981h3.887a5.137 5.137 0 0 1-.178-1.308zm-14.42 0H1.5a1.46 1.46 0 0 1-.203-.74 1.503 1.503 0 0 1 1.335-1.495h2.036a6.806 6.806 0 0 1 .178 1.308 5.157 5.157 0 0 1-.178 1.834H2.544a1.503 1.503 0 0 0-1.335 1.495 1.46 1.46 0 0 0 .203.74l2.903 4.85a8.266 8.266 0 0 0-2.758-5.395h3.867c.284 1.195.815 2.328 1.559 3.327l.858-1.425a5.147 5.147 0 0 0-1.096-3.65v-.001c-.376-.476-.818-.897-1.315-1.249l.857-1.423a6.837 6.837 0 0 1 1.482 3.282h3.867c0-.546-.062-1.09-.182-1.619a5.127 5.127 0 0 0-.914-2.024l.001-.001.857-1.422c.667.954 1.152 2.025 1.433 3.155l.001.001c.1.382.18.77.239 1.161h1.725a6.862 6.862 0 0 0-1.671-4.231l-.857 1.423a5.147 5.147 0 0 1 1.096 3.65l-.001.001c-.12.53-.307 1.043-.556 1.525h-3.45c.273-.45.51-.923.704-1.413a5.127 5.127 0 0 0 .24-.981H7.24a5.137 5.137 0 0 0-.24 1.834h-3.11z" />
    </svg>
  );
}

function AirbyteIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.527.075a1.087 1.087 0 0 0-1.054 0L.574 6.2a1.072 1.072 0 0 0-.527.923v9.754c0 .38.201.733.527.923l10.899 6.125a1.087 1.087 0 0 0 1.054 0l10.899-6.125c.326-.19.527-.542.527-.923V7.123a1.07 1.07 0 0 0-.527-.923L12.527.075ZM12 6.147a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88Zm-2.88 4.32a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88Zm5.76 0a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88Zm-2.88 4.32a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88Z" />
    </svg>
  );
}

function IntercomIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.802 18.267a.122.122 0 0 0-.157.058c-.103.2-.38.63-.84 1.058a7.56 7.56 0 0 1-1.883 1.344c-1.564.83-3.51 1.25-5.78 1.25h-.282c-2.27 0-4.217-.42-5.78-1.25a7.56 7.56 0 0 1-1.884-1.344c-.46-.427-.736-.858-.84-1.058a.122.122 0 0 0-.156-.058.116.116 0 0 0-.064.154c.108.24.403.716.897 1.193a8.03 8.03 0 0 0 2.007 1.45c1.64.88 3.675 1.326 6.043 1.326h.282c2.368 0 4.402-.446 6.043-1.326a8.03 8.03 0 0 0 2.007-1.45c.494-.477.79-.953.897-1.193a.116.116 0 0 0-.064-.154h.554zM4.55 12.696c0 .32.26.58.58.58s.58-.26.58-.58V6.898c0-.32-.26-.58-.58-.58s-.58.26-.58.58v5.798zm2.908 2.034c0 .32.26.58.58.58s.58-.26.58-.58V4.864c0-.32-.26-.58-.58-.58s-.58.26-.58.58v9.866zm2.908.87c0 .32.26.58.58.58s.58-.26.58-.58V3.994c0-.32-.26-.58-.58-.58s-.58.26-.58.58v11.606zm2.909 0c0 .32.26.58.58.58s.58-.26.58-.58V3.994c0-.32-.26-.58-.58-.58s-.58.26-.58.58v11.606zm2.908-.87c0 .32.26.58.58.58s.58-.26.58-.58V4.864c0-.32-.26-.58-.58-.58s-.58.26-.58.58v9.866zm2.909-2.034c0 .32.26.58.58.58s.58-.26.58-.58V6.898c0-.32-.26-.58-.58-.58s-.58.26-.58.58v5.798z" />
    </svg>
  );
}

// Default integration pairs for grid
const defaultIntegrationPairs: IntegrationPair[] = [
  {
    icons: [<Github key="gh" className="w-4 h-4" />, <GitLabIcon key="gl" className="w-4 h-4" />],
    names: "GitHub and GitLab.",
    description: "Sync PRs with issues that close automatically.",
  },
  {
    icons: [<SlackIcon key="sl" className="w-4 h-4" />, <DiscordIcon key="dc" className="w-4 h-4" />],
    names: "Slack and Discord.",
    description: "Create issues and set up alerts.",
  },
  {
    icons: [<SentryIcon key="sn" className="w-4 h-4" />],
    names: "Sentry.",
    description: "Automatically create issues from code exceptions.",
  },
  {
    icons: [<AirbyteIcon key="ab" className="w-4 h-4" />],
    names: "Airbyte.",
    description: "Sync workspace data to external warehouses and databases.",
  },
  {
    icons: [<FrontIcon key="fr" className="w-4 h-4" />, <IntercomIcon key="ic" className="w-4 h-4" />, <ZendeskIcon key="zd" className="w-4 h-4" />],
    names: "Front, Intercom, Zendesk.",
    description: "Keep a tight loop with your users.",
  },
  {
    icons: [<FigmaIcon key="fg" className="w-4 h-4" />],
    names: "Figma.",
    description: "Streamline work across design and engineering.",
  },
];

// Integration icons for the circle
const integrationIcons = [
  { icon: <FigmaIcon className="w-5 h-5" />, label: "Figma" },
  { icon: <SlackIcon className="w-5 h-5" />, label: "Slack" },
  { icon: <ZendeskIcon className="w-5 h-5" />, label: "Zendesk" },
  { icon: <FrontIcon className="w-5 h-5" />, label: "Front" },
  { icon: <Github className="w-5 h-5" />, label: "GitHub" },
  { icon: <IntercomIcon className="w-5 h-5" />, label: "Intercom" },
];

// Integration Circle Component
function IntegrationCircle() {
  return (
    <div className="relative flex items-center justify-center gap-3 py-8">
      {/* Left icons */}
      {integrationIcons.slice(0, 3).map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          className="flex items-center justify-center w-10 h-10 text-white/60 hover:text-white/90 transition-colors"
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Center Plus Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Outer glow ring */}
        <div className="absolute -inset-4 rounded-full bg-[#5B4B9E]/20 blur-xl" />
        <div className="absolute -inset-2 rounded-full border border-[#5B4B9E]/30" />

        {/* Main button */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#7C5FC4] to-[#5B4B9E] shadow-lg shadow-purple-500/30">
          <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
      </motion.div>

      {/* Right icons */}
      {integrationIcons.slice(3).map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          className="flex items-center justify-center w-10 h-10 text-white/60 hover:text-white/90 transition-colors"
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
}

// Integration Grid Item
function IntegrationGridItem({
  pair,
  delay,
}: {
  pair: IntegrationPair;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-3"
    >
      <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
        {pair.icons.map((icon, i) => (
          <span key={i} className="text-white/70">
            {icon}
          </span>
        ))}
      </div>
      <div>
        <span className="text-white/90 font-medium text-sm">{pair.names}</span>{" "}
        <span className="text-white/50 text-sm">{pair.description}</span>
      </div>
    </motion.div>
  );
}

// Background Glow Effect
function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top center glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#2A1B5E]/40 via-[#1A0F3D]/20 to-transparent blur-3xl" />

      {/* Purple accent glow behind icons */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#5B4B9E]/20 blur-[100px] rounded-full" />

      {/* Subtle side glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#3D2A7D]/10 blur-[120px] rounded-full" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#3D2A7D]/10 blur-[120px] rounded-full" />
    </div>
  );
}

// Main Component
export default function LinearHomeHero({
  title = "Linear workflows.",
  titleLine2 = "Exponential results.",
  description = "From customer support integrations to\npowerful Git automations, Linear streamlines\nthe entire product development process.",
  ctaText = "Discover integrations",
  integrationPairs = defaultIntegrationPairs,
  onCtaClick,
}: LinearHomeHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#010317] overflow-hidden">
      {/* Background Effects */}
      <BackgroundGlow />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span
            className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light italic tracking-tight"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {title}
          </span>
          <span
            className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light italic tracking-tight"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {titleLine2}
          </span>
        </motion.h1>

        {/* Integration Circle */}
        <div className="mt-8">
          <IntegrationCircle />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/90 text-lg sm:text-xl leading-relaxed whitespace-pre-line mt-8 max-w-2xl mx-auto font-medium"
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2A2A3A] hover:bg-[#3A3A4A] text-white/90 text-sm font-medium rounded-full transition-colors"
          >
            {ctaText}
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 mb-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
          {integrationPairs.map((pair, index) => (
            <IntegrationGridItem
              key={index}
              pair={pair}
              delay={0.7 + index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010317] to-transparent pointer-events-none z-10" />

      {/* Google Fonts for Instrument Serif */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap');
      `}</style>
    </section>
  );
}
