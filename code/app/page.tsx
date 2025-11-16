import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import IngredientSourceSection from '@/components/ingredient-source-section'
import FarmerHandsSection from '@/components/farmer-hands-section'
import JourneySection from '@/components/journey-section'
import TechnologySection from '@/components/technology-section'
import ProductSection from '@/components/product-section'
import CtaSection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-hidden">
        <HeroSection />
        <IngredientSourceSection />
        <FarmerHandsSection />
        <JourneySection />
        <TechnologySection />
        <section className="relative py-16 px-6 md:px-12 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'url(/s1.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-center">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8 shadow-xl max-w-4xl mx-auto text-center mb-6">
                <span className="text-4xl md:text-5xl font-bold text-white uppercase">Certificates</span>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-80 h-60 border border-white rounded flex items-center justify-center bg-white/30 backdrop-blur-sm">
                  <img src="/logo2.1.jpg" alt="Logo 1" className="max-w-full max-h-full" />
                </div>
                <div className="w-80 h-60 border border-white rounded flex items-center justify-center bg-white/30 backdrop-blur-sm">
                  <img src="/logo2.2.jpg" alt="Logo 2" className="max-w-full max-h-full" />
                </div>
                <div className="w-80 h-60 border border-white rounded flex items-center justify-center bg-white/30 backdrop-blur-sm">
                  <img src="/logo2.3.jpg" alt="Logo 3" className="max-w-full max-h-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
