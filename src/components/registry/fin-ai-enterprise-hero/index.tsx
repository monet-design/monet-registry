"use client";

import { motion } from "motion/react";

// Types
interface FinAiEnterpriseHeroProps {
  headline?: {
    line1: string;
    line2: string;
  };
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Logo Components
function ShopifyLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 292" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34z" fill="#95BF46"/>
      <path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357" fill="#5E8E3E"/>
      <path d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338" fill="#FFF"/>
    </svg>
  );
}

function JiraLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jira-gradient-1" x1="99%" y1="23%" x2="35%" y2="75%">
          <stop offset="18%" stopColor="#0052CC"/>
          <stop offset="100%" stopColor="#2684FF"/>
        </linearGradient>
        <linearGradient id="jira-gradient-2" x1="13%" y1="82%" x2="62%" y2="44%">
          <stop offset="18%" stopColor="#0052CC"/>
          <stop offset="100%" stopColor="#2684FF"/>
        </linearGradient>
      </defs>
      <path d="M244.658 0H121.707a55.502 55.502 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.466V11.334A11.334 11.334 0 0 0 244.658 0z" fill="#2684FF"/>
      <path d="M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.466h22.649v21.868c.02 30.625 24.841 55.446 55.466 55.466V72.596a11.334 11.334 0 0 0-10.631-11.334z" fill="url(#jira-gradient-1)"/>
      <path d="M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.868c.02 30.597 24.798 55.408 55.378 55.466V133.823a11.334 11.334 0 0 0-10.649-11.334z" fill="url(#jira-gradient-2)"/>
    </svg>
  );
}

function ZendeskLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 199" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M119.059 0v145.727L0 199V52.576L119.059 0z" fill="#03363D"/>
      <path d="M119.059 52.576H0l119.059 93.15V52.577z" fill="#03363D"/>
      <path d="M136.941 199V52.576L256 0v145.727L136.941 199z" fill="#03363D"/>
      <path d="M136.941 145.727H256L136.94 52.576v93.151z" fill="#03363D"/>
    </svg>
  );
}

function SalesforceLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M106.5 19.5c8.2-8.5 19.6-13.8 32.2-13.8 16.8 0 31.4 9.3 39.2 23.2 6.8-3 14.3-4.7 22.2-4.7 30.2 0 54.8 24.7 54.8 55.2 0 30.5-24.5 55.2-54.8 55.2a54.4 54.4 0 0 1-10.8-1.1c-6.9 12.2-19.9 20.5-35 20.5-6.3 0-12.2-1.4-17.5-4-7 16.4-23.2 27.8-42.1 27.8-19.7 0-36.4-12.4-42.9-29.9-2.8.6-5.7.9-8.7.9-23.8 0-43.1-19.6-43.1-43.8 0-15.9 8.5-29.7 21.2-37.1-2.6-6-4-12.6-4-19.6C17.2 22.2 38.9.1 66.4.1c16 0 30.2 7.6 39.1 19.4" fill="#00A1E0"/>
    </svg>
  );
}

function StripeLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 214" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138-33.85 0-54.33 28.73-54.33 64.854 0 42.808 24.179 64.426 58.88 64.426 16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658zm-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756 8.675 0 17.92 6.685 17.92 22.756h-36.694zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96 25.458 0 48.64-20.48 48.64-65.564-.142-41.245-23.609-63.716-48.498-63.716zm-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968 12.942 0 21.902 14.506 21.902 33.137 0 19.058-8.818 33.28-21.902 33.28zM241.493 36.551l35.698-7.68V0l-35.698 7.538v29.013zm0 10.809h35.698v124.444h-35.698V47.36zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524zm-71.112-41.386l-34.702 7.395-.142 113.92c0 21.049 15.787 36.551 36.836 36.551 11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022l.142-30.862zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68 10.808 0 24.463 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92 0 6.541-5.688 8.675-13.653 8.675-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.107 38.827 8.107 29.582 0 49.92-14.648 49.92-40.106-.142-42.382-54.329-34.845-54.329-50.775z"/>
    </svg>
  );
}

function GitHubLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 98 96" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
    </svg>
  );
}

function SnowflakeLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M128 0l14.72 50.62 36.72-36.72 6.16 50.78 50.78 6.16-36.72 36.72L256 128l-50.62 14.72 36.72 36.72-50.78 6.16-6.16 50.78-36.72-36.72L128 256l-14.72-50.62-36.72 36.72-6.16-50.78-50.78-6.16 36.72-36.72L0 128l50.62-14.72-36.72-36.72 50.78-6.16 6.16-50.78 36.72 36.72L128 0z" fill="#29B5E8"/>
      <circle cx="128" cy="128" r="44" fill="#29B5E8"/>
    </svg>
  );
}

function StatuspageLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="32" fill="#0052CC"/>
      <path d="M64 176V80l48 48v48H64zm80 0V128l48 48H144zm-32-48v48H80l32-48v0zm80 48h-32l32-48v48z" fill="white"/>
    </svg>
  );
}

// Fin Brand Logo
function FinLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L20 8L16 12L12 8L16 4Z" fill="#FF7847"/>
        <path d="M8 12L12 16L8 20L4 16L8 12Z" fill="#FF7847"/>
        <path d="M24 12L28 16L24 20L20 16L24 12Z" fill="#FF7847"/>
        <path d="M16 20L20 24L16 28L12 24L16 20Z" fill="#FF7847"/>
      </svg>
      <span className="text-3xl font-semibold">
        <span className="text-[#FF7847]">Fin</span>
      </span>
    </div>
  );
}

// Grid Background Component
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}

// Integration Card Component
function IntegrationCard({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute bg-[#0D1117]/80 border border-white/[0.08] rounded-lg flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Category Label Component
function CategoryLabelTag({
  text,
  className = "",
  delay = 0
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute text-[10px] tracking-[0.15em] text-white/40 font-medium uppercase ${className}`}
    >
      {text}
    </motion.div>
  );
}

// Main Component
export default function FinAiEnterpriseHero({
  headline = {
    line1: "The AI Agent built for",
    line2: "enterprise scale"
  },
  description = "Fin is the best-performing AI Agent for enterprise customer service—designed to improve the customer experience at every touchpoint. Backed by 6,000+ AI deployments, every implementation is tailored to your strategy, your systems, and supported by a team committed to your long-term success.",
  primaryButtonText = "View demo",
  secondaryButtonText = "Contact sales",
  onPrimaryClick,
  onSecondaryClick,
}: FinAiEnterpriseHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#0B0E13] overflow-hidden">
      {/* Background Grid */}
      <GridBackground />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Hero Text Section */}
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-normal tracking-tight"
          >
            <span className="text-white">{headline.line1}</span>
            <br />
            <span className="text-[#C87941] italic font-serif">{headline.line2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-[15px] leading-relaxed text-white/60 max-w-md"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex items-center gap-3"
          >
            <button
              onClick={onPrimaryClick}
              className="px-5 py-2.5 bg-white text-[#0B0E13] text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
            >
              {primaryButtonText}
            </button>
            <button
              onClick={onSecondaryClick}
              className="px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/15 transition-colors"
            >
              {secondaryButtonText}
            </button>
          </motion.div>
        </div>

        {/* Integration Map Section */}
        <div className="relative mt-16 h-[500px] md:h-[550px]">
          {/* Category Labels */}
          <CategoryLabelTag
            text="DATA WAREHOUSES &"
            className="left-[5%] top-[28%] hidden md:block"
            delay={0.3}
          />
          <CategoryLabelTag
            text="ANALYTICS PLATFORMS"
            className="left-[5%] top-[32%] hidden md:block"
            delay={0.35}
          />
          <CategoryLabelTag
            text="PAYMENT & BILLING SYSTEMS"
            className="left-[2%] top-[52%] hidden md:block"
            delay={0.4}
          />
          <CategoryLabelTag
            text="SECURITY &"
            className="left-[18%] top-[68%] hidden md:block"
            delay={0.45}
          />
          <CategoryLabelTag
            text="COMPLIANT"
            className="left-[18%] top-[72%] hidden md:block"
            delay={0.5}
          />
          <CategoryLabelTag
            text="SYSTEMS"
            className="left-[18%] top-[76%] hidden md:block"
            delay={0.55}
          />
          <CategoryLabelTag
            text="ORDER MANAGEMENT SYSTEMS"
            className="left-[42%] top-[18%] hidden md:block"
            delay={0.4}
          />
          <CategoryLabelTag
            text="CUSTOM OR"
            className="left-[32%] top-[68%] hidden md:block"
            delay={0.45}
          />
          <CategoryLabelTag
            text="INTERNAL SYSTEMS"
            className="left-[32%] top-[72%] hidden md:block"
            delay={0.5}
          />
          <CategoryLabelTag
            text="INTERNAL CRMS / CDPS"
            className="left-[48%] top-[88%] hidden md:block"
            delay={0.55}
          />
          <CategoryLabelTag
            text="INTERNAL ADMIN TOOLS"
            className="right-[8%] top-[38%] hidden md:block"
            delay={0.45}
          />
          <CategoryLabelTag
            text="CUSTOM TICKETING &"
            className="right-[10%] top-[58%] hidden md:block"
            delay={0.5}
          />
          <CategoryLabelTag
            text="ESCALATION SYSTEMS"
            className="right-[10%] top-[62%] hidden md:block"
            delay={0.55}
          />

          {/* Integration Cards - Left Section */}
          <IntegrationCard className="left-[8%] top-[8%] w-24 h-28 md:w-28 md:h-32" delay={0.3}>
            <div className="w-full h-full border border-dashed border-white/10 rounded-lg" />
          </IntegrationCard>

          <IntegrationCard className="left-[20%] top-[0%] w-16 h-20 md:w-20 md:h-24" delay={0.35}>
            <div className="w-full h-full border border-dashed border-white/10 rounded-lg" />
          </IntegrationCard>

          {/* Snowflake */}
          <IntegrationCard className="left-[2%] top-[62%] w-28 h-10 md:w-32 md:h-12 gap-2" delay={0.4}>
            <SnowflakeLogo className="w-5 h-5" />
            <span className="text-white/80 text-xs font-medium">snowflake</span>
          </IntegrationCard>

          {/* Jira */}
          <IntegrationCard className="left-[28%] top-[22%] w-24 h-10 md:w-28 md:h-12 gap-2" delay={0.45}>
            <JiraLogo className="w-5 h-5" />
            <span className="text-white/80 text-sm font-medium">Jira</span>
          </IntegrationCard>

          {/* Center Fin Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute left-1/2 top-[38%] -translate-x-1/2 w-40 h-32 md:w-48 md:h-40 bg-[#0D1117] border border-white/[0.12] rounded-xl flex items-center justify-center shadow-2xl"
          >
            <FinLogo />
          </motion.div>

          {/* Shopify */}
          <IntegrationCard className="right-[22%] top-[2%] w-28 h-10 md:w-32 md:h-12 gap-2" delay={0.35}>
            <ShopifyLogo className="w-5 h-5" />
            <span className="text-white/80 text-sm font-medium">shopify</span>
          </IntegrationCard>

          {/* Statuspage */}
          <IntegrationCard className="right-[8%] top-[16%] w-28 h-10 md:w-32 md:h-12 gap-2" delay={0.4}>
            <StatuspageLogo className="w-4 h-4" />
            <span className="text-white/80 text-xs font-medium">Statuspage</span>
          </IntegrationCard>

          {/* Zendesk */}
          <IntegrationCard className="right-[15%] top-[32%] w-28 h-10 md:w-32 md:h-12 gap-2" delay={0.45}>
            <ZendeskLogo className="w-4 h-4" />
            <span className="text-white/80 text-sm font-medium">endesk</span>
          </IntegrationCard>

          {/* Salesforce */}
          <IntegrationCard className="left-[42%] top-[70%] w-28 h-10 md:w-32 md:h-12 gap-2" delay={0.55}>
            <SalesforceLogo className="w-6 h-6" />
            <span className="text-white/60 text-xs">salesforce</span>
          </IntegrationCard>

          {/* GitHub */}
          <IntegrationCard className="left-[35%] top-[85%] w-28 h-10 md:w-32 md:h-12 gap-2" delay={0.6}>
            <GitHubLogo className="w-5 h-5 text-white/80" />
            <span className="text-white/80 text-sm font-medium">GitHub</span>
          </IntegrationCard>

          {/* Stripe */}
          <IntegrationCard className="right-[5%] top-[68%] w-28 h-16 md:w-32 md:h-20" delay={0.5}>
            <span className="text-white text-xl font-bold tracking-tight">stripe</span>
          </IntegrationCard>

          {/* Additional placeholder cards for visual balance */}
          <IntegrationCard className="right-[25%] top-[50%] w-20 h-24 md:w-24 md:h-28" delay={0.55}>
            <div className="w-full h-full border border-dashed border-white/10 rounded-lg" />
          </IntegrationCard>

          <IntegrationCard className="left-[15%] top-[45%] w-24 h-16 md:w-28 md:h-20" delay={0.5}>
            <div className="w-full h-full border border-dashed border-white/10 rounded-lg" />
          </IntegrationCard>

          <IntegrationCard className="right-[2%] top-[45%] w-20 h-24 md:w-24 md:h-28" delay={0.55}>
            <div className="w-full h-full border border-dashed border-white/10 rounded-lg" />
          </IntegrationCard>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
}
