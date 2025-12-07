"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#A855F7",
    accentHover: "#9333EA",
  },
  dark: {
    accent: "#C084FC",
    accentHover: "#A855F7",
  },
} as const;

/**
 * Footer 링크 데이터
 */
const FOOTER_LINKS = {
  product: {
    title: "Product",
    links: [
      { label: "Components", href: "/docs/reference/components/overview" },
      { label: "Pricing", href: "/pricing" },
      { label: "Dashboard", href: "https://dashboard.clerk.com" },
      { label: "Feature requests", href: "https://feedback.clerk.com/roadmap" },
      { label: "React authentication", href: "/react-authentication" },
    ],
  },
  developers: {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Discord server", href: "/discord" },
      { label: "Support", href: "/contact/support" },
      { label: "Glossary", href: "/glossary" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Brand assets", href: "/brand-assets" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Terms and Conditions", href: "/legal/terms" },
      { label: "Terms of Engagement", href: "/legal/terms-of-engagement" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Data Processing Agreement", href: "/legal/dpa" },
      { label: "Do Not Sell/Share My Info", href: "mailto:privacy@clerk.com" },
    ],
  },
} as const;

const SOCIAL_LINKS = [
  {
    label: "X",
    href: "https://twitter.com/clerkdev",
    icon: "x",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/clerkinc",
    icon: "linkedin",
  },
  {
    label: "Discord",
    href: "/discord",
    icon: "discord",
  },
  {
    label: "GitHub",
    href: "https://github.com/clerk",
    icon: "github",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@clerkdev",
    icon: "youtube",
  },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface ClerkComFooter2Props {
  mode?: "light" | "dark";
}

// Clerk Logo
function ClerkLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 62 18" fill="none" aria-hidden="true" className={className}>
      <ellipse cx="8.99999" cy="9" rx="2.81249" ry="2.8125" className="fill-current" />
      <path
        d="M14.0674 15.6591C14.3067 15.8984 14.2827 16.2945 14.0015 16.4829C12.571 17.4411 10.8504 17.9999 8.9993 17.9999C7.14818 17.9999 5.42758 17.4411 3.99704 16.4829C3.71589 16.2945 3.69186 15.8984 3.93115 15.6591L5.98648 13.6037C6.17225 13.418 6.46042 13.3886 6.69424 13.5084C7.3856 13.8626 8.16911 14.0624 8.9993 14.0624C9.82948 14.0624 10.613 13.8626 11.3044 13.5084C11.5382 13.3886 11.8263 13.418 12.0121 13.6037L14.0674 15.6591Z"
        className="fill-current"
      />
      <path
        d="M14.0022 1.51706C14.2834 1.70539 14.3074 2.10155 14.0681 2.34084L12.0128 4.39619C11.827 4.58195 11.5388 4.61129 11.305 4.49151C10.6136 4.13733 9.83014 3.9375 8.99996 3.9375C6.20403 3.9375 3.93748 6.20406 3.93748 9C3.93748 9.83018 4.13731 10.6137 4.49149 11.3051C4.61127 11.5389 4.58193 11.827 4.39617 12.0128L2.34083 14.0682C2.10154 14.3074 1.70538 14.2834 1.51705 14.0023C0.558857 12.5717 0 10.8511 0 9C0 4.02944 4.02942 0 8.99996 0C10.8511 0 12.5717 0.55886 14.0022 1.51706Z"
        fillOpacity="0.5"
        className="fill-current"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.3906 1.82813C29.3906 1.75046 29.4535 1.6875 29.5312 1.6875H31.6406C31.7182 1.6875 31.7812 1.75046 31.7812 1.82813V16.1719C31.7812 16.2495 31.7182 16.3125 31.6406 16.3125H29.5312C29.4535 16.3125 29.3906 16.2495 29.3906 16.1719V1.82813ZM26.4137 13.2701C26.3577 13.2217 26.2739 13.2253 26.2201 13.2761C25.8913 13.5864 25.5063 13.8347 25.0843 14.0078C24.6215 14.1979 24.1239 14.2936 23.622 14.2891C23.1982 14.3016 22.7762 14.2291 22.3821 14.076C21.988 13.9229 21.63 13.6925 21.3303 13.3989C20.7859 12.8431 20.4726 12.0496 20.4726 11.1037C20.4726 9.2101 21.7324 7.91491 23.622 7.91491C24.1289 7.90793 24.631 8.01058 25.0926 8.21543C25.5111 8.40122 25.8869 8.66683 26.1982 8.99629C26.2514 9.05264 26.3398 9.05916 26.3985 9.00842L27.8225 7.7762C27.8807 7.72586 27.8877 7.63797 27.8364 7.58065C26.7653 6.38368 25.0872 5.76563 23.4914 5.76563C20.2783 5.76563 18 7.93299 18 11.1217C18 12.6988 18.5662 14.0268 19.5211 14.9645C20.476 15.9023 21.8363 16.4531 23.4059 16.4531C25.3741 16.4531 26.9582 15.6984 27.8869 14.7302C27.9414 14.6734 27.9354 14.583 27.8758 14.5315L26.4137 13.2701ZM43.401 11.8056C43.3931 11.876 43.3332 11.9287 43.2623 11.9287H35.8731C35.7833 11.9287 35.7164 12.012 35.7398 12.0986C36.1074 13.4614 37.2035 14.286 38.6995 14.286C39.2038 14.2966 39.7037 14.1928 40.1605 13.9827C40.5862 13.787 40.9639 13.5038 41.2682 13.1528C41.305 13.1104 41.3691 13.1041 41.4122 13.1401L42.8978 14.4335C42.9547 14.483 42.9626 14.5687 42.9138 14.6262C42.0169 15.6843 40.5637 16.4531 38.5695 16.4531C35.5016 16.4531 33.1874 14.3286 33.1874 11.1009C33.1874 9.51732 33.7326 8.18944 34.6412 7.25179C35.1209 6.76963 35.6959 6.38911 36.3307 6.13368C36.9656 5.87826 37.6469 5.75332 38.3327 5.76658C41.4422 5.76658 43.453 7.95343 43.453 10.973C43.4491 11.2512 43.4317 11.5291 43.401 11.8056ZM35.7842 9.84589C35.7581 9.93268 35.8251 10.0172 35.9158 10.0172H40.829C40.9198 10.0172 40.9869 9.93217 40.9617 9.84491C40.6268 8.68592 39.7772 7.91244 38.4577 7.91244C38.0696 7.90013 37.6834 7.97039 37.3254 8.11832C36.9675 8.26633 36.6462 8.48856 36.3836 8.76977C36.1075 9.08283 35.9034 9.44988 35.7842 9.84589ZM50.7639 5.76717C50.8422 5.76632 50.9061 5.82952 50.9061 5.90779V8.26951C50.9061 8.35135 50.8365 8.41586 50.7548 8.40981C50.5269 8.39291 50.3114 8.37856 50.1701 8.37856C48.3301 8.37856 47.2499 9.67359 47.2499 11.3735V16.1719C47.2499 16.2495 47.1869 16.3125 47.1092 16.3125H44.9999C44.9222 16.3125 44.8592 16.2495 44.8592 16.1719V6.05379C44.8592 5.97613 44.9222 5.91317 44.9999 5.91317H47.1092C47.1869 5.91317 47.2499 5.97613 47.2499 6.05379V7.47394C47.2499 7.48196 47.2563 7.48845 47.2644 7.48845C47.2689 7.48845 47.2733 7.48627 47.276 7.48261C48.1006 6.38146 49.3176 5.76892 50.6033 5.76892L50.7639 5.76717ZM56.4778 11.9525C56.4864 11.9432 56.4985 11.938 56.5112 11.938C56.5269 11.938 56.5415 11.9461 56.5498 11.9595L59.217 16.2462C59.2426 16.2874 59.2878 16.3125 59.3364 16.3125L61.7342 16.3125C61.8445 16.3125 61.9118 16.1915 61.8538 16.0978L58.1947 10.1939C58.1616 10.1406 58.1679 10.0719 58.21 10.0254L61.7355 6.13573C61.8174 6.04534 61.7533 5.90066 61.6313 5.90066H59.1298C59.0904 5.90066 59.0528 5.91719 59.0261 5.94622L54.9472 10.3925C54.8605 10.487 54.7029 10.4257 54.7029 10.2974V1.82812C54.7029 1.75046 54.64 1.6875 54.5623 1.6875H52.453C52.3753 1.6875 52.3123 1.75046 52.3123 1.82812V16.1719C52.3123 16.2495 52.3753 16.3125 52.453 16.3125L54.5623 16.3125C54.64 16.3125 54.7029 16.2495 54.7029 16.1719V13.9147C54.7029 13.8792 54.7164 13.8449 54.7406 13.8189L56.4778 11.9525Z"
        className="fill-current"
      />
    </svg>
  );
}

// Social Icons
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.601 0Zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837Z"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M14.82 0H1.18A1.169 1.169 0 0 0 0 1.154v13.694A1.168 1.168 0 0 0 1.18 16h13.64A1.17 1.17 0 0 0 16 14.845V1.15A1.171 1.171 0 0 0 14.82 0ZM4.744 13.64H2.369V5.996h2.375v7.642Zm-1.18-8.684a1.377 1.377 0 1 1 .52-.106 1.377 1.377 0 0 1-.527.103l.006.003Zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197Z"
      />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z"
      />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.582 0 0 3.672 0 8.203c0 3.623 2.292 6.699 5.471 7.783.4.075.546-.178.546-.396 0-.194-.007-.71-.01-1.394-2.226.495-2.696-1.1-2.696-1.1-.363-.948-.888-1.2-.888-1.2-.726-.508.055-.499.055-.499.803.058 1.225.845 1.225.845.714 1.253 1.873.891 2.328.682.074-.53.28-.891.509-1.096-1.776-.207-3.644-.911-3.644-4.054 0-.895.312-1.628.823-2.201-.082-.208-.357-1.042.079-2.17 0 0 .672-.222 2.2.84A7.485 7.485 0 0 1 8 3.967c.68.003 1.364.094 2.003.276 1.527-1.062 2.198-.841 2.198-.841.437 1.129.161 1.963.08 2.17.512.574.822 1.307.822 2.202 0 3.15-1.871 3.844-3.653 4.048.288.253.543.753.543 1.519 0 1.095-.01 1.98-.01 2.25 0 .219.144.474.55.394a8.031 8.031 0 0 0 3.96-2.989A8.337 8.337 0 0 0 16 8.203C16 3.672 12.418 0 8 0Z"
      />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 2.335c.69.184 1.231.725 1.415 1.414C16 4.996 16 7.6 16 7.6s0 2.604-.335 3.851a2.003 2.003 0 0 1-1.414 1.415c-1.247.335-6.251.335-6.251.335s-5.004 0-6.25-.335a2.004 2.004 0 0 1-1.415-1.415C0 10.204 0 7.601 0 7.601s0-2.605.335-3.852a2.004 2.004 0 0 1 1.414-1.414C2.996 2 8 2 8 2s5.004 0 6.25.335ZM10.556 7.6 6.398 10V5.2l4.157 2.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SocialIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case "x":
      return <XIcon className={className} />;
    case "linkedin":
      return <LinkedInIcon className={className} />;
    case "discord":
      return <DiscordIcon className={className} />;
    case "github":
      return <GitHubIcon className={className} />;
    case "youtube":
      return <YouTubeIcon className={className} />;
    default:
      return null;
  }
}

export default function ClerkComFooter2({ mode = "light" }: ClerkComFooter2Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white pt-16 md:pt-24" id="clerk-footer">
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4 xl:grid-cols-3">
          {/* Logo */}
          <div className="flex items-start pt-4">
            <div className="relative p-0.5">
              {/* Decorative dotted borders */}
              <div
                className="absolute opacity-30 inset-x-0 h-px -top-px"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 1'%3E%3Crect width='1' height='1' fill='%23212126'/%3E%3C/svg%3E")`,
                  maskImage:
                    "linear-gradient(to right, transparent, white 1.25rem, white calc(100% - 1.25rem), transparent)",
                  marginLeft: "-1.25rem",
                  marginRight: "-1.25rem",
                }}
              />
              <div
                className="absolute opacity-30 inset-y-0 w-px -right-px"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 4'%3E%3Crect width='1' height='1' fill='%23212126'/%3E%3C/svg%3E")`,
                  maskImage:
                    "linear-gradient(to bottom, transparent, white 1.25rem, white calc(100% - 1.25rem), transparent)",
                  marginTop: "-1.25rem",
                  marginBottom: "-1.25rem",
                }}
              />
              <div
                className="absolute opacity-30 inset-x-0 h-px -bottom-px"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 1'%3E%3Crect width='1' height='1' fill='%23212126'/%3E%3C/svg%3E")`,
                  maskImage:
                    "linear-gradient(to right, transparent, white 1.25rem, white calc(100% - 1.25rem), transparent)",
                  marginLeft: "-1.25rem",
                  marginRight: "-1.25rem",
                }}
              />
              <div
                className="absolute opacity-30 inset-y-0 w-px -left-px"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 4'%3E%3Crect width='1' height='1' fill='%23212126'/%3E%3C/svg%3E")`,
                  maskImage:
                    "linear-gradient(to bottom, transparent, white 1.25rem, white calc(100% - 1.25rem), transparent)",
                  marginTop: "-1.25rem",
                  marginBottom: "-1.25rem",
                }}
              />
              <ClerkLogo className="h-[1.125rem] text-gray-950" />
            </div>
          </div>

          {/* Links Grid */}
          <ul
            role="list"
            className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-8 text-sm/4 sm:grid-cols-4 lg:col-span-3 xl:col-span-2"
          >
            {Object.entries(FOOTER_LINKS).map(([key, section]) => (
              <li key={key}>
                <div className="font-normal text-gray-400">{section.title}</div>
                <ul role="list" className="mt-5 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        className="font-medium transition-colors text-gray-950 hover:text-gray-700"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="relative isolate mt-12 flex items-center border-t border-gray-600/10 pb-20 pt-6 text-sm">
          {/* Background gradient effect */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              maskImage: "radial-gradient(85% 100% at 50% 100%, white, transparent 72.5%)",
              WebkitMaskImage: "radial-gradient(85% 100% at 50% 100%, white, transparent 72.5%)",
            }}
          >
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-gray-100/50 to-transparent" />
          </div>

          {/* Copyright */}
          <p className="mr-auto text-gray-600">
            &copy; {currentYear} Clerk, Inc.
          </p>

          {/* Social Links */}
          <ul role="list" className="flex gap-5 text-gray-600">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  aria-label={social.label}
                  className="block hover:text-gray-950 transition-colors"
                  href={social.href}
                >
                  <SocialIcon icon={social.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
