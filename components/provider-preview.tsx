import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export function ProviderPreview() {
  const providers = [
    {
      name: "BitcoinIRA",
      rating: 4.5,
      minInvestment: "$3,000",
      fees: "1% + trading fees",
      bestFor: "Active traders",
      highlight: "Most cryptocurrencies",
    },
    {
      name: "iTrustCapital",
      rating: 4.8,
      minInvestment: "$1,000",
      fees: "1% (lowest fees)",
      bestFor: "Beginners",
      highlight: "Lowest fees",
    },
    {
      name: "BitIRA",
      rating: 4.3,
      minInvestment: "$20,000",
      fees: "Varies",
      bestFor: "High-net-worth",
      highlight: "Maximum security",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Bitcoin IRA Providers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare the leading platforms for cryptocurrency retirement investing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {providers.map((provider, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{provider.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{provider.rating}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Minimum:</span>
                  <span className="font-medium">{provider.minInvestment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Fee:</span>
                  <span className="font-medium">{provider.fees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Best For:</span>
                  <span className="font-medium">{provider.bestFor}</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <span className="text-blue-700 font-medium text-sm">{provider.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/comparison" className="cta-primary">
            See Full Comparison
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
