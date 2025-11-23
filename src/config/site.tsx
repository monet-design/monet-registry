import { z } from "zod";
import siteData from "./site-data.json";

const siteConfigSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  getStartedUrl: z.string().url(),
  ogImage: z.string().url(),
  shortDescription: z.string(),
  description: z.string(),
  links: z.object({
    twitter: z.string().url(),
    github: z.string().url(),
    email: z.string().email(),
  }),
  pricing: z.object({
    pro: z.string().url(),
    team: z.string().url(),
  }),
  stats: z.object({
    figma: z.number(),
    github: z.number(),
    cli: z.number(),
    total: z.string(),
    updated: z.string(),
    sections: z.number(),
    illustrations: z.number(),
    animations: z.number(),
    appTemplates: z.number(),
    websiteTemplates: z.number(),
  }),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export function getSiteConfig(): SiteConfig {
  return siteConfigSchema.parse(siteData);
}

export const siteConfig = getSiteConfig();
