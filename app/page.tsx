import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { ProviderPreview } from "@/components/provider-preview"
import { Newsletter } from "@/components/newsletter"
import { TrustIndicators } from "@/components/trust-indicators"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Benefits />
      <ProviderPreview />
      <Newsletter />
    </>
  )
}
