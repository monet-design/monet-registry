"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface ChantalHoahingProps {
  greeting?: string;
  recipientLabel?: string;
  recipientEmail?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  submitButtonText?: string;
  stampImageSrc?: string;
  onSubmit?: (data: { name: string; email: string }) => void;
}

export default function ChantalHoahing({
  greeting = "Hi Chantal...",
  recipientLabel = "To",
  recipientEmail = "contact@chantalhoahing.com",
  namePlaceholder = "Your name",
  emailPlaceholder = "Your email address",
  submitButtonText = "Submit",
  stampImageSrc = "/registry/chantal-hoahing/stamp.png",
  onSubmit,
}: ChantalHoahingProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ name, email });
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[#1a1a1a] px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-[720px]"
      >
        {/* Postcard Container */}
        <div className="flex overflow-hidden rounded-2xl bg-[#FAFAFA] shadow-xl">
          {/* Left Side - Message Area */}
          <div className="flex-1 border-r border-[#E8E8E8] p-8 md:p-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-base text-[#333] md:text-lg"
            >
              {greeting}
            </motion.p>
          </div>

          {/* Right Side - Form Area */}
          <div className="flex flex-1 flex-col p-6 md:p-8">
            {/* Stamp */}
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mb-6 self-end"
            >
              <Image
                src={stampImageSrc}
                alt="Postage stamp"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
            </motion.div>

            {/* To Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mb-6"
            >
              <p className="mb-1 text-xs text-[#999]">{recipientLabel}</p>
              <p className="text-sm font-medium text-[#1a1a1a]">
                {recipientEmail}
              </p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mb-4"
              >
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={namePlaceholder}
                  className="w-full border-b border-[#E0E0E0] bg-transparent py-2 text-sm text-[#333] placeholder:text-[#999] focus:border-[#333] focus:outline-none"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mb-6"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={emailPlaceholder}
                  className="w-full border-b border-[#E0E0E0] bg-transparent py-2 text-sm text-[#333] placeholder:text-[#999] focus:border-[#333] focus:outline-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="mt-auto"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border border-[#1a1a1a] bg-[#1a1a1a] px-6 py-2 text-xs font-medium text-white transition-colors hover:bg-[#333]"
                >
                  {submitButtonText}
                </motion.button>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
