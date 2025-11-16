'use client'

import { useEffect, useState } from 'react'

export default function CtaSection() {
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

    const element = document.getElementById('lien-he')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="lien-he" className="py-20 px-6 md:px-12 text-primary-foreground relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{
          backgroundImage: 'url(/s1.jpg)',
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className={`max-w-4xl mx-auto relative z-10 text-center bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8 shadow-xl transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug">
          Discover Bitter Gourd Makeup Remover
        </h2>

        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-green-500">
          Every drop of Cocoon — gentle cleansing, preserving the essence of Vietnamese bitter gourd. Experience the difference from nature.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#san-pham"
            className="px-10 py-4 bg-primary-foreground text-primary rounded-full font-semibold text-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Discover Product
          </a>
          <a
            href="#nguon-goc"
            className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary-foreground hover:text-primary transition-all cursor-pointer"
          >
            View Journey
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span>100% Vegan</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Scientifically Proven</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇻🇳</span>
            <span>Vietnamese Origin</span>
          </div>
        </div>
      </div>
    </section>
  )
}
