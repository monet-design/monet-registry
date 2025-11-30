"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
}

interface Stats12Props {
  title?: string;
  titleHighlight?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  stats?: StatItem[];
}

export default function Stats12({
  title = "Some",
  titleHighlight = "statistics.",
  description = "Nunc aenean risus nam risus neque lacus quis aliquam. Pulvinar dignissim id sem habitant. Mi, sed proin non venenatis nam.",
  buttonText = "Learn More",
  onButtonClick,
  stats = [
    { value: "1,800", label: "students" },
    { value: "28", label: "teachers" },
    { value: "300k", label: "breads" },
    { value: "30", label: "countries" },
  ],
}: Stats12Props) {
  return (
    <section className="w-full bg-black px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              <span className="font-normal">{title} </span>
              <span
                className="italic font-normal"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                }}
              >
                {titleHighlight}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-md text-base leading-relaxed text-[#9CA3AF]"
            >
              {description}
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <button
                onClick={onButtonClick}
                className="group inline-flex items-center gap-2 rounded-full border border-white/80 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                {buttonText}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex flex-col justify-center rounded-2xl bg-[#1C1C1C] px-6 py-8 sm:px-8 sm:py-10"
              >
                <span className="text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl">
                  {stat.value}
                </span>
                <span
                  className="mt-2 text-xl italic text-white sm:text-2xl"
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Font import */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap");
      `}</style>
    </section>
  );
}
