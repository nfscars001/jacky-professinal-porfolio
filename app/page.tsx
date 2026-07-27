import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { CapabilityGroups } from "@/components/home/capability-groups";
import { CareerJourney } from "@/components/home/career-journey";
import { AboutPreview } from "@/components/home/about-preview";
import { ContactCTA } from "@/components/home/contact-cta";

export const metadata: Metadata = generatePageMetadata({
  title: "Jacky Ho — Product Designer & Creative Technologist",
  description:
    "Toronto-based product designer and creative technologist working across AI platforms, digital tools, and connected products.",
  path: "/",
});

/**
 * Homepage composite.
 * All content is server-rendered and visible without JavaScript (§14).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <CapabilityGroups />
      <CareerJourney />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
