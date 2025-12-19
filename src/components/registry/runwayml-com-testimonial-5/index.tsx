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
    titleText: "#000000",
    cardTitle: "#1A1A1A",
    description: "#6B7280", // gray-500
    buttonHover: "#F5F7FA",
    buttonActive: "#E7EAF0",
  },
  dark: {
    background: "#0A0A0A",
    titleText: "#FFFFFF",
    cardTitle: "#F5F5F5",
    description: "#9CA3AF",
    buttonHover: "#1F2937",
    buttonActive: "#374151",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  lionsgate: {
    path: "/registry/runwayml-com-testimonial-5/lionsgate.jpg",
    alt: "Runway Announces Partnership with Lionsgate",
  },
  ucla: {
    path: "/registry/runwayml-com-testimonial-5/ucla.jpg",
    alt: "UCLA's Department of Film, Television and Digital Media",
  },
  kpf: {
    path: "/registry/runwayml-com-testimonial-5/kpf.png",
    alt: "How KPF is incorporating AI into Architectural workflows",
  },
  houseOfDavid: {
    path: "/registry/runwayml-com-testimonial-5/house-of-david.png",
    alt: "Case study: House of David",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface CaseStudy {
  image: {
    path: string;
    alt: string;
  };
  title: string;
  description: string;
  href: string;
}

const DEFAULT_CASE_STUDIES: CaseStudy[] = [
  {
    image: IMAGES.lionsgate,
    title: "Runway Announces Partnership with Lionsgate",
    description:
      "Runway and Lionsgate are partnering to explore the use of AI in film production.",
    href: "#",
  },
  {
    image: IMAGES.ucla,
    title: "UCLA's Department of Film, Television and Digital Media",
    description:
      "How UCLA's Film, Television and Digital Media program empowers students to experiment with AI in filmmaking.",
    href: "#",
  },
  {
    image: IMAGES.kpf,
    title: "How KPF is incorporating AI into Architectural workflows",
    description:
      "How KPF is using Runway to streamline rendering workflows and empower creatives to animate architectural projects in-house.",
    href: "#",
  },
  {
    image: IMAGES.houseOfDavid,
    title: "Case study: House of David",
    description:
      'How "House of David" used Runway to become Amazon\'s latest hit series.',
    href: "#",
  },
];

interface RunwaymlComTestimonial5Props {
  mode?: "light" | "dark";
  title?: string;
  caseStudies?: CaseStudy[];
}

export default function RunwaymlComTestimonial5({
  mode = "light",
  title = "Runway is being used by the world's leading organizations across industries",
  caseStudies = DEFAULT_CASE_STUDIES,
}: RunwaymlComTestimonial5Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      className="relative w-full py-16 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-11/12 md:w-full xl:w-14/16">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14 text-[32px] leading-[1.1] tracking-tight sm:text-[36px] lg:text-[40px]"
            style={{ color: colors.titleText }}
          >
            {title.split("leading organizations").map((part, i) =>
              i === 0 ? (
                <span key={i}>
                  {part}leading organizations
                  <br className="hidden lg:block" />
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </motion.h2>

          {/* Case Studies Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col gap-7 lg:flex-row"
              >
                {/* Image */}
                <a
                  href={study.href}
                  className="aspect-[1.9] w-full overflow-hidden rounded-lg lg:w-1/2"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
                    <Image
                      src={study.image.path}
                      alt={study.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </a>

                {/* Content */}
                <div className="mb-4 flex w-full flex-1 flex-col lg:w-1/2">
                  <a
                    href={study.href}
                    className="mr-6 max-w-64 text-2xl leading-none transition-colors duration-150 hover:opacity-80"
                    style={{ color: colors.cardTitle }}
                  >
                    {study.title}
                  </a>
                  <a
                    href={study.href}
                    className="mb-2 mt-2 text-sm leading-tight transition-colors duration-150 hover:opacity-80"
                    style={{ color: colors.description }}
                  >
                    {study.description}
                  </a>
                  <div className="mt-auto">
                    <a
                      href={study.href}
                      className="group inline-flex items-center gap-2 rounded px-2 py-1 text-sm font-semibold leading-5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      style={{
                        color: colors.cardTitle,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          colors.buttonHover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      Learn more
                      <ChevronRight
                        className="h-[18px] w-[18px] transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
