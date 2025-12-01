"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface Employee {
  name: string;
  role: string;
  type: "FULL-TIME" | "CONTRACTOR";
  image: string;
}

interface OysterHomepageHeroProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  titleAccent?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  employees?: Employee[];
  logoSectionTitle?: string;
  logos?: { name: string; logo: React.ReactNode }[];
}

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Default logos as simple text representations
const defaultLogos = [
  { name: "ASTON MARTIN", logo: <span className="text-xs font-bold tracking-wider">ASTON MARTIN</span> },
  { name: "AUTOMATTIC", logo: <span className="text-sm font-bold tracking-wider">AUTOMATTIC</span> },
  { name: "MEWS", logo: <span className="text-lg font-black tracking-wide">MEWS</span> },
  { name: "CHILI PIPER", logo: <span className="text-sm font-bold">CHILI PIPER</span> },
  { name: "lokalise", logo: <span className="text-sm font-bold">lokalise</span> },
  { name: "badoo", logo: <span className="text-sm font-bold">badoo</span> },
  { name: "FormAssembly", logo: <span className="text-sm font-semibold">FormAssembly</span> },
  { name: "Bloom", logo: <span className="text-sm font-bold">Bloom</span> },
];

const defaultEmployees: Employee[] = [
  {
    name: "Raymond Torres",
    role: "Senior Product Designer",
    type: "FULL-TIME",
    image: "/registry/oyster-homepage-hero/employee-1.jpg",
  },
  {
    name: "Michaela Lopez",
    role: "Project Manager",
    type: "CONTRACTOR",
    image: "/registry/oyster-homepage-hero/employee-2.jpg",
  },
  {
    name: "Reyna Aquino",
    role: "Marketing Manager",
    type: "FULL-TIME",
    image: "/registry/oyster-homepage-hero/employee-3.jpg",
  },
];

// Employee Card Component
function EmployeeCard({
  employee,
  variant,
  className,
}: {
  employee: Employee;
  variant: "green" | "pink" | "lime";
  className?: string;
}) {
  const bgColors = {
    green: "bg-[#2D5A47]",
    pink: "bg-[#A12360]",
    lime: "bg-gradient-to-b from-[#59CA74] to-[#3DAA5A]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`${bgColors[variant]} rounded-2xl p-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white/20">
          <Image
            src={employee.image}
            alt={employee.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-white min-w-0">
          <h4 className="font-semibold text-sm truncate">{employee.name}</h4>
          <span className="text-[10px] uppercase tracking-wider opacity-80">
            {employee.type}
          </span>
          <p className="text-xs opacity-90 truncate">{employee.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Calculator Card Component
function CalculatorCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white rounded-2xl p-4 shadow-xl w-[220px]"
    >
      <h4 className="text-xs font-semibold text-gray-800 mb-3">
        Global compensation calculator
      </h4>
      <div className="space-y-2">
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="text-[10px] text-gray-500 block mb-1">Senior</label>
            <div className="bg-gray-100 rounded px-2 py-1 text-xs">Senior</div>
          </div>
          <div className="flex-1">
            <label className="text-[10px] text-gray-500 block mb-1">Designer</label>
            <div className="bg-gray-100 rounded px-2 py-1 text-xs">Designer</div>
          </div>
        </div>
        <div>
          <label className="text-[10px] text-gray-500 block mb-1">In the country of</label>
          <div className="bg-gray-100 rounded px-2 py-1 text-xs flex items-center gap-1">
            Canada <span className="text-red-600">+</span>
            <span className="ml-auto bg-[#59CA74] text-white text-[10px] px-2 py-0.5 rounded">Calculate</span>
          </div>
        </div>
        <div className="pt-2 border-t border-gray-100">
          <p className="text-[10px] text-gray-600">
            Gross annual salary for <span className="text-[#2D5A47] font-semibold">Senior</span>
          </p>
          <p className="text-[10px] text-gray-600">
            <span className="text-[#2D5A47] font-semibold">Product Designer</span> in <span className="text-[#2D5A47] font-semibold">Canada</span>
          </p>
          <div className="flex gap-2 mt-2">
            <div className="bg-gray-100 rounded px-2 py-1 text-xs flex items-center gap-1">
              EUR <ChevronDown className="w-3 h-3" />
            </div>
            <div className="bg-gray-100 rounded px-2 py-1 text-xs flex items-center gap-1">
              Annually <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function OysterHomepageHero({
  mode = "dark",
  badge = "FOR HR LEADERS & FOUNDERS BUILDING GLOBAL TEAMS",
  title = "All your\nglobal employment\nneeds in",
  titleAccent = "one place",
  description = "Build your global team in 180+ countries without opening local offices. Our easy-to-use global HR platform helps you hire remotely, manage payroll, and ensure compliance ethically, with real employment experts by your side.",
  ctaText = "Book a Demo",
  onCtaClick,
  employees = defaultEmployees,
  logoSectionTitle = "Empowering people-first organizations",
  logos = defaultLogos,
}: OysterHomepageHeroProps) {
  return (
    <section className="relative w-full bg-[#1D4636] overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <span className="text-white text-xl font-bold tracking-tight">Oyster</span>
          <div className="hidden md:flex items-center gap-6">
            {["Products", "Solutions", "Why Oyster", "Resources", "Pricing"].map((item) => (
              <button
                key={item}
                className="text-white/80 hover:text-white text-sm flex items-center gap-1 transition-colors"
              >
                {item}
                {item !== "Pricing" && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-white/80 hover:text-white text-sm transition-colors">
            Log In
          </button>
          <button className="text-white/80 hover:text-white text-sm transition-colors">
            Sign Up
          </button>
          <button
            onClick={onCtaClick}
            className="bg-[#1a1a1a] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#2a2a2a] transition-colors"
          >
            {ctaText}
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#8BA89A] text-xs font-medium tracking-[0.2em] uppercase block mb-6">
              {badge}
            </span>
            <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] mb-6">
              {title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
              <span className="text-[#59CA74] italic font-serif">{titleAccent}</span>
            </h1>
            <p className="text-[#A8BFB3] text-base leading-relaxed mb-8 max-w-lg">
              {description}
            </p>
            <button
              onClick={onCtaClick}
              className="bg-white text-[#1D4636] font-medium px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-sm"
            >
              {ctaText}
            </button>
          </motion.div>

          {/* Right Column - Cards */}
          <div className="relative h-[450px] hidden lg:block">
            {/* Calculator Card - top left */}
            <div className="absolute top-0 left-16">
              <CalculatorCard />
            </div>

            {/* Employee 1 - top right (green) */}
            <div className="absolute top-4 right-0 w-[200px]">
              <EmployeeCard employee={employees[0]} variant="green" />
            </div>

            {/* Employee 2 - middle (pink) */}
            <div className="absolute top-[180px] left-8 w-[200px]">
              <EmployeeCard employee={employees[1]} variant="pink" />
            </div>

            {/* Employee 3 - bottom right (lime) */}
            <div className="absolute bottom-16 right-4 w-[200px]">
              <EmployeeCard employee={employees[2]} variant="lime" />
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1D4636] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="relative z-10 border-t border-[#2D5A47] py-10">
        <div className="max-w-7xl mx-auto px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-white italic font-serif text-lg mb-8"
          >
            {logoSectionTitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70"
          >
            {logos.map((logo, index) => (
              <div key={index} className="text-white/80">
                {logo.logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
