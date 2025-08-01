import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Secure Your Retirement with <span className="gradient-text">Bitcoin IRAs</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Diversify your portfolio and protect against inflation with tax-advantaged cryptocurrency investing
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/comparison" className="cta-primary">
              Compare Providers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="cta-secondary">
              <Download className="mr-2 h-5 w-5" />
              Download Free Guide
            </button>
          </div>

          <div className="trust-badge">
            <span className="font-semibold">Trusted by 50,000+ investors</span>
          </div>
        </div>
      </div>
    </section>
  )
}
