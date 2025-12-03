import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8 text-xs text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <div className="flex size-5 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <span className="text-xs font-bold">V</span>
            </div>
            <span className="font-semibold text-foreground">{COMPANY_NAME}</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Docs
            </Link>
            <a
              href="https://discord.gg/vooster"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
            <a
              href="https://twitter.com/vooster_ai"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="size-4" />
            </a>
            <a
              href="https://github.com/vooster/vooster"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
            </a>
          </div>
        </div>
        <p className="mt-4 text-[11px]">
          © {currentYear} {COMPANY_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
