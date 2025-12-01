"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#541729", // Section 배경 (버건디)
    title: "#E8A5A0", // Title 텍스트 (연한 핑크/살구)
    subtitle: "#D08080", // Subtitle 텍스트 (연한 로즈)
    label: "#8B6068", // Form label 텍스트
    labelRequired: "#E8A5A0", // Required 별표
    inputText: "#E8A5A0", // Input 텍스트
    inputPlaceholder: "#8B6068", // Input placeholder
    inputBorder: "#87545F", // Input 보더
    inputBorderFocus: "#E8A5A0", // Input 보더 포커스
    button: "#D08080", // Submit button
    buttonBorder: "#D08080", // Submit button 보더
    buttonHover: "rgba(208, 128, 128, 0.1)", // Submit button 호버 배경
    circleText: "#E8A5A0", // Rotating circle 텍스트
    stripeDecoration: "#6D2634", // Decorative stripes
    plusIcon: "#87545F", // Plus icon 보더
  },
  dark: {
    background: "#541729",
    title: "#E8A5A0",
    subtitle: "#D08080",
    label: "#8B6068",
    labelRequired: "#E8A5A0",
    inputText: "#E8A5A0",
    inputPlaceholder: "#8B6068",
    inputBorder: "#87545F",
    inputBorderFocus: "#E8A5A0",
    button: "#D08080",
    buttonBorder: "#D08080",
    buttonHover: "rgba(208, 128, 128, 0.1)",
    circleText: "#E8A5A0",
    stripeDecoration: "#6D2634",
    plusIcon: "#87545F",
  },
} as const;

const IMAGES = {
  building: {
    path: "/registry/milliners-yard/building.jpg",
    alt: "Property building exterior",
    prompt: `Modern apartment building exterior photo.
Style: Architectural photography, clean, contemporary
Layout: Building facade, front view
Composition: Multi-story residential building
Color palette: Modern materials, glass and concrete
Mood: Urban, sophisticated, residential
Technical: High resolution, sharp architectural details`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Plus } from "lucide-react";

// Font import for Instrument Serif
import "./font.css";

// Types
interface MillinersYardProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  buildingImage?: string;
  bedroomOptions?: string[];
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bedroom: string;
  preferredRent: string;
  moveInDate: string;
  message: string;
}

// Decorative circle with rotating text
function DecorativeCircle({ colors }: { colors: typeof COLORS.light }) {
  const text = "MILLINERS YARD LIVING ";
  const characters = text.split("");

  return (
    <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/4">
      <div className="relative h-48 w-48 sm:h-64 sm:w-64">
        {/* Rotating text */}
        <svg
          className="absolute inset-0 h-full w-full animate-spin-slow"
          viewBox="0 0 200 200"
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              fill="none"
            />
          </defs>
          <text
            fill={colors.circleText}
            fontSize="11"
            fontFamily="Inter, sans-serif"
            letterSpacing="3"
          >
            <textPath href="#circlePath">
              {characters.map((char, i) => (
                <tspan key={i}>{char}</tspan>
              ))}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

// Building image in circular frame
function BuildingImageCircle({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="absolute left-8 top-8 sm:left-12 sm:top-12">
      <div className="h-24 w-24 overflow-hidden rounded-lg sm:h-32 sm:w-32">
        <img
          src={imageSrc}
          alt="Property building"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

// Decorative stripes pattern
function DecorativeStripes({ colors }: { colors: typeof COLORS.light }) {
  return (
    <div className="absolute bottom-8 right-0 hidden opacity-60 sm:block">
      <div className="flex flex-col gap-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full"
            style={{
              width: `${80 + i * 20}px`,
              backgroundColor: colors.stripeDecoration,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Underline Input Component
function UnderlineInput({
  colors,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  colors: typeof COLORS.light;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs uppercase tracking-wider" style={{ color: colors.label }}>
        {label}
        <span style={{ color: colors.labelRequired }}>*</span>
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border-b bg-transparent pb-2 text-sm outline-none transition-colors"
        style={{
          borderColor: colors.inputBorder,
          color: colors.inputText,
        }}
        onFocus={(e) => {
          e.target.style.borderColor = colors.inputBorderFocus;
        }}
        onBlur={(e) => {
          e.target.style.borderColor = colors.inputBorder;
        }}
      />
    </div>
  );
}

// Dropdown Select Component
function DropdownSelect({
  colors,
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  colors: typeof COLORS.light;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs uppercase tracking-wider" style={{ color: colors.label }}>
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between border bg-transparent px-3 py-2 text-left text-sm transition-colors"
          style={{
            borderColor: colors.inputBorder,
            color: colors.inputText,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.inputBorderFocus;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = colors.inputBorder;
          }}
        >
          <span style={{ color: value ? colors.inputText : colors.inputPlaceholder }}>
            {value || placeholder}
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            style={{ color: colors.inputText }}
          />
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full z-10 mt-1 w-full border"
            style={{
              borderColor: colors.inputBorder,
              backgroundColor: colors.background,
            }}
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="block w-full px-3 py-2 text-left text-sm transition-colors"
                style={{ color: colors.inputText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.buttonHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

// Message Textarea Component
function MessageTextarea({
  colors,
  value,
  onChange,
}: {
  colors: typeof COLORS.light;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs uppercase tracking-wider" style={{ color: colors.label }}>
        Message
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        className="resize-none border bg-transparent px-3 py-2 text-sm outline-none transition-colors"
        style={{
          borderColor: colors.inputBorder,
          color: colors.inputText,
        }}
        onFocus={(e) => {
          e.target.style.borderColor = colors.inputBorderFocus;
        }}
        onBlur={(e) => {
          e.target.style.borderColor = colors.inputBorder;
        }}
      />
    </div>
  );
}

// Plus icon at bottom
function PlusIcon({ colors }: { colors: typeof COLORS.light }) {
  return (
    <div className="mt-12 flex justify-center">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full border"
        style={{ borderColor: colors.plusIcon }}
      >
        <Plus className="h-5 w-5" style={{ color: colors.plusIcon }} />
      </div>
    </div>
  );
}

// Main Component
export default function MillinersYard({
  mode = "dark",
  title = "REGISTER YOUR\nINTEREST",
  subtitle = "Submit your details below to download our brochure",
  buildingImage = IMAGES.building.path,
  bedroomOptions = ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom"],
  onSubmit,
}: MillinersYardProps) {
  const colors = COLORS[mode];
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bedroom: "BEDROOM",
    preferredRent: "",
    moveInDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:py-20" style={{ backgroundColor: colors.background }}>
      {/* Decorative elements */}
      <DecorativeCircle colors={colors} />
      <BuildingImageCircle imageSrc={buildingImage} />
      <DecorativeStripes colors={colors} />

      <div className="relative z-10 mx-auto max-w-2xl pt-32 sm:pt-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <h1 className="font-instrument-serif text-3xl italic leading-tight sm:text-4xl lg:text-5xl" style={{ color: colors.title }}>
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 text-center text-sm"
          style={{ color: `${colors.subtitle}CC` }}
        >
          {subtitle}
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <UnderlineInput
              colors={colors}
              label="First Name"
              value={formData.firstName}
              onChange={(v) => updateField("firstName", v)}
            />
            <UnderlineInput
              colors={colors}
              label="Last Name"
              value={formData.lastName}
              onChange={(v) => updateField("lastName", v)}
            />
          </div>

          {/* Contact row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <UnderlineInput
              colors={colors}
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(v) => updateField("email", v)}
            />
            <UnderlineInput
              colors={colors}
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(v) => updateField("phone", v)}
            />
          </div>

          {/* Property details row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <DropdownSelect
              colors={colors}
              label="Bedroom"
              value={formData.bedroom}
              onChange={(v) => updateField("bedroom", v)}
              options={bedroomOptions}
              placeholder="BEDROOM"
            />
            <UnderlineInput
              colors={colors}
              label="Preferred Rent"
              value={formData.preferredRent}
              onChange={(v) => updateField("preferredRent", v)}
            />
            <UnderlineInput
              colors={colors}
              label="Move In Date"
              value={formData.moveInDate}
              onChange={(v) => updateField("moveInDate", v)}
            />
          </div>

          {/* Message */}
          <MessageTextarea
            colors={colors}
            value={formData.message}
            onChange={(v) => updateField("message", v)}
          />

          {/* Submit button */}
          <div className="flex justify-center pt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border bg-transparent px-12 py-3 text-xs font-medium uppercase tracking-widest transition-colors"
              style={{
                borderColor: colors.buttonBorder,
                color: colors.button,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.buttonHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Submit
            </motion.button>
          </div>
        </motion.form>

        {/* Plus icon */}
        <PlusIcon colors={colors} />
      </div>
    </section>
  );
}
