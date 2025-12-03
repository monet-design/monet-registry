"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#F9ECE4",
    accent: "#FC693C",
    accentHover: "#E5592F",
    decorativePurple: "#7B68EE",
  },
} as const;

const IMAGES = {
  teamPhoto: {
    path: "/registry/pear/team-photo.jpg",
    alt: "Team members Jo and Tallie",
    prompt: `Professional team photo of two people.
Style: Natural, friendly, approachable photography
Layout: Portrait orientation, both people visible
Composition: Professional yet warm setting
Color palette: Natural skin tones, neutral background
Mood: Welcoming, trustworthy, personal
Technical: High resolution, good lighting, sharp focus`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

// Types
interface PearContactFormProps {
  mode?: "light";
  titleLine1?: string;
  highlightedWord1?: string;
  titleLine2?: string;
  highlightedWord2?: string;
  subtitle?: string;
  firstNamePlaceholder?: string;
  lastNamePlaceholder?: string;
  emailPlaceholder?: string;
  phonePlaceholder?: string;
  messagePlaceholder?: string;
  submitButtonText?: string;
  teamImageSrc?: string;
  teamImageAlt?: string;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

// Underlined text component
function UnderlinedText({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span className="relative inline-block">
      {children}
      <span
        className="absolute left-0 bottom-0 w-full h-[2px]"
        style={{ bottom: "2px", backgroundColor: color }}
      />
    </span>
  );
}

// Input field component
function FormInput({
  placeholder,
  type = "text",
  value,
  onChange,
  accentColor,
}: {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  accentColor: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white border border-[#E5E5E5] rounded-md px-4 py-3 text-sm text-[#2D3436] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 transition-colors"
      style={{
        "--focus-color": accentColor,
      } as React.CSSProperties}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = accentColor;
        e.currentTarget.style.boxShadow = `0 0 0 1px ${accentColor}`;
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = "#E5E5E5";
        e.currentTarget.style.boxShadow = "none";
      }}
    />
  );
}

// Textarea component
function FormTextarea({
  placeholder,
  value,
  onChange,
  accentColor,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  accentColor: string;
}) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={4}
      className="w-full bg-white border border-[#E5E5E5] rounded-md px-4 py-3 text-sm text-[#2D3436] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 transition-colors resize-none"
      onFocus={(e) => {
        e.currentTarget.style.borderColor = accentColor;
        e.currentTarget.style.boxShadow = `0 0 0 1px ${accentColor}`;
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = "#E5E5E5";
        e.currentTarget.style.boxShadow = "none";
      }}
    />
  );
}

// Submit button component
function SubmitButton({
  children,
  onClick,
  bgColor,
  hoverColor,
}: {
  children: React.ReactNode;
  onClick: () => void;
  bgColor: string;
  hoverColor: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full text-white font-medium py-3 px-6 rounded-full transition-colors text-sm"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor;
      }}
    >
      {children}
    </motion.button>
  );
}

// Decorative shapes component
function DecorativeShapes({ purpleColor, orangeColor }: { purpleColor: string; orangeColor: string }) {
  return (
    <>
      {/* Purple semicircle - top right */}
      <div
        className="absolute -top-16 right-8 w-32 h-32 rounded-full"
        style={{ clipPath: "inset(50% 0 0 0)", backgroundColor: purpleColor }}
      />
      {/* Orange semicircle - bottom right */}
      <div
        className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full"
        style={{ clipPath: "inset(0 50% 0 0)", backgroundColor: orangeColor }}
      />
    </>
  );
}

// Main Component
export default function PearContactForm({
  mode = "light",
  titleLine1 = "Got any ",
  highlightedWord1 = "questions",
  titleLine2 = "Reach out to ",
  highlightedWord2 = "Jo and Tallie",
  subtitle = "We will get back to you as quickly as possible.",
  firstNamePlaceholder = "First name",
  lastNamePlaceholder = "Last name",
  emailPlaceholder = "Email",
  phonePlaceholder = "Phone number",
  messagePlaceholder = "Type your message...",
  submitButtonText = "Submit",
  teamImageSrc = "/registry/pear/team-photo.jpg",
  teamImageAlt = "Team members Jo and Tallie",
  onSubmit,
}: PearContactFormProps) {
  const colors = COLORS[mode];
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const updateField = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Title */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2D3436] leading-tight">
                {titleLine1}
                <UnderlinedText color={colors.accent}>{highlightedWord1}</UnderlinedText>?
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#2D3436] leading-tight">
                {titleLine2}
                <UnderlinedText color={colors.accent}>{highlightedWord2}</UnderlinedText>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-sm text-[#6B7280]">{subtitle}</p>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* First row - First name, Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  placeholder={firstNamePlaceholder}
                  value={formData.firstName}
                  onChange={updateField("firstName")}
                  accentColor={colors.accent}
                />
                <FormInput
                  placeholder={lastNamePlaceholder}
                  value={formData.lastName}
                  onChange={updateField("lastName")}
                  accentColor={colors.accent}
                />
              </div>

              {/* Second row - Email, Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  placeholder={emailPlaceholder}
                  type="email"
                  value={formData.email}
                  onChange={updateField("email")}
                  accentColor={colors.accent}
                />
                <FormInput
                  placeholder={phonePlaceholder}
                  type="tel"
                  value={formData.phone}
                  onChange={updateField("phone")}
                  accentColor={colors.accent}
                />
              </div>

              {/* Message textarea */}
              <FormTextarea
                placeholder={messagePlaceholder}
                value={formData.message}
                onChange={updateField("message")}
                accentColor={colors.accent}
              />

              {/* Submit button */}
              <SubmitButton
                onClick={handleSubmit}
                bgColor={colors.accent}
                hoverColor={colors.accentHover}
              >
                {submitButtonText}
              </SubmitButton>
            </div>
          </motion.div>

          {/* Right Side - Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Decorative shapes */}
            <DecorativeShapes purpleColor={colors.decorativePurple} orangeColor={colors.accent} />

            {/* Team image */}
            <div className="relative z-10 overflow-hidden rounded-lg">
              <Image
                src={IMAGES.teamPhoto.path}
                alt={IMAGES.teamPhoto.alt}
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
