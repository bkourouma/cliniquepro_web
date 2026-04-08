import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { BenefitsStrip } from "@/components/sections/benefits-strip";
import { FeaturesSection } from "@/components/sections/features-section";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import {
  generateSoftwareApplicationJsonLd,
  generateFaqJsonLd,
} from "@/lib/structured-data";
import { FAQ_ITEMS } from "@/lib/constants";

export default function HomePage() {
  const softwareJsonLd = generateSoftwareApplicationJsonLd();
  const faqJsonLd = generateFaqJsonLd(FAQ_ITEMS);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SiteHeader />

      <main>
        <HeroSection />
        <BenefitsStrip />

        {/* Spacer for benefits overlap */}
        <div className="h-24" />

        <FeaturesSection />
        <BeforeAfterSection />
        <PricingSection />
        <SocialProofSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </>
  );
}
