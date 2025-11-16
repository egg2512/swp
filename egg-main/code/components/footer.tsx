import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const productLinks = [
    { label: 'Bitter Gourd Makeup Remover', href: '#' },
    { label: 'Other Products', href: '#' },
    { label: 'Collections', href: '#' },
  ]

  const aboutLinks = [
    { label: 'About Cocoon', href: '#' },
    { label: 'Brand Story', href: '#' },
    { label: 'Sustainability Commitment', href: '#' },
    { label: 'Partners', href: '#' },
  ]

  const supportLinks = [
    { label: 'Contact', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Return Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
  ]

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; 2025 Cocoon Vietnam. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
