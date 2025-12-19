"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    textPrimary: "#000000",
    textSecondary: "#2A2A2A",
    buttonBg: "#262626", // neutral-800
    buttonHoverBg: "#000000",
    overlayBg: "rgba(0, 0, 0, 0.3)",
  },
  dark: {
    background: "#0A0A0A",
    textPrimary: "#FFFFFF",
    textSecondary: "#D5D5D5",
    buttonBg: "#E5E5E5",
    buttonHoverBg: "#FFFFFF",
    overlayBg: "rgba(0, 0, 0, 0.5)",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  gwm1: {
    path: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=450&fit=crop",
    alt: "GWM-1 demonstration showing people at a restaurant table",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>People dining at a restaurant with warm lighting</summary>
<mood>Warm, cinematic, realistic, social gathering</mood>
<background_summary>Interior of a modern restaurant with soft ambient lighting, warm tones</background_summary>
<primary_element>A group of diverse people sitting around a wooden table with plates of food, engaged in conversation. The main focus is on an Asian man in the center wearing a grey t-shirt, looking thoughtfully to the side. Natural lighting from windows creates a warm atmosphere.</primary_element>
<etc_element>Other diners in the background, restaurant interior with tables and chairs</etc_element>`,
  },
  gen45: {
    path: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=450&fit=crop",
    alt: "Gen-4.5 demonstration showing astronaut in space station",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Astronaut floating inside space station</summary>
<mood>Cinematic, realistic, futuristic, awe-inspiring</mood>
<background_summary>Interior of a space station with complex machinery, circular tunnels, and high-tech equipment</background_summary>
<primary_element>An astronaut in a space suit floating weightlessly through a cylindrical corridor of a space station. The astronaut is positioned in the center, viewed from behind/side, with the circular structure of the station visible around them.</primary_element>
<etc_element>Space station equipment, control panels, cables, and structural elements surrounding the astronaut</etc_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Product {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: {
    path: string;
    alt: string;
  };
}

interface RunwaymlComFeature4Props {
  mode?: "light" | "dark";
  sectionTitle?: string;
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    title: "Introducing GWM-1",
    description:
      "GWM-1: our state-of-the-art General World Model, built to simulate reality in real time. Interactive, controllable and general-purpose.\n\nGWM-1 comes in three variants: GWM Worlds for explorable environments, GWM Avatars for conversational characters, and GWM Robotics for robotic manipulation.",
    buttonText: "Learn more",
    buttonLink: "#",
    image: {
      path: IMAGES.gwm1.path,
      alt: IMAGES.gwm1.alt,
    },
  },
  {
    title: "Gen-4.5: A new frontier for video generation.",
    description:
      "Runway Gen-4.5 is the world's top-rated video model, offering unprecedented visual fidelity and creative control. It produces cinematic and highly realistic outputs while providing limitless creative freedom and precise control over every aspect of generation.",
    buttonText: "Learn more",
    buttonLink: "#",
    image: {
      path: IMAGES.gen45.path,
      alt: IMAGES.gen45.alt,
    },
  },
];

export default function RunwaymlComFeature4({
  mode = "light",
  sectionTitle = "Our latest Research and Products",
  products = defaultProducts,
}: RunwaymlComFeature4Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="py-40 lg:py-44 w-full"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-11/12 md:w-full lg:w-[87.5%] mx-auto">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[40px] leading-[1.1] mb-6"
            style={{ color: colors.textPrimary }}
          >
            {sectionTitle}
          </motion.h2>

          {/* Product Cards */}
          <div className="flex flex-col gap-16">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row lg:gap-20 items-center ${
                  index === 0 ? "mt-8 lg:mt-16" : ""
                }`}
              >
                {/* Image Container */}
                <div className="aspect-video w-full lg:w-1/2 rounded-lg overflow-hidden relative group mb-4 lg:mb-0">
                  <div className="absolute inset-0">
                    <Image
                      src={product.image.path}
                      alt={product.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 backdrop-blur-sm flex items-center justify-center transition-opacity duration-200 ease-linear group-hover:opacity-100 opacity-0"
                    style={{ backgroundColor: colors.overlayBg }}
                  >
                    <a
                      href={product.buttonLink}
                      className="font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 py-1 px-2 text-sm leading-5 rounded bg-transparent text-white outline outline-transparent hover:outline-[#3A3A3A] -outline-offset-1 hover:bg-[#1A1A1A] active:bg-[#262626]"
                    >
                      {product.buttonText}
                      <ChevronRight className="w-[18px] h-[18px]" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Text Content */}
                <div className="lg:w-1/2 flex justify-between">
                  <div className="w-full">
                    <h3
                      className="mb-4 !leading-none tracking-tight text-[28px] md:text-[32px] lg:text-[36px] xl:text-[36px]"
                      style={{ color: colors.textPrimary }}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="text-[16px] !leading-tight mb-4 lg:mb-6 lg:max-w-lg whitespace-pre-line"
                      style={{ color: colors.textSecondary }}
                    >
                      {product.description}
                    </p>
                    <a
                      href={product.buttonLink}
                      className="font-semibold transition-all duration-150 inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 py-1.5 px-2.5 text-sm leading-5 rounded-md mt-4"
                      style={{
                        backgroundColor: colors.buttonBg,
                        color: isDark ? "#000000" : "#FFFFFF",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors.buttonHoverBg;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = colors.buttonBg;
                      }}
                    >
                      {product.buttonText}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
