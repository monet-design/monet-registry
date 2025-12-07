"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#7B68EE",
  },
  dark: {
    accent: "#9D8FFF",
  },
} as const;

const LOGOS = [
  {
    name: "LG Electronics",
    url: "https://cdn.brandfetch.io/idEI6u48uh/theme/dark/logo.svg",
  },
  {
    name: "Otoki",
    url: "https://cdn.brandfetch.io/idJuNmI-7f/w/320/h/320/theme/dark/icon.jpeg",
  },
  {
    name: "Eland Eats",
    url: "https://cdn.brandfetch.io/idZ4ocjrOe/w/177/h/38/theme/dark/logo.png",
  },
  {
    name: "Nongshim Mall",
    url: "https://cdn.brandfetch.io/idWtGl_Nt7/w/284/h/284/theme/dark/icon.jpeg",
  },
  {
    name: "Air Premia",
    url: "https://cdn.brandfetch.io/id62kK-Dtt/theme/dark/logo.svg",
  },
  {
    name: "Eastar Jet",
    url: "https://cdn.brandfetch.io/idw8POJI9f/theme/dark/logo.svg",
  },
  {
    name: "VT Cosmetics",
    url: "https://cdn.brandfetch.io/id9tPnH06O/theme/dark/logo.svg",
  },
  {
    name: "Coach",
    url: "https://cdn.brandfetch.io/idTpHA2idt/w/300/h/300/theme/dark/logo.png",
  },
  {
    name: "Mardi Mercredi",
    url: "https://cdn.brandfetch.io/idWoVA_h4g/theme/dark/logo.svg",
  },
  {
    name: "Verish",
    url: "https://cdn.brandfetch.io/idYKgDD_EV/theme/dark/logo.svg",
  },
  {
    name: "SPAO",
    url: "https://cdn.brandfetch.io/idPbZtL6-f/w/130/h/38/theme/dark/logo.png",
  },
  {
    name: "Toss",
    url: "https://cdn.brandfetch.io/idBkJZyHvV/theme/dark/logo.svg",
  },
  {
    name: "Lotte",
    url: "https://www.logo.wine/a/logo/Lotte_Corporation/Lotte_Corporation-Logo.wine.svg",
  },
  {
    name: "Megabox",
    url: "https://cdn.brandfetch.io/idbJAULF0A/w/400/h/400/theme/dark/icon.jpeg",
  },
  {
    name: "MyRealTrip",
    url: "https://cdn.brandfetch.io/idxrXHvbeW/theme/dark/logo.svg",
  },
  {
    name: "iMarket Korea",
    url: "https://cdn.brandfetch.io/idgvWCeL6G/w/200/h/200/theme/dark/logo.png",
  },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ChannelIoLogoCloud2Props {
  mode?: "light" | "dark";
}

export default function ChannelIoLogoCloud2({
  mode = "light",
}: ChannelIoLogoCloud2Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 text-lg">
            전 세계, 누적 채널{" "}
            <span className="font-bold text-gray-900">217,259</span> 이상
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 items-center justify-items-center"
        >
          {LOGOS.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
