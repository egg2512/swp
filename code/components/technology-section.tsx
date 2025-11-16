'use client'

import { useEffect, useState } from 'react'

export default function TechnologySection() {
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

    const element = document.getElementById('cong-nghe')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: '🧪',
      title: 'Advanced Extraction Technology',
      description: 'Extract precious essence from bitter gourd: vitamins, minerals and compounds that clean and soothe the skin'
    },
    {
      icon: '🏭',
      title: 'Closed CGMP Process',
      description: 'Meets CGMP ASEAN standards, sterile process, ensuring purity and safety'
    },
    {
      icon: '💧',
      title: 'Highest Purity',
      description: 'Each drop of essence meets the highest standards, ready to combine with gentle ingredients for the final product'
    },
  ]

  return (
    <section id="cong-nghe" className="relative py-20 px-6 md:px-12 overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="block">🌿 MODERN TECHNOLOGY</span>
              <span className="block">PRESERVES NATURAL ESSENCE</span>
            </h2>
          </div>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />

          <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-10 shadow-xl max-w-4xl mx-auto">
            <div className="text-lg text-white/80 space-y-4">
              <p>
                When the fresh bitter gourds arrive at Cocoon's CGMP ASEAN standard factory, their journey enters the most important phase: essence extraction.
              </p>

              <p>
                Here, bitter gourds undergo a strict process with modern technology to extract the full range of vitamins, minerals, and precious compounds that can clean, soothe, and balance the skin.
              </p>

              <p>
                Every step in the process is closed and sterile, ensuring each drop of essence maintains the highest purity. The obtained essences are combined with gentle vegan ingredients to create Cocoon products that are gentle, safe for all skin types.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + idx * 150}ms` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className={`text-2xl font-bold mb-3 text-white`}>{feature.title}</h3>
              <p className={`text-white leading-relaxed`}>{feature.description}</p>
              <div className={`mt-6 pt-6 border-t border-white/20`}>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span>✓ Scientifically Proven</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight removed per request */}
      </div>
    </section>
  )
}
