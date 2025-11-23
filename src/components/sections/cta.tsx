"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  text: string;
}

interface CTAProps {
  title?: string;
  description?: string;
  button?: CTAButtonProps | false;
  note?: string | false;
  className?: string;
}

export default function CTA({
  title = "Create fully editable designs with AI in seconds",
  description = "AI that gives you editable, ready-to-use creatives — not just flat pictures. Experience the power of real design freedom.",
  button = {
    href: "https://app.designlumo.com/?utm_source=landing_page",
    text: "Try It Free",
  },
  note = "Try It Free • No Credit Card Required",
  className,
}: CTAProps) {
  return (
    <div
      className={cn(
        "max-w-6xl py-8 md:py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#954bea] to-[#000000] rounded-3xl p-8 md:p-10 text-white mb-16",
        className
      )}
    >
      <h1 className="mb-6 max-w-3xl text-3xl font-semibold md:text-4xl lg:text-5xl md:leading-[60px]">
        {title}
      </h1>
      <p className="mb-8 max-w-2xl px-4 text-base text-white/90 md:text-lg">
        {description}
      </p>
      <div className="flex flex-col items-center gap-3 md:gap-4">
        {button !== false && (
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={button.href}
              className="rounded-2xl bg-gradient-to-b from-purple-500 to-purple-700 px-6 py-3 text-center text-sm font-medium text-white shadow-md hover:from-purple-600 hover:to-purple-800 md:px-8 md:py-3.5 md:text-base"
            >
              {button.text}
            </a>
          </div>
        )}
        {note !== false && (
          <div className="px-4 text-center text-xs text-white/80 md:px-0 md:text-sm">
            {note}
          </div>
        )}
      </div>
    </div>
  );
}
