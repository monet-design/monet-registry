"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#F97316", // Orange accent for links
    accentHover: "#EA580C",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  teacherPhoto: {
    path: "/registry/codefa-st-feature-8/marc.png",
    alt: "Students learning to code",
  },
  stripeDashboard: {
    path: "/registry/codefa-st-feature-8/stripe-dashboard.png",
    alt: "Stripe dashboard showing $29,106.00 gross volume",
  },
  discordCommunity: {
    path: "/registry/codefa-st-feature-8/discord.png",
    alt: "Students learning to code in Discord community",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface CodefaStFeature8Props {
  mode?: "light" | "dark";
  teacherName?: string;
  greeting?: string;
  businessLink?: string;
  businessCount?: string;
  totalEarnings?: string;
  courseName?: string;
  courseDuration?: string;
  betaStudentCount?: string;
  lessons?: string[];
}

export default function CodefaStFeature8({
  mode = "light",
  teacherName = "Marc",
  greeting = "Hey it's Marc, your teacher",
  businessLink = "https://marclou.com",
  businessCount = "25 tiny businesses",
  totalEarnings = "$200,000",
  courseName = "CodeFast",
  courseDuration = "9 months",
  betaStudentCount = "50 students",
  lessons = ["Short lessons", "Skip the fluff", "Build real businesses"],
}: CodefaStFeature8Props) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      className={`relative flex flex-col items-center gap-8 py-32 max-w-full w-full overflow-hidden text-center ${
        mode === "dark" ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl"
      >
        <span className="italic">{greeting}</span> 👋
      </motion.p>

      <motion.div
        className="pt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ul className="space-y-8 text-lg md:text-xl max-w-3xl mx-auto text-center px-4">
          {/* Teacher Photo */}
          <motion.li variants={itemVariants}>
            <Image
              alt={IMAGES.teacherPhoto.alt}
              width={800}
              height={603}
              className={`w-full max-w-md mx-auto border shadow ${
                mode === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
              src={IMAGES.teacherPhoto.path}
            />
          </motion.li>

          {/* Story part 1 */}
          <motion.li variants={itemVariants} className="italic">
            I was fired from school and university.
          </motion.li>

          <motion.li variants={itemVariants}>
            The way teachers taught was boring and impractical, so I didn&apos;t care.
          </motion.li>

          <motion.li variants={itemVariants}>
            In 2016, I faced the same issue trying to learn coding.{" "}
            <span className="font-semibold">
              Courses were too long and made for people who want to get a job.
            </span>{" "}
            <span className="italic">I almost gave up... </span> 😔
          </motion.li>

          <motion.li variants={itemVariants}>
            So I skipped the theory, built tiny apps, and made my first $1,000 online
            with a few lines of code.
          </motion.li>

          {/* Stripe Dashboard */}
          <motion.li variants={itemVariants}>
            <Image
              alt={IMAGES.stripeDashboard.alt}
              width={848}
              height={660}
              className={`w-full max-w-md mx-auto border shadow ${
                mode === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
              src={IMAGES.stripeDashboard.path}
            />
          </motion.li>

          <motion.li variants={itemVariants}>
            <span className="font-semibold">
              I realized I didn&apos;t need to know everything to create something useful.
            </span>
          </motion.li>

          <motion.li variants={itemVariants}>
            Over time, I built{" "}
            <a
              href={businessLink}
              className="px-0.5 hover:opacity-80 transition-opacity"
              style={{ backgroundColor: colors.accent }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {businessCount}
            </a>{" "}
            and earned over <span className="font-semibold">{totalEarnings}</span> with
            my SaaS. Now, coding is even easier—AI writes and fixes code for you.
          </motion.li>

          <motion.li variants={itemVariants} className="font-semibold">
            So I built {courseName}, the course{" "}
            <span className="font-semibold">I wish I had</span> when I started:
          </motion.li>

          {/* Course Features List */}
          <motion.li variants={itemVariants}>
            <ul className="list-decimal max-w-[260px] -mt-4 list-inside mx-auto text-left">
              {lessons.map((lesson, index) => (
                <li key={index} className="list-item">
                  {lesson}
                </li>
              ))}
            </ul>
          </motion.li>

          {/* Discord Community Image */}
          <motion.li variants={itemVariants}>
            <Image
              alt={IMAGES.discordCommunity.alt}
              width={600}
              height={600}
              className={`w-full max-w-md mx-auto border shadow ${
                mode === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
              src={IMAGES.discordCommunity.path}
            />
          </motion.li>

          <motion.li variants={itemVariants}>
            This course took <span className="font-semibold">{courseDuration}</span> and
            was shaped by <span className="font-semibold">{betaStudentCount}</span> in a
            beta. Some even{" "}
            <span className="font-semibold">made money with their 1st app!</span> I hope
            you like it too.
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
}
