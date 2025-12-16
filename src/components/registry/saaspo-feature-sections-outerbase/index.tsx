"use client";

import { motion } from "motion/react";
import { Grid3X3, Puzzle, Copy, ChevronDown, ChevronRight, ChevronLeft, Table } from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  background: "#000000",
  cardBackground: "#1a1a1a",
  iconBackground: "#262626",
  badgeBackground: "#2a2a2a",
  tableHeader: "#111111",
  tableRow: "#0d0d0d",
  tableRowAlt: "#141414",
  tableBorder: "#262626",
  textPrimary: "#ffffff",
  textSecondary: "#9ca3af",
  textMuted: "#6b7280",
  buttonPrimary: "#ffffff",
  buttonText: "#000000",
  modalBackground: "#1f1f1f",
  inputBackground: "#1a1a1a",
  inputBorder: "#333333",
  selectedRow: "#1a1a1a",
} as const;

const FEATURES = [
  {
    icon: Grid3X3,
    title: "Like a spreadsheet\nwith more features",
    description:
      "We built our table editor from scratch to be snappy, responsive, and comfortable.",
  },
  {
    icon: Puzzle,
    title: "Customize with\ntable plugins",
    description:
      "A constantly expanding network of plugins to make navigating data faster and more effecient for your team.",
  },
  {
    icon: Copy,
    title: "Embed our\ntable everywhere",
    description:
      "As part of our Astra library, the Outerbase table is fully embeddable anywhere.",
  },
];

const TABLE_COLUMNS = [
  { key: "profileGender", label: "profileGender" },
  { key: "profileBirthYear", label: "profileBirthYear" },
  { key: "profileNationality", label: "profileNationality" },
  { key: "profileMilitary", label: "profileMilitary" },
  { key: "profileSelectionGroup", label: "profileSelectionGroup" },
  { key: "profileSelectionYear", label: "profileSelectionYear" },
];

const TABLE_DATA = [
  { profileGender: "male", profileBirthYear: "1940", profileNationality: "U.S.S.R/Russia", profileMilitary: "True", profileSelectionGroup: "TsKBEM-3", profileSelectionYear: "1973" },
  { profileGender: "male", profileBirthYear: "1940", profileNationality: "U.S.S.R/Russia", profileMilitary: "True", profileSelectionGroup: "TsKBEM-3", profileSelectionYear: "1973" },
  { profileGender: "male", profileBirthYear: "1940", profileNationality: "U.S.S.R/Russia", profileMilitary: "True", profileSelectionGroup: "TsKBEM-3", profileSelectionYear: "1973" },
  { profileGender: "male", profileBirthYear: "1942", profileNationality: "U.S.S.R/Russia", profileMilitary: "false", profileSelectionGroup: "TsPK-3", profileSelectionYear: "1965" },
  { profileGender: "male", profileBirthYear: "1940", profileNationality: "U.S.S.R/Russia", profileMilitary: "false", profileSelectionGroup: "TsPK-5", profileSelectionYear: "1965" },
  { profileGender: "male", profileBirthYear: "1940", profileNationality: "U.S.S.R/Russia", profileMilitary: "True", profileSelectionGroup: "TsPK-4", profileSelectionYear: "1965" },
  { profileGender: "male", profileBirthYear: "1941", profileNationality: "", profileMilitary: "true", profileSelectionGroup: "1978 Intercosmos Group", profileSelectionYear: "1978" },
  { profileGender: "male", profileBirthYear: "", profileNationality: "", profileMilitary: "True", profileSelectionGroup: "1979 Intercosmos Group", profileSelectionYear: "1967" },
  { profileGender: "male", profileBirthYear: "", profileNationality: "", profileMilitary: "True", profileSelectionGroup: "TsPK-4", profileSelectionYear: "1967" },
  { profileGender: "male", profileBirthYear: "", profileNationality: "", profileMilitary: "True", profileSelectionGroup: "TsPK-5", profileSelectionYear: "1987" },
  { profileGender: "male", profileBirthYear: "", profileNationality: "", profileMilitary: "True", profileSelectionGroup: "TsPK-6", profileSelectionYear: "1970" },
  { profileGender: "male", profileBirthYear: "", profileNationality: "", profileMilitary: "True", profileSelectionGroup: "TsPK-7", profileSelectionYear: "1970" },
  { profileGender: "male", profileBirthYear: "1945", profileNationality: "U.S.S.R/Russia", profileMilitary: "True", profileSelectionGroup: "TsPK-5", profileSelectionYear: "1970" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SaaspoFeatureSectionsOuterbaseProps {
  badge?: string;
  title?: string;
  ctaText?: string;
  features?: typeof FEATURES;
}

export default function SaaspoFeatureSectionsOuterbase({
  badge = "Tables",
  title = "Navigate your\ndata smarter",
  ctaText = "Learn more about Tables",
  features = FEATURES,
}: SaaspoFeatureSectionsOuterbaseProps) {
  const editingRowIndex = 6;
  const editingCell = "profileBirthYear";
  const editingValue = "1941";

  return (
    <section
      className="relative w-full py-16 px-4 md:px-8 lg:px-12 overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Title */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: COLORS.badgeBackground }}
            >
              <Table className="w-4 h-4" style={{ color: COLORS.textPrimary }} />
              <span
                className="text-sm font-medium"
                style={{ color: COLORS.textPrimary }}
              >
                {badge}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line leading-tight"
              style={{ color: COLORS.textPrimary }}
            >
              {title}
            </h2>

            {/* CTA Link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
              style={{ color: COLORS.textPrimary }}
            >
              {ctaText}
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Column - Features */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: COLORS.iconBackground }}
                >
                  <feature.icon
                    className="w-5 h-5"
                    style={{ color: COLORS.textPrimary }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-semibold mb-2 whitespace-pre-line leading-snug"
                  style={{ color: COLORS.textPrimary }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: COLORS.textSecondary }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Table Section */}
        <motion.div
          className="relative rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ backgroundColor: COLORS.tableRow }}
        >
          {/* Table Header - COMMANDS */}
          <div
            className="px-4 py-2 text-xs font-medium tracking-wide"
            style={{ backgroundColor: COLORS.cardBackground, color: COLORS.textMuted }}
          >
            COMMANDS
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              {/* Column Headers */}
              <thead>
                <tr style={{ backgroundColor: COLORS.tableHeader }}>
                  <th className="w-10 px-4 py-3 text-left">
                    <ChevronDown className="w-4 h-4" style={{ color: COLORS.textMuted }} />
                  </th>
                  {TABLE_COLUMNS.map((column) => (
                    <th
                      key={column.key}
                      className="px-4 py-3 text-left text-sm font-medium"
                      style={{ color: COLORS.textSecondary, borderRight: `1px solid ${COLORS.tableBorder}` }}
                    >
                      <div className="flex items-center gap-2">
                        {column.label}
                        <ChevronDown className="w-3 h-3" style={{ color: COLORS.textMuted }} />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {TABLE_DATA.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    style={{
                      backgroundColor: rowIndex === editingRowIndex ? COLORS.selectedRow : (rowIndex % 2 === 0 ? COLORS.tableRow : COLORS.tableRowAlt),
                      borderTop: `1px solid ${COLORS.tableBorder}`,
                    }}
                  >
                    <td className="px-4 py-2">
                      <ChevronDown className="w-4 h-4" style={{ color: COLORS.textMuted }} />
                    </td>
                    {TABLE_COLUMNS.map((column) => (
                      <td
                        key={column.key}
                        className="px-4 py-2 text-sm relative"
                        style={{
                          color: COLORS.textPrimary,
                          borderRight: `1px solid ${COLORS.tableBorder}`,
                        }}
                      >
                        {rowIndex === editingRowIndex && column.key === editingCell ? (
                          <div className="relative">
                            {/* Editing Cell */}
                            <div
                              className="px-2 py-1 rounded border"
                              style={{
                                backgroundColor: COLORS.inputBackground,
                                borderColor: COLORS.textPrimary,
                              }}
                            >
                              {row[column.key as keyof typeof row]}
                            </div>

                            {/* Edit Modal */}
                            <div
                              className="absolute top-full left-0 mt-1 rounded-lg shadow-2xl z-10 w-48"
                              style={{ backgroundColor: COLORS.modalBackground }}
                            >
                              <div className="p-3">
                                <div
                                  className="px-3 py-2 rounded text-sm mb-3"
                                  style={{
                                    backgroundColor: COLORS.inputBackground,
                                    color: COLORS.textPrimary,
                                  }}
                                >
                                  {editingValue}
                                </div>
                                <div className="flex gap-2 justify-end">
                                  <button
                                    className="px-3 py-1.5 text-sm rounded hover:opacity-80 transition-opacity"
                                    style={{ color: COLORS.textSecondary }}
                                  >
                                    Discard
                                  </button>
                                  <button
                                    className="px-3 py-1.5 text-sm rounded font-medium hover:opacity-90 transition-opacity"
                                    style={{
                                      backgroundColor: COLORS.buttonPrimary,
                                      color: COLORS.buttonText,
                                    }}
                                  >
                                    Update
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          row[column.key as keyof typeof row]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer - Pagination */}
          <div
            className="flex items-center justify-end gap-4 px-4 py-3"
            style={{ backgroundColor: COLORS.tableHeader }}
          >
            <span className="text-sm" style={{ color: COLORS.textSecondary }}>
              Viewing 1-50 of 1,270
            </span>
            <div className="flex items-center gap-1">
              <button
                className="w-8 h-8 rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: COLORS.tableBorder, color: COLORS.textMuted }}
                disabled
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span
                className="w-8 h-8 rounded flex items-center justify-center text-sm"
                style={{ backgroundColor: COLORS.tableBorder, color: COLORS.textPrimary }}
              >
                1
              </span>
              <button
                className="w-8 h-8 rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: COLORS.tableBorder, color: COLORS.textPrimary }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Gradient Overlay at Bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${COLORS.background}, transparent)`,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
