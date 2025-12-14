"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#00A47C",
  },
  dark: {
    accent: "#00C896",
  },
} as const;

const IMAGES = {
  testimonials: [
    {
      logoPath: "/scraped/whattime-co-kr-2025-12-14/images/image-64.png",
      logoAlt: "당근마켓",
      author: "Jessie",
      role: "당근마켓",
      content: "직원 1명을 채용한 기분이 들어요. 운영성 업무가 50%는 절감되었습니다. 되는시간 사용 전으로 돌아가는 건 엄청난 일이라고 생각돼요.",
      href: "https://blog.whattime.co.kr/daangn/",
    },
    {
      logoPath: "/scraped/whattime-co-kr-2025-12-14/images/image-65.png",
      logoAlt: "채널톡",
      author: "Chloe",
      role: "채널톡",
      content: "B2B 세일즈 메일에 되는시간 링크를 삽입하면서 티타임이나 미팅이 성사되는 CVR(Conversion rate)이 훨씬 높아졌습니다.",
      href: "https://blog.whattime.co.kr/channeltalk/",
    },
    {
      logoPath: "/scraped/whattime-co-kr-2025-12-14/images/image-66.png",
      logoAlt: "버킷플레이스",
      author: "김도연",
      role: "버킷플레이스",
      content: "고객인터뷰를 250건 정도 되는시간으로 일정 예약 잡았어요. 예전에는 30분 전 리마인더 보내는 일이 엄청 수고스럽게 느껴졌는데 말끔히 해결됐습니다.",
      href: "https://blog.whattime.co.kr/ohou-se/",
    },
    {
      logoPath: "/scraped/whattime-co-kr-2025-12-14/images/image-67.png",
      logoAlt: "디캠프",
      author: "석희진",
      role: "디캠프",
      content: "디캠프 성장팀에서 사용한 뒤 다른 팀에서도 되는시간을 추가 도입해서 사용하고 있어요. 전화로 일정 조율하는 업무가 사라졌습니다.",
      href: "https://blog.whattime.co.kr/dcamp/",
    },
    {
      logoPath: "/scraped/whattime-co-kr-2025-12-14/images/image-68.png",
      logoAlt: "버드뷰",
      author: "김세현",
      role: "버드뷰",
      content: "UX리서치 인터뷰 예약 업무에 되는시간을 사용합니다. 일하는 업무 수행 방식이 효율적으로 변화하는 것을 경험했어요.",
      href: "https://blog.whattime.co.kr/hwahae/",
    },
    {
      logoPath: "/scraped/whattime-co-kr-2025-12-14/images/image-70.png",
      logoAlt: "카페24",
      author: "김규리",
      role: "카페24",
      content: "고객 인터뷰할 때 주최자, 예약자 모두 알림 기능을 사용할 수 있어서 편리하고, 자동 리마인더 기능으로 업무 시간이 반으로 줄었어요.",
      href: "https://blog.whattime.co.kr/cafe24/",
    },
    {
      logoPath: "/scraped/whattime-co-kr-2025-12-14/images/image-71.png",
      logoAlt: "크몽",
      author: "이재모",
      role: "크몽",
      content: "크몽 창업지원센터에서는 되는시간으로 576명 미팅 진행했어요. 특히 리마인더 알림 자동으로 업무 효과가 2배가 돼요.",
      href: "https://blog.whattime.co.kr/kmong",
    },
    {
      logoPath: "/scraped/whattime-co-kr-2025-12-14/images/image-75.png",
      logoAlt: "프로토파이",
      author: "정예진",
      role: "프로토파이",
      content: "50명의 면접관 일정을 되는시간이 해결해 줍니다. 채용 일정 관리가 기존의 Zapier시스템과 한 번에 연결되어 최고의 경험을 하고 있습니다.",
      href: "https://blog.whattime.co.kr/protopie/",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface Testimonial {
  logoPath: string;
  logoAlt: string;
  author: string;
  role: string;
  content: string;
  href?: string;
}

interface WhattimeTestimonial4Props {
  mode?: "light" | "dark";
  subtitle?: string;
  title?: string;
  highlightedText?: string;
  testimonials?: Testimonial[];
}

export default function WhattimeTestimonial4({
  mode = "light",
  subtitle = "고객 사례",
  title = "현업에서 사용해본 생생한",
  highlightedText = "사용후기",
  testimonials = IMAGES.testimonials as unknown as Testimonial[],
}: WhattimeTestimonial4Props) {
  const colors = COLORS[mode];

  // Duplicate testimonials for seamless infinite scroll
  const testimonialsDuplicated = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full bg-gray-50 py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {title} <span style={{ color: colors.accent }}>{highlightedText}</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <div className="flex animate-marquee-testimonial">
          {testimonialsDuplicated.map((testimonial, index) => (
            <a
              key={index}
              href={testimonial.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[350px] mx-3"
            >
              <div
                className="bg-white rounded-lg p-6 h-full cursor-pointer transition-transform hover:scale-[1.02]"
                style={{
                  filter: "drop-shadow(0px 5px 20px rgba(6, 75, 69, 0.08))",
                }}
              >
                {/* Company Logo */}
                <div className="mb-4 h-[40px]">
                  <Image
                    src={testimonial.logoPath}
                    alt={testimonial.logoAlt}
                    width={135}
                    height={40}
                    className="h-[40px] w-auto object-contain"
                  />
                </div>

                {/* Author Info */}
                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-medium text-gray-700">{testimonial.author}</span>
                  <span className="mx-2">|</span>
                  <span>{testimonial.role}</span>
                </div>

                {/* Content */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes marquee-testimonial {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-testimonial {
          animation: marquee-testimonial 40s linear infinite;
        }
        .animate-marquee-testimonial:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
