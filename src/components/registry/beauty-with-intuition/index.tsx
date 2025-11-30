"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Instagram } from "lucide-react";

interface LocationInfo {
  name: string;
  schedule: string;
}

interface BeautyWithIntuitionProps {
  sectionLabel?: string;
  headline?: string;
  locations?: LocationInfo[];
  closedNote?: string;
  submitButtonText?: string;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  hadExtensionsBefore: boolean | null;
  hasExtensionsNow: boolean | null;
  appointmentDate: string;
  phone: string;
  captchaAnswer: string;
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function RadioGroup({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: boolean | null;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-medium text-[#4A4A4A]">
        {label}
      </label>
      <div className="flex gap-6">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name={name}
            checked={value === true}
            onChange={() => onChange(true)}
            className="h-3.5 w-3.5 appearance-none rounded-full border border-[#C4B9B2] checked:border-[#A67457] checked:bg-[#A67457] focus:outline-none"
          />
          <span className="text-xs text-[#6B6B6B]">Yes</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name={name}
            checked={value === false}
            onChange={() => onChange(false)}
            className="h-3.5 w-3.5 appearance-none rounded-full border border-[#C4B9B2] checked:border-[#A67457] checked:bg-[#A67457] focus:outline-none"
          />
          <span className="text-xs text-[#6B6B6B]">No</span>
        </label>
      </div>
    </div>
  );
}

function FormInput({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-1">
      <label className="block text-xs font-medium text-[#4A4A4A]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b border-[#E5E0DC] bg-white px-0 py-2 text-sm text-[#1A1A1A] placeholder:text-[#B5B5B5] focus:border-[#A67457] focus:outline-none"
      />
    </div>
  );
}

export default function BeautyWithIntuition({
  sectionLabel = "CONTACT US",
  headline = "Get in touch today to schedule\nyour lash appointment",
  locations = [
    { name: "Pasadena", schedule: "Sunday, Monday, Wednesday" },
    { name: "Claremont", schedule: "Thursday - Saturday" },
  ],
  closedNote = "Closed on Tuesday",
  submitButtonText = "SUBMIT",
  onSubmit,
}: BeautyWithIntuitionProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    hadExtensionsBefore: null,
    hasExtensionsNow: null,
    appointmentDate: "",
    phone: "",
    captchaAnswer: "",
  });

  const [captcha] = useState(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    return { a, b, answer: a + b };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(formData.captchaAnswer) === captcha.answer) {
      onSubmit?.(formData);
    }
  };

  const headlineLines = headline.split("\n");

  return (
    <section className="w-full bg-[#F7F6F4] px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&display=swap');
        `}
      </style>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            {/* Section Label */}
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#A67457" }}
            >
              {sectionLabel}
            </span>

            {/* Headline */}
            <h2
              className="mt-4 text-2xl leading-[1.2] sm:text-3xl lg:text-[32px]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {headlineLines.map((line, index) => (
                <span key={index} className="text-[#2A2A2A]">
                  {line}
                  {index < headlineLines.length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-[#D9D4CF]" />

            {/* Locations */}
            <div className="space-y-2">
              <h3
                className="text-base italic text-[#2A2A2A]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Locations
              </h3>
              <div className="space-y-1 text-sm">
                {locations.map((loc, index) => (
                  <p key={index} className="text-[#6B6B6B]">
                    <span
                      className="font-medium"
                      style={{ color: "#A67457" }}
                    >
                      {loc.name}:
                    </span>{" "}
                    {loc.schedule}
                  </p>
                ))}
              </div>
              <p
                className="mt-3 text-sm italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#A67457",
                }}
              >
                {closedNote}
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="text-[#6B6B6B] transition-colors hover:text-[#A67457]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-[#6B6B6B] transition-colors hover:text-[#A67457]"
                aria-label="Pinterest"
              >
                <PinterestIcon className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 lg:max-w-md"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormInput
                  label="Name"
                  value={formData.name}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, name: value }))
                  }
                />
                <FormInput
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, email: value }))
                  }
                />
              </div>

              {/* Radio Questions */}
              <RadioGroup
                label="Have you had lash extensions before?"
                name="hadExtensions"
                value={formData.hadExtensionsBefore}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    hadExtensionsBefore: value,
                  }))
                }
              />

              <RadioGroup
                label="Do you currently have lash extensions?"
                name="hasExtensions"
                value={formData.hasExtensionsNow}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, hasExtensionsNow: value }))
                }
              />

              {/* Appointment Date */}
              <FormInput
                label="When would you like to schedule your appointment for?"
                value={formData.appointmentDate}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, appointmentDate: value }))
                }
              />

              {/* Phone */}
              <FormInput
                label="What is the best number to reach you at?"
                type="tel"
                value={formData.phone}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, phone: value }))
                }
              />

              {/* Captcha and Submit Row */}
              <div className="flex items-end gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#6B6B6B]">
                    {captcha.a} + {captcha.b} =
                  </span>
                  <input
                    type="text"
                    value={formData.captchaAnswer}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        captchaAnswer: e.target.value,
                      }))
                    }
                    className="w-12 border-b border-[#E5E0DC] bg-white px-2 py-1 text-center text-sm text-[#1A1A1A] focus:border-[#A67457] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="ml-auto px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#A67457" }}
                >
                  {submitButtonText}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
