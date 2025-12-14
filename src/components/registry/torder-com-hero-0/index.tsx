"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    accentHover: "#D90000",
  },
  dark: {
    accent: "#FC0000",
    accentHover: "#FF3333",
  },
} as const;

const IMAGES = {
  poster1: {
    path: "https://kr.prd.image.homepage.torder.com/banner/main/c4c60adb-2871-4587-95a2-6fa20f1db291.jpg",
    alt: "Restaurant with torder tablet",
    prompt: "Modern Korean restaurant interior with tablet ordering system on table, warm lighting, high-end dining atmosphere",
  },
  poster2: {
    path: "https://kr.prd.image.homepage.torder.com/banner/main/eabce59d-dfa8-4f9b-8c48-27f80ae1698a.jpg",
    alt: "Cafe with torder system",
    prompt: "Contemporary cafe setting with digital ordering tablet, coffee and pastries visible, cozy ambiance",
  },
  poster3: {
    path: "https://kr.prd.image.homepage.torder.com/banner/main/13f72383-5b29-4033-9bc2-a5e8b4620bc6.jpg",
    alt: "Restaurant dining",
    prompt: "Korean BBQ restaurant with torder tablet, grilled meat on table, elegant interior design",
  },
} as const;

const VIDEOS = [
  {
    src: "https://kr.prd.image.homepage.torder.com/videos/a8e5919b-c41f-4f8a-b691-9b5bdff48ba0.mp4",
    poster: IMAGES.poster1.path,
  },
  {
    src: "https://kr.prd.image.homepage.torder.com/videos/dfb9e5ed-d8a1-4218-ab00-512ce13bba02.mp4?start=0",
    poster: IMAGES.poster2.path,
  },
  {
    src: "https://kr.prd.image.homepage.torder.com/videos/efb86326-ba89-45f8-a1f5-404de1d579a1.mp4?start=0",
    poster: IMAGES.poster3.path,
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface TorderComHero0Props {
  mode?: "light" | "dark";
}

export default function TorderComHero0({
  mode = "dark",
}: TorderComHero0Props) {
  const colors = COLORS[mode];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % VIDEOS.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextSlide();
            return 0;
          }
          return prev + 2;
        });
      }, 80);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, nextSlide]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide && isPlaying) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide, isPlaying]);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Video Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <video
            ref={(el) => { videoRefs.current[currentSlide] = el; }}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            poster={VIDEOS[currentSlide].poster}
          >
            <source src={VIDEOS[currentSlide].src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl font-bold mb-2"
        >
          한국을 넘어 세계로
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8"
        >
          테이블오더 <br />
          글로벌 1위, 티오더
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="px-8 py-4 text-lg font-bold rounded-full transition-colors"
          style={{ backgroundColor: colors.accent }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
        >
          지금 도입문의
        </motion.button>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {/* Progress Bar */}
        <div className="w-32 h-1 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Pagination */}
        <div className="text-white text-sm font-medium">
          <span>{currentSlide + 1}</span>
          <span className="mx-1">/</span>
          <span>{VIDEOS.length}</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
