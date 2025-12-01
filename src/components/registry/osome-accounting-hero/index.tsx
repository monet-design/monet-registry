"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Play, Star } from "lucide-react";
import Image from "next/image";

interface OsomeAccountingHeroProps {
  mode?: "light" | "dark";
  breadcrumb?: {
    prefix?: string;
    current?: string;
  };
  title?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href?: string;
  };
  secondaryCta?: {
    label: string;
    href?: string;
  };
  testimonial?: {
    imageSrc?: string;
    quote?: string;
    name?: string;
    company?: string;
    companyLogo?: string;
  };
  review?: {
    rating?: number;
    count?: number;
    source?: string;
  };
}

export default function OsomeAccountingHero({
  mode = "light",
  breadcrumb = {
    prefix: "Osome SG",
    current: "Accounting",
  },
  title = "Your finances sorted with all-in-one accounting services",
  description = "Free yourself from financial admin. Our dedicated experts and easy-to-use tools make managing your money and paying the right tax effortless.",
  primaryCta = {
    label: "Book a consultation",
    href: "#",
  },
  secondaryCta = {
    label: "Pricing",
    href: "#",
  },
  testimonial = {
    imageSrc: "/registry/osome-accounting-hero/testimonial-person.jpg",
    quote: "I use Osome to help me succeed",
    name: "Felix Lee",
    company: "ADPList",
    companyLogo: undefined,
  },
  review = {
    rating: 4.3,
    count: 545,
    source: "Google",
  },
}: OsomeAccountingHeroProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.3;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="absolute w-4 h-4 text-gray-300" />
            <div className="absolute overflow-hidden w-1/2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star key={i} className="w-4 h-4 text-gray-300" />
        );
      }
    }
    return stars;
  };

  return (
    <section className="relative w-full bg-[#FFFEFA] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Breadcrumb */}
            {breadcrumb && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-gray-400">{breadcrumb.prefix}</span>
                <span className="text-gray-400">*</span>
                <span className="font-medium text-gray-700">{breadcrumb.current}</span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] tracking-tight">
              {title.split(" ").reduce((acc: React.ReactNode[], word, idx, arr) => {
                acc.push(word);
                // Line breaks after "sorted", "all-in-", and "accounting"
                if (word === "sorted" || word === "all-in-" || word === "accounting") {
                  acc.push(<br key={`br-${idx}`} className="hidden md:block" />);
                } else if (idx < arr.length - 1) {
                  acc.push(" ");
                }
                return acc;
              }, [])}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href={primaryCta.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0263FD] text-white font-medium rounded-full hover:bg-[#0052d4] transition-colors"
              >
                {primaryCta.label}
              </motion.a>
              <motion.a
                href={secondaryCta.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0263FD] font-medium rounded-full border-2 border-[#0263FD] hover:bg-blue-50 transition-colors"
              >
                {secondaryCta.label}
              </motion.a>
            </div>

            {/* Review Badge */}
            {review && (
              <div className="flex items-center gap-2 pt-4">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="font-semibold text-gray-900">{review.rating}</span>
                <div className="flex items-center">
                  {renderStars(review.rating || 0)}
                </div>
                <span className="text-gray-500 text-sm">{review.count} reviews</span>
              </div>
            )}
          </motion.div>

          {/* Right Content - Testimonial Video Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              {/* Image */}
              {testimonial.imageSrc && (
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name || "Testimonial"}
                  fill
                  className="object-cover"
                />
              )}

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Company Logo Badge */}
              {testimonial.company && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-sm font-medium text-gray-700">
                    {testimonial.companyLogo ? (
                      <Image
                        src={testimonial.companyLogo}
                        alt={testimonial.company}
                        width={80}
                        height={24}
                        className="h-5 w-auto"
                      />
                    ) : (
                      <span className="flex items-center gap-1">
                        <span className="opacity-60">@</span>
                        {testimonial.company}
                      </span>
                    )}
                  </span>
                </div>
              )}

              {/* Quote and Attribution */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-2xl md:text-3xl font-light leading-tight mb-2">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-sm text-white/80">
                  {testimonial.name}, {testimonial.company}
                </p>
              </div>

              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Play video"
              >
                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
