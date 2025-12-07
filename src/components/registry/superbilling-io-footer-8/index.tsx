"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    bg: "#111827",
    text: "rgba(255, 255, 255, 0.6)",
    textHighlight: "rgba(255, 255, 255, 0.8)",
    border: "rgba(255, 255, 255, 0.15)",
  },
  dark: {
    bg: "#111827",
    text: "rgba(255, 255, 255, 0.6)",
    textHighlight: "rgba(255, 255, 255, 0.8)",
    border: "rgba(255, 255, 255, 0.15)",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { ChevronUp } from "lucide-react";
import { useState } from "react";

interface SuperbillingIoFooter8Props {
  mode?: "light" | "dark";
}

export default function SuperbillingIoFooter8({
  mode = "dark",
}: SuperbillingIoFooter8Props) {
  const colors = COLORS[mode];
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <footer
      className="w-full py-8 mt-20"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      <div className="container px-4">
        <div className="flex flex-col gap-4">
          {/* Copyright */}
          <div
            className="text-base font-medium pb-4"
            style={{
              borderBottomWidth: "1px",
              borderColor: colors.border,
              color: colors.textHighlight,
            }}
          >
            Copyright 2025 SuperBilling. All Rights Reserved.
          </div>

          {/* Company Info Row 1 */}
          <div className="flex flex-col md:flex-row gap-[2px] text-sm">
            <span>어썸데브</span>
            <span
              className="hidden md:inline-block mx-1"
              style={{ color: "rgba(255, 255, 255, 0.3)" }}
            >
              |
            </span>
            <span>사업자등록번호 240-01-02321</span>
            <span
              className="hidden md:inline-block mx-1"
              style={{ color: "rgba(255, 255, 255, 0.3)" }}
            >
              |
            </span>
            <span>통신판매신고 제2025-안양동안-0301</span>
            <span
              className="hidden md:inline-block mx-1"
              style={{ color: "rgba(255, 255, 255, 0.3)" }}
            >
              |
            </span>
            <span>대표 : 최수민</span>
          </div>

          {/* Company Info Row 2 */}
          <div className="flex flex-col md:flex-row gap-[2px] text-sm">
            <span>경기도 안양시 동안구 시민대로327번길 11-41, 3442호</span>
            <span
              className="hidden md:inline-block mx-1"
              style={{ color: "rgba(255, 255, 255, 0.3)" }}
            >
              |
            </span>
            <span>이용문의 : lead@awesome.dev</span>
          </div>

          {/* Terms Toggle */}
          <div
            className="mt-4 pt-4"
            style={{ borderTopWidth: "1px", borderColor: colors.border }}
          >
            <button
              onClick={() => setTermsOpen(!termsOpen)}
              className="flex items-center gap-1 cursor-pointer"
              style={{ color: colors.textHighlight }}
            >
              <ChevronUp
                className={`h-4 w-4 transition-transform ${
                  termsOpen ? "" : "rotate-180"
                }`}
              />
              <span className="font-medium">슈퍼빌링 기본약관</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
