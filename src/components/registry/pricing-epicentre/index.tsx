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
    // Primary 액센트 (버튼, 링크, 강조 테두리)
    accent: "#E8847C",
    accentHover: "#D66E66",
    // 배경색
    background: "#F7FBFE",
    cardBg: "#FFFFFF",
    // 텍스트
    textPrimary: "#1F2937",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
  },
  dark: {
    accent: "#E8847C",
    accentHover: "#D66E66",
    background: "#111827",
    cardBg: "#1F2937",
    textPrimary: "#F9FAFB",
    textSecondary: "#D1D5DB",
    textMuted: "#9CA3AF",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

// Types
interface Service {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  price?: string;
  priceUnit?: string;
  alternativePrice?: string;
  services: Service[];
  footerNote?: string;
  ctaText: string;
  ctaVariant: "filled" | "outline" | "link";
  isHighlighted?: boolean;
  subSection?: {
    title: string;
    description?: string;
    linkText?: string;
  }[];
}

interface PricingEpicentreProps {
  mode?: "light" | "dark";
  sectionLabel?: string;
  plans?: PricingPlan[];
}

// Default plans based on the image
const defaultPlans: PricingPlan[] = [
  {
    id: "passager",
    name: "Passager",
    price: "6",
    priceUnit: "le ticket demi-journee",
    alternativePrice: "100\u20AC le carnet de 20 tickets",
    services: [
      { text: "Acces limite a l'espace de coworking aux horaires d'ouverture (du lundi au vendredi) - de 9h a 18h)" },
      { text: "Wifi" },
      { text: "Espace cuisine et cafe en acces libre" },
      { text: "Telephone gratuit (portables France et fixes)" },
    ],
    footerNote: "Tickets valables sans date de peremption.\nAdhesion volontaire.",
    ctaText: "Passer a Epicentre",
    ctaVariant: "filled",
  },
  {
    id: "mi-temps",
    name: "Mi-temps",
    price: "185",
    priceUnit: "par mois",
    services: [
      { text: "Acces limite a l'espace de coworking aux horaires d'ouverture (du lundi au vendredi) - de 9h a 18h)" },
      { text: "Acces libre aux salles de reunion dans la mesure de leurs disponibilites (ou sur reservation payante)" },
      { text: "Wifi" },
      { text: "Espace cuisine et cafe en acces libre" },
      { text: "Telephone gratuit (portables France et fixes)" },
    ],
    footerNote: "Frais mensuels payes au mois d'avance, deux mois d'engagement, adhesion obligatoire.",
    ctaText: "Travailler a Epicentre",
    ctaVariant: "filled",
  },
  {
    id: "permanent",
    name: "Permanent",
    price: "125",
    priceUnit: "par mois",
    services: [
      { text: "Acces limite a l'espace de coworking" },
      { text: "Acces libre aux salles de reunion dans la mesure de leurs disponibilites (ou sur reservation payante)" },
      { text: "Wifi" },
      { text: "Espace cuisine et cafe en acces libre" },
      { text: "Telephone gratuit (portables France et fixes)" },
    ],
    footerNote: "Frais mensuels payes au mois d'avance, deux mois d'engagement, adhesion obligatoire.",
    ctaText: "Emmenager a Epicentre",
    ctaVariant: "filled",
    isHighlighted: true,
  },
  {
    id: "a-la-carte",
    name: "A la carte",
    services: [],
    subSection: [
      {
        title: "Salle de reunion (8 personnes)",
        description: "Acces Wifi inclus",
        linkText: "Voir disponibilites",
      },
      {
        title: "Grande salle de reunion (19 personnes)",
        description: "Acces Wifi inclus",
        linkText: "Voir disponibilites",
      },
    ],
    ctaText: "Nous consulter",
    ctaVariant: "outline",
  },
];

// Service item component
function ServiceItem({
  service,
  accentColor,
}: {
  service: Service;
  accentColor: string;
}) {
  return (
    <li className="flex items-start gap-2 text-xs leading-relaxed text-gray-600">
      <span
        className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
        style={{ backgroundColor: accentColor }}
      />
      <span>{service.text}</span>
    </li>
  );
}

// Sub-section item for "A la carte" plan
function SubSectionItem({
  item,
  accentColor,
}: {
  item: { title: string; description?: string; linkText?: string };
  accentColor: string;
}) {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
      {item.description && (
        <p className="mt-1 flex items-center gap-2 text-xs text-gray-600">
          <span
            className="h-1 w-1 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          {item.description}
        </p>
      )}
      {item.linkText && (
        <a
          href="#"
          className="mt-1 inline-block text-xs font-medium underline"
          style={{ color: accentColor }}
        >
          {item.linkText}
        </a>
      )}
    </div>
  );
}

// Color type
type ColorScheme = {
  accent: string;
  accentHover: string;
  background: string;
  cardBg: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
};

// Pricing card component
function PricingCard({
  plan,
  colors,
  index,
}: {
  plan: PricingPlan;
  colors: ColorScheme;
  index: number;
}) {
  const hasServices = plan.services && plan.services.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex h-full flex-col rounded-lg bg-white p-6"
      style={{
        border: plan.isHighlighted
          ? `2px solid ${colors.accent}`
          : "1px solid #E5E7EB",
      }}
    >
      {/* Plan name */}
      <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>

      {/* Price */}
      {plan.price && (
        <div className="mt-2">
          <span className="text-sm text-gray-700">
            {plan.price}\u20AC{" "}
            <span className="text-gray-500">{plan.priceUnit}</span>
          </span>
        </div>
      )}

      {/* Alternative price */}
      {plan.alternativePrice && (
        <p className="mt-1 text-xs text-gray-500">{plan.alternativePrice}</p>
      )}

      {/* Services section */}
      {hasServices && (
        <div className="mt-4 flex-1">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-900">
            Services inclus
          </h4>
          <ul className="space-y-2">
            {plan.services.map((service, idx) => (
              <ServiceItem
                key={idx}
                service={service}
                accentColor={colors.accent}
              />
            ))}
          </ul>
        </div>
      )}

      {/* Sub-sections for "A la carte" */}
      {plan.subSection && (
        <div className="mt-4 flex-1">
          {plan.subSection.map((item, idx) => (
            <SubSectionItem key={idx} item={item} accentColor={colors.accent} />
          ))}
        </div>
      )}

      {/* Footer note */}
      {plan.footerNote && (
        <p className="mt-4 whitespace-pre-line text-[10px] italic text-gray-400">
          {plan.footerNote}
        </p>
      )}

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-4 w-full rounded px-4 py-2 text-xs font-medium transition-colors"
        style={
          plan.ctaVariant === "filled"
            ? {
                backgroundColor: colors.accent,
                color: "#FFFFFF",
              }
            : plan.ctaVariant === "outline"
              ? {
                  backgroundColor: "transparent",
                  color: colors.accent,
                  border: `1px solid ${colors.accent}`,
                }
              : {
                  backgroundColor: "transparent",
                  color: colors.accent,
                }
        }
      >
        {plan.ctaText}
      </motion.button>
    </motion.div>
  );
}

// Main Component
export default function PricingEpicentre({
  mode = "light",
  sectionLabel = "L'OFFRE",
  plans = defaultPlans,
}: PricingEpicentreProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-xs font-medium uppercase tracking-widest text-gray-400"
        >
          {sectionLabel}
        </motion.p>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              colors={colors}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
