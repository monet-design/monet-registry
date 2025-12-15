"use client";

import ChannelIoHeader0 from "@/components/registry/channel-io-header-0";
import ChannelIoHero1 from "@/components/registry/channel-io-hero-1";
import ChannelIoLogoCloud2 from "@/components/registry/channel-io-logo-cloud-2";
import ChannelIoFeature3 from "@/components/registry/channel-io-feature-3";
import ChannelIoFeature4 from "@/components/registry/channel-io-feature-4";
import ChannelIoFeature5 from "@/components/registry/channel-io-feature-5";
import ChannelIoCta6 from "@/components/registry/channel-io-cta-6";
import ChannelIoFooter7 from "@/components/registry/channel-io-footer-7";

interface ChannelIoLandingProps {
  mode?: "light" | "dark";
}

/**
 * channel-io-landing - Full page component
 *
 * This page combines the following sections:
 * - channel-io-header-0
 * - channel-io-hero-1
 * - channel-io-logo-cloud-2
 * - channel-io-feature-3
 * - channel-io-feature-4
 * - channel-io-feature-5
 * - channel-io-cta-6
 * - channel-io-footer-7
 */
export default function ChannelIoLanding({ mode = "light" }: ChannelIoLandingProps) {
  return (
    <div className="w-full min-h-screen">
        <ChannelIoHeader0 mode={mode} />
        <ChannelIoHero1 mode={mode} />
        <ChannelIoLogoCloud2 mode={mode} />
        <ChannelIoFeature3 mode={mode} />
        <ChannelIoFeature4 mode={mode} />
        <ChannelIoFeature5 mode={mode} />
        <ChannelIoCta6 mode={mode} />
        <ChannelIoFooter7 mode={mode} />
    </div>
  );
}
