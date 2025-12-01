"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import "./font.css";

interface ContactInfo {
  phoneLabel?: string;
  phone?: string;
  emailLabel?: string;
  email?: string;
  locationLabel?: string;
  location?: string;
}

interface FormField {
  name: string;
  email: string;
  phone: string;
  message: string;
  inquiryType: "distributor" | "business";
}

interface IAmSuperjuiceProps {
  mode?: "light" | "dark";
  headline?: string;
  description?: string;
  formTitle?: string;
  distributorLabel?: string;
  businessLabel?: string;
  contactInfo?: ContactInfo;
  onSubmit?: (data: FormField) => void;
}

export default function IAmSuperjuice({
  mode = "light",
  headline = "Go with the flow",
  description = "Working closely with our trusted partners, we expertly manage logistics, ensuring our Superjuice flows smoothly from production to consumers' doorstep. Our commitment to global reliability and customer satisfaction are key to us.",
  formTitle = "Join us to bring your unique flavour to our business",
  distributorLabel = "Become a Distributor",
  businessLabel = "Business Orders",
  contactInfo = {
    phoneLabel: "Phone number:",
    phone: "+31 (0) 70 406 62 92",
    emailLabel: "Email address:",
    email: "info@iamf-b.com",
    locationLabel: "Location:",
    location: "Linge 1-5, 2491 BZ, Den Haag, Netherlands",
  },
  onSubmit,
}: IAmSuperjuiceProps) {
  const [formData, setFormData] = useState<FormField>({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "distributor",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="font-inter w-full min-h-[500px] py-12 px-4 sm:px-8 lg:px-16"
      style={{
        background:
          "linear-gradient(to right, #DBECF3 0%, #E5EFF0 30%, #EAF0F0 50%, #F0F1EC 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Section - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 pt-4"
          >
            <h1
              className="font-allura text-4xl sm:text-5xl lg:text-6xl"
              style={{ color: "#1A4731" }}
            >
              {headline}
            </h1>

            <p
              className="text-sm sm:text-base leading-relaxed max-w-md"
              style={{ color: "#3D4A42" }}
            >
              {description}
            </p>

            <div className="space-y-4 pt-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#E8EEF0" }}
                >
                  <Phone className="w-4 h-4" style={{ color: "#1A4731" }} />
                </div>
                <div>
                  <p
                    className="text-xs"
                    style={{ color: "#6B7A6F" }}
                  >
                    {contactInfo.phoneLabel}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#3D4A42" }}
                  >
                    {contactInfo.phone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#E8EEF0" }}
                >
                  <Mail className="w-4 h-4" style={{ color: "#1A4731" }} />
                </div>
                <div>
                  <p
                    className="text-xs"
                    style={{ color: "#6B7A6F" }}
                  >
                    {contactInfo.emailLabel}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#3D4A42" }}
                  >
                    {contactInfo.email}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#E8EEF0" }}
                >
                  <MapPin className="w-4 h-4" style={{ color: "#F5A623" }} />
                </div>
                <div>
                  <p
                    className="text-xs"
                    style={{ color: "#6B7A6F" }}
                  >
                    {contactInfo.locationLabel}
                  </p>
                  <p
                    className="text-sm font-medium max-w-[180px]"
                    style={{ color: "#3D4A42" }}
                  >
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="rounded-3xl p-6 sm:p-8"
              style={{
                background:
                  "linear-gradient(180deg, #FDF5E7 0%, #FAEBD1 40%, #F3DBB0 100%)",
              }}
            >
              <h2
                className="text-base sm:text-lg font-semibold mb-6 text-center"
                style={{ color: "#3D4A42" }}
              >
                {formTitle}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Radio Buttons */}
                <div className="flex justify-center gap-8 mb-6">
                  <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="distributor"
                      checked={formData.inquiryType === "distributor"}
                      onChange={() =>
                        setFormData((prev) => ({
                          ...prev,
                          inquiryType: "distributor",
                        }))
                      }
                      className="w-4 h-4 accent-[#1A4731]"
                    />
                    <span
                      className="text-sm"
                      style={{ color: "#1A4731" }}
                    >
                      {distributorLabel}
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="business"
                      checked={formData.inquiryType === "business"}
                      onChange={() =>
                        setFormData((prev) => ({
                          ...prev,
                          inquiryType: "business",
                        }))
                      }
                      className="w-4 h-4 accent-[#1A4731]"
                    />
                    <span
                      className="text-sm"
                      style={{ color: "#6B7A6F" }}
                    >
                      {businessLabel}
                    </span>
                  </label>
                </div>

                {/* Name Field */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1A4731]/30"
                  style={{
                    backgroundColor: "#F7DFB3",
                    color: "#3D4A42",
                  }}
                />

                {/* Email Field */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1A4731]/30"
                  style={{
                    backgroundColor: "#F7DFB3",
                    color: "#3D4A42",
                  }}
                />

                {/* Phone Field */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone no.*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1A4731]/30"
                  style={{
                    backgroundColor: "#F7DFB3",
                    color: "#3D4A42",
                  }}
                />

                {/* Message Field */}
                <textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1A4731]/30 resize-none"
                  style={{
                    backgroundColor: "#F7DFB3",
                    color: "#3D4A42",
                  }}
                />

                {/* Submit Button */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-white transition-colors"
                    style={{
                      backgroundColor: "#1A4731",
                    }}
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
