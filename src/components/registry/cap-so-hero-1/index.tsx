"use client";

import { motion } from "motion/react";
import Image from "next/image";

const CONTENT = {
  headline: "Beautiful, shareable screen recordings",
  subheadline:
    "Cap is the open source alternative to Loom. Lightweight, powerful, and cross-platform. Record and share securely in seconds with custom S3 bucket support. Connect your own domain.",
  cta: {
    primary: { label: "Download for free", href: "/download/apple-silicon" },
    secondary: { label: "Upgrade to Cap Pro", href: "/pricing" },
  },
  note: "No credit card required. Get started for free.",
  trust: {
    text: "Trusted by",
    highlight: "20,000+",
    suffix: "teams, builders and creators",
  },
  logos: [
    { name: "Microsoft", src: "/logos/microsoft.svg", width: 98, height: 24 },
    { name: "Amazon", src: "/logos/amazon.svg", width: 100, height: 30 },
    { name: "Berkeley", src: "/logos/berkeley.svg", width: 100, height: 30 },
    { name: "Figma", src: "/logos/figma.svg", width: 30, height: 10 },
    { name: "Coinbase", src: "/logos/coinbase.svg", width: 139, height: 32 },
    { name: "IBM", src: "/logos/ibm.svg", width: 80, height: 20 },
    { name: "Dropbox", src: "/logos/dropbox.svg", width: 115, height: 50 },
    { name: "Tesla", src: "/logos/tesla.svg", width: 100, height: 30 },
  ],
  appImage: {
    src: "/illustrations/app.png",
    alt: "Cap App Screenshot",
  },
} as const;

interface CapSoHero1Props {
  mode?: "light" | "dark";
}

export default function CapSoHero1({ mode = "light" }: CapSoHero1Props) {
  return (
    <section className="relative w-full min-h-screen bg-[#F2F2F2] pt-[110px] pb-10 sm:pb-[150px] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-5">
        <div className="flex flex-col xl:flex-row relative z-10 w-full mb-[200px]">
          {/* Left Content */}
          <div className="w-full max-w-2xl xl:max-w-[530px] mx-auto xl:ml-[100px] 2xl:ml-[150px]">
            <div className="flex flex-col text-left w-full max-w-[650px]">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[2.25rem] font-medium leading-[2.5rem] md:text-[3.75rem] md:leading-[4rem] text-black mb-4"
              >
                {CONTENT.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mx-auto mb-8 max-w-3xl text-lg text-zinc-500"
              >
                {CONTENT.subheadline}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 items-center mb-5"
            >
              <a
                href={CONTENT.cta.primary.href}
                className="transition-colors duration-200 rounded-full px-5 bg-gray-900 hover:bg-gray-800 border border-gray-900 text-white text-md h-12 flex justify-center items-center font-medium"
              >
                <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                {CONTENT.cta.primary.label}
              </a>
              <a
                href={CONTENT.cta.secondary.href}
                className="transition-colors duration-200 rounded-full font-medium px-5 bg-blue-600 text-white border border-blue-800 shadow-[0_1.50px_0_0_rgba(255,255,255,0.20)_inset] hover:bg-blue-700 text-md h-12 flex items-center"
              >
                {CONTENT.cta.secondary.label}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-gray-500"
            >
              {CONTENT.note}
            </motion.p>

            {/* Platform Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 mb-10"
            >
              <div className="flex relative z-10 gap-3 mt-5">
                <button className="focus:outline-none" aria-label="Download for macOS">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-gray-900 opacity-90"
                    viewBox="0 0 384 512"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9m-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3" />
                  </svg>
                </button>
                <a href="/download" className="focus:outline-none" aria-label="Download for Windows">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-gray-900 opacity-90"
                    viewBox="0 0 256 256"
                  >
                    <path d="M112 144v51.64a8 8 0 0 1-8 8 8.5 8.5 0 0 1-1.43-.13l-64-11.64A8 8 0 0 1 32 184v-40a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8m-2.87-89.78a8 8 0 0 0-6.56-1.73l-64 11.64A8 8 0 0 0 32 72v40a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8V60.36a8 8 0 0 0-2.87-6.14M216 136h-80a8 8 0 0 0-8 8v57.45a8 8 0 0 0 6.57 7.88l80 14.54a7.6 7.6 0 0 0 1.43.13 8 8 0 0 0 8-8v-72a8 8 0 0 0-8-8m5.13-102.14a8 8 0 0 0-6.56-1.73l-80 14.55a8 8 0 0 0-6.57 7.87V112a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8V40a8 8 0 0 0-2.87-6.14" />
                  </svg>
                </a>
              </div>
              <a
                className="mt-2 text-sm underline text-gray-500 hover:text-gray-900 inline-block"
                href="/download"
              >
                More download options
              </a>
            </motion.div>

            {/* Logo Cloud */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-14"
            >
              <p className="mb-4 text-sm italic text-gray-500">
                {CONTENT.trust.text} <strong>{CONTENT.trust.highlight}</strong>{" "}
                {CONTENT.trust.suffix}
              </p>
              <div className="overflow-hidden relative w-full">
                <div className="absolute top-0 left-0 z-10 w-12 h-full bg-gradient-to-r from-[#F2F2F2] to-transparent" />
                <div className="flex animate-marquee">
                  {[...CONTENT.logos, ...CONTENT.logos].map((logo, index) => (
                    <div
                      key={`${logo.name}-${index}`}
                      className="flex justify-center items-center mx-5 shrink-0"
                    >
                      <Image
                        alt={`${logo.name} Logo`}
                        src={logo.src}
                        width={logo.width}
                        height={logo.height}
                        className="opacity-50"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 right-0 z-10 w-12 h-full bg-gradient-to-l from-[#F2F2F2] to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Right Content - App Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="xl:absolute drop-shadow-2xl -top-[22%] lg:-right-[400px] 2xl:-right-[300px] w-full xl:max-w-[1000px] 2xl:max-w-[1200px] mt-10 xl:mt-0"
          >
            {/* Play Button */}
            <div className="size-[100px] md:size-[150px] inset-x-0 mx-auto top-[35vw] xs:top-[180px] sm:top-[35vw] xl:top-[350px] 2xl:top-[400px] xl:left-[-120px] relative cursor-pointer z-10 shadow-[0px_60px_40px_3px_rgba(0,0,0,0.4)] flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition-colors">
              <svg
                className="text-white size-8 md:size-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
              </svg>
            </div>
            <Image
              alt={CONTENT.appImage.alt}
              src={CONTENT.appImage.src}
              width={1000}
              height={1000}
              className="object-cover relative inset-0 rounded-xl opacity-70 size-full"
              priority
            />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
