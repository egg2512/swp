'use client'

import { useEffect, useState } from 'react'

export default function IngredientSourceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    { src: '/s2.1.jpg', alt: 'Bitter gourd makeup remover with water effect' },
    { src: '/s2.2.jpg', alt: 'Makeup remover usage demo' },
    { src: '/s2.3.jpg', alt: 'ELLE Beauty Awards 2025' },
    { src: '/s2.4.jpg', alt: 'Product texture' },
    { src: '/s2.5.jpg', alt: 'How to use the product' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('nguon-goc')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible, images.length])

  return (
    <section id="nguon-goc" className="relative py-32 px-6 md:px-12 overflow-hidden">
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
        {/* Eyebrow */}
        <div className={`text-center mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-6 py-2 bg-amber-100/80 text-amber-900 rounded-full text-sm font-semibold tracking-wide border border-amber-200">
            FEATURED PRODUCT
          </span>
        </div>

        {/* Header - With background box */}
        <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              <span>Bitter Gourd Makeup Remover</span>
            </h2>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              "Vietnamese Soul in a Bottle"
            </p>
          </div>
        </div>

        {/* Main Content - Image Carousel Style */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Interactive Image Gallery */}
          <div className="relative">
            <div className="relative h-[600px] md:h-[700px] overflow-hidden">
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    idx === currentImage 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentImage 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-primary/20 hover:bg-primary/40'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                Deep Clean - <br />
                <span className="text-primary">Naturally Gentle</span>
              </h3>
              <p className="text-lg leading-relaxed text-white/80 mb-6">
                Oily and acne-prone skin is sensitive and needs a suitable makeup remover. With Micellar technology, bitter gourd makeup remover effectively cleans makeup, dirt, and excess oil, leaving skin completely clean and smooth.
              </p>

              {/* Feature Pills */}
              <ul className="space-y-4">
                {[
                  "Deeply cleans makeup, dirt, and excess oil from the skin surface.",
                  "Gentle and breathable, does not clog pores.",
                  "Controls excess oil, supports acne skin care.",
                  "Clear, colorless liquid.",
                  "Subtle tea tree oil scent.",
                  "Suitable for skin that needs quick makeup removal, oily skin, frequent makeup users who need a suitable makeup remover."
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <p className="text-base text-white/80">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
