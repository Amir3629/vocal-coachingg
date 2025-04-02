"use client"

import { useEffect, useState } from "react"
import ClientProvider from './client-provider'
import Footer from './footer'
import CookieConsent from './cookie-consent'

interface RootClientProps {
  children: React.ReactNode
  className?: string
}

export default function RootClient({ children, className }: RootClientProps) {
  const [mounted, setMounted] = useState(false)

  // Use effect to handle any client-side operations
  useEffect(() => {
    setMounted(true)
  }, [])

  // Only render children after client-side mount to prevent hydration mismatch
  if (!mounted) {
    return <div className={className} style={{ visibility: 'hidden' }}></div>
  }

  return (
    <ClientProvider>
      <div className={className}>
        {children}
        <Footer />
        <CookieConsent />
      </div>
    </ClientProvider>
  )
} 