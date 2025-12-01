"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    progressActive: "#333333",
    progressInactive: "#CCCCCC",
  },
  dark: {
    progressActive: "#FFFFFF",
    progressInactive: "#555555",
  },
} as const;

const IMAGES = {
  nosepads: {
    path: "/registry/product-feature-showcase/nosepads.png",
    alt: "Close-up of adaptive soft nose pads on eyewear",
    prompt: `Product close-up photo of eyeglass nose pads.
Style: Professional product photography, soft lighting, minimal aesthetic
Layout: Close-up macro shot showing nose pad detail
Composition: Focus on adjustable soft-touch nose pads on eyeglass frame
Background: Soft gradient from light to medium gray
Color palette: Metallic silver/titanium frame, soft silicone nose pads, neutral background
Elements: Bridge area, nose pad arms, soft silicone pads
Mood: Premium, comfortable, detail-oriented, high quality
Technical: High resolution, shallow depth of field, professional lighting`,
  },
  bridge: {
    path: "/registry/product-feature-showcase/bridge.png",
    alt: "Detailed view of titanium bridge structure",
    prompt: `Product close-up of eyeglass bridge structure.
Style: Premium product photography, studio lighting
Layout: Centered view of bridge component
Composition: Focus on curved titanium bridge with unique geometry
Background: Clean gradient, minimal distraction
Color palette: Brushed titanium, metallic accents, neutral gray background
Elements: Bridge curve, connection points, material texture
Mood: Durable, engineered, precision, premium quality
Technical: High resolution, macro detail, reflective surfaces`,
  },
  hinges: {
    path: "/registry/product-feature-showcase/hinges.png",
    alt: "Precision hinges on eyeglass frame",
    prompt: `Product detail shot of eyeglass hinges.
Style: Technical product photography, clean aesthetic
Layout: Side angle showing hinge mechanism
Composition: Focus on hinge joint connecting temple to frame
Background: Soft neutral gradient
Color palette: Metal finish, precise engineering, neutral tones
Elements: Hinge mechanism, screws, connection points
Mood: Quality, durability, precision engineering
Technical: High resolution, sharp focus, product detail`,
  },
  temples: {
    path: "/registry/product-feature-showcase/temples.png",
    alt: "Flexible temples with soft-touch finish",
    prompt: `Product shot of eyeglass temple arms.
Style: Clean product photography, professional lighting
Layout: Side view showing temple curve and texture
Composition: Focus on curved temple arm with soft-touch coating
Background: Minimal gradient background
Color palette: Matte finish, neutral tones, soft texture
Elements: Temple curve, soft-touch material, end tips
Mood: Comfortable, flexible, quality craftsmanship
Technical: High resolution, detailed texture, professional studio shot`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import "./font.css";

interface Feature {
  id: string;
  title: string;
  shortDescription: string;
  headline: string;
  description: string;
  image: string;
}

interface ProductFeatureShowcaseProps {
  mode?: "light" | "dark";
  mainTitle?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    id: "nosepads",
    title: "Adaptive Soft Nosepads",
    shortDescription:
      "Nose pads that offer a gentle touch and stable fit for every face.",
    headline: "Nose pad that raises the pleasance of touch and stability.",
    description:
      "The Other Glasses — features soft-touch no-slip nose pads, for an extremely lightweight feel. Crafted with highly adjustable nose pad arms, guaranteeing a flawless fit for every face. Designed for easy, screwless replacement.",
    image: IMAGES.nosepads.path,
  },
  {
    id: "bridge",
    title: "Resistant Bridge",
    shortDescription:
      "Our bridge stands for comfort, enhancing your rich facial expressions.",
    headline: "It's built for high durability, ensuring overall flexibility.",
    description:
      "Designed with unique geometry, it is exclusively made from high-grade beta-titanium, always adhering to rigorous quality standards. The distinct curvature is enhancing its three-dimensional appearance.",
    image: IMAGES.bridge.path,
  },
  {
    id: "hinges",
    title: "High Precision Hinges",
    shortDescription:
      "Our high-quality hinges provide stability and comfort.",
    headline: "Our hinges are durable, flexible and strong.",
    description:
      "Our top-quality hinges are engineered for stability and comfort, utilizing the full body of the frame to effectively distribute stress.",
    image: IMAGES.hinges.path,
  },
  {
    id: "temples",
    title: "Flexible Temples",
    shortDescription:
      "Adjustable temples ensure a comfortable, customized fit for all.",
    headline: "Embracing comfort, exuding elegance.",
    description:
      "Our eyewear features adjustable, soft-touch anti-slip temples for a perfect fit. The well-calculated unique curvature ensures a comfortable environment, gently wrapping around your head.",
    image: IMAGES.temples.path,
  },
];

function FeatureSection({
  feature,
  features,
  index,
  onInView,
}: {
  feature: Feature;
  features: Feature[];
  index: number;
  onInView: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  return (
    <section
      ref={ref}
      className="relative grid min-h-[600px] grid-cols-1 gap-8 py-16 lg:grid-cols-12 lg:gap-12"
    >
      {/* Left Sidebar - Feature Navigation */}
      <div className="order-2 lg:order-1 lg:col-span-3">
        <div className="space-y-6">
          {features.map((f, idx) => (
            <div
              key={f.id}
              className={`transition-opacity duration-300 ${
                idx === index ? "opacity-100" : "opacity-40"
              }`}
            >
              <h4
                className={`text-sm ${
                  idx === index ? "font-semibold" : "font-normal"
                } text-[#333333]`}
              >
                {f.title}
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-[#707070]">
                {f.shortDescription}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Center - Product Image */}
      <div className="order-1 lg:order-2 lg:col-span-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-gradient-to-b from-[#F2F2F2] to-[#E8E8E8]"
        >
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Right side - empty for balance */}
      <div className="hidden lg:col-span-3 lg:block" />

      {/* Bottom Text */}
      <div className="order-3 lg:col-span-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl font-medium leading-snug tracking-tight text-[#333333] lg:text-3xl"
          >
            {feature.headline}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm leading-relaxed text-[#707070] lg:text-base"
          >
            {feature.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default function ProductFeatureShowcase({
  mode = "light",
  mainTitle = "Designed for your\neveryday life.",
  features = defaultFeatures,
}: ProductFeatureShowcaseProps) {
  const colors = COLORS[mode];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInView = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full bg-white">
      {/* Main Title */}
      <div className="px-6 pb-12 pt-20 lg:px-12 lg:pb-20 lg:pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-playfair text-center text-4xl italic text-[#333333] lg:text-6xl"
        >
          {mainTitle.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < mainTitle.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>
      </div>

      {/* Feature Sections */}
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {features.map((feature, index) => (
          <FeatureSection
            key={feature.id}
            feature={feature}
            features={features}
            index={index}
            onInView={handleInView}
          />
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 lg:block">
        <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-lg backdrop-blur-sm">
          {features.map((_, index) => (
            <div
              key={index}
              style={{
                backgroundColor: index === activeIndex ? colors.progressActive : colors.progressInactive,
              }}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
