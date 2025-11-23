export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Links */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>© {currentYear} DesignLumo. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://app.designlumo.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://app.designlumo.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://app.designlumo.com/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Cookie Policy
            </a>
          </div>

          {/* Right side - Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <svg
              className="w-4 h-4 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>in the world</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
