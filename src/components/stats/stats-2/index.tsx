"use client";

import { motion } from "motion/react";

interface StatItem {
  label: string;
  value: string;
}

interface Stats2Props {
  title?: React.ReactNode;
  stats?: StatItem[];
}

export default function Stats2({
  title = (
    <>
      <em className="not-italic font-normal" style={{ fontStyle: "italic" }}>
        The only platform that creates unique
      </em>
      <br />
      <em className="not-italic font-normal" style={{ fontStyle: "italic" }}>
        & rare UI Kits with TailwindCSS
      </em>
    </>
  ),
  stats = [
    { label: "BLOCKS", value: "110+" },
    { label: "TEMPLATES", value: "29" },
    { label: "CUSTOMERS", value: "3400+" },
    { label: "SUPPORT TICKETS", value: "2844" },
  ],
}: Stats2Props) {
  return (
    <section className="w-full bg-[#F9FAFC] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-medium tracking-tight text-[#1A1D26] sm:text-4xl lg:text-[42px] lg:leading-[1.2]"
          style={{ fontStyle: "italic" }}
        >
          {title}
        </motion.h2>

        {/* Stats Card with Rainbow Gradient Border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 relative"
        >
          {/* Rainbow gradient border wrapper */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-[#E8F5E9] via-[#E3F2FD] via-[#F3E5F5] via-[#FCE4EC] to-[#FFF9C4]">
            {/* Inner white card */}
            <div className="bg-white rounded-2xl px-8 py-10 sm:px-12 sm:py-12">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-xs font-medium tracking-[0.15em] text-[#6E737C] uppercase">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-4xl font-bold tracking-tight text-[#1A1D26] sm:text-5xl">
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
