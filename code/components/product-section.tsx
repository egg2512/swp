'use client'

import { useEffect, useState } from 'react'

export default function ProductSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('san-pham')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const benefits = [
    { icon: '✔', text: 'Vegan', highlight: true },
    { icon: '✔', text: 'Gentle', highlight: true },
    { icon: '✔', text: 'Clean – Balance – Soothe', highlight: true },
    { icon: '✔', text: 'Essence from fresh Vietnamese bitter gourd', highlight: true },
  ]

  return (
    <section id="san-pham" className="relative py-20 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{
          backgroundImage: 'url(/s1.jpg)',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8 shadow-xl max-w-4xl mx-auto text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
              ✨ Cocoon Bitter Gourd Makeup Remover
            </h2>
            <p className="text-2xl text-primary font-semibold mb-2">
              Purifying Essence from Vietnam
            </p>
            <div className="h-1 w-24 bg-white mx-auto" />
          </div>
        </div>

        {/* Content Grid */}
        <div className={`grid md:grid-cols-2 gap-12 items-center mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              <img 
                src="/s4.jpg"
                alt="Cocoon Bitter Gourd Makeup Remover"
                className="w-[320px] md:w-[520px] lg:w-[640px] h-auto relative z-10 rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-xl mb-8">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-white/90">
                  And from the journey of fresh bitter gourds, Cocoon Bitter Gourd Makeup Remover is born — a gentle cleansing solution that balances and cools the skin, bringing a sense of purity from Vietnamese nature.
                </p>

                <p className="text-lg leading-relaxed text-white/90">
                  Each bottle is not just a skin care product, but a complete story: from the meticulous hands of farmers, to the closed factory with modern processes, preserving the original essence of bitter gourd.
                </p>

                <p className="text-lg leading-relaxed text-white/90">
                  The product embodies Cocoon's philosophy of pure vegan beauty and sustainability — accompanying you in a gentle, natural, and pure skin care journey.
                </p>
              </div>
            </div>

            {/* Benefits Pills */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-xl">
              <div className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <span className="text-primary font-bold text-lg">{benefit.icon}</span>
                    <span className={benefit.highlight ? 'font-semibold text-white' : 'text-white/80'}>
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
