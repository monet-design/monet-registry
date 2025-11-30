"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Plus } from "lucide-react";

// Font import for Instrument Serif
import "./font.css";

// Types
interface MillinersYardProps {
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
function DecorativeCircle() {
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
            fill="#E8A5A0"
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
function DecorativeStripes() {
  return (
    <div className="absolute bottom-8 right-0 hidden opacity-60 sm:block">
      <div className="flex flex-col gap-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full bg-[#6D2634]"
            style={{
              width: `${80 + i * 20}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Underline Input Component
function UnderlineInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs uppercase tracking-wider text-[#8B6068]">
        {label}
        <span className="text-[#E8A5A0]">*</span>
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border-b border-[#87545F] bg-transparent pb-2 text-sm text-[#E8A5A0] placeholder-[#8B6068] outline-none transition-colors focus:border-[#E8A5A0]"
      />
    </div>
  );
}

// Dropdown Select Component
function DropdownSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs uppercase tracking-wider text-[#8B6068]">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between border border-[#87545F] bg-transparent px-3 py-2 text-left text-sm text-[#E8A5A0] transition-colors hover:border-[#E8A5A0]"
        >
          <span className={value ? "text-[#E8A5A0]" : "text-[#8B6068]"}>
            {value || placeholder}
          </span>
          <ChevronDown
            className={`h-4 w-4 text-[#E8A5A0] transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full z-10 mt-1 w-full border border-[#87545F] bg-[#541729]"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="block w-full px-3 py-2 text-left text-sm text-[#E8A5A0] transition-colors hover:bg-[#E8A5A0]/10"
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
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs uppercase tracking-wider text-[#8B6068]">
        Message
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        className="resize-none border border-[#87545F] bg-transparent px-3 py-2 text-sm text-[#E8A5A0] placeholder-[#8B6068] outline-none transition-colors focus:border-[#E8A5A0]"
      />
    </div>
  );
}

// Plus icon at bottom
function PlusIcon() {
  return (
    <div className="mt-12 flex justify-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#87545F]">
        <Plus className="h-5 w-5 text-[#87545F]" />
      </div>
    </div>
  );
}

// Main Component
export default function MillinersYard({
  title = "REGISTER YOUR\nINTEREST",
  subtitle = "Submit your details below to download our brochure",
  buildingImage = "/registry/milliners-yard/building.jpg",
  bedroomOptions = ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom"],
  onSubmit,
}: MillinersYardProps) {
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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#541729] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      {/* Decorative elements */}
      <DecorativeCircle />
      <BuildingImageCircle imageSrc={buildingImage} />
      <DecorativeStripes />

      <div className="relative z-10 mx-auto max-w-2xl pt-32 sm:pt-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <h1 className="font-instrument-serif text-3xl italic leading-tight text-[#E8A5A0] sm:text-4xl lg:text-5xl">
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
          className="mb-10 text-center text-sm text-[#D08080]/80"
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
              label="First Name"
              value={formData.firstName}
              onChange={(v) => updateField("firstName", v)}
            />
            <UnderlineInput
              label="Last Name"
              value={formData.lastName}
              onChange={(v) => updateField("lastName", v)}
            />
          </div>

          {/* Contact row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <UnderlineInput
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(v) => updateField("email", v)}
            />
            <UnderlineInput
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(v) => updateField("phone", v)}
            />
          </div>

          {/* Property details row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <DropdownSelect
              label="Bedroom"
              value={formData.bedroom}
              onChange={(v) => updateField("bedroom", v)}
              options={bedroomOptions}
              placeholder="BEDROOM"
            />
            <UnderlineInput
              label="Preferred Rent"
              value={formData.preferredRent}
              onChange={(v) => updateField("preferredRent", v)}
            />
            <UnderlineInput
              label="Move In Date"
              value={formData.moveInDate}
              onChange={(v) => updateField("moveInDate", v)}
            />
          </div>

          {/* Message */}
          <MessageTextarea
            value={formData.message}
            onChange={(v) => updateField("message", v)}
          />

          {/* Submit button */}
          <div className="flex justify-center pt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-[#D08080] bg-transparent px-12 py-3 text-xs font-medium uppercase tracking-widest text-[#D08080] transition-colors hover:bg-[#D08080]/10"
            >
              Submit
            </motion.button>
          </div>
        </motion.form>

        {/* Plus icon */}
        <PlusIcon />
      </div>
    </section>
  );
}
