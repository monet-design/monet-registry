"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F26625",
    accentHover: "#ee5d19",
    beige: "#F5F1EB",
  },
  dark: {
    accent: "#F26625",
    accentHover: "#ee5d19",
    beige: "#2D2A26",
  },
} as const;

/**
 * Footer 링크
 */
const FOOTER_LINKS = {
  programs: [
    { label: "YC Program", href: "#" },
    { label: "Startup School", href: "#" },
    { label: "Work at a Startup", href: "#" },
    { label: "Co-Founder Matching", href: "#" },
  ],
  company: [
    { label: "YC Blog", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Press", href: "#" },
    { label: "People", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Notice at Collection", href: "#" },
    { label: "Security", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
  resources: [
    { label: "Startup Directory", href: "#" },
    { label: "Startup Library", href: "#" },
    { label: "Investors", href: "#" },
    { label: "SAFE", href: "#" },
    { label: "Hacker News", href: "#" },
    { label: "Launch YC", href: "#" },
    { label: "YC Deals", href: "#" },
  ],
};

/**
 * 소셜 아이콘
 */
const SOCIAL_LINKS = [
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface YcombinatorComFooter3Props {
  mode?: "light" | "dark";
}

export default function YcombinatorComFooter3({
  mode = "light",
}: YcombinatorComFooter3Props) {
  const colors = COLORS[mode];

  return (
    <footer
      aria-labelledby="footer-heading"
      style={{ backgroundColor: colors.beige }}
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0">
          {/* Logo */}
          <div className="md:pr-16">
            <a href="#" className="block h-[45px] w-[45px] sm:h-[60px] sm:w-[60px]">
              <span className="sr-only">Y Combinator</span>
              <div
                className="flex h-full w-full items-center justify-center rounded text-2xl font-bold text-white"
                style={{ backgroundColor: colors.accent }}
              >
                Y
              </div>
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-8 sm:flex-row sm:space-x-16 sm:space-y-0 md:justify-items-center">
            <div>
              <h3 className="font-semibold tracking-wider text-gray-900">Programs</h3>
              <ul className="mt-2 space-y-1">
                {FOOTER_LINKS.programs.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm font-light text-gray-700 hover:text-gray-900">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold tracking-wider text-gray-900">Company</h3>
              <ul className="mt-2 space-y-1">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm font-light text-gray-700 hover:text-gray-900">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold tracking-wider text-gray-900">Resources</h3>
              <ul className="mt-2 space-y-1">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm font-light text-gray-700 hover:text-gray-900">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex-1 space-x-2 sm:text-right md:mt-0">
            <h3 className="inline-block text-lg md:hidden lg:inline-block">
              Make something people want.
            </h3>
            <a
              href="#"
              className="ml-3 inline-block rounded px-4 py-2 font-semibold text-white transition-colors"
              style={{ backgroundColor: colors.accent }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
            >
              Apply
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-600 hover:text-gray-900"
              >
                <span className="sr-only">{social.name}</span>
                {social.icon}
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-600 md:order-1 md:mt-0">
            &copy; 2025 Y Combinator
          </p>
        </div>
      </div>
    </footer>
  );
}
