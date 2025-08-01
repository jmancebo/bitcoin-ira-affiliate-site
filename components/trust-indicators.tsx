import { Shield, Users, Award, TrendingUp } from "lucide-react"

export function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      title: "SEC Compliant",
      description: "All recommended providers are fully regulated",
    },
    {
      icon: Users,
      title: "50,000+ Investors",
      description: "Join thousands of satisfied customers",
    },
    {
      icon: Award,
      title: "Expert Reviewed",
      description: "Thoroughly vetted by financial professionals",
    },
    {
      icon: TrendingUp,
      title: "$2B+ Managed",
      description: "Billions in cryptocurrency assets under management",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <indicator.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{indicator.title}</h3>
              <p className="text-gray-600">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
