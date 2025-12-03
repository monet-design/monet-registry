"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    buttonBg: "#2D2D2D",
    buttonHover: "#1a1a1a",
  },
} as const;

const IMAGES = {
  clouds: {
    path: "/registry/popcorn-cta/clouds.png",
    alt: "Decorative clouds",
    prompt: `Soft, fluffy clouds illustration in pastel colors.
Style: Minimalist, clean, gentle illustration
Layout: Horizontal layers at bottom of screen
Composition: Multiple cloud shapes overlapping, creating depth
Color palette: Light blue, white, pastel pink accents
Mood: Calm, peaceful, dreamy, welcoming
Technical: Wide aspect ratio, transparent background, PNG format`,
  },
  phones: {
    path: "/registry/popcorn-cta/phones.png",
    alt: "Mobile phones",
    prompt: `Three modern smartphones displaying colorful app interfaces.
Style: Clean product photography, floating devices
Layout: Center aligned, overlapping arrangement
Composition: Main phone centered, two side phones slightly angled
Elements: Bright, vibrant app screens showing social content
Color palette: Varied bright colors on screens, sleek device frames
Mood: Modern, energetic, connected, friendly
Technical: High resolution, clean edges, slight shadows for depth`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface PopcornCtaProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
  cloudsImage?: string;
  phonesImage?: string;
}

export default function PopcornCta({
  title = "I'm ready.",
  subtitle = "Join Popcorn.",
  placeholder = "Enter your e-mail",
  buttonText = "Sign up",
  onSubmit,
  cloudsImage = IMAGES.clouds.path,
  phonesImage = IMAGES.phones.path,
}: PopcornCtaProps) {
  const colors = COLORS.light;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    onSubmit?.(email);
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F7F7F7 0%, #EFF5FA 60%, #F0F7F8 100%)",
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center pt-16 md:pt-24 lg:pt-32">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4F4F4F] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
            <br />
            {subtitle}
          </h1>
        </motion.div>

        {/* Email Input Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="relative flex items-center w-full max-w-md px-4"
        >
          <div className="relative w-full flex items-center bg-white rounded-full shadow-sm border border-gray-100">
            <input
              type="email"
              name="email"
              placeholder={placeholder}
              required
              className="flex-1 px-6 py-4 bg-transparent text-gray-700 placeholder-gray-400 text-sm md:text-base focus:outline-none rounded-l-full"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <button
              type="submit"
              className="px-6 py-2.5 mr-2 text-white text-sm font-medium rounded-full transition-colors duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                backgroundColor: colors.buttonBg,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.buttonHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.buttonBg)}
            >
              {buttonText}
            </button>
          </div>
        </motion.form>
      </div>

      {/* Phones Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 top-[45%] z-20 w-[600px] md:w-[700px] lg:w-[800px]"
      >
        <Image
          src={phonesImage}
          alt={IMAGES.phones.alt}
          width={800}
          height={450}
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>

      {/* Clouds Illustration - Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
      >
        <Image
          src={cloudsImage}
          alt={IMAGES.clouds.alt}
          width={1920}
          height={600}
          className="w-full h-auto object-cover object-bottom"
          priority
        />
      </motion.div>

      {/* Google Font Import */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap");
      `}</style>
    </section>
  );
}
