"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface FormData {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  service: string;
}

interface ServiceOption {
  value: string;
  label: string;
}

interface SummerSprintProps {
  mode?: "light" | "dark";
  badgeTitle?: string;
  badgeSubtitle?: string;
  services?: ServiceOption[];
  buttonText?: string;
  firstNamePlaceholder?: string;
  lastNamePlaceholder?: string;
  businessNamePlaceholder?: string;
  emailPlaceholder?: string;
  servicePlaceholder?: string;
  onSubmit?: (data: FormData) => void;
}

// Starburst Badge Component
function StarburstBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[90px] h-[90px] flex items-center justify-center">
      <svg
        viewBox="0 0 90 90"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={generateStarburstPath(45, 45, 18, 42, 24)}
          fill="#E8EEF8"
          stroke="#E8EEF8"
          strokeWidth="1"
        />
      </svg>
      <div className="relative z-10 text-center px-2">
        {children}
      </div>
    </div>
  );
}

// Generate starburst path
function generateStarburstPath(
  cx: number,
  cy: number,
  innerRadius: number,
  outerRadius: number,
  points: number
): string {
  const angleStep = (Math.PI * 2) / points;
  let path = "";

  for (let i = 0; i < points; i++) {
    const outerAngle = i * angleStep - Math.PI / 2;
    const innerAngle = outerAngle + angleStep / 2;

    const outerX = cx + Math.cos(outerAngle) * outerRadius;
    const outerY = cy + Math.sin(outerAngle) * outerRadius;
    const innerX = cx + Math.cos(innerAngle) * innerRadius;
    const innerY = cy + Math.sin(innerAngle) * innerRadius;

    if (i === 0) {
      path = `M ${outerX} ${outerY}`;
    } else {
      path += ` L ${outerX} ${outerY}`;
    }
    path += ` L ${innerX} ${innerY}`;
  }

  path += " Z";
  return path;
}

// Default services
const defaultServices: ServiceOption[] = [
  { value: "branding", label: "Branding" },
  { value: "web-design", label: "Web Design" },
  { value: "development", label: "Development" },
  { value: "marketing", label: "Marketing" },
  { value: "consulting", label: "Consulting" },
];

// Main Component
export default function SummerSprint({
  mode = "light",
  badgeTitle = "GRAB YOUR\nSPOT",
  badgeSubtitle = "Head's up: once the month fills up,\nyou'll have to wait 'til next time!",
  services = defaultServices,
  buttonText = "Let the sprint begin",
  firstNamePlaceholder = "First name",
  lastNamePlaceholder = "Last name",
  businessNamePlaceholder = "Business name",
  emailPlaceholder = "Email",
  servicePlaceholder = "What services are you interested in?",
  onSubmit,
}: SummerSprintProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    service: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleServiceSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const inputClassName =
    "w-full h-[38px] px-4 bg-transparent border border-white/40 rounded-full text-white text-[13px] placeholder:text-white/60 focus:outline-none focus:border-white/70 transition-colors";

  return (
    <section className="w-full bg-[#517BE9] py-10 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Side - Badge and Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center shrink-0"
          >
            <StarburstBadge>
              <span className="text-[#517BE9] text-[11px] font-bold italic leading-tight whitespace-pre-line">
                {badgeTitle}
              </span>
            </StarburstBadge>
            <p className="mt-3 text-white/70 text-[10px] italic leading-relaxed whitespace-pre-line max-w-[160px]">
              {badgeSubtitle}
            </p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="w-full max-w-md"
          >
            <div className="space-y-2.5">
              {/* First Row - First Name & Last Name */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange("firstName")}
                  placeholder={firstNamePlaceholder}
                  className={inputClassName}
                />
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange("lastName")}
                  placeholder={lastNamePlaceholder}
                  className={inputClassName}
                />
              </div>

              {/* Second Row - Business Name & Email */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={handleChange("businessName")}
                  placeholder={businessNamePlaceholder}
                  className={inputClassName}
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  placeholder={emailPlaceholder}
                  className={inputClassName}
                />
              </div>

              {/* Third Row - Service Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`${inputClassName} flex items-center justify-between text-left ${
                    formData.service ? "text-white" : "text-white/70"
                  }`}
                >
                  <span>
                    {formData.service
                      ? services.find((s) => s.value === formData.service)?.label
                      : servicePlaceholder}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg overflow-hidden z-10"
                  >
                    {services.map((service) => (
                      <button
                        key={service.value}
                        type="button"
                        onClick={() => handleServiceSelect(service.value)}
                        className="w-full px-5 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {service.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="h-[38px] px-6 bg-white rounded-full text-[#517BE9] text-[13px] font-medium hover:bg-white/95 transition-colors"
                >
                  {buttonText}
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
