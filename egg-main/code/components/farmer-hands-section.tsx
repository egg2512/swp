'use client'

import { useEffect, useState } from 'react'

export default function FarmerHandsSection() {
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

    const element = document.getElementById('cham-soc')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="cham-soc" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/s1.jpg)',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Content Grid - Image First on Desktop */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Image Side with Overlay Card */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Main Image */}
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                <img 
                  src="/s3.2.jpg"
                  alt="Farmers harvesting bitter gourd by hand"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-6 rounded-2xl shadow-2xl">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-sm font-medium">Handcrafted</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Eyebrow */}
        <div className={`text-center mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-6 py-2 bg-amber-100/80 text-amber-900 rounded-full text-sm font-semibold tracking-wide border border-amber-200">
            INGREDIENTS FROM VIETNAMESE FARMS
          </span>
        </div>
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-10 shadow-xl max-w-4xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight text-center">
                  <span className="block">Farmer's Hands:</span>
                  <span className="block text-primary">Cherishing from Root to Tip</span>
                </h2>
                <p className="text-xl text-white/70 text-center mb-6 leading-relaxed">
                  At Cocoon, we believe that sustainable beauty starts from the smallest things.
                </p>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-white/80">
                    In the early morning rain, the plump green bitter gourds hang ripe under the gentle sunlight. For a long time, bitter gourd has been close to Vietnamese people and many tropical regions – a humble fruit but containing a treasure: amino acids, mucins, minerals, vitamins B and C.
                  </p>

                  <p className="text-lg leading-relaxed text-white/80">
                    Modern science has also found alunsenol and multiflorenol – two precious triterpenes that help with anti-oxidation and skin protection. In traditional medicine, bitter gourd is considered a cooling herb, reducing inflammation and supporting antibacterial properties.
                  </p>

                  <p className="text-lg leading-relaxed text-white/80">
                    When the fruit reaches perfect maturity, farmers gently harvest and immediately transport to the factory. There, the closed extraction process helps preserve the natural essence of bitter gourd. Each drop of essence is combined with gentle vegan ingredients to create a cleansing – cooling – soothing – balancing product for the skin.
                  </p>

                  <p className="text-lg leading-relaxed text-white/80">
                    This is not just cosmetics. This is the complete story: from the meticulous hands of farmers, to the pure green essence. It is Cocoon's way of preserving Vietnamese nature's value and bringing pure vegan beauty to everyone.
                  </p>
                </div>
              </div>
           
            </div>

            {/* Feature Grid */}
            <div className={`grid gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="group relative p-6 bg-black/20 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    🌱
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-white">Sustainable farming</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Minimize environmental impact, preserve land for future generations</p>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 bg-black/20 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    👋
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-white">Hand-harvest each fruit</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Careful selection at perfect ripeness, preserving all nutrients</p>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 bg-black/20 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    ❤️
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-white">Dedication from local farmers</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Decades of experience passed down through generations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
