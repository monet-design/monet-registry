"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    primary: "#3B5BDB",
    primaryHover: "#364FC7",
    background: "#FFFFFF",
  },
  dark: {
    primary: "#5C7CFA",
    primaryHover: "#748FFC",
    background: "#1A1A2E",
  },
} as const;

const IMAGES = {
  banner1: {
    path: "/scraped/payhere-in-2025-12-14/images/image-0.jpg",
    alt: "12월 한정 이벤트 배너",
    prompt: "Payment terminal devices including tablet and card reader on purple gradient background with promotional text",
  },
  banner2: {
    path: "/scraped/payhere-in-2025-12-14/images/image-1.jpg",
    alt: "키오스크 이벤트 배너",
    prompt: "Kiosk self-service terminal in retail environment with promotional text",
  },
  banner3: {
    path: "/scraped/payhere-in-2025-12-14/images/image-2.jpg",
    alt: "매장 창업 이벤트 배너",
    prompt: "Store setup with POS system and payment terminal devices",
  },
  banner4: {
    path: "/scraped/payhere-in-2025-12-14/images/image-3.jpg",
    alt: "테이블 오더 이벤트 배너",
    prompt: "Table ordering system with QR code payment in restaurant setting",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface BannerSlide {
  id: number;
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
  bgColor: string;
  textColor: string;
}

interface PayhereInHero0Props {
  mode?: "light" | "dark";
  banners?: BannerSlide[];
  autoPlayInterval?: number;
  onBannerClick?: (bannerId: number) => void;
}

const defaultBanners: BannerSlide[] = [
  {
    id: 1,
    title: "12월 한정, 단말기 구매하면",
    highlight: "최신형 갤탭+마케팅 체험권 무료!",
    subtitle: "연말감사제 혜택 즉시 받기 →",
    image: IMAGES.banner1.path,
    bgColor: "linear-gradient(135deg, #4158D0 0%, #5B6DC9 50%, #7B8FE8 100%)",
    textColor: "#FFFFFF",
  },
  {
    id: 2,
    title: "직원 한달 인건비면",
    highlight: "키오스크는 365일 일합니다",
    subtitle: "매년 오르는 인건비 확 줄어들어요 →",
    image: IMAGES.banner2.path,
    bgColor: "linear-gradient(135deg, #667EEA 0%, #764BA2 100%)",
    textColor: "#FFFFFF",
  },
  {
    id: 3,
    title: "매장 창업 준비,",
    highlight: "이왕이면 최대 혜택 으로!",
    subtitle: "바쁜 창업 시간을 한 번에 줄여줄 →",
    image: IMAGES.banner3.path,
    bgColor: "linear-gradient(135deg, #11998E 0%, #38EF7D 100%)",
    textColor: "#FFFFFF",
  },
  {
    id: 4,
    title: "올해 마지막 이벤트!",
    highlight: "테이블 오더 할인 중",
    subtitle: "자세히 보기 →",
    image: IMAGES.banner4.path,
    bgColor: "linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%)",
    textColor: "#FFFFFF",
  },
];

export default function PayhereInHero0({
  mode = "light",
  banners = defaultBanners,
  autoPlayInterval = 5000,
  onBannerClick,
}: PayhereInHero0Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, banners.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentBanner = banners[currentIndex];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative h-[420px] md:h-[520px] lg:h-[560px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex"
            style={{ background: currentBanner.bgColor }}
          >
            {/* Left content */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1
                  className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 whitespace-pre-line"
                  style={{ color: currentBanner.textColor }}
                >
                  {currentBanner.title}
                </h1>
                <p
                  className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6"
                  style={{ color: currentBanner.textColor }}
                >
                  {currentBanner.highlight}
                </p>
                <button
                  onClick={() => onBannerClick?.(currentBanner.id)}
                  className="text-base md:text-lg opacity-90 hover:opacity-100 transition-opacity inline-flex items-center gap-1"
                  style={{ color: currentBanner.textColor }}
                >
                  {currentBanner.subtitle}
                </button>
              </motion.div>
            </div>

            {/* Right image */}
            <div className="hidden md:flex flex-1 items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative w-full h-full max-w-[600px] max-h-[450px]"
              >
                <Image
                  src={currentBanner.image}
                  alt={currentBanner.highlight}
                  fill
                  className="object-contain object-center"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
