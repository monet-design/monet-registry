"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  message: string;
}

interface UserTypeOption {
  value: string;
  label: string;
}

interface ResyncBioContactProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  email?: string;
  firstNamePlaceholder?: string;
  lastNamePlaceholder?: string;
  userTypePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  submitText?: string;
  privacyText?: string;
  privacyLinkText?: string;
  userTypeOptions?: UserTypeOption[];
  onSubmit?: (data: FormData) => void;
}

const defaultUserTypeOptions: UserTypeOption[] = [
  { value: "researcher", label: "Researcher" },
  { value: "scientist", label: "Scientist" },
  { value: "business", label: "Business Professional" },
  { value: "student", label: "Student" },
  { value: "other", label: "Other" },
];

export default function ResyncBioContact({
  badgeText = "CONTACT",
  title = "Sync up with ReSync",
  subtitle = "Fill out the form or message us at",
  email = "hello@resync.bio",
  firstNamePlaceholder = "First name",
  lastNamePlaceholder = "Last name",
  userTypePlaceholder = "I am a...",
  emailPlaceholder = "Email",
  messagePlaceholder = "Message",
  submitText = "SUBMIT",
  privacyText = "By submitting this form, you have agreed to our",
  privacyLinkText = "Privacy Policy",
  userTypeOptions = defaultUserTypeOptions,
  onSubmit,
}: ResyncBioContactProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    userType: "",
    email: "",
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserTypeSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, userType: value }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const selectedUserTypeLabel =
    userTypeOptions.find((opt) => opt.value === formData.userType)?.label ||
    userTypePlaceholder;

  return (
    <section className="w-full min-h-screen bg-[#F2F2F2] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-sm">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span
            className="inline-block rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#3D6B35]"
            style={{ backgroundColor: "#D4EDCF" }}
          >
            {badgeText}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-xl font-normal tracking-tight text-[#1A1A1A] sm:text-2xl mb-2"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-xs text-[#888888] mb-8"
        >
          {subtitle}{" "}
          <a
            href={`mailto:${email}`}
            className="text-[#888888] hover:text-[#1A1A1A] transition-colors"
          >
            {email}
          </a>
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          {/* First Name */}
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder={firstNamePlaceholder}
              className="w-full rounded-md border border-[#E5E5E5] bg-white px-3 py-2.5 text-xs text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:border-[#D4EDCF] focus:outline-none focus:ring-1 focus:ring-[#D4EDCF] transition-colors"
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder={lastNamePlaceholder}
              className="w-full rounded-md border border-[#E5E5E5] bg-white px-3 py-2.5 text-xs text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:border-[#D4EDCF] focus:outline-none focus:ring-1 focus:ring-[#D4EDCF] transition-colors"
            />
          </div>

          {/* User Type Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between rounded-md border border-[#E5E5E5] bg-white px-3 py-2.5 text-xs text-left focus:border-[#D4EDCF] focus:outline-none focus:ring-1 focus:ring-[#D4EDCF] transition-colors"
            >
              <span
                className={
                  formData.userType ? "text-[#1A1A1A]" : "text-[#AAAAAA]"
                }
              >
                {selectedUserTypeLabel}
              </span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-[#AAAAAA] transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="absolute z-10 mt-1 w-full rounded-md border border-[#E5E5E5] bg-white shadow-lg"
              >
                {userTypeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleUserTypeSelect(option.value)}
                    className="w-full px-3 py-2 text-left text-xs text-[#1A1A1A] hover:bg-[#F5F5F5] first:rounded-t-md last:rounded-b-md transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={emailPlaceholder}
              className="w-full rounded-md border border-[#E5E5E5] bg-white px-3 py-2.5 text-xs text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:border-[#D4EDCF] focus:outline-none focus:ring-1 focus:ring-[#D4EDCF] transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={messagePlaceholder}
              rows={3}
              className="w-full rounded-md border border-[#E5E5E5] bg-white px-3 py-2.5 text-xs text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:border-[#D4EDCF] focus:outline-none focus:ring-1 focus:ring-[#D4EDCF] transition-colors resize-none"
            />
          </div>

          {/* Privacy Policy Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-[10px] text-[#AAAAAA] py-2"
          >
            {privacyText}{" "}
            <a
              href="#"
              className="text-[#AAAAAA] underline hover:text-[#666666] transition-colors"
            >
              {privacyLinkText}
            </a>
          </motion.p>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex justify-center pt-2"
          >
            <button
              type="submit"
              className="rounded-md bg-[#1A1A1A] px-6 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#333333] hover:shadow-md active:scale-[0.98]"
            >
              {submitText}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
