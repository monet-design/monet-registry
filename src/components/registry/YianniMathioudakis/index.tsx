"use client";

import { motion } from "motion/react";
import "./font.css";

// Types
interface Link {
  text: string;
  href?: string;
}

interface Paragraph {
  text: string;
  links?: Link[];
}

interface YianniMathioudakisProps {
  label?: string;
  paragraphs?: Paragraph[];
  backgroundColor?: string;
  textColor?: string;
  labelColor?: string;
  linkColor?: string;
}

// Default paragraphs matching the image
const defaultParagraphs: Paragraph[] = [
  {
    text: "Yianni Mathioudakis studied graphic design at the Maryland Institute College of Art, from which he graduated in 2006. Following his education, he honed his craft and expertise over the course of 15 years at Fastspot, where he immersed himself in the world of digital design.",
    links: [
      { text: "Maryland Institute College of Art", href: "#" },
    ],
  },
  {
    text: "In 2023, driven by a shared vision for innovative design and a passion for creating extraordinary experiences, Yianni co-founded DEEQ alongside his creative partner, Monica Sanchez. Together, they set out to redefine digital design, infusing their projects with curiosity and exploration.",
    links: [
      { text: "DEEQ", href: "#" },
      { text: "Monica Sanchez", href: "#" },
    ],
  },
  {
    text: "As a multi-disciplinary designer, Yianni brings a wealth of skills and expertise to his work. From his graphic design principles to his proficiency in motion graphics, photography, videography, and 3D modeling, Yianni possesses a versatile skill set that allows him to craft stunning and unforgettable experiences for his clients and audiences alike.",
    links: [],
  },
];

// Helper function to render paragraph with links
function renderParagraphWithLinks(
  paragraph: Paragraph,
  paragraphIndex: number,
  linkColor: string
): React.ReactNode {
  const { text, links = [] } = paragraph;

  if (links.length === 0) {
    return text;
  }

  const result: React.ReactNode[] = [];
  let remainingText = text;
  let keyIndex = 0;

  // Sort links by their position in the text to process them in order
  const sortedLinks = [...links].sort((a, b) => {
    const posA = text.indexOf(a.text);
    const posB = text.indexOf(b.text);
    return posA - posB;
  });

  for (const link of sortedLinks) {
    const index = remainingText.indexOf(link.text);
    if (index !== -1) {
      // Add text before the link
      if (index > 0) {
        result.push(
          <span key={`text-${paragraphIndex}-${keyIndex}`}>
            {remainingText.substring(0, index)}
          </span>
        );
      }
      // Add the linked text
      result.push(
        <a
          key={`link-${paragraphIndex}-${keyIndex}`}
          href={link.href || "#"}
          className="underline decoration-1 underline-offset-2 transition-opacity hover:opacity-70"
          style={{ color: linkColor }}
        >
          {link.text}
        </a>
      );
      remainingText = remainingText.substring(index + link.text.length);
      keyIndex++;
    }
  }

  // Add any remaining text
  if (remainingText) {
    result.push(
      <span key={`text-${paragraphIndex}-final`}>{remainingText}</span>
    );
  }

  return result;
}

// Main Component
export default function YianniMathioudakis({
  label = "BIO",
  paragraphs = defaultParagraphs,
  backgroundColor = "#FEFDFB",
  textColor = "#3D3D3D",
  labelColor = "#9CA3AF",
  linkColor = "#3D3D3D",
}: YianniMathioudakisProps) {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      style={{ backgroundColor }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 block text-sm tracking-widest sm:mb-10"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: labelColor,
            fontWeight: 400,
          }}
        >
          {label}
        </motion.span>

        {/* Paragraphs */}
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="text-base leading-relaxed sm:text-lg sm:leading-relaxed"
              style={{
                fontFamily: "'Instrument Serif', serif",
                color: textColor,
                fontWeight: 400,
              }}
            >
              {renderParagraphWithLinks(paragraph, index, linkColor)}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
