"use client";

import { useState, type ReactNode } from "react";
import {
  CircleCheck,
  SwatchBook,
  Sparkles,
  Crown,
  ShieldCheck,
  SquareDashedMousePointer,
  Gift,
  CircleHelp,
  RotateCcw,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Section } from "../ui/section";

interface PricingFeature {
  text: string;
  icon: ReactNode;
}

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
  badge?: string;
  ctaText?: string;
}

interface PricingProps {
  title?: string;
  description?: string;
  tiers?: PricingTier[];
  className?: string;
  monthlyMultiplier?: number;
}

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 20 7 20 17 12 22 4 17 4 7 12 2" />
      <polyline points="12 2 12 22" />
      <polyline points="20 7 12 12 4 7" />
      <polyline points="20 17 12 12 4 17" />
    </svg>
  );
}

function PricingCard({
  tier,
  isYearly,
  multiplier,
}: {
  tier: PricingTier;
  isYearly: boolean;
  multiplier: number;
}) {
  const displayPrice = isYearly ? Math.round(tier.price * multiplier * 12) : tier.price;

  return (
    <div
      className={cn(
        "relative rounded-2xl border transition-all duration-300",
        tier.highlighted
          ? "border-primary bg-gradient-to-br from-primary/5 to-primary/10 md:scale-105 shadow-lg"
          : "border-border bg-background hover:border-primary/30"
      )}
    >
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
            {tier.badge}
          </div>
        </div>
      )}

      <div className="p-8 md:p-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">{tier.name}</h3>
        <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl md:text-5xl font-bold">${displayPrice}</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          {isYearly && (
            <p className="text-sm text-green-600 mt-2">
              Save 20% with yearly billing
            </p>
          )}
        </div>

        <button
          className={cn(
            "w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 mb-8",
            tier.highlighted
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {tier.ctaText || "Get Started"}
        </button>

        <div className="space-y-4">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 shrink-0 text-primary">
                {feature.icon}
              </div>
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Pricing({
  title = "Simple, transparent pricing",
  description = "Choose the perfect plan for your needs",
  tiers = [
    {
      name: "Starter",
      price: 7,
      description: "Perfect for getting started",
      features: [
        { text: "Up to 5 projects", icon: <CircleCheck className="size-5" /> },
        { text: "Basic templates", icon: <SwatchBook className="size-5" /> },
        { text: "Community support", icon: <CircleHelp className="size-5" /> },
      ],
      ctaText: "Start Free",
    },
    {
      name: "Pro",
      price: 14.99,
      description: "For growing teams",
      features: [
        { text: "Unlimited projects", icon: <CircleCheck className="size-5" /> },
        { text: "Premium templates", icon: <Sparkles className="size-5" /> },
        { text: "Advanced analytics", icon: <SwatchBook className="size-5" /> },
        { text: "Priority support", icon: <Crown className="size-5" /> },
        { text: "Team collaboration", icon: <LayersIcon className="size-5" /> },
        { text: "Custom integrations", icon: <SquareDashedMousePointer className="size-5" /> },
      ],
      highlighted: true,
      badge: "Best Value",
      ctaText: "Start 7-day Trial",
    },
    {
      name: "Growth",
      price: 29.99,
      description: "For scale-ups",
      features: [
        { text: "Unlimited everything", icon: <CircleCheck className="size-5" /> },
        { text: "White-label solution", icon: <SwatchBook className="size-5" /> },
        { text: "Custom domain", icon: <UploadIcon className="size-5" /> },
        { text: "Advanced security", icon: <ShieldCheck className="size-5" /> },
        { text: "Dedicated support", icon: <Gift className="size-5" /> },
        { text: "API access", icon: <RotateCcw className="size-5" /> },
      ],
      ctaText: "Get Started",
    },
  ],
  className,
  monthlyMultiplier = 0.9,
}: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Section
      id="pricing-section"
      className={cn("bg-background py-16 px-4 md:py-24", className)}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {description}
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                !isYearly
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={cn(
                "relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300",
                isYearly ? "bg-primary" : "bg-secondary"
              )}
            >
              <span
                className={cn(
                  "inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300",
                  isYearly ? "translate-x-7" : "translate-x-1"
                )}
              />
            </button>
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                isYearly
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              Yearly
              <span className="ml-2 text-xs text-green-600 font-semibold">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <PricingCard
              key={index}
              tier={tier}
              isYearly={isYearly}
              multiplier={monthlyMultiplier}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <RotateCcw className="size-5 text-primary" />
            <span>30-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CircleCheck className="size-5 text-primary" />
            <span>Cancel anytime, no questions asked</span>
          </div>
          <a
            href="#"
            className="text-primary hover:underline"
          >
            See our terms
          </a>
        </div>
      </div>
    </Section>
  );
}
