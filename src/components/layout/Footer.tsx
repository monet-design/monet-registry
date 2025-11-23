import Link from 'next/link';
import { SERVICE_NAME, COMPANY_NAME } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="text-2xl font-bold">
            {SERVICE_NAME}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} {COMPANY_NAME}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
