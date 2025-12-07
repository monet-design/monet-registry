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
    background: "#FFFFFF",
    sectionTitle: "#9CA3AF",
    categoryTitle: "#6B7280",
    jobTitle: "#111827",
    location: "#6B7280",
    border: "#E5E7EB",
    arrowColor: "#111827",
    hoverBg: "#F9FAFB",
  },
  dark: {
    background: "#111827",
    sectionTitle: "#6B7280",
    categoryTitle: "#9CA3AF",
    jobTitle: "#F9FAFB",
    location: "#9CA3AF",
    border: "#374151",
    arrowColor: "#F9FAFB",
    hoverBg: "#1F2937",
  },
} as const;

/**
 * 채용 포지션 데이터
 */
const DEFAULT_JOB_CATEGORIES = [
  {
    category: "Non-Tech",
    jobs: [
      {
        title: "Senior Technical Recruiter",
        location: "San Francisco, CA",
        link: "#",
      },
    ],
  },
  {
    category: "Research and Engineering",
    jobs: [
      {
        title: "Research Engineer",
        location: "San Francisco, CA",
        link: "#",
      },
      {
        title: "Research Scientist",
        location: "San Francisco, CA",
        link: "#",
      },
      {
        title: "Software Engineer, AI Product",
        location: "San Francisco, CA",
        link: "#",
      },
      {
        title: "Software Engineer, Generalist",
        location: "San Francisco, CA",
        link: "#",
      },
      {
        title: "Software Engineer, Infrastructure",
        location: "San Francisco, CA",
        link: "#",
      },
      {
        title: "Software Engineer, Product",
        location: "San Francisco, CA",
        link: "#",
      },
    ],
  },
  {
    category: "Product & Design",
    jobs: [
      {
        title: "Lead Product Manager - Natural Language Interface",
        location: "San Francisco, CA",
        link: "#",
      },
      {
        title: "Product Designer",
        location: "San Francisco, CA",
        link: "#",
      },
    ],
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Job {
  title: string;
  location: string;
  link: string;
}

interface JobCategory {
  category: string;
  jobs: Job[];
}

interface TeamAdeptAiProps {
  mode?: "light" | "dark";
  sectionTitle?: string;
  jobCategories?: JobCategory[];
}

export default function TeamAdeptAi({
  mode = "light",
  sectionTitle = "We are hiring",
  jobCategories = DEFAULT_JOB_CATEGORIES,
}: TeamAdeptAiProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-lg font-normal"
          style={{ color: colors.sectionTitle }}
        >
          {sectionTitle}
        </motion.h2>

        {/* Job Categories */}
        <div className="space-y-12">
          {jobCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <h3
                className="mb-4 text-base font-normal"
                style={{ color: colors.categoryTitle }}
              >
                {category.category}
              </h3>

              {/* Job Listings */}
              <div className="space-y-0">
                {category.jobs.map((job, jobIndex) => (
                  <motion.a
                    key={job.title}
                    href={job.link}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: jobIndex * 0.05 }}
                    className="group flex items-center justify-between py-4 transition-colors duration-200"
                    style={{
                      borderBottom: `1px solid ${colors.border}`,
                    }}
                    whileHover={{
                      backgroundColor: colors.hoverBg,
                      paddingLeft: 8,
                      paddingRight: 8,
                      marginLeft: -8,
                      marginRight: -8,
                    }}
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span
                        className="text-base font-medium md:text-lg"
                        style={{ color: colors.jobTitle }}
                      >
                        {job.title}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: colors.location }}
                      >
                        {job.location}
                      </span>
                    </div>
                    <ArrowRight
                      className="h-5 w-5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: colors.arrowColor }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
