import { Check, X, Star, ExternalLink } from "lucide-react"

export function ComparisonTable() {
  const providers = [
    {
      name: "BitcoinIRA",
      logo: "/placeholder.svg?height=60&width=120",
      rating: 4.5,
      minimum: "$3,000",
      annualFee: "1% + trading fees",
      cryptocurrencies: "60+ coins",
      bestFor: "Active traders",
      features: [
        "Largest selection of cryptocurrencies",
        "24/7 customer support",
        "Advanced trading tools",
        "Mobile app available",
        "Educational resources",
      ],
      pros: ["Most cryptocurrency options", "Excellent customer service", "User-friendly platform"],
      cons: ["Higher fees than competitors", "Higher minimum investment"],
      ctaText: "Start with BitcoinIRA",
      ctaClass: "cta-primary",
      highlight: false,
    },
    {
      name: "iTrustCapital",
      logo: "/placeholder.svg?height=60&width=120",
      rating: 4.8,
      minimum: "$1,000",
      annualFee: "1% (lowest fees)",
      cryptocurrencies: "25+ coins",
      bestFor: "Beginners, cost-conscious",
      features: [
        "Lowest fees in the industry",
        "Easy-to-use interface",
        "Gold and silver options",
        "No setup fees",
        "Quick account opening",
      ],
      pros: ["Lowest minimum investment", "Competitive fee structure", "Precious metals available"],
      cons: ["Limited cryptocurrency selection", "Fewer advanced features"],
      ctaText: "Choose iTrustCapital",
      ctaClass: "cta-green",
      highlight: true,
    },
    {
      name: "BitIRA",
      logo: "/placeholder.svg?height=60&width=120",
      rating: 4.3,
      minimum: "$20,000",
      annualFee: "Varies",
      cryptocurrencies: "20+ coins",
      bestFor: "High-net-worth, maximum security",
      features: [
        "Multi-signature cold storage",
        "Insurance coverage",
        "Dedicated account managers",
        "Institutional-grade security",
        "White-glove service",
      ],
      pros: ["Highest security standards", "Personalized service", "Insurance protection"],
      cons: ["Very high minimum investment", "Complex fee structure"],
      ctaText: "Learn More",
      ctaClass: "cta-secondary",
      highlight: false,
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Cards */}
        <div className="lg:hidden space-y-8">
          {providers.map((provider, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 ${provider.highlight ? "ring-2 ring-green-500" : ""}`}
            >
              {provider.highlight && (
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{provider.name}</h3>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">{provider.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-gray-600 text-sm">Minimum</span>
                  <p className="font-semibold">{provider.minimum}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Annual Fee</span>
                  <p className="font-semibold">{provider.annualFee}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Cryptocurrencies</span>
                  <p className="font-semibold">{provider.cryptocurrencies}</p>
                </div>
                <div>
                  <span className="text-gray-600 text-sm">Best For</span>
                  <p className="font-semibold text-sm">{provider.bestFor}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {provider.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full ${provider.ctaClass}`}>
                {provider.ctaText}
                <ExternalLink className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Provider</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rating</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Minimum</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Annual Fee</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cryptocurrencies</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {providers.map((provider, index) => (
                    <tr key={index} className={provider.highlight ? "bg-green-50" : "hover:bg-gray-50"}>
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <div>
                            <div className="text-lg font-semibold text-gray-900">{provider.name}</div>
                            {provider.highlight && (
                              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mt-1">
                                Most Popular
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="ml-1 text-gray-900 font-medium">{provider.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 text-gray-900 font-medium">{provider.minimum}</td>
                      <td className="px-6 py-6 text-gray-900 font-medium">{provider.annualFee}</td>
                      <td className="px-6 py-6 text-gray-900 font-medium">{provider.cryptocurrencies}</td>
                      <td className="px-6 py-6 text-gray-900 font-medium">{provider.bestFor}</td>
                      <td className="px-6 py-6 text-center">
                        <button className={provider.ctaClass}>
                          {provider.ctaText}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Comparison */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {providers.map((provider, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 ${provider.highlight ? "ring-2 ring-green-500" : ""}`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{provider.name}</h3>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Pros</h4>
                  <ul className="space-y-2">
                    {provider.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Cons</h4>
                  <ul className="space-y-2">
                    {provider.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full ${provider.ctaClass}`}>
                  {provider.ctaText}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
