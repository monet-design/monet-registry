"use client";

// ============================================================================
// CUSTOMIZATION - Customize these values to match your project
// ============================================================================

/**
 * Custom colors (brand colors)
 * - Christmas/Advent themed pricing component
 */
const COLORS = {
  // Background color (dark navy)
  background: "#1a2738",
  // Ribbon/button color (pink-red)
  ribbon: "#d64a6a",
  ribbonDark: "#b33d58",
  // Price text color (teal)
  priceText: "#3d8e8e",
  // Card background
  cardBg: "#f8f5f0",
  cardBgCenter: "#ffffff",
  // Text colors
  textDark: "#2d3748",
  textMuted: "#4a5568",
  // Link accent
  linkAccent: "#2a7a8f",
  // Ornament colors
  ornamentRed: "#d64a6a",
  ornamentTeal: "#5fb5b5",
  ornamentPink: "#e8a4b4",
  ornamentBlue: "#6ba4cc",
} as const;

/**
 * Image assets
 */
const IMAGES = {} as const;

// ============================================================================
// DEFAULT CONTENT
// ============================================================================

const DEFAULT_CONTENT = {
  title: "JOIN THE CHALLENGE",
  plans: [
    {
      id: "free",
      price: "$0",
      name: "24 Challenges",
      description: `Each challenge includes <strong>all the HTML and CSS you need to get started</strong>, allowing you to focus on the JavaScript. Each challenge also includes a brief, ways to push yourself, and steps to help you get you started.`,
      buttonText: "SIGN ME UP!",
    },
    {
      id: "premium",
      price: "$24",
      name: "24 Challenges & Solutions",
      description: `Each challenge includes <strong>all the HTML and CSS you need to get started</strong>, allowing you to focus on the JavaScript. Each challenge also includes a brief, ways to push yourself, and steps to help you get you started.\n\nYou'll also receive the final coded solution and an explanation of how to get there.`,
      buttonText: "YES, PLEASE!",
      featured: true,
    },
    {
      id: "bundle",
      price: "$39",
      name: "Bundled with",
      nameLine2: "CSS Challenges",
      description: `All 24 JavaScript Challenges and their solutions. <strong>Plus</strong> 24 CSS challenges and their solutions from <a href="#" class="advent-link">Advent of CSS</a>.`,
      buttonText: "AWESOME!",
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Christmas ornament SVG component
function Ornament({
  type,
  color,
  size = 40,
  className = "",
}: {
  type: "ball" | "teardrop" | "teapot" | "candy";
  color: string;
  size?: number;
  className?: string;
}) {
  const commonProps = {
    width: size,
    height: size * 1.2,
    viewBox: "0 0 40 48",
    fill: "none",
    className,
  };

  if (type === "ball") {
    return (
      <svg {...commonProps}>
        <rect x="17" y="0" width="6" height="6" fill="#c4a35a" />
        <circle cx="20" cy="28" r="16" fill={color} />
        <ellipse cx="20" cy="28" rx="12" ry="4" fill="rgba(255,255,255,0.15)" />
        <path
          d="M12 20 Q20 16 28 20"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    );
  }

  if (type === "teardrop") {
    return (
      <svg {...commonProps}>
        <rect x="17" y="0" width="6" height="6" fill="#c4a35a" />
        <path
          d="M20 8 C8 20 8 38 20 44 C32 38 32 20 20 8"
          fill={color}
        />
        <path
          d="M15 20 Q20 18 25 20"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    );
  }

  if (type === "teapot") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <ellipse cx="20" cy="24" rx="14" ry="12" fill={color} />
        <ellipse cx="20" cy="14" rx="6" ry="4" fill={color} />
        <path d="M6 20 Q0 24 6 28" stroke={color} strokeWidth="3" fill="none" />
        <path d="M34 18 L40 14 L40 18 L34 22" fill={color} />
        <rect x="17" y="4" width="6" height="6" fill="#c4a35a" />
      </svg>
    );
  }

  // candy
  return (
    <svg {...commonProps}>
      <rect x="17" y="0" width="6" height="6" fill="#c4a35a" />
      <ellipse cx="20" cy="28" rx="10" ry="16" fill={color} />
      <path d="M12 20 L28 36" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
      <path d="M12 28 L28 44" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
    </svg>
  );
}

// Decorative string/line between ornaments
function OrnamentString({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 20"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M0 10 Q50 18 100 10 Q150 2 200 10"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

// Card corner decoration
function CardCorner({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const rotations = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90)",
    "bottom-right": "rotate(180)",
    "bottom-left": "rotate(270)",
  };

  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <svg
      className={`absolute ${positions[position]} w-4 h-4`}
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: rotations[position] }}
    >
      <path d="M0 0 L8 0 L0 8 Z" fill={COLORS.ornamentTeal} />
    </svg>
  );
}

// Ribbon title component
function RibbonTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-flex items-center">
      {/* Left tail */}
      <svg
        className="absolute -left-6 top-1/2 -translate-y-1/2"
        width="24"
        height="40"
        viewBox="0 0 24 40"
        fill="none"
      >
        <path d="M24 0 L24 40 L0 20 Z" fill={COLORS.ribbon} />
      </svg>
      {/* Main ribbon */}
      <div
        className="relative px-8 py-2"
        style={{ backgroundColor: COLORS.ribbon }}
      >
        <span
          className="text-lg md:text-xl font-black tracking-wider text-white italic"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          {children}
        </span>
      </div>
      {/* Right tail */}
      <svg
        className="absolute -right-6 top-1/2 -translate-y-1/2"
        width="24"
        height="40"
        viewBox="0 0 24 40"
        fill="none"
      >
        <path d="M0 0 L0 40 L24 20 Z" fill={COLORS.ribbon} />
      </svg>
    </div>
  );
}

// Ribbon button component
function RibbonButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center group"
    >
      {/* Left tail */}
      <svg
        className="absolute -left-3 top-1/2 -translate-y-1/2 transition-colors"
        width="12"
        height="32"
        viewBox="0 0 12 32"
        fill="none"
      >
        <path
          d="M12 0 L12 32 L0 16 Z"
          fill={COLORS.ribbon}
          className="group-hover:fill-[#b33d58] transition-colors"
        />
      </svg>
      {/* Main button */}
      <div
        className="relative px-6 py-2 transition-colors group-hover:bg-[#b33d58]"
        style={{ backgroundColor: COLORS.ribbon }}
      >
        <span className="text-sm font-bold tracking-wider text-white">
          {children}
        </span>
      </div>
      {/* Right tail */}
      <svg
        className="absolute -right-3 top-1/2 -translate-y-1/2"
        width="12"
        height="32"
        viewBox="0 0 12 32"
        fill="none"
      >
        <path
          d="M0 0 L0 32 L12 16 Z"
          fill={COLORS.ribbon}
          className="group-hover:fill-[#b33d58] transition-colors"
        />
      </svg>
    </button>
  );
}

interface PlanData {
  id: string;
  price: string;
  name: string;
  nameLine2?: string;
  description: string;
  buttonText: string;
  featured?: boolean;
}

interface PricingOplMasterJsAdventProps {
  title?: string;
  plans?: PlanData[];
  onPlanSelect?: (planId: string) => void;
}

export default function PricingOplMasterJsAdvent({
  title = DEFAULT_CONTENT.title,
  plans = DEFAULT_CONTENT.plans,
  onPlanSelect,
}: PricingOplMasterJsAdventProps) {
  return (
    <section
      className="relative w-full py-16 px-4 overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Google Font import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .advent-link {
              color: ${COLORS.linkAccent};
              text-decoration: underline;
              text-underline-offset: 2px;
            }
            .advent-link:hover {
              color: ${COLORS.ornamentTeal};
            }
            .script-font {
              font-family: 'Pacifico', cursive;
            }
          `,
        }}
      />

      {/* Top ornaments decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none">
        <OrnamentString className="absolute top-8 left-0 w-full h-8" />

        {/* Ornaments scattered across top */}
        <Ornament
          type="teardrop"
          color={COLORS.ornamentRed}
          size={32}
          className="absolute top-4 left-[5%]"
        />
        <Ornament
          type="ball"
          color={COLORS.ornamentTeal}
          size={28}
          className="absolute top-8 left-[15%]"
        />
        <Ornament
          type="candy"
          color={COLORS.ornamentPink}
          size={24}
          className="absolute top-2 left-[25%]"
        />
        <Ornament
          type="teapot"
          color={COLORS.ornamentBlue}
          size={36}
          className="absolute top-6 left-[38%]"
        />
        <Ornament
          type="ball"
          color={COLORS.ornamentRed}
          size={30}
          className="absolute top-4 left-[52%]"
        />
        <Ornament
          type="teardrop"
          color={COLORS.ornamentPink}
          size={26}
          className="absolute top-10 left-[65%]"
        />
        <Ornament
          type="candy"
          color={COLORS.ornamentTeal}
          size={28}
          className="absolute top-2 left-[78%]"
        />
        <Ornament
          type="ball"
          color={COLORS.ornamentBlue}
          size={32}
          className="absolute top-6 left-[90%]"
        />
      </div>

      <div className="relative max-w-6xl mx-auto pt-8">
        {/* Title ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <RibbonTitle>{title}</RibbonTitle>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.featured ? "md:-mb-4" : ""}`}
            >
              <div
                className="relative p-6 pt-8"
                style={{
                  backgroundColor: plan.featured
                    ? COLORS.cardBgCenter
                    : COLORS.cardBg,
                  minHeight: plan.featured ? "380px" : "340px",
                }}
              >
                {/* Corner decorations */}
                <CardCorner position="top-left" />
                <CardCorner position="top-right" />
                <CardCorner position="bottom-left" />
                <CardCorner position="bottom-right" />

                {/* Price */}
                <div className="text-center mb-4">
                  <span
                    className="text-5xl md:text-6xl font-bold script-font"
                    style={{ color: COLORS.priceText }}
                  >
                    {plan.price}
                  </span>
                </div>

                {/* Plan name */}
                <div className="text-center mb-4">
                  <h3
                    className={`text-lg font-medium ${
                      plan.nameLine2 ? "" : "script-font italic"
                    }`}
                    style={{ color: COLORS.textDark }}
                  >
                    {plan.name}
                  </h3>
                  {plan.nameLine2 && (
                    <h3
                      className="text-lg font-bold"
                      style={{ color: COLORS.textDark }}
                    >
                      {plan.nameLine2}
                    </h3>
                  )}
                </div>

                {/* Description */}
                <div
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: COLORS.textMuted }}
                  dangerouslySetInnerHTML={{
                    __html: plan.description.replace(/\n/g, "<br/><br/>"),
                  }}
                />

                {/* Button */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                  <RibbonButton onClick={() => onPlanSelect?.(plan.id)}>
                    {plan.buttonText}
                  </RibbonButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom ornaments decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none">
        <OrnamentString className="absolute bottom-12 left-0 w-full h-8 rotate-180" />

        <Ornament
          type="ball"
          color={COLORS.ornamentPink}
          size={26}
          className="absolute bottom-2 left-[8%] rotate-180"
        />
        <Ornament
          type="teardrop"
          color={COLORS.ornamentTeal}
          size={30}
          className="absolute bottom-4 left-[22%] rotate-180"
        />
        <Ornament
          type="candy"
          color={COLORS.ornamentRed}
          size={24}
          className="absolute bottom-0 left-[45%] rotate-180"
        />
        <Ornament
          type="ball"
          color={COLORS.ornamentBlue}
          size={28}
          className="absolute bottom-6 left-[68%] rotate-180"
        />
        <Ornament
          type="teardrop"
          color={COLORS.ornamentPink}
          size={32}
          className="absolute bottom-2 left-[85%] rotate-180"
        />
      </div>
    </section>
  );
}
