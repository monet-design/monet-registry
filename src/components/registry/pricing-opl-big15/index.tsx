"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#66489E",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.6)",
    textMuted: "rgba(255, 255, 255, 0.5)",
    accent: "#1DD3B0",
    tableRowOdd: "rgba(255, 255, 255, 0.03)",
  },
  dark: {
    background: "#66489E",
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.6)",
    textMuted: "rgba(255, 255, 255, 0.5)",
    accent: "#1DD3B0",
    tableRowOdd: "rgba(255, 255, 255, 0.03)",
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
interface PriceRow {
  persons: number;
  prices: (number | null)[];
}

interface TimeSlot {
  start: string;
  end: string;
  superscript?: string;
}

interface EquipmentItem {
  name: string;
  spec?: string;
}

interface EquipmentCategory {
  title: string;
  items: EquipmentItem[];
}

interface PricingOplBig15Props {
  mode?: "light" | "dark";
  title?: {
    line1: string;
    connector: string;
    line2: string;
  };
  description?: string[];
  highlight?: string;
  roomInfo?: {
    liveRoom: string;
    controlRoom: string;
    extras: string[];
  };
  currency?: string;
  timeSlots?: TimeSlot[];
  priceRows?: PriceRow[];
  equipment?: EquipmentCategory[];
}

// Default data based on the image
const defaultTitle = {
  line1: "REPETITII",
  connector: "cu",
  line2: "Acustica Profesionala.",
};

const defaultDescription = [
  "Deschis in fiecare zi. O sesiune cuprinde 4 ore.",
  "Reducere 20% pentru abonamente de 4 sesiuni per luna.",
  "",
  'Constructie acustica standardizata dupa "Audio Engineering Society", dotata cu rezonatoare Helmholtz, panouri de dispersie si absorbtie, forma geometrica neregulata a camerelor pentru difuzie acustica maxima.',
];

const defaultHighlight = "Poluare fonica interioara < 20db.";

const defaultRoomInfo = {
  liveRoom: "24mp",
  controlRoom: "12mp",
  extras: ["Aer conditionat", "Terasa"],
};

const defaultTimeSlots: TimeSlot[] = [
  { start: "10", end: "14", superscript: "00" },
  { start: "14", end: "18", superscript: "00" },
  { start: "18", end: "22", superscript: "00" },
];

const defaultPriceRows: PriceRow[] = [
  { persons: 1, prices: [30, 30, 40] },
  { persons: 2, prices: [50, 50, 60] },
  { persons: 3, prices: [60, 60, 70] },
  { persons: 4, prices: [80, 80, 90] },
  { persons: 5, prices: [90, 90, 100] },
  { persons: 6, prices: [100, 100, 120] },
];

const defaultEquipment: EquipmentCategory[] = [
  {
    title: "STATII CHITARA & BASS",
    items: [
      { name: "Vox Valvetronix VT 120+", spec: "150W" },
      { name: "Line6 Spider IV", spec: "150W" },
      { name: "Line6 LowDown LD400", spec: "400W" },
    ],
  },
  {
    title: "SET TOBE",
    items: [
      { name: "Tama Silverstar" },
      { name: '22"x18"', spec: "Bass Drum" },
      { name: '10"x8"', spec: "Tom Tom" },
      { name: '12"x9"', spec: "Tom Tom" },
      { name: '14"x12"', spec: "Floor Tom" },
      { name: '14"x5"', spec: "Snare Drum" },
      { name: '16"x14"', spec: "Floor Tom" },
      { name: "Set cinele Zildjian" },
    ],
  },
  {
    title: "MICROFOANE",
    items: [
      { name: "AKG P5S" },
      { name: "AKG C214", spec: "x2" },
      { name: "Shure SM58" },
      { name: "Shure SM57", spec: "x4" },
      { name: "Shure Beta 52" },
      { name: "Rhode NT-1" },
    ],
  },
  {
    title: "MONITOARE",
    items: [
      { name: "M-Audio BX8 D2", spec: "x2" },
      { name: "Behringer Eurolive B115", spec: "x2" },
      { name: "Dynaudio DBM-50" },
    ],
  },
  {
    title: "MIXER",
    items: [{ name: "Mackie CFX 16 MK II" }],
  },
  {
    title: "CASTI",
    items: [
      { name: "Audio Technica ATH M-30" },
      { name: "Extreme Isolation + Fame" },
    ],
  },
];

export default function PricingOplBig15({
  mode = "light",
  title = defaultTitle,
  description = defaultDescription,
  highlight = defaultHighlight,
  roomInfo = defaultRoomInfo,
  currency = "lei",
  timeSlots = defaultTimeSlots,
  priceRows = defaultPriceRows,
  equipment = defaultEquipment,
}: PricingOplBig15Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
            style={{ color: colors.textPrimary }}
          >
            <span className="font-bold tracking-tight">{title.line1}</span>{" "}
            <span className="font-light italic">{title.connector}</span>
            <br />
            <span className="font-normal">{title.line2}</span>
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-4"
          >
            {description.map((line, index) => (
              <p
                key={index}
                className="text-xs sm:text-sm leading-relaxed"
                style={{
                  color:
                    index === 0 || index === 1
                      ? colors.textPrimary
                      : colors.textSecondary,
                }}
              >
                {line === "" ? <br /> : line}
              </p>
            ))}

            {/* Highlight */}
            <p
              className="text-xs sm:text-sm font-semibold mt-4"
              style={{ color: colors.accent }}
            >
              {highlight}
            </p>

            {/* Room Info */}
            <div
              className="mt-6 space-y-1 text-xs sm:text-sm"
              style={{ color: colors.textPrimary }}
            >
              <p>
                <span className="font-semibold">Live room</span> -{" "}
                {roomInfo.liveRoom}
              </p>
              <p>
                <span className="font-semibold">Control room</span> -{" "}
                {roomInfo.controlRoom}
              </p>
              {roomInfo.extras.map((extra, index) => (
                <p key={index} style={{ color: colors.textSecondary }}>
                  {extra}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Pricing Table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th
                      className="text-left py-3 px-2 font-normal italic text-sm"
                      style={{ color: colors.textPrimary }}
                    >
                      Nr. Persoane
                    </th>
                    {timeSlots.map((slot, index) => (
                      <th
                        key={index}
                        className="text-center py-3 px-4 font-normal"
                        style={{ color: colors.textPrimary }}
                      >
                        <span className="text-sm">
                          {slot.start}
                          <sup className="text-[10px]">
                            {slot.superscript || "00"}
                          </sup>
                        </span>
                        <span className="mx-1">-</span>
                        <span className="text-sm">
                          {slot.end}
                          <sup className="text-[10px]">
                            {slot.superscript || "00"}
                          </sup>
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      style={{
                        backgroundColor:
                          rowIndex % 2 === 1
                            ? colors.tableRowOdd
                            : "transparent",
                      }}
                    >
                      <td
                        className="py-3 px-2 font-semibold"
                        style={{ color: colors.textPrimary }}
                      >
                        {row.persons}
                      </td>
                      {row.prices.map((price, priceIndex) => (
                        <td
                          key={priceIndex}
                          className="text-center py-3 px-4"
                          style={{ color: colors.textPrimary }}
                        >
                          {price !== null && (
                            <>
                              <span className="font-medium">{price}</span>{" "}
                              <span
                                className="text-xs"
                                style={{ color: colors.textMuted }}
                              >
                                {currency}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Equipment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8"
        >
          {equipment.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-2">
              <h3
                className="text-[10px] sm:text-xs font-bold uppercase tracking-wide mb-3"
                style={{ color: colors.textPrimary }}
              >
                {category.title}
              </h3>
              <ul className="space-y-1">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-[10px] sm:text-xs"
                    style={{ color: colors.textSecondary }}
                  >
                    {item.name}
                    {item.spec && (
                      <span
                        className="ml-2"
                        style={{ color: colors.textMuted }}
                      >
                        {item.spec}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
