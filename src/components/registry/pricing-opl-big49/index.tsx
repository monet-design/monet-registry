"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F7",
    accent: "#3EB5A7",
    accentHover: "#35A090",
    textPrimary: "#333333",
    textSecondary: "#666666",
    border: "#E0E0E0",
  },
  dark: {
    background: "#25242C",
    accent: "#3EB5A7",
    accentHover: "#4FCFC0",
    textPrimary: "#FFFFFF",
    textSecondary: "#A0A0A0",
    border: "#3EB5A7",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Facebook, Twitter, Instagram } from "lucide-react";

// SVG Network Graphics
function BasicNetwork({ accentColor }: { accentColor: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-24 h-24 md:w-32 md:h-32"
      fill="none"
    >
      {/* Outer circle */}
      <circle
        cx="60"
        cy="60"
        r="50"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
        fill="none"
      />
      {/* Connecting line */}
      <line
        x1="45"
        y1="45"
        x2="75"
        y2="75"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1"
      />
      {/* Node 1 */}
      <circle cx="45" cy="45" r="5" fill={accentColor} />
      {/* Node 2 */}
      <circle cx="75" cy="75" r="5" fill={accentColor} />
    </svg>
  );
}

function PlatinumNetwork({ accentColor }: { accentColor: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-24 h-24 md:w-32 md:h-32"
      fill="none"
    >
      {/* Outer circle */}
      <circle
        cx="60"
        cy="60"
        r="50"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
        fill="none"
      />
      {/* Connecting lines */}
      <line
        x1="35"
        y1="35"
        x2="60"
        y2="50"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1"
      />
      <line
        x1="60"
        y1="50"
        x2="85"
        y2="40"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1"
      />
      <line
        x1="60"
        y1="50"
        x2="50"
        y2="75"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1"
      />
      <line
        x1="50"
        y1="75"
        x2="80"
        y2="80"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1"
      />
      <line
        x1="85"
        y1="40"
        x2="80"
        y2="80"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1"
      />
      {/* Nodes */}
      <circle cx="35" cy="35" r="5" fill={accentColor} />
      <circle cx="60" cy="50" r="5" fill={accentColor} />
      <circle cx="85" cy="40" r="5" fill={accentColor} />
      <circle cx="50" cy="75" r="5" fill={accentColor} />
      <circle cx="80" cy="80" r="5" fill={accentColor} />
    </svg>
  );
}

function EnterpriseNetwork({ accentColor }: { accentColor: string }) {
  // Generate points for wireframe globe
  const latitudeLines = 5;
  const longitudeLines = 8;
  const radius = 50;
  const centerX = 60;
  const centerY = 60;

  // Generate nodes on the globe surface
  const nodes: { x: number; y: number }[] = [];
  for (let lat = 1; lat < latitudeLines; lat++) {
    const phi = (Math.PI * lat) / latitudeLines;
    for (let lon = 0; lon < longitudeLines; lon++) {
      const theta = (2 * Math.PI * lon) / longitudeLines;
      const x = centerX + radius * Math.sin(phi) * Math.cos(theta) * 0.9;
      const y = centerY + radius * Math.cos(phi) * 0.9;
      const z = Math.sin(phi) * Math.sin(theta);
      // Only show front-facing nodes
      if (z > -0.3) {
        nodes.push({ x, y });
      }
    }
  }

  return (
    <svg
      viewBox="0 0 120 120"
      className="w-24 h-24 md:w-32 md:h-32"
      fill="none"
    >
      {/* Outer globe circle */}
      <circle
        cx="60"
        cy="60"
        r="50"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.5"
        fill="none"
      />
      {/* Latitude lines (ellipses) */}
      {[0.3, 0.6, 0.9].map((scale, i) => (
        <ellipse
          key={`lat-${i}`}
          cx="60"
          cy={60 + (1 - scale) * 25}
          rx={50 * scale}
          ry={50 * scale * 0.3}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.5"
          fill="none"
        />
      ))}
      {/* Longitude lines */}
      {[0, 45, 90, 135].map((angle, i) => (
        <ellipse
          key={`lon-${i}`}
          cx="60"
          cy="60"
          rx={50 * Math.cos((angle * Math.PI) / 180)}
          ry={50}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.5"
          fill="none"
          transform={`rotate(${angle} 60 60)`}
        />
      ))}
      {/* Connection lines between nearby nodes */}
      {nodes.map((node, i) =>
        nodes.slice(i + 1).map((other, j) => {
          const dist = Math.sqrt(
            Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2)
          );
          if (dist < 30) {
            return (
              <line
                key={`line-${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={other.x}
                y2={other.y}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.5"
              />
            );
          }
          return null;
        })
      )}
      {/* Nodes */}
      {nodes.map((node, i) => (
        <circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r={2}
          fill={i % 3 === 0 ? accentColor : "rgba(255,255,255,0.8)"}
        />
      ))}
    </svg>
  );
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  buttonText: string;
  network: "basic" | "platinum" | "enterprise";
}

interface PricingOplBig49Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  supportedNetworksLabel?: string;
  onPlanClick?: (planName: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "BASIC",
    price: "$70",
    period: "/mo",
    description: "Connect\none network",
    buttonText: "Start Here",
    network: "basic",
  },
  {
    name: "PLATINUM",
    price: "$90",
    period: "/mo",
    description: "Connect\nall networks",
    buttonText: "Start Here",
    network: "platinum",
  },
  {
    name: "CUSTOM &\nENTERPRISE",
    price: "",
    period: "",
    description: "Events, concerts, conferences\netc.",
    buttonText: "Let's Talk",
    network: "enterprise",
  },
];

export default function PricingOplBig49({
  mode = "dark",
  title = "PLANS",
  subtitle = "Sign up now to receive special pricing options.",
  plans = defaultPlans,
  supportedNetworksLabel = "Supported Networks:",
  onPlanClick,
}: PricingOplBig49Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  const renderNetwork = (type: "basic" | "platinum" | "enterprise") => {
    switch (type) {
      case "basic":
        return <BasicNetwork accentColor={colors.accent} />;
      case "platinum":
        return <PlatinumNetwork accentColor={colors.accent} />;
      case "enterprise":
        return <EnterpriseNetwork accentColor={colors.accent} />;
    }
  };

  return (
    <section
      className="relative w-full min-h-screen py-16 px-4 md:px-8 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background stars effect for dark mode */}
      {isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Diagonal shooting star line */}
          <motion.div
            initial={{ opacity: 0, x: -100, y: -50 }}
            animate={{ opacity: [0, 1, 0], x: 400, y: 200 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "linear",
            }}
            className="absolute top-20 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-[30deg]"
          />
          {/* Scattered stars */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[1px] h-[1px] rounded-full bg-white/40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 gap-4"
        >
          <h1
            className="text-2xl md:text-3xl tracking-wide italic font-light"
            style={{ color: colors.textSecondary }}
          >
            {title}
          </h1>
          <p
            className="text-sm md:text-base"
            style={{ color: colors.textSecondary }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Network Graphic */}
              <motion.div
                className="mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {renderNetwork(plan.network)}
              </motion.div>

              {/* Plan Name */}
              <h2
                className="text-lg md:text-xl font-semibold tracking-wider mb-2 whitespace-pre-line"
                style={{ color: colors.textPrimary }}
              >
                {plan.name}
              </h2>

              {/* Price */}
              {plan.price && (
                <div className="mb-4">
                  <span
                    className="text-lg font-medium"
                    style={{ color: colors.textPrimary }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    {plan.period}
                  </span>
                </div>
              )}

              {/* Description */}
              <p
                className="text-sm mb-6 whitespace-pre-line leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {plan.description}
              </p>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPlanClick?.(plan.name)}
                className="px-6 py-2 text-sm tracking-wide rounded-sm transition-colors duration-200"
                style={{
                  border: `1px solid ${colors.border}`,
                  color: isDark ? colors.textPrimary : colors.textPrimary,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDark
                    ? "rgba(62, 181, 167, 0.1)"
                    : "rgba(62, 181, 167, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Footer - Supported Networks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <span
            className="text-sm"
            style={{ color: colors.textSecondary }}
          >
            {supportedNetworksLabel}
          </span>
          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="transition-colors"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.textPrimary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.textSecondary;
              }}
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="transition-colors"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.textPrimary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.textSecondary;
              }}
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="transition-colors"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.textPrimary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.textSecondary;
              }}
            >
              <Instagram size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
