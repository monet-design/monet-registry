"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    background: "#F8F9FA",
    cardOverlay: "rgba(0, 0, 0, 0.4)",
    cardHoverOverlay: "rgba(0, 0, 0, 0.6)",
    accent: "#ffffff",
  },
  dark: {
    background: "#0F172A",
    cardOverlay: "rgba(0, 0, 0, 0.5)",
    cardHoverOverlay: "rgba(0, 0, 0, 0.7)",
    accent: "#ffffff",
  },
} as const;

const SERVICES = [
  {
    id: "1",
    title: "의식하진정법",
    subtitle: "두려움은 없애고",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop",
    link: "#sedation",
  },
  {
    id: "2",
    title: "자기치아 살리기",
    subtitle: "자연치아 보존술은",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
    link: "#preservation",
  },
  {
    id: "3",
    title: "무삭제 라미네이트",
    subtitle: "치아가 상하지않는",
    image: "https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=400&h=300&fit=crop",
    link: "#laminate",
  },
  {
    id: "4",
    title: "임플란트",
    subtitle: "빠르고 안전한",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop",
    link: "#implant",
  },
  {
    id: "5",
    title: "턱관절 치료",
    subtitle: "비수술",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
    link: "#tmj",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface Smart365dentalServices3Props {
  mode?: "light" | "dark";
  title?: string;
  services?: Array<{
    id?: string;
    title: string;
    subtitle: string;
    image: string;
    link: string;
  }>;
}

export default function Smart365dentalServices3({
  mode = "light",
  title = "진료과목",
  services = SERVICES,
}: Smart365dentalServices3Props) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
        >
          {title}
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id || index}
              service={service}
              variants={itemVariants}
              colors={colors}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    id?: string;
    title: string;
    subtitle: string;
    image: string;
    link: string;
  };
  variants: any;
  colors: {
    background: string;
    cardOverlay: string;
    cardHoverOverlay: string;
    accent: string;
  };
}

function ServiceCard({ service, variants, colors }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={service.link}
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative aspect-[4/5] overflow-hidden rounded-lg"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${service.image})` }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          backgroundColor: isHovered
            ? colors.cardHoverOverlay
            : colors.cardOverlay,
        }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-between p-4 md:p-6">
        {/* Text */}
        <div className="space-y-1">
          <p className="text-xs font-medium text-white/90 md:text-sm">
            {service.subtitle}
          </p>
          <h3 className="text-base font-bold text-white md:text-lg lg:text-xl">
            {service.title}
          </h3>
        </div>

        {/* Link/Button */}
        <div className="flex items-center space-x-1 text-white">
          <span className="text-xs font-medium md:text-sm">바로가기</span>
          <motion.div
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}
