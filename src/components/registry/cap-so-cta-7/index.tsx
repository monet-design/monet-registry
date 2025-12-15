"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "Ready to upgrade how you communicate?",
  cta: {
    primary: { label: "Download for free", href: "/pricing" },
    secondary: { label: "Upgrade to Cap Pro", href: "/pricing" },
  },
  switchLink: { label: "Switch from Loom", href: "/loom-alternative" },
} as const;

interface CapSoCta7Props {
  mode?: "light" | "dark";
}

export default function CapSoCta7({ mode = "light" }: CapSoCta7Props) {
  return (
    <section className="w-full py-[150px] md:py-[200px] lg:py-[250px] bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1000px] w-[calc(100%-20px)] bg-white min-h-[300px] mx-auto border border-gray-200 rounded-[20px] overflow-hidden relative flex flex-col justify-center p-8"
        style={{
          backgroundImage: "url('/illustrations/ctabg.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex relative z-10 flex-col justify-center items-center mx-auto h-full">
          {/* Headline */}
          <div className="text-center max-w-[800px] mx-auto mb-8">
            <h2 className="mb-3 text-3xl md:text-4xl font-medium text-gray-900">
              {CONTENT.headline}
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center items-center mb-8 space-y-4 w-full sm:flex-row sm:space-y-0 sm:space-x-2">
            <a
              href={CONTENT.cta.primary.href}
              className="flex items-center justify-center transition-colors duration-200 rounded-full px-5 bg-gray-900 hover:bg-gray-800 border border-gray-900 text-white text-md h-12 font-medium w-fit"
            >
              <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              {CONTENT.cta.primary.label}
            </a>
            <a
              href={CONTENT.cta.secondary.href}
              className="transition-colors duration-200 rounded-full font-medium px-5 bg-blue-600 text-white border border-blue-800 shadow-[0_1.50px_0_0_rgba(255,255,255,0.20)_inset] hover:bg-blue-700 text-md h-12 flex items-center justify-center w-full max-w-[220px]"
            >
              {CONTENT.cta.secondary.label}
            </a>
          </div>

          {/* Switch Link */}
          <div className="text-gray-500">
            <p>
              or,{" "}
              <a
                href={CONTENT.switchLink.href}
                className="font-semibold underline hover:text-gray-900"
              >
                {CONTENT.switchLink.label}
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
