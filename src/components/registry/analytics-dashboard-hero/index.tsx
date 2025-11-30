"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  period: string;
  value: string;
  subValue: string;
  changePercent: number;
  isUp: boolean;
  color: string;
  progress: number;
}

function MetricCard({
  title,
  period,
  value,
  subValue,
  changePercent,
  isUp,
  color,
  progress,
}: MetricCardProps) {
  const radius = 60;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-[#252525] rounded-2xl p-5 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-white font-medium text-sm">{title}</h4>
          <p className="text-gray-500 text-xs">{period}</p>
        </div>
        <div className={`flex items-center text-xs ${isUp ? "text-emerald-400" : "text-red-400"}`}>
          {isUp ? <ArrowUp className="w-3 h-3 mr-0.5" /> : <ArrowDown className="w-3 h-3 mr-0.5" />}
          {changePercent}%
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <svg height={radius * 2} width={radius * 2} className="transform rotate-180">
            <circle
              stroke="#3a3a3a"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeDasharray={circumference}
              strokeDashoffset={0}
              strokeLinecap="round"
              style={{ clipPath: "inset(50% 0 0 0)" }}
            />
            <motion.circle
              stroke={color}
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              strokeLinecap="round"
              style={{ clipPath: "inset(50% 0 0 0)" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-4">
            <span className="text-white text-2xl font-semibold">{value}</span>
            <span className="text-gray-500 text-xs">{subValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BarData {
  label: string;
  values: { value: number; color: string }[];
}

function BarChart({
  data,
  legend,
}: {
  data: BarData[];
  legend: { label: string; color: string }[];
}) {
  const maxValue = Math.max(...data.flatMap((d) => d.values.map((v) => v.value)));

  return (
    <div className="bg-[#252525] rounded-2xl p-5 h-full">
      <div className="mb-2">
        <h4 className="text-white font-medium text-sm">Number of leads</h4>
        <p className="text-gray-500 text-xs">Last 30 days</p>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
            <span className="text-gray-400 text-xs">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-end justify-between h-36 gap-3">
        <div className="flex flex-col justify-between h-full text-gray-500 text-xs pr-2">
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>
        {data.map((group, groupIdx) => (
          <div key={groupIdx} className="flex-1 flex flex-col items-center">
            <div className="flex items-end gap-1 h-28">
              {group.values.map((bar, barIdx) => (
                <motion.div
                  key={barIdx}
                  className="w-4 rounded-sm"
                  style={{ backgroundColor: bar.color }}
                  initial={{ height: 0 }}
                  animate={{ height: `${(bar.value / maxValue) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.6 + barIdx * 0.1 + groupIdx * 0.2 }}
                />
              ))}
            </div>
            <span className="text-gray-500 text-xs mt-2">{group.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface LinePoint {
  x: number;
  y: number;
}

function LineChart({
  signupsData,
  visitsData,
  labels,
}: {
  signupsData: number[];
  visitsData: number[];
  labels: string[];
}) {
  const maxValue = Math.max(...signupsData, ...visitsData);
  const width = 320;
  const height = 140;
  const padding = { top: 10, right: 10, bottom: 20, left: 30 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const getPoints = (data: number[]): LinePoint[] =>
    data.map((value, index) => ({
      x: padding.left + (index / (data.length - 1)) * chartWidth,
      y: padding.top + chartHeight - (value / maxValue) * chartHeight,
    }));

  const createPath = (points: LinePoint[]): string =>
    points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  const signupsPoints = getPoints(signupsData);
  const visitsPoints = getPoints(visitsData);

  return (
    <div className="bg-[#252525] rounded-2xl p-5 h-full">
      <div className="mb-2">
        <h4 className="text-white font-medium text-sm">Signups vs Visits</h4>
        <p className="text-gray-500 text-xs">Last 30 days</p>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5 bg-red-500 rounded" />
          <span className="text-gray-400 text-xs">Signups</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5 bg-blue-500 rounded" />
          <span className="text-gray-400 text-xs">Visits</span>
        </div>
      </div>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        {[0, 100, 200, 300].map((value, i) => (
          <g key={value}>
            <text
              x={padding.left - 5}
              y={padding.top + chartHeight - (value / maxValue) * chartHeight + 4}
              className="fill-gray-500 text-[10px]"
              textAnchor="end"
            >
              {value}
            </text>
            <line
              x1={padding.left}
              y1={padding.top + chartHeight - (value / maxValue) * chartHeight}
              x2={width - padding.right}
              y2={padding.top + chartHeight - (value / maxValue) * chartHeight}
              stroke="#3a3a3a"
              strokeWidth={1}
              strokeDasharray={i === 0 ? "0" : "2,2"}
            />
          </g>
        ))}
        {labels.map((label, i) => (
          <text
            key={label}
            x={padding.left + (i / (labels.length - 1)) * chartWidth}
            y={height - 2}
            className="fill-gray-500 text-[9px]"
            textAnchor="middle"
          >
            {label}
          </text>
        ))}
        <motion.path
          d={createPath(visitsPoints)}
          fill="none"
          stroke="#3B82F6"
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.path
          d={createPath(signupsPoints)}
          fill="none"
          stroke="#EF4444"
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </svg>
    </div>
  );
}

interface AnalyticsDashboardHeroProps {
  tagline?: string;
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function AnalyticsDashboardHero({
  tagline = "ANALYTICS & DASHBOARDS",
  headline = "Understand what's\nworking, and why",
  description = "Build reports and dashboards using all of your data to understand what happened and why.",
  primaryButtonText = "Get started",
  secondaryButtonText = "Watch a demo",
  onPrimaryClick,
  onSecondaryClick,
}: AnalyticsDashboardHeroProps) {
  const metrics: MetricCardProps[] = [
    {
      title: "New signups",
      period: "Last 30 days",
      value: "6,694",
      subValue: "12%",
      changePercent: 12,
      isUp: false,
      color: "#E8622C",
      progress: 65,
    },
    {
      title: "Trials",
      period: "Last 30 days",
      value: "3,201",
      subValue: "34%",
      changePercent: 14,
      isUp: true,
      color: "#4CAF50",
      progress: 45,
    },
    {
      title: "Customers",
      period: "Last 30 days",
      value: "252",
      subValue: "61%",
      changePercent: 9,
      isUp: true,
      color: "#3B82F6",
      progress: 75,
    },
    {
      title: "Conversion rate",
      period: "Last 30 days",
      value: "8.3%",
      subValue: "",
      changePercent: 25,
      isUp: true,
      color: "#2DD4BF",
      progress: 55,
    },
  ];

  const barData: BarData[] = [
    {
      label: "Nov 16",
      values: [
        { value: 150, color: "#496DC7" },
        { value: 200, color: "#CE964C" },
        { value: 180, color: "#7F5DBB" },
        { value: 220, color: "#4CAF50" },
      ],
    },
    {
      label: "",
      values: [
        { value: 80, color: "#496DC7" },
        { value: 100, color: "#CE964C" },
        { value: 90, color: "#7F5DBB" },
        { value: 70, color: "#4CAF50" },
      ],
    },
  ];

  const barLegend = [
    { label: "Unknown", color: "#496DC7" },
    { label: "Direct", color: "#B95843" },
    { label: "Referral", color: "#CE964C" },
    { label: "Organic", color: "#7F5DBB" },
    { label: "Paid", color: "#4CAF50" },
  ];

  const signupsData = [50, 80, 120, 90, 150, 130, 180];
  const visitsData = [100, 150, 180, 220, 200, 280, 320];
  const lineLabels = ["Oct 17", "Oct 22", "Oct 27", "Nov 01", "Nov 06", "Nov 11", "Nov 16"];

  return (
    <section className="relative min-h-screen w-full bg-[#7C7C7E] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-sm font-medium tracking-wider mb-4">{tagline}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line">
              {headline}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:pt-8"
          >
            <p className="text-gray-200 text-lg mb-6 max-w-md">{description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onPrimaryClick}
                className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                {primaryButtonText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="text-white font-medium hover:underline underline-offset-4 transition-all"
              >
                {secondaryButtonText}
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#1C1C1C] rounded-3xl p-6 shadow-2xl"
        >
          <h3 className="text-white text-xl font-semibold mb-6">Key metrics dashboard</h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <BarChart data={barData} legend={barLegend} />
            <LineChart signupsData={signupsData} visitsData={visitsData} labels={lineLabels} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
