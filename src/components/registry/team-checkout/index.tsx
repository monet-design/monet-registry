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
    // Primary 액센트 (버튼, 링크 등)
    accent: "#3B82F6", // 블루
    accentHover: "#2563EB", // 블루 호버
    background: "#f5f5f5",
    mapColor: "#D1D5DB",
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    background: "#111827",
    mapColor: "#374151",
  },
} as const;

/**
 * 오피스 위치 데이터
 */
const OFFICES = [
  { city: "London (HQ)", flag: "🇬🇧", coords: { x: 48, y: 28 } },
  { city: "Barcelona", flag: "🇪🇸", coords: { x: 46, y: 33 } },
  { city: "Dubai", flag: "🇦🇪", coords: { x: 62, y: 38 } },
  { city: "Hong Kong", flag: "🇭🇰", coords: { x: 80, y: 38 } },
  { city: "Sao Paulo", flag: "🇧🇷", coords: { x: 32, y: 58 } },
  { city: "Berlin", flag: "🇩🇪", coords: { x: 51, y: 27 } },
  { city: "Tallinn", flag: "🇪🇪", coords: { x: 54, y: 22 } },
  { city: "Riyadh", flag: "🇸🇦", coords: { x: 60, y: 37 } },
  { city: "Japan", flag: "🇯🇵", coords: { x: 87, y: 32 } },
  { city: "Perth", flag: "🇦🇺", coords: { x: 82, y: 62 } },
  { city: "Paris", flag: "🇫🇷", coords: { x: 47, y: 29 } },
  { city: "New York", flag: "🇺🇸", coords: { x: 26, y: 32 } },
  { city: "Karachi", flag: "🇵🇰", coords: { x: 66, y: 37 } },
  { city: "Singapore", flag: "🇸🇬", coords: { x: 78, y: 48 } },
  { city: "Melbourne", flag: "🇦🇺", coords: { x: 88, y: 66 } },
  { city: "Porto", flag: "🇵🇹", coords: { x: 43, y: 32 } },
  { city: "Chicago", flag: "🇺🇸", coords: { x: 22, y: 30 } },
  { city: "Shanghai", flag: "🇨🇳", coords: { x: 82, y: 34 } },
  { city: "Mauritius", flag: "🇲🇺", coords: { x: 65, y: 56 } },
  { city: "Tel Aviv", flag: "🇮🇱", coords: { x: 57, y: 34 } },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import "./font.css";

interface TeamCheckoutProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onContactClick?: () => void;
}

// World Map SVG Component
function WorldMap({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 1000 500"
      className="w-full h-auto"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* North America */}
      <path d="M150 100 L200 80 L250 90 L280 110 L260 140 L220 160 L200 180 L180 200 L150 180 L120 150 L130 120 Z" />
      <path d="M200 180 L230 200 L250 230 L240 260 L220 280 L190 270 L170 240 L180 210 Z" />

      {/* South America */}
      <path d="M230 300 L260 290 L290 310 L300 350 L290 400 L270 450 L250 470 L230 450 L220 400 L225 350 Z" />

      {/* Europe */}
      <path d="M450 100 L500 90 L530 100 L540 130 L520 150 L490 160 L460 150 L440 130 Z" />
      <path d="M460 150 L480 170 L470 190 L450 200 L430 180 L440 160 Z" />

      {/* Africa */}
      <path d="M460 220 L500 210 L540 230 L560 270 L550 320 L520 370 L480 390 L450 370 L430 320 L440 270 Z" />

      {/* Asia */}
      <path d="M540 100 L600 80 L680 90 L750 100 L800 120 L830 150 L810 180 L770 200 L720 210 L660 200 L600 180 L560 150 L550 120 Z" />
      <path d="M600 180 L640 200 L660 230 L650 260 L620 280 L580 270 L560 240 L570 210 Z" />
      <path d="M720 210 L760 220 L780 250 L770 280 L740 300 L700 290 L680 260 L690 230 Z" />

      {/* Japan */}
      <path d="M850 140 L870 130 L880 150 L870 180 L850 190 L840 170 Z" />

      {/* Indonesia/Southeast Asia */}
      <path d="M750 280 L780 270 L810 280 L820 310 L800 330 L770 320 L760 300 Z" />
      <path d="M820 310 L850 300 L870 320 L860 350 L830 360 L810 340 Z" />

      {/* Australia */}
      <path d="M800 380 L850 360 L900 370 L920 400 L910 450 L870 470 L820 460 L790 430 L800 400 Z" />

      {/* New Zealand */}
      <path d="M940 450 L950 440 L960 460 L950 480 L940 470 Z" />

      {/* Greenland */}
      <path d="M320 50 L370 40 L400 60 L390 90 L350 100 L320 80 Z" />

      {/* UK/Ireland */}
      <path d="M430 120 L445 115 L450 130 L440 145 L425 140 Z" />

      {/* Middle East */}
      <path d="M560 180 L590 170 L620 190 L610 220 L580 230 L550 210 Z" />

      {/* India */}
      <path d="M660 200 L700 190 L720 220 L710 270 L680 300 L650 280 L640 240 Z" />

      {/* Madagascar */}
      <path d="M570 380 L590 370 L600 400 L590 430 L570 420 Z" />
    </svg>
  );
}

// Location Marker Component
function LocationMarker({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.3, type: "spring" }}
      className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-lg"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

// Office List Item Component
function OfficeItem({ city, flag, delay }: { city: string; flag: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="flex items-center gap-3"
    >
      <span className="text-2xl">{flag}</span>
      <span className="text-gray-800 dark:text-gray-200 font-medium">{city}</span>
    </motion.div>
  );
}

export default function TeamCheckout({
  mode = "light",
  title = "One team, five continents",
  subtitle = "We go where our customers grow. So we've got 21 offices around the world, from London to Paris to Singapore. And we're just getting started.",
  buttonText = "Contact us",
  onContactClick,
}: TeamCheckoutProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="max-w-xl mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 dm-serif"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed"
          >
            {subtitle}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContactClick}
            className="px-6 py-3 text-white font-medium rounded-lg transition-colors"
            style={{ backgroundColor: colors.accent }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accentHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent;
            }}
          >
            {buttonText}
          </motion.button>
        </div>

        {/* World Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-16"
        >
          <WorldMap color={colors.mapColor} />
          {/* Location Markers */}
          {OFFICES.map((office, index) => (
            <LocationMarker
              key={office.city}
              x={office.coords.x}
              y={office.coords.y}
              delay={0.5 + index * 0.05}
            />
          ))}
        </motion.div>

        {/* Office Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 md:gap-x-16">
          {OFFICES.map((office, index) => (
            <OfficeItem
              key={office.city}
              city={office.city}
              flag={office.flag}
              delay={0.8 + index * 0.03}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
