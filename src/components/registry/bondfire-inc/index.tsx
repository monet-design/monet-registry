"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import "./font.css";

interface BondfireIncProps {
  studioTitle?: string;
  studioDescription?: string;
  contactEmail?: string;
  companyName?: string;
  address?: {
    street: string;
    city: string;
  };
  areasOfInterest?: string[];
  formFields?: {
    name: string;
    company: string;
    email: string;
    notes: string;
  };
  inquireLinks?: { label: string; href: string }[];
  emailAddress?: string;
  webLinks?: { label: string; href: string }[];
  yearRange?: string;
  resolution?: string;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  selectedInterests: string[];
  name: string;
  company: string;
  email: string;
  notes: string;
}

export default function BondfireInc({
  studioTitle = "STUDIO",
  studioDescription = "Bondfire Inc. is an multidisciplinary design and technology studio established in 2011 by Daniel Wilber and Scott Steeke. Based in Ojai, California we create strategic design systems and build e-commerce platforms for a range of noteworthy brands.",
  contactEmail = "office@bf.inc",
  companyName = "Bondfire Inc.",
  address = {
    street: "1016 N Ojai Ave.",
    city: "Ojai, CA 93023",
  },
  areasOfInterest = ["Branding", "Ecommerce", "Optimization"],
  formFields = {
    name: "Name",
    company: "Company Name",
    email: "Email Address",
    notes: "Notes (Optional)",
  },
  inquireLinks = [
    { label: "Branding", href: "#" },
    { label: "Ecommerce", href: "#" },
    { label: "Optimization", href: "#" },
  ],
  emailAddress = "Sign Up",
  webLinks = [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  yearRange = "2011 - 2024",
  resolution = "100/100%  551(X), 7(Y)",
  onSubmit,
}: BondfireIncProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    notes: "",
  });

  const handleCheckboxChange = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ ...formData, selectedInterests });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bondfire-font w-full min-h-screen bg-white text-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] min-h-screen">
        {/* Left Column - Studio & Contact */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-b md:border-b-0 p-6 md:p-8 flex flex-col"
        >
          {/* Studio Section */}
          <div className="mb-12">
            <h2 className="text-[11px] tracking-[0.15em] uppercase mb-6">
              {studioTitle}
            </h2>
            <p className="text-[11px] leading-[1.8] max-w-[280px]">
              {studioDescription}
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-auto">
            <h2 className="text-[11px] tracking-[0.15em] uppercase mb-6 border-t border-black/20 pt-6">
              CONTACT
            </h2>
            <div className="text-[11px] leading-[1.8] space-y-1">
              <p className="underline cursor-pointer hover:no-underline">
                {contactEmail}
              </p>
              <p className="mt-4">{companyName}</p>
              <p>{address.street}</p>
              <p>{address.city}</p>
            </div>
          </div>
        </motion.div>

        {/* Middle Column - Project Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-b md:border-b-0 p-6 md:p-8"
        >
          <h2 className="text-[11px] tracking-[0.15em] uppercase mb-8">
            PROJECT INQUIRY
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Area of Interest */}
            <div className="mb-8">
              <p className="text-[11px] mb-4">Area of Interest:</p>
              <div className="space-y-2">
                {areasOfInterest.map((interest) => (
                  <label
                    key={interest}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-3 h-3 border border-black/40 flex items-center justify-center transition-colors ${
                        selectedInterests.includes(interest)
                          ? "bg-black"
                          : "bg-white group-hover:border-black"
                      }`}
                      onClick={() => handleCheckboxChange(interest)}
                    >
                      {selectedInterests.includes(interest) && (
                        <svg
                          className="w-2 h-2 text-white"
                          fill="currentColor"
                          viewBox="0 0 12 12"
                        >
                          <path d="M10 3L4.5 8.5 2 6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[11px]">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <p className="text-[11px]">Details:</p>

              <input
                type="text"
                name="name"
                placeholder={formFields.name}
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-[#f5f5f5] border-0 px-3 py-2.5 text-[11px] placeholder:text-black/50 focus:outline-none focus:ring-1 focus:ring-black/20"
              />

              <input
                type="text"
                name="company"
                placeholder={formFields.company}
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-[#f5f5f5] border-0 px-3 py-2.5 text-[11px] placeholder:text-black/50 focus:outline-none focus:ring-1 focus:ring-black/20"
              />

              <input
                type="email"
                name="email"
                placeholder={formFields.email}
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-[#f5f5f5] border-0 px-3 py-2.5 text-[11px] placeholder:text-black/50 focus:outline-none focus:ring-1 focus:ring-black/20"
              />

              <textarea
                name="notes"
                placeholder={formFields.notes}
                value={formData.notes}
                onChange={handleInputChange}
                rows={3}
                className="w-full bg-[#f5f5f5] border-0 px-3 py-2.5 text-[11px] placeholder:text-black/50 focus:outline-none focus:ring-1 focus:ring-black/20 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-6 text-[11px] underline hover:no-underline transition-all cursor-pointer"
            >
              Submit Form
            </button>
          </form>
        </motion.div>

        {/* Right Column - Inquire, Email, Web & Copyright */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 md:p-8 flex flex-col md:border-l-4 md:border-r md:border-black"
        >
          {/* Inquire Section */}
          <div className="mb-8">
            <div className="flex gap-8">
              <span className="text-[11px]">Inquire</span>
              <div className="space-y-1">
                {inquireLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-[11px] underline hover:no-underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="mb-8">
            <div className="flex gap-8">
              <span className="text-[11px]">Email</span>
              <a
                href="#"
                className="text-[11px] underline hover:no-underline"
              >
                {emailAddress}
              </a>
            </div>
          </div>

          {/* Web Section */}
          <div className="mb-8">
            <div className="flex gap-8">
              <span className="text-[11px]">Web</span>
              <div className="space-y-1">
                {webLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-[11px] underline hover:no-underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright & Resolution */}
          <div className="mt-auto text-right">
            <p className="text-[11px] mb-2">&copy; {yearRange}</p>
            <p className="text-[11px] text-black/50">{resolution}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
