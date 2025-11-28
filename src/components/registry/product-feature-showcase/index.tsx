"use client";

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
    image: "/registry/product-feature-showcase/nosepads.png",
  },
  {
    id: "bridge",
    title: "Resistant Bridge",
    shortDescription:
      "Our bridge stands for comfort, enhancing your rich facial expressions.",
    headline: "It's built for high durability, ensuring overall flexibility.",
    description:
      "Designed with unique geometry, it is exclusively made from high-grade beta-titanium, always adhering to rigorous quality standards. The distinct curvature is enhancing its three-dimensional appearance.",
    image: "/registry/product-feature-showcase/bridge.png",
  },
  {
    id: "hinges",
    title: "High Precision Hinges",
    shortDescription:
      "Our high-quality hinges provide stability and comfort.",
    headline: "Our hinges are durable, flexible and strong.",
    description:
      "Our top-quality hinges are engineered for stability and comfort, utilizing the full body of the frame to effectively distribute stress.",
    image: "/registry/product-feature-showcase/hinges.png",
  },
  {
    id: "temples",
    title: "Flexible Temples",
    shortDescription:
      "Adjustable temples ensure a comfortable, customized fit for all.",
    headline: "Embracing comfort, exuding elegance.",
    description:
      "Our eyewear features adjustable, soft-touch anti-slip temples for a perfect fit. The well-calculated unique curvature ensures a comfortable environment, gently wrapping around your head.",
    image: "/registry/product-feature-showcase/temples.png",
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
  mainTitle = "Designed for your\neveryday life.",
  features = defaultFeatures,
}: ProductFeatureShowcaseProps) {
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
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-[#333333]"
                  : "bg-[#CCCCCC]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
