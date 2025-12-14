"use client";

const COLORS = {
  light: {
    accent: "#1C1917",
    clay: "#D2886F",
    sand: "#F5F5F0",
    stone: "#E8E6E1",
  },
  dark: {
    accent: "#F5F5F0",
    clay: "#D2886F",
    sand: "#1C1917",
    stone: "#292524",
  },
} as const;

import { motion } from "motion/react";
import { useState } from "react";
import {
  LifeBuoy,
  Bot,
  Crown,
  FileSpreadsheet,
  HandCoins,
  CreditCard,
} from "lucide-react";

interface LoadfastStoreFeature3Props {
  mode?: "light" | "dark";
}

export default function LoadfastStoreFeature3({
  mode = "light",
}: LoadfastStoreFeature3Props) {
  const colors = COLORS[mode];
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: LifeBuoy,
      title: "Customer Support",
      trigger: ":angrycust",
      description:
        "Reality Check: You are not sorry, but LoadFast makes you sound like a customer service saint.",
    },
    {
      icon: Bot,
      title: "AI Content Generator",
      trigger: ".headlineboost",
      description:
        "Perfect for: Turning meh posts into viral hits. Plus, because staring at a blank screen isn't a strategy.",
    },
    {
      icon: Crown,
      title: "Please The Boss",
      trigger: ":boss",
      description:
        "Translation: You were not prioritizing it, but now you have a smart way to pretend you were.",
    },
    {
      icon: FileSpreadsheet,
      title: "Google Spreadsheet Formula",
      trigger: "=magic",
      description:
        "For: The coworker who always asks, 'Hey, what was that formula again?'",
    },
    {
      icon: HandCoins,
      title: "Unsubtle Venmo Request",
      trigger: "/payup",
      description: "Subtext: Totally a rush. Pay me.",
    },
    {
      icon: CreditCard,
      title: "Lazy Online Checkout",
      trigger: "42",
      description:
        "Use Case: Stop hunting for your wallet every time you buy something online. Just type '42' and boom—checkout in seconds.",
    },
  ];

  return (
    <section
      className="py-8 md:py-20 max-w-7xl mx-auto"
      style={{ backgroundColor: colors.sand }}
    >
      <div className="px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif font-normal text-3xl lg:text-4xl tracking-tight mb-12 md:mb-16 text-center"
          style={{ color: colors.accent }}
        >
          Powerful shortcuts that save 5+ hours every week
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Feature List */}
          <div className="w-full md:w-1/2">
            <ul className="w-full">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeIndex === index;

                return (
                  <li key={index}>
                    <button
                      onClick={() => setActiveIndex(index)}
                      className="relative flex gap-2 items-center w-full py-3 md:py-4 text-base font-medium text-left md:text-lg"
                    >
                      <span
                        className="duration-100"
                        style={{
                          color: isActive ? colors.clay : colors.accent,
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </span>
                      <span
                        className="flex-1"
                        style={{
                          color: isActive ? colors.clay : colors.accent,
                          fontWeight: isActive ? 600 : 400,
                        }}
                      >
                        <h3 className="inline">
                          {feature.title} (Trigger:{" "}
                          <span
                            className="px-2 py-1 rounded text-sm"
                            style={{
                              backgroundColor: colors.accent,
                              color: colors.sand,
                            }}
                          >
                            {feature.trigger}
                          </span>
                          )
                        </h3>
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="pb-3 md:pb-4 leading-relaxed"
                        style={{ color: `${colors.accent}B3` }}
                      >
                        {feature.description}
                      </div>
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Demo Area */}
          <div className="w-full md:w-1/2 h-[200px] md:h-[450px] md:sticky md:top-24 mt-0 relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="h-full flex items-center justify-center"
            >
              <div
                className="rounded-2xl w-full h-full flex items-center justify-center"
                style={{ backgroundColor: colors.stone }}
              >
                {/* Gmail-like interface mockup */}
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 border-b">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-xs text-gray-500 ml-2">Gmail</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs"
                        style={{ backgroundColor: colors.clay }}
                      >
                        AC
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          angrycust
                        </p>
                        <p className="text-xs text-gray-500">
                          to me
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        I understand your frustration, and I sincerely apologize
                        for the inconvenience...
                      </p>
                      <p className="text-gray-400 text-xs">
                        Typed with LoadFast in 2 seconds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
