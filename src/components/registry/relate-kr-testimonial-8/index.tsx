"use client";

import { motion } from "motion/react";

const COLORS = {
  light: {
    accent: "#3366FF",
    heart: "#3B82F6",
  },
  dark: {
    accent: "#4D7AFF",
    heart: "#60A5FA",
  },
} as const;

const TESTIMONIALS = [
  {
    company: "publy",
    quote: "Relate은 스타트업에게 적합한 CRM입니다. 직관적이고 심플합니다.",
    author: "이승국",
    role: "CPO, 퍼블리 + 위하이어",
  },
  {
    company: "Manatee",
    quote: "\"최근 아웃바운드 세일즈를 많이 했는데, Relate이 잘 받쳐주었습니다. 말 그대로 수십시간을 절약했습니다.\"",
    author: "Bryan Houlton",
    role: "CEO & Co-Founder, Manatee (YC S23)",
    highlight: true,
  },
];

interface RelateKrTestimonial8Props {
  mode?: "light" | "dark";
}

export default function RelateKrTestimonial8({
  mode = "light",
}: RelateKrTestimonial8Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            Customer{" "}
            <span style={{ color: colors.heart }}>&#x1F499;</span>
          </h2>
          <p className="text-lg text-gray-600">
            Relate은 B2B SaaS 스타트업들이<br />
            가장 잘 쓸 수 있는 CRM 입니다.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl p-8 ${
                testimonial.highlight
                  ? "bg-blue-50 border border-blue-100"
                  : "bg-gray-50 border border-gray-100"
              }`}
            >
              {/* Company Logo */}
              <div className="mb-6">
                <span className="text-xl font-bold text-gray-900">{testimonial.company}</span>
              </div>

              {/* Quote */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div>
                <p className={`font-semibold ${testimonial.highlight ? "text-blue-600" : "text-blue-600"}`}>
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
