import { TrendingUp, PieChart, Shield } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Tax-Free Growth",
      description:
        "Your Bitcoin investments grow tax-free in a Roth IRA, or tax-deferred in a Traditional IRA. Maximize your retirement savings potential.",
    },
    {
      icon: PieChart,
      title: "Portfolio Diversification",
      description:
        "Add cryptocurrency to your retirement portfolio to reduce correlation with traditional assets and potentially enhance returns.",
    },
    {
      icon: Shield,
      title: "Inflation Protection",
      description:
        "Bitcoin has historically served as a hedge against inflation, helping preserve your purchasing power over time.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose a Bitcoin IRA?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages of adding cryptocurrency to your retirement strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <benefit.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
