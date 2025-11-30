"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
}

interface Stats21Props {
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  stats?: StatItem[];
}

export default function Stats21({
  title = (
    <>
      Some <em className="font-serif italic">statistics.</em>
    </>
  ),
  description = "Nunc aenean risus nam risus neque lacus quis aliquam. Pulvinar dignissim id sem habitant. Mi, sed proin non venenatis nam.",
  buttonText = "Learn More",
  onButtonClick,
  stats = [
    { value: "1,800", label: "students" },
    { value: "28", label: "teachers" },
    { value: "300k", label: "breads" },
    { value: "30", label: "countries" },
  ],
}: Stats21Props) {
  // Load Instrument Serif font for italic text
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="w-full bg-black px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col lg:max-w-md">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-normal tracking-tight text-white sm:text-5xl"
              style={{
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontStyle: "normal",
                }}
              >
                {typeof title === "string" ? title : title}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base leading-relaxed text-[#9CA3AF]"
            >
              {description}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={onButtonClick}
              className="mt-8 flex w-fit items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {buttonText}
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex items-center justify-center rounded-xl bg-[#141414] px-12 py-8 sm:px-16 sm:py-10"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </span>
                  <span
                    className="text-xl font-light text-white sm:text-2xl"
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontStyle: "italic",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
